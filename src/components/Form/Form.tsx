import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { FormInput } from '../FormInput/FormInput'
import axios from 'axios'
import { useState } from 'react'

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
  const [message, setMessage] = useState('')
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(FormSchema),
  })

  const onSubmit = async (data: FormData) => {
    try {
      const response = await axios.post(
        'https://jsonplaceholder.typicode.com/posts',
        data,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      console.log(response.data)
      setMessage('Comentario enviado')
      reset()
    } catch (error) {
      console.error('Error al enviar el formulario', error)
    }
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
      {message && <p>{message}</p>}
      <button type="submit">Enviar</button>
    </form>
  )
}
