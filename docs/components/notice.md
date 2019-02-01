---
title: Notice
---
# 提示

提示组件

## toast

### 基本用法

#### 直接使用

<ClientOnly>
<toast-demo-1></toast-demo-1>
</ClientOnly>

```html
<vi-button @click="$toast('点击弹出提示',{autoClose:false})">上方弹出</vi-button>
<vi-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</vi-button>
<vi-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</vi-button>
```

#### 修改关闭按钮内容

<ClientOnly>
<toast-demo-2></toast-demo-2>
</ClientOnly>

```html js
<vi-button @click="onClickButton">上方弹出</vi-button>
<script>
    methods: {
        onClickButton() {
            this.$toast('你知道1+1等于几吗？', {
                closeButton: {
                    text: '知道',
                    callback: () => {
                        console.log('他说知道了')
                    }
                }
            })
        }
    }
</script>
```

#### 支持HTML

<ClientOnly>
<toast-demo-3></toast-demo-3>
</ClientOnly>

```html
<vi-button @click="onClickButton">上方弹出</vi-button>
<script>
    methods: {
        onClickButton() {
            this.$toast('<strong style="color:pink;">加粗的提示</strong>', {
                enableHtml: true
            })
        }
    }
</script>
```

### Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ------- | ------ | ------ | :------: | :------: |
| autoClose | 是否自动关闭或关闭时间 | Boolean/Number | -- | 5 |
| closeButton | 关闭按钮的内容或触发内容 | Object | -- | '关闭' |
| enableHtml | 是否开启HTML | Boolean | -- | false |
| position | 弹出位置 | String | top/bottom/middle | top |


<ClientOnly>
<box-sizing></box-sizing>
</ClientOnly>

