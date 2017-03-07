"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sealed(name) {
    return function (target) {
        console.log(`Sealing the constructor: ${name}`);
        Object.seal(target);
        Object.seal(target.prototype);
    };
}
exports.sealed = sealed;
function logger(target) {
    let newConstructor = function () {
        console.log(`Creating new instance.`);
        console.log(target);
    };
    newConstructor.prototype = Object.create(target.prototype);
    newConstructor.prototype.constructor = target;
    return newConstructor;
}
exports.logger = logger;
function writable(isWritable) {
    return function (target, propertyKey, descriptor) {
        console.log(`Setting ${propertyKey}.`);
        descriptor.writable = isWritable;
    };
}
exports.writable = writable;
//# sourceMappingURL=decorators.js.map