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
      {/* Left Div (Typewriting Effect) */}
      <div className="md:w-1/2 dark:bg-stone-900 bg-blue-500 text-black dark:text-white p-8 flex items-center justify-center text-center">
        <div>
          <h1 className="text-6xl md:text-8xl mb-4 font-black">Create</h1>
          <h1 className="text-6xl md:text-8xl mb-8 font-black">Course</h1>
          <p className="text-xl font-semibold md:text-2xl">Craft your educational journey with Course Forge - Here, you&apos;re in control. </p>
          <p className="text-xl font-semibold md:text-2xl">Design, shape, and personalize your courses effortlessly.</p>
        </div>
      </div>

      {/* Right Div (User Input Form) */}
      <div className="md:w-1/2 dark:bg-stone-900 bg-blue-500 text-black dark:text-white p-8 flex items-center justify-center text-center">
        <CreateCourseForm/>
      </div>
    </div>
    
  )
}

export default Forge