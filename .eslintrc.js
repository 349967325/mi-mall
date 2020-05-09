module.exports = {
  // 环境，这里可以设置环来做区别判断
 "env": {
     "browser": true,
     "commonjs": true,
     "es6": true
  },

 // 使用的扩展库
 "extends": ["standard","standard-react"],

 // 解析器用于解析代码
 "parser": "babel-eslint",

 // 解析器配置
"parserOptions": {
  "ecmaFeatures": {
    "jsx": true
  },

  "ecmaVersion": 2018,
  "sourceType": "module"
 },

 // 可以全局使用变量
 "globals": {
    "Babel": true,
    "React": true,
    "PATH_ENV": true
  },

 // 第三方插件
 "plugins": [],

// 规则配置
 "rules": {
    "key-spacing": "off",
    "jsx-quotes": [
      2, "prefer-single"
    ],
    "object-curly-spacing": [
      2, "always"
    ],
    "comma-dangle": "off",
    "no-tabs": "off",
    "indent": [
      2, 2
    ],
    "space-before-function-paren": 0,
    "no-spaced-func": 2,
    "react/jsx-indent": [
      2, 2
    ],
    "react/jsx-indent-props": [
      2, 2
    ]
  }
}
