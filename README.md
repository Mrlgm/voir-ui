# voir-ui，一个Vue UI组件

[![Build Status](https://travis-ci.org/Mrlgm/voir-UI.svg?branch=master)](https://travis-ci.org/Mrlgm/voir-UI)

## 介绍

这是我在学习 vue 过程中做的一个 UI 框架，希望对你有用

## 开始使用

1.  添加 CSS 样式

    使用本框架前，请在CSS中开启 border-box
    ```
    *，*::before,*::after{box-sizing: border-box}
    ```

2. 安装 voir-ui
    ```
    npm i --save voir-ui
    ```
3. 引入
    ```
    import {Button, ButtonGroup, Icon} from 'voir-ui'
    import 'voir-ui/dist/index.css'

    export default {
      name: 'app',
      components: {
        HelloWorld,
        'vi-button': Button,
        'vi-icon': Icon
      }
    }
    ```

## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码

