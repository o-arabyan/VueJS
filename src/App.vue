<template>
  <div id="app">
    <template v-if="checkRoute">
      <SvgContainer></SvgContainer>
      <MainHeader></MainHeader>
      <Sidebar></Sidebar>
    </template>
    <main>
      <transition name="app" mode="out-in" appear>
        <router-view/>
      </transition>
    </main>
  </div>
</template>
<script>
  import Sidebar from '@/components/Sidebar'
  import MainHeader from '@/components/Header'
  import SvgContainer from '@/components/SvgContainer'
  export default {
    components: {
      Sidebar,
      MainHeader,
      SvgContainer
    },
    data() {
      return {

      }
    },
    computed: {
      checkRoute() {
        let skipDashboard = true;
        if (  this.$route.path === '/login' || this.$route.path === '/forgot-password' || this.$route.path === '/register' || this.$route.path === '/') skipDashboard = false;
        return skipDashboard
      }
    }
  }

</script>

<style lang="scss">
</style>
