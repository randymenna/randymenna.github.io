(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-item-edit-item-page-module"],{

/***/ "./src/app/components/tabs/edit-item/edit-item-page.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/tabs/edit-item/edit-item-page.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <form [formGroup]=\"editItemForm\">\n\n    <div class=\"page-edit-item__header\">\n      {{editItemForm.controls['name'].value}}\n    </div>\n  </form>\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]=\"editItemForm\" class=\"page-edit-item--full-height\">\n\n    <ion-grid>\n\n      <ion-row>\n        <ion-col col-6 align-self-start>\n          <ion-item class=\"height-200\">\n            <div>\n              <img type=\"image/svg+xml\" [src]=\"editItemForm.controls['image'].value\" />\n            </div>\n          </ion-item>\n        </ion-col>\n        <ion-col col-6 align-self-start>\n          <ion-item class=\"height-200\" (click)=\"scan()\">\n            <img [src]=\"'assets/bar-code-24157_640.png'\" />\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-12 align-self-start>\n          <h5>{{'EDIT_ITEM_PAGE.CATAGORIES' | translate}}</h5>\n          <ion-item *ngFor=\"let category of editItemForm.controls['catalogs'].value\">\n            <div>\n              {{category}}\n            </div>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-12 align-self-start>\n          <h3>{{'EDIT_ITEM_PAGE.DESCRIPTION' | translate}}</h3>\n          <p>{{editItemForm.controls['description'].value}}</p>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-6 align-self-start>\n          <h3>{{'EDIT_ITEM_PAGE.COST' | translate}}</h3>\n          <p>{{editItemForm.controls['cost'].value}}</p>\n        </ion-col>\n        <ion-col col-6 align-self-start>\n          <h3>{{'EDIT_ITEM_PAGE.RETAIL' | translate}}</h3>\n          <p>{{editItemForm.controls['retail'].value}}</p>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col align-self-end col-12>\n          <div>\n            <ion-grid>\n              <ion-row>\n                <ion-col col-6>\n                  <button ion-button full color=\"dark\" (click)=\"onCreate()\">\n                    {{'EDIT_ITEM_PAGE.SAVE' | translate}}\n                  </button>\n                </ion-col>\n                <ion-col col-6>\n                  <button ion-button full color=\"light\" (click)=\"onCancel()\">\n                    {{'EDIT_ITEM_PAGE.CANCEL' | translate}}\n                  </button>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </div>\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n\n  </form>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/components/tabs/edit-item/edit-item-page.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/tabs/edit-item/edit-item-page.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-edit-item__header {\n  height: 60px;\n  color: white;\n  background: black;\n  text-align: center;\n  font-size: 20px;\n  padding-top: 20px;\n  padding-bottom: 20px; }\n\n.page-edit-item__body--center-div {\n  position: relative;\n  top: 15%;\n  -webkit-transform: perspective(1px) translateY(-50%);\n  transform: perspective(1px) translateY(-50%);\n  padding: 40px; }\n\n.page-edit-item__button-group--position {\n  position: relative;\n  -webkit-transform: perspective(1px) translateY(755%);\n          transform: perspective(1px) translateY(755%); }\n\n.page-edit-item__button--height {\n  height: 80px; }\n\n.page-edit-item--full-height {\n  height: 100%; }\n\n.page-edit-item__input {\n  border: 0;\n  background: #efefef; }\n\n.item-block .item-inner {\n  border: 0 !important; }\n\n.item-ios.item-block,\n.item-md.item-block .item-inner {\n  border-bottom: 0 !important;\n  margin-bottom: 10px; }\n\n.item-ios.item-block,\n.item-md.item-block .item-inner .input-wrapper {\n  background: #efefef;\n  border-radius: 2px; }\n\n.icon.item-icon {\n  margin-left: 10px;\n  margin-right: 10px; }\n\n.height-200 {\n  height: 200px; }\n\n.center {\n  position: absolute;\n  top: 50%;\n  right: 50%;\n  -webkit-transform: translate(50%, -50%);\n          transform: translate(50%, -50%); }\n\n.svg-hack {\n  -webkit-transform: translateX(-45px);\n          transform: translateX(-45px); }\n\nion-icon[class*=\"custom-\"] {\n  -webkit-mask-size: contain;\n          mask-size: contain;\n  -webkit-mask-position: 50% 50%;\n          mask-position: 50% 50%;\n  -webkit-mask-repeat: no-repeat;\n          mask-repeat: no-repeat;\n  background: currentColor;\n  width: 1em;\n  height: 1em; }\n\nion-icon[class*=\"box-svg\"] {\n  -webkit-mask-image: url('box-308010.svg');\n          mask-image: url('box-308010.svg'); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYW5keS9EZXZlbG9wbWVudC9vcmFwYXkvb3JhcGF5LW1vYmlsZS9zcmMvYXBwL2NvbXBvbmVudHMvdGFicy9lZGl0LWl0ZW0vZWRpdC1pdGVtLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUU7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixvQkFBb0IsRUFBQTs7QUFHdEI7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLG9EQUFvRDtFQUNwRCw0Q0FBNEM7RUFDNUMsYUFBYSxFQUFBOztBQUdmO0VBQ0Usa0JBQWtCO0VBQ2xCLG9EQUE0QztVQUE1Qyw0Q0FBNEMsRUFBQTs7QUFHOUM7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxTQUFTO0VBQ1QsbUJBQW1CLEVBQUE7O0FBSXZCO0VBQ0Usb0JBQW9CLEVBQUE7O0FBR3RCOztFQUVFLDJCQUEyQjtFQUMzQixtQkFBbUIsRUFBQTs7QUFHckI7O0VBRUUsbUJBQW1CO0VBR25CLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxhQUFhLEVBQUE7O0FBR2Y7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUFFLFVBQVU7RUFDcEIsdUNBQThCO1VBQTlCLCtCQUE4QixFQUFBOztBQUVoQztFQUNFLG9DQUE0QjtVQUE1Qiw0QkFBNEIsRUFBQTs7QUFHOUI7RUFFSSwwQkFBa0I7VUFBbEIsa0JBQWtCO0VBQ2xCLDhCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsOEJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0Qix3QkFBd0I7RUFDeEIsVUFBVTtFQUNWLFdBQVcsRUFBQTs7QUFQZjtFQVdJLHlDQUFrRDtVQUFsRCxpQ0FBa0QsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGFicy9lZGl0LWl0ZW0vZWRpdC1pdGVtLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS1lZGl0LWl0ZW0ge1xuXG4gICZfX2hlYWRlciB7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICB9XG5cbiAgJl9fYm9keS0tY2VudGVyLWRpdiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMTUlO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxcHgpIHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxcHgpIHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgcGFkZGluZzogNDBweDtcbiAgfVxuXG4gICZfX2J1dHRvbi1ncm91cC0tcG9zaXRpb24ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDFweCkgdHJhbnNsYXRlWSg3NTUlKTtcbiAgfVxuXG4gICZfX2J1dHRvbi0taGVpZ2h0IHtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gIH1cblxuICAmLS1mdWxsLWhlaWdodCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgJl9faW5wdXQge1xuICAgIGJvcmRlcjogMDtcbiAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xuICB9XG59XG5cbi5pdGVtLWJsb2NrIC5pdGVtLWlubmVyIHtcbiAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5pdGVtLWlvcy5pdGVtLWJsb2NrLFxuLml0ZW0tbWQuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XG4gIGJvcmRlci1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLml0ZW0taW9zLml0ZW0tYmxvY2ssXG4uaXRlbS1tZC5pdGVtLWJsb2NrIC5pdGVtLWlubmVyIC5pbnB1dC13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAycHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogMnB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG5cbi5pY29uLml0ZW0taWNvbiB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5oZWlnaHQtMjAwIHtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cblxuLmNlbnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7IHJpZ2h0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwtNTAlKTtcbn1cbi5zdmctaGFjayB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNDVweCk7XG59XG5cbmlvbi1pY29uIHtcbiAgJltjbGFzcyo9XCJjdXN0b20tXCJdIHtcbiAgICBtYXNrLXNpemU6IGNvbnRhaW47XG4gICAgbWFzay1wb3NpdGlvbjogNTAlIDUwJTtcbiAgICBtYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQ6IGN1cnJlbnRDb2xvcjtcbiAgICB3aWR0aDogMWVtO1xuICAgIGhlaWdodDogMWVtO1xuICB9XG5cbiAgJltjbGFzcyo9XCJib3gtc3ZnXCJdIHtcbiAgICBtYXNrLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2JveC0zMDgwMTAuc3ZnKTtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/tabs/edit-item/edit-item-page.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/tabs/edit-item/edit-item-page.component.ts ***!
  \***********************************************************************/
/*! exports provided: EditItemPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditItemPage", function() { return EditItemPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");
/* harmony import */ var _sandboxes_items_sandbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @sandboxes/items.sandbox */ "./src/app/services/sandboxes/items.sandbox.ts");






