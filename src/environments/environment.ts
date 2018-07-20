// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyB2uZxHc_6aEIA-CcARacnpJlg5toY_2-I",
    authDomain: "budgetapp-d3fd2.firebaseapp.com",
    databaseURL: "https://budgetapp-d3fd2.firebaseio.com",
    projectId: "budgetapp-d3fd2",
    storageBucket: "budgetapp-d3fd2.appspot.com",
    messagingSenderId: "442167294804"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
