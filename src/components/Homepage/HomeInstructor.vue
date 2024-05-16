<script>
export default {
    props: {
        store: [],
    },

    methods: {
        getImage(imageName) {
            return new URL(imageName, import.meta.url).href;
        }
    }
}
</script>

<template>

    <section class="instructor mt-5">
        <div class="container">
            <div class="row section_title">
                <div class="col-8">
                    <div>
                        <h2>Your Instructors</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices auctor sapien id
                            cursus.
                            Aliquam maximus turpis in vehicula semper.
                        </p>
                    </div>
                </div>
                <div class="col-4">
                    <div class="wrapper">
                        <router-link to="about" class="btn ms_btn">MORE ABOUT US</router-link>
                    </div>

                </div>
            </div>
            <div class="row">
                <div v-for="person in store.team " class="col-4 d-flex justify-content-center">
                    <div class="card">
                        <div class="card-body pt-5">
                            <div class="ms_thumb">
                                <img :src="getImage(person.imgThumb)" alt="">

                                <h3>{{ person.name }}</h3>

                                <div class="text-end my-social"><a href="#" class=" text-center tooltip-top"
                                        data-tooltip="Facebook"><i class="fa-brands fa-facebook-f m-1"></i></a>
                                    <a href="#" class="text-center tooltip-top" data-tooltip="Twitter"><i
                                            class="fa-brands fa-x-twitter m-1"></i></a>
                                    <a href="#" class="text-center tooltip-top" data-tooltip="Instagram"><i
                                            class="fa-brands fa-instagram m-1"></i></a>
                                </div>

                                <div class="description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "../../style/partials/variables" as *;

.instructor {
    min-height: 400px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    .section_title {
        h2 {
            color: $secondary-dark;
            font-size: 3rem;
            font-weight: 600;
        }

        p {
            padding-top: 30px;
            color: $text-color;
            font-size: 1.2rem;
            line-height: 200%;

        }

        .wrapper {
            display: flex;
            justify-content: center;
            align-items: center;

            min-height: 100%;
            min-width: 100%;

            .ms_btn {
                display: flex;
                justify-content: center;
                align-items: center;
                margin-top: 30px;

                height: 50px;
                width: 80%;
                font-size: 0.9rem;
                font-weight: 600;
                color: $primary-color;
                background-color: $text-green;

                // border: 1px solid green;
                border-radius: 10% / 50%;

                &:hover {
                    background-color: $button-hover;
                }

            }
        }
    }


    .card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 40px;

        background: rgb(122, 188, 100);
        background: linear-gradient(180deg, rgba(122, 188, 100, 1) 1%, rgba(255, 255, 255, 1) 2%);
        min-height: 400px;
        min-width: 350px;
        max-width: 350px;

        border: 1px solid white;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

        padding-top: 80px;

        .ms_thumb {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            max-height: 150px;

            color: $text-color;
            padding: 20px;


            h3 {
                padding-top: 30px;
                font-weight: 600;
                color: $secondary-dark;
            }

            a {
                text-decoration: none;
                color: $text-color;
                margin: 0 8px;
            }

            .description {
                text-align: center;
                line-height: 220%;
            }
        }
    }
}
</style>