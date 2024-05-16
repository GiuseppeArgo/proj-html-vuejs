<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from './components/AppFooter.vue';
import AppNewsletter from "./components/AppNewsletter.vue";

export default {
  components: {
    AppHeader,
    AppFooter,
    AppNewsletter
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
          title: "BOOK NOW"
        }
      ],
      
      courses: [
        {
          icon: "fa-circle-right",
          listItem: "Basic Driving Course"
        },
        {
          icon: "fa-circle-right",
          listItem: "Pass Plus Driving Course"
        },
        {
          icon: "fa-circle-right",
          listItem: "Intensive Driving Course"
        },
        {
          icon: "fa-circle-right",
          listItem: "Instructors Training"
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
  <router-view></router-view>
  <AppNewsletter />
  <AppFooter :courses="courses" />
</template>

<style></style>
