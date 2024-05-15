<script>
import { store } from "./store.js";

import AppHeader from "./components/AppHeader.vue";
import AppFooter from './components/AppFooter.vue';
import AppNewsletter from "./components/AppNewsletter.vue";
import AppCarousel from "./components/AppCarousel.vue";

export default {
  components: {
    AppHeader,
    AppFooter,
    AppNewsletter,
    AppCarousel
  },
  data() {
    return {
      store,
      
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
          name: "",
          title: "PRICES"
        },
        {
          name: "contacts",
          title: "CONTACTS"
        }
      ],
    }
  }
}
</script>

<template>
  <div>
    <AppHeader :menu="menu" />
  </div>
  <router-view ></router-view>
</template>

<style></style>
