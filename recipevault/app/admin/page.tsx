import React from 'react'

const users = Array(12).fill({
    title: 'User',
    createdAt: 'Nov 12th',
    image: '/placeholder.svg?height=200&width=300',
  })

const Page = () => {
  return (
    <div className='min-h-screen p-4'>
        <div className="flex flex-col gap-2">
            {users.map((user, idx) => {
                return (
                    <div className="p-2 rounded-md shadow-md">
                        <div className="flex items-end gap-4">
                            <div className="font-bold text-lg">user?.title</div>
                            <div className="font-light text-md text-opacity-50">user?.createdAt</div>

                        </div>

                    </div>

                )
            })}


        </div>
    </div>
  )
}

export default Page