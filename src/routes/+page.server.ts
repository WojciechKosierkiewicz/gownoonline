import prisma from "$lib/db";

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ cookies, request }) => {
        const content = (await request.formData()).get("content");
		await prisma.message.create({
            data:{
                content,
            }
        })
	}
};