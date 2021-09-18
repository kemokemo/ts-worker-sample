const { argv } = require('process')
const { build, buildSync } = require('esbuild')

build({
  entryPoints: ['src/dom/main-thread.ts'],
  outfile: './dist/app.js',
  bundle: true,
  minify: argv[2] === 'production',
  sourcemap: argv[2] !== 'production',
  platform: 'browser',
  external: ['worker'],
  watch: false
})

build({
  entryPoints: ['src/worker/worker-thread.ts'],
  outfile: './dist/app-worker.js',
  define: { 'process.env.NODE_ENV': process.env.NODE_ENV },
  bundle: true,
  minify: argv[2] === 'production',
  sourcemap: argv[2] !== 'production',
  platform: 'browser',
  external: ['dom'],
  watch: false
})
