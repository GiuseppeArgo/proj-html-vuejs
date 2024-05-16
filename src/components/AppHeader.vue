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
                <div class="pb-4"><img
                        src="https://avada.website/driving/wp-content/uploads/sites/114/2019/02/avada-drivers-logo-1x.png"
                        alt="logo" /> </div>
                <ul class="d-flex justify-content-between align-items-center ">
                    <li class="m-2" v-for="item, index in menu">

                        <router-link :to="{ name: item.name }" class="nav-link" v-if="item.name"
                            :class="(index == menu.length - 1) ? 'last' : ''">{{ item.title
                            }}</router-link>
                        <a v-else href="" class="nav-link"> {{ item.title }}</a>
                    </li>
                </ul>
            </section>
        </header>
    </div>

</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;

.last {
    padding: 10px 25px;
    border-radius: 50px;
    background-color: $text-green;
    color: $primary-color !important;
    font-size: 1rem;
    border-bottom: none !important;

    .router-link-active {
        color: $primary-color !important;
        max-height: 100%;
    }

    &:hover {
        background-color: $button-hover;
        color: $primary-color !important;
        border-bottom: none;
        border-bottom: none !important;

    }
}

.ms_navbar {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
}

.header-top {
    background-color: $footer-bg;
    height: 45px;
    color: $text-color;
    font-size: 0.8rem;
}

.menu-bar {
    background-color: rgb(51, 51, 51, 0.5);
    height: 130px;

    ul {
        max-height: 100%;
        list-style-type: none;
        color: $primary-color;
        border: none;


        li {
            color: $primary-color;
            text-decoration: none;
            padding: 7px 15px;
            font-weight: bolder;
            font-size: 1rem;

            .nav-link {
                display: flex;
                align-items: center;
                justify-content: center;
                min-height: 60px;
            }

            &:hover {
                .nav-link {
                    color: $text-green;
                    border-bottom: 3px solid $text-green;

                }

            }

            .router-link-active {
                color: $text-green;
                border-bottom: 3px solid $text-green;
                max-height: 100%;

            }
        }
    }
}
</style>