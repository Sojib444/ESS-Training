"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Injector {
    static services = new Map();
    static register(token, instance) {
        this.services.set(token, instance);
    }
    static resolve(token) {
        const service = this.services.get(token);
        if (!service)
            throw new Error(`No provider for ${token}`);
        return service;
    }
}
function Injectable(token) {
    return function (constructor) {
        Injector.register(token, new constructor());
    };
}
function Inject(token) {
    return function (target, propertyKey) {
        Object.defineProperty(target, propertyKey, {
            get: () => Injector.resolve(token),
            enumerable: true,
            configurable: true,
        });
    };
}
//# sourceMappingURL=injector.js.map