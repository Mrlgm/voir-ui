---
title: Basic
---
# 基础
基础组件

## icon

### 基础用法


<ClientOnly>
<icon-demo></icon-demo>
</ClientOnly>

```html
<vi-icon name="settings"></vi-icon>
<vi-icon name="loading"></vi-icon>
<vi-icon name="info"></vi-icon>
<vi-icon name="error"></vi-icon>
<vi-icon name="like"></vi-icon>
```

### Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ------- | ------ | ------ | :------: | :------: |
| name | 图标类名 | String | -- | -- |

## button

### 基础用法

<ClientOnly>
<button-demo></button-demo>
</ClientOnly>

```html
<vi-button>默认按钮</vi-button>
<vi-button icon="settings">默认按钮</vi-button>
<vi-button icon="settings" iconPosition="right">设置</vi-button>
<vi-button :loading="true">默认按钮</vi-button>
<vi-button isRipple>波纹</vi-button>
```

### Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ------- | ------ | ------ | :------: | :------: |
| icon | icon图标类名 | String | -- | -- |
| loading | 加载状态 | Boolean | -- | false |
| iconPosition | icon图标位置 | String | left/right | left |
| isRipple | 波纹效果 | Boolean | -- | false |

## button-group

### 基础用法
<ClientOnly>
<button-group-demo></button-group-demo>
</ClientOnly>

```html
<vi-button-group>
    <vi-button icon="left">上一页</vi-button>
    <vi-button>1</vi-button>
    <vi-button>2</vi-button>
    <vi-button>3</vi-button>
    <vi-button icon="right" icon-position="right">下一页</vi-button>
</vi-button-group>
<vi-button-group allRipple>
    <vi-button icon="left">上一页</vi-button>
    <vi-button>1</vi-button>
    <vi-button>2</vi-button>
    <vi-button>3</vi-button>
    <vi-button icon="right" icon-position="right">下一页</vi-button>
</vi-button-group>
```

### Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ------- | ------ | ------ | :------: | :------: |
| allRipple | 是否所有按钮都有波纹效果 | Boolean | -- | -- |


<ClientOnly>
<box-sizing></box-sizing>
</ClientOnly>