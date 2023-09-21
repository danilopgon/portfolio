'use client'

import { useForm, SubmitHandler } from 'react-hook-form'
import { Input, Textarea } from '@nextui-org/input'
import { Button } from '@nextui-org/button'

import EmailInput from '../../../types/EmailInput'

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EmailInput>()

  const onSubmit: SubmitHandler<EmailInput> = async (data: EmailInput) => {
    try {
      const response = await fetch('/api/sendmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      if (response) {
        console.log(response)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="my-5 flex max-w-xl animate-fade-up flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Input
          id="name"
          type="text"
          placeholder="Nombre"
          color={errors.name ? 'danger' : 'default'}
          errorMessage={errors.name ? 'Introduce un nombre valido' : null}
          {...register('name', { required: true, maxLength: 80 })}
        />
      </div>
      <div className="flex flex-col gap-2">
        <Input
          id="email"
          type="email"
          placeholder="Email"
          color={errors.email ? 'danger' : 'default'}
          errorMessage={errors.email ? 'Introduce un email valido' : null}
          {...register('email', { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })}
        />
      </div>
      <div className="flex flex-col gap-2">
        <Textarea
          id="message"
          placeholder="Introduce tu mensaje (hasta 500 caracteres)"
          color={errors.message ? 'danger' : 'default'}
          errorMessage={errors.message ? 'Inroduce tu mensaje' : null}
          {...register('message', { required: true, maxLength: 500 })}
        />
      </div>
      <Button color="primary" type="submit">
        Enviar
      </Button>
    </form>
  )
}

export default ContactForm
