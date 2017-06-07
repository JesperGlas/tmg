webpackJsonp([1,4],{

/***/ 168:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 168;


/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(204);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'app-about',
        template: __webpack_require__(268),
        styles: [__webpack_require__(259)]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(269),
        styles: [__webpack_require__(260)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__start_start_component__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__tjanster_tjanster_component__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__uppdrag_uppdrag_component__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__intresse_intresse_component__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__konsulter_konsulter_component__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__about_about_component__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__kontakt_kontakt_component__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__footer_footer_component__ = __webpack_require__(196);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__start_start_component__["a" /* StartComponent */],
            __WEBPACK_IMPORTED_MODULE_9__tjanster_tjanster_component__["a" /* TjansterComponent */],
            __WEBPACK_IMPORTED_MODULE_10__uppdrag_uppdrag_component__["a" /* UppdragComponent */],
            __WEBPACK_IMPORTED_MODULE_11__intresse_intresse_component__["a" /* IntresseComponent */],
            __WEBPACK_IMPORTED_MODULE_12__konsulter_konsulter_component__["a" /* KonsulterComponent */],
            __WEBPACK_IMPORTED_MODULE_13__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_14__kontakt_kontakt_component__["a" /* KontaktComponent */],
            __WEBPACK_IMPORTED_MODULE_15__footer_footer_component__["a" /* FooterComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["b" /* MdSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["c" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["d" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["e" /* MdCardModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__(270),
        styles: [__webpack_require__(261)]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntresseComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IntresseComponent = (function () {
    function IntresseComponent() {
    }
    IntresseComponent.prototype.ngOnInit = function () {
    };
    return IntresseComponent;
}());
IntresseComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'app-intresse',
        template: __webpack_require__(271),
        styles: [__webpack_require__(262)]
    }),
    __metadata("design:paramtypes", [])
], IntresseComponent);

//# sourceMappingURL=intresse.component.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KonsulterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var KonsulterComponent = (function () {
    function KonsulterComponent() {
    }
    KonsulterComponent.prototype.ngOnInit = function () {
    };
    return KonsulterComponent;
}());
KonsulterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'app-konsulter',
        template: __webpack_require__(272),
        styles: [__webpack_require__(263)]
    }),
    __metadata("design:paramtypes", [])
], KonsulterComponent);

//# sourceMappingURL=konsulter.component.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KontaktComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var KontaktComponent = (function () {
    function KontaktComponent() {
    }
    KontaktComponent.prototype.ngOnInit = function () {
    };
    return KontaktComponent;
}());
KontaktComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'app-kontakt',
        template: __webpack_require__(273),
        styles: [__webpack_require__(264)]
    }),
    __metadata("design:paramtypes", [])
], KontaktComponent);

//# sourceMappingURL=kontakt.component.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UppdragService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UppdragService = (function () {
    function UppdragService(_http) {
        this._http = _http;
    }
    UppdragService.prototype.getUppdrag = function () {
        return this._http.get('assets/files/uppdrag.json')
            .map(function (respone) {
            var data = respone.json();
            return data;
        });
    };
    return UppdragService;
}());
UppdragService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], UppdragService);

var _a;
//# sourceMappingURL=uppdrag.service.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StartComponent = (function () {
    function StartComponent() {
    }
    StartComponent.prototype.ngOnInit = function () {
    };
    return StartComponent;
}());
StartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'app-start',
        template: __webpack_require__(274),
        styles: [__webpack_require__(265)]
    }),
    __metadata("design:paramtypes", [])
], StartComponent);

//# sourceMappingURL=start.component.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TjansterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TjansterComponent = (function () {
    function TjansterComponent() {
    }
    TjansterComponent.prototype.ngOnInit = function () {
    };
    return TjansterComponent;
}());
TjansterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'app-tjanster',
        template: __webpack_require__(275),
        styles: [__webpack_require__(266)]
    }),
    __metadata("design:paramtypes", [])
], TjansterComponent);

//# sourceMappingURL=tjanster.component.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_uppdrag_service__ = __webpack_require__(200);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UppdragComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UppdragComponent = (function () {
    function UppdragComponent(uppdragService) {
        var _this = this;
        this.uppdragService = uppdragService;
        this.uppdragService.getUppdrag()
            .subscribe(function (uppdrag) {
            _this.uppdrag_list = uppdrag;
            console.log(uppdrag);
        }, function (error) { return console.log(error); });
    }
    UppdragComponent.prototype.ngOnInit = function () {
    };
    return UppdragComponent;
}());
UppdragComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'app-uppdrag',
        template: __webpack_require__(276),
        styles: [__webpack_require__(267)],
        providers: [__WEBPACK_IMPORTED_MODULE_1_app_services_uppdrag_service__["a" /* UppdragService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_uppdrag_service__["a" /* UppdragService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_services_uppdrag_service__["a" /* UppdragService */]) === "function" && _a || Object])
], UppdragComponent);

