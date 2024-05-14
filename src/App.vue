<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from './components/AppFooter.vue';

export default {
  components: {
    AppHeader,
    AppFooter
  },
  data() {
    return {

      menu: [
        {
          name: "home",
          title: "HOME"
        },
        {
          name: "about",
          title: "ABOUT US"
        },
        {
          name: "contacts",
          title: "CONTACTS"
        }
      ]
    }
  }
}
</script>

<template>
  <div>
    <AppHeader :menu="menu" />
  </div>
  <router-view></router-view>

  <AppFooter />
</template>

<style>
div.fixed {
  position: fixed;
  bottom: 0;
  right: 0;
  width: 300px;
  border: 3px solid #73AD21;
}
</style>
