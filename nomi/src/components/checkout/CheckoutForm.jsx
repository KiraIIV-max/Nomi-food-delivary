import FormField from './FormField'

export default function CheckoutForm({ form, errors, onChange, onBlur }) {
  return (
    <div className="space-y-5 md:space-y-6">

      <div className="grid md:grid-cols-2 gap-5 md:gap-6">
        <FormField
          id="fullName"
          label="Full name"
          required
          value={form.fullName}
          onChange={onChange}
          onBlur={onBlur}
          error={errors.fullName}
          placeholder="Ahmed Mohamed"
          autoComplete="name"
        />

        <FormField
          id="phone"
          label="Phone number"
          required
          type="tel"
          inputMode="tel"
          value={form.phone}
          onChange={onChange}
          onBlur={onBlur}
          error={errors.phone}
          placeholder="+20 100 000 0000"
          autoComplete="tel"
        />
      </div>

      <FormField
        id="email"
        label="Email"
        required
        type="email"
        inputMode="email"
        value={form.email}
        onChange={onChange}
        onBlur={onBlur}
        error={errors.email}
        placeholder="you@example.com"
        autoComplete="email"
      />

      <FormField
        id="address"
        label="Delivery address"
        required
        value={form.address}
        onChange={onChange}
        onBlur={onBlur}
        error={errors.address}
        placeholder="Street, building, apartment"
        autoComplete="street-address"
      />

      <FormField
        id="city"
        label="City"
        required
        value={form.city}
        onChange={onChange}
        onBlur={onBlur}
        error={errors.city}
        placeholder="Cairo"
        autoComplete="address-level2"
      />

      <FormField
        id="notes"
        label="Additional notes"
        as="textarea"
        rows={3}
        value={form.notes}
        onChange={onChange}
        onBlur={onBlur}
        placeholder="Doorbell code, delivery instructions…"
      />
    </div>
  )
}