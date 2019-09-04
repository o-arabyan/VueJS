<template>
    <div class="content-wrapper">
        <div class="container-fluid">
            <div class="test general">
                <test-top></test-top>
                <test-body></test-body>
            </div>
        </div>
    </div>
</template>

<script>
    import TestTop from '@/components/TestTop'
    import TestBody from '@/components/TestBody'
    export default {
        name: "Test",
        components: {
            TestTop,
            TestBody
        }
    }
</script>


<style lang="scss">
    @import "~@/assets/styles/components/test";
</style>