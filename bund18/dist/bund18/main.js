(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_services/alert.service.ts":
/*!********************************************!*\
  !*** ./src/app/_services/alert.service.ts ***!
  \********************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/_services/index.ts":
/*!************************************!*\
  !*** ./src/app/_services/index.ts ***!
  \************************************/
/*! exports provided: RecordService, ShakeService, AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _record_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./record.service */ "./src/app/_services/record.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RecordService", function() { return _record_service__WEBPACK_IMPORTED_MODULE_0__["RecordService"]; });

/* harmony import */ var _shake_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shake.service */ "./src/app/_services/shake.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShakeService", function() { return _shake_service__WEBPACK_IMPORTED_MODULE_1__["ShakeService"]; });

/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alert.service */ "./src/app/_services/alert.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return _alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"]; });






/***/ }),

/***/ "./src/app/_services/record.service.ts":
/*!*********************************************!*\
  !*** ./src/app/_services/record.service.ts ***!
  \*********************************************/
/*! exports provided: RecordService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordService", function() { return RecordService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RecordService = /** @class */ (function () {
    function RecordService(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
    }
    RecordService.prototype.list = function () {
        return this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].recordUrl, this.httpOptions);
    };
    RecordService.prototype.create = function (record) {
        return this.http.post("" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].recordUrl, record, this.httpOptions);
    };
    RecordService.prototype.put = function (id, record) {
        return this.http.put("" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].recordUrl + id + "/", record, this.httpOptions);
    };
    RecordService.prototype.retrieve = function (id) {
        return this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].recordUrl + id + "/", this.httpOptions);
    };
    RecordService.prototype.getDateStat = function () {
        return this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].statUrl, this.httpOptions);
    };
    RecordService.prototype.requestBadge = function (badge) {
        return this.http.post("" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].badgeUrl, badge, this.httpOptions);
    };
    RecordService.prototype.saveShareInfo = function (log) {
        return this.http.post("" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].shareUrl, log, this.httpOptions);
    };
    RecordService.prototype.checkDevice = function () {
        return this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].deviceCheckUrl, this.httpOptions);
    };
    RecordService.prototype.turnOnDevice = function () {
        return this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].deviceOnUrl, this.httpOptions);
    };
    RecordService.prototype.turnOffDevice = function () {
        return this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].deviceOffUrl, this.httpOptions);
    };
    RecordService.prototype.getWxParameters = function (page) {
        return this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].wxloginUrl + page, this.httpOptions);
    };
    RecordService.prototype.getLicense = function () {
        return this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].licenseUrl, this.httpOptions);
    };
    RecordService.prototype.controlDevice = function (deviceId) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].deviceControlUrl + "/" + deviceId);
    };
    RecordService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RecordService);
    return RecordService;
}());



/***/ }),

/***/ "./src/app/_services/shake.service.ts":
/*!********************************************!*\
  !*** ./src/app/_services/shake.service.ts ***!
  \********************************************/
/*! exports provided: ShakeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShakeService", function() { return ShakeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShakeService = /** @class */ (function () {
    function ShakeService() {
        this.hasDeviceMotion = 'ondevicemotion' in window;
        this.options = {
            threshold: 15,
            timeout: 1000 //default interval between events
        };
        this.lastTime = new Date();
        this.lastX = null;
        this.lastY = null;
        this.lastZ = null;
        this.event = null;
    }
    ShakeService.prototype.reset = function () {
        this.lastTime = new Date();
        this.lastX = null;
        this.lastY = null;
        this.lastZ = null;
    };
    ShakeService.prototype.start = function () {
        this.event = document.createEvent('Event');
        this.event.initEvent('shake', true, true);
        this.reset();
        if (this.hasDeviceMotion) {
            window.addEventListener('devicemotion', this, false);
        }
    };
    ShakeService.prototype.stop = function () {
        if (this.hasDeviceMotion) {
            window.removeEventListener('devicemotion', this, false);
        }
        this.reset();
    };
    ShakeService.prototype.devicemotion = function (e) {
        var current = e.accelerationIncludingGravity;
        var currentTime;
        var timeDifference;
        var deltaX = 0;
        var deltaY = 0;
        var deltaZ = 0;
        if ((this.lastX === null) && (this.lastY === null) && (this.lastZ === null)) {
            this.lastX = current.x;
            this.lastY = current.y;
            this.lastZ = current.z;
            return;
        }
        deltaX = Math.abs(this.lastX - current.x);
        deltaY = Math.abs(this.lastY - current.y);
        deltaZ = Math.abs(this.lastZ - current.z);
        if (((deltaX > this.options.threshold) && (deltaY > this.options.threshold)) || ((deltaX > this.options.threshold) && (deltaZ > this.options.threshold)) || ((deltaY > this.options.threshold) && (deltaZ > this.options.threshold))) {
            //calculate time in milliseconds since last shake registered
            currentTime = new Date();
            timeDifference = currentTime.getTime() - this.lastTime.getTime();
            if (timeDifference > this.options.timeout) {
                window.dispatchEvent(this.event);
                this.lastTime = new Date();
            }
        }
        this.lastX = current.x;
        this.lastY = current.y;
        this.lastZ = current.z;
    };
    ShakeService.prototype.handleEvent = function (e) {
        if (typeof (this[e.type]) === 'function') {
            return this[e.type](e);
        }
    };
    ShakeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ShakeService);
    return ShakeService;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- main app container -->\r\n<router-outlet></router-outlet>\r\n\r\n<!-- JAVASCRIPTS -->\r\n<script src=\"../js/jquery.min.js\"></script>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-echarts */ "./node_modules/ngx-echarts/fesm5/ngx-echarts.js");
/* harmony import */ var ng2_device_detector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-device-detector */ "./node_modules/ng2-device-detector/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_services */ "./src/app/_services/index.ts");
/* harmony import */ var _selective_preloading_strategy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./selective-preloading-strategy */ "./src/app/selective-preloading-strategy.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _start_start_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./start/start.component */ "./src/app/start/start.component.ts");
/* harmony import */ var _hint_hint_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./hint/hint.component */ "./src/app/hint/hint.component.ts");
/* harmony import */ var _hintEn_hint_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./hintEn/hint.component */ "./src/app/hintEn/hint.component.ts");
/* harmony import */ var _select_select_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./select/select.component */ "./src/app/select/select.component.ts");
/* harmony import */ var _selectEn_select_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./selectEn/select.component */ "./src/app/selectEn/select.component.ts");
/* harmony import */ var _display_display_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./display/display.component */ "./src/app/display/display.component.ts");
/* harmony import */ var _displayEn_display_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./displayEn/display.component */ "./src/app/displayEn/display.component.ts");
/* harmony import */ var _share_share_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./share/share.component */ "./src/app/share/share.component.ts");
/* harmony import */ var _shareEn_share_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shareEn/share.component */ "./src/app/shareEn/share.component.ts");
/* harmony import */ var _end_end_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./end/end.component */ "./src/app/end/end.component.ts");
/* harmony import */ var _endEn_end_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./endEn/end.component */ "./src/app/endEn/end.component.ts");
/* harmony import */ var _shareCard_shareCard_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shareCard/shareCard.component */ "./src/app/shareCard/shareCard.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_6__["routing"],
                ngx_echarts__WEBPACK_IMPORTED_MODULE_3__["NgxEchartsModule"],
                ng2_device_detector__WEBPACK_IMPORTED_MODULE_4__["Ng2DeviceDetectorModule"].forRoot()
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_9__["WelcomeComponent"],
                _start_start_component__WEBPACK_IMPORTED_MODULE_10__["StartComponent"],
                _hint_hint_component__WEBPACK_IMPORTED_MODULE_11__["HintComponent"],
                _hintEn_hint_component__WEBPACK_IMPORTED_MODULE_12__["HintEnComponent"],
                _select_select_component__WEBPACK_IMPORTED_MODULE_13__["SelectComponent"],
                _selectEn_select_component__WEBPACK_IMPORTED_MODULE_14__["SelectEnComponent"],
                _display_display_component__WEBPACK_IMPORTED_MODULE_15__["DisplayComponent"],
                _displayEn_display_component__WEBPACK_IMPORTED_MODULE_16__["DisplayEnComponent"],
                _share_share_component__WEBPACK_IMPORTED_MODULE_17__["ShareComponent"],
                _shareEn_share_component__WEBPACK_IMPORTED_MODULE_18__["ShareEnComponent"],
                _end_end_component__WEBPACK_IMPORTED_MODULE_19__["EndComponent"],
                _endEn_end_component__WEBPACK_IMPORTED_MODULE_20__["EndEnComponent"],
                _shareCard_shareCard_component__WEBPACK_IMPORTED_MODULE_21__["ShareCardComponent"],
            ],
            providers: [
                _services__WEBPACK_IMPORTED_MODULE_7__["RecordService"],
                { provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], useValue: 'zh-Hans' },
                _selective_preloading_strategy__WEBPACK_IMPORTED_MODULE_8__["SelectivePreloadingStrategy"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _start_start_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./start/start.component */ "./src/app/start/start.component.ts");
