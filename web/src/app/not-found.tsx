'use client'

import Lottie from 'lottie-react'
import notFoundAnimation from './animations/notFoundAnimation.json'
import Balancer from 'react-wrap-balancer'

function NotFoundPage() {
  return (
    <div className="flex h-[90vh] w-full flex-col items-center justify-center p-4">
      <Lottie animationData={notFoundAnimation} />
      <h1 className={'text-content max-w-2xl text-center font-mono text-2xl'}>
        <Balancer>La página que buscas no está aquí :(</Balancer>
      </h1>
    </div>
  )
}

export default NotFoundPage
