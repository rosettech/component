module.exports = {
  // 脚本执行的环境,不同的执行环境有不同的预定义全局变量
  'env': {
    'browser': true,
    'es6': true,
    'node': true
  },
  'plugins': [
    'react'
  ],
  // 需要同构babel-eslint来解析es7.decorators,es7.classProperties
  'parser': 'babel-eslint',
  // 使用推荐的规范配置:http://eslint.org/docs/rules/
  //"extends": "eslint:recommended",
  // "extends": [
  //     "eslint:recommended",
  //     "plugin:react/recommended"
  // ],
  // https://github.com/airbnb/javascript
  'extends': 'eslint-config-airbnb',
  // 解析规则,决定ESLint认为哪些是错误
  'parserOptions': {
    // ECMAScript中的模块类型
    'sourceType': 'module',
    // 指定要使用的ECMAScript的版本
    'ecmaVersion': 7,
    // 额外的语言特性配置
    'ecmaFeatures': {
      // 在全局作用域允许return语句
      'globalReturn': true,
      // 开启全局的严格模式
      'impliedStrict': true,
      // 支持未来的选项
      'experimentalObjectRestSpread': true,
      // 使用JSX
      'jsx': true
    }
  },
  // 全局变量
  'globals': {
    '__uri': true,    // fis路径转换
    '__inline': true, // fis内嵌转换
    'UE': true,       // UEditor
    'wx': true        // 微信SDK
  },
  // lint规则配置 "off" or 0 "warn" or 1 2 or 2
  // https://github.com/airbnb/javascript
  'rules': {
    
    // 排版规则
    'indent': [ // 缩进:4个空格
      'warn',
      2,
      {
        'SwitchCase': 1
      }
    ],
    'quotes': [ // 引号 单引号
      1,
      'single'
    ],
    'no-extra-semi': 1,  // 禁止多余的分号
    'semi': [  // 分号 加分号 http://eslint.org/docs/rules/semi
      1,
      'always'
    ],
    
    // 语法规则
    'strict': 2,
    'no-console': 1, //不允许有console调试
    'no-case-declarations': 0, // 允许在 case 子句中使用词法声明
    'no-undef': 2, // 变量不通过 var 进行声明或引用未定义变量。
    'no-unused-vars': 1, //变量声明但未使用。
    'no-eval': 1, // 不使用 eval()。
    'valid-typeof': 2, //typeof的结果必须和一个有效的字符串进行比较，如typeof foo === 'strnig'即是不合法的字符串
    'no-unreachable': 1, //不允许在return、throw、continue、break等中断语句之后出现代码。
    'no-dupe-args': 1, //定义对象时不允许有重复的键。
    'no-dupe-keys': 1, //方法的参数中不允许有重复值。
    
    // react规则
    'react/prop-types': 0,
    'react/display-name': 0,
    'react/require-render-return': 2,
    'react/jsx-no-target-blank': 0,
    'react/no-danger-with-children': 0,
    'react/no-string-refs': 0,
    'react/no-unknown-property': 2,
    'react/no-danger': 0,
    'no-class-assign': 0,
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2
  }
};
