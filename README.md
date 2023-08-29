# [My Portfolio site](https://nicholasyong.dev 'My portfolio page')

![Next.JS](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)

[![Node Version](https://img.shields.io/badge/Node-18.14.1-brightgreen.svg)](https://github.com/nicholas5538/portfolio/blob/main/.nvmrc)

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

docker pull -q nicholas5538/portfolio-dev:latest
docker run -d -p 3000:3000 -v $(pwd):/home/node/app --name <container name> <image name>
```

The `docker run` command will create and run a new container from an image you have built with `docker build` command.

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
