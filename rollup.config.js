import { babel } from '@rollup/plugin-babel';
import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import del from 'rollup-plugin-delete';
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external'
import {terser} from 'rollup-plugin-terser';
import pkg from './package.json'
const path = require('path');


const isDev = process.env.NODE_ENV !== 'production';


export default {
  input: './src/index.ts', //入口文件，加载css单独打包成一个文件
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: isDev
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: isDev
    }
  ],

  plugins: [
    resolve(), 
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
      extensions: ['.json','.ts', '.tsx', '.js', '.jsx'],
      presets: ['@babel/preset-env', '@babel/preset-react'],
    }),
    external(),
    postcss(), 
    typescript({
      // compilerOptions: { module: 'CommonJS' },
      exclude: 'node_modules/**',
      include: 'src/**',
      resolveJsonModule: true
    }),
    commonjs({
      extensions: ['.js', '.ts', '.tsx']
    }),
    del({ targets: 'dist/*', verbose: true }),

    // 压缩js
    !isDev && terser(),
    alias({
      entries:{
        src: path.resolve(__dirname, 'src'),
        component: path.resolve(__dirname, 'src/components')
      },
    }),
  ],

  external:['react', '@ubnt/icons', '@ubnt/ui-components', 'lodash-es'] 
};
