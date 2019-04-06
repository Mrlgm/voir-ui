---
title: Navigation
---
# 导航

导航组件

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

## menu

### 基本用法

#### 水平状态

<ClientOnly>
<menu-demo-1></menu-demo-1>
</ClientOnly>

```html
<vi-menu :selected.sync="selected" :multiple="false">
    <vi-menu-item name="home">首页</vi-menu-item>
    <vi-submenu name="about">
        <template slot="title">关于</template>
        <vi-menu-item name="culture">企业文化</vi-menu-item>
        <vi-menu-item name="developers">开发团队</vi-menu-item>
        <vi-menu-item name="contacts">联系电话</vi-menu-item>
        <vi-submenu name="contact">
            <template slot="title">联系方式</template>
            <vi-menu-item name="wechat">微信</vi-menu-item>
            <vi-menu-item name="qq">QQ</vi-menu-item>
            <vi-menu-item name="phone">电话</vi-menu-item>
        </vi-submenu>
    </vi-submenu>
    <vi-menu-item name="hire">招聘</vi-menu-item>
</vi-menu>
```

#### 垂直状态

<ClientOnly>
<menu-demo-2></menu-demo-2>
</ClientOnly>

```html
<vi-menu :selected.sync="selected" :multiple="false" style="width: 200px" vertical>
<vi-menu-item name="home">首页</vi-menu-item>
<vi-submenu name="about">
    <template slot="title">关于</template>
    <vi-menu-item name="culture">企业文化</vi-menu-item>
    <vi-menu-item name="developers">开发团队</vi-menu-item>
    <vi-menu-item name="contacts">联系电话</vi-menu-item>
    <vi-submenu name="contact">
        <template slot="title">联系方式</template>
        <vi-menu-item name="wechat">微信</vi-menu-item>
        <vi-menu-item name="qq">QQ</vi-menu-item>
        <vi-menu-item name="phone">电话</vi-menu-item>
    </vi-submenu>
</vi-submenu>
<vi-menu-item name="hire">招聘</vi-menu-it</vi-menu>
```

### Attributes

#### vi-menu Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ------- | ------ | ------ | :------: | :------: |
| selected | 默认被选则的一项 | String | -- | -- |
| vertical | 是否显示垂直状态 | Boolean | true/false | false |

#### vi-submenu/vi-menu-item Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ------- | ------ | ------ | :------: | :------: |
| name | 某一项的标记名称 | String | -- | -- |

<ClientOnly>
<box-sizing></box-sizing>
</ClientOnly>