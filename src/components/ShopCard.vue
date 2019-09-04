<template>
    <div class="card general" :class="{'card--checkout': checkout}">
        <h4 class="card__title">{{ title }}</h4>
        <p><slot></slot></p>
        <div class="card__action">
            <div class="card__price">${{ price }}</div>
            <template v-if="renew">
                <button class="btn" :class="{'btn--gray': renew}">
                    <span>{{ date_prod }}</span>
                    <span>Renew</span>
                </button>
            </template>
            <template v-if="checkout">
                <button class="btn" :class="{'btn--green': checkout}">Checkout</button>
            </template>
            <template v-if="addToCart">
                <button class="btn" :class="{'btn--blue': addToCart}">Add to cart</button>
            </template>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ShopCard",
        props: {
            title: String,
            expire: String,
            date_prod: String,
            price: String,
            description: String,
            renew: Boolean,
            checkout: Boolean,
            addToCart: Boolean,
        },
        computed: {
        }
    }
</script>

<style lang="scss">
    @import "../assets/styles/components/card";
</style>