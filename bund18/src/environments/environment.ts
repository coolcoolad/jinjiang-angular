// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // recordUrl: 'http://40.74.242.24:8000/api/bund18/record/',
  badgeUrl: 'http://40.74.242.24:8000/api/jjpark/badge/',
  shareUrl: 'http://40.74.242.24:8000/api/jjpark/share/',
  // statUrl: 'http://40.74.242.24:8000/api/jjpark/stat/',
  // deviceCheckUrl: 'http://40.74.242.24:8000/api/bund18/device/check/',
  // deviceOnUrl: 'http://40.74.242.24:8000/api/bund18/device/on/',
  // deviceOffUrl: 'http://40.74.242.24:8000/api/bund18/device/off/',
  wxloginUrl: 'http://40.74.242.24:8000/api/jjpark/wxlogin/',
  licenseUrl: 'http://40.74.242.24:8000/api/jjpark/device/control/request',
  deviceControlUrl: 'http://40.74.242.24:8000/api/jjpark/device/control',
  deviceReleaseUrl: 'http://40.74.242.24:8000/api/jjpark/device/release',
  domainUrl: 'http://127.0.0.1:4200',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
