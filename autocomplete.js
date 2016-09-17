"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Autocomplete = (function () {
    function Autocomplete(elem) {
        this.elem = elem;
    }
    Autocomplete.prototype.ngAfterContentInit = function () {
        $(this.elem.nativeElement).autocomplete(this.autocomplete);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Autocomplete.prototype, "autocomplete", void 0);
    Autocomplete = __decorate([
        core_1.Directive({
            selector: '[autocomplete]',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], Autocomplete);
    return Autocomplete;
}());
exports.Autocomplete = Autocomplete;
//# sourceMappingURL=autocomplete.js.map