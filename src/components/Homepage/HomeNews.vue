<script>
export default {

}
</script>

<template>
 <section class="news">
        <div class="container">
            <div class="row ">
                <div class="col-12 ms_col ">
                    <div class="ms_card">
                        <div class="card">
                            <div class="card-body">
                                <h3>Latest News</h3>
                                <div class="container">
                                    <div class="row">
                                        <div class="col-6">
                                            <div>
                                                <img src="https://avada.website/driving/wp-content/uploads/sites/114/2019/02/blog-choosecar.jpg"
                                                    alt="">

                                                <div class="info">
                                                    <h4><a href="">What Car to Start With?</a></h4>
                                                    <span>Categories: <a class="special" href="">General </a> </span>
                                                    <span> <a class="special" href="">0 Comments</a> Views: 7616</span>
                                                </div>
                                                <div class="pt-3 text-center">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div>
                                                <img src="https://avada.website/driving/wp-content/uploads/sites/114/2019/01/blogpost-10and2.jpg"
                                                    alt="">

                                                <div class="info">
                                                    <h4><a href="">Avada Driving School Expanding</a></h4>
                                                    <span>Categories: <a class="special" href="">General </a> </span>
                                                    <span><a class="special" href="">0 Comments</a> Views: 6113</span>
                                                </div>
                                                <div class="pt-3 text-center">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="triangle">
                        <a class="btn ms_btn">MORE FROM THE BLOG</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "../../style/partials/variables" as *;

.news {

    display: flex;
    justify-content: center;

    background-image: url("https://avada.website/driving/wp-content/uploads/sites/114/2019/01/latestnews-background.jpg");
    background-position: center;
    background-repeat: no-repeat;

    min-height: 600px;
    min-width: 600px;

    a {
        text-decoration: none;
    }

    .ms_col {
        position: relative;
        top: 0;
        left: 0;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0;
        padding: 0;



        .ms_card {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 1000px;
            height: 80%;
            background: $primary-grey;
            background: linear-gradient(180deg, $primary-grey 1.5%, rgba(255, 255, 255, 1) 1.5%);
            position: relative;
            top: -50px;
            right: 0;
            border-radius: 10px 0 0 0;
            padding: 40px;
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

            .card {
                display: flex;
                justify-content: center;
                align-items: center;
                border: none;
                background-color: transparent;
                width: 100%;
                margin: 40px;

                color: $text-color;

                h3 {
                    text-align: center;
                    color: $secondary-dark;
                    font-size: 2.5rem;
                    font-weight: 600;
                }

                img {
                    mask-image: url(https://avada.website/driving/wp-content/plugins/fusion-builder//assets/images/masks/mask-17.svg);
                    mask-size: cover;
                    mask-position: center;
                    mask-repeat: no-repeat;


                    opacity: 1;
                    transition: opacity 1s, transform 1s;

                    &:hover {
                        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
                        transform: scale3d(1.05, 1.05, 1.05);
                    }
                }
            }

            .info {
                padding-top: 20px;
                text-align: center;
                color: $text-green;

                h4 {
                    a {
                        color: inherit;
                        font-size: 1.5rem;
                        font-weight: 600;
                    }
                }

                span {
                    color: $text-color;
                    font-size: 0.8rem;
                    border-bottom: 0.5px solid rgb(218, 216, 216);
                    margin: 0 5px;

                }

                .special {
                    color: $text-green;
                }
            }

        }

        .triangle {
            position: relative;
            top: -59px;
            left: 0;
            background-image: url(https://avada.website/driving/wp-content/uploads/sites/114/2019/01/latestnews-bottom-1200x105.png);
            background-position: center;
            background-size: contain;
            background-repeat: no-repeat;
            min-width: 1000px;
            min-height: 105px;

            display: flex;
            justify-content: center;
            align-items: center;

            .ms_btn {
                position: relative;
                top: -50px;
                left: 0;
                height: 40px;
                width: 200px;
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


}
</style>