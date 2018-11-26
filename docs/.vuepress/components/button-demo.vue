<template>
    <div>
        <vi-button>默认按钮</vi-button>
        <vi-button icon="settings">默认按钮</vi-button>
        <vi-button :loading="true">默认按钮</vi-button>
        <vi-button isRipple>默认按钮</vi-button>
        <pre><code>{{content}}</code></pre>
    </div>
</template>

<script>
    import Button from '../../../src/button'

    export default {
        components: {
            'vi-button': Button
        },
        data() {
            return {
                content:
                    `<vi-button>默认按钮</vi-button>
<vi-button icon="settings">默认按钮</vi-button>
<vi-button :loading="true">默认按钮</vi-button>
<vi-button isRipple>默认按钮</vi-button>`
            }
        }
    }
</script>
