# 手写Promise

- why：为了解决回调地狱
- how: 
- pro: 减少缩进（把异步样式改成同步样式）；消灭了 if(err)

## Promise完整API

Promise是一个类。

类属性：length 只接受一个函数

方法：all/race/reject/resolve

对象属性：**then**

对象内部属性： **state** = pending/fulfilled/rejected

## API的规则

根据 Promise/A+ 规格文档来写

