# Price Wise

Price Wise is a comprehensive tool designed to help users track and monitor prices of products on Amazon. Whether you're a savvy shopper looking for the best deals or a seller trying to stay competitive, Price Wise has you covered with its robust set of features.

## Key Features

1. **Search by Amazon URL**: Simply paste any Amazon product URL into the search bar on the homepage, and Price Wise will add it to the trending section.

2. **Price Tracking & History**: Track the current price, highest recorded price, lowest recorded price, and average price for each product. Keep tabs on pricing trends to make informed purchasing decisions.

3. **Automated Email Alerts**: Set up email notifications using Nodemailer to receive alerts when a product's price reaches the threshold discount percentage or lowest price. Never miss out on a great deal again.

4. **Scheduled Price Updates**: Leverage cron jobs to ensure regular price updates through an exposed API (powered by cron-job.org). Stay up-to-date with the latest price changes without manual intervention.

5. **Efficient Data Scraping**: Utilize Bright Data as a proxy service and Cheerio for efficient HTML parsing, maintaining ethical scraping practices. Get accurate and timely data while respecting website terms of service.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
