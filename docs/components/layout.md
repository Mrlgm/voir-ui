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

## container

## collapse