# Nhost Serverless Functions for Amadeus Flight Search & Stripe GraphQL

Welcome to the **nhost-serverless-function** repository! This project provides serverless functions built with TypeScript and Express, designed for seamless integration with [Nhost](https://nhost.io/) and modern cloud backends. It features a robust Amadeus flight search API handler and a ready-to-use Stripe GraphQL server, making it ideal for travel, booking, and payment applications.

## ✈️ Features

- **Amadeus Flight Search API Integration**: Effortlessly search for flights using Amadeus APIs with secure token management.
- **Stripe GraphQL Server**: Instantly deploy a Stripe-powered GraphQL API for payment and subscription management.
- **Serverless Ready**: Optimized for deployment on Nhost, Vercel, Netlify, or any serverless platform.
- **TypeScript & Express**: Modern, type-safe codebase for reliability and maintainability.
- **Easy Customization**: Modular structure for quick adaptation to your business needs.

## 📂 Project Structure

```
nhost-serverless-function/
  ├── functions/
  │   ├── _utils.ts           # Utility functions (token management, etc.)
  │   ├── SearchFlights.ts    # Amadeus flight search handler
  │   └── graphql/
  │       └── stripe.ts       # Stripe GraphQL server
  ├── package.json
  ├── tsconfig.json
  └── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 16+
- NPM or Yarn
- [Nhost account](https://nhost.io/) (optional, for deployment)

### Installation

```bash
git clone https://github.com/flygency/amadeus-search-flights.git
cd nhost-serverless-function
npm install
```

### Usage

- **Flight Search**: The `SearchFlights.ts` function handles requests to the Amadeus API, managing tokens and responses automatically.
- **Stripe GraphQL**: The `graphql/stripe.ts` file exposes a GraphQL server for Stripe, using `@nhost/stripe-graphql-js`.

You can deploy these functions to Nhost or any serverless environment that supports Node.js and Express.

## 🛠️ Customization

- Update the Amadeus API endpoint and authentication logic in `SearchFlights.ts` as needed.
- Extend the Stripe GraphQL server with your own resolvers or middleware.

## 📦 Dependencies

- express
- node-fetch
- @nhost/stripe-graphql-js
- graphql, graphql-yoga, graphql-scalars
- jsonwebtoken
- typescript

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!  
Feel free to check the [issues page](https://github.com/flygency/amadeus-search-flights/issues).

## 📄 License

This project is [ISC licensed](LICENSE).

Created with ❤️ by [Syed Zulqarnain](https://www.linkedin.com/in/szulqarnain)

## 🌐 Links

- [Nhost Documentation](https://docs.nhost.io/)
- [Amadeus for Developers](https://developers.amadeus.com/)
- [Stripe GraphQL](https://github.com/nhost/stripe-graphql-js)

---

**Keywords:** nhost, serverless, amadeus, flight search, stripe, graphql, express, typescript, cloud functions, travel api, payment api, nodejs
