(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["new-catalog-new-catalog-page-module"],{

/***/ "./src/app/components/tabs/new-catalog/new-catalog-page.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/tabs/new-catalog/new-catalog-page.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-buttons slot=\"start\" defaultHref=\"/app/tabs/catalogs\">\n    <ion-back-button></ion-back-button>\n    <ion-text>\n      <h2>{{ 'NEW_CATALOG_PAGE.TITLE' | translate }}</h2>\n    </ion-text>\n  </ion-buttons>\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]=\"newCatalogForm\" class=\"page-new-catalog--full-height\">\n\n    <ion-title>\n      {{userSandBox.userName$ | async}}\n    </ion-title>\n\n    <ion-grid class=\"page-new-catalog--full-height\">\n\n      <ion-row>\n        <ion-col col-12 align-self-start>\n          <ion-item>\n            <div>\n              <ion-icon name=\"folder\"></ion-icon>\n              <input type=\"name\" placeholder=\"{{ 'NEW_CATALOG_PAGE.ENTER_NEW_NAME' | translate }}\"\n                     [formControl]=\"newCatalogForm.controls['name']\" class=\"page-new-catalog__input\"/>\n            </div>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row class=\"page-new-catalog--full-height\">\n        <ion-col align-self-end col-12>\n          <div>\n            <ion-grid>\n              <ion-row>\n                <ion-col col-6>\n                  <button ion-button full color=\"dark\" (click)=\"onCreate()\">\n                    {{ 'NEW_CATALOG_PAGE.CREATE' | translate }}\n                  </button>\n                </ion-col>\n                <ion-col col-6>\n                  <button ion-button full color=\"light\" (click)=\"onCancel()\">\n                    {{ 'NEW_CATALOG_PAGE.CANCEL' | translate }}\n                  </button>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </div>\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n\n  </form>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/components/tabs/new-catalog/new-catalog-page.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/tabs/new-catalog/new-catalog-page.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-new-catalog__header {\n  height: 60px;\n  color: white;\n  background: black;\n  text-align: center;\n  font-size: 20px;\n  padding-top: 20px;\n  padding-bottom: 20px; }\n\n.page-new-catalog__body--center-div {\n  position: relative;\n  top: 15%;\n  -webkit-transform: perspective(1px) translateY(-50%);\n  transform: perspective(1px) translateY(-50%);\n  padding: 40px; }\n\n.page-new-catalog__button-group--position {\n  position: relative;\n  -webkit-transform: perspective(1px) translateY(755%);\n          transform: perspective(1px) translateY(755%); }\n\n.page-new-catalog__button--height {\n  height: 80px; }\n\n.page-new-catalog--full-height {\n  height: 100%; }\n\n.page-new-catalog__input {\n  border: 0;\n  background: #efefef; }\n\n.item-block .item-inner {\n  border: 0 !important; }\n\n.item-ios.item-block,\n.item-md.item-block .item-inner {\n  border-bottom: 0 !important;\n  margin-bottom: 10px; }\n\n.item-ios.item-block,\n.item-md.item-block .item-inner .input-wrapper {\n  background: #efefef;\n  border-radius: 2px; }\n\n.icon.item-icon {\n  margin-left: 10px;\n  margin-right: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYW5keS9EZXZlbG9wbWVudC9vcmFwYXkvb3JhcGF5LW1vYmlsZS9zcmMvYXBwL2NvbXBvbmVudHMvdGFicy9uZXctY2F0YWxvZy9uZXctY2F0YWxvZy1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsb0JBQW9CLEVBQUE7O0FBR3RCO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixvREFBb0Q7RUFDcEQsNENBQTRDO0VBQzVDLGFBQWEsRUFBQTs7QUFHZjtFQUNFLGtCQUFrQjtFQUNsQixvREFBNEM7VUFBNUMsNENBQTRDLEVBQUE7O0FBRzlDO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0UsU0FBUztFQUNULG1CQUFtQixFQUFBOztBQUl2QjtFQUNFLG9CQUFvQixFQUFBOztBQUd0Qjs7RUFFRSwyQkFBMkI7RUFDM0IsbUJBQW1CLEVBQUE7O0FBR3JCOztFQUVFLG1CQUFtQjtFQUduQixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3RhYnMvbmV3LWNhdGFsb2cvbmV3LWNhdGFsb2ctcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLW5ldy1jYXRhbG9nIHtcblxuICAmX19oZWFkZXIge1xuICAgIGhlaWdodDogNjBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgfVxuXG4gICZfX2JvZHktLWNlbnRlci1kaXYge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDE1JTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMXB4KSB0cmFuc2xhdGVZKC01MCUpO1xuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMXB4KSB0cmFuc2xhdGVZKC01MCUpO1xuICAgIHBhZGRpbmc6IDQwcHg7XG4gIH1cblxuICAmX19idXR0b24tZ3JvdXAtLXBvc2l0aW9uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxcHgpIHRyYW5zbGF0ZVkoNzU1JSk7XG4gIH1cblxuICAmX19idXR0b24tLWhlaWdodCB7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICB9XG5cbiAgJi0tZnVsbC1oZWlnaHQge1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuXG4gICZfX2lucHV0IHtcbiAgICBib3JkZXI6IDA7XG4gICAgYmFja2dyb3VuZDogI2VmZWZlZjtcbiAgfVxufVxuXG4uaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XG4gIGJvcmRlcjogMCAhaW1wb3J0YW50O1xufVxuXG4uaXRlbS1pb3MuaXRlbS1ibG9jayxcbi5pdGVtLW1kLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIge1xuICBib3JkZXItYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5pdGVtLWlvcy5pdGVtLWJsb2NrLFxuLml0ZW0tbWQuaXRlbS1ibG9jayAuaXRlbS1pbm5lciAuaW5wdXQtd3JhcHBlciB7XG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMnB4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDJweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuXG4uaWNvbi5pdGVtLWljb24ge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/tabs/new-catalog/new-catalog-page.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/tabs/new-catalog/new-catalog-page.component.ts ***!
  \***************************************************************************/
/*! exports provided: NewCatalogPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewCatalogPage", function() { return NewCatalogPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _sandboxes_user_sandbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sandboxes/user.sandbox */ "./src/app/services/sandboxes/user.sandbox.ts");
/* harmony import */ var _sandboxes_catalog_sandbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @sandboxes/catalog.sandbox */ "./src/app/services/sandboxes/catalog.sandbox.ts");






