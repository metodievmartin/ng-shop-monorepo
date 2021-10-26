
# NgShop - MEAN stack project

## Summary

An E-Commerce project composed of two Angular apps - the `eshop`, the `admin-panel`,
shared common libraries `products`, `orders`, `ui`, `users` and styles all organised and
managed in one [NX Monorepo](https://nx.dev/l/a/getting-started/intro). The project makes use of [PrimeNG](https://www.primefaces.org/primeng/) -
an Angular UI components library and [PrimeFlex](https://www.primefaces.org/primeflex/) - an accompanying
lightweight responsive CSS utility library.

#### Eshop
Fully functional e-commerce app allowing users to sign up, browse categories and 
featured products, filter products by multiple categories, add products to cart which is 
observed and updated in real time, buy products using Stripe payments and notifications.

#### Admin Panel

Consists of dashboard where stats such total sales, users, products & orders 
are being aggregated in real time, separate page for products, categories,
users and orders supporting full CRUD functionalities. Features sortable tables,
advanced editing options, photo uploads, rich text editors, colour pickers & etc. 

#### Libs
Grouped common functionalities in libraries. Each contain pages, components,
services, pipes, interceptors, models and interfaces that can be shared and
used across different apps within the monorepo thus reducing code duplication
and leveraging re-usability.

#### Back-end
A RESTful service in a separate repo and can be found here:

https://github.com/metodievmartin/ngshop-rest-api


## Installation & Pre-requisites

To be able to run Angular on your local system, you need the following:

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
  Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v14.17.5

    $ npm --version
    8.1.1

### NX

To install the NX, open a terminal window and run the following command:

`npm install -g nx`

## Installation
To install and run the app locally download the source code or clone the repository.

`git clone https://github.com/metodievmartin/ng-shop-monorepo.git`

Open the project and cd into the root folder.

`cd ng-shop-monorepo`

Install all the dependencies:

`npm install`

Run any of the commands to start the respective app:

`nx serve eshop`

`nx serve admin-panel`

Navigate to `http://localhost:4200/`. 

The app will load the development server and will automatically reload if you change any of the source files.



## Project Repository Structure
![project-structure](./assets/images/ng-shop-project-structure.drawio(1).png)

This project was generated using [Nx](https://nx.dev).

## Quick Start & Documentation

[Nx Documentation](https://nx.dev/angular)

[10-minute video showing all Nx features](https://nx.dev/getting-started/intro)

[Interactive Tutorial](https://nx.dev/tutorial/01-create-application)

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are our core plugins:

- [Angular](https://angular.io)
  - `ng add @nrwl/angular`
- [React](https://reactjs.org)
  - `ng add @nrwl/react`
- Web (no framework frontends)
  - `ng add @nrwl/web`
- [Nest](https://nestjs.com)
  - `ng add @nrwl/nest`
- [Express](https://expressjs.com)
  - `ng add @nrwl/express`
- [Node](https://nodejs.org)
  - `ng add @nrwl/node`

There are also many [community plugins](https://nx.dev/community) you could add.

## Generate an application

Run `ng g @nrwl/angular:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `ng g @nrwl/angular:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@ng-eshop/mylib`.

## Development server

Run `ng serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng g component my-component --project=my-app` to generate a new component.

## Build

Run `ng build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev/angular) to learn more.

## ☁ Nx Cloud

### Distributed Computation Caching & Distributed Task Execution

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx’s advanced code generation and project dependency graph, plus a unified experience for both frontend and backend developers.

Visit [Nx Cloud](https://nx.app/) to learn more.
