<script>
export default {
    props: {
        faqQuestion: String,
        faqAnswer: String,
    },
    data() {
        return {
            isActive: false,
        };
    },
    methods: {
        showFaq() {
            this.isActive = !this.isActive;
        }
    }
};
</script>
<template>
    <section class="my-box p-3">
        <div class="d-flex flex-nowrap">
            <i class="fa-solid fa-plus m-2" @click="showFaq" v-show="!isActive"></i> <i class="fa-solid fa-minus m-2"
                @click="showFaq" v-show="isActive"></i>
            <h6 class="m-2">{{ faqQuestion }}</h6>
        </div>
        <div v-show="isActive">
            <p>{{ faqAnswer }}</p>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;

h6 {
    color: $text-green;
}

i {
    color: $primary-grey;
}

p {
    color: $primary-grey;
}

.my-box {
    background-color: $primary-color;
    border: 3px solid $primary-grey;
}
</style>