/* harmony import */ var _hint_hint_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hint/hint.component */ "./src/app/hint/hint.component.ts");
/* harmony import */ var _hintEn_hint_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hintEn/hint.component */ "./src/app/hintEn/hint.component.ts");
/* harmony import */ var _select_select_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./select/select.component */ "./src/app/select/select.component.ts");
/* harmony import */ var _selectEn_select_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./selectEn/select.component */ "./src/app/selectEn/select.component.ts");
/* harmony import */ var _display_display_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./display/display.component */ "./src/app/display/display.component.ts");
/* harmony import */ var _displayEn_display_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./displayEn/display.component */ "./src/app/displayEn/display.component.ts");
/* harmony import */ var _share_share_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./share/share.component */ "./src/app/share/share.component.ts");
/* harmony import */ var _shareEn_share_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shareEn/share.component */ "./src/app/shareEn/share.component.ts");
/* harmony import */ var _end_end_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./end/end.component */ "./src/app/end/end.component.ts");
/* harmony import */ var _endEn_end_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./endEn/end.component */ "./src/app/endEn/end.component.ts");
/* harmony import */ var _shareCard_shareCard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shareCard/shareCard.component */ "./src/app/shareCard/shareCard.component.ts");













var appRoutes = [
    { path: '', pathMatch: 'full', component: _start_start_component__WEBPACK_IMPORTED_MODULE_1__["StartComponent"] },
    { path: 'bund18/start', pathMatch: 'full', redirectTo: '' },
    { path: 'bund18/hint', pathMatch: 'full', component: _hint_hint_component__WEBPACK_IMPORTED_MODULE_2__["HintComponent"] },
    { path: 'bund18/hintEn', pathMatch: 'full', component: _hintEn_hint_component__WEBPACK_IMPORTED_MODULE_3__["HintEnComponent"] },
    { path: 'bund18/select', pathMatch: 'full', component: _select_select_component__WEBPACK_IMPORTED_MODULE_4__["SelectComponent"] },
    { path: 'bund18/selectEn', pathMatch: 'full', component: _selectEn_select_component__WEBPACK_IMPORTED_MODULE_5__["SelectEnComponent"] },
    { path: 'bund18/display/:imgSrc', pathMatch: 'full', component: _display_display_component__WEBPACK_IMPORTED_MODULE_6__["DisplayComponent"] },
    { path: 'bund18/displayEn/:imgSrc', pathMatch: 'full', component: _displayEn_display_component__WEBPACK_IMPORTED_MODULE_7__["DisplayEnComponent"] },
    { path: 'bund18/share', pathMatch: 'full', component: _share_share_component__WEBPACK_IMPORTED_MODULE_8__["ShareComponent"] },
    { path: 'bund18/shareEn', pathMatch: 'full', component: _shareEn_share_component__WEBPACK_IMPORTED_MODULE_9__["ShareEnComponent"] },
    { path: 'bund18/end', pathMatch: 'full', component: _end_end_component__WEBPACK_IMPORTED_MODULE_10__["EndComponent"] },
    { path: 'bund18/endEn', pathMatch: 'full', component: _endEn_end_component__WEBPACK_IMPORTED_MODULE_11__["EndEnComponent"] },
    { path: 'bund18/shareCard/:id', pathMatch: 'full', component: _shareCard_shareCard_component__WEBPACK_IMPORTED_MODULE_12__["ShareCardComponent"] },
    { path: '**', redirectTo: '' },
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes, {
    preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_0__["PreloadAllModules"]
});


/***/ }),

/***/ "./src/app/display/display.component.css":
/*!***********************************************!*\
  !*** ./src/app/display/display.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".parent{\r\n  position: relative;\r\n  text-align: center;\r\n}\r\n\r\n.big-img {\r\n  width: 80%;\r\n  margin-top: 8%;\r\n}\r\n\r\n.footer {\r\n  width: 100%;\r\n  height: 7%;\r\n  position: fixed;\r\n  bottom: 3%;\r\n  text-align: center;\r\n}\r\n\r\n.footer img {\r\n  height: 100%;\r\n  width: auto;\r\n}"

/***/ }),

/***/ "./src/app/display/display.component.html":
/*!************************************************!*\
  !*** ./src/app/display/display.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"parent\"> \r\n    <img [src]=\"imgSrc\" class=\"big-img\" />\r\n    <div class=\"footer\">\r\n        <img src=\"../../assets/PNG Assets H5/Logos/DreamOn_Footer_Logo_JJ_Col_Butterfly_Hor.png\" alt=\"Can't load this image\">\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/display/display.component.ts":
/*!**********************************************!*\
  !*** ./src/app/display/display.component.ts ***!
  \**********************************************/
/*! exports provided: DisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayComponent", function() { return DisplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DisplayComponent = /** @class */ (function () {
    function DisplayComponent(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.imgSrc = '';
        this.pathPrefix = '../../assets/gif/';
        this.imgSrc = this.pathPrefix + this.activatedRoute.snapshot.params['imgSrc'];
    }
    DisplayComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.router.navigate(['bund18/share']);
        }, 3000);
    };
    DisplayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-display',
            template: __webpack_require__(/*! ./display.component.html */ "./src/app/display/display.component.html"),
            styles: [__webpack_require__(/*! ./display.component.css */ "./src/app/display/display.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], DisplayComponent);
    return DisplayComponent;
}());



/***/ }),

/***/ "./src/app/displayEn/display.component.css":
/*!*************************************************!*\
  !*** ./src/app/displayEn/display.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".parent{\r\n  position: relative;\r\n  text-align: center;\r\n}\r\n\r\n.big-img {\r\n  width: 80%;\r\n  margin-top: 8%;\r\n}\r\n\r\n.footer {\r\n  width: 100%;\r\n  height: 7%;\r\n  position: fixed;\r\n  bottom: 3%;\r\n  text-align: center;\r\n}\r\n\r\n.footer img {\r\n  height: 100%;\r\n  width: auto;\r\n}"

/***/ }),

