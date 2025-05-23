import { wordRegExp, wordRegExpMsg } from '$lib/utils/regexp';
import { z } from 'zod';

export const formSchema = z.object({
	department: z.string().regex(wordRegExp, wordRegExpMsg)
});

export type FormSchema = typeof formSchema;
