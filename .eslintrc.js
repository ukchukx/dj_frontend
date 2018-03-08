const { resolve } = require('path');

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: 'airbnb-base',
  plugins: [
    'html',
    'import'
  ],
  // add your custom rules here
  rules: {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': 'warn',
    "comma-dangle": ['error', 'never'],
    "max-len": ['error', 120, 2, {ignoreComments: true}],
    "no-unused-vars": ['warn', {"vars": "local", "args": "none"}],
    "no-cond-assign": ['error', "except-parens"],
    "no-param-reassign": 'off',
    "no-trailing-spaces": "off",
    "import/prefer-default-export": "off",
    "linebreak-style": 'off',
    "no-continue": 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  },
  globals: {},
  settings: {
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            extensions: ['.js', '.vue'],
            alias: {
              '~': __dirname
            }
          },
          module: {
            rules: [
              {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
              },
              {
                test: /\.vue$/,
                exclude: /node_modules/,
                loader: 'vue-loader',
              },
            ],
          }
        }
      }
    }
  }
}