/***/ "./src/app/displayEn/display.component.html":
/*!**************************************************!*\
  !*** ./src/app/displayEn/display.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"parent\"> \r\n    <img [src]=\"imgSrc\" class=\"big-img\" />\r\n    <div class=\"footer\">\r\n        <img src=\"../../assets/PNG Assets H5/Logos/DreamOn_Footer_Logo_JJ_Col_Butterfly_Hor.png\" alt=\"Can't load this image\">\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/displayEn/display.component.ts":
/*!************************************************!*\
  !*** ./src/app/displayEn/display.component.ts ***!
  \************************************************/
/*! exports provided: DisplayEnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayEnComponent", function() { return DisplayEnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DisplayEnComponent = /** @class */ (function () {
    function DisplayEnComponent(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.imgSrc = '';
        this.pathPrefix = '../../assets/gif/';
        this.imgSrc = this.pathPrefix + this.activatedRoute.snapshot.params['imgSrc'];
    }
    DisplayEnComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.router.navigate(['bund18/shareEn']);
        }, 3000);
    };
    DisplayEnComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-display-en',
            template: __webpack_require__(/*! ./display.component.html */ "./src/app/displayEn/display.component.html"),
            styles: [__webpack_require__(/*! ./display.component.css */ "./src/app/displayEn/display.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], DisplayEnComponent);
    return DisplayEnComponent;
}());



/***/ }),

/***/ "./src/app/end/end.component.css":
/*!***************************************!*\
  !*** ./src/app/end/end.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg img {\r\n    max-width: 100%;\r\n    height: auto;\r\n}\r\n\r\n.bg {\r\n    /* background-image: url('../../images/background.jpg'); */\r\n    background-size: cover;    \r\n}\r\n\r\n.top {\r\n    margin-top: 25%;\r\n}\r\n\r\n.middle {\r\n    margin-top: 25%;\r\n    padding: 5%;\r\n}\r\n\r\n.font {\r\n    text-align: center;\r\n    margin-bottom: 10%;\r\n    font-size: 20px;\r\n}"

/***/ }),

/***/ "./src/app/end/end.component.html":
/*!****************************************!*\
  !*** ./src/app/end/end.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg\">  \r\n    <div class=\"top\">\r\n        <div class=\"font\">感谢您的参与</div>\r\n    </div> \r\n    <div class=\"middle\">\r\n        <img src=\"../../assets/H5/Official_DreamOn_Logo_JJ_Col_Butterfly_Stack.png\" alt=\"Can't load this image\" name=\"canvas\">\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/end/end.component.ts":
/*!**************************************!*\
  !*** ./src/app/end/end.component.ts ***!
  \**************************************/
/*! exports provided: EndComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EndComponent", function() { return EndComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_record_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/record.service */ "./src/app/_services/record.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EndComponent = /** @class */ (function () {
    function EndComponent(recordService, router) {
        this.recordService = recordService;
        this.router = router;
    }
    EndComponent.prototype.ngOnInit = function () {
    };
    EndComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-end',
            template: __webpack_require__(/*! ./end.component.html */ "./src/app/end/end.component.html"),
            styles: [__webpack_require__(/*! ./end.component.css */ "./src/app/end/end.component.css")]
        }),
        __metadata("design:paramtypes", [_services_record_service__WEBPACK_IMPORTED_MODULE_1__["RecordService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EndComponent);
    return EndComponent;
}());



/***/ }),

/***/ "./src/app/endEn/end.component.css":
/*!*****************************************!*\
  !*** ./src/app/endEn/end.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg img {\r\n    max-width: 100%;\r\n    height: auto;\r\n}\r\n\r\n.bg {\r\n    /* background-image: url('../../images/background.jpg'); */\r\n    background-size: cover;    \r\n}\r\n\r\n.top {\r\n    margin-top: 25%;\r\n}\r\n\r\n.middle {\r\n    margin-top: 25%;\r\n    padding: 5%;\r\n}\r\n\r\n.font {\r\n    text-align: center;\r\n    margin-bottom: 10%;\r\n    font-size: 20px;\r\n}"

/***/ }),

/***/ "./src/app/endEn/end.component.html":
/*!******************************************!*\
  !*** ./src/app/endEn/end.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg\"> \r\n    <div class=\"top\">\r\n      <div class=\"font\">THANK YOU</div>\r\n      <div class=\"font\">YOUR SESSION IS COMPLETE</div>\r\n    </div> \r\n    <div class=\"middle\">\r\n      <img src=\"../../assets/H5/Official_DreamOn_Logo_JJ_Col_Butterfly_Stack.png\" alt=\"Can't load this image\" name=\"canvas\"> \r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/endEn/end.component.ts":
/*!****************************************!*\
  !*** ./src/app/endEn/end.component.ts ***!
  \****************************************/
/*! exports provided: EndEnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EndEnComponent", function() { return EndEnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_record_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/record.service */ "./src/app/_services/record.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EndEnComponent = /** @class */ (function () {
    function EndEnComponent(recordService, router) {
        this.recordService = recordService;
        this.router = router;
    }
    EndEnComponent.prototype.ngOnInit = function () {
    };
    EndEnComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-end-en',
            template: __webpack_require__(/*! ./end.component.html */ "./src/app/endEn/end.component.html"),
            styles: [__webpack_require__(/*! ./end.component.css */ "./src/app/endEn/end.component.css")]
        }),
        __metadata("design:paramtypes", [_services_record_service__WEBPACK_IMPORTED_MODULE_1__["RecordService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EndEnComponent);
    return EndEnComponent;
}());



/***/ }),

/***/ "./src/app/hint/hint.component.css":
/*!*****************************************!*\
  !*** ./src/app/hint/hint.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".parent{\r\n    position: relative;\r\n}\r\n\r\n.big-font {\r\n    padding-top: 55%;\r\n    text-align: center;\r\n    font-size: 25px;\r\n}\r\n\r\n.small-font {\r\n    padding-top: 15%;\r\n    text-align: center;\r\n    font-size: 18px;\r\n}\r\n\r\n.footer {\r\n    width: 100%;\r\n    height: 7%;\r\n    position: fixed;\r\n    bottom: 3%;\r\n    text-align: center;\r\n}\r\n\r\n.footer img {\r\n    height: 100%;\r\n    width: auto;\r\n}\r\n\r\n.background {\r\n    width: 100%;\r\n    height: auto;\r\n}"

/***/ }),

/***/ "./src/app/hint/hint.component.html":
/*!******************************************!*\
  !*** ./src/app/hint/hint.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"parent\">\r\n  <!-- <img src=\"../../assets/H5/3-05.png\" class=\"background\" alt=\"Can't load this image\"> -->\r\n  <div class=\"big-font\">\r\n    <div>\r\n      抓住这个了解你自己的机会，\r\n    </div>\r\n    <div style=\"padding-top: 5%\">所以....是什么呢？</div>\r\n  </div>\r\n  <div class=\"small-font\">选一个你认为最符合你人设的关键词吧</div>\r\n  <div class=\"footer\">\r\n    <img src=\"../../assets/PNG Assets H5/Logos/DreamOn_Footer_Logo_JJ_Col_Butterfly_Hor.png\" alt=\"Can't load this image\">\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/hint/hint.component.ts":
/*!****************************************!*\
  !*** ./src/app/hint/hint.component.ts ***!
  \****************************************/
