<script>
import { store } from "../store.js";
import HomeHero from "../components/Homepage/HomeHero.vue";
import HomeLesson from "../components/Homepage/HomeLesson.vue";
import HomePhone from "../components/Homepage/HomePhone.vue";
import HomeCourse from "../components/Homepage/HomeCourse.vue";
import HomeRate from "../components/Homepage/HomeRate.vue";
import HomeInstructor from "../components/Homepage/HomeInstructor.vue";
import HomeNews from "../components/Homepage/HomeNews.vue";
import AppCarousel from "../components/AppCarousel.vue";
import AppNewsletter from "../components/AppNewsletter.vue";


export default {
    components: {
        HomeHero,
        HomeLesson,
        HomePhone,
        HomeCourse,
        HomeRate,
        HomeInstructor,
        HomeNews,
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
    <HomeRate class="ms_back"/>
    <!-- /RATE SECTION -->

    <!-- INSTRUCTORS SECTION -->
    <HomeInstructor :store="store" />
    <!-- /INSTRUCTORS SECTION -->

    <!-- CAROUSEL SECTION -->
    <AppCarousel />
    <!-- /CAROUSEL SECTION -->

    <!-- NEWS SECTION -->
    <HomeNews />
    <!-- /NEWS SECTION -->

</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;

.ms_back {
    min-height: 200px;
    background-image: url(../assets/img/triangolo.webp);
    background-size: contain;
    background-repeat: no-repeat;
}
</style>