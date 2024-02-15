"use client"
import { createChapterSchema } from '@/validators/course'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Form } from '@/components/ui/form'
import { FormControl, FormField, FormItem, FormLabel } from './ui/form'
import {AnimatePresence, motion} from 'framer-motion'
import { Input } from './ui/input'
import { Separator } from './ui/separator'
import { Button } from './ui/button'
import { Plus, Trash } from 'lucide-react'



type Props = {}

type Input = z.infer<typeof createChapterSchema>

const CreateCourseForm = (props: Props) => {
  const form = useForm<Input>({
    resolver: zodResolver(createChapterSchema),
    defaultValues: {
      title: '',
      units: ['', '', '']
    }
  });

  function onSubmit(data: Input) {
    console.log(data);
  }

  form.watch();

  return (
    <div className='w-full'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='w-full mt-4 justify-start'>
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => {
              return (
                <FormItem className="flex flex-col items-start w-full sm:items-center sm:flex-row rounded-4xl p-2">
                  <FormLabel className="flex-[1] text-2xl rounded-4xl text-semibold text-center p-2">Title:</FormLabel>
                  <FormControl className="flex-[6]">
                    <Input className='text-lg dark:bg-zinc-800 bg-stone-200 '
                      placeholder="Enter the Main Topic of the course"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              );
            }}
          />
          <AnimatePresence>
          {form.watch('units').map((_, index) => {
            return (
              <motion.div key={index}
              initial={{opacity:0,height:0}}
              animate={{opacity:1,height:"auto"}}
              exit={{opacity:0,height:0}}
              transition={{opacity:{duration:0.4}, height:{duration:0.4}}}
              >
              <FormField
                key={index}
                control={form.control} name={`units.${index}`}
                render={({field})=> {
                  return(
                    <FormItem className='flex flex-col items-start w-full sm:items-center sm:flex-row rounded-4xl p-2'>
                      <FormLabel className='flex-[1] text-2xl rounded-4xl text-semibold text-center p-2'>
                        Unit: {index+1}
                      </FormLabel>
                      <FormControl className='flex-[6]'>
                          <Input
                          className='text-lg bg-stone-200 dark:bg-zinc-800'
                          placeholder='Enter the SubTopic of the Course'
                          {...field}
                          />
                      </FormControl>
                    </FormItem>
                  );
                }}
              />
              </motion.div>
            )
          })}
          </AnimatePresence>

          <div className='flex items-center justify-center mt-4'>
            <Separator className='mr-2 flex-[1] dark:bg-gray-700 '/>
            <div className='mx-4'>
            <Button type='button' 
            variant='secondary' 
            className='my-2 mr-1 font-semibold text-lg rounded-3xl dark:bg-gray-800 hover:dark:bg-gray-700' 
            onClick={()=>{
              form.setValue('units',[...form.watch('units'), ""])
            }}>
              Add Unit
              <Plus className='w-4 h-4 ml-2 text-green-500 text-2xl font-bold'/>
            </Button>
            <Button type='button' variant='secondary' className='font-semibold text-lg rounded-3xl dark:bg-gray-800 hover:dark:bg-gray-700 my-2 ml-1'
            onClick={()=>{
              form.setValue('units', [...form.watch('units').slice(0,-1)]) //remove last unit
            }}>
              Remove Unit
              <Trash className='w-4 h-4 ml-2 text-rose-500 text-2xl font-bold'/>
            </Button>
            </div>
            <Separator className='ml-2 flex-[1] dark:bg-gray-700 '/>
          </div>
        </form>
      </Form>
    </div>
  )
}

export default CreateCourseForm