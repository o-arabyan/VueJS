<template>
    <div class="content-wrapper">
        <div class="container-fluid">
            <p class="main-heading">My Account</p>
            <div class="settings">
                <Tabs>
                    <Tab title="Account Information" :selected="true">
                        <div class="row">
                            <div class="col-12 col-xl-6">
                                <Input label="Email Address" v-model="form.emailAddress" icon="icon-email.svg" id="emailInput" alt="Icon" />
                                <Input label="Password" type="password" icon="icon-password.svg" :error="true" id="passwordInput" alt="Icon">Password is not matched</Input>
                                <Input label="Confirm Password" type="password" icon="icon-password.svg" :error="true" id="confirmPasswordInput" alt="Icon" >Password is not matched</Input>
<!--                                <div class="g-recaptcha" data-sitekey="6LdvdK4UAAAAAJdF3JOehdkWGyGmHrf_NFSwM9gF"></div>-->
                                <div class="form-group">
                                    <button class="btn btn--lg btn--primary" @click="alertTest" data-badge="inline">Save</button>
                                    <button class="btn btn--lg btn--green btn--loading" style="margin-left: 1rem">
                                        <span>Fetch</span>
                                        <span class="btn--loader"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Tab>
                    <Tab title="Personal Information">
                        <div class="row">
                            <div class="col-12 col-xl-6">
                                <Input label="First Name" v-model="personalData.firstName" icon="icon-username.svg" id="settingsFirstName" alt="Icon" />
                                <Input label="Last Name" v-model="personalData.lastName" icon="icon-username.svg" id="settingsLastName" alt="Icon" />
                                <Input label="Address" v-model="personalData.streetAddress" icon="icon-address.svg" id="settingsAddress" alt="Icon" />
                                <Input label="City" v-model="personalData.city" icon="icon-address.svg" id="settingsCity" alt="Icon" />
                                <Input label="State" v-model="personalData.state" icon="icon-state.svg" id="settingsState" alt="Icon" :isSelect="true" :dataSelect="states"/>
                                <Input label="Zip" v-model="personalData.zip" icon="icon-address.svg" id="settingsZip" alt="Icon" />
                                <!--<cleave v-model="personalData.phoneNumber" :options="options" class="form-control" name="settingsPhoneNumber"></cleave>-->
                                <Input label="Phone Number" v-model="personalData.phoneNumber" icon="icon-phone.svg" id="settingsPhoneNumber" alt="Icon" />
                                <div class="form-group">
                                    <button class="btn btn--lg btn--primary">Save</button>
                                </div>
                            </div>
                        </div>
                    </Tab>
                    <Tab title="Subscription">
                        <div class="row">
                            <div class="col-12 col-xl-4">
                                <div class="subscription__card">
                                    <div class="subscription__card-item subscription__card-listname">
                                        <span>List:</span>
                                        <span>Level 1</span>
                                    </div>
                                    <div class="subscription__card-item subscription__card-title">
                                        <span>Category:</span>
                                        <span>Spelling</span>
                                    </div>
                                    <div class="subscription__card-item subscription__card-subtitle">
                                        <span>Sub Category:</span>
                                        <span>National Spelling Bee (SCRIPPS)</span>
                                    </div>
                                    <div class="subscription__card-item subscription__card-expire">
                                        <span>Expire Date:</span>
                                        <span>12/11/2020</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-xl-4">
                                <div class="subscription__card">
                                    <div class="subscription__card-item subscription__card-listname">
                                        <span>List:</span>
                                        <span>Level 1</span>
                                    </div>
                                    <div class="subscription__card-item subscription__card-title">
                                        <span>Category:</span>
                                        <span>Spelling</span>
                                    </div>
                                    <div class="subscription__card-item subscription__card-subtitle">
                                        <span>Sub Category:</span>
                                        <span>National Spelling Bee (SCRIPPS)</span>
                                    </div>
                                    <div class="subscription__card-item subscription__card-expire">
                                        <span>Expire Date:</span>
                                        <span>12/11/2020</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-xl-4">
                                <div class="subscription__card">
                                    <div class="subscription__card-item subscription__card-listname">
                                        <span>List:</span>
                                        <span>Level 1</span>
                                    </div>
                                    <div class="subscription__card-item subscription__card-title">
                                        <span>Category:</span>
                                        <span>Spelling</span>
                                    </div>
                                    <div class="subscription__card-item subscription__card-subtitle">
                                        <span>Sub Category:</span>
                                        <span>National Spelling Bee (SCRIPPS)</span>
                                    </div>
                                    <div class="subscription__card-item subscription__card-expire">
                                        <span>Expire Date:</span>
                                        <span>12/11/2020</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-xl-4">
                                <div class="subscription__card">
                                    <div class="subscription__card-item subscription__card-listname">
                                        <span>List:</span>
                                        <span>Level 1</span>
                                    </div>
                                    <div class="subscription__card-item subscription__card-title">
                                        <span>Category:</span>
                                        <span>Spelling</span>
                                    </div>
                                    <div class="subscription__card-item subscription__card-subtitle">
                                        <span>Sub Category:</span>
                                        <span>National Spelling Bee (SCRIPPS)</span>
                                    </div>
                                    <div class="subscription__card-item subscription__card-expire">
                                        <span>Expire Date:</span>
                                        <span>12/11/2020</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import Swal from 'sweetalert2'
    import Tabs from '@/components/Tabs'
    import Tab from '@/components/SingleTab'
    import Input from '@/components/TextInput'
    import axios from "axios";
    import Cleave from 'cleave.js';
    import 'cleave.js/dist/addons/cleave-phone.us'
    import { VueReCaptcha } from 'vue-recaptcha-v3'
    Vue.use(VueReCaptcha, { siteKey: '6Lf9Vq4UAAAAAKEAhQqO0c6FMNTgDyYFcbsLi4TX' });
    export default {
        name: "Settings",
        components: {
            Tabs,
            Tab,
            Input,
            Cleave
        },
        data() {
            return {
                options: {
                    phone: true,
                    phoneRegionCode: 'US'
                },
                personalData: {},
                states: [],
                form: {
                    emailAddress: ''
                }
            }
        },
        created() {
            axios.get('http://localhost:3000/api/myaccount/info')
                .then(res => this.form.emailAddress = res.data.email);

            axios.get('http://localhost:3000/api/list/states')
                .then(res => {
                    this.states = [...Object.keys(res.data)];
                    this.personalData.state = this.states.filter(state => state === this.personalData.state)[0];
                });

            axios.get('http://localhost:3000/api/myaccount/personal')
                .then(res => this.personalData = res.data)
        },
        mounted() {
            setTimeout(() => {
                this.formatNumber();
            }, 400)
        },
        methods: {
            formatNumber() {
                return new Cleave('#settingsPhoneNumber', {
                    blocks: [0, 3, 3, 4],
                    delimiters: ['(', ') ', '-', ' '],
                    numericOnly: true,
                });
            },
            recaptcha() {

            },
            alertTest() {
                this.$recaptcha('login').then((token) => {
                    console.log(token) // Will print the token
                });
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, update it!'
                }).then((result) => {
                    if (result.value) {
                        Swal.fire(
                            'Updated!',
                            'Your info has been updated.',
                            'success'
                        )
                    }
                })
            }
        }
    }
</script>

<style lang="scss">
    @import "../assets/styles/components/tabs";

    .subscription {
        &__card {
            background-color: #f9f9f9;
            padding: 1rem;
            margin-bottom: 1rem;
            &-item {
                display: flex;
                justify-content: space-between;
                font-size: 16px;
                border-bottom: 1px solid #ddd;
            }
        }
    }
    .grecaptcha-badge {
        display: none;
    }
</style>