var scannerOptions = {
    preferFrontCamera: true,
    showFlipCameraButton: true,
    showTorchButton: true,
    disableSuccessBeep: false // iOS and Android
};
var EditItemPage = /** @class */ (function () {
    function EditItemPage(router, 
    // private toast: Toast,
    formBuilder, barcodeScanner, itemSandbox) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.barcodeScanner = barcodeScanner;
        this.itemSandbox = itemSandbox;
    }
    EditItemPage.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.itemSandbox.itemError$.subscribe(function (error) {
            if (error) {
                // this.toast.show(`${error}`, '3000', 'center').subscribe(
                //     toast => {
                //       console.log(toast);
                //     }
                // );
            }
        });
        this.itemSandbox.currentItem$.subscribe(function (currentItem) {
            _this.editItemForm = _this.formBuilder.group({
                name: [currentItem.name],
                description: [currentItem.description],
                image: [currentItem.image],
                upc: [currentItem.upc],
                cost: [currentItem.cost],
                retail: [currentItem.retail],
            });
        });
    };
    EditItemPage.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    EditItemPage.prototype.scan = function () {
        var _this = this;
        this.selectedItem = {};
        this.barcodeScanner.scan().then(function (barcodeData) {
            _this.itemSandbox.getItem(barcodeData.text);
        }, function (err) {
            // this.toast.show(err, '5000', 'center').subscribe(
            //     toast => {
            //       console.log(toast);
            //     }
            // );
        });
    };
    EditItemPage.prototype.onCancel = function () {
        this.router.navigateByUrl('/app/tabs/catalogs');
    };
    EditItemPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page-edit-item',
            template: __webpack_require__(/*! ./edit-item-page.component.html */ "./src/app/components/tabs/edit-item/edit-item-page.component.html"),
            styles: [__webpack_require__(/*! ./edit-item-page.component.scss */ "./src/app/components/tabs/edit-item/edit-item-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__["BarcodeScanner"],
            _sandboxes_items_sandbox__WEBPACK_IMPORTED_MODULE_5__["ItemsSandbox"]])
    ], EditItemPage);
    return EditItemPage;
}());



/***/ }),

/***/ "./src/app/components/tabs/edit-item/edit-item-page.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/tabs/edit-item/edit-item-page.module.ts ***!
  \********************************************************************/
/*! exports provided: EditItemPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditItemPageModule", function() { return EditItemPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _edit_item_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-item-page.component */ "./src/app/components/tabs/edit-item/edit-item-page.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared */ "./src/app/app.sharedModule.ts");







// @ts-ignore

var EditItemPageModule = /** @class */ (function () {
    function EditItemPageModule() {
    }
    EditItemPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _shared__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _edit_item_page_component__WEBPACK_IMPORTED_MODULE_6__["EditItemPage"] }])
            ],
            declarations: [_edit_item_page_component__WEBPACK_IMPORTED_MODULE_6__["EditItemPage"]]
        })
    ], EditItemPageModule);
    return EditItemPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=edit-item-edit-item-page-module.js.map