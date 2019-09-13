# 手写EventHub

手写eventHub/手写一个发布订阅模式

## 解题思路：
- 确定API
- 添加测试用例
- 让测试用例通过
- 重构代码

## 确定API

API列表：
- EventHub#on
- EventHub#off
- EventHub#emit

## EventHub是干嘛的？

用于多个模块进行通信的

eventHub可以看作一个全局的管理中心，一边在监听事件（on 订阅），另一边在触发事件（emit 发布）。实现信息的传递。