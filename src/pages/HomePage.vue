<script>
import HomeHero from "../components/HomeHero.vue";
import HomeLesson from "../components/HomeLesson.vue";
import HomePhone from "../components/HomePhone.vue";
import HomeCourse from "../components/HomeCourse.vue";
import AppNewsletter from "../components/AppNewsletter.vue"

export default {
    components: {
        HomeHero,
        HomeLesson,
        HomePhone,
        HomeCourse,
        AppNewsletter,
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
                <div class="col-4 border">
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <div class="graph">
                                100%
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk
                                of the card's content.</p>
                            <a href="#" class="card-link">Card link</a>
                            <a href="#" class="card-link">Another link</a>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk
                                of the card's content.</p>
                            <a href="#" class="card-link">Card link</a>
                            <a href="#" class="card-link">Another link</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- /RATE SECTION -->

    <!-- NEWSLETTER SECTION -->
    <AppNewsletter />
    <!-- /NEWSLETTER SECTION -->
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;

.rate {
    min-height: 200px;
    background-image: url(../assets/img/triangolo.webp);
    background-size: contain;
    background-repeat: no-repeat;

    // border: 2px solid black;
    .col-4 {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        border: 2px;

        .card {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            background: rgb(122, 188, 100);
            background: linear-gradient(180deg, rgba(122, 188, 100, 1) 2%, rgba(255, 255, 255, 1) 3%);
            min-height: 400px;
            min-width: 350px;

            padding-top: 50px;

            .graph {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                font-size: 2rem;
                color: $text-color;

                width: 250px;
                aspect-ratio: 1;
                border: 10px solid $text-green;
                border-radius: 50%;
            }
        }
    }
}
</style>