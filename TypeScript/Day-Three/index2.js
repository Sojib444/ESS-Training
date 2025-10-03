var userForm = {
    name: { label: 'Name', type: 'string', value: '', validation: { required: true, minLength: 3 } },
    age: { label: 'Age', type: 'number', value: 0, validation: { min: 18, max: 100 } },
    email: { label: 'Email', type: 'email', value: '', validation: { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ } },
};
function validateForm(form) {
    var errors = {};
    for (var key in form) {
        var field = form[key];
        var val = field.value;
        var rules = field.validation;
        if (!rules)
            continue;
        if (rules.required && (val === null || val === undefined || val === '')) {
            errors[key] = "".concat(field.label, " is required");
            continue;
        }
        if (typeof val === 'string') {
            if (rules.minLength && val.length < rules.minLength)
                errors[key] = "".concat(field.label, " must be at least ").concat(rules.minLength, " characters");
            if (rules.maxLength && val.length > rules.maxLength)
                errors[key] = "".concat(field.label, " must be at most ").concat(rules.maxLength, " characters");
            if (rules.pattern && !rules.pattern.test(val))
                errors[key] = "".concat(field.label, " is invalid");
        }
        if (typeof val === 'number') {
            if (rules.min !== undefined && val < rules.min)
                errors[key] = "".concat(field.label, " must be at least ").concat(rules.min);
            if (rules.max !== undefined && val > rules.max)
                errors[key] = "".concat(field.label, " must be at most ").concat(rules.max);
        }
        if (rules.custom) {
            var result_1 = rules.custom(val);
            if (result_1 !== true)
                errors[key] = result_1;
        }
    }
    return { valid: Object.keys(errors).length === 0, errors: errors };
}
userForm.name.value = 'Jo';
userForm.age.value = 16;
userForm.email.value = 'invalid-email';
var result = validateForm(userForm);
if (!result.valid) {
    console.log('Validation Errors:', result.errors);
}
