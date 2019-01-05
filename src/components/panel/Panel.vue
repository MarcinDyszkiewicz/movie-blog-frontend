<template>
    <div>
        dupa dupa

    </div>
</template>

<script>
    export default {
        name: "panel",
        data() {
            return {
                inPanel: true
            }
        },
        mounted() {
            this.$emit(this.inPanel)
        }
    }
</script>