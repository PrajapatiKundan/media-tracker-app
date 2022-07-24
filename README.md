# MediaTrackerApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Git learning

## Branch naming conventions

1. Use grouping tokens (words) at the beginning of your branch names.
2. Define and use short lead tokens to differentiate branches in a way that is meaningful to your workflow.
3. Use slashes to separate parts of your branch names.
4. Do not use bare numbers as leading parts.
5. Avoid long descriptive names for long-lived branches.

### Short well-defined tokens

`wip` Works in progress; stuff I know won't be finished soon

`feat` Feature I'm adding or expanding

`bug` Bug fix or experiment

`junk` Throwaway branch created to experiment

Examples,

```
feat/delete-item

fix/css-for-mediaItem-comp
```

### Find branches

`git branch --list "feat/*"`: List all feature branches

## Git Commit message conventions

1. Use following tokens

feat: A new feature

fix: A bug fix

style: Additions or modifications related to styling only

refactor: Code refactoring

test: Additions or modifications to test cases

docs: README, Architectural, or anything related to documentation

chore: Regular code maintenance

2. Start commit message with capitol letter

3. Do not end message with full-stop

4. The first word in your commit message should be one of these:

Add
Create
Refactor
Fix
Release
Document
Modify
Update
Remove
Delete etc...

Example,

```
git commit -m "feat: Add mediaItem component"
```

# Angular learning

## Lazy loading

**Step - 1**

Run following command to create feature module:

```sh
ng g m new-item --routing
```

This will create `new-item.module.ts` and `new-item-routing.module.ts` files in `/new-item` folder

**Step - 2**

Run following command to add component in feature module

```sh
ng g c new-item/my-component --module new-item
```

This will create `my-component` component in `/new-item` folder and register it in `new-item.module.ts` file.

**Step - 3**

Add following code to the **Routes** array `app-routing.module.ts` file

```typescript
{
  path: 'add',
  loadChildren: () => import('./new-item/new-item.module').then((m) => m.NewItemModule),
},
```

This will load new-item module when route is `/add`

> Note:<br>
> Notice that the lazy-loading syntax uses loadChildren followed by a function that uses the browser's built-in import('...') syntax for dynamic imports. The import path is the relative path to the module.<br><br>
> _forRoot()_ - It specify that this is root routing module. It is used only once in application. This method tells Angular to instantiate an instance of the Router class under the hood, and there can be only one router in your app<br><br>
> _forChild()_ - This static method tells angular that there is already a Router instance available in the app so please just register all of these routes with that instance.

## References

[Git naming convention](https://stackoverflow.com/questions/273695/what-are-some-examples-of-commonly-used-practices-for-naming-git-branches)