var NewCatalogPage = /** @class */ (function () {
    function NewCatalogPage(router, 
    // private toast: Toast,
    formBuilder, catalogSandbox, userSandBox) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.catalogSandbox = catalogSandbox;
        this.userSandBox = userSandBox;
        this.newCatalogForm = this.formBuilder.group({
            name: ['']
        });
    }
    NewCatalogPage.prototype.ngOnInit = function () {
        this.subscription = this.catalogSandbox.catalogErrorMessage$.subscribe(function (error) {
            if (error) {
                // this.toast.show(error, '3000', 'center');
            }
        });
    };
    NewCatalogPage.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    NewCatalogPage.prototype.onCreate = function () {
        var _this = this;
        this.catalogSandbox.createNewCatalog(this.newCatalogForm.value['name']);
        var subscription = this.catalogSandbox.catalogLoaded$.subscribe(function (loaded) {
            if (loaded) {
                _this.router.navigateByUrl('/app/tabs/catalogs');
            }
        });
    };
    NewCatalogPage.prototype.onCancel = function () {
        this.router.navigateByUrl('/app/tabs/catalogs');
    };
    NewCatalogPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page-new-catalog',
            template: __webpack_require__(/*! ./new-catalog-page.component.html */ "./src/app/components/tabs/new-catalog/new-catalog-page.component.html"),
            styles: [__webpack_require__(/*! ./new-catalog-page.component.scss */ "./src/app/components/tabs/new-catalog/new-catalog-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _sandboxes_catalog_sandbox__WEBPACK_IMPORTED_MODULE_5__["CatalogSandbox"],
            _sandboxes_user_sandbox__WEBPACK_IMPORTED_MODULE_4__["UserSandbox"]])
    ], NewCatalogPage);
    return NewCatalogPage;
}());



/***/ }),

/***/ "./src/app/components/tabs/new-catalog/new-catalog-page.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/tabs/new-catalog/new-catalog-page.module.ts ***!
  \************************************************************************/
/*! exports provided: NewCatalogPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewCatalogPageModule", function() { return NewCatalogPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _new_catalog_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-catalog-page.component */ "./src/app/components/tabs/new-catalog/new-catalog-page.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared */ "./src/app/app.sharedModule.ts");







// @ts-ignore

var NewCatalogPageModule = /** @class */ (function () {
    function NewCatalogPageModule() {
    }
    NewCatalogPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _shared__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _new_catalog_page_component__WEBPACK_IMPORTED_MODULE_6__["NewCatalogPage"] }])
            ],
            declarations: [_new_catalog_page_component__WEBPACK_IMPORTED_MODULE_6__["NewCatalogPage"]]
        })
    ], NewCatalogPageModule);
    return NewCatalogPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=new-catalog-new-catalog-page-module.js.map