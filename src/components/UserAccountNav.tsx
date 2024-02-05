'use client'

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import React from 'react'
import { Button } from './ui/button'
import { User } from 'next-auth'
import { signOut } from 'next-auth/react'
import { LogInIcon } from 'lucide-react'
import UserAvatar from './UserAvatar'

type Props = {
    user: User
}

const UserAccountNav = ({ user }: Props) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <UserAvatar user={user} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className='py-3' align='end'>

                <div className='flex items-center justify-start gap-2 p-2 rounded-t-xl bg-zinc-200  dark:bg-slate-800'>
                    <div className='flex flex-col space-y-1 leading-none'>
                        {user?.name && (<p className='font-semibold text-base'>{user.name}</p>)}
                        {user?.email && (<p className='w-[250px] font-lightbold truncate text-sm text-secondary-foreground'>{user.email}</p>)}
                    </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem className='bg-zinc-200  dark:bg-slate-800 cursor-pointer flex items-center rounded-b-xl p-2 text-sm font-lightbold text-red-600 hover:bg-zinc-400 dark:hover:bg-slate-400' onSelect={() => { signOut(); }}>
                    Sign Out <LogInIcon className='w-4 h-4 ml-2' />
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UserAccountNav