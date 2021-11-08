var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var _map;
function get_single_valued_header(headers, key) {
  const value = headers[key];
  if (Array.isArray(value)) {
    if (value.length === 0) {
      return void 0;
    }
    if (value.length > 1) {
      throw new Error(`Multiple headers provided for ${key}. Multiple may be provided only for set-cookie`);
    }
    return value[0];
  }
  return value;
}
function coalesce_to_error(err) {
  return err instanceof Error || err && err.name && err.message ? err : new Error(JSON.stringify(err));
}
function lowercase_keys(obj) {
  const clone = {};
  for (const key in obj) {
    clone[key.toLowerCase()] = obj[key];
  }
  return clone;
}
function error$1(body) {
  return {
    status: 500,
    body,
    headers: {}
  };
}
function is_string(s2) {
  return typeof s2 === "string" || s2 instanceof String;
}
function is_content_type_textual(content_type) {
  if (!content_type)
    return true;
  const [type] = content_type.split(";");
  return type === "text/plain" || type === "application/json" || type === "application/x-www-form-urlencoded" || type === "multipart/form-data";
}
async function render_endpoint(request, route, match) {
  const mod = await route.load();
  const handler = mod[request.method.toLowerCase().replace("delete", "del")];
  if (!handler) {
    return;
  }
  const params = route.params(match);
  const response = await handler({ ...request, params });
  const preface = `Invalid response from route ${request.path}`;
  if (!response) {
    return;
  }
  if (typeof response !== "object") {
    return error$1(`${preface}: expected an object, got ${typeof response}`);
  }
  let { status = 200, body, headers = {} } = response;
  headers = lowercase_keys(headers);
  const type = get_single_valued_header(headers, "content-type");
  const is_type_textual = is_content_type_textual(type);
  if (!is_type_textual && !(body instanceof Uint8Array || is_string(body))) {
    return error$1(`${preface}: body must be an instance of string or Uint8Array if content-type is not a supported textual content-type`);
  }
  let normalized_body;
  if ((typeof body === "object" || typeof body === "undefined") && !(body instanceof Uint8Array) && (!type || type.startsWith("application/json"))) {
    headers = { ...headers, "content-type": "application/json; charset=utf-8" };
    normalized_body = JSON.stringify(typeof body === "undefined" ? {} : body);
  } else {
    normalized_body = body;
  }
  return { status, body: normalized_body, headers };
}
var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$";
var unsafeChars = /[<>\b\f\n\r\t\0\u2028\u2029]/g;
var reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
var escaped$1 = {
  "<": "\\u003C",
  ">": "\\u003E",
  "/": "\\u002F",
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t",
  "\0": "\\0",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var objectProtoOwnPropertyNames = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function devalue(value) {
  var counts = new Map();
  function walk(thing) {
    if (typeof thing === "function") {
      throw new Error("Cannot stringify a function");
    }
    if (counts.has(thing)) {
      counts.set(thing, counts.get(thing) + 1);
      return;
    }
    counts.set(thing, 1);
    if (!isPrimitive(thing)) {
      var type = getType(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
        case "Date":
        case "RegExp":
          return;
        case "Array":
          thing.forEach(walk);
          break;
        case "Set":
        case "Map":
          Array.from(thing).forEach(walk);
          break;
        default:
          var proto = Object.getPrototypeOf(thing);
          if (proto !== Object.prototype && proto !== null && Object.getOwnPropertyNames(proto).sort().join("\0") !== objectProtoOwnPropertyNames) {
            throw new Error("Cannot stringify arbitrary non-POJOs");
          }
          if (Object.getOwnPropertySymbols(thing).length > 0) {
            throw new Error("Cannot stringify POJOs with symbolic keys");
          }
          Object.keys(thing).forEach(function(key) {
            return walk(thing[key]);
          });
      }
    }
  }
  walk(value);
  var names = new Map();
  Array.from(counts).filter(function(entry) {
    return entry[1] > 1;
  }).sort(function(a, b) {
    return b[1] - a[1];
  }).forEach(function(entry, i) {
    names.set(entry[0], getName(i));
  });
  function stringify(thing) {
    if (names.has(thing)) {
      return names.get(thing);
    }
    if (isPrimitive(thing)) {
      return stringifyPrimitive(thing);
    }
    var type = getType(thing);
    switch (type) {
      case "Number":
      case "String":
      case "Boolean":
        return "Object(" + stringify(thing.valueOf()) + ")";
      case "RegExp":
        return "new RegExp(" + stringifyString(thing.source) + ', "' + thing.flags + '")';
      case "Date":
        return "new Date(" + thing.getTime() + ")";
      case "Array":
        var members = thing.map(function(v, i) {
          return i in thing ? stringify(v) : "";
        });
        var tail = thing.length === 0 || thing.length - 1 in thing ? "" : ",";
        return "[" + members.join(",") + tail + "]";
      case "Set":
      case "Map":
        return "new " + type + "([" + Array.from(thing).map(stringify).join(",") + "])";
      default:
        var obj = "{" + Object.keys(thing).map(function(key) {
          return safeKey(key) + ":" + stringify(thing[key]);
        }).join(",") + "}";
        var proto = Object.getPrototypeOf(thing);
        if (proto === null) {
          return Object.keys(thing).length > 0 ? "Object.assign(Object.create(null)," + obj + ")" : "Object.create(null)";
        }
        return obj;
    }
  }
  var str = stringify(value);
  if (names.size) {
    var params_1 = [];
    var statements_1 = [];
    var values_1 = [];
    names.forEach(function(name, thing) {
      params_1.push(name);
      if (isPrimitive(thing)) {
        values_1.push(stringifyPrimitive(thing));
        return;
      }
      var type = getType(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          values_1.push("Object(" + stringify(thing.valueOf()) + ")");
          break;
        case "RegExp":
          values_1.push(thing.toString());
          break;
        case "Date":
          values_1.push("new Date(" + thing.getTime() + ")");
          break;
        case "Array":
          values_1.push("Array(" + thing.length + ")");
          thing.forEach(function(v, i) {
            statements_1.push(name + "[" + i + "]=" + stringify(v));
          });
          break;
        case "Set":
          values_1.push("new Set");
          statements_1.push(name + "." + Array.from(thing).map(function(v) {
            return "add(" + stringify(v) + ")";
          }).join("."));
          break;
        case "Map":
          values_1.push("new Map");
          statements_1.push(name + "." + Array.from(thing).map(function(_a) {
            var k = _a[0], v = _a[1];
            return "set(" + stringify(k) + ", " + stringify(v) + ")";
          }).join("."));
          break;
        default:
          values_1.push(Object.getPrototypeOf(thing) === null ? "Object.create(null)" : "{}");
          Object.keys(thing).forEach(function(key) {
            statements_1.push("" + name + safeProp(key) + "=" + stringify(thing[key]));
          });
      }
    });
    statements_1.push("return " + str);
    return "(function(" + params_1.join(",") + "){" + statements_1.join(";") + "}(" + values_1.join(",") + "))";
  } else {
    return str;
  }
}
function getName(num) {
  var name = "";
  do {
    name = chars[num % chars.length] + name;
    num = ~~(num / chars.length) - 1;
  } while (num >= 0);
  return reserved.test(name) ? name + "_" : name;
}
function isPrimitive(thing) {
  return Object(thing) !== thing;
}
function stringifyPrimitive(thing) {
  if (typeof thing === "string")
    return stringifyString(thing);
  if (thing === void 0)
    return "void 0";
  if (thing === 0 && 1 / thing < 0)
    return "-0";
  var str = String(thing);
  if (typeof thing === "number")
    return str.replace(/^(-)?0\./, "$1.");
  return str;
}
function getType(thing) {
  return Object.prototype.toString.call(thing).slice(8, -1);
}
function escapeUnsafeChar(c) {
  return escaped$1[c] || c;
}
function escapeUnsafeChars(str) {
  return str.replace(unsafeChars, escapeUnsafeChar);
}
function safeKey(key) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? key : escapeUnsafeChars(JSON.stringify(key));
}
function safeProp(key) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? "." + key : "[" + escapeUnsafeChars(JSON.stringify(key)) + "]";
}
function stringifyString(str) {
  var result = '"';
  for (var i = 0; i < str.length; i += 1) {
    var char = str.charAt(i);
    var code = char.charCodeAt(0);
    if (char === '"') {
      result += '\\"';
    } else if (char in escaped$1) {
      result += escaped$1[char];
    } else if (code >= 55296 && code <= 57343) {
      var next = str.charCodeAt(i + 1);
      if (code <= 56319 && (next >= 56320 && next <= 57343)) {
        result += char + str[++i];
      } else {
        result += "\\u" + code.toString(16).toUpperCase();
      }
    } else {
      result += char;
    }
  }
  result += '"';
  return result;
}
function noop$1() {
}
function safe_not_equal$1(a, b) {
  return a != a ? b == b : a !== b || (a && typeof a === "object" || typeof a === "function");
}
Promise.resolve();
const subscriber_queue$1 = [];
function writable$1(value, start = noop$1) {
  let stop;
  const subscribers = new Set();
  function set(new_value) {
    if (safe_not_equal$1(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue$1.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue$1.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue$1.length; i += 2) {
            subscriber_queue$1[i][0](subscriber_queue$1[i + 1]);
          }
          subscriber_queue$1.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run2, invalidate = noop$1) {
    const subscriber = [run2, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop$1;
    }
    run2(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
function hash(value) {
  let hash2 = 5381;
  let i = value.length;
  if (typeof value === "string") {
    while (i)
      hash2 = hash2 * 33 ^ value.charCodeAt(--i);
  } else {
    while (i)
      hash2 = hash2 * 33 ^ value[--i];
  }
  return (hash2 >>> 0).toString(36);
}
const escape_json_string_in_html_dict = {
  '"': '\\"',
  "<": "\\u003C",
  ">": "\\u003E",
  "/": "\\u002F",
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t",
  "\0": "\\0",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
function escape_json_string_in_html(str) {
  return escape$1(str, escape_json_string_in_html_dict, (code) => `\\u${code.toString(16).toUpperCase()}`);
}
const escape_html_attr_dict = {
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;"
};
function escape_html_attr(str) {
  return '"' + escape$1(str, escape_html_attr_dict, (code) => `&#${code};`) + '"';
}
function escape$1(str, dict, unicode_encoder) {
  let result = "";
  for (let i = 0; i < str.length; i += 1) {
    const char = str.charAt(i);
    const code = char.charCodeAt(0);
    if (char in dict) {
      result += dict[char];
    } else if (code >= 55296 && code <= 57343) {
      const next = str.charCodeAt(i + 1);
      if (code <= 56319 && next >= 56320 && next <= 57343) {
        result += char + str[++i];
      } else {
        result += unicode_encoder(code);
      }
    } else {
      result += char;
    }
  }
  return result;
}
const s$1 = JSON.stringify;
async function render_response({
  branch,
  options: options2,
  $session,
  page_config,
  status,
  error: error2,
  page
}) {
  const css2 = new Set(options2.entry.css);
  const js = new Set(options2.entry.js);
  const styles = new Set();
  const serialized_data = [];
  let rendered;
  let is_private = false;
  let maxage;
  if (error2) {
    error2.stack = options2.get_stack(error2);
  }
  if (page_config.ssr) {
    branch.forEach(({ node, loaded, fetched, uses_credentials }) => {
      if (node.css)
        node.css.forEach((url) => css2.add(url));
      if (node.js)
        node.js.forEach((url) => js.add(url));
      if (node.styles)
        node.styles.forEach((content) => styles.add(content));
      if (fetched && page_config.hydrate)
        serialized_data.push(...fetched);
      if (uses_credentials)
        is_private = true;
      maxage = loaded.maxage;
    });
    const session = writable$1($session);
    const props = {
      stores: {
        page: writable$1(null),
        navigating: writable$1(null),
        session
      },
      page,
      components: branch.map(({ node }) => node.module.default)
    };
    for (let i = 0; i < branch.length; i += 1) {
      props[`props_${i}`] = await branch[i].loaded.props;
    }
    let session_tracking_active = false;
    const unsubscribe = session.subscribe(() => {
      if (session_tracking_active)
        is_private = true;
    });
    session_tracking_active = true;
    try {
      rendered = options2.root.render(props);
    } finally {
      unsubscribe();
    }
  } else {
    rendered = { head: "", html: "", css: { code: "", map: null } };
  }
  const include_js = page_config.router || page_config.hydrate;
  if (!include_js)
    js.clear();
  const links = options2.amp ? styles.size > 0 || rendered.css.code.length > 0 ? `<style amp-custom>${Array.from(styles).concat(rendered.css.code).join("\n")}</style>` : "" : [
    ...Array.from(js).map((dep) => `<link rel="modulepreload" href="${dep}">`),
    ...Array.from(css2).map((dep) => `<link rel="stylesheet" href="${dep}">`)
  ].join("\n		");
  let init2 = "";
  if (options2.amp) {
    init2 = `
		<style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style>
		<noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
		<script async src="https://cdn.ampproject.org/v0.js"><\/script>`;
  } else if (include_js) {
    init2 = `<script type="module">
			import { start } from ${s$1(options2.entry.file)};
			start({
				target: ${options2.target ? `document.querySelector(${s$1(options2.target)})` : "document.body"},
				paths: ${s$1(options2.paths)},
				session: ${try_serialize($session, (error3) => {
      throw new Error(`Failed to serialize session data: ${error3.message}`);
    })},
				host: ${page && page.host ? s$1(page.host) : "location.host"},
				route: ${!!page_config.router},
				spa: ${!page_config.ssr},
				trailing_slash: ${s$1(options2.trailing_slash)},
				hydrate: ${page_config.ssr && page_config.hydrate ? `{
					status: ${status},
					error: ${serialize_error(error2)},
					nodes: [
						${(branch || []).map(({ node }) => `import(${s$1(node.entry)})`).join(",\n						")}
					],
					page: {
						host: ${page && page.host ? s$1(page.host) : "location.host"}, // TODO this is redundant
						path: ${page && page.path ? try_serialize(page.path, (error3) => {
      throw new Error(`Failed to serialize page.path: ${error3.message}`);
    }) : null},
						query: new URLSearchParams(${page && page.query ? s$1(page.query.toString()) : ""}),
						params: ${page && page.params ? try_serialize(page.params, (error3) => {
      throw new Error(`Failed to serialize page.params: ${error3.message}`);
    }) : null}
					}
				}` : "null"}
			});
		<\/script>`;
  }
  if (options2.service_worker) {
    init2 += `<script>
			if ('serviceWorker' in navigator) {
				navigator.serviceWorker.register('${options2.service_worker}');
			}
		<\/script>`;
  }
  const head = [
    rendered.head,
    styles.size && !options2.amp ? `<style data-svelte>${Array.from(styles).join("\n")}</style>` : "",
    links,
    init2
  ].join("\n\n		");
  const body = options2.amp ? rendered.html : `${rendered.html}

			${serialized_data.map(({ url, body: body2, json }) => {
    let attributes = `type="application/json" data-type="svelte-data" data-url=${escape_html_attr(url)}`;
    if (body2)
      attributes += ` data-body="${hash(body2)}"`;
    return `<script ${attributes}>${json}<\/script>`;
  }).join("\n\n	")}
		`;
  const headers = {
    "content-type": "text/html"
  };
  if (maxage) {
    headers["cache-control"] = `${is_private ? "private" : "public"}, max-age=${maxage}`;
  }
  if (!options2.floc) {
    headers["permissions-policy"] = "interest-cohort=()";
  }
  return {
    status,
    headers,
    body: options2.template({ head, body })
  };
}
function try_serialize(data, fail) {
  try {
    return devalue(data);
  } catch (err) {
    if (fail)
      fail(coalesce_to_error(err));
    return null;
  }
}
function serialize_error(error2) {
  if (!error2)
    return null;
  let serialized = try_serialize(error2);
  if (!serialized) {
    const { name, message, stack } = error2;
    serialized = try_serialize({ ...error2, name, message, stack });
  }
  if (!serialized) {
    serialized = "{}";
  }
  return serialized;
}
function normalize(loaded) {
  const has_error_status = loaded.status && loaded.status >= 400 && loaded.status <= 599 && !loaded.redirect;
  if (loaded.error || has_error_status) {
    const status = loaded.status;
    if (!loaded.error && has_error_status) {
      return {
        status: status || 500,
        error: new Error()
      };
    }
    const error2 = typeof loaded.error === "string" ? new Error(loaded.error) : loaded.error;
    if (!(error2 instanceof Error)) {
      return {
        status: 500,
        error: new Error(`"error" property returned from load() must be a string or instance of Error, received type "${typeof error2}"`)
      };
    }
    if (!status || status < 400 || status > 599) {
      console.warn('"error" returned from load() without a valid status code \u2014 defaulting to 500');
      return { status: 500, error: error2 };
    }
    return { status, error: error2 };
  }
  if (loaded.redirect) {
    if (!loaded.status || Math.floor(loaded.status / 100) !== 3) {
      return {
        status: 500,
        error: new Error('"redirect" property returned from load() must be accompanied by a 3xx status code')
      };
    }
    if (typeof loaded.redirect !== "string") {
      return {
        status: 500,
        error: new Error('"redirect" property returned from load() must be a string')
      };
    }
  }
  if (loaded.context) {
    throw new Error('You are returning "context" from a load function. "context" was renamed to "stuff", please adjust your code accordingly.');
  }
  return loaded;
}
const s = JSON.stringify;
async function load_node({
  request,
  options: options2,
  state,
  route,
  page,
  node,
  $session,
  stuff,
  prerender_enabled,
  is_leaf,
  is_error,
  status,
  error: error2
}) {
  const { module } = node;
  let uses_credentials = false;
  const fetched = [];
  let set_cookie_headers = [];
  let loaded;
  const page_proxy = new Proxy(page, {
    get: (target, prop, receiver) => {
      if (prop === "query" && prerender_enabled) {
        throw new Error("Cannot access query on a page with prerendering enabled");
      }
      return Reflect.get(target, prop, receiver);
    }
  });
  if (module.load) {
    const load_input = {
      page: page_proxy,
      get session() {
        uses_credentials = true;
        return $session;
      },
      fetch: async (resource, opts = {}) => {
        let url;
        if (typeof resource === "string") {
          url = resource;
        } else {
          url = resource.url;
          opts = {
            method: resource.method,
            headers: resource.headers,
            body: resource.body,
            mode: resource.mode,
            credentials: resource.credentials,
            cache: resource.cache,
            redirect: resource.redirect,
            referrer: resource.referrer,
            integrity: resource.integrity,
            ...opts
          };
        }
        const resolved = resolve(request.path, url.split("?")[0]);
        let response;
        const prefix = options2.paths.assets || options2.paths.base;
        const filename = (resolved.startsWith(prefix) ? resolved.slice(prefix.length) : resolved).slice(1);
        const filename_html = `${filename}/index.html`;
        const asset = options2.manifest.assets.find((d) => d.file === filename || d.file === filename_html);
        if (asset) {
          response = options2.read ? new Response(options2.read(asset.file), {
            headers: asset.type ? { "content-type": asset.type } : {}
          }) : await fetch(`http://${page.host}/${asset.file}`, opts);
        } else if (resolved.startsWith("/") && !resolved.startsWith("//")) {
          const relative = resolved;
          const headers = {
            ...opts.headers
          };
          if (opts.credentials !== "omit") {
            uses_credentials = true;
            headers.cookie = request.headers.cookie;
            if (!headers.authorization) {
              headers.authorization = request.headers.authorization;
            }
          }
          if (opts.body && typeof opts.body !== "string") {
            throw new Error("Request body must be a string");
          }
          const search = url.includes("?") ? url.slice(url.indexOf("?") + 1) : "";
          const rendered = await respond({
            host: request.host,
            method: opts.method || "GET",
            headers,
            path: relative,
            rawBody: opts.body == null ? null : new TextEncoder().encode(opts.body),
            query: new URLSearchParams(search)
          }, options2, {
            fetched: url,
            initiator: route
          });
          if (rendered) {
            if (state.prerender) {
              state.prerender.dependencies.set(relative, rendered);
            }
            response = new Response(rendered.body, {
              status: rendered.status,
              headers: rendered.headers
            });
          }
        } else {
          if (resolved.startsWith("//")) {
            throw new Error(`Cannot request protocol-relative URL (${url}) in server-side fetch`);
          }
          if (typeof request.host !== "undefined") {
            const { hostname: fetch_hostname } = new URL(url);
            const [server_hostname] = request.host.split(":");
            if (`.${fetch_hostname}`.endsWith(`.${server_hostname}`) && opts.credentials !== "omit") {
              uses_credentials = true;
              opts.headers = {
                ...opts.headers,
                cookie: request.headers.cookie
              };
            }
          }
          const external_request = new Request(url, opts);
          response = await options2.hooks.externalFetch.call(null, external_request);
        }
        if (response) {
          const proxy = new Proxy(response, {
            get(response2, key, _receiver) {
              async function text() {
                const body = await response2.text();
                const headers = {};
                for (const [key2, value] of response2.headers) {
                  if (key2 === "set-cookie") {
                    set_cookie_headers = set_cookie_headers.concat(value);
                  } else if (key2 !== "etag") {
                    headers[key2] = value;
                  }
                }
                if (!opts.body || typeof opts.body === "string") {
                  fetched.push({
                    url,
                    body: opts.body,
                    json: `{"status":${response2.status},"statusText":${s(response2.statusText)},"headers":${s(headers)},"body":"${escape_json_string_in_html(body)}"}`
                  });
                }
                return body;
              }
              if (key === "text") {
                return text;
              }
              if (key === "json") {
                return async () => {
                  return JSON.parse(await text());
                };
              }
              return Reflect.get(response2, key, response2);
            }
          });
          return proxy;
        }
        return response || new Response("Not found", {
          status: 404
        });
      },
      stuff: { ...stuff }
    };
    if (is_error) {
      load_input.status = status;
      load_input.error = error2;
    }
    loaded = await module.load.call(null, load_input);
  } else {
    loaded = {};
  }
  if (!loaded && is_leaf && !is_error)
    return;
  if (!loaded) {
    throw new Error(`${node.entry} - load must return a value except for page fall through`);
  }
  return {
    node,
    loaded: normalize(loaded),
    stuff: loaded.stuff || stuff,
    fetched,
    set_cookie_headers,
    uses_credentials
  };
}
const absolute = /^([a-z]+:)?\/?\//;
function resolve(base2, path) {
  const base_match = absolute.exec(base2);
  const path_match = absolute.exec(path);
  if (!base_match) {
    throw new Error(`bad base path: "${base2}"`);
  }
  const baseparts = path_match ? [] : base2.slice(base_match[0].length).split("/");
  const pathparts = path_match ? path.slice(path_match[0].length).split("/") : path.split("/");
  baseparts.pop();
  for (let i = 0; i < pathparts.length; i += 1) {
    const part = pathparts[i];
    if (part === ".")
      continue;
    else if (part === "..")
      baseparts.pop();
    else
      baseparts.push(part);
  }
  const prefix = path_match && path_match[0] || base_match && base_match[0] || "";
  return `${prefix}${baseparts.join("/")}`;
}
async function respond_with_error({ request, options: options2, state, $session, status, error: error2 }) {
  const default_layout = await options2.load_component(options2.manifest.layout);
  const default_error = await options2.load_component(options2.manifest.error);
  const page = {
    host: request.host,
    path: request.path,
    query: request.query,
    params: {}
  };
  const loaded = await load_node({
    request,
    options: options2,
    state,
    route: null,
    page,
    node: default_layout,
    $session,
    stuff: {},
    prerender_enabled: is_prerender_enabled(options2, default_error, state),
    is_leaf: false,
    is_error: false
  });
  const branch = [
    loaded,
    await load_node({
      request,
      options: options2,
      state,
      route: null,
      page,
      node: default_error,
      $session,
      stuff: loaded ? loaded.stuff : {},
      prerender_enabled: is_prerender_enabled(options2, default_error, state),
      is_leaf: false,
      is_error: true,
      status,
      error: error2
    })
  ];
  try {
    return await render_response({
      options: options2,
      $session,
      page_config: {
        hydrate: options2.hydrate,
        router: options2.router,
        ssr: options2.ssr
      },
      status,
      error: error2,
      branch,
      page
    });
  } catch (err) {
    const error3 = coalesce_to_error(err);
    options2.handle_error(error3, request);
    return {
      status: 500,
      headers: {},
      body: error3.stack
    };
  }
}
function is_prerender_enabled(options2, node, state) {
  return options2.prerender && (!!node.module.prerender || !!state.prerender && state.prerender.all);
}
async function respond$1(opts) {
  const { request, options: options2, state, $session, route } = opts;
  let nodes;
  try {
    nodes = await Promise.all(route.a.map((id) => id ? options2.load_component(id) : void 0));
  } catch (err) {
    const error3 = coalesce_to_error(err);
    options2.handle_error(error3, request);
    return await respond_with_error({
      request,
      options: options2,
      state,
      $session,
      status: 500,
      error: error3
    });
  }
  const leaf = nodes[nodes.length - 1].module;
  let page_config = get_page_config(leaf, options2);
  if (!leaf.prerender && state.prerender && !state.prerender.all) {
    return {
      status: 204,
      headers: {}
    };
  }
  let branch = [];
  let status = 200;
  let error2;
  let set_cookie_headers = [];
  ssr:
    if (page_config.ssr) {
      let stuff = {};
      for (let i = 0; i < nodes.length; i += 1) {
        const node = nodes[i];
        let loaded;
        if (node) {
          try {
            loaded = await load_node({
              ...opts,
              node,
              stuff,
              prerender_enabled: is_prerender_enabled(options2, node, state),
              is_leaf: i === nodes.length - 1,
              is_error: false
            });
            if (!loaded)
              return;
            set_cookie_headers = set_cookie_headers.concat(loaded.set_cookie_headers);
            if (loaded.loaded.redirect) {
              return with_cookies({
                status: loaded.loaded.status,
                headers: {
                  location: encodeURI(loaded.loaded.redirect)
                }
              }, set_cookie_headers);
            }
            if (loaded.loaded.error) {
              ({ status, error: error2 } = loaded.loaded);
            }
          } catch (err) {
            const e = coalesce_to_error(err);
            options2.handle_error(e, request);
            status = 500;
            error2 = e;
          }
          if (loaded && !error2) {
            branch.push(loaded);
          }
          if (error2) {
            while (i--) {
              if (route.b[i]) {
                const error_node = await options2.load_component(route.b[i]);
                let node_loaded;
                let j = i;
                while (!(node_loaded = branch[j])) {
                  j -= 1;
                }
                try {
                  const error_loaded = await load_node({
                    ...opts,
                    node: error_node,
                    stuff: node_loaded.stuff,
                    prerender_enabled: is_prerender_enabled(options2, error_node, state),
                    is_leaf: false,
                    is_error: true,
                    status,
                    error: error2
                  });
                  if (error_loaded.loaded.error) {
                    continue;
                  }
                  page_config = get_page_config(error_node.module, options2);
                  branch = branch.slice(0, j + 1).concat(error_loaded);
                  break ssr;
                } catch (err) {
                  const e = coalesce_to_error(err);
                  options2.handle_error(e, request);
                  continue;
                }
              }
            }
            return with_cookies(await respond_with_error({
              request,
              options: options2,
              state,
              $session,
              status,
              error: error2
            }), set_cookie_headers);
          }
        }
        if (loaded && loaded.loaded.stuff) {
          stuff = {
            ...stuff,
            ...loaded.loaded.stuff
          };
        }
      }
    }
  try {
    return with_cookies(await render_response({
      ...opts,
      page_config,
      status,
      error: error2,
      branch: branch.filter(Boolean)
    }), set_cookie_headers);
  } catch (err) {
    const error3 = coalesce_to_error(err);
    options2.handle_error(error3, request);
    return with_cookies(await respond_with_error({
      ...opts,
      status: 500,
      error: error3
    }), set_cookie_headers);
  }
}
function get_page_config(leaf, options2) {
  return {
    ssr: "ssr" in leaf ? !!leaf.ssr : options2.ssr,
    router: "router" in leaf ? !!leaf.router : options2.router,
    hydrate: "hydrate" in leaf ? !!leaf.hydrate : options2.hydrate
  };
}
function with_cookies(response, set_cookie_headers) {
  if (set_cookie_headers.length) {
    response.headers["set-cookie"] = set_cookie_headers;
  }
  return response;
}
async function render_page(request, route, match, options2, state) {
  if (state.initiator === route) {
    return {
      status: 404,
      headers: {},
      body: `Not found: ${request.path}`
    };
  }
  const params = route.params(match);
  const page = {
    host: request.host,
    path: request.path,
    query: request.query,
    params
  };
  const $session = await options2.hooks.getSession(request);
  const response = await respond$1({
    request,
    options: options2,
    state,
    $session,
    route,
    page
  });
  if (response) {
    return response;
  }
  if (state.fetched) {
    return {
      status: 500,
      headers: {},
      body: `Bad request in load function: failed to fetch ${state.fetched}`
    };
  }
}
function read_only_form_data() {
  const map = new Map();
  return {
    append(key, value) {
      if (map.has(key)) {
        (map.get(key) || []).push(value);
      } else {
        map.set(key, [value]);
      }
    },
    data: new ReadOnlyFormData(map)
  };
}
class ReadOnlyFormData {
  constructor(map) {
    __privateAdd(this, _map, void 0);
    __privateSet(this, _map, map);
  }
  get(key) {
    const value = __privateGet(this, _map).get(key);
    return value && value[0];
  }
  getAll(key) {
    return __privateGet(this, _map).get(key);
  }
  has(key) {
    return __privateGet(this, _map).has(key);
  }
  *[Symbol.iterator]() {
    for (const [key, value] of __privateGet(this, _map)) {
      for (let i = 0; i < value.length; i += 1) {
        yield [key, value[i]];
      }
    }
  }
  *entries() {
    for (const [key, value] of __privateGet(this, _map)) {
      for (let i = 0; i < value.length; i += 1) {
        yield [key, value[i]];
      }
    }
  }
  *keys() {
    for (const [key] of __privateGet(this, _map))
      yield key;
  }
  *values() {
    for (const [, value] of __privateGet(this, _map)) {
      for (let i = 0; i < value.length; i += 1) {
        yield value[i];
      }
    }
  }
}
_map = new WeakMap();
function parse_body(raw, headers) {
  if (!raw)
    return raw;
  const content_type = headers["content-type"];
  const [type, ...directives] = content_type ? content_type.split(/;\s*/) : [];
  const text = () => new TextDecoder(headers["content-encoding"] || "utf-8").decode(raw);
  switch (type) {
    case "text/plain":
      return text();
    case "application/json":
      return JSON.parse(text());
    case "application/x-www-form-urlencoded":
      return get_urlencoded(text());
    case "multipart/form-data": {
      const boundary = directives.find((directive) => directive.startsWith("boundary="));
      if (!boundary)
        throw new Error("Missing boundary");
      return get_multipart(text(), boundary.slice("boundary=".length));
    }
    default:
      return raw;
  }
}
function get_urlencoded(text) {
  const { data, append } = read_only_form_data();
  text.replace(/\+/g, " ").split("&").forEach((str) => {
    const [key, value] = str.split("=");
    append(decodeURIComponent(key), decodeURIComponent(value));
  });
  return data;
}
function get_multipart(text, boundary) {
  const parts = text.split(`--${boundary}`);
  if (parts[0] !== "" || parts[parts.length - 1].trim() !== "--") {
    throw new Error("Malformed form data");
  }
  const { data, append } = read_only_form_data();
  parts.slice(1, -1).forEach((part) => {
    const match = /\s*([\s\S]+?)\r\n\r\n([\s\S]*)\s*/.exec(part);
    if (!match) {
      throw new Error("Malformed form data");
    }
    const raw_headers = match[1];
    const body = match[2].trim();
    let key;
    const headers = {};
    raw_headers.split("\r\n").forEach((str) => {
      const [raw_header, ...raw_directives] = str.split("; ");
      let [name, value] = raw_header.split(": ");
      name = name.toLowerCase();
      headers[name] = value;
      const directives = {};
      raw_directives.forEach((raw_directive) => {
        const [name2, value2] = raw_directive.split("=");
        directives[name2] = JSON.parse(value2);
      });
      if (name === "content-disposition") {
        if (value !== "form-data")
          throw new Error("Malformed form data");
        if (directives.filename) {
          throw new Error("File upload is not yet implemented");
        }
        if (directives.name) {
          key = directives.name;
        }
      }
    });
    if (!key)
      throw new Error("Malformed form data");
    append(key, body);
  });
  return data;
}
async function respond(incoming, options2, state = {}) {
  if (incoming.path !== "/" && options2.trailing_slash !== "ignore") {
    const has_trailing_slash = incoming.path.endsWith("/");
    if (has_trailing_slash && options2.trailing_slash === "never" || !has_trailing_slash && options2.trailing_slash === "always" && !(incoming.path.split("/").pop() || "").includes(".")) {
      const path = has_trailing_slash ? incoming.path.slice(0, -1) : incoming.path + "/";
      const q = incoming.query.toString();
      return {
        status: 301,
        headers: {
          location: options2.paths.base + path + (q ? `?${q}` : "")
        }
      };
    }
  }
  const headers = lowercase_keys(incoming.headers);
  const request = {
    ...incoming,
    headers,
    body: parse_body(incoming.rawBody, headers),
    params: {},
    locals: {}
  };
  try {
    return await options2.hooks.handle({
      request,
      resolve: async (request2) => {
        if (state.prerender && state.prerender.fallback) {
          return await render_response({
            options: options2,
            $session: await options2.hooks.getSession(request2),
            page_config: { ssr: false, router: true, hydrate: true },
            status: 200,
            branch: []
          });
        }
        const decoded = decodeURI(request2.path);
        for (const route of options2.manifest.routes) {
          const match = route.pattern.exec(decoded);
          if (!match)
            continue;
          const response = route.type === "endpoint" ? await render_endpoint(request2, route, match) : await render_page(request2, route, match, options2, state);
          if (response) {
            if (response.status === 200) {
              const cache_control = get_single_valued_header(response.headers, "cache-control");
              if (!cache_control || !/(no-store|immutable)/.test(cache_control)) {
                const etag = `"${hash(response.body || "")}"`;
                if (request2.headers["if-none-match"] === etag) {
                  return {
                    status: 304,
                    headers: {}
                  };
                }
                response.headers["etag"] = etag;
              }
            }
            return response;
          }
        }
        const $session = await options2.hooks.getSession(request2);
        return await respond_with_error({
          request: request2,
          options: options2,
          state,
          $session,
          status: 404,
          error: new Error(`Not found: ${request2.path}`)
        });
      }
    });
  } catch (err) {
    const e = coalesce_to_error(err);
    options2.handle_error(e, request);
    return {
      status: 500,
      headers: {},
      body: options2.dev ? e.stack : e.message
    };
  }
}
function noop() {
}
function run(fn) {
  return fn();
}
function blank_object() {
  return Object.create(null);
}
function run_all(fns) {
  fns.forEach(run);
}
function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || (a && typeof a === "object" || typeof a === "function");
}
function subscribe(store, ...callbacks) {
  if (store == null) {
    return noop;
  }
  const unsub = store.subscribe(...callbacks);
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
function null_to_empty(value) {
  return value == null ? "" : value;
}
let current_component;
function set_current_component(component) {
  current_component = component;
}
function get_current_component() {
  if (!current_component)
    throw new Error("Function called outside component initialization");
  return current_component;
}
function setContext(key, context) {
  get_current_component().$$.context.set(key, context);
}
Promise.resolve();
const escaped = {
  '"': "&quot;",
  "'": "&#39;",
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;"
};
function escape(html) {
  return String(html).replace(/["'&<>]/g, (match) => escaped[match]);
}
const missing_component = {
  $$render: () => ""
};
function validate_component(component, name) {
  if (!component || !component.$$render) {
    if (name === "svelte:component")
      name += " this={...}";
    throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
  }
  return component;
}
let on_destroy;
function create_ssr_component(fn) {
  function $$render(result, props, bindings, slots, context) {
    const parent_component = current_component;
    const $$ = {
      on_destroy,
      context: new Map(context || (parent_component ? parent_component.$$.context : [])),
      on_mount: [],
      before_update: [],
      after_update: [],
      callbacks: blank_object()
    };
    set_current_component({ $$ });
    const html = fn(result, props, bindings, slots);
    set_current_component(parent_component);
    return html;
  }
  return {
    render: (props = {}, { $$slots = {}, context = new Map() } = {}) => {
      on_destroy = [];
      const result = { title: "", head: "", css: new Set() };
      const html = $$render(result, props, {}, $$slots, context);
      run_all(on_destroy);
      return {
        html,
        css: {
          code: Array.from(result.css).map((css2) => css2.code).join("\n"),
          map: null
        },
        head: result.title + result.head
      };
    },
    $$render
  };
}
function add_attribute(name, value, boolean) {
  if (value == null || boolean && !value)
    return "";
  return ` ${name}${value === true ? "" : `=${typeof value === "string" ? JSON.stringify(escape(value)) : `"${value}"`}`}`;
}
function afterUpdate() {
}
var root_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "#svelte-announcer.svelte-1pdgbjn{clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;left:0;overflow:hidden;position:absolute;top:0;white-space:nowrap;width:1px}",
  map: null
};
const Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stores } = $$props;
  let { page } = $$props;
  let { components } = $$props;
  let { props_0 = null } = $$props;
  let { props_1 = null } = $$props;
  let { props_2 = null } = $$props;
  setContext("__svelte__", stores);
  afterUpdate(stores.page.notify);
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
    $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.props_0 === void 0 && $$bindings.props_0 && props_0 !== void 0)
    $$bindings.props_0(props_0);
  if ($$props.props_1 === void 0 && $$bindings.props_1 && props_1 !== void 0)
    $$bindings.props_1(props_1);
  if ($$props.props_2 === void 0 && $$bindings.props_2 && props_2 !== void 0)
    $$bindings.props_2(props_2);
  $$result.css.add(css$2);
  {
    stores.page.set(page);
  }
  return `


${validate_component(components[0] || missing_component, "svelte:component").$$render($$result, Object.assign(props_0 || {}), {}, {
    default: () => `${components[1] ? `${validate_component(components[1] || missing_component, "svelte:component").$$render($$result, Object.assign(props_1 || {}), {}, {
      default: () => `${components[2] ? `${validate_component(components[2] || missing_component, "svelte:component").$$render($$result, Object.assign(props_2 || {}), {}, {})}` : ``}`
    })}` : ``}`
  })}

${``}`;
});
let base = "";
let assets = "";
function set_paths(paths) {
  base = paths.base;
  assets = paths.assets || base;
}
function set_prerendering(value) {
}
var user_hooks = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module"
});
const template = ({ head, body }) => '<!DOCTYPE html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<link rel="icon" href="/favicon.png" />\n		<meta name="viewport" content="width=device-width, initial-scale=1" />\n		' + head + '\n	</head>\n	<body>\n		<div id="svelte">' + body + "</div>\n	</body>\n</html>\n";
let options = null;
const default_settings = { paths: { "base": "", "assets": "" } };
function init(settings = default_settings) {
  set_paths(settings.paths);
  set_prerendering(settings.prerendering || false);
  const hooks = get_hooks(user_hooks);
  options = {
    amp: false,
    dev: false,
    entry: {
      file: assets + "/_app/start-4e509fd3.js",
      css: [assets + "/_app/assets/start-464e9d0a.css"],
      js: [assets + "/_app/start-4e509fd3.js", assets + "/_app/chunks/vendor-50bc5770.js"]
    },
    fetched: void 0,
    floc: false,
    get_component_path: (id) => assets + "/_app/" + entry_lookup[id],
    get_stack: (error2) => String(error2),
    handle_error: (error2, request) => {
      hooks.handleError({ error: error2, request });
      error2.stack = options.get_stack(error2);
    },
    hooks,
    hydrate: true,
    initiator: void 0,
    load_component,
    manifest,
    paths: settings.paths,
    prerender: true,
    read: settings.read,
    root: Root,
    service_worker: null,
    router: true,
    ssr: false,
    target: "#svelte",
    template,
    trailing_slash: "never"
  };
}
const empty = () => ({});
const manifest = {
  assets: [{ "file": "favicon.png", "size": 3192, "type": "image/png" }, { "file": "section_2/medicals-bg.svg", "size": 1778, "type": "image/svg+xml" }, { "file": "section_2/medicals.png", "size": 349115, "type": "image/png" }, { "file": "section_2/range-bg.svg", "size": 2442, "type": "image/svg+xml" }, { "file": "section_2/range.png", "size": 352435, "type": "image/png" }, { "file": "section_3/equipment.png", "size": 32007, "type": "image/png" }, { "file": "section_3/food.png", "size": 38624, "type": "image/png" }, { "file": "section_3/grocery.png", "size": 26742, "type": "image/png" }, { "file": "section_3/heading.svg", "size": 569535, "type": "image/svg+xml" }, { "file": "section_3/med.png", "size": 15014, "type": "image/png" }, { "file": "section_3/pattern.png", "size": 834327, "type": "image/png" }, { "file": "section_3/stationary.png", "size": 49842, "type": "image/png" }, { "file": "section_4/img_1.png", "size": 110474, "type": "image/png" }, { "file": "section_4/img_2.png", "size": 123827, "type": "image/png" }, { "file": "section_4/img_3.png", "size": 125412, "type": "image/png" }, { "file": "section_4/point.svg", "size": 990, "type": "image/svg+xml" }],
  layout: "src/routes/__layout.svelte",
  error: ".svelte-kit/build/components/error.svelte",
  routes: [
    {
      type: "page",
      pattern: /^\/$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/index.svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/businesses\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/businesses.svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/careers\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/careers.svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/contact\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/contact.svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/about\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/about.svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/faq\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/faq.svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    }
  ]
};
const get_hooks = (hooks) => ({
  getSession: hooks.getSession || (() => ({})),
  handle: hooks.handle || (({ request, resolve: resolve2 }) => resolve2(request)),
  handleError: hooks.handleError || (({ error: error2 }) => console.error(error2.stack)),
  externalFetch: hooks.externalFetch || fetch
});
const module_lookup = {
  "src/routes/__layout.svelte": () => Promise.resolve().then(function() {
    return __layout;
  }),
  ".svelte-kit/build/components/error.svelte": () => Promise.resolve().then(function() {
    return error;
  }),
  "src/routes/index.svelte": () => Promise.resolve().then(function() {
    return index;
  }),
  "src/routes/businesses.svelte": () => Promise.resolve().then(function() {
    return businesses;
  }),
  "src/routes/careers.svelte": () => Promise.resolve().then(function() {
    return careers;
  }),
  "src/routes/contact.svelte": () => Promise.resolve().then(function() {
    return contact;
  }),
  "src/routes/about.svelte": () => Promise.resolve().then(function() {
    return about;
  }),
  "src/routes/faq.svelte": () => Promise.resolve().then(function() {
    return faq;
  })
};
const metadata_lookup = { "src/routes/__layout.svelte": { "entry": "pages/__layout.svelte-ab80e798.js", "css": ["assets/pages/__layout.svelte-8519248b.css"], "js": ["pages/__layout.svelte-ab80e798.js", "chunks/vendor-50bc5770.js"], "styles": [] }, ".svelte-kit/build/components/error.svelte": { "entry": "error.svelte-aceeb7e4.js", "css": [], "js": ["error.svelte-aceeb7e4.js", "chunks/vendor-50bc5770.js"], "styles": [] }, "src/routes/index.svelte": { "entry": "pages/index.svelte-1155853a.js", "css": ["assets/pages/index.svelte-4dd1e868.css"], "js": ["pages/index.svelte-1155853a.js", "chunks/vendor-50bc5770.js"], "styles": [] }, "src/routes/businesses.svelte": { "entry": "pages/businesses.svelte-b5dcd743.js", "css": [], "js": ["pages/businesses.svelte-b5dcd743.js", "chunks/vendor-50bc5770.js"], "styles": [] }, "src/routes/careers.svelte": { "entry": "pages/careers.svelte-2f422193.js", "css": [], "js": ["pages/careers.svelte-2f422193.js", "chunks/vendor-50bc5770.js"], "styles": [] }, "src/routes/contact.svelte": { "entry": "pages/contact.svelte-6a8b2430.js", "css": [], "js": ["pages/contact.svelte-6a8b2430.js", "chunks/vendor-50bc5770.js"], "styles": [] }, "src/routes/about.svelte": { "entry": "pages/about.svelte-594608ea.js", "css": [], "js": ["pages/about.svelte-594608ea.js", "chunks/vendor-50bc5770.js"], "styles": [] }, "src/routes/faq.svelte": { "entry": "pages/faq.svelte-6c071923.js", "css": [], "js": ["pages/faq.svelte-6c071923.js", "chunks/vendor-50bc5770.js"], "styles": [] } };
async function load_component(file) {
  const { entry, css: css2, js, styles } = metadata_lookup[file];
  return {
    module: await module_lookup[file](),
    entry: assets + "/_app/" + entry,
    css: css2.map((dep) => assets + "/_app/" + dep),
    js: js.map((dep) => assets + "/_app/" + dep),
    styles
  };
}
function render(request, {
  prerender
} = {}) {
  const host = request.headers["host"];
  return respond({ ...request, host }, options, { prerender });
}
var app = "";
const subscriber_queue = [];
function writable(value, start = noop) {
  let stop;
  const subscribers = new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run2, invalidate = noop) {
    const subscriber = [run2, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop;
    }
    run2(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
let open = writable(false);
const Hamburger = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $open, $$unsubscribe_open;
  $$unsubscribe_open = subscribe(open, (value) => $open = value);
  $$unsubscribe_open();
  return `<button${add_attribute("class", `hamburger hamburger--slider ${$open ? " is-active" : ""}`, 0)} type="${"button"}"><span class="${"hamburger-box"}"><span class="${"hamburger-inner"}"></span></span></button>`;
});
const Logo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg class="${"w-32 sm:w-40"}" width="${"143"}" height="${"40"}" viewBox="${"0 0 143 40"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M2.28027 7.73153L7.82104 10.167C9.40411 7.24442 12.5094 5.84401 15.7364 6.33111C18.9634 6.81821 20.8913 9.36613 21.5816 10.8368C22.982 13.8203 23.423 18.4104 20.8657 22.9161L26.5892 25.656C29.456 20.0021 29.2732 14.1503 27.6643 9.58101C25.8752 4.49985 21.5732 0.981104 16.0439 0.143386C8.68474 -0.971585 3.64009 4.68715 2.28027 7.73153Z"}" fill="${"#18EDF1"}"></path><path d="${"M11.3935 39.4355C16.8185 40.9496 27.4619 40.0918 32.2291 28.3158L26.5894 25.6516C22.1343 35.0716 16.1395 34.1776 12.5636 33.243C9.91606 32.551 6.70616 30.093 6.70616 26.356C6.70616 21.8517 11.1219 18.1651 16.3403 19.9525C16.3403 19.9525 17.1881 14.2158 17.1384 14.1661C12.9287 12.8352 7.77699 13.0536 3.3767 18.6797C0.522016 22.3296 -0.00780439 27.9074 2.20343 32.2256C3.91261 35.5633 7.26176 38.2823 11.3935 39.4355Z"}" fill="${"#18EDF1"}"></path><path fill-rule="${"evenodd"}" clip-rule="${"evenodd"}" d="${"M42.1289 27.2153H45.4505L47.052 23.5965H53.9238L55.5252 27.2153H58.8885L52.3337 12.5275H48.6836L42.1289 27.2153ZM48.2816 20.8257L49.9399 17.108L50.4879 15.7733L51.0358 17.108L52.6942 20.8257H48.2816Z"}" fill="${"white"}"></path><path d="${"M59.8028 14.668H62.8024V12.0251H59.8028V14.668Z"}" fill="${"white"}"></path><path d="${"M59.8028 27.2153H62.8024V16.1254H59.8028V27.2153Z"}" fill="${"white"}"></path><path d="${"M64.9608 27.2153H67.9604V21.0361C67.9604 20.1488 68.1368 19.5481 68.4561 19.1712C68.7642 18.8074 69.2643 18.5843 70.0794 18.5843C70.802 18.5843 71.2219 18.7464 71.4687 18.9987C71.7171 19.2527 71.8656 19.6749 71.8656 20.3705V20.6577H74.8444V19.9338C74.8444 18.8963 74.5745 17.8927 73.9551 17.1413C73.3267 16.3788 72.3723 15.9175 71.0985 15.9175C69.9538 15.9175 69.0481 16.279 68.386 16.8911C68.1471 17.1119 67.9436 17.3619 67.7732 17.6336V16.1254H64.9608V27.2153Z"}" fill="${"white"}"></path><path fill-rule="${"evenodd"}" clip-rule="${"evenodd"}" d="${"M76.3337 27.2153H79.1461V25.4692C79.406 25.8844 79.7334 26.2403 80.1261 26.5306C80.9345 27.1283 81.9864 27.4233 83.2201 27.4233C84.9509 27.4233 86.323 26.8452 87.2588 25.8095C88.1897 24.7793 88.6506 23.3388 88.6506 21.6808C88.6506 20.0041 88.1961 18.5595 87.2849 17.5291C86.368 16.4923 85.0263 15.9175 83.3449 15.9175C82.0423 15.9175 80.9956 16.2521 80.213 16.847C79.8615 17.1142 79.5692 17.4294 79.3333 17.7813V12.5275H76.3337V27.2153ZM79.3333 21.7848V21.6184C79.3333 20.5887 79.6274 19.8834 80.1337 19.429C80.6473 18.9681 81.4415 18.7091 82.5546 18.7091C83.6201 18.7091 84.3767 18.9173 84.868 19.3527C85.3497 19.7794 85.651 20.4922 85.651 21.6808C85.651 22.8598 85.3546 23.5598 84.8734 23.9779C84.3804 24.4063 83.6137 24.6109 82.513 24.6109C81.4525 24.6109 80.6653 24.3625 80.1472 23.9128C79.6384 23.4711 79.3333 22.7861 79.3333 21.7848Z"}" fill="${"white"}"></path><path fill-rule="${"evenodd"}" clip-rule="${"evenodd"}" d="${"M111.78 26.2785C112.103 25.9926 112.372 25.6672 112.589 25.3177V27.2153H115.401V16.1254H112.422V21.6184C112.422 22.6886 112.169 23.4296 111.712 23.9047C111.256 24.3771 110.535 24.6525 109.451 24.6525C108.406 24.6525 107.753 24.4178 107.356 24.0295C106.962 23.6431 106.749 23.0338 106.749 22.1175V16.1254H103.771V22.7207C103.771 23.9883 104.146 25.1682 104.941 26.0351C105.741 26.9075 106.929 27.4233 108.473 27.4233C109.888 27.4233 110.987 26.9793 111.78 26.2785Z"}" fill="${"white"}"></path><path d="${"M117.52 27.2153H120.52V21.7224C120.52 20.6486 120.764 19.907 121.21 19.4328C121.652 18.9631 122.356 18.6883 123.429 18.6883C124.451 18.6883 125.088 18.9222 125.474 19.3085C125.86 19.6945 126.068 20.3048 126.068 21.2232V27.2153H129.068V20.6201C129.068 19.3525 128.693 18.1733 127.904 17.3067C127.11 16.4344 125.931 15.9175 124.407 15.9175C123.012 15.9175 121.922 16.3624 121.137 17.0636C120.815 17.3519 120.547 17.6804 120.333 18.0333V16.1254H117.52V27.2153Z"}" fill="${"white"}"></path><path fill-rule="${"evenodd"}" clip-rule="${"evenodd"}" d="${"M139.945 12.5275V17.7864C139.707 17.4321 139.411 17.115 139.057 16.8466C138.272 16.2524 137.226 15.9175 135.933 15.9175C134.272 15.9175 132.931 16.493 132.01 17.5282C131.094 18.5577 130.628 20.0019 130.628 21.6808C130.628 23.341 131.1 24.7814 132.039 25.8108C132.982 26.845 134.358 27.4233 136.079 27.4233C137.303 27.4233 138.35 27.1279 139.155 26.5302C139.546 26.2401 139.873 25.8846 140.132 25.4697V27.2153H142.945V12.5275H139.945ZM133.648 21.6808C133.648 20.4939 133.954 19.7802 134.436 19.3527C134.928 18.9167 135.681 18.7091 136.724 18.7091C137.826 18.7091 138.621 18.9677 139.137 19.4296C139.647 19.8847 139.945 20.5905 139.945 21.6184V21.7848C139.945 22.7843 139.636 23.4697 139.124 23.9123C138.603 24.3629 137.815 24.6109 136.765 24.6109C135.687 24.6109 134.925 24.4069 134.431 23.9779C133.949 23.559 133.648 22.8581 133.648 21.6808Z"}" fill="${"white"}"></path><path fill-rule="${"evenodd"}" clip-rule="${"evenodd"}" d="${"M95.9453 27.4233C97.7513 27.4233 99.2886 26.8511 100.378 25.832C101.469 24.8111 102.083 23.3669 102.083 21.6808C102.083 19.975 101.47 18.5252 100.378 17.5035C99.288 16.4839 97.7503 15.9175 95.9453 15.9175C94.1501 15.9175 92.6177 16.4843 91.5307 17.5039C90.4415 18.5254 89.8284 19.9751 89.8284 21.6808C89.8284 23.3669 90.4423 24.8109 91.5307 25.8317C92.6171 26.8507 94.1492 27.4233 95.9453 27.4233ZM95.9453 24.6733C94.7505 24.6733 93.9815 24.3892 93.5074 23.9173C93.0338 23.4459 92.7864 22.7191 92.7864 21.6808C92.7864 20.6312 93.0343 19.8931 93.5092 19.4139C93.9836 18.9351 94.7521 18.6467 95.9453 18.6467C97.1497 18.6467 97.9234 18.9355 98.4002 19.4145C98.8771 19.8936 99.125 20.6312 99.125 21.6808C99.125 22.7191 98.8776 23.4454 98.402 23.9167C97.9256 24.3888 97.1513 24.6733 95.9453 24.6733Z"}" fill="${"white"}"></path></svg>`;
});
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_open;
  $$unsubscribe_open = subscribe(open, (value) => value);
  $$unsubscribe_open();
  return `<nav${add_attribute("class", `fixed top-0 left-0 right-0 w-full z-50 items-center font-normal text-base text-white-100 py-8 px-6 sm:px-8

		${""}
	`, 0)}><div class="${"max-w-1260 flex flex-row justify-between mx-auto"}"><a href="${"/"}">${validate_component(Logo, "Logo").$$render($$result, {}, {}, {})}</a>
		${validate_component(Hamburger, "Hamburger").$$render($$result, {}, {}, {})}</div></nav>`;
});
var Sidebar_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "aside.svelte-1nqdluy{-webkit-backdrop-filter:blur(30px);backdrop-filter:blur(30px);height:100vh;right:-100%;transition:all .1s ease}.open.svelte-1nqdluy{right:0}",
  map: null
};
const Sidebar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $open, $$unsubscribe_open;
  $$unsubscribe_open = subscribe(open, (value) => $open = value);
  $$result.css.add(css$1);
  $$unsubscribe_open();
  return `<aside class="${escape(null_to_empty(`fixed overflow-y-scroll h-screen text-center flex flex-col text-2xl lg:text-3xl font-heading text-white-100 bg-blue-800 bg-opacity-90 pt-44 lg:pt-40 z-40 w-full ${$open ? "open" : ""}`)) + " svelte-1nqdluy"}"><nav class="${"px-16 flex flex-col items-start"}"><a class="${"py-5 mx-auto"}" href="${"/businesses"}">For Businesses</a>
		<a class="${"py-5 mx-auto"}" href="${"/blog"}">Our Blog</a>
		<a class="${"py-5 mx-auto"}" href="${"/about"}">About Us</a>
		<a class="${"py-5 mx-auto"}" href="${"/faq"}">FAQs</a></nav>

	<nav class="${"px-16 text-2xl lg:text-3xl flex flex-col items-start"}"><a class="${"py-5 mx-auto"}" href="${"/careers"}">Careers</a>
		<a class="${"py-5 mb-28 md:mb-28 lg:mb-20 mx-auto"}" href="${"/contact"}">Contact Us</a>
		<div class="${"mx-auto"}"><ul class="${"flex flex-row mx-auto lg:text-2xl"}"><li class="${"mr-10"}"><a target="${"_blank"}" rel="${"noopener noreferrer"}" href="${"https://twitter.com/airbound_co"}"><i class="${"fab fa-twitter"}"></i></a></li>
				<li class="${"mr-10"}"><a target="${"_blank"}" rel="${"noopener noreferrer"}" href="${"https://linkedin.com/company/airbound-co"}"><i class="${"fab fa-linkedin"}"></i></a></li>
				<li><a target="${"_blank"}" rel="${"noopener noreferrer"}" href="${"https://instagram.com/airbound.co"}"><i class="${"fab fa-instagram"}"></i></a></li></ul>
			<p class="${"mt-4 lg:mt-6 text-center font-body opacity-60 text-white-100 font-thin text-xs lg:text-sm"}">\xA9 Airbound Aerospace
			</p></div></nav>
</aside>`;
});
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $open, $$unsubscribe_open;
  $$unsubscribe_open = subscribe(open, (value) => $open = value);
  $$unsubscribe_open();
  return `<div${add_attribute("class", `relative overflow-x-hidden ${$open ? "overflow-hidden" : ""}  `, 0)}>${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}
	${validate_component(Sidebar, "Sidebar").$$render($$result, {}, {}, {})}
	${slots.default ? slots.default({}) : ``}</div>`;
});
var __layout = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _layout
});
function load({ error: error2, status }) {
  return { props: { error: error2, status } };
}
const Error$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { status } = $$props;
  let { error: error2 } = $$props;
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  if ($$props.error === void 0 && $$bindings.error && error2 !== void 0)
    $$bindings.error(error2);
  return `<h1>${escape(status)}</h1>

<pre>${escape(error2.message)}</pre>



${error2.frame ? `<pre>${escape(error2.frame)}</pre>` : ``}
${error2.stack ? `<pre>${escape(error2.stack)}</pre>` : ``}`;
});
var error = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Error$1,
  load
});
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: ".timeline.svelte-1vc43cc.svelte-1vc43cc{display:grid;grid-template-columns:6px 1fr;margin:3rem auto;max-width:1200px;padding:3rem}.timeline__middle.svelte-1vc43cc.svelte-1vc43cc{background-color:#18edf1;position:relative}.timeline__point.svelte-1vc43cc.svelte-1vc43cc{height:50px;margin-top:4.5rem}.timeline__last_point.svelte-1vc43cc.svelte-1vc43cc,.timeline__point.svelte-1vc43cc.svelte-1vc43cc{background-color:#1d3dae;background-image:url(/section_4/point.svg);background-repeat:no-repeat;left:0;margin-left:2px;position:absolute;top:50%;transform:translateX(-50%);width:39px}.timeline__last_point.svelte-1vc43cc.svelte-1vc43cc{height:110px;margin-top:5rem}.timeline__middle_point.svelte-1vc43cc.svelte-1vc43cc{background-color:#1d3dae;background-image:url(/section_4/point.svg);background-repeat:no-repeat;height:60px;left:0;margin-left:2px;margin-top:6rem;position:absolute;top:50%;transform:translateX(-50%);width:39px}.timeline__component.svelte-1vc43cc.svelte-1vc43cc{padding:20px}.timeline__component.svelte-1vc43cc img.svelte-1vc43cc{margin-left:auto;margin-right:auto;max-width:250px}.timeline__text.svelte-1vc43cc.svelte-1vc43cc{margin-left:1rem;margin-top:1rem;max-width:250px}.section_3.svelte-1vc43cc.svelte-1vc43cc{background-image:url(/section_3/pattern.png);background-repeat:repeat;background-size:contain}.range_bg.svelte-1vc43cc.svelte-1vc43cc{margin-left:-100px;margin-top:-10px}.medicals_bg.svelte-1vc43cc.svelte-1vc43cc{margin-right:-100px}.text-contianer.svelte-1vc43cc.svelte-1vc43cc{max-width:26rem}@media(min-width:640px){.text-contianer.svelte-1vc43cc.svelte-1vc43cc{max-width:29rem}.range_bg.svelte-1vc43cc.svelte-1vc43cc{margin-left:-175px;margin-top:-10px}.medicals_bg.svelte-1vc43cc.svelte-1vc43cc{margin-right:-150px;margin-top:-20px}}@media(min-width:768px){.image-container.svelte-1vc43cc.svelte-1vc43cc{width:40rem}.text-contianer.svelte-1vc43cc.svelte-1vc43cc{max-width:25rem}.range_bg.svelte-1vc43cc.svelte-1vc43cc{margin-left:-75px;margin-top:-10px}.medicals_bg.svelte-1vc43cc.svelte-1vc43cc{margin-right:-50px;margin-top:-15px}}@media(min-width:1024px){.image-container.svelte-1vc43cc.svelte-1vc43cc{width:40rem}.text-contianer.svelte-1vc43cc.svelte-1vc43cc{max-width:30rem}.range_bg.svelte-1vc43cc.svelte-1vc43cc{margin-left:-140px;margin-top:-20px}.medicals_bg.svelte-1vc43cc.svelte-1vc43cc{margin-right:-50px;margin-top:-15px}}",
  map: null
};
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Airbound | Delivery made simple</title>`, ""}`, ""}

