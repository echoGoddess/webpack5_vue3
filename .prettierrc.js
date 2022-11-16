// 定义编写规则
// prettier添加：https://blog.csdn.net/a843334549/article/details/115391605
module.exports = {
    printWidth: 80, //单行长度
    tabWidth: 2, //缩进长度
    useTabs: false, //使用空格代替tab缩进
    semi: true, //句末使用分号
    singleQuote: false, //使用单引号
    arrowParens: 'avoid', //单参数箭头函数参数周围使用圆括号-eg: (x) => xavoid：省略括号
    bracketSpacing: true, //在对象前后添加空格-eg: { foo: bar }
    insertPragma: false, //在已被preitter格式化的文件顶部加上标注
    jsxBracketSameLine: false, //多属性html标签的‘>’折行放置
    rangeStart: 0,
    requirePragma: false, //无需顶部注释即可格式化
    trailingComma: 'none', //多行时尽可能打印尾随逗号
    useTabs: false, //使用空格代替tab缩进
    endOfLine: 'auto'
  };