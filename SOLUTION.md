# ProjectPurpleCow

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.1.

## Installation

1. Git Clone this repo
2. 'cd' into the root directory of the project
3. run `npm install`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:3000/`. The app will automatically reload if you change any of the source files.

> To run the app on a specific port run `ng serve --port={PORT_NUMBER}`

## Env.js file

Enter custom counterapi Key and Namespace

- The app runs with default values when in development mode ('ng serve')
- After the app is built ('ng build') the defaults will be overwritten by the values in the 'env.js'

* `window.__env.counterKey = "KEY_VALUE";`
* `window.__env.counterNamespace = "NAMESPACE_VALUE";`

## Theme

Custom themes and SCSS variables can be found in the theme directory

- default Angular Material color palettes can be customized in `theme/theme.scss`
- quick access SCSS variables can be edited in the `theme/variables.scss` file

## In-App Routing

Routing is in place if different page views were added in the future

- any future pages and components could be added to `app-routing.module.ts`
- a redirect route for the root is sent to `/dashboard`
- routes outside of the defined routes are sent to a `PageNotFoundComponent`

## Future Additions

1. A simple database that would store the count groups rather than using local storage
2. A login page so that individual users would have their own count groups - user data stored in database
3. A simple JWT or auth based system to check user credentials
4. A navigation menu (placed behind logo in navbar) to see individual detail pages of each count group
5. Dynamic form field to enter new name spaces so that the count groups are not limited to a single Namespace
6. Store custom namespace with user in the database

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Branch Information

- all production stages of the application are on branch 'main'
- interim development stages are on branch 'dev' and merged with 'main'

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