var _a;
//# sourceMappingURL=uppdrag.component.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 259:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 260:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 261:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 262:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 263:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 264:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 265:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 266:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 267:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 268:
/***/ (function(module, exports) {

module.exports = "<p>\n  about works!\n</p>\n"

/***/ }),

/***/ 269:
/***/ (function(module, exports) {

module.exports = "<md-sidenav-container fullscreen>\n\n    <div fxLayout=\"column\" class=\"wrapper\">\n\n      <div style=\"background-color:red;width:100%;text-align:center;padding:5px;font-weight:bold;\">\n        <i class=\"material-icons\">warning</i>\n        Den här sidan är enbart en demo, den riktiga sidan kan hittas\n        <a href=\"http://talentmanagementgroup.se/\" style=\"color:white\">här</a>\n        <i class=\"material-icons\">warning</i>\n      </div>\n\n      <md-card>\n        <img src=\"assets/img/logo.jpg\">\n        <md-tab-group>\n          <md-tab label=\"Start\">\n            <app-start>Loading Start..</app-start>\n            <app-footer>Loading Footer..</app-footer>\n          </md-tab>\n          <md-tab label=\"Tjänster\">\n            <app-tjanster>Loading Tjanster..</app-tjanster>\n            <app-footer>Loading Footer..</app-footer>\n          </md-tab>\n          <md-tab label=\"Uppdrag\">\n            <app-uppdrag>Loading Uppdrag..</app-uppdrag>\n            <app-footer>Loading Footer..</app-footer>\n          </md-tab>\n          <md-tab label=\"Intresseanmälan\">\n            <app-intresse>Loading Intresse..</app-intresse>\n            <app-footer>Loading Footer..</app-footer>\n          </md-tab>\n          <md-tab label=\"Konsulter\">\n\n            <app-footer>Loading Footer..</app-footer>\n          </md-tab>\n          <md-tab label=\"Om Oss\">\n\n            <app-footer>Loading Footer..</app-footer>\n          </md-tab>\n          <md-tab label=\"Kontakt\">\n\n            <app-footer>Loading Footer..</app-footer>\n          </md-tab>\n        </md-tab-group>\n\n      </md-card>\n\n    </div>\n\n</md-sidenav-container>\n"

/***/ }),

