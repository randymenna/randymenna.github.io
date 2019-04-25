(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-register-register-module"],{

/***/ "./src/app/components/register/register.module.ts":
/*!********************************************************!*\
  !*** ./src/app/components/register/register.module.ts ***!
  \********************************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _app_sharedModule__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../app.sharedModule */ "./src/app/app.sharedModule.ts");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register.page */ "./src/app/components/register/register.page.ts");








var routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_7__["RegisterPage"]
    }
];
var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _app_sharedModule__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
            ],
            declarations: [_register_page__WEBPACK_IMPORTED_MODULE_7__["RegisterPage"]]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());



/***/ }),

/***/ "./src/app/components/register/register.page.html":
/*!********************************************************!*\
  !*** ./src/app/components/register/register.page.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <div class=\"page-register__header\">\n    {{ 'REGISTER_PAGE.TITLE' | translate }}\n  </div>\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]=\"registerForm\" class=\"page-register--full-height\">\n\n    <ion-grid class=\"page-register--full-height\">\n\n      <ion-row class=\"page-register--full-height\">\n<!--        <ion-col size=\"12\">-->\n<!--          <ion-item class=\"page-register&#45;&#45;full-height\">-->\n<!--              <ion-grid>-->\n<!--                <ion-row>-->\n<!--                  <ion-col size=\"1\">-->\n<!--                    <ion-icon name=\"person\"></ion-icon>-->\n<!--                  </ion-col>-->\n<!--                  <ion-col size=\"5\">-->\n<!--                    <input type=\"text\" placeholder=\"{{'REGISTER_PAGE.FIRST_NAME' | translate}}\"-->\n<!--                           [formControl]=\"registerForm.controls['firstName']\"-->\n<!--                           class=\"page-register__input\"/>-->\n<!--                  </ion-col>-->\n<!--                  <ion-col size=\"6\">-->\n<!--                    <input type=\"text\" placeholder=\"{{'REGISTER_PAGE.LAST_NAME' | translate}}\"-->\n<!--                           [formControl]=\"registerForm.controls['lastName']\"-->\n<!--                           class=\"page-register__input\"/>-->\n<!--                  </ion-col>-->\n<!--                </ion-row>-->\n<!--              </ion-grid>-->\n<!--          </ion-item>-->\n<!--        </ion-col>-->\n\n        <ion-col size=\"12\">\n          <ion-item class=\"page-register--full-height\">\n\n              <ion-icon name=\"mail\"></ion-icon>\n              <input type=\"email\" placeholder=\"{{'REGISTER_PAGE.EMAIL' | translate}}\"\n                     [formControl]=\"registerForm.controls['email']\" class=\"page-register__input\"/>\n\n          </ion-item>\n        </ion-col>\n\n        <ion-col size=\"12\">\n          <ion-item class=\"page-register--full-height\">\n              <ion-icon name=\"lock\"></ion-icon>\n              <input type=\"password\" placeholder=\"{{'REGISTER_PAGE.PASSWORD' | translate}}\"\n                     [formControl]=\"registerForm.controls['password']\" class=\"page-register__input\"/>\n          </ion-item>\n        </ion-col>\n\n<!--        <ion-col size=\"12\">-->\n<!--          <ion-item class=\"page-register&#45;&#45;full-height\">-->\n<!--              <ion-icon name=\"lock\"></ion-icon>-->\n<!--              <input type=\"password\" placeholder=\"{{'REGISTER_PAGE.REPEAT_PASSWORD' | translate}}\"-->\n<!--                     [formControl]=\"registerForm.controls['repeatPassword']\"-->\n<!--                     class=\"page-register__input\"/>-->\n<!--          </ion-item>-->\n<!--        </ion-col>-->\n\n<!--        <ion-col size=\"12\">-->\n<!--          <ion-item class=\"page-register&#45;&#45;full-height\">-->\n<!--              <ion-icon name=\"call\"></ion-icon>-->\n<!--              <input type=\"text\" placeholder=\"{{'REGISTER_PAGE.MOBILE_PHONE' | translate}}\"-->\n<!--                     [formControl]=\"registerForm.controls['mobilePhone']\" class=\"page-register__input\"/>-->\n<!--          </ion-item>-->\n<!--        </ion-col>-->\n\n        <ion-col size=\"12\">\n          <ion-item class=\"page-register--full-height\">\n              <ion-icon name=\"briefcase\"></ion-icon>\n              <input type=\"text\" placeholder=\"{{'REGISTER_PAGE.COMPANY_NAME' | translate}}\"\n                     [formControl]=\"registerForm.controls['companyName']\" class=\"page-register__input\"/>\n          </ion-item>\n        </ion-col>\n\n        <ion-col size=\"12\">\n          <ion-item class=\"page-register--full-height\">\n            <div class=\"page-register__terms-conditions\">\n              <p>\n                {{'REGISTER_PAGE.AGREE_TO' | translate}} <a href=\"#\">{{'REGISTER_PAGE.TERMS' | translate}}</a>\n              </p>\n            </div>\n          </ion-item>\n        </ion-col>\n\n        <ion-col align-self-end size=\"12\">\n          <ion-grid>\n            <ion-row>\n              <ion-col size=\"6\">\n                <ion-button expand=\"full\" color=\"dark\" (click)=\"onSignIn()\">\n                  {{ 'LOGIN_PAGE.SIGN_IN' | translate }}\n                </ion-button>\n              </ion-col>\n              <ion-col size=\"6\">\n                <ion-button expand=\"full\" color=\"light\" (click)=\"onRegister()\">\n                  {{ 'LOGIN_PAGE.REGISTER' | translate }}\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </form>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/components/register/register.page.scss":
/*!********************************************************!*\
  !*** ./src/app/components/register/register.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-register {\n  font-size: 14px; }\n  .page-register__header {\n    height: 60px;\n    color: white;\n    background: black;\n    text-align: center;\n    font-size: 20px;\n    padding-top: 20px;\n    padding-bottom: 20px; }\n  .page-register__input {\n    border: 0;\n    background: #efefef;\n    width: 90%;\n    font-size: 14px; }\n  .page-register__button-group--position {\n    position: relative;\n    -webkit-transform: perspective(1px) translateY(575%);\n            transform: perspective(1px) translateY(575%); }\n  .page-register__button--height {\n    height: 80px; }\n  .page-register--full-height {\n    height: 100%; }\n  .page-register__terms-conditions {\n    text-align: center; }\n  .page-register__terms-conditions p {\n      font-size: 10px; }\n  .item-block .item-inner {\n  border: 0; }\n  .item-md.item-block .item-inner {\n  border-bottom: 0;\n  margin-bottom: 10px; }\n  .item-md.item-block .item-inner .input-wrapper {\n  background: #efefef;\n  border-radius: 2px; }\n  .icon.icon-ios {\n  margin-right: 10px; }\n  .icon.item-icon {\n  margin-left: 10px;\n  margin-right: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYW5keS9EZXZlbG9wbWVudC9vcmFwYXkvb3JhcGF5LW1vYmlsZS9zcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsZUFBZSxFQUFBO0VBRWY7SUFDRSxZQUFZO0lBQ1osWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixvQkFBb0IsRUFBQTtFQUd0QjtJQUNFLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLGVBQWUsRUFBQTtFQUdqQjtJQUNFLGtCQUFrQjtJQUNsQixvREFBNEM7WUFBNUMsNENBQTRDLEVBQUE7RUFHOUM7SUFDRSxZQUFZLEVBQUE7RUFHZDtJQUNFLFlBQVksRUFBQTtFQUdkO0lBQ0Usa0JBQWtCLEVBQUE7RUFEbkI7TUFHRyxlQUFlLEVBQUE7RUFLckI7RUFDRSxTQUFTLEVBQUE7RUFHWDtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTtFQUdyQjtFQUNFLG1CQUFtQjtFQUduQixrQkFBa0IsRUFBQTtFQUdwQjtFQUNFLGtCQUFrQixFQUFBO0VBR3BCO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS1yZWdpc3RlciB7XG5cbiAgZm9udC1zaXplOiAxNHB4O1xuXG4gICZfX2hlYWRlciB7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICB9XG5cbiAgJl9faW5wdXQge1xuICAgIGJvcmRlcjogMDtcbiAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG5cbiAgJl9fYnV0dG9uLWdyb3VwLS1wb3NpdGlvbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMXB4KSB0cmFuc2xhdGVZKDU3NSUpO1xuICB9XG5cbiAgJl9fYnV0dG9uLS1oZWlnaHQge1xuICAgIGhlaWdodDogODBweDtcbiAgfVxuXG4gICYtLWZ1bGwtaGVpZ2h0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cblxuICAmX190ZXJtcy1jb25kaXRpb25zIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcCB7XG4gICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgfVxuICB9XG59XG5cbi5pdGVtLWJsb2NrIC5pdGVtLWlubmVyIHtcbiAgYm9yZGVyOiAwO1xufVxuXG4uaXRlbS1tZC5pdGVtLWJsb2NrIC5pdGVtLWlubmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLml0ZW0tbWQuaXRlbS1ibG9jayAuaXRlbS1pbm5lciAuaW5wdXQtd3JhcHBlciB7XG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMnB4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDJweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuXG4uaWNvbi5pY29uLWlvcyB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmljb24uaXRlbS1pY29uIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/register/register.page.ts":
/*!******************************************************!*\
  !*** ./src/app/components/register/register.page.ts ***!
  \******************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _sandboxes_user_sandbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @sandboxes/user.sandbox */ "./src/app/services/sandboxes/user.sandbox.ts");





// @ts-ignore => yes its there otherwise it wouldn't compile

var RegisterPage = /** @class */ (function () {
    function RegisterPage(router, formBuilder, userSandbox, events) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.userSandbox = userSandbox;
        this.events = events;
    }
    RegisterPage.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            firstName: [''],
            lastName: [''],
            email: [''],
            password: [''],
            repeatPassword: [''],
            mobilePhone: [''],
            companyName: ['']
        });
    };
    RegisterPage.prototype.onRegister = function () {
        var _this = this;
        this.userSandbox.register(this.registerForm.value);
        this.subscription = this.events.subscribe('login:success', function () {
            if (_this.subscription) {
                _this.subscription.unsubscribe();
            }
            _this.router.navigate(['tabs']);
        });
    };
    RegisterPage.prototype.onSignIn = function () {
        this.router.navigate(['login']);
    };
    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.page.html */ "./src/app/components/register/register.page.html"),
            styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/components/register/register.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _sandboxes_user_sandbox__WEBPACK_IMPORTED_MODULE_5__["UserSandbox"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"]])
    ], RegisterPage);
    return RegisterPage;
}());



/***/ })

}]);
//# sourceMappingURL=components-register-register-module.js.map