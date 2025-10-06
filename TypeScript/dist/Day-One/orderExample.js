"use strict";
// --- Complex TypeScript Example 2 ---
Object.defineProperty(exports, "__esModule", { value: true });
// 1. Enum
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Pending"] = "PENDING";
    OrderStatus["Shipped"] = "SHIPPED";
    OrderStatus["Delivered"] = "DELIVERED";
    OrderStatus["Cancelled"] = "CANCELLED";
})(OrderStatus || (OrderStatus = {}));
class InMemoryRepository {
    items = [];
    add(item) {
        this.items.push(item);
    }
    getById(id) {
        return this.items.find((x) => x.id === id);
    }
    getAll() {
        return [...this.items];
    }
}
async function fetchOrder(id) {
    // simulate async delay
    await new Promise((r) => setTimeout(r, 500));
    if (id === 1) {
        return {
            ok: true,
            data: {
                id: 1,
                items: [{ id: "p1", name: "Laptop", price: 1200 }],
                status: OrderStatus.Pending,
                payment: { type: "Cash", received: false },
                createdAt: new Date(),
            },
        };
    }
    return { ok: false, error: "Order not found" };
}
// --- Demo ---
async function demo() {
    const repo = new InMemoryRepository();
    repo.add({ id: "p1", name: "Laptop", price: 1200 });
    repo.add({ id: "p2", name: "Phone", price: 800 });
    console.log("All products:", repo.getAll());
    const orderResponse = await fetchOrder(1);
    if (orderResponse.ok) {
        console.log("Fetched order:", orderResponse.data);
    }
    else {
        console.error("Error:", orderResponse.error);
    }
    const nullableProduct = {
        id: null,
        name: "Something",
        price: null,
    };
    console.log("Nullable product:", nullableProduct);
}
demo();
// `keyof Person` here creates a union type of "name" and "age", other strings will not be allowed
function printPersonProperty(person, property) {
    console.log(`Printing person property ${property}: "${person[property]}"`);
}
let person = {
    name: "Max",
    age: 27
};
printPersonProperty(person, "name"); // Printing person property name: "Max"
//# sourceMappingURL=orderExample.js.map