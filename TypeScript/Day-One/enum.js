var UserRole;
(function (UserRole) {
    UserRole["ADMIN"] = "ADMIN";
    UserRole["USER"] = "USER";
    UserRole["GUEST"] = "GUEST";
})(UserRole || (UserRole = {}));
var users = [
    { name: "Alice", role: UserRole.ADMIN },
    { name: "Bob", role: UserRole.USER },
    { name: "Charlie", role: UserRole.GUEST },
];
function canEdit(user) {
    return user.role === UserRole.ADMIN;
}
users.forEach(function (u) {
    console.log("".concat(u.name, " can edit: ").concat(canEdit(u)));
});
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["Ok"] = 200] = "Ok";
    StatusCode[StatusCode["NOT_FOUND"] = 404] = "NOT_FOUND";
    StatusCode[StatusCode["ERROR"] = 500] = "ERROR";
})(StatusCode || (StatusCode = {}));
function handleResponse(code) {
    switch (code) {
        case StatusCode.Ok:
            console.log("Request succeeded!");
            break;
        case StatusCode.NOT_FOUND:
            console.log("Resource not found!");
            break;
        case StatusCode.ERROR:
            console.log("Server error occurred!");
            break;
    }
}
handleResponse(StatusCode.Ok); // Request succeeded!
handleResponse(StatusCode.NOT_FOUND); // Resource not found!
handleResponse(StatusCode.ERROR);
var TransactionType;
(function (TransactionType) {
    TransactionType["DEPOSIT"] = "DEPOSIT";
    TransactionType["WITHDRAWAL"] = "WITHDRAWAL";
    TransactionType["TRANSFER"] = "TRANSFER";
})(TransactionType || (TransactionType = {}));
// us
