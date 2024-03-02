import { cn } from '@/lib/utils'
import { Chapter, Course, Unit } from '@prisma/client'
import Link from 'next/link'
import React from 'react'
import { Separator } from './ui/separator'

type Props = {
    course:Course & {
        units:(Unit &{
            chapters:Chapter[]
        })[];
    };

    currentChapterid: string

}

const CourseSideBar = async ({course,currentChapterid}: Props) => {
  return (
    <div className='w-[400px] absolute top-1/2 -translate-y-1/2 p-6 rounded-r-3xl dark:bg-slate-800 bg-blue-400 mt-28'>
        <h1 className='text-3xl font-bold'>{course.name}</h1>
        <Separator className='mt-2 text-gray-500 bg-gray-500' />

        {course.units.map((unit,unitIndex)=>{
            return (
                <div key={unit.id} className='mt-4'>
                    <h2 className='text-sm font-semibold uppercase text-secondary-foreground/70'>Unit {unitIndex+1}</h2>
                    <h2 className='text-xl font-semibold'>
                        {unit.name}
                    </h2>
                    {unit.chapters.map((chapter,chapterIndex)=>{
                        return (
                            <div key={chapter.id}>
                                <Link href={`/course/${course.id}/${unitIndex}/${chapterIndex}`}
                                className={
                                    cn('text-secondary-foreground/70',{
                                        'text-white dark:text-green-600 font-semibold':chapter.id === currentChapterid
                                    })
                                }
                                >
                                    {chapter.name}
                                </Link>
                            </div>
                        )
                    })}
                    <Separator className='mt-2 text-gray-500 bg-gray-500' />
                </div>

            )
        })}

    </div>
  )
}

export default CourseSideBar