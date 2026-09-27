export const validators = {
  required: (v) => (v && String(v).trim() ? '' : 'This field is required'),

  email: (v) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v || '') ? '' : 'Enter a valid email address',

  phone: (v) =>
    /^[+\d][\d\s\-()]{6,}$/.test(v || '') ? '' : 'Enter a valid phone number',

  minLength: (n) => (v) =>
    String(v || '').trim().length >= n ? '' : `Must be at least ${n} characters`,
}

export function validateCheckout(form) {
  const errors = {}

  const check = (field, ...rules) => {
    for (const rule of rules) {
      const msg = rule(form[field])
      if (msg) return (errors[field] = msg)
    }
  }

  check('fullName', validators.required, validators.minLength(3))
  check('phone',    validators.required, validators.phone)
  check('email',    validators.required, validators.email)
  check('address',  validators.required, validators.minLength(8))
  check('city',     validators.required)

  return errors
}