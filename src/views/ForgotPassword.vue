<template>
    <div class="forgot-password">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 col-lg-6">
                    <div class="login__content">
                        <div class="logo__container">
                            <router-link to="/"><img class="logo__img" src="../assets/images/logo.svg" alt="Sophnos logo"></router-link>
                            <p class="logo__description">Make your education awesome</p>
                        </div>
                        <div class="login__bottom mt-4" v-if="!resetPassword">
                            <p class="main-heading">Forgot your password ?</p>
                            <form action="/thank-you" @submit.prevent="handleForm" method="POST">
                                <Input label="Email Address" icon="icon-email.svg" :type="'email'" id="emailInput" alt="Icon" :required="true" placeholder="Please enter your email address" />
                                <div class="form-group my-1">
                                    <button type="submit" class="btn btn--primary btn--full-width">Reset password</button>
                                </div>
                            </form>
                        </div>

                        <!-- Alert for submit -->
                        <transition name="app" mode="out-in" appear>
                            <div class="alert alert--success" v-if="resetPassword">
                                Thank you for reseting your password we will have sent you an email to resert your new password please check your email address. <br >  <br >
                                Sophons Support Team.
                            </div>
                        </transition>
                    </div>
                </div>
                <div class="col-12 col-lg-6">
                    <div class="login__image">
                        <img src="../assets/images/1.jpg" alt="Education">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Input from '@/components/TextInput'
    export default {
        name: "ForgotPassword",
        components: {
            Input
        },
        data() {
            return {
                resetPassword: false,
            }
        },
        methods: {
            handleForm() {
               this.resetPassword = true
            }
        }
    }
</script>

<style lang="scss">
    .alert {
        background-color: #45bd92;
        box-shadow: $box-shadow;
        padding: 2rem;
        border-radius: 4px;
        color: $white;
    }
</style>