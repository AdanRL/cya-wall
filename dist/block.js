"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Block = void 0;
var Block = /** @class */ (function () {
    function Block(size) {
        this.size = size;
    }
    Block.prototype.getSize = function () {
        return this.size;
    };
    Block.prototype.print = function () {
        var imageBlock = "|";
        for (var i = 0; i < this.size; i++) {
            imageBlock += "x";
        }
        imageBlock += "|";
        console.log(imageBlock);
    };
    return Block;
}());
exports.Block = Block;
