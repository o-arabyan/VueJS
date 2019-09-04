<template>
    <div class="content-wrapper">
        <div class="container-fluid">
            <div class="test general">
                <test-root-top :lists="['Definition', 'Word']"></test-root-top>
                <test-root-body></test-root-body>
            </div>
        </div>
    </div>
</template>

<script>
    import TestRootTop from '@/components/TestRootTop'
    import TestRootBody from '@/components/TestRootBody'
    export default {
        name: "Root",
        components: {
            TestRootTop,
            TestRootBody
        }
    }
</script>


<style lang="scss">
    @import "~@/assets/styles/components/test";
</style>