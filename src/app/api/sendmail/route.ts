import { type NextRequest, NextResponse } from 'next/server'
const nodemailer = require('nodemailer')
export async function POST(request: NextRequest) {
  const { email, name, message } = await request.json()

  let transporter = nodemailer.createTransport({
    host: 'smtp.protonmail.ch',
    port: 587,
    secure: false,
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASSWORD,
    },
  })

  transporter.verify(function (error: any, success: any) {
    if (error) {
      console.log(error)
    } else {
      console.log('Server is ready to take our messages')
    }
  })

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transporter.sendMail(
        {
          from: process.env.NODEMAILER_EMAIL,
          to: 'contacto@danilopgon.com',
          // cc: email, (uncomment this line if you want to send a copy to the sender)
          subject: `Message from ${name} (${email})`,
          text: message,
        },
        function (err: any) {
          if (!err) {
            resolve('Email sent')
          } else {
            reject(err.message)
          }
        },
      )
    })

  try {
    await sendMailPromise()
    return NextResponse.json({ message: 'Email sent' })
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 })
  }
}
