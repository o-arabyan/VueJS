<template>
    <div class="content-wrapper">
        <div class="container-fluid">
            <p class="main-heading" :id="pageID">{{pageName}}</p>
             Main Category
            <Categories @listtoparent="mylists" :page="pageID" :categories="categoryList"></Categories>
             Sub Category
            <div class="category__sub" v-for="list of lists">
                <div class="form-input--radio">
                    <input @click="fetchUnis(list.id)" :id="list.productId" :checked="list.id === listID" type="radio" name="list.subCategory">
                    <label :for="list.productId">{{ list.name }}</label>
                </div>
            </div>

            <!-- Unit -->
            <div class="unit">
                <div class="unit__item general" v-for="(unistate, index) in unistates" >
                    <div class="unit__item-details" >
                        <router-link :to="'/spelling/unit-details/'+listID+'/'+unistate.id" :id="unistate.id">{{ unistate.name}}</router-link>
                    </div>
                    <div class="unit__item-actions">
                        <div class="btn-groups">
                            <router-link to="/review" class="btn btn--outline">Review</router-link>
                            <router-link to="/spelling/unit/test" class="btn btn--darkblue">Test</router-link>
                        </div>
                    </div>
                    <div class="unit__item-progress">
                        <div class="progress-bar">
                            <span class="progress-bar__percentage" style="width: 15%;"></span>
                        </div>
                        <div class="progress-bar__text">{{unistate.completedCount}}/{{unistate.totalCount}} Question</div>
                    </div>
                    <div class="unit__item-score">
                        <span>Score: </span>
                        <strong>{{unistate.score}}%</strong>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Categories from '@/components/ShopCategorySlider'
    import Card from '@/components/ShopCard'
    export default {
        name: "Spelling",
        components: {
            Categories,
            Card
        },
        data() {
            return {
                categoryList : [],
                pageID : '',
                pageName : '',
                unistates: [],
                lists: [],
                listID:''
            }
        },
        created: function () {
            this.$http.get("http://localhost:3000/api/subscriptions/categories").then(response => {
                this.categoryList = response.data[0].subCategories;
                this.pageID = response.data[0].id;
                this.pageName = response.data[0].name;

                this.$http.get("http://localhost:3000/api/subscriptions/lists?cat="+this.pageID+"&scat=scripps").then(response => {
                    this.lists = response.data;
                    this.listID = this.lists[0].id;
                });

                this.$http.get("http://localhost:3000/api/mylists/2344-23424-23232-2323/unitstats").then(response => {
                    this.unistates = response.data.units;
                })
            })
        },
        methods: {
            mylists( lists ) {
                this.lists = [];
                this.listID = lists[0].id;
                this.lists = lists;
            },
            fetchUnis( id ) {
                this.$http.get("http://localhost:3000/api/mylists/"+id+"/unitstats").then(response => {
                    this.unistates = [];
                    this.unistates = response.data.units;
                })
            }
        }
    }
</script>

<style lang="scss">
    @import "../assets/styles/components/unit";
</style>