<template>
    <div class="test__top">
        <div class="test__top-item">
            <router-link to="/dashboard">Exit</router-link>
        </div>
        <div class="test__top-item">
            Mode: <span class="mode">Testing All</span>
        </div>
        <div class="test__top-item">
            <span>Level 1A</span>
        </div>
        <div class="test__top-item test__top-item--progress">
            <div class="progress-bar__text">50/500</div>
            <div class="progress-bar">
                <span class="progress-bar__percentage" style="width: 15%;"></span>
            </div>
        </div>
        <div class="test__top-item">
            Score: <strong> 50%</strong>
        </div>
        <div class="test__top-item">
            Unit 1
        </div>
        <div class="test__top-item">
            <div class="form-container w-100">
                <img class="form-icon" src="../assets/images/svg/icon-state.svg">
                <select class="form-input" v-model="chooseList">
                    <option :value="list" v-for="list in lists">{{ list }}</option>
                </select>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TestRootTop",
        props: ['id', 'lists'],
        data() {
            return {
                chooseList: 'Definition'
            }
        }
    }
</script>

<style>

</style>