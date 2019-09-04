<template>
    <div class="category">
        <swiper :options="swiperOption" ref="mySwiper">
            <!-- slides -->
            <swiper-slide v-for="(category, index) in categories" :key="index">
                <input  class="category__item-input" :id="index" type="radio" name="category">
                <label :id="category.id" @click="fetchCategories(index, category.id)" :for="index" class="category__item">
                        {{ category.name }}
                </label>
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
    </div>
</template>

<script>
    export default {
        name: "CategorySlider",
        props: {
            categories: Array,
            page: String,
            isActive: {
                default: false
            },
        },
        data() {
            return {
                swiperOption: {
                    slidesPerView: 'auto',
                    noSwiping: true,
                    noSwipingClass: 'swiper-slide',
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                        indexCategories: ''
                    },
                }
            }
        },
       methods: {
             fetchCategories(index = 0, categoriID){
                this.$http.get("http://localhost:3000/api/products/categories").then(response => {
                    this.$emit('indextoparent', response.data[index].subCategories , categoriID);
                });
                this.$http.get("http://localhost:3000/api/subscriptions/lists?cat="+this.page+"&scat="+categoriID+"").then(response => {
                    this.$emit('listtoparent', response.data);
                });
            },
       }
    }
</script>

<style lang="scss">
    @import "../assets/styles/components/category";
</style>