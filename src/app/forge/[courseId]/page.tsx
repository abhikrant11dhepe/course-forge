import ConfirmChapters from '@/components/ConfirmChapters';
import { getAuthSession } from '@/lib/auth';
import { prisma } from '@/lib/db';
import { InfoIcon } from 'lucide-react';
import { redirect } from 'next/navigation';
import React from 'react'

type Props = {
  params:{
    courseId:string;
  }
}

const CreateChapters = async ({params:{courseId}}: Props) => {

  const session = await getAuthSession()
  if(!session?.user){
    return redirect("/explore")
  }

  const course = await prisma.course.findUnique({
    where:{
      id:courseId
    },
    include:{
      units:{
        include:{
          chapters:true
        }
      }
    }
  });

  if(!course){
    return redirect("/forge")
  }
  return (
    <div className='flex flex-col items-start max-w-xl mx-auto my-20'>
      <h5 className='text-lg font-semibold uppercase text-secondary-foreground/70 my-1'>Course Name</h5>
      <h1 className='text-5xl font-bold'>
        {course.name}
      </h1>

      <div className='bg-sky-200  flex p-4 mt-5 border-none bg-secondary rounded-2xl dark:bg-secondary'>
        <InfoIcon className='w-12 h-12 mr-3 text-gray-500' />
        <div>
        Review the generated chapters for each unit. Once you have reviewed them, click the button to confirm and proceed.
        </div>
      </div>

      <ConfirmChapters course={course}/>

    </div>
  )
}

export default CreateChapters