<script>
export default {
    props: {
        menu: Object,
    },
};
</script>
<template>
    <div class="ms_navbar">
        <header class="header-top ">
            <section class="container d-flex justify-content-between ">
                <div class="mt-2">
                    We have a 95% Successful Pass Rate
                </div>
                <div class="mt-2">
                    <i class="fa-solid fa-phone"></i> Give us a call to book your tuition! 1-800-555-555
                </div>
            </section>
        </header>
        <header class="menu-bar p-3">
            <section class="container d-flex justify-content-between align-items-center">
                <div><img src="../assets/img/logo.webp" alt="logo" /> </div>
                <ul class="d-flex justify-content-between align-items-center ">
                    <li class="m-2" v-for="item in menu">
                        <router-link :to="{ name: item.name }" class="nav-link">{{ item.title }}</router-link>
                    </li>
                </ul>
            </section>
        </header>
    </div>

</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;

.ms_navbar {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
}

.header-top {
    background-color: #333333;
    height: 45px;
    color: $text-color;
    font-size: 0.8rem;
}

.menu-bar {
    background-color: rgb(51, 51, 51, 0.5);

    a {
        color: $primary-color;
        text-decoration: none;
        padding: 7px 15px;
        font-weight: bolder;

    }

    .router-link-active {
        color: $text-green;
        text-decoration: underline 3px solid;

    }

}

li:last-child {
    padding: 10px 25px;
    border-radius: 50px;
    background-color: #7abc64;
    color: white;
    font-size: 1rem;

    .router-link-active {
        color: white;
        text-decoration: none;
    }

    &:hover {
        background-color: #64a64e;
    }
}



ul {
    list-style-type: none;
    color: $primary-color;
    border: none;
}
</style>