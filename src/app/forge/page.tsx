import CreateCourseForm from '@/components/CreateCourseForm'
import { Button } from '@/components/ui/button'
import { getAuthSession } from '@/lib/auth'
import { redirect } from 'next/navigation'
import React from 'react'

type Props = {}

const Forge = async(props: Props) => {
  const session = await getAuthSession()
  if(!session?.user){
    return redirect('/explore')
  }
  return (
    <div className="flex flex-col md:flex-row sm:flex-row h-screen ">
      {/* Left Div */}
      <div className="md:-mt-24 sm:-mt-8 md:w-1/2 dark:bg-stone-900 bg-blue-500 text-black dark:text-white p-8 flex items-center justify-center text-center pb-8">
        <div>
          <h1 className="text-6xl md:text-8xl mb-4 font-black">THE</h1>
          <h1 className="text-6xl md:text-8xl mb-8 font-black">FORGE!</h1>
          <p className="text-xl font-semibold md:text-2xl">Craft your educational journey with Course Forge - Here, you&apos;re in control. </p>
          <p className="text-xl font-semibold md:text-2xl">Design, shape, and personalize your courses effortlessly.</p>
        </div>
      </div>

      {/* Right Div (User Input Form) */}
      <div className="mt-4 text-center md:w-1/2 dark:bg-stone-900 bg-blue-500 text-black dark:text-white p-8 flex flex-col justify-start items-center md:items-start ">
        <h1 className='dark:bg-stone-900 bg-blue-500 text-black dark:text-white p-8 text-center font-bold text-4xl '>Create Your Course Here!</h1>
        <CreateCourseForm/>
      </div>
    </div>
    
  )
}

export default Forge