/***/ 270:
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" class=\"page_wrapper\">\n  <hr style=\"border-color:blue;\">\n\n  <div fxLayout=\"column\" fxLayout.gt-sm=\"row\">\n    <div fxFlex style=\"background-color:#F8F8F8;padding:15px;\">\n      <h3>Intresseanmälan</h3>\n      <p>\n        Vi söker alltid kompetenta kandidater till\n        chefsbefattningar och nyckelpositioner.\n        <br>\n        <br>\n        <button md-raised-button color=\"primary\">\n          Välkommen att registrera ditt CV\n          <i class=\"material-icons\">keyboard_arrow_right</i>\n        </button>\n      </p>\n    </div>\n\n    <div fxFlex style=\"background-color:#F8F8F8;padding:15px;\">\n        <h3>Aktuella uppdrag</h3>\n        <p>\n          Här hittar du våra aktuella uppdrag, ditt nästa\n          steg i karriären.\n        </p>\n        <br>\n        <br>\n        <button md-raised-button color=\"primary\">\n          Läs mer om våra uppdrag\n          <i class=\"material-icons\">keyboard_arrow_right</i>\n        </button>\n    </div>\n  </div>\n\n  <p fxFlexAlign=\"center\">\n    Copyright © 2013, Talent Management Group | Karlavägen 100, SE-115 26 Stockholm, Sweden | +46 8 412 83 80 | +46 8 412 83 81 |\n  </p>\n\n  <button md-button color=\"primary\" fxFlexAlign=\"end\">\n    Cockies and PUL\n  </button>\n\n</div>\n"

/***/ }),

/***/ 271:
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" class=\"page_wrapper\">\n  <div>\n    <h2>Välkommen till Talent Management Group</h2>\n    <p>\n      Genom att registrera dig hos oss kan du enkelt och snabbt anmäla dig som sökande till våra aktuella rekryteringar.\n      Du kan även lägga in dina uppgifter i väntan på att rätt tjänst dyker upp, din cv blir då sökbar för oss. Du kan sedan\n      på egen hand löpande uppdatera dina uppgifter.\n    </p>\n    <p>\n      Självklart behandlas all information konfidentiellt och enligt gällande lagstiftning (PUL). Ingen information kommer att delges\n      våra uppdragsgivare eller andra utomstående utan ditt godkännande.\n    </p>\n    <p>\n      Vi vet att din tid är dyrbar. Därför har vi har försökt begränsa mängden nödvändig information till minsta möjliga.\n      Tänk dock på att ju mer du delger oss om din karriärhistorik, desto större sannolikhet är det att du blir kontaktad med\n      rätt typ av spännande utmaningar.\n    </p>\n  </div>\n  <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxLayoutGap=\"20px\">\n    <div fxFlex=\"50%\" style=\"padding:10px;\">\n      <h3>Registrering</h3>\n      <p>\n        För att kunna söka en aktuell befattning eller anmäla intresse för en ny befattning måste Du först registrera Dig\n      </p>\n      <button md-raised-button color=\"primary\">\n        Skapa Konto\n      </button>\n    </div>\n    <div fxLayout=\"column\" fxFlex=\"50%\" style=\"padding:10px;\">\n      <h3>Inloggning</h3>\n      <p>\n        Om du har registrerat dig loggar du in här.\n      </p>\n      <md-input-container>\n        <input mdInput placeholder=\"E-Post\" value=\"\">\n      </md-input-container>\n      <md-input-container>\n        <input mdInput placeholder=\"Lösenord\" value=\"\">\n      </md-input-container>\n      <div fxLayout=\"row\">\n        <button md-raised-button fxFlexAlign=\"start\" color=\"primary\">\n          Logga In\n        </button>\n        <button md-raised-button fxFlexAlign=\"start\" color=\"accent\">\n          Glömt Inloggningsuppgifter\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 272:
/***/ (function(module, exports) {

module.exports = "<md-tab-group>\n  <md-tab label=\"Executive Search\">\n    Stuff\n  </md-tab>\n</md-tab-group>\n"

/***/ }),

/***/ 273:
/***/ (function(module, exports) {

module.exports = "<p>\n  kontakt works!\n</p>\n"

/***/ }),

