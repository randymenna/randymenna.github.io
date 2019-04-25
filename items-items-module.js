(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["items-items-module"],{

/***/ "./src/app/components/tabs/items/items.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/tabs/items/items.module.ts ***!
  \*******************************************************/
/*! exports provided: ItemsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsPageModule", function() { return ItemsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared */ "./src/app/app.sharedModule.ts");
/* harmony import */ var _items_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./items.page */ "./src/app/components/tabs/items/items.page.ts");






// @ts-ignore


var routes = [
    {
        path: '',
        component: _items_page__WEBPACK_IMPORTED_MODULE_7__["ItemsPage"]
    }
];
var ItemsPageModule = /** @class */ (function () {
    function ItemsPageModule() {
    }
    ItemsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _shared__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
            ],
            declarations: [_items_page__WEBPACK_IMPORTED_MODULE_7__["ItemsPage"]]
        })
    ], ItemsPageModule);
    return ItemsPageModule;
}());



/***/ }),

/***/ "./src/app/components/tabs/items/items.page.html":
/*!*******************************************************!*\
  !*** ./src/app/components/tabs/items/items.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-buttons slot=\"start\" defaultHref=\"/app/tabs/catalogs\">\n    <ion-back-button></ion-back-button>\n  </ion-buttons>\n  <ion-card class=\"welcome-card\" *ngIf=\"isMerchant\">\n    <ion-card-header>\n      <ion-card-subtitle>{{ 'ITEMS_PAGE.FOR' | translate }}</ion-card-subtitle>\n      <ion-card-title>{{catalog.name}}</ion-card-title>\n      <div class=\"center\">\n        <ion-button (click)=\"onNewItem()\">{{ 'ITEMS_PAGE.NEW' | translate }}</ion-button>\n      </div>\n    </ion-card-header>\n  </ion-card>\n</ion-header>\n\n<ion-content padding>\n  <ion-list *ngFor=\"let item of items\">\n    <ion-item-sliding>\n      <ion-item (click)=\"selectItem(item)\">\n       <ion-card>\n         <ion-card-header>\n           <ion-card-title>\n             {{item.name}}\n           </ion-card-title>\n           <ion-card-subtitle>\n             {{item.description}}\n           </ion-card-subtitle>\n           ${{item.retail}}\n           <ion-card-content>\n             <ion-button size=\"small\">Purchase</ion-button>\n           </ion-card-content>\n         </ion-card-header>\n       </ion-card>\n      </ion-item>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/components/tabs/items/items.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/tabs/items/items.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-items__header {\n  height: 60px;\n  color: white;\n  background: black;\n  text-align: center;\n  font-size: 20px;\n  padding-top: 20px;\n  padding-bottom: 20px; }\n\n.page-items__body--center-div {\n  position: relative;\n  top: 15%;\n  -webkit-transform: perspective(1px) translateY(-50%);\n  transform: perspective(1px) translateY(-50%);\n  padding: 40px; }\n\n.page-items__button-group--position {\n  position: relative;\n  -webkit-transform: perspective(1px) translateY(755%);\n          transform: perspective(1px) translateY(755%); }\n\n.page-items__button--height {\n  height: 80px; }\n\n.page-items--full-height {\n  height: 100%; }\n\n.page-items__input {\n  border: 0;\n  background: #efefef; }\n\n.item-block .item-inner {\n  border: 0 !important; }\n\n.item-ios.item-block,\n.item-md.item-block .item-inner {\n  border-bottom: 0 !important;\n  margin-bottom: 10px; }\n\n.item-ios.item-block,\n.item-md.item-block .item-inner .input-wrapper {\n  background: #efefef;\n  border-radius: 2px; }\n\n.icon.item-icon {\n  margin-left: 10px;\n  margin-right: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYW5keS9EZXZlbG9wbWVudC9vcmFwYXkvb3JhcGF5LW1vYmlsZS9zcmMvYXBwL2NvbXBvbmVudHMvdGFicy9pdGVtcy9pdGVtcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUU7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixvQkFBb0IsRUFBQTs7QUFHdEI7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLG9EQUFvRDtFQUNwRCw0Q0FBNEM7RUFDNUMsYUFBYSxFQUFBOztBQUdmO0VBQ0Usa0JBQWtCO0VBQ2xCLG9EQUE0QztVQUE1Qyw0Q0FBNEMsRUFBQTs7QUFHOUM7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxTQUFTO0VBQ1QsbUJBQW1CLEVBQUE7O0FBSXZCO0VBQ0Usb0JBQW9CLEVBQUE7O0FBR3RCOztFQUVFLDJCQUEyQjtFQUMzQixtQkFBbUIsRUFBQTs7QUFHckI7O0VBRUUsbUJBQW1CO0VBR25CLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGFicy9pdGVtcy9pdGVtcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS1pdGVtcyB7XG5cbiAgJl9faGVhZGVyIHtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIH1cblxuICAmX19ib2R5LS1jZW50ZXItZGl2IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAxNSU7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDFweCkgdHJhbnNsYXRlWSgtNTAlKTtcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDFweCkgdHJhbnNsYXRlWSgtNTAlKTtcbiAgICBwYWRkaW5nOiA0MHB4O1xuICB9XG5cbiAgJl9fYnV0dG9uLWdyb3VwLS1wb3NpdGlvbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMXB4KSB0cmFuc2xhdGVZKDc1NSUpO1xuICB9XG5cbiAgJl9fYnV0dG9uLS1oZWlnaHQge1xuICAgIGhlaWdodDogODBweDtcbiAgfVxuXG4gICYtLWZ1bGwtaGVpZ2h0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cblxuICAmX19pbnB1dCB7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJhY2tncm91bmQ6ICNlZmVmZWY7XG4gIH1cbn1cblxuLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIge1xuICBib3JkZXI6IDAgIWltcG9ydGFudDtcbn1cblxuLml0ZW0taW9zLml0ZW0tYmxvY2ssXG4uaXRlbS1tZC5pdGVtLWJsb2NrIC5pdGVtLWlubmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uaXRlbS1pb3MuaXRlbS1ibG9jayxcbi5pdGVtLW1kLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIgLmlucHV0LXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDJweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAycHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cblxuLmljb24uaXRlbS1pY29uIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/tabs/items/items.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/tabs/items/items.page.ts ***!
  \*****************************************************/
