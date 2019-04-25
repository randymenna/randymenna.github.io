(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-login-login-module"],{

/***/ "./src/app/components/login/login.module.ts":
/*!**************************************************!*\
  !*** ./src/app/components/login/login.module.ts ***!
  \**************************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _app_sharedModule__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../app.sharedModule */ "./src/app/app.sharedModule.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login.page */ "./src/app/components/login/login.page.ts");








var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_7__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _app_sharedModule__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_7__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/components/login/login.page.html":
/*!**************************************************!*\
  !*** ./src/app/components/login/login.page.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <div class=\"page-login__header\">\n    {{ 'LOGIN_PAGE.TITLE' | translate }}\n  </div>\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]=\"credentialsForm\" class=\"page-login--full-height\">\n\n\n    <ion-grid class=\"page-login--full-height\">\n      <ion-row>\n        <ion-col size=\"12\" align-self-start>\n          <ion-item>\n            <div>\n              <ion-icon name=\"mail\"></ion-icon>\n              <input type=\"email\" placeholder=\"{{ 'LOGIN_PAGE.EMAIL' | translate }}\"\n                     [formControl]=\"credentialsForm.controls['email']\" class=\"page-login__input\"/>\n            </div>\n          </ion-item>\n        </ion-col>\n\n        <ion-col size=\"12\" align-self-start>\n          <ion-item>\n            <div>\n              <ion-icon name=\"lock\"></ion-icon>\n              <input type=\"password\" placeholder=\"{{ 'LOGIN_PAGE.PASSWORD' | translate }}\"\n                     [formControl]=\"credentialsForm.controls['password']\" class=\"page-login__input\"/>\n            </div>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col align-self-end size=\"12\">\n          <ion-grid>\n            <ion-row>\n              <ion-col size=\"6\">\n                <ion-button expand=\"full\" color=\"dark\" (click)=\"onSignIn()\">\n                  {{ 'LOGIN_PAGE.SIGN_IN' | translate }}\n                </ion-button>\n              </ion-col>\n              <ion-col size=\"6\">\n                <ion-button expand=\"full\" color=\"light\" (click)=\"onRegister()\">\n                  {{ 'LOGIN_PAGE.REGISTER' | translate }}\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n\n  </form>\n\n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/components/login/login.page.scss":
/*!**************************************************!*\
  !*** ./src/app/components/login/login.page.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-login__header {\n  height: 60px;\n  color: white;\n  background: black;\n  text-align: center;\n  font-size: 20px;\n  padding-top: 20px;\n  padding-bottom: 20px; }\n\n.page-login__body--center-div {\n  position: relative;\n  top: 15%;\n  -webkit-transform: perspective(1px) translateY(-50%);\n  transform: perspective(1px) translateY(-50%);\n  padding: 40px; }\n\n.page-login__button-group--position {\n  position: relative;\n  -webkit-transform: perspective(1px) translateY(755%);\n          transform: perspective(1px) translateY(755%); }\n\n.page-login__button--height {\n  height: 80px; }\n\n.page-login--full-height {\n  height: 100%; }\n\n.page-login__input {\n  border: 0;\n  background: #efefef; }\n\n.item-block .item-inner {\n  border: 0 !important; }\n\n.item-ios.item-block,\n.item-md.item-block .item-inner {\n  border-bottom: 0 !important;\n  margin-bottom: 10px; }\n\n.item-ios.item-block,\n.item-md.item-block .item-inner .input-wrapper {\n  background: #efefef;\n  border-radius: 2px; }\n\n.icon.item-icon {\n  margin-left: 10px;\n  margin-right: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYW5keS9EZXZlbG9wbWVudC9vcmFwYXkvb3JhcGF5LW1vYmlsZS9zcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsb0JBQW9CLEVBQUE7O0FBR3RCO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixvREFBb0Q7RUFDcEQsNENBQTRDO0VBQzVDLGFBQWEsRUFBQTs7QUFHZjtFQUNFLGtCQUFrQjtFQUNsQixvREFBNEM7VUFBNUMsNENBQTRDLEVBQUE7O0FBRzlDO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0UsU0FBUztFQUNULG1CQUFtQixFQUFBOztBQUl2QjtFQUNFLG9CQUFvQixFQUFBOztBQUd0Qjs7RUFFRSwyQkFBMkI7RUFDM0IsbUJBQW1CLEVBQUE7O0FBR3JCOztFQUVFLG1CQUFtQjtFQUduQixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLWxvZ2luIHtcblxuICAmX19oZWFkZXIge1xuICAgIGhlaWdodDogNjBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgfVxuXG4gICZfX2JvZHktLWNlbnRlci1kaXYge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDE1JTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMXB4KSB0cmFuc2xhdGVZKC01MCUpO1xuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMXB4KSB0cmFuc2xhdGVZKC01MCUpO1xuICAgIHBhZGRpbmc6IDQwcHg7XG4gIH1cblxuICAmX19idXR0b24tZ3JvdXAtLXBvc2l0aW9uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxcHgpIHRyYW5zbGF0ZVkoNzU1JSk7XG4gIH1cblxuICAmX19idXR0b24tLWhlaWdodCB7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICB9XG5cbiAgJi0tZnVsbC1oZWlnaHQge1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuXG4gICZfX2lucHV0IHtcbiAgICBib3JkZXI6IDA7XG4gICAgYmFja2dyb3VuZDogI2VmZWZlZjtcbiAgfVxufVxuXG4uaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XG4gIGJvcmRlcjogMCAhaW1wb3J0YW50O1xufVxuXG4uaXRlbS1pb3MuaXRlbS1ibG9jayxcbi5pdGVtLW1kLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIge1xuICBib3JkZXItYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5pdGVtLWlvcy5pdGVtLWJsb2NrLFxuLml0ZW0tbWQuaXRlbS1ibG9jayAuaXRlbS1pbm5lciAuaW5wdXQtd3JhcHBlciB7XG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMnB4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDJweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuXG4uaWNvbi5pdGVtLWljb24ge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/login/login.page.ts":
/*!************************************************!*\
  !*** ./src/app/components/login/login.page.ts ***!
  \************************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _sandboxes_user_sandbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @sandboxes/user.sandbox */ "./src/app/services/sandboxes/user.sandbox.ts");






// @ts-ignore => yes its there otherwise it wouldn't compile

// import { RegisterPage } from '../register/register';
var LoginPage = /** @class */ (function () {
    function LoginPage(router, formBuilder, userSandbox, events, translate) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.userSandbox = userSandbox;
        this.events = events;
        this.translate = translate;
        this.credentialsForm = this.formBuilder.group({
            email: [''],
            password: ['']
        });
    }
    LoginPage.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.userSandbox.userError$.subscribe(function (failed) {
            // TODO: show error
        });
        this.events.subscribe('login:success', function () {
            _this.router.navigateByUrl('/app');
        });
    };
    LoginPage.prototype.onSignIn = function () {
        this.userSandbox.login(this.credentialsForm.value['email'], this.credentialsForm.value['password']);
    };
    LoginPage.prototype.onRegister = function () {
        this.router.navigate(['register']);
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/components/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/components/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _sandboxes_user_sandbox__WEBPACK_IMPORTED_MODULE_6__["UserSandbox"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=components-login-login-module.js.map