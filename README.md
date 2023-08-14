# NFT landing page

> [Working Demo](https://cozmarares.github.io/nft-landing/)

## Project Description

This project is a mock landing page website for an online NFT marketplace. The
design for this website originated from a [follow-along tutorial](https://youtu.be/HZuk6Wkx_Eg)
that explains the basics of using Figma as a website design tool. You can find
the provided [Figma template here](https://www.figma.com/community/file/1105403402122144106),
and view [my work on this project here](<https://www.figma.com/community/file/1273020894426921074/Flux---Figma-Build-Tutorial-(Starter)-(Community)>).

Technologies used:

- TypeScript: typed JavaScript superset
- ReactJS: declarative UI library
- ViteJS: fast build tool
- TailwindCSS: utility-first CSS framework
- ESLint: JavaScript linter tool
- Prettier: code formatter
- Lighthouse: website performance tool

## Getting Started

### Prerequisites

- nodejs

  Debian/Ubuntu:

  ```sh
  sudo apt install nodejs
  ```

- npm

  Debian/Ubuntu:

  ```sh
  sudo apt install npm
  ```

- Lighthouse (optional)

  ```sh
  npm install -g lighthouse
  ```

### Installation

1. Clone the repo

   ```sh
   git clone https://github.com/CozmaRares/nft-landing.git
   ```

2. Install the dependencies

   ```sh
   npm install
   ```

3. Start the development server

   ```sh
   npm run dev
   ```

4. (optional) Generate Lighthouse report

   ```sh
   npm run report
   ```

   > **Note** Runs a bash script under the hood. Make sure your OS can run bash scripts.

   <!-- -->

   > **Note** `report.sh` requires some additional configuration.

5. Build for production

   ```sh
   npm run build
   ```

   or build and deploy (configured deploy on GitHub Pages)

   ```sh
   npm run deploy
   ```

   > **Note** By default, the deploy script will push to the current `origin`
   > remote. To change the default behaviour see [this link](https://github.com/tschaub/gh-pages),
   > or an easier solution would be removing the current `origin` and setting
   > your own.

## Reflection