/*! exports provided: ItemsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsPage", function() { return ItemsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sandboxes_items_sandbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sandboxes/items.sandbox */ "./src/app/services/sandboxes/items.sandbox.ts");
/* harmony import */ var _sandboxes_catalog_sandbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sandboxes/catalog.sandbox */ "./src/app/services/sandboxes/catalog.sandbox.ts");
/* harmony import */ var _store_models_user_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @store/models/user.model */ "./src/app/store/models/user.model.ts");
/* harmony import */ var _sandboxes_user_sandbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @sandboxes/user.sandbox */ "./src/app/services/sandboxes/user.sandbox.ts");







var ItemsPage = /** @class */ (function () {
    function ItemsPage(router, itemSandbox, catalogSandbox, userSandbox) {
        this.router = router;
        this.itemSandbox = itemSandbox;
        this.catalogSandbox = catalogSandbox;
        this.userSandbox = userSandbox;
        this.items = [];
    }
    ItemsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.itemSandbox.itemErrorMessage$.subscribe(function (error) {
            // if (error) {
            //   this.toast.show(error, '3000', 'center');
            // }
        });
        this.itemSandbox.currentItem$.subscribe(function (item) {
            _this.item = item;
        });
        this.itemSandbox.items$.subscribe(function (items) {
            _this.items = items;
        });
        this.catalogSandbox.currentCatalog$.subscribe(function (catalog) {
            if (catalog._id) {
                _this.catalog = catalog;
            }
        });
        this.userSandbox.user$.subscribe(function (user) {
            _this.name = user.companyName;
            _this.isMerchant = user.role === _store_models_user_model__WEBPACK_IMPORTED_MODULE_5__["UserTypeEnum"].MERCHANT;
        });
    };
    ItemsPage.prototype.selectItem = function (item) {
        this.itemSandbox.setCurrentItem(item);
        this.router.navigateByUrl('/app/tabs/catalogs/editItem');
    };
    ItemsPage.prototype.onCancel = function () {
        this.router.navigateByUrl('/app/tabs/catalogs');
    };
    ItemsPage.prototype.onNewItem = function () {
        console.log('new item');
    };
    ItemsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-items',
            template: __webpack_require__(/*! ./items.page.html */ "./src/app/components/tabs/items/items.page.html"),
            styles: [__webpack_require__(/*! ./items.page.scss */ "./src/app/components/tabs/items/items.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _sandboxes_items_sandbox__WEBPACK_IMPORTED_MODULE_3__["ItemsSandbox"],
            _sandboxes_catalog_sandbox__WEBPACK_IMPORTED_MODULE_4__["CatalogSandbox"],
            _sandboxes_user_sandbox__WEBPACK_IMPORTED_MODULE_6__["UserSandbox"]])
    ], ItemsPage);
    return ItemsPage;
}());



/***/ })

}]);
//# sourceMappingURL=items-items-module.js.map