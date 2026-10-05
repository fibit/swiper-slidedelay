/**
 * Swiper-SlideDelay build script (https://github.com/fibit/swiper-slidedelay)
 * Author Pavel Romanov
 * Released under the MIT License
 */
import { build } from 'esbuild';
import { readFileSync } from 'node:fs';

const pkg = JSON.parse(readFileSync('package.json', 'utf8'));
const banner = `/**
 * Swiper-SlideDelay v${pkg.version} for Swiper (https://github.com/fibit/swiper-slidedelay)
 * Author ${pkg.author}
 * Released under the ${pkg.license} License
 */`;

const buildScripts = () => build({
  entryPoints: ['swiper-slidedelay.js'],
  outfile: 'swiper-slidedelay.min.js',
  bundle: false,
  minify: true,
  legalComments: 'none',
  banner: { js: banner }
});

const buildModule = () => build({
  stdin: {
    contents: `import plugin from './swiper-slidedelay.js';\nexport default plugin;\nexport { plugin as SlideDelayPlugin };\n`,
    resolveDir: process.cwd(),
    loader: 'js'
  },
  bundle: true,
  format: 'esm',
  outfile: 'swiper-slidedelay.mjs'
});

await Promise.all([
  buildScripts(),
  buildModule()
]);
