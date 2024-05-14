<script>
import AboutCard from '../components/AboutCard.vue';
export default {
    components: {
        AboutCard,
    },
    data() {
        return {
            team: [
                {
                    name: "Mike Hart",
                    job: "Principle Instructor",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices auctor sapien id cursus. Aliquam maximus turpis in vehicula semper. Nunc ultrices auctor sapien id cursus. Aliquam maximus turpis in vehicula semper.",
                    location: ["San Diego", "Los Angeles", "Fresno", "San Francisco"],
                    img: "mike-hart-about-page-400x504.jpg"
                },
                {
                    name: "John Smith",
                    job: "Course Instructor",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices auctor sapien id cursus. Aliquam maximus turpis in vehicula semper. Nunc ultrices auctor sapien id cursus. Aliquam maximus turpis in vehicula semper.",
                    location: ["New York", "New Jersey", "Washington D.C", "Virginia"],
                    img: "john-smith-about-page-400x504.jpg"
                },
                {
                    name: "Angela Hart",
                    job: "Driving Instructor",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices auctor sapien id cursus. Aliquam maximus turpis in vehicula semper. Nunc ultrices auctor sapien id cursus. Aliquam maximus turpis in vehicula semper.",
                    location: ["New York", "South Carolina", "Washington D.C", "Florida"],
                    img: "angela-hart-about-page-400x504.jpg"
                },
            ]
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
        <div>
            <img src="../assets/img/about-page-mike-intro-fade.png" alt="Mike" />
        </div>
    </section>
    <section class="ourteam">
        <div class="d-flex container flex-column align-items-center">
            <h2 class="m-5 fw-bold text-center">Our Team</h2>
            <p class="m-3 fs-4 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br>
                Nunc ultrices auctor sapien id cursus. Aliquam maximus turpis in vehicula semper.</p>


            <div v-for="item in team">
                <AboutCard :cardName="item.name" :cardJob="item.job" :cardDescription="item.description"
                    :cardLocation="item.location" :cardImg="item.img" />
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;

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
</style>