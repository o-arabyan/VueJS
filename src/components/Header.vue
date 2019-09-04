<template>
  <header class="main-header" :class="{'is-dashboard': $route.path === '/dashboard'}">
      <div class="container-fluid p-0">
        <div class="text-right">
          <div class="main-header__menu">
            <img class="main-header__menu-student" src="../assets/images/boy.png" alt="Boy">
            <span>Patrick Manser</span>
            <img class="main-header__menu-icon" src="../assets/images/svg/icon-menu.svg" alt="">
          </div>
        </div>
        <transition name="app" mode="out-in" appear>
          <template v-if="$route.path === '/dashboard'">
             <div class="main-header__dashboard text-center">
               <h2 class="main-header__dashboard-title">Welcome, Patrick!</h2>
               <p>Your education is your power so, learn more and more</p>
               <router-link to="/dashboard" class="btn btn--outline-white">Browse test</router-link>
             </div>
          </template>
        </transition>
      </div>
  </header>
</template>

<script>
export default {
  name: 'main-header',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