/***/ 274:
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" class=\"page_wrapper\">\n  <img fxFlexAlign=\"center\" class=\"border_img\" src=\"assets/img/border.jpg\">\n  <h3 class=\"subheader\">10 år - kvalitet i metod och resultat!</h3>\n\n  <!-- Sektion 1  -->\n  <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxLayoutGap=\"30px\">\n\n    <div fxFlex=\"70%\" fxLayout=\"column\">\n      <img fxFlexAlign=\"start\" class=\"border_img\" src=\"assets/img/10.png\">\n\n      <div>\n        <p class=\"bold\">\n          “Med ödmjukhet och framtidstro tackar vi för de förtroenden som ni sedan starten 2006 givit oss.\n          I en starkt konkurrensutsatt marknad har vi under ett decennium erbjudits möjligheten att hjälpa till\n          i avgörande och kritiska rekryteringsprocesser.\n        </p>\n        <br>\n        <p>\n          Vi på Talent Management Group AB vill fortsätta växa tillsammans med er. Vårt fortsatta mål är att vi\n          uppfattas som det naturliga valet baserat på kvalitet, pålitlighet och resultat. Talent Management Group\n          identifierar och rekryterar dagens och morgondagens talanger.”\n        </p>\n      </div>\n    </div>\n\n    <div fxFlex=\"30%\" fxLayout=\"column\">\n      <h3 class=\"subheader\" style=\"font-size:1rem\">\n        Kontakta Oss\n      </h3>\n      <p>\n        Talent Management Group\n        <br>\n        Tel: +46 8 412 83 80\n        <br>\n        Fax: +46 8 412 83 81\n        <br>\n        <a href=\"#\" class=\"mail\">info@talentmanagementgroup.se</a>\n        <br>\n        <br>\n        <button md-raised-button color=\"accent\">\n          LinkedIn\n        </button>\n      </p>\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ 275:
/***/ (function(module, exports) {

module.exports = "<md-tab-group>\n  <md-tab label=\"Executive Search\">\n    <div class=\"page_wrapper\">\n      <h2>Executive Search</h2>\n      <p class=\"bold\">\n        Executive search är ett av våra specialistområden. Vi rekryterar kandidater till\n        företagsledningar samt chefer och erfarna specialister inom försäljning,\n        marknadsföring, teknik, personal och ekonomi.\n      </p>\n      <br>\n      <p class=\"bold\">Avtal - definition av uppdrag</p>\n      <p>\n        Vi definierar tillsammans med vår uppdragsgivare uppdragets omfattning.\n        Rekryteringsarbetet börjar med att vi skapar oss en bild av företaget och aktuell\n        befattning. Kartläggning sker av uppdragsgivarens affärsidé, marknad, företagskultur, kundrelationer\n        och konkurrenssituation. I nästa steg beskrivs aktuella arbetsuppgifter och processer tillsammans med de\n        kunskaper, färdigheter och den förmåga som\n        behövs för arbetet. Företaget besöks, nyckelpersoner intervjuas och en\n        befattningsbeskrivning tas fram som uppdragsgivaren godkänner.\n      </p>\n      <br>\n      <p class=\"bold\">Research</p>\n      <p>\n        När vi söker kandidater ser vi ofta till erfarenhet och vill ha personer som vet hur man löser ett affärsproblem och\n        hur man möter kundbehov. Researchen startar med\n        kontakter i det levande nätverket och urvalet breddas genom Talent Management Groups databas, marknadsanalyser och via\n        andra uppsökande media. En första\n        kandidatutvärdering görs i rekryteringsteamet.\n      </p>\n      <br>\n      <p class=\"bold\">Djupintervjuer - utvärdering</p>\n      <p>\n        Efter djupintervjuer och eventuella tester på de mest kvalificerade kandidaterna\n        beslutar rekryteringsteamet vilka som blir slutkandidater att presenteras för\n        uppdragsgivaren. Valet baseras på en omfattande utvärdering där betyg kontrolleras och noggrann bedömning görs av\n        kandidaternas egenskaper, förmågor, kompetens och tidigare arbetsprestationer. Informationen matchas mot sökprofilen, aktuella\n        arbetsuppgifter och andra behov hos uppdragsgivaren.\n      </p>\n      <br>\n      <p class=\"bold\">Presentation av slutkandidater</p>\n      <p>\n        Här sker en personlig presentation av slutkandidaterna och en dialog kring de uppgifter som lämnas om kandidaterna.\n        De kandidater som uppdragsgivaren vill gå\n        vidare med bokas in för intervjuer med personer ur uppdragsgivarens organisation.\n      </p>\n      <br>\n      <p class=\"bold\">Uppdragsgivarens intervjuer</p>\n      <p>\n        Uppdragsgivaren genomför egna intervjuer med utvalda slutkandidater. Intervjuerna resulterar i ett anställningsurval.\n      </p>\n      <br>\n      <p class=\"bold\">Referenstagning och anställning</p>\n      <p>\n        Det avgörande valet av kandidater som uppdragsgivaren önskar anställa görs alltid av uppdragsgivaren. Innan anställningsavtal\n        tecknas med dessa kandidater kvalitetsbestäms kandidatens referenser och dessa kontaktas av Talent Management Group. En sammanfattning\n        presenteras muntligen för uppdragsgivaren.\n      </p>\n      <br>\n      <p class=\"bold\">Uppföljning och kvalitetssäkring</p>\n      <p>\n        Vi vill ha förmånen att följa upp och utvärdera alla uppdrag med uppdragsgivaren och den anställde cirka tre månader efter det att den\n        anställde påbörjade sin nya anställning. Avsikten är att kvalitetssäkra genomförandet av rekryteringsuppdraget, det vill säga kontrollera\n        om uppdraget utförts på bästa sätt och att den anställde och uppdragsgivaren är nöjda.\n      </p>\n    </div>\n  </md-tab>\n  <md-tab label=\"Executive Selection\">\n    <div class=\"page_wrapper\">\n      <h2>Executive Selection</h2>\n\n      <p class=\"bold\">Executive Selection - Annonsrekrytering</p>\n      <p>\n        Annonsrekrytering har fördelen av att nå ut till ett stort antal potentiella kandidater,\n        men ställer också krav på kompetens att utforma annonser och administrativa resurser och rutiner\n        för hantering av en stor mängd sökande på ett professionellt sätt.\n      </p>\n      <br>\n      <p class=\"bold\">Kunddialog - avtal</p>\n      <p>\n        I en kunddialog informerar Talent Management Group hur uppdragen styrs när det gäller tidplaner och\n        process. Avtal skrivs när båda parter är överens om uppdragets omfattning och mål. Upplägg och tidplan\n        anpassas utifrån uppdragets storlek.\n        Tidplanen styrs av medieval, sista ansökningsdatum och eventuella repetitioner av\n        annonsinförandet.\n      </p>\n      <br>\n      <p class=\"bold\">\"Uppdragsbeskrivning</p>\n      <p>\n        Vi börjar rekryteringsarbetet med att förstå och tolka våra uppdragsgivares affärsidé, marknad, företagskultur,\n        kundrelationer och konkurrenssituation. Här grundläggs\n        uppdragets framgång och slutliga kvalitetsnivå. Nästa steg är att beskriva aktuella\n        arbetsuppgifter och processer tillsammans med de kunskaper, färdigheter och den förmåga som behövs för arbetet.\n        Företaget besöks, nyckelpersoner intervjuas och en befattningsbeskrivning tas fram som uppdragsgivaren godkänner.\n      </p>\n      <br>\n      <p class=\"bold\">Annonsering, svar och administration</p>\n      <p>\n        Vi kan efter önskemål bistå med utformning och införande av kvalitativa annonser, i annat fall ansvarar uppdragsgivaren\n        för detta. Under annonsperioden besvarar Talent Management Groups involverade personal på frågor kring de utlysta tjänsterna.\n        En aktiv dialog förs med samtliga sökande om rekryteringsprocessen. Vi hanterar all svarshantering inklusive utskick av svars- och tackbrev.\n      </p>\n      <br>\n      <p class=\"bold\">Urval - intervju</p>\n      <p>\n        Vid annonsuppdrag genomförs urval av de bästa kandidaterna bland samtliga\n        ansökningar. Dessa kallas till intervju hos Talent Management Group där\n        uppdragsgivarens företag och den aktuella tjänsten presenteras. Kandidaten redogör för sin utbildning, arbetslivserfarenhet,\n        sina framtidsplaner, ambitioner, egenskaper, fritidsintressen och sin nuvarande arbetssituation, det vill säga motivationen\n        och förutsättningen för den aktuella befattningen.\n      </p>\n      <br>\n      <p class=\"bold\">Presentation - urval</p>\n      <p>\n        De lämpligaste kandidaterna presenteras muntligt och skriftligt för uppdragsgivaren. Uppdragsgivaren genomför egna intervjuer\n        med utvalda slutkandidater. Intervjuerna resulterar i anställningsurval som alltid görs av uppdragsgivaren.\n      </p>\n      <br>\n      <p class=\"bold\">Referenstagning och anställning</p>\n      <p>\n        Innan anställningsavtal tecknas med kandidater tas referenser, vilka kontaktas av\n        Talent Management Group. En sammanfattning av referenserna presenteras muntligen för uppdragsgivaren. Talent Management Group\n        sänder över slutkandidaternas betyg och intyg till uppdragsgivaren.\n      </p>\n      <br>\n      <p class=\"bold\">Uppföljning och kvalitetssäkring</p>\n      <p>\n        Vi vill ha förmånen att följa upp alla uppdrag med uppdragsgivaren och den anställde cirka tre månader efter det att den anställde\n        påbörjat sin nya anställning. Avsikten är att kvalitetssäkra genomförandet av rekryteringsuppdraget, det vill säga kontrollera om\n        uppdraget utförts på bästa sätt och att den anställde och uppdragsgivaren är nöjda.\n      </p>\n    </div>\n  </md-tab>\n  <md-tab label=\"Management Audit\">\n    <div class=\"page_wrapper\">\n      <h2>Management Audit</h2>\n      <br>\n      <p class=\"bold\">\n        Management Audit är en bedömning, inventering och värdering av enskilda ledare och nyckelpersoner samt ledningsgrupper i samband\n        med en förändring i företaget.\n      </p>\n      <p>\n        Resultatet ligger till grund för en identifiering och en utvärdering av framtida\n        ledarämnen. Management Audits kan göras för att kartlägga organisationens\n        ledarresurser, t.ex. i samband med förvärv och fusioner, vid implementering av en ny strategi eller när interna eller externa\n        faktorer ställer nya krav på organisationen.\n      </p>\n      <p>\n        Varje projekt skräddarsys tillsammans med vår uppdragsgivare. Bedömning och\n        avrapportering görs på individuell nivå och till gruppen som helhet samt på\n        övergripande nivå.\n      </p>\n    </div>\n  </md-tab>\n</md-tab-group>\n"

/***/ }),

/***/ 276:
/***/ (function(module, exports) {

module.exports = "<div class=\"page_wrapper\">\n  <table style=\"width:100%\">\n    <tr>\n      <td class=\"bold\">Företag</td>\n      <td class=\"bold\">Tjänst</td>\n      <td class=\"bold\">Ort</td>\n    </tr>\n    <tr *ngFor=\"let uppdrag of uppdrag_list\">\n      <td>\n        {{ uppdrag.company }}\n      </td>\n      <td>\n        {{ uppdrag.service }}\n      </td>\n      <td>\n        {{ uppdrag.location }}\n      </td>\n    </tr>\n  </table>\n</div>\n"

/***/ }),

/***/ 537:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(169);


/***/ })

},[537]);
//# sourceMappingURL=main.bundle.js.map