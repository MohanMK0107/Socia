import ChatView from '@/src/components/Messages/ChatView'
import MessageSidebar from '@/src/components/Messages/MessageSidebar'
import React from 'react'

const page = () => {
  return (
    <div className='w-full h-full grid grid-cols-[30%_70%]'>
      <MessageSidebar/>
      <ChatView/>

    </div>
  )
}

export default page