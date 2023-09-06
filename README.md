# NFT landing page

> [Working Demo](https://nft-landing.raru.dev/)

## Project Description

A simple landing page for a NFT marketplace.

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
   cd nft-landing
   ```

2. Install the dependencies

   ```sh
   npm install
   ```

3. Start the development server

   ```sh
   npm run dev
   ```

4. Build for production

   ```sh
   npm run build
   ```

   or build and deploy (configured deploy on GitHub Pages)

   ```sh
   npm run deploy
   ```

   > **Note** By default, the deploy script will push to the current `origin`.
   > If you cloned this repository, the `origin` will be set to **MY** GitHub
   > repository and domain. Be sure to remove the `origin` and set it yoursef,
   > and change the `deploy:domain` script if you plan on deploying to GitHub Pages.

    <!---->

   > Remove origin
   >
   > ```sh
   > git remote remove origin
   > ```

5. (optional) Generate Lighthouse report

   ```sh
   npm run report
   ```

   > **Note** Runs a bash script (`report.sh`) under the hood. Make sure your OS
   > can run bash scripts.

   <!-- -->

   > **Note** `report.sh` requires some additional configuration.

## Reflection

The objective of this project was to execute the design demonstrated in this
[step-by-step tutorial](https://youtu.be/HZuk6Wkx_Eg), which provides a
introduction to utilizing Figma as a tool for website design. You can find
the provided [Figma template here](https://www.figma.com/community/file/1105403402122144106),
and view [my work on the design here](<https://www.figma.com/community/file/1273020894426921074/Flux---Figma-Build-Tutorial-(Starter)-(Community)>).

The most demanding aspect revolved around creating a responsive design for the
website. The difficulty arose from initially implementing the design for larger
screens. When adding support for the smaller screens, I had to carefully manage
the changes to prevent breaking the existing design or refactor the code to
ensure compatibility.

This project's tech stack greatly overlaps with [the previous one](https://github.com/CozmaRares/chess)
as it also includes `TypeScript`, `React`, `TailwindCSS`, and `Vite`. The
new additions to the technology stack are `ESLint`, `Prettier`, and `Lighthouse`,
which collectively ensure code quality through linting, consistent formatting,
and performance optimization.
