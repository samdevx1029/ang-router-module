# Angular Starter Project: Simple Use of Router and Module

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.24.

## Getting started
Run 'npm install' to install packages.
Run 'npm start' that launches development server at port 4400.
Navigate to `http://localhost:4400/` to view the app.

## Top navigation bar
Note that header.component.css has the following value under '.nav-first-row' section.

  'position: absolute;'
  'left: 0;'
  
This leaves no padding around the navigation bar which completely covers the top part of your browser. For a responsive app, this is more desirable than leaving a uniform gap around the navigation bar. If you want to create the gap around the border anyways, replace the above 2 lines with the following.

  'position: relative;'

## Development server
Run `ng serve --port 4400` for a dev server. Navigate to `http://localhost:4400/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
