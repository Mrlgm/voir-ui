<template>
    <div class="demo">
        <vi-cascader popover-height="200px" :source="source" :selected="selected" @update:selected="selected = $event"></vi-cascader>
        2222
        <vi-button>hhhh</vi-button>
    </div>
</template>

<script>
    import Cascader from './form/cascader/cascader'
    import Button from './basic/button/button'

    export default {
        name: "demo",
        components: {
            'vi-cascader': Cascader,
            'vi-button': Button
        },
        data() {
            return {
                selected: [],
                source: [
                    {
                        name: '广东省',
                        children: [
                            {
                                name: '广州市',
                                children: [
                                    {name: '番禺区'},
                                    {name: '越秀区'},
                                    {name: '白云区'}
                                ]
                            },
                            {
                                name: '佛山市',
                                children: [
                                    {name: '禅城区'},
                                    {name: '顺德区'},
                                    {name: '三水区'}
                                ]
                            },
                            {
                                name: '汕头市',
                                children: [
                                    {name: '龙湖区'},
                                    {name: '金平区'},
                                    {name: '濠江区'}
                                ]
                            }
                        ]
                    },
                    {
                        name: '浙江省',
                        children: [
                            {
                                name: '杭州市',
                                children: [
                                    {name: '上城区'},
                                    {name: '下城区'},
                                    {name: '江干区'}
                                ]
                            },
                            {
                                name: '嘉兴市',
                                children: [
                                    {name: '南湖区'},
                                    {name: '秀洲区'},
                                    {name: '嘉善区'}
                                ]
                            },
                            {
                                name: '福州市',
                                children: [
                                    {name: '吴兴区'},
                                    {name: '南浔区'},
                                    {name: '长兴区'}
                                ]
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --font-size: 14px;
    }

    body {
        font-size: var(--font-size);
    }

    .demo {
        margin-top: 100px;
        margin-left: 100px;
        width: 700px;
    }
</style>