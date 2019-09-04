<template>
    <div class="content-wrapper">
        <div class="container-fluid">

            <!-- Dynamic Content-->
            <p class="main-heading mb-4">Dynamic Content</p>

            <!-- My Stats -->
            <div class="stats__container mb-4">
                <p class="main-heading">My Stats</p>
                <div class="row">
                    <div class="col-12 col-xl-6">
                        <div class="stats general h-100">
                            <div class="stats__top">
                                <div class="form-input--radio">
                                    <input id="totalwords" type="radio" name="stats-top">
                                    <label for="totalwords">Total words</label>
                                </div>
                                <div class="form-input--radio">
                                    <input id="hours" type="radio" name="stats-top">
                                    <label for="hours">Hours</label>
                                </div>
                                <div class="form-input--radio">
                                    <input id="correctwords" type="radio" name="stats-top">
                                    <label for="correctwords">Correct words</label>
                                </div>
                            </div>
                            <div class="stats__bottom">
                                <div class="stats__bottom-left">
                                    <div class="form-input--radio">
                                        <input id="week" type="radio" name="stats-bottom">
                                        <label for="week">This week</label>
                                    </div>
                                    <div class="form-input--radio">
                                        <input id="today" type="radio" name="stats-bottom">
                                        <label for="today">Today</label>
                                    </div>
                                    <div class="form-input--radio">
                                        <input id="month" type="radio" name="stats-bottom">
                                        <label for="month">This month</label>
                                    </div>
                                    <div class="form-input--radio">
                                        <input id="year" type="radio" name="stats-bottom">
                                        <label for="year">This year</label>
                                    </div>
                                    <div class="form-input--radio">
                                        <input id="totalbottom" type="radio" name="stats-bottom">
                                        <label for="totalbottom">Total</label>
                                    </div>
                                </div>
                                <div class="stats__bottom-right">
                                    <p class="mb-0">Ranking</p>
                                    <p class="stats__bottom-right-ranking"> <span>10</span>/1600 </p>
                                    <p>Active users</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="col-12 col-xl-6">
                        <div class="charts general">
                            <apexchart type=line height=280 :options="chartOptions" :series="series" />
                        </div>
                    </div>
                </div>
            </div>

            <!-- Recent Tests -->
            <div class="recent-tests mb-2">
                <p class="main-heading">Recent tests</p>
                <Tabs>
                    <Tab title="Spelling" :selected="true">
                        <!-- Unit -->
                        <div class="unit">
                            <div class="unit__item general">
                                <div class="unit__item-details">
                                    <router-link to="/dashboard">Unit 1</router-link>
                                </div>
                                <div class="unit__item-actions">
                                    <div class="btn-groups">
                                        <router-link to="/review" class="btn btn--outline">Review</router-link>
                                        <router-link to="/review" class="btn btn--darkblue">Test</router-link>
                                    </div>
                                </div>
                                <div class="unit__item-progress">
                                    <div class="progress-bar">
                                        <span class="progress-bar__percentage" style="width: 15%;"></span>
                                    </div>
                                    <div class="progress-bar__text">50/500 Question</div>
                                </div>
                                <div class="unit__item-score">
                                    <span>Score: </span>
                                    <strong>50%</strong>
                                </div>
                            </div>
                            <div class="unit__item is-active general">
                                <div class="unit__item-details">
                                    <router-link to="/dashboard">Unit 2</router-link>
                                </div>
                                <div class="unit__item-actions">
                                    <div class="btn-groups">
                                        <router-link to="/review" class="btn btn--outline">Review</router-link>
                                        <router-link to="/review" class="btn btn--darkblue">Test</router-link>
                                    </div>
                                </div>
                                <div class="unit__item-progress">
                                    <div class="progress-bar">
                                        <span class="progress-bar__percentage" style="width: 65%;"></span>
                                    </div>
                                    <div class="progress-bar__text">50/500 Question</div>
                                </div>
                                <div class="unit__item-score">
                                    <span>Score: </span>
                                    <strong>50%</strong>
                                </div>
                            </div>
                            <div class="unit__item general">
                                <div class="unit__item-details">
                                    <router-link to="/dashboard">Unit 3</router-link>
                                </div>
                                <div class="unit__item-actions">
                                    <div class="btn-groups">
                                        <router-link to="/review" class="btn btn--outline">Review</router-link>
                                        <router-link to="/review" class="btn btn--darkblue">Test</router-link>
                                    </div>
                                </div>
                                <div class="unit__item-progress">
                                    <div class="progress-bar">
                                        <span class="progress-bar__percentage" style="width: 25%;"></span>
                                    </div>
                                    <div class="progress-bar__text">50/500 Question</div>
                                </div>
                                <div class="unit__item-score">
                                    <span>Score: </span>
                                    <strong>50%</strong>
                                </div>
                            </div>
                            <div class="unit__item general">
                                <div class="unit__item-details">
                                    <router-link to="/dashboard">Unit 4</router-link>
                                </div>
                                <div class="unit__item-actions">
                                    <div class="btn-groups">
                                        <router-link to="/review" class="btn btn--outline">Review</router-link>
                                        <router-link to="/review" class="btn btn--darkblue">Test</router-link>
                                    </div>
                                </div>
                                <div class="unit__item-progress">
                                    <div class="progress-bar">
                                        <span class="progress-bar__percentage" style="width: 45%;"></span>
                                    </div>
                                    <div class="progress-bar__text">50/500 Question</div>
                                </div>
                                <div class="unit__item-score">
                                    <span>Score: </span>
                                    <strong>50%</strong>
                                </div>
                            </div>
                        </div>
                    </Tab>
                    <Tab title="Vocabulary">
                        <!-- Unit -->
                        <div class="unit">
                            <div class="unit__item general">
                                <div class="unit__item-details">
                                    <router-link to="/dashboard">Unit 1</router-link>
                                </div>
                                <div class="unit__item-actions">
                                    <div class="btn-groups">
                                        <router-link to="/review" class="btn btn--outline">Review</router-link>
                                        <router-link to="/review" class="btn btn--darkblue">Test</router-link>
                                    </div>
                                </div>
                                <div class="unit__item-progress">
                                    <div class="progress-bar">
                                        <span class="progress-bar__percentage" style="width: 85%;"></span>
                                    </div>
                                    <div class="progress-bar__text">450/500 Question</div>
                                </div>
                                <div class="unit__item-score">
                                    <span>Score: </span>
                                    <strong>50%</strong>
                                </div>
                            </div>
                            <div class="unit__item is-active general">
                                <div class="unit__item-details">
                                    <router-link to="/dashboard">Unit 2</router-link>
                                </div>
                                <div class="unit__item-actions">
                                    <div class="btn-groups">
                                        <router-link to="/review" class="btn btn--outline">Review</router-link>
                                        <router-link to="/review" class="btn btn--darkblue">Test</router-link>
                                    </div>
                                </div>
                                <div class="unit__item-progress">
                                    <div class="progress-bar">
                                        <span class="progress-bar__percentage" style="width: 65%;"></span>
                                    </div>
                                    <div class="progress-bar__text">50/500 Question</div>
                                </div>
                                <div class="unit__item-score">
                                    <span>Score: </span>
                                    <strong>50%</strong>
                                </div>
                            </div>
                            <div class="unit__item general">
                                <div class="unit__item-details">
                                    <router-link to="/dashboard">Unit 3</router-link>
                                </div>
                                <div class="unit__item-actions">
                                    <div class="btn-groups">
                                        <router-link to="/review" class="btn btn--outline">Review</router-link>
                                        <router-link to="/review" class="btn btn--darkblue">Test</router-link>
                                    </div>
                                </div>
                                <div class="unit__item-progress">
                                    <div class="progress-bar">
                                        <span class="progress-bar__percentage" style="width: 25%;"></span>
                                    </div>
                                    <div class="progress-bar__text">50/500 Question</div>
                                </div>
                                <div class="unit__item-score">
                                    <span>Score: </span>
                                    <strong>50%</strong>
                                </div>
                            </div>
                            <div class="unit__item general">
                                <div class="unit__item-details">
                                    <router-link to="/dashboard">Unit 4</router-link>
                                </div>
                                <div class="unit__item-actions">
                                    <div class="btn-groups">
                                        <router-link to="/review" class="btn btn--outline">Review</router-link>
                                        <router-link to="/review" class="btn btn--darkblue">Test</router-link>
                                    </div>
                                </div>
                                <div class="unit__item-progress">
                                    <div class="progress-bar">
                                        <span class="progress-bar__percentage" style="width: 45%;"></span>
                                    </div>
                                    <div class="progress-bar__text">50/500 Question</div>
                                </div>
                                <div class="unit__item-score">
                                    <span>Score: </span>
                                    <strong>50%</strong>
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
    import Tabs from '@/components/Tabs'
    import Tab from '@/components/SingleTab'
    import Input from '@/components/TextInput'
    export default {
        name: "Dashboard",
        components: {
            Tabs,
            Tab,
            Input
        },
        data() {
            return {
                series: [{
                    name: 'Likes',
                    data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5]
                }],
                chartOptions: {
                    chart: {
                        type: 'line',
                        shadow: {
                            enabled: false,
                            color: '#bbb',
                            top: 3,
                            left: 2,
                            blur: 3,
                            opacity: 1
                        },
                    },
                    stroke: {
                        width: 7,
                        curve: 'smooth'
                    },

                    xaxis: {
                        type: 'datetime',
                        categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000',
                            '8/11/2000', '9/11/2000', '10/11/2000', '11/11/2000', '12/11/2000', '1/11/2001', '2/11/2001',
                            '3/11/2001', '4/11/2001', '5/11/2001', '6/11/2001'
                        ],
                    },
                    title: {
                        text: 'Progress Report.vue',
                        align: 'left',
                        style: {
                            fontSize: '25'
                        }
                    },
                    fill: {
                        type: 'gradient',
                        gradient: {
                            shade: 'dark',
                            gradientToColors: ['#FDD835'],
                            shadeIntensity: 1,
                            type: 'horizontal',
                            opacityFrom: 1,
                            opacityTo: 1,
                            stops: [0, 100, 100, 100]
                        },
                    },
                    markers: {
                        size: 4,
                        opacity: 0.9,
                        colors: ["#FFA41B"],
                        strokeColor: "#fff",
                        strokeWidth: 2,

                        hover: {
                            size: 7,
                        }
                    },
                    yaxis: {
                        min: -10,
                        max: 40,
                        title: {
                            text: 'Engagement',
                        },
                    }
                }
            }
        }
    }
</script>

<style lang="scss">
    @import "../assets/styles/components/state";
</style>