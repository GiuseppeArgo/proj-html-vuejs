<script>
import { store } from "../store.js";
import HomeHero from "../components/Homepage/HomeHero.vue";
import HomeLesson from "../components/Homepage/HomeLesson.vue";
import HomePhone from "../components/Homepage/HomePhone.vue";
import HomeCourse from "../components/Homepage/HomeCourse.vue";
import HomeRate from "../components/Homepage/HomeRate.vue";
import HomeInstructor from "../components/Homepage/HomeInstructor.vue";
import AppCarousel from "../components/Homepage/AppCarousel.vue";
import AppNewsletter from "../components/AppNewsletter.vue";

export default {
    components: {
        HomeHero,
        HomeLesson,
        HomePhone,
        HomeCourse,
        HomeRate,
        HomeInstructor,
        AppCarousel,
        AppNewsletter,
    },

    data() {
        return {
            store,
        }
    },

    

}
</script>

<template>
    <!-- HERO SECTION -->
    <HomeHero />
    <!-- /HERO SECTION -->

    <!-- LESSON SECTION -->
    <HomeLesson />
    <!-- /LESSON SECTION -->

    <!-- PHONE SECTION -->
    <HomePhone />
    <!-- /PHONE SECTION -->

    <!-- COURSE SECTION -->
    <HomeCourse />
    <!-- /COURSE SECTION -->

    <!-- RATE SECTION -->
    <HomeRate />
    <!-- /RATE SECTION -->

    <!-- INSTRUCTORS SECTION -->
    <HomeInstructor :store="store" />
    <!-- /INSTRUCTORS SECTION -->

    <!-- CAROUSEL SECTION -->
    <AppCarousel />
    <!-- /CAROUSEL SECTION -->
    <!-- NEWSLETTER SECTION -->
    <AppNewsletter />
    <!-- /NEWSLETTER SECTION -->

</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;

</style>