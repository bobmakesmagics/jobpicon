# Maron

## Getting started

To get started with this, first connect to vercel by running the following commands:

```bash
npm install -g vercel # if you don't have vercel installed
vercel login
vercel link
```

Say yes to the prompt to link your account to the vercel cli and link to existing project.
The organization name is `maron` and the project name is `jobpicon`.

Then pull down the environment variables from vercel:

```bash
vercel env pull
```

Then install the npm dependencies:

```bash
npm install
```

Next, run the development server:

```bash
npm run dev
```

Finally, open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

## Customizing

First run this line because vercel is case sensitive and git is not:

```bash
git config core.ignorecase false
```

To learn how to make migrations to the database, see the [Prisma documentation](https://www.prisma.io/docs/concepts/components/prisma-migrate).

## Learn more

To learn more about the technologies used in this site, see the following resources:

- [Tailwind CSS](https://tailwindcss.com/docs) - the official Tailwind CSS documentation
- [Next.js](https://nextjs.org/docs) - the official Next.js documentation
- [Headless UI](https://headlessui.dev) - the official Headless UI documentation
- [Prisma](https://www.prisma.io/docs) - the official Prisma documentation
- [Vercel](https://vercel.com/docs) - the official Vercel documentation
- [PlanetScale](https://planetscale.com/docs) - the official PlanetScale documentation
