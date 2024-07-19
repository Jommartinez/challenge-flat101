interface FormInputProps {
  id: string
  label: string
  type?: string
  register: any
  error?: string
}

export const FormInput = ({
  id,
  label,
  type = 'text',
  register,
  error,
}: FormInputProps) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      {type === 'textarea' ? (
        <textarea id={id} {...register(id)} />
      ) : (
        <input id={id} type={type} {...register(id)} />
      )}
      {error && <p>{error}</p>}
    </div>
  )
}