<main>
	<div class="${"bg-gradient-to-b from-blue-600 to-blue-500 min-h-screen w-full text-white-100"}"></div>

	
	<div class="${"min-h-screen bg-blue-700"}"><div class="${"max-w-1260 min-h-screen mx-auto py-28 grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12"}">
			<div class="${"content-container col-span-4 md:col-span-8 lg:col-span-12 p-6 md:py-6 md:px-12 flex flex-col md:flex-row items-center justify-between"}"><div class="${"image-container relative z-10 svelte-1vc43cc"}"><img class="${"mx-auto md:mx-0 "}" src="${"section_2/range.png"}" alt="${"women"}">
					<img style="${"z-index: -9;"}" class="${"absolute range_bg top-0 left-0 svelte-1vc43cc"}" src="${"section_2/range-bg.svg"}" alt="${""}"></div>
				<div class="${"text-contianer md:col-start-6 md:col-end-9 mx-auto mt-6 md:mx-0 md:ml-24 svelte-1vc43cc"}"><h1 class="${"font-heading text-3xl sm:text-5xl md:text-4xl md:text-left lg:text-5xl text-white-100 font-semibold text-center"}">Get local orders delivered in less <span class="${"text-green-500"}">than 5 minutes</span></h1>
					<p class="${"text-body font-normal text-white-100 mt-4 sm:text-xl md:text-lg lg:text-xl text-center md:text-left"}">Get your essential orders delivered to you in less than 5 minutes using our fast
						delivery service, so that you aren\u2019t kept waited for long.
					</p></div></div>
			
			<div class="${"content-container col-span-4 md:col-span-8 lg:col-span-12 p-6 md:py-6 md:px-12 flex flex-col mt-24 md:flex-row-reverse items-center justify-between"}"><div class="${"image-container relative z-10 svelte-1vc43cc"}"><img class="${"mx-auto md:mx-0 "}" src="${"section_2/medicals.png"}" alt="${"women"}">
					<img style="${"z-index: -9;"}" class="${"absolute medicals_bg top-0 right-0 svelte-1vc43cc"}" src="${"section_2/medicals-bg.svg"}" alt="${""}"></div>
				<div class="${"text-contianer md:col-start-6 md:col-end-9 mx-auto mt-6 md:mx-0 md:mr-24 svelte-1vc43cc"}"><h1 class="${"font-heading text-3xl sm:text-5xl md:text-4xl lg:text-5xl md:text-left text-white-100 font-semibold text-center"}"><span class="${"text-green-500"}">From your</span> local pharmacies to coffee shops
					</h1>
					<p class="${"text-body font-normal text-white-100 mt-4 sm:text-xl md:text-lg lg:text-xl text-center md:text-left"}">We deliver from a vast variety of locations, so it\u2019s most likely that your selected
						pickup place is already listed by us.
					</p></div></div></div></div>

	
	<div class="${"min-h-screen section_3 bg-blue-600 svelte-1vc43cc"}"><div class="${"max-w-1260 min-h-screen mx-auto py-28"}"><img class="${"mx-auto w-8/12 sm:w-7/12 md:w-6/12 lg:w-5/12"}" src="${"/section_3/heading.svg"}" alt="${"heading"}">
			<div class="${"mt-16 grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12"}"><img class="${"col-span-4 shadow-2xl w-6/12 sm:w-7/12 md:w-9/12 lg:w-10/12 mx-auto my-5 md:my-10"}" src="${"/section_3/med.png"}" alt="${""}">
				<img class="${"col-span-4 shadow-2xl w-6/12 sm:w-7/12 md:w-9/12 lg:w-10/12 mx-auto my-5 md:my-10"}" src="${"/section_3/grocery.png"}" alt="${""}">
				<img class="${"col-span-4 shadow-2xl w-6/12 sm:w-7/12 md:w-9/12 lg:w-10/12 mx-auto my-5 md:my-10"}" src="${"/section_3/food.png"}" alt="${""}">
				<img class="${"col-span-4 shadow-2xl w-6/12 lg:col-span-6 sm:w-7/12 md:w-9/12 lg:w-7/12 mx-auto lg:mx-0 lg:justify-self-end lg:mr-10 my-5 md:my-10"}" src="${"/section_3/stationary.png"}" alt="${""}">
				<img class="${"col-span-4 shadow-2xl md:col-span-8 lg:col-span-6 w-6/12 sm:w-7/12 md:w-5/12 lg:w-7/12 mx-auto lg:ml-10 lg:mx-0 my-5 md:my-10"}" src="${"/section_3/equipment.png"}" alt="${""}"></div></div></div>

	
	<div class="${"min-h-screen bg-blue-700"}"><div class="${"max-w-1260 min-h-screen mx-auto py-28"}"><h1 class="${"text-green-500 font-heading font-medium text-4xl mx-auto w-44 text-center"}">All in just 3 Steps
			</h1>
			<div class="${"timeline font-heading text-lg svelte-1vc43cc"}"><div class="${"timeline__middle svelte-1vc43cc"}"><div class="${"timeline__point svelte-1vc43cc"}"></div></div>
				<div class="${"timeline__component svelte-1vc43cc"}"><img src="${"/section_4/img_1.png"}" alt="${""}" class="${"svelte-1vc43cc"}">
					<div class="${"timeline__text text-white-100 svelte-1vc43cc"}"><h1 class="${"text-green-500 font-medium tracking-widest"}">STEP 1</h1>
						<h2>Order from local shops through our app</h2></div></div>
				<div class="${"timeline__middle svelte-1vc43cc"}"><div class="${"timeline__middle_point svelte-1vc43cc"}"></div></div>
				<div class="${"timeline__component my-5 svelte-1vc43cc"}"><img src="${"/section_4/img_2.png"}" alt="${""}" class="${"svelte-1vc43cc"}">
					<div class="${"timeline__text text-white-100 svelte-1vc43cc"}"><h1 class="${"text-green-500 font-medium tracking-widest"}">STEP 2</h1>
						<h2>Wait for 5 minutes while our drones do their thing</h2></div></div>
				<div class="${"timeline__middle svelte-1vc43cc"}"><div class="${"timeline__last_point svelte-1vc43cc"}"></div></div>
				<div class="${"timeline__component svelte-1vc43cc"}"><img src="${"/section_4/img_3.png"}" alt="${""}" class="${"svelte-1vc43cc"}">
					<div class="${"timeline__text text-white-100 svelte-1vc43cc"}"><h1 class="${"text-green-500 font-medium tracking-widest"}">STEP 3</h1>
						<h2>Order Deliverd! Now wave a \u2018ta-ta\u2019 to the drone</h2></div></div></div></div></div>
</main>`;
});
var index = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Routes
});
const Businesses = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ``;
});
var businesses = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Businesses
});
const Careers = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ``;
});
var careers = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Careers
});
const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ``;
});
var contact = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Contact
});
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ``;
});
var about = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": About
});
const Faq = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ``;
});
var faq = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Faq
});
export { init, render };
