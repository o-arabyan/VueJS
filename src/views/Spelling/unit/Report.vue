<template>
    <div class="content-wrapper">
        <div class="container-fluid">
            <div class="report general text-center">
                <animation></animation>
                <!--<div class="main-heading">Final Report</div>-->
                <h1 class="main-heading">Final Report</h1>

                <div class="report__percentage">
                    <img class="report__confi" src="@/assets/images/svg/icon-confetti.svg" alt="Boy">
                    <span>85%</span>
                </div>

                <div class="report__stats">
                    <span>Total <strong>500</strong> words</span>
                    <span>Missed <strong>95</strong> words</span>
                    <span>Starred <strong>3</strong> words</span>
                </div>

                <div class="btn-groups mt-3">
                    <router-link to="/" class="btn btn--darkblue">Review last missed</router-link>
                    <router-link to="/" class="btn btn--grey">Test last missed</router-link>
                </div>
                <div class="btn-groups mt-3">
                    <router-link to="/" class="btn btn--black">Back to level <strong>1</strong></router-link>
                    <router-link to="/" class="btn btn--green">Test next unit: <strong>2</strong></router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Animation from '@/components/Animation'
    export default {
        components: {
            Animation
        }
    }
</script>
<style lang="scss">
    @import "../../../assets/styles/components/report";
</style>