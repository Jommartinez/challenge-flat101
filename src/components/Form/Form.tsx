import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

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
    })
      .then(response => response.json())
      .then(json => console.log(json))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Nombre:</label>
        <input id="name" {...register('name')} />
        {errors.name && <p>{errors.name.message}</p>}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" {...register('email')} />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <div>
        <label htmlFor="comment">Comentario:</label>
        <textarea id="comment" {...register('comment')} />
        {errors.comment && <p>{errors.comment.message}</p>}
      </div>
      <button type="submit">Enviar</button>
    </form>
  )
}
