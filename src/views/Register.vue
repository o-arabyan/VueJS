<template>
    <div class="register">
        <div class="container">
            <div class="row">
                <div class="col-12 col-xl-6">
                    <div class="register__top logo__container">
                        <router-link to="/"><img class="logo__img" src="../assets/images/logo.svg" alt="Sophnos logo"></router-link>
                        <p class="logo__description">Make your education awesome</p>
                    </div>
                    <div class="register__bottom">
                        <div class="register__info">
                            <div class="register__info-item">
                                <img src="../assets/images/svg/icon-check.svg" alt="Icon">
                                <p class="register__info-item-text">
                                    <strong>Free sign-up and review awesome test</strong>
                                    <span>sign up and try out test and some text if you want</span>
                                </p>
                            </div>
                            <div class="register__info-item">
                                <img src="../assets/images/svg/icon-check.svg" alt="Icon">
                                <p class="register__info-item-text">
                                    <strong>Create sophnos account and enjoy</strong>
                                    <span>sign up and try out test and some text if you want</span>
                                </p>
                            </div>
                            <div class="register__info-item">
                                <img src="../assets/images/svg/icon-check.svg" alt="Icon">
                                <p class="register__info-item-text">
                                    <strong>Start testing your knoweldge</strong>
                                    <span>sign up and try out test and some text if you want</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-xl-6">
                    <div class="register__form">
                            <form action="/login" method="POST">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-12">
                                            <p class="register__form-title">Sign up</p>
                                        </div>
                                        <div class="col-12 col-xl-6">
                                            <Input label="First name" icon="icon-parent.svg" id="firstNameInput" :required="true" alt="Icon" />
                                        </div>
                                        <div class="col-12 col-xl-6">
                                            <Input label="Last name" icon="icon-parent.svg" id="lastNameInput" alt="Icon" />
                                        </div>
                                        <div class="col-12">
                                            <Input label="Email address" icon="icon-email.svg" id="emailInput" alt="Icon" />
                                        </div>
                                        <div class="col-12 col-xl-6">
                                            <Input label="Password" icon="icon-password.svg" id="passwordInput" alt="Icon" />
                                        </div>
                                        <div class="col-12 col-xl-6">
                                            <Input label="Confirm password" icon="icon-password.svg" id="confirmPasswordInput" alt="Icon" />
                                        </div>
                                        <div class="col-12">
                                            <Input label="Address" icon="icon-address.svg" id="addressInput" alt="Icon" />
                                        </div>
                                        <div class="col-12 col-xl-6">
                                            <Input label="City" icon="icon-city.svg" id="cityInput" alt="Icon" />
                                        </div>
                                        <div class="col-12 col-xl-3">
                                            <Input label="State" :isSelect="true" :dataSelect="[1,3,4,5,6]" icon="icon-state.svg" id="stateInput" alt="Icon" />
                                        </div>
                                        <div class="col-12 col-xl-3">
                                            <Input label="Zip" icon="icon-address.svg" id="zipInput" alt="Icon" />
                                        </div>
                                        <div class="col-12 col-xl-6">
                                            <Input label="Phone number" icon="icon-phone.svg" id="phoneInput" alt="Icon" />
                                        </div>
                                        <div class="col-12 col-xl-6">
                                            <Input label="Referred by" icon="icon-referred.svg" id="referredInput" alt="Icon" />
                                        </div>
                                        <div class="col-12">
<!--                                            <router-link to="/dashboard" class="btn btn&#45;&#45;primary btn&#45;&#45;full-width">Create your Sophnore account	</router-link>-->
<!--                                            <div class="g-recaptcha" data-sitekey="6LdvdK4UAAAAAJdF3JOehdkWGyGmHrf_NFSwM9gF"></div>-->
<!--                                            <button @click="recaptcha" data-badge="inline">Execute recaptcha</button>-->
<!--                                            <button type="submit" class="btn btn&#45;&#45;primary btn&#45;&#45;full-width">Create your Sophnore account	</button>-->
                                            <button type="submit" data-badge="inline" @click="recaptcha" class="btn btn--primary btn--full-width " >Create your Sophnore account	</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                    </div>
                    <div class="form-group">
                        <div class="text-center">
                            <p class="my-1">Already have an account ? <router-link to="/login">Sign in</router-link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import Input from '@/components/TextInput'
    import { VueReCaptcha } from 'vue-recaptcha-v3'
    Vue.use(VueReCaptcha, { siteKey: '6Lf9Vq4UAAAAAKEAhQqO0c6FMNTgDyYFcbsLi4TX' });
    export default {
        name: "Register",
        components: {
            Input
        },
        methods: {
            recaptcha() {
                this.$recaptcha('login').then((token) => {
                    console.log(token) // Will print the token
                })
            }
        },
    }
</script>

<style lang="scss">
    @import "../assets/styles/components/register";
    .grecaptcha-badge {
        display: none;
    }
</style>
