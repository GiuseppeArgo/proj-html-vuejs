<script>
import HomeHero from "../components/HomeHero.vue";
import HomeLesson from "../components/HomeLesson.vue";
import HomePhone from "../components/HomePhone.vue";
import HomeCourse from "../components/HomeCourse.vue";

export default {
    components: {
        HomeHero,
        HomeLesson,
        HomePhone,
        HomeCourse,
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

    <!-- COURSE SECTION -->
    <HomeCourse />
    <!-- /COURSE SECTION -->

    <!-- RATE SECTION -->
    <section class="rate">
        <div class="container">
            <div class="row">
                <div class="col"></div>
            </div>
        </div>
    </section>
    <!-- /RATE SECTION -->

</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;

.rate {
    min-height: 200px;
    background-image: url(../assets/img/triangolo.webp);
    background-size: contain;
    background-repeat: no-repeat;

    border: 2px solid black;
}
</style>