/*! exports provided: HintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HintComponent", function() { return HintComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_device_detector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-device-detector */ "./node_modules/ng2-device-detector/index.js");
/* harmony import */ var _services_record_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/record.service */ "./src/app/_services/record.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HintComponent = /** @class */ (function () {
    function HintComponent(recordService, router, deviceService) {
        this.recordService = recordService;
        this.router = router;
        this.deviceService = deviceService;
    }
    HintComponent.prototype.ngOnInit = function () {
        var _this = this;
        localStorage.clear();
        setTimeout(function () {
            _this.deviceInfo = _this.deviceService.getDeviceInfo();
            //console.log(this.deviceInfo);    
            var badge = {
                browser: "" + _this.deviceInfo.browser,
                version: "" + _this.deviceInfo.browser_version,
                device: "" + _this.deviceInfo.device,
                os: "" + _this.deviceInfo.os,
            };
            _this.recordService.requestBadge(badge).subscribe(function (resp) {
                localStorage.setItem('badgeID', resp.id.toString());
                _this.router.navigate(['bund18/select']);
            }, function (error) {
                console.log(error);
                _this.router.navigate(['bund18/select']);
            });
        }, 2000);
    };
    HintComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hint',
            template: __webpack_require__(/*! ./hint.component.html */ "./src/app/hint/hint.component.html"),
            styles: [__webpack_require__(/*! ./hint.component.css */ "./src/app/hint/hint.component.css")]
        }),
        __metadata("design:paramtypes", [_services_record_service__WEBPACK_IMPORTED_MODULE_3__["RecordService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ng2_device_detector__WEBPACK_IMPORTED_MODULE_2__["Ng2DeviceService"]])
    ], HintComponent);
    return HintComponent;
}());



/***/ }),

/***/ "./src/app/hintEn/hint.component.css":
/*!*******************************************!*\
  !*** ./src/app/hintEn/hint.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".parent{\r\n    position: relative;\r\n}\r\n\r\n.big-font {\r\n    padding-top: 55%;\r\n    text-align: center;\r\n    font-size: 19px;\r\n    padding-bottom: 15%;\r\n}\r\n\r\n.small-font {\r\n    text-align: center;\r\n    font-size: 18px;\r\n}\r\n\r\n.footer {\r\n    width: 100%;\r\n    height: 7%;\r\n    position: fixed;\r\n    bottom: 3%;\r\n    text-align: center;\r\n}\r\n\r\n.footer img {\r\n    height: 100%;\r\n    width: auto;\r\n}\r\n\r\n.background {\r\n    width: 100%;\r\n    height: auto;\r\n}"

/***/ }),

/***/ "./src/app/hintEn/hint.component.html":
/*!********************************************!*\
  !*** ./src/app/hintEn/hint.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"parent\">\r\n  <!-- <img src=\"../../assets/H5/3-05.png\" class=\"background\" alt=\"Can't load this image\"> -->\r\n  <div class=\"big-font\">\r\n    <div>\r\n      THIS IS A CHANGCE TO BE HEARD SO....\r\n    </div>\r\n    <div style=\"padding-top: 5%\">WHAT'S THE WORD?</div>\r\n  </div>\r\n  <div class=\"small-font\">Select the icon that describes</div>\r\n  <div class=\"small-font\">best who you think you are!</div>\r\n  <div class=\"footer\">\r\n    <img src=\"../../assets/PNG Assets H5/Logos/DreamOn_Footer_Logo_JJ_Col_Butterfly_Hor.png\" alt=\"Can't load this image\">\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/hintEn/hint.component.ts":
/*!******************************************!*\
  !*** ./src/app/hintEn/hint.component.ts ***!
  \******************************************/
/*! exports provided: HintEnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HintEnComponent", function() { return HintEnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_device_detector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-device-detector */ "./node_modules/ng2-device-detector/index.js");
/* harmony import */ var _services_record_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/record.service */ "./src/app/_services/record.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HintEnComponent = /** @class */ (function () {
    function HintEnComponent(recordService, router, deviceService) {
        this.recordService = recordService;
        this.router = router;
        this.deviceService = deviceService;
    }
    HintEnComponent.prototype.ngOnInit = function () {
        var _this = this;
        localStorage.clear();
        setTimeout(function () {
            _this.deviceInfo = _this.deviceService.getDeviceInfo();
            //console.log(this.deviceInfo);    
            var badge = {
                browser: "" + _this.deviceInfo.browser,
                version: "" + _this.deviceInfo.browser_version,
                device: "" + _this.deviceInfo.device,
                os: "" + _this.deviceInfo.os,
            };
            _this.recordService.requestBadge(badge).subscribe(function (resp) {
                localStorage.setItem('badgeID', resp.id.toString());
                _this.router.navigate(['bund18/selectEn']);
            }, function (error) {
                console.log(error);
                _this.router.navigate(['bund18/selectEn']);
            });
        }, 2000);
    };
    HintEnComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hint-en',
            template: __webpack_require__(/*! ./hint.component.html */ "./src/app/hintEn/hint.component.html"),
            styles: [__webpack_require__(/*! ./hint.component.css */ "./src/app/hintEn/hint.component.css")]
        }),
        __metadata("design:paramtypes", [_services_record_service__WEBPACK_IMPORTED_MODULE_3__["RecordService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ng2_device_detector__WEBPACK_IMPORTED_MODULE_2__["Ng2DeviceService"]])
    ], HintEnComponent);
    return HintEnComponent;
}());



/***/ }),

/***/ "./src/app/select/select.component.css":
/*!*********************************************!*\
  !*** ./src/app/select/select.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".parent{\r\n    position: relative;\r\n}\r\n\r\ntable {\r\n    width: 100%;\r\n    margin-top: 10%;\r\n}\r\n\r\ntable td {\r\n    width: 50%;\r\n}\r\n\r\ntable td img {\r\n    width: 60%;\r\n    margin-top: 20%;\r\n}\r\n\r\n.left-col {\r\n    text-align: center;\r\n}\r\n\r\n.right-col {\r\n    text-align: center;\r\n}\r\n\r\n.footer {\r\n    width: 100%;\r\n    height: 7%;\r\n    position: fixed;\r\n    bottom: 3%;\r\n    text-align: center;\r\n}\r\n\r\n.footer img {\r\n    height: 100%;\r\n    width: auto;\r\n}"

/***/ }),

