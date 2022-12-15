import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import resolve from 'rollup-plugin-node-resolve'
import url from 'rollup-plugin-url'
import svgr from '@svgr/rollup'
import json from 'rollup-plugin-json'
import path from 'path'
import alias from '@rollup/plugin-alias'
import image from '@rollup/plugin-image'

import pkg from './package.json'

const common = {
  plugins: [
    json({
      include: ['src/assets/*', 'src/i18n/*'],
      exclude: 'node_modules/**'
    }),
    alias({
      entries: {
        SRC: path.resolve(__dirname, 'src'),
        ASSETS: path.resolve(__dirname, 'src/assets'),
        COMPONENTS: path.resolve(__dirname, 'src/components'),
        SERVICES: path.resolve(__dirname, 'src/services'),
        MODEL: path.resolve(__dirname, 'src/model')
      }
    }),
    image(),
    external(),
    postcss({
      modules: true
    }),
    url(),
    svgr({
      svgoConfig: {
        plugins: [
          {
            removeViewBox: false
          }
        ]
      }
    }),
    babel({
      exclude: ['node_modules/**', '*.json'],
      plugins: ['external-helpers']
    }),
    resolve(),
    commonjs()
  ],
  external: ['@ubnt/ui-components', 'styled-components']
}

export default [{
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: false
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: false
    }
  ],
  ...common
}, {
  input: 'src/utils',
  output: [{
    file: 'dist/utils.js',
    format: 'cjs',
    sourcemap: false
  }, {
    file: 'dist/utils.es.js',
    format: 'es',
    sourcemap: false
  }],
  ...common
}]
