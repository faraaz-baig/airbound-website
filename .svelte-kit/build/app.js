import { respond } from '@sveltejs/kit/ssr';
import root from './generated/root.svelte';
import { set_paths, assets } from './runtime/paths.js';
import { set_prerendering } from './runtime/env.js';
import * as user_hooks from "./hooks.js";

const template = ({ head, body }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<link rel=\"icon\" href=\"/favicon.png\" />\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n\t\t" + head + "\n\t</head>\n\t<body>\n\t\t<div id=\"svelte\">" + body + "</div>\n\t</body>\n</html>\n";

let options = null;

const default_settings = { paths: {"base":"","assets":""} };

// allow paths to be overridden in svelte-kit preview
// and in prerendering
export function init(settings = default_settings) {
	set_paths(settings.paths);
	set_prerendering(settings.prerendering || false);

	const hooks = get_hooks(user_hooks);

	options = {
		amp: false,
		dev: false,
		entry: {
			file: assets + "/_app/start-4e509fd3.js",
			css: [assets + "/_app/assets/start-464e9d0a.css"],
			js: [assets + "/_app/start-4e509fd3.js",assets + "/_app/chunks/vendor-50bc5770.js"]
		},
		fetched: undefined,
		floc: false,
		get_component_path: id => assets + "/_app/" + entry_lookup[id],
		get_stack: error => String(error), // for security
		handle_error: (error, request) => {
			hooks.handleError({ error, request });
			error.stack = options.get_stack(error);
		},
		hooks,
		hydrate: true,
		initiator: undefined,
		load_component,
		manifest,
		paths: settings.paths,
		prerender: true,
		read: settings.read,
		root,
		service_worker: null,
		router: true,
		ssr: false,
		target: "#svelte",
		template,
		trailing_slash: "never"
	};
}

// input has already been decoded by decodeURI
// now handle the rest that decodeURIComponent would do
const d = s => s
	.replace(/%23/g, '#')
	.replace(/%3[Bb]/g, ';')
	.replace(/%2[Cc]/g, ',')
	.replace(/%2[Ff]/g, '/')
	.replace(/%3[Ff]/g, '?')
	.replace(/%3[Aa]/g, ':')
	.replace(/%40/g, '@')
	.replace(/%26/g, '&')
	.replace(/%3[Dd]/g, '=')
	.replace(/%2[Bb]/g, '+')
	.replace(/%24/g, '$');

const empty = () => ({});

const manifest = {
	assets: [{"file":"favicon.png","size":3192,"type":"image/png"},{"file":"section_2/medicals-bg.svg","size":1778,"type":"image/svg+xml"},{"file":"section_2/medicals.png","size":349115,"type":"image/png"},{"file":"section_2/range-bg.svg","size":2442,"type":"image/svg+xml"},{"file":"section_2/range.png","size":352435,"type":"image/png"},{"file":"section_3/equipment.png","size":32007,"type":"image/png"},{"file":"section_3/food.png","size":38624,"type":"image/png"},{"file":"section_3/grocery.png","size":26742,"type":"image/png"},{"file":"section_3/heading.svg","size":569535,"type":"image/svg+xml"},{"file":"section_3/med.png","size":15014,"type":"image/png"},{"file":"section_3/pattern.png","size":834327,"type":"image/png"},{"file":"section_3/stationary.png","size":49842,"type":"image/png"},{"file":"section_4/img_1.png","size":110474,"type":"image/png"},{"file":"section_4/img_2.png","size":123827,"type":"image/png"},{"file":"section_4/img_3.png","size":125412,"type":"image/png"},{"file":"section_4/point.svg","size":990,"type":"image/svg+xml"}],
	layout: "src/routes/__layout.svelte",
	error: ".svelte-kit/build/components/error.svelte",
	routes: [
		{
						type: 'page',
						pattern: /^\/$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/businesses\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/businesses.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/careers\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/careers.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/contact\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/contact.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/about\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/about.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/faq\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/faq.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					}
	]
};

// this looks redundant, but the indirection allows us to access
// named imports without triggering Rollup's missing import detection
const get_hooks = hooks => ({
	getSession: hooks.getSession || (() => ({})),
	handle: hooks.handle || (({ request, resolve }) => resolve(request)),
	handleError: hooks.handleError || (({ error }) => console.error(error.stack)),
	externalFetch: hooks.externalFetch || fetch
});

const module_lookup = {
	"src/routes/__layout.svelte": () => import("..\\..\\src\\routes\\__layout.svelte"),".svelte-kit/build/components/error.svelte": () => import("./components\\error.svelte"),"src/routes/index.svelte": () => import("..\\..\\src\\routes\\index.svelte"),"src/routes/businesses.svelte": () => import("..\\..\\src\\routes\\businesses.svelte"),"src/routes/careers.svelte": () => import("..\\..\\src\\routes\\careers.svelte"),"src/routes/contact.svelte": () => import("..\\..\\src\\routes\\contact.svelte"),"src/routes/about.svelte": () => import("..\\..\\src\\routes\\about.svelte"),"src/routes/faq.svelte": () => import("..\\..\\src\\routes\\faq.svelte")
};

const metadata_lookup = {"src/routes/__layout.svelte":{"entry":"pages/__layout.svelte-ab80e798.js","css":["assets/pages/__layout.svelte-8519248b.css"],"js":["pages/__layout.svelte-ab80e798.js","chunks/vendor-50bc5770.js"],"styles":[]},".svelte-kit/build/components/error.svelte":{"entry":"error.svelte-aceeb7e4.js","css":[],"js":["error.svelte-aceeb7e4.js","chunks/vendor-50bc5770.js"],"styles":[]},"src/routes/index.svelte":{"entry":"pages/index.svelte-1155853a.js","css":["assets/pages/index.svelte-4dd1e868.css"],"js":["pages/index.svelte-1155853a.js","chunks/vendor-50bc5770.js"],"styles":[]},"src/routes/businesses.svelte":{"entry":"pages/businesses.svelte-b5dcd743.js","css":[],"js":["pages/businesses.svelte-b5dcd743.js","chunks/vendor-50bc5770.js"],"styles":[]},"src/routes/careers.svelte":{"entry":"pages/careers.svelte-2f422193.js","css":[],"js":["pages/careers.svelte-2f422193.js","chunks/vendor-50bc5770.js"],"styles":[]},"src/routes/contact.svelte":{"entry":"pages/contact.svelte-6a8b2430.js","css":[],"js":["pages/contact.svelte-6a8b2430.js","chunks/vendor-50bc5770.js"],"styles":[]},"src/routes/about.svelte":{"entry":"pages/about.svelte-594608ea.js","css":[],"js":["pages/about.svelte-594608ea.js","chunks/vendor-50bc5770.js"],"styles":[]},"src/routes/faq.svelte":{"entry":"pages/faq.svelte-6c071923.js","css":[],"js":["pages/faq.svelte-6c071923.js","chunks/vendor-50bc5770.js"],"styles":[]}};

async function load_component(file) {
	const { entry, css, js, styles } = metadata_lookup[file];
	return {
		module: await module_lookup[file](),
		entry: assets + "/_app/" + entry,
		css: css.map(dep => assets + "/_app/" + dep),
		js: js.map(dep => assets + "/_app/" + dep),
		styles
	};
}

export function render(request, {
	prerender
} = {}) {
	const host = request.headers["host"];
	return respond({ ...request, host }, options, { prerender });
}