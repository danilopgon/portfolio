import { type NextRequest, NextResponse } from 'next/server'
const nodemailer = require('nodemailer')
export async function POST(request: NextRequest) {
  const { email, name, message } = await request.json()

  const transporter = nodemailer.createTransport({
    host: 'uk5.fcomet.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASSWORD,
    },
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
