<template>
    <div class="test__body">
        <div class="row align-center my-2">
            <div class="col-12 col-xl-8">
                    <Input
                            :error="false"
                           label="Please enter the spelling word"
                           icon="icon-write.svg"
                           placeholder="Example: Basketball"
                           id="testInput"
                           alt="Icon"
                    >
                        Incorrect. Correct spelling: Ascot
                    </Input>
            </div>
            <div class="col-12 col-xl-4">
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
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-xl-8">
                <div class="row">
                    <div class="col-12 col-xl-6">
                        <!-- Switcher -->
                        <div class="text-left">
                            <div class="switcher">
                                <span>Hide diacriticals</span>
                                <div class="switcher__container">
                                    <label class="switcher__label" for="switcher">
                                        <input class="switcher__input" type="checkbox" id="switcher" />
                                        <span class="switcher__round"></span>
                                    </label>
                                </div>
                            </div>
                            <div class="word">
                                <span class="word__symbol">H</span>
                                <span class="word__text">as-ket</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-xl-6">
                        <div class="text-right">
                            <div class="switcher">
                                <span>Autoplay</span>
                                <div class="switcher__container">
                                    <label class="switcher__label" for="switcher2">
                                        <input class="switcher__input" type="checkbox" id="switcher2" />
                                        <span class="switcher__round"></span>
                                    </label>
                                </div>
                            </div>
                            <div class="audio">
                                <audio controls>
                                    <source src="https://www.w3schools.com/html/horse.ogg" type="audio/ogg">
                                    <source src="https://www.w3schools.com/html/horse.mp3" type="audio/mpeg">
                                    Your browser does not support the audio element.
                                </audio>
                            </div>
                        </div>
                    </div>

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
                    <strong>DEFINITION</strong>: a broad necktie whose usually square ends are tied in a knot, crossed diagonally, and then pinned.
                </p>
                <p>
                    <strong>PART OF SPEECH</strong>: noun <br />
                    <strong>SENTENCE</strong>: The <> tied together his look. <br />
                    <strong>EXTENDED LANGUAGE OF ORIGIN</strong>: from Ascot Heath, fashionable racetrack near Ascot, village in Berkshire, England; from the neckwear worn by men of fashion there

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
        name: "TestBody",
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