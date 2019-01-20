// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBHKFNxCKBtN-x3fO8hnQkVJxpj7OLARfk',
    authDomain: 'toa-v1.firebaseapp.com',
    databaseURL: 'https://toa-v1.firebaseio.com',
    projectId: 'toa-v1',
    storageBucket: 'toa-v1.appspot.com',
    messagingSenderId: '218321081408'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
