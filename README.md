# My Unplash

A Next.js (TypeScript) solution for the [My Unsplash Challenge]() on [devChallenges]().

Live demo (version) available at:

## Description

This project was built to complete all the user stories listed or described by the challenge itself. Hence in this project, a user can:

- See a list of photos in the masonry layout that they have added.
- Add a new photo to the list - the new photo should be on top of the list.
- Search for photos by label.
- Hover a photo, and can see a label and a delete button.
- Delete images.

## Installation

1. To get this project files locally on your machine, you can clone this repository by running the following command on your terminal or command line:

```bash
git clone https://github.com/cvrlnolan/my-unsplash
```

2. Next, you need to setup the .env file found in the root with the appropriate API Keys & credentials from the following service providers:

- [MongoDB Atlas](https://cloud.mongodb.com/)

3. Install all the dependency packages found in the `package.json` file by running `yarn install` or `npm install` from the project root directory.

4. Initialize `tailwindcss` by running `npx tailwindcss init -p` to generate the `tailwind.config.js` and `postcss.config.js` configuration files.

5. To start the development server of the application, run `npm run dev` or `yarn dev`. This should log some start-up application information & display the development server url: `http://localhost:3000`. Visit http://localhost:3000 to view your application.

## Usage

### General

This application was built reflecting the MVC architecture and the main dependencies(all found in the package.json) of the application are organised as so:

- Front-end User Interface(UI): [Tailwind CSS](https://tailwindcss.com/)
- Backend Integration: [Next.js API](https://nextjs.org/docs/api-routes/introduction)
- Database Management: [MongoDB](https://mongodb.com/)

Other important services & dependency libraries of the application include:

- [axios](https://www.npmjs.com/package/axios): An http client to fetch urls and make api calls or requests within the application.
- [swr](https://swr.vercel.app/): To fetch and revalidate data on the client-side of the application while keeping the UI reactive.

### Directives

The application is organized from the root(`.`) as follows:

- `./page/` folder(integrated by NextJS) contains the UI Views for the application with the exception of the `./page/api/*` sub-folder.
- `./lib/` folder contains the Firebase initialization configuration file.
- `./components/` folder contains coded UI layouts to be used through out the application.
- `./styles/` folder(integrated by NextJS) contains the global style of the application in which Tailwindcss presets have been defined. The global stylesheet is accessible by all components.
- `./public/` folder(integrated by NextJS) contains global files to be shared through the application. You can store static images here.

Absolute imports to any of these folders through the application are configured in the `tsconfig.json` file in the root.

### Deployment

You may eventually want to deploy a live version of your app in a future instance. [Vercel](https://vercel.com/) platform is suitably built fo the deployment of NextJS application and more as they have an integrated environment to deploy directly from your own [Github Repository](https://github.com/new).

## Support

If any worries, bugs or problem arises in the future, you can create an issue, contribute or contact me via:

- carlnolan@lootyclub.com

## License

![GitHub](https://img.shields.io/github/license/cvrlnolan/my-unsplash) ![GitHub contributors](https://img.shields.io/github/contributors/cvrlnolan/my-unsplash) ![GitHub last commit](https://img.shields.io/github/last-commit/cvrlnolan/my-unsplash) ![GitHub issues](https://img.shields.io/github/issues/cvrlnolan/my-unsplash) ![GitHub repo size](https://img.shields.io/github/repo-size/cvrlnolan/my-unsplash)

![GitHub followers](https://img.shields.io/github/followers/cvrlnolan?style=social) ![Twitter Follow](https://img.shields.io/twitter/follow/realcarlnolan?style=social)
