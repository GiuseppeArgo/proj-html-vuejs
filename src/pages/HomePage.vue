<script>
export default {

}
</script>

<template>
    <!-- HERO SECTION -->
    <section class="hero">
        <div class="container ">
            <div class="row">
                <div class="col-8 hero-text">
                    <h2>Drive with Avada</h2>
                    <div>We offer the finest driving tuition money can buy</div>
                </div>
                <div class="col-4 border"></div>
            </div>
        </div>
    </section>
    <!-- /HERO SECTION -->

    <!-- LESSON SECTION -->
    <section class="lesson">
        <div class="container border mt-5">
            <div class="row">
                <div class="col-8">ciao</div>
                <div class="col-4"></div>
            </div>

        </div>
    </section>
    <!-- /LESSON SECTION -->


</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;

.hero {
    background-image: url(https://avada.website/driving/wp-content/uploads/sites/114/2019/01/homepage-hero-background.jpg);
    background-size: cover;

    height: $hero-height;
    display: flex;
    justify-content: center;
    align-items: center;

    .hero-text {
        font-size: 1.5rem;
        color: $primary-color;
        padding-left: 80px;
        h2 {
            font-size: 4rem;
            font-weight: 600;
            // debug
            // border: 1px solid red;
        }

    }

}

.lesson {
    background-color: $primary-color;


    min-height: $lesson-height;
}

</style>