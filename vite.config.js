import injectHTML from 'vite-plugin-html-inject';
import imagemin from 'imagemin'
import imageminWebp from 'imagemin-webp'

export default {
	plugins: [
		injectHTML(),
		{
			...imagemin(['./public/img/**/*.{jpg,png,jpeg}'], {
				destination: './public/img',
				plugins: [
					imageminWebp({ quality: 80 })
				]
			}),
		}
	],
};