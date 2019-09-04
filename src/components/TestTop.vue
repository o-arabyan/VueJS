<template>
    <div class="test__top">
        <div class="test__top-item">
            <router-link to="/dashboard">Exit</router-link>
        </div>
        <div class="test__top-item">
            Mode: <span class="mode">Test</span>
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
            Score: <strong>50%</strong>
        </div>
        <div class="test__top-item">
            Unit 1
        </div>
        <div class="test__top-item test__top-item--flashcard" v-if="flashcard">
            <span>Flashcard</span>
            <label class="switcher__label" for="switcher2">
                <input class="switcher__input" type="checkbox" id="switcher2" />
                <span class="switcher__round"></span>
            </label>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TestTop",
        data() {
            return {
                flashcard: true
            }
        }
    }
</script>

<style>

</style>