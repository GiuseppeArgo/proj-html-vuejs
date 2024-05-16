<script>
export default {
    props: {
        courses: {
            type: Array
        }
    },
}
</script>

<template>
    <footer class="d-flex flex-column align-items-center">
        
        <!-- upper footer -->
        
        <div class="ms_upper-footer d-flex ms_container">
            <div class="ms_col">
                <img class="logo" src="https://avada.website/driving/wp-content/uploads/sites/114/2019/02/avada-drivers-logo-1x.png" alt="">
                <p>Avada Driving School is the right choice for experienced drivers looking for a refresher course, or the brand new driver wanting to pass first time.</p>
                <a class="ms_about" href="#">MORE ABOUT US</a>
            </div>
            <div class="ms_col">
                <h3>Driving Courses</h3>
                <ul>
                    <li v-for="course in courses">
                        <a href=""><i class="green_icon" :class="'fa-solid ' + course.icon"></i> {{ course.listItem }}</a>
                    </li>
                </ul>
            </div>
            <div class="ms_col">
                <h3>Contact Details</h3>
                <ul>
                    <li><i class="fa-solid fa-house-chimney"></i> 50 North Main Street, <br><span>New York, NY 98765</span></li>
                    <li><i class="fa-solid fa-phone"></i> Toll Free: 1-800-555-555</li>
                    <li><i class="fa-regular fa-envelope"></i> info@your-domain.com</li>
                    <li><i class="fa-solid fa-arrow-turn-up"></i> Mon to Sat: 8 am – 5 pm</li>
                </ul>
            </div>
            <div class="ms_col">
                <h3>Book Free Class</h3>
                <img class="drive" src="https://avada.website/driving/wp-content/uploads/sites/114/2019/01/blogpost-ten-400x228.jpg" alt="">
                <a class="ms_book" href="#">BOOK NOW</a>
            </div>
        </div>
        
        <!-- lower footer -->
        <div class="ms_lower-footer d-flex justify-content-center align-items-center">
            <div class="ms_container d-flex justify-content-between align-items-center">
                <p>© Copyright 2012 - 2024 | Avada Theme by <span>ThemeFusion</span> | All Rights Reserved | Powered by <span>WordPress</span></p>

                <ul class="d-flex">
                    <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-x-twitter"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-youtube"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                </ul>
            </div>
        </div>
    
    </footer>
</template>

<style lang="scss" scoped>
    @use "../style/partials/variables" as *;

    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }
    
    footer {
        background-image: url(https://avada.website/driving/wp-content/uploads/sites/114/2019/01/footer-background-color.jpg);
        background-position: center;
        background-size: cover;
        min-height: 500px;
        justify-content: center;
        font-size: 1.1rem;
        color: $text-color;
        
        .ms_container {
            width: 80%;
        }
        
        .ms_upper-footer {

            a {
                text-decoration: none;
            }

            li {
                list-style: none;
                margin-top: 20px;

                i {
                    color: $primary-color;
                    margin-right: 10px;
                    font-size: .9rem;
                }

                .green_icon {
                color: $text-green;
                font-size: 0.9rem;
                margin-right: 5px;
                }

                span {
                    padding-left: 35px;
                }
                
                a {
                text-decoration: none;
                color: $text-color;

                    &:hover {
                        color: $text-green;

                        .green_icon{
                            color: $primary-color;
                        }
                    }
                }
            }

            .ms_col {
                width: 25%;
                margin: 100px 30px;

                p {
                    margin: 30px 0;
                    line-height: 35px;
                }

                .ms_about {
                    padding: 10px 15px;
                    border: 3px solid $primary-grey;
                    border-radius: 50px;
                    color: $primary-grey;
                    font-size: 1rem;

                    &:hover {
                        border-color: $text-green;
                        color: $text-green;
                    }
                }

                .ms_book {
                    padding: 10px 25px;
                    border-radius: 50px;
                    background-color: $text-green;
                    color: $primary-color;
                    font-size: 1rem;

                    &:hover {
                        background-color: $button-hover;
                    }
                    
                }

                .drive {
                    width: 80%;
                    display: block;
                    margin: 30px 0;
                }
                
                .logo {
                    position: relative;
                    top: -10px;
                    left: 0;
                    margin-bottom: 10px;
                }

            }

            h3 {
                color: $primary-color;
            }
        }
        

        .ms_lower-footer {
            background-color: $footer-bg;
            width: 100%;
            height: 120px;

            p {
                font-size: .9rem;
                margin-left: 30px;

                span {
                    color: $text-green;
                }
            }

            ul {
                margin-right: 100px;
                
                li {
                    list-style: none;
                    margin-left: 20px;
                    
                    a {
                        color: inherit;
                    }
                }
            }
        }
    }


</style>