import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/gql0.js',
    format: 'cjs',
  },
  plugins: [babel({ exclude: 'node_modules/**' }), uglify()],
}
