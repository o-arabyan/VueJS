<template>
    <div class="content-wrapper">
       <div class="container-fluid p-0">
           <div class="shop">
           <p class="main-heading">Shop</p>
               <!-- Main Category-->
               <Categories @indextoparent="myindex" :categories="categoryList"></Categories>
               <!-- Sub Category-->
               <div class="category__sub">
                   <div class="form-input--radio"  v-for="subCat of subCategories">
                       <input :id="subCat.id" @click="fetchProducts(subCat.id, CategoriesID)" type="radio" name="subCaegory">
                       <label :for="subCat.id" >{{subCat.name}}</label>
                   </div>
               </div>
               <!-- Card Container -->
               <div class="shop__container">
                   <div class="row">
                       <div class="col-12 col-xl-3" v-for="product of products" >
                            <card :price="product.price" :date_prod="product.expirationDate" :id="product.id" :title="product.name" price="100" expire="Expire 09/07/2019" :renew="true">
                                {{product.description}}
                            </card>
                       </div>
                   </div>
               </div>

               <div class="text-right mt-2">
                   <div class="row">
                       <div class="col-12 col-xl-2">
                           <router-link to="/checkout" class="btn btn--green btn--full-width">Checkout</router-link>
                       </div>
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
        name: "Shop",
        components: {
            Categories,
            Card
        },
        data() {
            return {
                categoryList: [],
                subCategories:[],
                pageID : '',
                pageName : '',
                CategoriesID:'',
                products:[]
            }
        },
        created: function () {
            this.$http.get("http://localhost:3000/api/products/categories").then(response => {
                this.categoryList = response.data;
            })

            this.$http.get("http://localhost:3000/api/products/categories").then(response => {
                this.subCategories = response.data[0].subCategories;
            });

            this.$http.get("http://localhost:3000/api/shop/products?cat=spelling&scat=grade").then(response => {
                this.products = response.data;
            });
        },
        methods: {
            myindex: function (subCategoriesIndex, categoriID) {
                this.subCategories = [];
                this.subCategories = subCategoriesIndex;
                this.CategoriesID = categoriID;
            },
            fetchProducts(scat, cat){
                this.$http.get("http://localhost:3000/api/shop/products?cat="+cat+"&scat="+scat+"").then(response => {
                    this.products = [];
                    this.products = response.data;
                });
            }
        },
    }
</script>

<style lang="scss">
</style>