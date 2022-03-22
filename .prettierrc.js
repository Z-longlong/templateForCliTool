module.exports = {
  tabWidth: 2,
  jsxSingleQuote: true,
  // jsxBracketSameLine: false, // 此配置已不可用
  printWidth: 100,
  singleQuote: true,
  semi: false,
  overrides: [
    {
      files: '*.json',
      options: {
        printWidth: 200,
      },
    },
  ],
  arrowParens: 'always',
}
