import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	onwarn: (warning, handler) => {
		if (warning.code === "a11y-click-events-have-key-events") return;
		if (warning.code === "a11y-no-static-element-interactions") return;
		handler(warning);
  	},
	kit: {
		paths: {
			base: process.argv.includes('dev') ? '/dev' : process.env.BASE_PATH
		},
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'docs',
			assets: 'docs',
			fallback: undefined,
			precompress: false,
			strict: true
		})
	}
};

export default config;
