# 5627 FE Trainning

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.1.

Create an Angular App from the scratch.
Use Angular Material.
Use SCSS.
create a repository in gitHub and use a master branch and other branches
The App should call a fake API 
https://jsonplaceholder.typicode.com/photos
The application should show at the first view with a free layout a list of cards with a picture from the album and a tittle.
The application should be stateless, should have a service to call the endpoint, a component for the logical manage of the data and comunicate via @Input with a render view component.
every card shoul trigger and EventEmmiter with a popUp with the message:
this card with ID:[id] is triggered, this message should have and @Output to pass this Id.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
