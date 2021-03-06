module.exports = {
  presets: [
    ['@babel/preset-env', {modules: 'commonjs'}],
    '@babel/preset-react',
  ],
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
    [
      'babel-plugin-emotion',
      {
        labelFormat: '[filename]--[local]',
      },
    ],
    'react-loadable/babel',
  ].filter(Boolean),
}
