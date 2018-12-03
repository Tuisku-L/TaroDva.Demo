# 设计和前端开发规范

## 设计稿规范

### 尺寸单位
设计稿尺寸单位为`px`
### 尺寸标准
设计稿横向尺寸标准一般为`750px`

---

## 项目组织规范

### 开发环境
- 项目中使用`React`、`Taro.js`、`Dva.js`作为基础框架，使用`TypeScript`进行业务书写，使用`Less`进行样式书写

### 文件命名
- 项目中普通文件遵循`Pascal命名法`，例如*Index.tsx*、*Index.less*、*CartList.tsx*
- 项目中其他特殊文件根据框架或组件要求命名

### 文件后缀
- 普通业务文件使用`ts`作为文件后缀
- 组件文件使用`tsx`作为文件后缀
- 样式文件使用`less`作为文件后缀
- 特殊文件根据框架或组件要求选择后缀

---

## JavaScript 规范

### 使用4个空格进行缩进
>  不要在项目中混用空格和Tab进行缩进
```typescript
handleClickButton = (): void => {
    console.info('Hello World!');   // √
  console.info('Hello World!');     // ×
}
```

### 不要使用多个空格
```typescript
const foo = 25565;          // √
const foo =     25565;      // ×
```

### 在语句结尾使用分号
```typescript
const foo = 'a';    // √
const foo = 'a'     // ×
```

### 字符串使用单引号
```typescript
console.info('Hello World!');
// 如遇到需要转义的情况，请参考下列写法
console.info('Hello "World"!');
console.info('Hello \'World\'!');
console.info(`Hello 'World'!`);
```

### 避免无意义的留白
```typescript
fooFunc = (): void => {
                                // ×
    console.log('Hi!');

}

fooFunc2 = (): void => {
    console.log('Hi!');         // √
}
```

### 关键字后面加空格
```typescript
if (condition) { ... }   // √
if(condition) { ... }    // ×
```

### 展开运算符与它的表达式间不要留空白
```typescript
func(...args)       // √
func(... args)      // ×
```

### 一元运算符前面跟一个空格
```typescript
typeof !admin       // √
typeof!admin        // ×
```

### 注释首尾留空格
```typescript
// blablabla        // √
//blablabla         // ×

/* blablabla */     // √
/*blablabla*/       // ×
```

### 逗号后面加空格
```typescript
const arr = [1, 2, 3];      // √
const arr2 = [1,2 ,3];      // ×
```

### 逗号始终置于行末
```typescript
const obj = {
    Name: 'Tuisku',      // √
    Age: 18
};

const obj2 = {
    Name: 'Tuisku'       // ×
    ,Age: 18
};
```

### 点号操作符与属性/方法始终位于同一行
```typescript
console.log('Hi!');         // √

console
    .log('Hi!');            // √

console.
    log('Hi!');             // ×
```

### 使用 const 和 let 定义变量
> 在当前作用域不需要修改的变量使用const，反之则使用let
```typescript
const foo = 'Hello';        
foo = 'Hi!';                // ×

let foo2 = 'Example.';      // √

var foo3 = 'Warning.';      // ×
```

### 不要重复声明变量
```typescript
let name = 'Tuisku';
let name = 'Wood';          // ×

let name = 'Tuisku';
name = 'Wood';              // √
```

### 不要使用 undefined 来初始化变量
```typescript
let name = undefined;       // ×
```

### 不要去除小数点前的 0
```typescript
const money = .15;          // ×
const money = 0.15;         // √
```

### 字符串拼接操作符左右留空格
```typescript
const word = 'World';
const example = 'Hello ' + word + '!';      // √
const example2 = 'Hello '+word;             // ×
```

### 使用 isNaN() 检查NaN
```typescript
if (foo === NaN) { }        // ×
if(isNaN(foo)) { }          // √
```

### 不使用 eval()
```typescript
eval('alert("Hello World!")');      // ×
```

### 避免隐式 eval()
```typescript
setTimeout('alert("Hello World!")', 1000);              // ×
setTimeout(function(){ alert('Hello World!'); });       // √
```

### 避免使用多余的括号包裹函数
```typescript
const handleDemo = (function() { });        // ×
const handleDemo2 = function() { };         // √
```

### 类名以大驼峰法命名
```typescript
class DemoClass { }     // √
class demoClass2 { }    // ×
class Demo_Class { }    // ×
class demo_class { }    // ×
```

### 函数与变量统一使用小驼峰命名法
```typescript
function demoFunc() { }      // √
function demo_func() { }     // ×
```

### 子类的构造器中必须调用 super()
```typescript
class Boy extends Person {
    constructor() {
        super();            // √
    }
}
```

