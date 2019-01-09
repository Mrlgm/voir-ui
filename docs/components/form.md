---
title: Form
---
# 表单

## switch

### 基本用法

<ClientOnly>
<switch-demo></switch-demo>
</ClientOnly>

```html
<vi-switch v-model="switchValue1"></vi-switch>
<vi-switch
    active-color="#13ce66"
    inactive-color="#ff4949"
    v-model="switchValue2">
</vi-switch>
<vi-switch  v-model="switchValue3" disabled></vi-switch>
```

### 属性

## input

### 基本用法

<ClientOnly>
<input-demo></input-demo>
</ClientOnly>

```html
<vi-input placeholder="默认状态"></vi-input>
<vi-input value="初始内容"></vi-input>
<vi-input icon="like" placeholder="添加icon"></vi-input>
<vi-input v-model="message"></vi-input>
<vi-input placeholder="禁用状态" disabled></vi-input>
<vi-input placeholder="只读状态" readonly></vi-input>
<vi-input placeholder="错误状态" error></vi-input>
```

### Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ------- | ------ | ------ | :------: | :------: |
| placeholder | 原生属性 | String | -- | -- |
| value | 输入框初始内容 | String | -- | -- |
| icon | 图标名 | String | -- | -- |
| disabled | disabled状态 | Boolean | -- | false |
| readonly | readonly状态 | Boolean | -- | false |
| error | error状态 | Boolean | -- | false |






<ClientOnly>
<box-sizing></box-sizing>
</ClientOnly>