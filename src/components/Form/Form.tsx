import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { FormInput } from '../FormInput/FormInput'
import axios from 'axios'
import { useState } from 'react'

import './Form.css'

const FormSchema = z.object({
  name: z.string().min(1, 'El nombre es obligatorio'),
  email: z
    .string()
    .min(1, 'El email es obligatorio')
    .email('Debe ser un correo electrónico válido'),
  comment: z
    .string()
    .max(500, 'El comentario no puede exceder los 500 caracteres')
    .min(1, 'El comentario es obligatorio'),
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
      setMessage('Tu comentario ha sido enviado con éxito')
      reset()
    } catch (error) {
      console.error('Error al enviar el formulario', error)
    }
  }

  return (
    <>
      <div className="detail__title-carousel">Comentarios</div>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <FormInput
          id="name"
          placeholder="Tu nombre"
          register={register}
          error={errors.name?.message}
        />
        <FormInput
          id="email"
          placeholder="Tu email"
          type="email"
          register={register}
          error={errors.email?.message}
        />
        <FormInput
          id="comment"
          placeholder="Comentario (max. 500 caracteres)"
          type="textarea"
          register={register}
          error={errors.comment?.message}
        />

        <button className="form__button" type="submit">
          Enviar
        </button>
        {message && <p className="form__success">{message}</p>}
      </form>
    </>
  )
}
