import { Toaster } from 'react-hot-toast'

const MainToaster = () => {
  return (
    <Toaster
      position="bottom-right"
      gutter={8}
      containerClassName="toast rounded-xl"
      containerStyle={{}}
      toastOptions={{
        className: 'bg-base-300 text-base-content',
        duration: 5000,
        success: {
          duration: 3000,
          className: 'bg-success-100 text-success-900',
        },
        error: {
          duration: 3000,
          className: 'bg-error-100 text-error-900',
        },
      }}
    />
  )
}

export default MainToaster