/***/ "./src/app/select/select.component.html":
/*!**********************************************!*\
  !*** ./src/app/select/select.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"parent\">\r\n  <table>\r\n    <tr>\r\n      <td class=\"left-col\">\r\n        <img [hidden]=\"highlightIcon === 0\" src=\"../../assets/PNG Assets H5/Category Icons/Diamond_Icon_Col.png\" (click)=\"onClickDiamond()\">\r\n        <img [hidden]=\"highlightIcon !== 0\" src=\"../../assets/PNG Assets H5/Category Icons/Diamond_Icon_Wht.png\" (click)=\"onClickDiamond()\">\r\n        <div></div>\r\n      </td>\r\n      <td class=\"right-col\">\r\n        <img [hidden]=\"highlightIcon === 1\" src=\"../../assets/PNG Assets H5/Category Icons/GameBoy_Icon_Col.png\" (click)=\"onClickGameBoy()\">\r\n        <img [hidden]=\"highlightIcon !== 1\" src=\"../../assets/PNG Assets H5/Category Icons/GameBoy_Icon_Wht.png\" (click)=\"onClickGameBoy()\">\r\n        <div></div>\r\n      </td>\r\n    </tr>\r\n    <tr>\r\n      <td class=\"left-col\">低调星人</td>\r\n      <td class=\"right-col\">游戏爱好者</td>\r\n    </tr>\r\n    <tr>\r\n      <td class=\"left-col\">\r\n        <img [hidden]=\"highlightIcon === 2\" src=\"../../assets/PNG Assets H5/Category Icons/AirPlane_Icon_Col.png\" (click)=\"onClickAirPlane()\">\r\n        <img [hidden]=\"highlightIcon !== 2\" src=\"../../assets/PNG Assets H5/Category Icons/AirPlane_Icon_Wht.png\" (click)=\"onClickAirPlane()\">\r\n      </td>\r\n      <td class=\"right-col\">\r\n        <img [hidden]=\"highlightIcon === 3\" src=\"../../assets/PNG Assets H5/Category Icons/Heart_Icon_Col.png\" (click)=\"onClickHeart()\">\r\n        <img [hidden]=\"highlightIcon !== 3\" src=\"../../assets/PNG Assets H5/Category Icons/Heart_Icon_Blk.png\" (click)=\"onClickHeart()\">\r\n      </td>\r\n    </tr>\r\n    <tr>\r\n      <td class=\"left-col\">旅行达人</td>\r\n      <td class=\"right-col\">寻找真爱</td>\r\n    </tr>\r\n    <tr>\r\n      <td class=\"left-col\">\r\n        <img [hidden]=\"highlightIcon === 4\" src=\"../../assets/PNG Assets H5/Category Icons/Saturn_Icon_Col.png\" (click)=\"onClickSaturn()\">\r\n        <img [hidden]=\"highlightIcon !== 4\" src=\"../../assets/PNG Assets H5/Category Icons/Saturn_Icon_Wht.png\" (click)=\"onClickSaturn()\">\r\n      </td>\r\n      <td class=\"right-col\">\r\n        <img [hidden]=\"highlightIcon === 5\" src=\"../../assets/PNG Assets H5/Category Icons/Cat_Icon_Col.png\" (click)=\"onClickCat()\">\r\n        <img [hidden]=\"highlightIcon !== 5\" src=\"../../assets/PNG Assets H5/Category Icons/Cat_Icon_Wht.png\" (click)=\"onClickCat()\">\r\n      </td>\r\n    </tr>\r\n    <tr>\r\n      <td class=\"left-col\">逃离星球</td>\r\n      <td class=\"right-col\">铲屎官</td>\r\n    </tr>\r\n  </table>\r\n  <div *ngIf=\"showError\">网络错误...Please retry...</div>\r\n  <div class=\"footer\">\r\n      <img src=\"../../assets/PNG Assets H5/Logos/DreamOn_Footer_Logo_JJ_Col_Butterfly_Hor.png\" alt=\"Can't load this image\">\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/select/select.component.ts":
/*!********************************************!*\
  !*** ./src/app/select/select.component.ts ***!
  \********************************************/
/*! exports provided: SelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectComponent", function() { return SelectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_record_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/record.service */ "./src/app/_services/record.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SelectComponent = /** @class */ (function () {
    function SelectComponent(router, recordService) {
        this.router = router;
        this.recordService = recordService;
        this.highlightIcon = -1;
        this.showError = false;
    }
    SelectComponent.prototype.ngOnInit = function () {
    };
    SelectComponent.prototype.goToDisplayPage = function (imgSrc) {
        var _this = this;
        setTimeout(function () {
            _this.router.navigate(['bund18/display/' + imgSrc]);
        }, 1000);
    };
    SelectComponent.prototype.controlDevice = function (deviceId) {
        var _this = this;
        this.recordService.controlDevice(deviceId).subscribe(function (resp) {
            _this.showError = false;
            _this.goToDisplayPage(deviceId + ".gif");
        }, function (error) {
            console.log(error);
            _this.showError = true;
        });
    };
    SelectComponent.prototype.onClickDiamond = function () {
        this.highlightIcon = 0;
        this.controlDevice(1);
    };
    SelectComponent.prototype.onClickGameBoy = function () {
        this.highlightIcon = 1;
        this.controlDevice(2);
    };
    SelectComponent.prototype.onClickAirPlane = function () {
        this.highlightIcon = 2;
        this.controlDevice(3);
    };
    SelectComponent.prototype.onClickHeart = function () {
        this.highlightIcon = 3;
        this.controlDevice(4);
    };
    SelectComponent.prototype.onClickSaturn = function () {
        this.highlightIcon = 4;
        this.controlDevice(5);
    };
    SelectComponent.prototype.onClickCat = function () {
        this.highlightIcon = 5;
        this.controlDevice(6);
    };
    SelectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-select',
            template: __webpack_require__(/*! ./select.component.html */ "./src/app/select/select.component.html"),
            styles: [__webpack_require__(/*! ./select.component.css */ "./src/app/select/select.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_record_service__WEBPACK_IMPORTED_MODULE_2__["RecordService"]])
    ], SelectComponent);
    return SelectComponent;
}());



/***/ }),

/***/ "./src/app/selectEn/select.component.css":
/*!***********************************************!*\
  !*** ./src/app/selectEn/select.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".parent{\r\n    position: relative;\r\n}\r\n\r\ntable {\r\n    width: 100%;\r\n    margin-top: 10%;\r\n}\r\n\r\ntable td {\r\n    width: 50%;\r\n}\r\n\r\ntable td img {\r\n    width: 60%;\r\n    margin-top: 20%;\r\n}\r\n\r\n.left-col {\r\n    text-align: center;\r\n    font-size: 20px;\r\n}\r\n\r\n.right-col {\r\n    text-align: center;\r\n    font-size: 20px;\r\n}\r\n\r\n.footer {\r\n    width: 100%;\r\n    height: 7%;\r\n    position: fixed;\r\n    bottom: 3%;\r\n    text-align: center;\r\n}\r\n\r\n.footer img {\r\n    height: 100%;\r\n    width: auto;\r\n}"

/***/ }),

