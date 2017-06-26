var pkg = require('./package');
var eslintrc = require('./.eslintrc');
var stylelintrc = fis.util.readJSON('./.stylelintrc');

// 项目基础配置
fis.component({
  project: {
    // 项目名称
    name: pkg.name,
    // 项目版本号,填了后自动替换源码中@VERSION@标识
    version: pkg.version,
    // eslint配置文件 http://eslint.org/
    eslintrc: eslintrc,
    // stylelint配置文件 https://stylelint.io/
    stylelintrc: stylelintrc
  }
});
