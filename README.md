# Chatbot with finetuned model

Based on [https://vercel.com/templates/nuxt/nuxt-ai-chatbot](https://vercel.com/templates/nuxt/nuxt-ai-chatbot)

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

In your terminal, set environment variables:

export OPENAI_API_KEY=<your key>
export MODEL_ID=<your finetuned model ID on OpenAI>
export TEMP=<default to 0.8. try something between 0.6-1>

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

## Development Server

Start the development server on localhost to see the UI in your browser

```bash
npm run dev
```

## Deployment

Don't forget to add environment variables `OPENAI_API_KEY` and `MODEL_ID`

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
