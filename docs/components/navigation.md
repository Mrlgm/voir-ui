---
title: Navigation
---
# 导航

## tabs

### 基本用法

<ClientOnly>
<tabs-demo></tabs-demo>
</ClientOnly>

```html
 <vi-tabs selected="beauty">
    <vi-tabs-nav>
        <vi-tabs-item name="beauty">
            美女
        </vi-tabs-item>
        <vi-tabs-item name="finance">
            财经
        </vi-tabs-item>
        <vi-tabs-item name="sports">
            体育
        </vi-tabs-item>
        <vi-tabs-item name="disable" disabled>
            禁用
        </vi-tabs-item>
    </vi-tabs-nav>
    <vi-tabs-content>
        <vi-tabs-pane name="beauty">
            这是美女的内容
        </vi-tabs-pane>
        <vi-tabs-pane name="finance">
            这是财经的内容
        </vi-tabs-pane>
        <vi-tabs-pane name="sports">
            这是体育的内容
        </vi-tabs-pane>
        <vi-tabs-pane name="disable">
             这是禁用的内容
        </vi-tabs-pane>
     </vi-tabs-content>
</vi-tabs>
```

### Attributes

#### vi-tabs Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ------- | ------ | ------ | :------: | :------: |
| selected | 默认被选择的项 | String | -- | -- |

#### vi-tabs-item Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ------- | ------ | ------ | :------: | :------: |
| name | 选择项名字 | String | -- | -- |
| disabled | 是否被禁用 | Boolean | -- | false |

#### vi-tabs-pane Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ------- | ------ | ------ | :------: | :------: |
| name | 和item对应的名字 | String | -- | -- |

<ClientOnly>
<box-sizing></box-sizing>
</ClientOnly>