'use client'
import React from 'react'
import { Button } from './ui/button'
import { signIn } from 'next-auth/react'

type Props = {}

const SignInButton = (props: Props) => {
  return (
    <Button className='font-semibold mr-2 bg-cyan-500 text-slate-950  hover:bg-cyan-600 rounded-xl text-lg' variant='ghost' onClick={()=>{
        signIn('google')
    }}>
        Sign In
    </Button>
  )
}

export default SignInButton