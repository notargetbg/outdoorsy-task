This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## How to start it

1. First, install the dependencies by running the command in the main directory

```bash
npm install
```

2. Then, run the development server

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tests

Run the command to see the test suite results in watchAll mode

```bash
npm run test
```

## Extra functionality and further improvements

I have added infinite scrolling as pagination for the listing results. I have also added some messages for the user regarding different states and
a count for the total records when those are available from the search.

If I had even more time I would like to use the nextJS router and create the functionality to pass the params
to the search input when user opens the page using URL query params. Something along the lines of `http://localhost:3000/search?keywords=van1`
would directly set the search results without the need of the user to type or press enter.

