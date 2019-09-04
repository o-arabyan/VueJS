<template>
    <div class="login">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 col-lg-6">
                    <div class="login__content">
                        <div class="logo__container">
                            <router-link to="/"><img class="logo__img" src="../assets/images/logo.svg" alt="Sophnos logo"></router-link>
                            <p class="logo__description">Make your education awesome</p>
                        </div>
                        <div class="login__bottom">
                            <p class="login__title">Login</p>
                            <form action="JavaScript:void(0);">
                                <Input v-model="login"  label="Email Address" icon="icon-email.svg" id="emailInput" alt="Icon" :error="loginError">Your email is wrong</Input>
                                <Input type="password" v-model="password" label="Password" icon="icon-password.svg" id="passwordInput" alt="Icon" :error="passwordError" >sss</Input>
                                <div class="flex-container">
                                    <div class="form-group">
                                        <input type="checkbox" id="rememberMeInput" name="rememberme" class="form-input form-input--checkbox">
                                        <label class="form-label form-label--checkbox" for="rememberMeInput">
                                            <span>Remember Me</span>
                                        </label>
                                    </div>
                                    <router-link to="/forgot-password">Forgot your password?</router-link>
                                </div>
                                <div class="form-group my-1">
                                    <button @click="fetchUser" class="btn btn--primary btn--full-width">Sign in to your account</button>
                                </div>
                                <div class="form-group">
                                    <div class="text-center">
                                        <p>Don’t have an account ? <router-link to="/register">Sign up</router-link></p>
                                    </div>
                                </div>
                            </form>
                        </div>
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
    import axios from 'axios'
    export default {
        name: "Login",
        components: {
            Input
        },
        data() {
            return {
                loginData: {},
                login: '',
                password: '',
                loginError: false,
                passwordError: false
            }
        },
        created() {
          this.getHandler();

           //axios.get('http://localhost:8080/currentuser')
               //.then(response => this.loginData = response.data);

        },
        methods: {
            getHandler() {

            },
            fetchUser() {
                if(!this.login){
                    this.loginError = true;
                }
                if(!this.password){
                    this.passwordError = true;
                }
                else{
                    axios.get('http://localhost:8080/currentuser').then(response => {
                        this.loginData = response.data;
                        console.log(this.loginData)
                    });
                }
            }
        }
    }
</script>

<style lang="scss">
    @import "../assets/styles/components/login";
</style>