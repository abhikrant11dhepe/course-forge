import CourseSideBar from '@/components/CourseSideBar'
import MainVideoSummary from '@/components/MainVideoSummary'
import QuizCard from '@/components/QuizCard'
import { prisma } from '@/lib/db'
import { redirect } from 'next/navigation'
import React from 'react'

type Props = {
    params: {
        slug: string[]
    }
}

const CoursePage = async ({ params: { slug } }: Props) => {

    const [courseId, unitIndexParam, chapterIndexParam] = slug
    const course = await prisma.course.findUnique({
        where: { id: courseId },
        include: {
            units: {
                include: { chapters: {
                    include :{questions:true}
                } }
            }
        }
    })
    if (!course) {
        return redirect('/explore')
    }
    let unitIndex = parseInt(unitIndexParam)
    let chapterIndex = parseInt(chapterIndexParam)

    const unit = course.units[unitIndex]
    if (!unit) {
        return redirect('/explore')
    }

    const chapter = unit.chapters[chapterIndex]
    if (!chapter) {
        return redirect('/explore')
    }

    return (

        <div>
            <CourseSideBar course={course} currentChapterid={chapter.id} />
            <div>
                <div className='ml-[400px] px-8'>
                    <div className='flex'>
                        <MainVideoSummary chapter={chapter} chapterIndex={chapterIndex} unit={unit} unitIndex={unitIndex} />
                        <QuizCard chapter={chapter} />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CoursePage