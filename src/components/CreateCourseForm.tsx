"use client"
import { createChapterSchema } from '@/validators/course'
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import {Form} from '@/components/ui/form'
import { FormControl, FormField, FormItem, FormLabel } from './ui/form'
import { Input } from './ui/input'

type Props = {}

type Input = z.infer<typeof createChapterSchema>

const CreateCourseForm = (props: Props) => {
    const form = useForm<Input>({
        resolver: zodResolver(createChapterSchema),
        defaultValues :{
            title: '',
            units: ['','','']  
        }
    });

    function onSubmit(data: Input) {
    console.log(data);
    }

    form.watch();

  return (
    <div className='w-full'>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='w-full mt-4'>
            <FormField
            control={form.control}
            name="title"
            render={({ field }) => {
              return (
                <FormItem className="flex flex-col items-start w-full sm:items-center sm:flex-row">
                  <FormLabel className="flex-[1] text-2xl text-semibold text-center p-2">Title</FormLabel>
                  <FormControl className="flex-[6]">
                    <Input className='text-lg'
                      placeholder="Enter the main topic of the course"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              );
            }}
          />
            </form>
        </Form>
    </div>
  )
}

export default CreateCourseForm