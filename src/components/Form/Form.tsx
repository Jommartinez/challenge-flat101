import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { FormInput } from '../FormInput/FormInput'

const FormSchema = z.object({
  name: z.string().min(1, 'El nombre es obligatorio'),
  email: z
    .string()
    .min(1, 'El email es obligatorio')
    .email('Debe ser un correo electrónico válido'),
  comment: z
    .string()
    .max(500, 'El comentario no puede exceder los 500 caracteres')
    .min(1, 'El cmentario es obligatorio'),
})

type FormData = z.infer<typeof FormSchema>

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(FormSchema),
  })

  const onSubmit = (data: FormData) => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(response => response.json())
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        id="name"
        label="Nombre"
        register={register}
        error={errors.name?.message}
      />
      <FormInput
        id="email"
        label="Email"
        type="email"
        register={register}
        error={errors.email?.message}
      />
      <FormInput
        id="comment"
        label="Comentario"
        type="textarea"
        register={register}
        error={errors.comment?.message}
      />
      <button type="submit">Enviar</button>
    </form>
  )
}
