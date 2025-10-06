// Supported form field types
type FieldType = 'string' | 'number' | 'email';

// Validation rules for a field
type ValidationRule<T> = {
  required?: boolean;
  minLength?: T extends string ? number : never;
  maxLength?: T extends string ? number : never;
  min?: T extends number ? number : never;
  max?: T extends number ? number : never;
  pattern?: T extends string ? RegExp : never;
  custom?: (value: T) => boolean | string; // return true if valid, string for error message
};

// Field definition
type Field<T> = {
  label: string;
  type: FieldType;
  value: T;
  validation?: ValidationRule<T>;
};

type Form<T extends Record<string, any>> = {
  [K in keyof T]: Field<T[K]>;
};


type UserFormModel = {
  name: string;
  age: number;
  email: string;
};

const userForm: Form<UserFormModel> = {
  name: { label: 'Name', type: 'string', value: '', validation: { required: true, minLength: 3 } },
  age: { label: 'Age', type: 'number', value: 0, validation: { min: 18, max: 100 } },
  email: { label: 'Email', type: 'email', value: '', validation: { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ } },
};


type ValidationResult = { valid: boolean; errors: Record<string, string> };

function validateForm<T extends Record<string, any>>(form: Form<T>): ValidationResult {
  const errors: Record<string, string> = {};

  for (const key in form) {
    const field = form[key];
    const val = field.value;
    const rules = field.validation;

    if (!rules) continue;

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
      if (result !== true) errors[key] = result as string;
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

export{};
