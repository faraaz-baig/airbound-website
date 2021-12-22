# Airbound

This is the public GitHub repository for the [Airbound website](https://airbound.co). It is built using Svelte and styled with Tailwind CSS as well as regular CSS. It also uses supabase to store some data.

## Contributing

We are open to all forms of contributions. Fork the repository to get started. The branch names must be descriptive of the contribution being made. To create a new branch, execute the following command in the working directory -

```
git checkout -b <branch-name>
```

We use NPM as our package manager so make sure to use `npm install` to install dependencies.

After, installing dependencies, run the followinf command to spin up a development server -

```
npm run dev
```

### Environment Variables

As mentioned earlier, we use Supabase to store data. For this the following environment variables must be set -

```
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
```

To obtain this, you need to create an account with [Supabase](https://supabase.com/) and then start a new project. Here is a guide -
Click the green button saying "Start you project" at the top right corner of the screen -

![Start a New Project Button](https://user-images.githubusercontent.com/63192115/147099608-c121864f-db1c-4127-a1e8-d8af1b73ae47.png)

You will be prompted to login/signup so complete that.

After you are signed in to the dashboard, click the new project button -

![New Project Button](https://user-images.githubusercontent.com/63192115/147099509-fbf4e6ed-051f-4f01-82bc-4eba738b0ae7.png)

When creating a new project, you will be prompted to select an exisitng organization or create a new one. Anything will work. You can name your project anything you want. Make sure to add a secure password to the database password field. Here is what I am doing -

![New Project Form](https://user-images.githubusercontent.com/63192115/147099666-8de42141-93bf-4eb1-aed8-e25283d772d8.png)

Now you should be able to see some keys, which you can copy and paste into the environment variables (these keys will be different for you) -

![Project Dashboard with Keys](https://user-images.githubusercontent.com/63192115/147099712-c688dc2b-7ad9-40a1-a953-4f5ef02c21f0.png)

The key labeled `anon` and `public` under "Project API keys" is your `VITE_SUPABASE_ANON_KEY` environment variable.

The URL under "Project Configuration" is your `VITE_SUPABASE_URL` environment variable.

### Setting up the database on Supabase
This is an optional step. If you are making changes to the database logic, then only is this needed.

To createa new table. go to the table editor in Supabase studio - 

![image](https://user-images.githubusercontent.com/63192115/147099757-e3c6874d-8d9d-4093-ae36-85d62f998aea.png)

We will add a new table and called it `email_entries`. We are going to leave everything at their defaults, but add one column. This column will be called `email` and will be of type `text`

![image](https://user-images.githubusercontent.com/63192115/147100340-d5adbd3a-2cd0-45c8-bebb-82d96dbf72b0.png)

That is it, click the save button and done.
