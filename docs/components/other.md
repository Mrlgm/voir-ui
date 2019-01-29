---
title: Other
---
# 其他

## popover

### 基本用法

#### 点击触发

<ClientOnly>
<popover-demo-1></popover-demo-1>
</ClientOnly>

```html
<vi-popover>
    <vi-button>上方弹出</vi-button>
    <template slot="content">
        弹出内容
    </template>
</vi-popover>
<vi-popover position="bottom">
    <vi-button>下方弹出</vi-button>
    <template slot="content">
        弹出内容
    </template>
</vi-popover>
<vi-popover position="left">
    <vi-button>左边弹出</vi-button>
    <template slot="content">
        弹出内容
    </template>
</vi-popover>
<vi-popover position="right">
    <vi-button>右边弹出</vi-button>
    <template slot="content">
        弹出内容
    </template>
</vi-popover>
```

#### hover触发

<ClientOnly>
<popover-demo-2></popover-demo-2>
</ClientOnly>


```html
<vi-popover trigger="hover">
    <vi-button>上方弹出</vi-button>
    <template slot="content">
        弹出内容
    </template>
</vi-popover>
<vi-popover position="bottom" trigger="hover">
    <vi-button>下方弹出</vi-button>
    <template slot="content">
        弹出内容
    </template>
</vi-popover>
<vi-popover position="left" trigger="hover">
    <vi-button>左边弹出</vi-button>
    <template slot="content">
        弹出内容
    </template>
</vi-popover>
<vi-popover position="right" trigger="hover">
    <vi-button>右边弹出</vi-button>
    <template slot="content">
        弹出内容
    </template>
</vi-popover>
```

### Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ------- | ------ | ------ | :------: | :------: |
| position | 浮层弹出位置 | String | top/right/bottom/left | top |
| trigger | 触发弹出浮层方式 | String | click/hover | click |


<ClientOnly>
<box-sizing></box-sizing>
</ClientOnly>