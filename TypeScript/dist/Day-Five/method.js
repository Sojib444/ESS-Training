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
Object.defineProperty(exports, "__esModule", { value: true });
function first() {
    console.log("first(): factory evaluated");
    return function (target, propertyKey, descriptor) {
        return descriptor.value;
    };
}
class Calculator {
}
// const calc = new Calculator();
// calc.add(2, 3);      // Logs arguments & result
// calc.multiply(4, 5); // Logs arguments & result
function Retry(retries = 3, delay = 500) {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = async function (...args) {
            let attempts = 0;
            while (attempts < retries) {
                try {
                    return await originalMethod.apply(this, args);
                }
                catch (error) {
                    attempts++;
                    console.warn(`⚠️ Attempt ${attempts} for ${String(propertyKey)} failed. Retrying...`);
                    if (attempts >= retries) {
                        console.error(`❌ ${String(propertyKey)} failed after ${retries} attempts.`);
                        throw error;
                    }
                    await new Promise((res) => setTimeout(res, delay));
                }
            }
        };
        return descriptor;
    };
}
// Example usage
class ApiService {
    counter = 0;
    async fetchData() {
        this.counter++;
        if (this.counter < 3) {
            throw new Error("Network error 🌐");
        }
        return "✅ Data fetched successfully!";
    }
}
__decorate([
    Retry(3, 1000) // retry up to 3 times, wait 1s each time
    ,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ApiService.prototype, "fetchData", null);
(async () => {
    const api = new ApiService();
    try {
        const result = await api.fetchData();
        console.log(result);
    }
    catch (e) {
        console.error("Final error:", e);
    }
})();
//# sourceMappingURL=method.js.map