### 同一模块有多个导入时一次性写完
```typescript
import { Icon, Input } from 'antd';     // √

import { Icon } from 'antd';            // ×
import { Input } from 'antd';
```

### 始终且必须使用 === 替代 ==
> 例外：obj == null 是被允许的，这相当于同时检查 null || undefined
```typescript
if(age === 18) { }      // √
if(age == 18) { }       // ×

if(age !== 18) { }      // √
if(age != 18) { }       // ×
```

### if 必须多行书写并且带有完整的花括号
```typescript
if(age === 18) return true;     // ×

if(age === 18)                  // ×
    return true;

if(age === 18) {                // √
    return true;
}
```

---

## JSX以及组件/页面规范

> 受限于微信小程序功能和Taro编译限制，部分React和原生JS功能无法在开发中使用。除非微信小程序开放更多功能和权限，否则暂时没有更好的解决方案。请仔细阅读下列规范并在开发中注意相关细节。

### 组件属性对齐方式
> 多个属性多行书写，每个属性占用一行，标签结束另起一行
```typescript
// ×
<Example demoParam='demo'
    otherParam='demo' />

// √
<Example 
    demoParam='demo'
    otherParam='demo' 
/>

// √ 单属性可写在一行
<Example singleParm='demo' />
```

### 标签闭合
> 无子元素标签使用自闭合写法，自闭合标签斜杠前添加空格
```javascript
// ×
<Example></Example>

// √
<Example />
```

### JSX 标签与括号
> 使用括号包裹所有JSX标签
```javascript
// ×
render() {
    return <Example />
}

// √
render() {
    return (
        <Example />
    );
}

// √
render() {
    return (
        <Example>
            <Foo />
        </Example>
    );
}
```

### 书写顺序
> 组件中包含的静态属性、类属性、生命周期函数等，以下列顺序书写：<br />
1、static 静态方法<br />
2、constructor<br />
3、componentWillMount<br />
4、componentDidMount<br />
5、componentWillReceiveProps<br />
6、shouldComponentUpdate<br />
7、componentWillUpdate<br />
8、componentDidUpdate<br />
9、componentWillUnmount<br />
10、点击回调或者事件回调 比如 `onClickSubmit()` 或者 `onChangeDescription()`<br />
11、render

### 不要在使用 this.setState 时使用 this.state
> 因为this.setState异步的原因，这样做可能会造成数据的混乱。可以通过给this.setState 传入函数来解决

```typescript
// ×
this.setState({
    example: this.state.example + 1
});

// √
this.setState(prevState => ({
    example: prevState.example + 1
}));
```

### map 循环时必须添加 key 属性
> 循环添加/生成组件时添加key 属性保证每个组件的唯一性
```typescript
// 元素中带有唯一标识
list.map(val => (
    <Example key={val.Id} />
));

// 元素中可能未带有唯一标识
list.map((val, index) => (
    <Example key={index} />
));
```

### 值为 true 的属性可以省略书写值
```typescript
<Example foo={true} />
// ↓ 可简写为
<Example foo />
```

### 不能在包含 JSX 元素的 map 循环中使用 if 表达式
> 以下代码在小程序模式中无法使用
```typescript
numbers.map((number) => {
  let element = null;
  const isOdd = number % 2;
  if (isOdd) {
    element = (<Custom />);
  }
  return element;
})
```
#### 解决方案
> 尽量在 map 循环中使用条件表达式或逻辑表达式
```typescript
numbers.map((number) => {
  const isOdd = number % 2;
  return isOdd ? (<Custom />) : null;
})
```

### 不能使用除 Array.map 之外的方法操作JSX数组
> 小程序中只有wx:for循环方式，所以在React书写中只能使用 map 操作以支持代码的转换和编译

> 以下代码在小程序模式中无法使用
```typescript
list.forEach(item => (
    <Example />
));

list.find(sth => {
    return sth === <Example />
});

list.shift(<Example />);
```

### 不能在 JSX 参数中使用匿名函数
> 以下代码在小程序模式中无法使用
```typescript
<Example onClick={() => this.handleClick()} />

<Example onClick={function() { this.handleClick() }} />
```

#### 解决方法
> 使用 bind 方法或直接绑定事件函数
```typescript
<Example onClick={this.handleClick.bind(this)}>

<Example onClick={this.handleClick}>

<Example onClick={this.handleClick()}>
```

### 不能使用无状态组件，所有组件均以 class 方式书写
> 以下代码在小程序模式中无法使用
```typescript
function IndexView() {
    return (<Example />);
}
```

#### 解决方法
> 使用 class 方法书写组件
```typescript
// IndexProps和IndexState的定义和使用请参考TypeScript和JSX整合的相关教程
class IndexView extends Taro.Component<IndexProps, IndexState> {
    public render() : JSX.Element {
        return (
            <Example />
        );
    }
}
```