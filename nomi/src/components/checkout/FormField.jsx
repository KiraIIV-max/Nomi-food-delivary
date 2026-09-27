export default function FormField({
  id,
  label,
  type = 'text',
  value,
  onChange,
  onBlur,
  error,
  placeholder,
  required = false,
  as = 'input',
  rows = 3,
  autoComplete,
  inputMode,
}) {
  const Tag = as === 'textarea' ? 'textarea' : 'input'

  const base = [
    'w-full bg-surface border rounded-[12px] text-sm md:text-base text-ink',
    'placeholder:text-faint focus:outline-none transition-colors',
    'px-4',
    as === 'textarea' ? 'py-3 min-h-[88px] resize-none' : 'h-12 md:h-[52px]',
    error
      ? 'border-error focus:border-error'
      : 'border-line focus:border-accent',
  ].join(' ')

  return (
    <div>
      <label
        htmlFor={id}
        className="block text-xs font-semibold text-ink mb-2"
      >
        {label}
        {required && <span className="text-error ml-0.5">*</span>}
      </label>

      <Tag
        id={id}
        name={id}
        type={as === 'input' ? type : undefined}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        rows={as === 'textarea' ? rows : undefined}
        autoComplete={autoComplete}
        inputMode={inputMode}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={base}
      />

      {error && (
        <p
          id={`${id}-error`}
          role="alert"
          className="text-xs text-error mt-1.5 font-medium"
        >
          {error}
        </p>
      )}
    </div>
  )
}