/***/ "./src/app/selectEn/select.component.html":
/*!************************************************!*\
  !*** ./src/app/selectEn/select.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"parent\">\r\n  <table>\r\n    <tr>\r\n      <td class=\"left-col\">\r\n        <img [hidden]=\"highlightIcon === 0\" src=\"../../assets/PNG Assets H5/Category Icons/Diamond_Icon_Col.png\" (click)=\"onClickDiamond()\">\r\n        <img [hidden]=\"highlightIcon !== 0\" src=\"../../assets/PNG Assets H5/Category Icons/Diamond_Icon_Wht.png\" (click)=\"onClickDiamond()\">\r\n        <div></div>\r\n      </td>\r\n      <td class=\"right-col\">\r\n        <img [hidden]=\"highlightIcon === 1\" src=\"../../assets/PNG Assets H5/Category Icons/GameBoy_Icon_Col.png\" (click)=\"onClickGameBoy()\">\r\n        <img [hidden]=\"highlightIcon !== 1\" src=\"../../assets/PNG Assets H5/Category Icons/GameBoy_Icon_Wht.png\" (click)=\"onClickGameBoy()\">\r\n        <div></div>\r\n      </td>\r\n    </tr>\r\n    <tr>\r\n      <td class=\"left-col\">A DIAMONG IN THE ROUTH</td>\r\n      <td class=\"right-col\">TOTAL PLAYBOY/ PLAYGIRL</td>\r\n    </tr>\r\n    <tr>\r\n      <td class=\"left-col\">\r\n        <img [hidden]=\"highlightIcon === 2\" src=\"../../assets/PNG Assets H5/Category Icons/AirPlane_Icon_Col.png\" (click)=\"onClickAirPlane()\">\r\n        <img [hidden]=\"highlightIcon !== 2\" src=\"../../assets/PNG Assets H5/Category Icons/AirPlane_Icon_Wht.png\" (click)=\"onClickAirPlane()\">\r\n      </td>\r\n      <td class=\"right-col\">\r\n        <img [hidden]=\"highlightIcon === 3\" src=\"../../assets/PNG Assets H5/Category Icons/Heart_Icon_Col.png\" (click)=\"onClickHeart()\">\r\n        <img [hidden]=\"highlightIcon !== 3\" src=\"../../assets/PNG Assets H5/Category Icons/Heart_Icon_Blk.png\" (click)=\"onClickHeart()\">\r\n      </td>\r\n    </tr>\r\n    <tr>\r\n      <td class=\"left-col\">JETSET WORLD TRAVELER</td>\r\n      <td class=\"right-col\">ALWAYS LOOKING FOR LOVE</td>\r\n    </tr>\r\n    <tr>\r\n      <td class=\"left-col\">\r\n        <img [hidden]=\"highlightIcon === 4\" src=\"../../assets/PNG Assets H5/Category Icons/Saturn_Icon_Col.png\" (click)=\"onClickSaturn()\">\r\n        <img [hidden]=\"highlightIcon !== 4\" src=\"../../assets/PNG Assets H5/Category Icons/Saturn_Icon_Wht.png\" (click)=\"onClickSaturn()\">\r\n      </td>\r\n      <td class=\"right-col\">\r\n        <img [hidden]=\"highlightIcon === 5\" src=\"../../assets/PNG Assets H5/Category Icons/Cat_Icon_Col.png\" (click)=\"onClickCat()\">\r\n        <img [hidden]=\"highlightIcon !== 5\" src=\"../../assets/PNG Assets H5/Category Icons/Cat_Icon_Wht.png\" (click)=\"onClickCat()\">\r\n      </td>\r\n    </tr>\r\n    <tr>\r\n      <td class=\"left-col\">LOST IN SPACE</td>\r\n      <td class=\"right-col\">CRAZY CAT LOVER</td>\r\n    </tr>\r\n  </table>\r\n  <div *ngIf=\"showError\">网络错误...Please retry...</div>\r\n  <div class=\"footer\">\r\n      <img src=\"../../assets/PNG Assets H5/Logos/DreamOn_Footer_Logo_JJ_Col_Butterfly_Hor.png\" alt=\"Can't load this image\">\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/selectEn/select.component.ts":
/*!**********************************************!*\
  !*** ./src/app/selectEn/select.component.ts ***!
  \**********************************************/
/*! exports provided: SelectEnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectEnComponent", function() { return SelectEnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_record_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/record.service */ "./src/app/_services/record.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SelectEnComponent = /** @class */ (function () {
    function SelectEnComponent(router, recordService) {
        this.router = router;
        this.recordService = recordService;
        this.highlightIcon = -1;
        this.showError = false;
    }
    SelectEnComponent.prototype.ngOnInit = function () {
    };
    SelectEnComponent.prototype.goToDisplayPage = function (imgSrc) {
        var _this = this;
        setTimeout(function () {
            _this.router.navigate(['bund18/displayEn/' + imgSrc]);
        }, 1000);
    };
    SelectEnComponent.prototype.controlDevice = function (deviceId) {
        var _this = this;
        this.recordService.controlDevice(deviceId).subscribe(function (resp) {
            _this.showError = false;
            _this.goToDisplayPage(deviceId + ".gif");
        }, function (error) {
            console.log(error);
            _this.showError = true;
        });
    };
    SelectEnComponent.prototype.onClickDiamond = function () {
        this.highlightIcon = 0;
        this.controlDevice(1);
    };
    SelectEnComponent.prototype.onClickGameBoy = function () {
        this.highlightIcon = 1;
        this.controlDevice(2);
    };
    SelectEnComponent.prototype.onClickAirPlane = function () {
        this.highlightIcon = 2;
        this.controlDevice(3);
    };
    SelectEnComponent.prototype.onClickHeart = function () {
        this.highlightIcon = 3;
        this.controlDevice(4);
    };
    SelectEnComponent.prototype.onClickSaturn = function () {
        this.highlightIcon = 4;
        this.controlDevice(5);
    };
    SelectEnComponent.prototype.onClickCat = function () {
        this.highlightIcon = 5;
        this.controlDevice(6);
    };
    SelectEnComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-select-en',
            template: __webpack_require__(/*! ./select.component.html */ "./src/app/selectEn/select.component.html"),
            styles: [__webpack_require__(/*! ./select.component.css */ "./src/app/selectEn/select.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_record_service__WEBPACK_IMPORTED_MODULE_2__["RecordService"]])
    ], SelectEnComponent);
    return SelectEnComponent;
}());



/***/ }),

/***/ "./src/app/selective-preloading-strategy.ts":
/*!**************************************************!*\
  !*** ./src/app/selective-preloading-strategy.ts ***!
  \**************************************************/
/*! exports provided: SelectivePreloadingStrategy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectivePreloadingStrategy", function() { return SelectivePreloadingStrategy; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

var SelectivePreloadingStrategy = /** @class */ (function () {
    function SelectivePreloadingStrategy() {
    }
    SelectivePreloadingStrategy.prototype.preload = function (route, load) {
        console.log('jjjjjjjjjjjjjjjjj');
        return route.data.preload === false ? Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(null) : load();
    };
    return SelectivePreloadingStrategy;
}());



/***/ }),

/***/ "./src/app/share/share.component.css":
/*!*******************************************!*\
  !*** ./src/app/share/share.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg img {\r\n    max-width: 100%;\r\n    height: auto;\r\n}\r\n\r\n.bg {\r\n    /* background-image: url('../../images/background.jpg'); */\r\n    background-size: cover;    \r\n}\r\n\r\n.fixed {\r\n    position: fixed;\r\n    bottom: 0;\r\n    left: 0;\r\n}"

/***/ }),

/***/ "./src/app/share/share.component.html":
/*!********************************************!*\
  !*** ./src/app/share/share.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg\">  \r\n    <div class=\"fixed\">\r\n        <img src=\"../../assets/H5/FerrisWheel.png\" alt=\"Can't load this image\" name=\"canvas\"> \r\n    </div>\r\n    <div style=\"margin-top: 30%; font-size: 20px\">请分享这个梦幻之旅吧！</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/share/share.component.ts":
/*!******************************************!*\
  !*** ./src/app/share/share.component.ts ***!
  \******************************************/
