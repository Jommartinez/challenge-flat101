import './FormInput.css'

interface FormInputProps {
  id: string
  placeholder: string
  type?: string
  register: any
  error?: string
}

export const FormInput = ({
  id,
  type = 'text',
  register,
  error,
  placeholder,
}: FormInputProps) => {
  return (
    <div>
      {type === 'textarea' ? (
        <textarea
          className="input"
          placeholder={placeholder}
          id={id}
          {...register(id)}
        />
      ) : (
        <input
          className="input"
          placeholder={placeholder}
          id={id}
          type={type}
          {...register(id)}
        />
      )}
      {error && <p className="text-error">{error}</p>}
    </div>
  )
}
