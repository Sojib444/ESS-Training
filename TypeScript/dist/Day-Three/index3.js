"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rolePermissions = {
    Admin: {
        document: { create: true, read: true, update: true, delete: true },
        user: { create: true, read: true, update: true, delete: true },
        settings: { read: true, update: true },
    },
    Editor: {
        document: { create: true, read: true, update: true },
        user: { read: true },
        settings: { read: true },
    },
    Viewer: {
        document: { read: true },
        user: {},
        settings: {},
    },
};
function canPerform(role, resource, action) {
    const permissions = rolePermissions[role];
    return !!permissions[resource]?.[action];
}
const role = 'Editor';
console.log(canPerform(role, 'document', 'create')); // true
console.log(canPerform(role, 'document', 'delete')); // false
console.log(canPerform(role, 'user', 'update')); // false
function performAction(role, resource, action) {
    if (canPerform(role, resource, action)) {
        console.log(`${role} can ${action} ${resource}`);
    }
    else {
        console.log(`${role} cannot ${action} ${resource}`);
    }
}
performAction('Admin', 'settings', 'update');
performAction('Viewer', 'document', 'update');
//# sourceMappingURL=index3.js.map