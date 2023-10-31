"use client"
import { v_addFriend } from '@/app/lib/v_addFriend';
import { Button } from '@/components/ui/button';
import { FC } from 'react';

export default function Home() {
	const addFriend = asycn(email: strig)=> {
		try {
			const validatedEamil = v_addFriend.parse({ eamil });
		} catch (error) {

		}
	}

	return (
		<main className='pt-8'>
			<form className='max-w-sm'>
				<h1 className="mb-8 text-5xl font-bold">Add a Friend</h1>
				<div className='mt-2 flex gap-4'>
					<input type="text" className='border-9 focust:ring-indigo-600 mb-3 block w-full rounded-md px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset sm:text-sm sm:leading-6' placeholder='nema@example.com ' />
				</div>
				<Button>Add</Button>
			</form>
		</main>
	)
}