/*! exports provided: ShareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareComponent", function() { return ShareComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_record_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/record.service */ "./src/app/_services/record.service.ts");
/* harmony import */ var weixin_js_sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! weixin-js-sdk */ "./node_modules/weixin-js-sdk/index.js");
/* harmony import */ var weixin_js_sdk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(weixin_js_sdk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ShareComponent = /** @class */ (function () {
    function ShareComponent(recordService, router) {
        this.recordService = recordService;
        this.router = router;
    }
    ShareComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.SetupWechatShare();
        setTimeout(function () {
            _this.router.navigate(['bund18/end']); //for test
        }, 2000);
    };
    ShareComponent.prototype.SendShareInfoToServer = function (op) {
        this.router.navigate(['bund18/end']);
    };
    ShareComponent.prototype.SetupWechatShare = function () {
        var _this = this;
        this.recordService.getWxParameters("welcome").subscribe(function (resp) {
            localStorage.setItem('appId', resp.appId.toString());
            localStorage.setItem('nonceStr', resp.nonceStr.toString());
            localStorage.setItem('timestamp', resp.timestamp.toString());
            localStorage.setItem('signature', resp.signature.toString());
            var imageUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].domainUrl + '/assets/vignette_small.jpg';
            //load from pre-load parameters, also from 3th party service   
            weixin_js_sdk__WEBPACK_IMPORTED_MODULE_2__["config"]({
                debug: false,
                appId: localStorage.getItem('appId'),
                timestamp: localStorage.getItem('timestamp'),
                nonceStr: localStorage.getItem('nonceStr'),
                signature: localStorage.getItem('signature'),
                jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage']
            });
            weixin_js_sdk__WEBPACK_IMPORTED_MODULE_2__["ready"](function () {
                weixin_js_sdk__WEBPACK_IMPORTED_MODULE_2__["onMenuShareTimeline"]({
                    title: '摇一摇，摇出你的2019新年运势',
                    link: 'http://mm.wuzhanggui.shop/bund18/welcome',
                    imgUrl: imageUrl,
                    success: function () { _this.SendShareInfoToServer("moments"); },
                    cancel: function () { },
                }),
                    weixin_js_sdk__WEBPACK_IMPORTED_MODULE_2__["onMenuShareAppMessage"]({
                        title: '摇一摇，摇出你的2019新年运势',
                        desc: 'BUND18的二重奏:外滩十八号圣诞新年艺术装置',
                        link: 'http://mm.wuzhanggui.shop/bund18/welcome',
                        imgUrl: imageUrl,
                        type: 'link',
                        success: function () { _this.SendShareInfoToServer("friends"); },
                        cancel: function () { },
                    });
            });
        });
    };
    ShareComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-share',
            template: __webpack_require__(/*! ./share.component.html */ "./src/app/share/share.component.html"),
            styles: [__webpack_require__(/*! ./share.component.css */ "./src/app/share/share.component.css")]
        }),
        __metadata("design:paramtypes", [_services_record_service__WEBPACK_IMPORTED_MODULE_1__["RecordService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ShareComponent);
    return ShareComponent;
}());



/***/ }),

/***/ "./src/app/shareCard/shareCard.component.css":
/*!***************************************************!*\
  !*** ./src/app/shareCard/shareCard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".parent{\r\n  position: relative;\r\n  text-align: center;\r\n}\r\n\r\n.big-img {\r\n  width: 80%;\r\n  margin-top: 8%;\r\n}\r\n\r\n.footer {\r\n  width: 100%;\r\n  height: 7%;\r\n  position: fixed;\r\n  bottom: 3%;\r\n  text-align: center;\r\n}\r\n\r\n.footer img {\r\n  height: 100%;\r\n  width: auto;\r\n}"

/***/ }),

/***/ "./src/app/shareCard/shareCard.component.html":
/*!****************************************************!*\
  !*** ./src/app/shareCard/shareCard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"parent\"> \r\n    <div class=\"box\">\r\n        <img src=\"../../assets/PNG Assets H5/Postcards/Card_Corners-01.png\" />\r\n    </div>\r\n    <img *ngIf=\"id === 1\" src=\"../../assets/PNG Assets H5/Postcards/Cat_Postcard.png\" />\r\n    <img *ngIf=\"id === 2\" src=\"../../assets/PNG Assets H5/Postcards/Game_Postcard.png\" />\r\n    <img *ngIf=\"id === 3\" src=\"../../assets/PNG Assets H5/Postcards/Love_Postcard-01.png\" />\r\n    <img *ngIf=\"id === 4\" src=\"../../assets/PNG Assets H5/Postcards/Money_Postcard.png\" />\r\n    <img *ngIf=\"id === 5\" src=\"../../assets/PNG Assets H5/Postcards/Space_Postcard.png\" />\r\n    <img *ngIf=\"id === 6\" src=\"../../assets/PNG Assets H5/Postcards/Travel_Postcard.png\" />\r\n    <!-- <div class=\"footer\">\r\n        <img src=\"../../assets/PNG Assets H5/Logos/DreamOn_Footer_Logo_JJ_Col_Butterfly_Hor.png\" alt=\"Can't load this image\">\r\n    </div> -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shareCard/shareCard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/shareCard/shareCard.component.ts ***!
  \**************************************************/
/*! exports provided: ShareCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareCardComponent", function() { return ShareCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShareCardComponent = /** @class */ (function () {
    function ShareCardComponent(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.id = -1;
        this.pathPrefix = '../../assets/PNG Assets H5/Postcards/';
        this.id = Number.parseInt(this.activatedRoute.snapshot.params['id']);
    }
    ShareCardComponent.prototype.ngOnInit = function () {
    };
    ShareCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-share-card',
            template: __webpack_require__(/*! ./shareCard.component.html */ "./src/app/shareCard/shareCard.component.html"),
            styles: [__webpack_require__(/*! ./shareCard.component.css */ "./src/app/shareCard/shareCard.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ShareCardComponent);
    return ShareCardComponent;
}());



/***/ }),

/***/ "./src/app/shareEn/share.component.css":
/*!*********************************************!*\
  !*** ./src/app/shareEn/share.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg img {\r\n    max-width: 100%;\r\n    height: auto;\r\n}\r\n\r\n.bg {\r\n    /* background-image: url('../../images/background.jpg'); */\r\n    background-size: cover;    \r\n}\r\n\r\n.fixed {\r\n    position: fixed;\r\n    bottom: 0;\r\n    left: 0;\r\n}"

/***/ }),

/***/ "./src/app/shareEn/share.component.html":
/*!**********************************************!*\
  !*** ./src/app/shareEn/share.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg\">  \r\n  <div class=\"fixed\">\r\n    <img src=\"../../assets/H5/FerrisWheel.png\" alt=\"Can't load this image\" name=\"canvas\"> \r\n  </div>\r\n  <div style=\"margin-top: 30%; font-size: 20px\">PLEASE SHARE THE DREAM!</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shareEn/share.component.ts":
/*!********************************************!*\
  !*** ./src/app/shareEn/share.component.ts ***!
  \********************************************/
