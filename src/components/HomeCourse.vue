<script>
export default {
    data() {
        return {
            itemArray: [
                {
                    title: "Pass Plus",
                    img: "https://avada.website/driving/wp-content/uploads/sites/114/2019/01/courses-passplus.jpg"
                },
                {
                    title: "Intesive Course",
                    img: "https://avada.website/driving/wp-content/uploads/sites/114/2019/01/course-intensive.jpg"
                },
                {
                    title: "Instructors",
                    img: "https://avada.website/driving/wp-content/uploads/sites/114/2019/01/courses-instructor.jpg"
                }
            ]
        }
    },
    methods: {
        getImage(imgName) {
            return new URL(imgName, import.meta.href)
        }
    }
}
</script>

<template>
    <section class="course">
        <div class="container border">
            <div class="row">
                <div class="col-2 course-card">

                    <div class="card text-center">
                        <span>
                            <img src="https://avada.website/driving/wp-content/uploads/sites/114/2019/01/new-corner.jpg"
                                alt="">
                        </span>
                        <div class="card-body">
                            <div class="card-title">
                                <h3 class="">Courses</h3>

                                <div class="mt-3">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices auctor sapien
                                    id cursus. Aliquam maximus turpis in vehicula semper.
                                </div>

                                <div class="mt-3">
                                    <button class="btn ms_btn">COURSE INFORMATION</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-1 ml-3"></div> <!-- Da mettere a posto -->
                <div v-for="item in itemArray" class="col-2 border">
                    <div class="thumb-card pt-5">
                        <img :src="getImage(item.img)" alt="...">
                        <div class="card-body pt-4">
                            <h3>{{ item.title }}</h3>
                            <a href="#" class="btn ms_btn-out mt-4">LEARN MORE</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;

.course {
    background-image: url(https://avada.website/driving/wp-content/uploads/sites/114/2019/01/promise-background.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 0% 60%;
    min-height: 500px;

    // padding: 80px;
    .row {
        padding-left: 80px;
        display: flex;
        justify-content: space-around;
        align-items: center;

    }

    .course-card {
        position: relative;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;

        .card {
            position: relative;
            top: -80px;
            // right: 0;
            left: 0px;

            min-width: 400px;
            max-width: 400px;
            min-height: 400px;

            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

            span {
                position: absolute;
                top: 0;
                left: 0;
                max-width: 80px;
                aspect-ratio: 1;

                img {
                    max-width: 100%;
                }
            }

            .card-body {
                display: flex;
                justify-content: center;
                align-items: center;

                color: $text-color;
                line-height: 200%;

                h3 {
                    color: $secondary-dark;
                    font-size: 3rem;
                    font-weight: 600;
                }

                .ms_btn {
                    height: 40px;
                    width: 200px;
                    font-size: 0.9rem;
                    font-weight: 600;
                    color: $primary-color;
                    background-color: $text-green;

                    // border: 1px solid green;
                    border-radius: 10% / 50%;

                }
            }


        }
    }

    .thumb-card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        background-color: transparent;
        min-width: 100%;

        img {
            width: 200px;
            aspect-ratio: 1;
            max-width: 200px;

            opacity: 1;
            transition: opacity 1s, transform 1s;

            &:hover {
                opacity: 0.9;
                transform: scale3d(1.1, 1.1, 1.1);
            }
        }

        .card-body {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;


            h3 {
                text-align: center;
                font-size: 1.6rem;
                font-weight: 600;
                color: $primary-grey;
            }
        }

        .ms_btn-out {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 35px;

            min-width: 150px;
            max-width: 150px;

            font-size: 0.9rem;
            font-weight: 600;

            color: $primary-grey;
            background-color: transparent;

            border: 3px solid $primary-grey;
            border-radius: 15% / 50%;

            &:hover {
                color: $text-green;
                border-color: $text-green;
            }
        }
    }
}
</style>