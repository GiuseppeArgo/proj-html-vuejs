<script>
export default {
    props: {
        cardName: String,
        cardJob: String,
        cardDescription: String,
        cardLocation: Array,
        cardImg: String,
    },
    methods: {
        getImageFlag(imageName) {

            return new URL(`../assets/img/${imageName}`, import.meta.url).href;

        },
    },
};
</script>

<template>
    <div class="card mb-3 my-card">
        <div class="row g-0">
            <div class="col-md-4">
                <img :src="getImageFlag(cardImg)" class="img-fluid rounded-start m-5 my-img" :alt="cardName">
            </div>
            <div class="col-md-8">
                <div class="card-body m-5">
                    <h5 class="card-title">{{ cardName }}</h5>
                    <p class="card-text"><small class="text-body-secondary">{{ cardJob }}</small></p>
                    <p class="card-text">{{ cardDescription }}</p>
                    <p v-for="item in cardLocation"> <i class="fa-regular fa-circle-right"></i> {{ item }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;

i {
    color: $text-green;
}

.my-img {
    width: 60%;
    transition: .3s ease-in-out;
}

:hover .my-img {
    width: 65%;
}

.my-card {
    border-top: solid 5px $text-green ;
}
</style>