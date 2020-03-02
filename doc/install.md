# 如何安装

---

### 本地打包安装

1, 将项目 clone 到本地，``` $ npm install ``` 安装依赖；

2, ``` $ npm run babel-cli ```  将项目编译；

3, 将 ``` dist/npm ``` 目录里的文件 copy 到本地 (可自定义npm 文件夹名称)；

4, 通过 index.js 调用组件：

<br/>

``` jsx
import { OstMask } from './npm';
```

<br/>

5, 单个调用：

<br/>

``` jsx
import { OstMask } from './npm/OstMask';
```

### 通过 npm 安装

1, 安装 ``` $ npm install ost-ui --save ```；

2, 调用组件：

<br/>

``` jsx
import { OstMask } from 'ost-ui';
```

<br/>

3, 单个调用：

<br/>

``` jsx
import { OstMask } from 'ost-ui/dist/npm/OstMask';
```

### 样式调用

在入口文件调用的 style.less 中引入：

<br/>

1，本地安装：

<br/>

```less
@import "./npm/__style/index.less";
```

<br/>

2，远程安装：

<br/>

```less
@import "~ost-ui/dist/npm/__style/index.less";
```
<br/>

3，更改全局单位，在引入样式后定义变量 (必须在引入后定义，否则无法起作用 )：

<br/>

```less
@BU: .01rem;
```
