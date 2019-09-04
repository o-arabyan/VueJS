<template>
    <div class="content-wrapper">
        <div class="unit-details general mt-2">
            <div class="container-fluid">
                <div class="unit-details__heading">
                    <div class="main-heading">{{unit.listName}}</div>
                    <div class="main-heading">Unit {{unit.id + 1}} Details</div>
                </div>
                <div class="row">
                    <div class="col-12 col-xl-4">
                        <div class="unit-details__card general">
                            <p class="unit-details__card-text">Total words: <strong>22</strong></p>
                            <router-link to="/" class="btn btn--grey btn--full-width mb-1">Review Starred</router-link>
                            <router-link to="/" class="btn btn--yellow btn--full-width">Test Starred</router-link>
                        </div>
                    </div>
                    <div class="col-12 col-xl-4">
                        <div class="unit-details__card general">
                            <p class="unit-details__card-text">Total words: <strong>22</strong></p>
                            <router-link to="/" class="btn btn--grey btn--full-width mb-1">Review Starred</router-link>
                            <router-link to="/" class="btn btn--yellow btn--full-width">Test Starred</router-link>
                        </div>
                    </div>
                    <div class="col-12 col-xl-4">
                        <div class="unit-details__card general">
                            <p class="unit-details__card-text">Total words: <strong>22</strong></p>
                            <router-link to="/" class="btn btn--grey btn--full-width mb-1">Review Starred</router-link>
                            <router-link to="/" class="btn btn--yellow btn--full-width">Test Starred</router-link>
                        </div>
                    </div>
                </div>

                <div class="row py-2">
                    <div class="col-12 col-xl-6">
                        <div class="charts general">
                            <apexchart type=line height=280 :options="chartOptions" :series="series" />
                        </div>
                    </div>
                    <div class="col-12 col-xl-6">
                        <div class="test-state general">
                            <div class="test-state__inner">
                                <div class="test-state__name">Test 1</div>
                                <div class="test-state__percentage">98%</div>
                                <div class="test-state__date">10/01/2019</div>
                            </div>
                            <div class="btn-groups">
                                <router-link to="/" class="btn btn--darkblue">Test missed</router-link>
                                <router-link to="/" class="btn btn--grey">Review missed</router-link>
                            </div>
                        </div>
                        <div class="test-state general">
                            <div class="test-state__inner">
                                <div class="test-state__name">Test 2</div>
                                <div class="test-state__percentage">98%</div>
                                <div class="test-state__date">10/01/2019</div>
                            </div>
                            <div class="btn-groups">
                                <router-link to="/" class="btn btn--darkblue">Test missed</router-link>
                                <router-link to="/" class="btn btn--grey">Review missed</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    created() {
        this.id = this.$route.params.id;
        this.unitId = this.$route.params.unitId;

        this.$http.get("http://localhost:3000/api/mylists/"+this.id+"/unitstats/"+this.unitId+"").then(response => {
            this.unit = response.data;
        });

    },
    data() {
        return {
            id: '',
            unitId:'',
            unit: [],
            series: [{
                name: 'Likes',
                data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5],
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
    @import "../../assets/styles/components/unit-details";
</style>