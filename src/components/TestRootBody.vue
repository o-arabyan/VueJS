<template>
    <div class="test__body">
        <div class="row my-2">
            <div class="col-12 col-xl-6">
                <div class="main-heading">High</div>
                <div class="root__questions">
                    <div class="form-input--radio mb-1">
                        <input id="level1A" type="radio" name="subCategory">
                        <label for="level1A">Level 1A</label>
                    </div>
                    <div class="form-input--radio mb-1">
                        <input id="level2" type="radio" name="subCategory">
                        <label for="level2">Level 2</label>
                    </div>
                    <div class="form-input--radio mb-1">
                        <input id="level3" type="radio" name="subCategory">
                        <label for="level3">Level 3</label>
                    </div>
                    <div class="form-input--radio mb-1">
                        <input id="level4" type="radio" name="subCategory">
                        <label for="level4">Level 4</label>
                    </div>
                </div>
            </div>
            <div class="col-12 col-xl-6">
                <div class="flex">
                    <div class="test__body-star">
                        <template v-if="starred">
                            <img src="../assets/images/svg/icon-star-active.svg" alt="" >
                        </template>
                        <template v-else>
                            <img src="../assets/images/svg/icon-star-inactive.svg" alt="" >
                        </template>
                        <span>Starred</span>
                    </div>
                    <div class="form-group mb-0">
                        <router-link to="/next" class="btn btn--green">Next Question</router-link>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="mt-2" v-if="error">
                            <label class="form-label" for="testNotes">Notes:</label>
                            <textarea class="form-input" placeholder="You can write your notes for this question:" name="testNotes" id="testNotes" rows="5"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Test Details -->
        <div class="row mt-2">
            <div class="col-12">
                <p>
                    <strong>Language of origin</strong>: Latin
                </p>
                <div class="text-right">
                    <a class="text-red" href="mailto:info@aa.com">Report a problem</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Input from '@/components/TextInput'
    export default {
        name: "TestRootBody",
        components: {
            Input
        },
        data() {
            return {
                error: true,
                starred: false
            }
        }
    }
</script>

<style lang="scss">

</style>