# [My Portfolio site](https://portfolio-eight-beta-97.vercel.app/ 'My portfolio page')

![Next.JS](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)

[![Node Version](https://img.shields.io/badge/Node-18.14.1-brightgreen.svg)](https://github.com/nicholas5538/portfolio/blob/main/.nvmrc)

This `Next.js` project is currently not maintain anymore. I have migrated from `Next.js` to `Nuxt.js` for the purpose of learning `Vue.js` and using SSR with `Nuxt.js`. However, you could still access the production version of both `Next.js` and `Nuxt.js` portfolio webpage.

[Next.js version](https://portfolio-eight-beta-97.vercel.app/ 'Next.js portfolio page')

[Nuxt.js version](https://www.nicholasyong.dev/ 'Nuxt.js portfolio page')

**`Nuxt.js` repo is required to be private because of AWS Amplify Hosting pull request preview settings**

## 💪 Objective

It's a great opportunity to showcase my frontend skills, and to explore new frameworks and libraries such as **[Tailwind CSS](https://tailwindcss.com 'tailwindcss homepage')** and **[Next.js](https://nextjs.org 'Next.js homepage')**.

## Getting Started

### Repository Setup

1. Fork this repository

> 🚨 You can fork this repository and play around with it. But please give me proper credit by linking back to this [repo](https://github.com/nicholas5538/portfolio, 'nicholas5538 portfolio repo') if you're planning to use it. _Plagiarism is bad_ after all.

2. Install [Docker Desktop](https://www.docker.com/products/docker-desktop/)

> This is to reduce "It works on my machine" problems

3. Install [pnpm](https://pnpm.io/installation) (Only required if you want to develop without Docker)
   > 💁 `npm install -g pnpm`

## Developing

Once you have [set up the repository](#repo-setup), you're ready to start developing. Starting the development environment is managed by the following command.

- With **_Docker (recommended)_**

```sh
# With Docker compose, you're able
# to see live changes after refreshing
docker compose up -d --build

# Or pulling from docker hub
# You can either pull the image from Docker Hub or build your own image
docker pull -q nicholas5538/portfolio-dev:latest
docker build --compress -t <image name> --target dev .
docker run -d -p 3000:3000 -v .:/app -v /app/node_modules --name <container name> portfolio-dev
```

The `docker run` command will create and run a new container from an image you have pulled with `docker pull`command **OR** the image you have built with `docker build` command.

- With **_pnpm_**

```sh
pnpm run dev
```

The `dev` command will start the application in your local environment.

### Frequently Used Scripts

In addition to the `pnpm run dev` command, there are other scripts available in the package.json. Some of the most common you might get to use are:

- `pnpm run test` - Runs unit tests.

  > 💁 **Tip:** use `pnpm run test:watch` or `pnpm run test:cov` to explicitly specify the desired mode

- `pnpm run format` - Check prettier formatting through all the codes

  > 💁 **Tip:** use `pnpm run format:fix` to run auto prettier formatting across all the codes

- `pnpm run lint` - Runs TS linter through all the codes

## Additional Documentation

- [Docker documentation](https://docs.docker.com/, 'Docker documentation')
- [Next.js documentation](https://nextjs.org/docs 'Next.js documentation')
- [Tailwind CSS styling](https://tailwindcss.com/docs/installation 'Tailwind CSS documentation')
- [Framer Motion](https://www.framer.com/motion/ 'Framer motion documentation')
