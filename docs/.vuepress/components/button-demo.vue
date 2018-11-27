<template>
    <div>
        <vi-button>默认按钮</vi-button>
        <vi-button icon="settings">默认按钮</vi-button>
        <vi-button :loading="true">默认按钮</vi-button>
        <vi-button isRipple>默认按钮</vi-button>
    </div>
</template>

<script>
    import Button from '../../../src/button'

    export default {
        components: {
            'vi-button': Button
        }
    }
</script>
