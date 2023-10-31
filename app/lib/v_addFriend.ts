import { z } from 'zod';
export const v_addFriend = z.object({
	email: z.string().email(),
})

const random = {
	idk: 'asd@asars.com',
}
