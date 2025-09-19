import { Loader } from 'lucide-react'


const Loading = () => {
  return (
    <div className='h-[80svh] w-screen flex justify-center items-center'>
      <Loader className='h-12 w-12 animate-spin text-primary' />
    </div>
  )
}

export default Loading