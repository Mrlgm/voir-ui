---
title: 快速上手
---
# 快速上手


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
    import Vue from 'vue'
    import VoirUI from 'voir-ui'
    
    Vue.use(VoirUI)
    ```