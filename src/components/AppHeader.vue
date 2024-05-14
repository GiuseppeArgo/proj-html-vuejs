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
        <header class="menu-bar">
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
    color: #436EA3;
    font-size: 0.8rem;
}

.menu-bar {
    background-color: rgb(51, 51, 51, 0.5);

    a {
        color: white;
        text-decoration: none;
        padding: 7px 15px;
        font-weight: bolder;

    }

    .router-link-active {
        color: green;
        text-decoration: underline 3px solid;
    }
}



ul {
    list-style-type: none;
    color: white;
    border: none;
}
</style>