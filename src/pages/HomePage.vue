<script>
import HomeHero from "../components/HomeHero.vue";
import HomeLesson from "../components/HomeLesson.vue";
import HomePhone from "../components/HomePhone.vue";

export default {
    components: {
        HomeHero,
        HomeLesson,
        HomePhone,
    }

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


</template>

<style lang="scss" scoped>

</style>