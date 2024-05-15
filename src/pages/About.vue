<script>
import { store } from "../store.js";
import AboutCard from '../components/AboutCard.vue';
import AboutFaq from '../components/AboutFaq.vue';
import AppCarousel from "../components/AppCarousel.vue";
import HomePhone from "../components/Homepage/HomePhone.vue";

export default {
    components: {
        AboutCard,
        AboutFaq,
        AppCarousel,
        HomePhone,
    },
    data() {
        return {
            team: store.team,
            faqs: [
                {
                    question: "High Rate of Success",
                    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices auctor sapien id cursus. Aliquam maximus turpis in vehicula semper.",
                },
                {
                    question: "Zero Accident Rate",
                    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices auctor sapien id cursus. Aliquam maximus turpis in vehicula semper.",
                },
                {
                    question: "We're Never Late",
                    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices auctor sapien id cursus. Aliquam maximus turpis in vehicula semper.",
                },
                {
                    question: "Price Promise",
                    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices auctor sapien id cursus. Aliquam maximus turpis in vehicula semper.",
                },
                {
                    question: "True Professionals",
                    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices auctor sapien id cursus. Aliquam maximus turpis in vehicula semper.",
                },
                {
                    question: "We Work Around You",
                    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices auctor sapien id cursus. Aliquam maximus turpis in vehicula semper.",
                },
            ],
        };
    }
}
</script>

<template>
    <section class="my-title">
        <div class="container ">
            <h2>About</h2>
        </div>
    </section>
    <section class="d-flex container">
        <div>
            <h2 class="pt-5">Mission Statement</h2>
            <h4 class="pt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices auctor sapien id
                cursus. Aliquam
                maximus turpis in vehicula semper.</h4>

            <p class="pt-5"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices auctor sapien id
                cursus.</p>
            <img src="../assets/img/labels.png" alt="Labels" />
        </div>
        <div class="hero-mike">
            <img src="../assets/img/about-page-mike-intro-fade.png" alt="Mike" />
        </div>
    </section>
    <section class="ourteam">
        <div class="d-flex container flex-column align-items-center">
            <h2 class="m-5 fw-bold text-center">Our Team</h2>
            <p class="m-3 fs-4 text-center my-container-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nunc ultrices auctor sapien id cursus. Aliquam maximus turpis in vehicula semper.</p>


            <div v-for="item in team">
                <AboutCard :cardName="item.name" :cardJob="item.job" :cardDescription="item.description"
                    :cardLocation="item.location" :cardImg="item.img" />
            </div>
        </div>
    </section>
    <section class="faq">
        <div class="d-flex container flex-column align-items-center">
            <h2 class="m-5 fw-bold text-center">Our Promise</h2>
            <p class="m-3 fs-4 text-center my-container-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nunc
                ultrices
                auctor sapien id cursus. Aliquam maximus turpis in vehicula semper.</p>
        </div>
        <div class="d-flex container flex-wrap p-5">
            <div class="col-6 p-2" v-for="item in faqs">
                <AboutFaq :faqQuestion="item.question" :faqAnswer="item.answer" />
            </div>
        </div>
    </section>
    <HomePhone />
    <AppCarousel />
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;

.hero-mike {
    position: relative;
    top: -45px;
}

.my-container-text {
    width: 60%;
}

.my-title {

    background-image: url(../assets/img/default-ptb-retina.jpg);
    background-size: cover;
    height: 300px;
    color: $primary-color;
}

.my-title h2 {
    position: absolute;
    top: 225px;
    font-size: 3rem;
}


h4 {
    color: #A6B8C2;
}

p {
    color: #A6B8C2;
}

img {
    width: 80%;
}

.ourteam {
    background-color: #F1F5F7;

}

.faq {
    background-image: url(../assets/img/faq.jpg);
    background-size: cover;

}
</style>