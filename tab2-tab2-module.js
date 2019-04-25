(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "./src/app/components/tabs/tab2/tab2.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/tabs/tab2/tab2.module.ts ***!
  \*****************************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab2.page */ "./src/app/components/tabs/tab2/tab2.page.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared */ "./src/app/app.sharedModule.ts");








var Tab2PageModule = /** @class */ (function () {
    function Tab2PageModule() {
    }
    Tab2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _shared__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"] }])
            ],
            declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]]
        })
    ], Tab2PageModule);
    return Tab2PageModule;
}());



/***/ }),

/***/ "./src/app/components/tabs/tab2/tab2.page.html":
/*!*****************************************************!*\
  !*** ./src/app/components/tabs/tab2/tab2.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      <h2>{{ 'RECEIPTS_PAGE.TITLE' | translate }}</h2>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding *ngIf=\"!isMerchant\">\n  <ion-list *ngFor=\"let receipt of receipts\">\n    <ion-item-sliding>\n      <ion-item>\n        <ion-card>\n          <ion-card-header>\n            <ion-text>\n              {{receipt.name}}\n            </ion-text>\n            <ion-card-subtitle>\n              {{receipt.timestamp}}\n            </ion-card-subtitle>\n            ${{receipt.reference}}\n          </ion-card-header>\n        </ion-card>\n      </ion-item>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n\n<ion-content padding *ngIf=\"isMerchant\">\n    <ion-item-sliding>\n      <ion-grid>\n        <ion-row align-items-start *ngFor=\"let receipt of receipts\">\n          <ion-col>\n            {{receipt.name}}\n          </ion-col>\n          <ion-col>\n            {{receipt.timestamp}}\n          </ion-col>\n          <ion-col>\n            {{receipt.reference}}\n          </ion-col>\n          <ion-col>\n            ${{receipt.amount}}\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item-sliding>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/components/tabs/tab2/tab2.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/tabs/tab2/tab2.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGFicy90YWIyL3RhYjIucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/tabs/tab2/tab2.page.ts":
/*!***************************************************!*\
  !*** ./src/app/components/tabs/tab2/tab2.page.ts ***!
  \***************************************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _store_models_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @store/models/user.model */ "./src/app/store/models/user.model.ts");
/* harmony import */ var _sandboxes_user_sandbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sandboxes/user.sandbox */ "./src/app/services/sandboxes/user.sandbox.ts");




var Tab2Page = /** @class */ (function () {
    function Tab2Page(userSandbox) {
        this.userSandbox = userSandbox;
        this.userReceipts = [
            {
                name: 'Event Ticket - All Weekend',
                timestamp: 'April 20, 2019',
                reference: 'evt42019-01234567789'
            },
            {
                name: 'Coffee',
                timestamp: 'April 23, 2019',
                reference: 'cfe42019-01234567789'
            },
            {
                name: 'Falafel and Shake',
                timestamp: 'April 23, 2019',
                reference: 'flfshk42019-01234567789'
            },
            {
                name: 'Tegridy Farms T-Shirt - Large',
                timestamp: 'April 20, 2019',
                reference: 'tftl42019-01234567789'
            }
        ];
        this.merchantReceipts = [
            {
                name: 'Event Ticket - All Weekend',
                timestamp: 'April 20, 2019',
                reference: 'evt42019-01234567789',
                amount: 15
            },
            {
                name: 'Event Ticket - All Weekend',
                timestamp: 'April 20, 2019',
                reference: 'evt42019-11111111111',
                amount: 15
            },
            {
                name: 'Event Ticket - All Weekend',
                timestamp: 'April 20, 2019',
                reference: 'evt42019-2222222222',
                amount: 15
            },
            {
                name: 'Event Ticket - All Weekend',
                timestamp: 'April 20, 2019',
                reference: 'evt42019-33333333333',
                amount: 15
            },
        ];
        this.receipts = this.merchantReceipts;
    }
    Tab2Page.prototype.ngOnInit = function () {
        var _this = this;
        this.userSandbox.user$.subscribe(function (user) {
            _this.name = user.companyName;
            _this.isMerchant = user.role === _store_models_user_model__WEBPACK_IMPORTED_MODULE_2__["UserTypeEnum"].MERCHANT;
            _this.receipts = _this.isMerchant ? _this.merchantReceipts : _this.userReceipts;
        });
    };
    Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab2',
            template: __webpack_require__(/*! ./tab2.page.html */ "./src/app/components/tabs/tab2/tab2.page.html"),
            styles: [__webpack_require__(/*! ./tab2.page.scss */ "./src/app/components/tabs/tab2/tab2.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_sandboxes_user_sandbox__WEBPACK_IMPORTED_MODULE_3__["UserSandbox"]])
    ], Tab2Page);
    return Tab2Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module.js.map