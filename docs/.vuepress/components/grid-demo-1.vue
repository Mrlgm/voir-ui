<template>
    <div class="demo">
        <vi-row class="vi-row">
            <vi-col class="vi-col" span="24"><div class="grid-content bg-purple-dark"></div></vi-col>
        </vi-row>
        <vi-row class="vi-row">
            <vi-col class="vi-col" span="12"><div class="grid-content bg-purple"></div></vi-col>
            <vi-col class="vi-col"  span="12"><div class="grid-content bg-purple-light"></div></vi-col>
        </vi-row>
        <vi-row class="vi-row">
            <vi-col class="vi-col" span="8"><div class="grid-content bg-purple"></div></vi-col>
            <vi-col class="vi-col"  span="8"><div class="grid-content bg-purple-light"></div></vi-col>
            <vi-col class="vi-col"  span="8"><div class="grid-content bg-purple-light"></div></vi-col>
        </vi-row>
    </div>
</template>

<script>
    import Col from '../../../src/layout/grid/col'
    import Row from '../../../src/layout/grid/row'

    export default {
        components: {
            'vi-col': Col,
            'vi-row': Row
        }
    }
</script>

<style lang="scss" scoped>
    .demo {
        margin-top: 10px;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 4px;
        .vi-row {
            margin-bottom: 20px;
            &:last-child {
                margin-bottom: 0;
            }
            .vi-col {
                border-radius: 4px;
                .bg-purple-dark {
                    background: #99a9bf;
                }
                .bg-purple {
                    background: #d3dce6;
                }
                .bg-purple-light {
                    background: #e5e9f2;
                }
                .grid-content {
                    border-radius: 4px;
                    min-height: 36px;
                }
                .row-bg {
                    padding: 10px 0;
                    background-color: #f9fafc;
                }
            }
        }
    }

</style>