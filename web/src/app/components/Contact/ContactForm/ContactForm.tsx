import { useForm, SubmitHandler } from 'react-hook-form'
import { Input, Textarea } from '@nextui-org/input'
import { Button } from '@nextui-org/button'
import { toast } from 'react-hot-toast'

import EmailInput from '../../../types/EmailInput'

type ContactFormData = EmailInput & {
  honey: string
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    defaultValues: {
      name: '',
      email: '',
      message: '',
      honey: '',
    },
  })

  const onSubmit: SubmitHandler<ContactFormData> = async (data: ContactFormData) => {
    const toastId = toast.loading('Enviando mensaje...')
    if (data.honey) {
      return
    }

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
        toast.success('Mensaje enviado correctamente', { id: toastId })
        reset()
      }
    } catch (error) {
      console.log(error)
      toast.error('Error al enviar el mensaje', { id: toastId })
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="my-5 flex max-w-xl animate-fade-up flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Input
            isClearable
            id="name"
            type="text"
            placeholder="Nombre"
            {...register('name', {
              required: true,
              maxLength: {
                value: 30,
                message: 'El nombre es demasiado largo',
              },
              minLength: {
                value: 5,
                message: 'El nombre es demasiado corto',
              },
            })}
            color={errors.name ? 'danger' : 'default'}
            errorMessage={errors.name ? errors.name.message : null}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Input
            isClearable
            id="email"
            type="email"
            placeholder="Email"
            {...register('email', {
              required: true,
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: 'Email inválido',
              },
            })}
            color={errors.email ? 'danger' : 'default'}
            errorMessage={errors.email ? errors.email.message : null}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Textarea
            id="message"
            placeholder="Introduce tu mensaje (hasta 500 caracteres)"
            {...register('message', {
              required: true,
              maxLength: {
                value: 500,
                message: 'El mensaje es demasiado largo',
              },
              minLength: {
                value: 10,
                message: 'El mensaje es demasiado corto',
              },
            })}
            color={errors.message ? 'danger' : 'default'}
            errorMessage={errors.message ? errors.message.message : null}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="sr-only">Don’t fill this out if you're human: </label>
          <input id="honey" type="text" autoComplete="off" className=" -z-10 hidden" {...register('honey')} />
        </div>
        <Button color="primary" type="submit">
          Enviar
        </Button>
      </form>
    </>
  )
}

export default ContactForm
