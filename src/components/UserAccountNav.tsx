'use client'

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import React from 'react'
import { Button } from './ui/button'
import { User } from 'next-auth'
import { signOut } from 'next-auth/react'
import { LogInIcon } from 'lucide-react'

type Props = {
    user: User
}

const UserAccountNav = ({ user }: Props) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Button className='bg-cyan-500 text-black text-base font-semibold hover:bg-cyan-600 rounded-xl'>Account</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='py-3' align='end'>

                <div className='flex items-center justify-start gap-2 p-2 rounded-t-xl bg-zinc-200'>
                    <div className='flex flex-col space-y-1 leading-none'>
                        {user?.name && (<p className='font-semibold'>{user.name}</p>)}
                        {user?.email && (<p className='w-[250px] font-medium truncate text-sm text-secondary-foreground'>{user.email}</p>)}
                    </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem className='bg-zinc-200 cursor-pointer flex items-center rounded-b-xl p-2 text-base font-bold text-red-600 hover:bg-zinc-300' onSelect={() => { signOut(); }}>
                    Sign Out <LogInIcon className='w-4 h-4 ml-2' />
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UserAccountNav