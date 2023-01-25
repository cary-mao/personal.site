# 常用知识，快速查询
## 初始化
```js
import {createApp} from 'vue'
// 生成根组件，应用的开始
const app = createApp({})
```
// 组件挂载
app.mount('#app')
## 全局注册组件
app.component('name', component)
## 模板语法
### 文本插值（会被转义）
```html
<span>Message: {{msg}}</span>
```
### 原始html（不会被转义）
```html
<!-- 这里的rawHtml是html字符串 -->
<p v-html="rawHtml"></p>
```
### 属性绑定（attributes/props)
```html
<!-- 传递id给组件的props/attributes -->
<div v-bind:id="dynamicId"></div>
<!-- 简写 －－>
<div :id="dynamicId"></div>

<!-- 一次性将对象的所有可枚举属性传递给组件/dom -->
<div v-bind="props"></div>

<!-- 传递boolean属性，任意字符串、包括空字符串也属于真值 -->
<button :disabled="isDisabled"></button>
<!-- 传递真值的简写 -->
<button disabled></button>
```
### 表达式
```html
// 文本插值基本运算
{{ number + 1 }}
// 三目运算符
{{ ok ? 'YES' : 'NO' }}

// 调用函数获取返回值
{{ message.split('').reverse().join('') }}

// 在指令中使用，（:id是v-bind指令的简写）
<div :id="`list-${id}`"></div> 
```
> 提示：可以通过是否可以在return后面合法使用判断是否是合法的表达式

表达式作用域
```html
<!-- 组件内作用域，可以直接访问组件暴露(setup返回或methods选项定义)的方法和属性 -->
<span :title="toTitleDate(date)">
  {{ formatDate(date) }}
</span>

<!-- 模板内作用域，内置有限的全局对象 -->
<span>{{Math.floor(3)}}}</span>
```
> 注意：组件内作用域的优先级比模板内作用域高，同名变量会只访问组件内作用域变量

> 提示：
默认的模板内作用域可访问的全局对象：[globalsWhiteList](https://github.com/vuejs/core/blob/main/packages/shared/src/globalsWhitelist.ts#L3)

自定义模板内作用域变量：
```js
// 所有组件的模板都能访问msg
app.config.globalProperties.msg = 'hello'
```
指令语法
```html
<p v-*:attribute.modifier1.modifier2="expression">Now you see me</p>

 <!-- v-on示例 -->
 <p v-on:click.prevent.stop="onClick">Now you see me</p>
```
> 指南：[内置指令](https://cn.vuejs.org/api/built-in-directives.html)

响应式变量声明
```js
import { reactive, ref } from 'vue'
// 声明响应式变量，解包后失去响应式

const state = reactive({ count: 0 })
// 声明含value的响应式对象
const state = ref({count: 0})
组件导出属性和方法
import { reactive } from 'vue'

export default {
  // `setup` 是一个专门用于组合式 API 的特殊钩子函数
  setup() {
    const state = reactive({ count: 0 })
    function increment() {
      state.count++
    }

    // 暴露 state 到模板
    return {
      state,
      increment
    }
  }
}
```