# ember-transition-bug

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Steps for bug
1. Run `ember s`
2. Page is loading and will be auto redirected to sub route "base"
3. Refresh page (F5)
4. Error `Uncaught TypeError: routeInfos[(routeInfoLength - 1)] is undefined`

Reason: it occur, because we have in base route a queryParameter with default value `null` (`@tracked messageType = null;`). Removing default value `null` fix the problem

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/)
* [pnpm](https://pnpm.io/)
* [Ember CLI](https://cli.emberjs.com/release/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd ember-transition-bug`
* `pnpm install`

## Running / Development

* `pnpm start`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `pnpm test`
* `pnpm test:ember --server`

### Linting

* `pnpm lint`
* `pnpm lint:fix`

### Building

* `pnpm ember build` (development)
* `pnpm build` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://cli.emberjs.com/release/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
