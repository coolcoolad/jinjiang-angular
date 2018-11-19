// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  recordUrl: 'http://localhost:8000/api/bund18/record/',
  statUrl: 'http://localhost:8000/api/bund18/stat/',
  remoteUrl: 'http://tunnel40045.remotuino.wuzhanggui.shop:81/arduino/digital/30',
  backup_remoteUrl: 'http://tunnel40055.remotuino.wuzhanggui.shop:81/arduino/digital/30',
  devicesUrl: 'http://remotuino.wuzhanggui.shop:8080',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
