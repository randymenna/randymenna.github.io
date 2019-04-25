(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["catalogs-catalogs-page-module"],{

/***/ "./src/app/components/tabs/catalogs/catalogs-page.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/tabs/catalogs/catalogs-page.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-card class=\"welcome-card\" *ngIf=\"isMerchant\">\n    <ion-card-header>\n      <ion-card-subtitle>{{ 'CATALOGS_PAGE.TITLE' | translate }}</ion-card-subtitle>\n      <ion-card-title>{{name}}</ion-card-title>\n        <div class=\"center\">\n            <ion-button (click)=\"onNewCatalog()\">{{ 'CATALOGS_PAGE.NEW' | translate }}</ion-button>\n        </div>\n    </ion-card-header>\n  </ion-card>\n</ion-header>\n\n<ion-content>\n    <div class=\"wrapper\">\n        <div *ngFor=\"let catalog of catalogs; let i = index\" class=\"item\">\n            <div>\n                <fa-icon [icon]=\"['fas', catalog.icon]\" size=\"4x\" (click)=\"onSelectCatalog(catalog)\"></fa-icon>\n            </div>\n            <div>\n                {{catalog.name}}\n            </div>\n        </div>\n    </div>\n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/components/tabs/catalogs/catalogs-page.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/tabs/catalogs/catalogs-page.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\n  margin-left: auto;\n  margin-right: auto;\n  text-align: center; }\n\n.wrapper {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 20px; }\n\n.item {\n  margin: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYW5keS9EZXZlbG9wbWVudC9vcmFwYXkvb3JhcGF5LW1vYmlsZS9zcmMvYXBwL2NvbXBvbmVudHMvdGFicy9jYXRhbG9ncy9jYXRhbG9ncy1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLGFBQWEsRUFBQTs7QUFHZjtFQUNFLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGFicy9jYXRhbG9ncy9jYXRhbG9ncy1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlciB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLndyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5pdGVtIHtcbiAgbWFyZ2luOiAyMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/tabs/catalogs/catalogs-page.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/tabs/catalogs/catalogs-page.component.ts ***!
  \*********************************************************************/
/*! exports provided: CatalogsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogsPage", function() { return CatalogsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sandboxes_catalog_sandbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sandboxes/catalog.sandbox */ "./src/app/services/sandboxes/catalog.sandbox.ts");
/* harmony import */ var _sandboxes_user_sandbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sandboxes/user.sandbox */ "./src/app/services/sandboxes/user.sandbox.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _store_models_user_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @store/models/user.model */ "./src/app/store/models/user.model.ts");






var CatalogsPage = /** @class */ (function () {
    function CatalogsPage(catalogSandbox, userSandbox, router) {
        this.catalogSandbox = catalogSandbox;
        this.userSandbox = userSandbox;
        this.router = router;
        this.isMerchant = false;
    }
    CatalogsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.catalogSandbox.getCatalogs();
        this.catalogSandbox.catalogErrorMessage$.subscribe(function (error) {
            // TODO: show error
        });
        this.catalogSandbox.catalogs$.subscribe(function (catalogs) {
            _this.catalogs = catalogs;
        });
        this.userSandbox.user$.subscribe(function (user) {
            _this.name = user.companyName;
            _this.isMerchant = user.role === _store_models_user_model__WEBPACK_IMPORTED_MODULE_5__["UserTypeEnum"].MERCHANT;
        });
    };
    CatalogsPage.prototype.onSelectCatalog = function (catalog) {
        this.catalogSandbox.setCurrentCatalog(catalog);
        this.router.navigateByUrl("/app/tabs/catalogs/items");
    };
    CatalogsPage.prototype.onNewItem = function () {
        this.router.navigateByUrl("/app/tabs/catalogs/editItem");
    };
    CatalogsPage.prototype.onNewCatalog = function () {
        this.router.navigateByUrl("/app/tabs/catalogs/newCatalog");
    };
    CatalogsPage.prototype.onShowProducts = function () {
        this.router.navigate(['items']);
    };
    CatalogsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-catalogs',
            template: __webpack_require__(/*! ./catalogs-page.component.html */ "./src/app/components/tabs/catalogs/catalogs-page.component.html"),
            styles: [__webpack_require__(/*! ./catalogs-page.component.scss */ "./src/app/components/tabs/catalogs/catalogs-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_sandboxes_catalog_sandbox__WEBPACK_IMPORTED_MODULE_2__["CatalogSandbox"],
            _sandboxes_user_sandbox__WEBPACK_IMPORTED_MODULE_3__["UserSandbox"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], CatalogsPage);
    return CatalogsPage;
}());



/***/ }),

/***/ "./src/app/components/tabs/catalogs/catalogs-page.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/tabs/catalogs/catalogs-page.module.ts ***!
  \******************************************************************/
/*! exports provided: CatalogsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogsPageModule", function() { return CatalogsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _catalogs_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./catalogs-page.component */ "./src/app/components/tabs/catalogs/catalogs-page.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @shared */ "./src/app/app.sharedModule.ts");












// @ts-ignore

_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_8__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["fas"], _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_10__["far"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_11__["fab"]);
var CatalogsPageModule = /** @class */ (function () {
    function CatalogsPageModule() {
    }
    CatalogsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _shared__WEBPACK_IMPORTED_MODULE_12__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _catalogs_page_component__WEBPACK_IMPORTED_MODULE_6__["CatalogsPage"] }]),
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"]
            ],
            declarations: [_catalogs_page_component__WEBPACK_IMPORTED_MODULE_6__["CatalogsPage"]]
        })
    ], CatalogsPageModule);
    return CatalogsPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=catalogs-catalogs-page-module.js.map