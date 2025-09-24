// generics with function
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function identity(value) {
    return value;
}
// console.log(identity("robin"));
var num = identity(42);
var str = identity("robin");
var bool = identity(true);
//
function firstElement(arr) {
    return arr.length > 0 ? arr[0] : undefined;
}
var numbers = [1, 2, 34, 4];
var first = firstElement(numbers);
console.log(first);
//
function mergeObj(obj, obj2) {
    return __assign(__assign({}, obj), obj2);
}
var user1 = mergeObj({ name: "Robin" }, { age: 22 });
console.log(user1);
var userResponse = {
    data: { name: "Robin", age: 22 },
    status: 200,
};
var productResponse = {
    data: { id: 1001, price: 500 },
    status: 200,
};
var scoreBoard = {
    Robin: 50,
    Alice: 80,
};
var userRole = {
    Robin: "Admin",
    Shawn: "User",
};
var usersPage = {
    items: [
        { id: 1, name: "Robin" },
        { id: 2, name: "henry" },
    ],
    total: 20,
    page: 10,
    pageSize: 40,
};
var productPage = {
    items: [
        { id: 3, price: 300 },
        { id: 4, price: 800 },
    ],
    total: 300,
    page: 40,
    pageSize: 30,
};
function createdRepository() {
    var items = [];
    return {
        add: function (item) {
            items.push(item);
        },
        getAll: function () {
            return items;
        },
    };
}
var userRepo = createdRepository();
userRepo.add({ id: 1, name: "Robin" });
userRepo.add({ id: 2, name: "shawon" });
console.log(userRepo.getAll());
//
function getLength(item) {
    return item.length;
}
getLength("hello");
