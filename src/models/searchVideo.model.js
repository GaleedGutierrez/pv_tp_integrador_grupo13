// import { YoutubeValidator } from '@utils/YoutubeValidator';
// import { z } from 'zod';
// export const searchVideoSchema = z.object({
// 	youtubeUrl: z
// 		.string()
// 		.transform((value) => value.trim())
// 		.refine(
// 			(url) => {
// 				if (url === '') {
// 					return true;
// 				}
// 				return YoutubeValidator.validateUrl(url);
// 			},
// 			{
// 				message: 'Verifica la URL',
// 			},
// 		),
// });
// export type SearchVideoData = z.infer<typeof searchVideoSchema>;
