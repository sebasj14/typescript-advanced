"use strict";
function sealed(constructor) {
    console.log('sealing the constructor');
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
exports.sealed = sealed;
function logger(target) {
    console.log('in the logger');
    var newConstructor = function () {
        target.apply(this);
        console.log('logging in the new constructor');
    };
    newConstructor.prototype = Object.create(target.prototype);
    newConstructor.prototype.constructor = target;
    return newConstructor;
}
exports.logger = logger;
function methodLogger(target, propertyKey, descriptor) {
    console.log("Property name: " + propertyKey);
    console.log(descriptor.value);
}
exports.methodLogger = methodLogger;