/*! exports provided: ShareEnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareEnComponent", function() { return ShareEnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_record_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/record.service */ "./src/app/_services/record.service.ts");
/* harmony import */ var weixin_js_sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! weixin-js-sdk */ "./node_modules/weixin-js-sdk/index.js");
/* harmony import */ var weixin_js_sdk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(weixin_js_sdk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ShareEnComponent = /** @class */ (function () {
    function ShareEnComponent(recordService, router) {
        this.recordService = recordService;
        this.router = router;
    }
    ShareEnComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.SetupWechatShare();
        setTimeout(function () {
            _this.router.navigate(['bund18/endEn']); //for test
        }, 2000);
    };
    ShareEnComponent.prototype.SendShareInfoToServer = function (op) {
        this.router.navigate(['bund18/endEn']);
    };
    ShareEnComponent.prototype.SetupWechatShare = function () {
        var _this = this;
        this.recordService.getWxParameters("welcome").subscribe(function (resp) {
            localStorage.setItem('appId', resp.appId.toString());
            localStorage.setItem('nonceStr', resp.nonceStr.toString());
            localStorage.setItem('timestamp', resp.timestamp.toString());
            localStorage.setItem('signature', resp.signature.toString());
            var imageUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].domainUrl + '/assets/vignette_small.jpg';
            //load from pre-load parameters, also from 3th party service   
            weixin_js_sdk__WEBPACK_IMPORTED_MODULE_2__["config"]({
                debug: false,
                appId: localStorage.getItem('appId'),
                timestamp: localStorage.getItem('timestamp'),
                nonceStr: localStorage.getItem('nonceStr'),
                signature: localStorage.getItem('signature'),
                jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage']
            });
            weixin_js_sdk__WEBPACK_IMPORTED_MODULE_2__["ready"](function () {
                weixin_js_sdk__WEBPACK_IMPORTED_MODULE_2__["onMenuShareTimeline"]({
                    title: '摇一摇，摇出你的2019新年运势',
                    link: 'http://mm.wuzhanggui.shop/bund18/welcome',
                    imgUrl: imageUrl,
                    success: function () { _this.SendShareInfoToServer("moments"); },
                    cancel: function () { },
                }),
                    weixin_js_sdk__WEBPACK_IMPORTED_MODULE_2__["onMenuShareAppMessage"]({
                        title: '摇一摇，摇出你的2019新年运势',
                        desc: 'BUND18的二重奏:外滩十八号圣诞新年艺术装置',
                        link: 'http://mm.wuzhanggui.shop/bund18/welcome',
                        imgUrl: imageUrl,
                        type: 'link',
                        success: function () { _this.SendShareInfoToServer("friends"); },
                        cancel: function () { },
                    });
            });
        });
    };
    ShareEnComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-share-en',
            template: __webpack_require__(/*! ./share.component.html */ "./src/app/shareEn/share.component.html"),
            styles: [__webpack_require__(/*! ./share.component.css */ "./src/app/shareEn/share.component.css")]
        }),
        __metadata("design:paramtypes", [_services_record_service__WEBPACK_IMPORTED_MODULE_1__["RecordService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ShareEnComponent);
    return ShareEnComponent;
}());



/***/ }),

/***/ "./src/app/start/start.component.css":
/*!*******************************************!*\
  !*** ./src/app/start/start.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.parent{\r\n    position: relative;\r\n    text-align: center;\r\n}\r\n\r\n.logo {\r\n    max-width: 100%;\r\n    height: auto;\r\n}\r\n\r\n.buttons {\r\n    width: 100%;\r\n    position: fixed;\r\n    text-align: center;\r\n    bottom: 7%;\r\n}\r\n\r\n.button {\r\n    margin-bottom: 20px;\r\n    width: 30%;\r\n    height: 40px;\r\n    background-image: url('Button_Eng_Cn.png');\r\n    background-repeat:no-repeat;\r\n    background-size: 100%;\r\n    border-style: none;\r\n    background-color: transparent;\r\n    color: Black;\r\n}"

/***/ }),

/***/ "./src/app/start/start.component.html":
/*!********************************************!*\
  !*** ./src/app/start/start.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"parent\">\r\n  <img src=\"../../assets/H5/2-04.png\" alt=\"Can't load this image\" class=\"logo\">\r\n  <div class=\"buttons\">\r\n    <div *ngIf=\"waiting\">排队中...Please wait...</div>\r\n    <div>\r\n      <input class=\"button\" type=\"button\" value=\"开始吧\" (click)=\"onClickEntry('')\" />\r\n    </div>\r\n    <div>\r\n      <input class=\"button\" type=\"button\" value=\"Start\" (click)=\"onClickEntry('En')\" />\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/start/start.component.ts":
/*!******************************************!*\
  !*** ./src/app/start/start.component.ts ***!
  \******************************************/
/*! exports provided: StartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartComponent", function() { return StartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_record_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/record.service */ "./src/app/_services/record.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StartComponent = /** @class */ (function () {
    function StartComponent(recordService, router) {
        this.recordService = recordService;
        this.router = router;
        this.waiting = false;
    }
    StartComponent.prototype.ngOnInit = function () {
    };
    StartComponent.prototype.onClickEntry = function (tag) {
        var _this = this;
        if (this.waiting) {
            return;
        }
        this.waiting = true;
        this.recordService.getLicense().subscribe(function (resp) {
            _this.waiting = false;
            _this.router.navigate(['bund18/hint' + tag]);
        }, function (error) {
            console.log(error);
            setTimeout(function () {
                _this.onClickEntry(tag);
            }, 2000);
        });
    };
    StartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-start',
            template: __webpack_require__(/*! ./start.component.html */ "./src/app/start/start.component.html"),
            styles: [__webpack_require__(/*! ./start.component.css */ "./src/app/start/start.component.css")]
        }),
        __metadata("design:paramtypes", [_services_record_service__WEBPACK_IMPORTED_MODULE_2__["RecordService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], StartComponent);
    return StartComponent;
}());



/***/ }),

/***/ "./src/app/welcome/welcome.component.css":
/*!***********************************************!*\
  !*** ./src/app/welcome/welcome.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.parent{\r\n    position: relative;\r\n    text-align: center;\r\n}\r\n\r\n.logo {\r\n    max-width: 100%;\r\n    height: auto;\r\n    margin-top: 10%;\r\n    margin-bottom: 10%;\r\n}\r\n\r\n.button {\r\n    width: 30%;\r\n    height: auto;\r\n}"

/***/ }),

/***/ "./src/app/welcome/welcome.component.html":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"parent\">\r\n  <img src=\"../../assets/PNG Assets H5/Logos/DreamOn_MainPage_Logo_JJ_Col_Butterfly_Stack.png\" class=\"logo\">\r\n  <img src=\"../../assets/PNG Assets H5/Additonal Icons_Buttons_Images/Button_Eng_Cn.png\" class=\"button\" (click)=\"onClickEntry()\">\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent(router) {
        this.router = router;
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent.prototype.onClickEntry = function () {
        this.router.navigate(['bund18/start']);
    };
    WelcomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.css */ "./src/app/welcome/welcome.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    recordUrl: 'http://40.74.242.24:8000/api/bund18/record/',
    badgeUrl: 'http://40.74.242.24:8000/api/jjpark/badge/',
    shareUrl: 'http://40.74.242.24:8000/api/bund18/share/',
    statUrl: 'http://40.74.242.24:8000/api/bund18/stat/',
    deviceCheckUrl: 'http://40.74.242.24:8000/api/bund18/device/check/',
    deviceOnUrl: 'http://40.74.242.24:8000/api/bund18/device/on/',
    deviceOffUrl: 'http://40.74.242.24:8000/api/bund18/device/off/',
    wxloginUrl: 'http://40.74.242.24:8000/api/bund18/wxlogin/',
    licenseUrl: 'http://40.74.242.24:8000/api/jjpark/device/control/request',
    deviceControlUrl: 'http://40.74.242.24:8000/api/jjpark/device/control',
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\myCode\angular\jinjiang-angular\bund18\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map