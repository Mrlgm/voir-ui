---
title: Layout
---
# 布局

## grid
通过基础的24格分栏，快速构建网页布局。

### 基本用法

#### 基础布局

<ClientOnly>
<grid-demo-1></grid-demo-1>
</ClientOnly>

```html
<vi-row>
    <vi-col span="24"></vi-col>
</vi-row>
<vi-row>
    <vi-col span="12"></vi-col>
    <vi-col span="12"></vi-col>
</vi-row>
<vi-row>
    <vi-col span="8"></vi-col>
    <vi-col span="8"></vi-col>
    <vi-col span="8"></vi-col>
</vi-row>
```

#### 混合布局

<ClientOnly>
<grid-demo-2></grid-demo-2>
</ClientOnly>

```html
<vi-row gutter="20">
    <vi-col span="16"></vi-col>
    <vi-col span="8"></vi-col>
</vi-row>
<vi-row gutter="20">
    <vi-col span="8"></vi-col>
    <vi-col span="8"></vi-col>
    <vi-col span="4"></vi-col>
    <vi-col span="4"></vi-col>
</vi-row>
<vi-row gutter="20">
    <vi-col span="8"></vi-col>
    <vi-col span="8"></vi-col>
    <vi-col span="8"></vi-col>
</vi-row>
```

#### 响应式布局

<ClientOnly>
<grid-demo-3></grid-demo-3>
</ClientOnly>

```html
<vi-row gutter="20">
    <vi-col :pc="{span:3}" :narrow-pc="{span:6}" :ipad="{span:12}" ></vi-col>
    <vi-col :pc="{span:3}" :narrow-pc="{span:6}" :ipad="{span:12}" ></vi-col>
    <vi-col :pc="{span:3}" :narrow-pc="{span:6}" :ipad="{span:12}" ></vi-col>
    <vi-col :pc="{span:3}" :narrow-pc="{span:6}" :ipad="{span:12}" ></vi-col>
    <vi-col :pc="{span:3}" :narrow-pc="{span:6}" :ipad="{span:12}" ></vi-col>
    <vi-col :pc="{span:3}" :narrow-pc="{span:6}" :ipad="{span:12}" ></vi-col>
    <vi-col :pc="{span:3}" :narrow-pc="{span:6}" :ipad="{span:12}" ></vi-col>
    <vi-col :pc="{span:3}" :narrow-pc="{span:6}" :ipad="{span:12}" ></vi-col>
</vi-row>
```

### Attributes

#### vi-row Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ------- | ------ | ------ | :------: | :------: |
| gutter | 栅格间隔 | Number | -- | 0 |
| align | flex 布局下的水平排列方式 | String | left/right/center | left |

#### vi-col Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ------- | ------ | ------ | :------: | :------: |
| span | 栅格占据的列数 | Number/String | -- | 24 |
| offset | 栅格左侧的间隔格数 | Number/String | -- | 0 |
| widePc | >1201px 响应式栅格数或者栅格属性对象 | Object (例如： {span: 4, offset: 4}) | -- | -- |
| pc | >993px 响应式栅格数或者栅格属性对象 | Object (例如： {span: 4, offset: 4}) | -- | -- |
| narrowPc | >769px 响应式栅格数或者栅格属性对象 | Object (例如： {span: 4, offset: 4}) | -- | -- |
| ipad | >577px 响应式栅格数或者栅格属性对象 | Object (例如： {span: 4, offset: 4}) | -- | -- |

## container

### 基本用法

<ClientOnly>
<container-demo-1></container-demo-1>
</ClientOnly>

```html
 <vi-layout>
    <vi-header>header</vi-header>
    <vi-content>content</vi-content>
    <vi-footer>footer</vi-footer>
</vi-layout>
```

<ClientOnly>
<container-demo-2></container-demo-2>
</ClientOnly>

```html
<vi-layout>
    <vi-sider>sider</vi-sider>
    <vi-layout>
        <vi-header>header</vi-header>
        <vi-content>content</vi-content>
        <vi-footer">footer</vi-footer>
    </vi-layout>
</vi-layout>
```

<ClientOnly>
<container-demo-3></container-demo-3>
</ClientOnly>

```html
<vi-layout>
    <vi-header>header</vi-header>
    <vi-layout>
        <vi-sider>sider</vi-sider>
        <vi-content>content</vi-content>
    </vi-layout>
    <vi-footer>footer</vi-footer>
</vi-layout>
```

### Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :-------: | :------: | :------: | :------: | :------: |
| -- | -- | -- | -- | -- |

## collapse

### 基本用法

<ClientOnly>
<collapse-demo-1></collapse-demo-1>
</ClientOnly>

```html
<vi-collapse :selected="['finance']" single>
    <vi-collapse-item title="财经" name="finance"> 这是财经的内容</vi-collapse-item>
    <vi-collapse-item title="体育" name="sports"> 这是体育的内容</vi-collapse-item>
    <vi-collapse-item title="美女" name="beauty"> 这是美女的内容</vi-collapse-item>
</vi-collapse>
```

<ClientOnly>
<collapse-demo-2></collapse-demo-2>
</ClientOnly>

```html
<vi-collapse :selected="['finance', 'sports', 'beauty']">
    <vi-collapse-item title="财经" name="finance"> 这是财经的内容</vi-collapse-item>
    <vi-collapse-item title="体育" name="sports"> 这是体育的内容</vi-collapse-item>
    <vi-collapse-item title="美女" name="beauty"> 这是美女的内容</vi-collapse-item>
</vi-collapse>
```

### Attributes

#### vi-collapse Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ------- | ------ | ------ | :------: | :------: |
| single | 是否显示单项 | Boolean | -- | false |
| selected | 被选择的项 | Array | -- | -- |
备注：如果selected绑定的是参数，想要实现双向绑定请在后面加上.sync

#### vi-collapse-item Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ------- | ------ | ------ | :------: | :------: |
| title | 单项小标题 | String | -- | -- |
| name | 选择标记 | String | -- | -- |

<ClientOnly>
<box-sizing></box-sizing>
</ClientOnly>