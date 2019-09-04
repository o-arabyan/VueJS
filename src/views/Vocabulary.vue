<template>
    <div class="content-wrapper">
        <div class="container-fluid">
            <p class="main-heading">Vocabulary</p>
            <!-- Main Category-->
            <Categories :categories="categoryList"></Categories>
            <!-- Sub Category-->
            <div class="category__sub">
                <div class="form-input--radio">
                    <input id="level1A" type="radio" name="subCategory">
                    <label for="level1A">Level 1A</label>
                </div>
                <div class="form-input--radio">
                    <input id="level2" type="radio" name="subCategory">
                    <label for="level2">Level 2</label>
                </div>
                <div class="form-input--radio">
                    <input id="level3" type="radio" name="subCategory">
                    <label for="level3">Level 3</label>
                </div>
                <div class="form-input--radio">
                    <input id="level4" type="radio" name="subCategory">
                    <label for="level4">Level 4</label>
                </div>
                <div class="form-input--radio">
                    <input id="level5" type="radio" name="subCategory">
                    <label for="level5">Level 5</label>
                </div>
                <div class="form-input--radio">
                    <input id="level6" type="radio" name="subCategory">
                    <label for="level6">Level 6</label>
                </div>
                <div class="form-input--radio">
                    <input id="roots" type="radio" name="subCategory">
                    <label for="roots">Roots</label>
                </div>
            </div>

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
        </div>
    </div>
</template>

<script>
    import Categories from '@/components/ShopCategorySlider'
    import Card from '@/components/ShopCard'
    export default {
        name: "Vocabulary",
        components: {
            Categories,
            Card
        },
        data() {
            return {
                categoryList: [],
                posts: []
            }
        },
        created: function () {
            this.$http.get("http://localhost:3000/api/products/categories").then(response => {
                this.categoryList = response.data[1].subCategories;
            })
        },
    }
</script>

<style lang="scss">
    @import "../assets/styles/components/unit";
</style>