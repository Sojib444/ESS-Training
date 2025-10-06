"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userForm = {
    name: { label: 'Name', type: 'string', value: '', validation: { required: true, minLength: 3 } },
    age: { label: 'Age', type: 'number', value: 0, validation: { min: 18, max: 100 } },
    email: { label: 'Email', type: 'email', value: '', validation: { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ } },
};
function validateForm(form) {
    const errors = {};
    for (const key in form) {
        const field = form[key];
        const val = field.value;
        const rules = field.validation;
        if (!rules)
            continue;
        if (rules.required && (val === null || val === undefined || val === '')) {
            errors[key] = `${field.label} is required`;
            continue;
        }
        if (typeof val === 'string') {
            if (rules.minLength && val.length < rules.minLength)
                errors[key] = `${field.label} must be at least ${rules.minLength} characters`;
            if (rules.maxLength && val.length > rules.maxLength)
                errors[key] = `${field.label} must be at most ${rules.maxLength} characters`;
            if (rules.pattern && !rules.pattern.test(val))
                errors[key] = `${field.label} is invalid`;
        }
        if (typeof val === 'number') {
            if (rules.min !== undefined && val < rules.min)
                errors[key] = `${field.label} must be at least ${rules.min}`;
            if (rules.max !== undefined && val > rules.max)
                errors[key] = `${field.label} must be at most ${rules.max}`;
        }
        if (rules.custom) {
            const result = rules.custom(val);
            if (result !== true)
                errors[key] = result;
        }
    }
    return { valid: Object.keys(errors).length === 0, errors };
}
userForm.name.value = 'Jo';
userForm.age.value = 16;
userForm.email.value = 'invalid-email';
const result = validateForm(userForm);
if (!result.valid) {
    console.log('Validation Errors:', result.errors);
}
//# sourceMappingURL=index2.js.map