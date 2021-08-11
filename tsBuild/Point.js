"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(Re, Im) {
        this.Re = Re;
        this.Im = Im;
    }
    Point.prototype.Pow = function () {
        var newRe = Math.pow(this.Re, 2) - Math.pow(this.Im, 2);
        var newIm = 2 * this.Re * this.Im;
        return new Point(newRe, newIm);
    };
    Point.prototype.Add = function (p) {
        this.Re += p.Re;
        this.Im += p.Im;
        return this;
    };
    Point.prototype.Abs = function () {
        return Math.pow(Math.pow(this.Re, 2) + Math.pow(this.Im, 2), 0.5);
    };
    return Point;
}());
exports.Point = Point;
//# sourceMappingURL=Point.js.map