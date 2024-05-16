<script>
import AppCarousel from '../components/AppCarousel.vue';
import HomeRate from '../components/Homepage/HomeRate.vue';
import { store } from "../store.js";

export default {
    components: {
        AppCarousel,
        HomeRate,
    },
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <!-- hero -->
    <section>
        <div class="ms_upper-hero">
            <div class="container">
                <h2>Book Now</h2>
            </div>
        </div>

        <div class="ms_lower-hero">
            <div class="container">
                <h3>We're waiting for your call</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices <br>auctor sapien id cursus.
                    Aliquam maximus turpis in vehicula semper.</p>
            </div>
        </div>
    </section>
    <!-- /hero -->

    <section class="ms_contact">
        <div class="container">
            <div class="row ms_contact-form">
                <div class="col-4 ms_contact-info">
                    <h4>Give us a call</h4>
                    <p class="ms_phone-number">1-800-555-555</p>
                    <p>MONDAY-SATURDAY (8AM - 8PM)</p>
                    <hr class="border-4">
                    <h4>Send us an email</h4>
                    <p class="ms_email">info@your-domain.com</p>
                    <p>24/7/365</p>
                </div>
                
                <div class="col-8 ms_quick-contact">
                    <div class="container">
                        <h4>Quick Contact</h4>
                        <form action="#">
                            <div class="form-group row">
                                <div class="col-6">
                                    <label for="name">Your Name*</label>
                                    <input type="text" id="name" name="name">
                                </div>
                                <div class="col-6">
                                    <label for="email">Email*</label>
                                    <input type="email" id="email" name="email">
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-6">
                                    <label for="telephone">Telephone</label>
                                    <input type="tel" id="telephone" name="telephone">
                                </div>
                                <div class="col-6">
                                    <label for="location">Location</label>
                                    <input type="text" id="location" name="location">
                                </div>
                                <div>
                                    <label for="service">Service*</label>
                                    <select id="service" name="service">
                                        <option value="standard-tuition">Standard Tuition</option>
                                        <option value="standard-tuition">Nigth Driving</option>
                                        <option value="standard-tuition">Automatic</option>
                                        <option value="standard-tuition">Pass Plus</option>
                                        <option value="standard-tuition">Intensive Course</option>
                                        <option value="standard-tuition">Private Lesson With Loris</option>
                                        <option value="standard-tuition">Refresher Course</option>
                                        <option value="standard-tuition">Cab Driver Training</option>
                                        <option value="standard-tuition">Heavy Vehicule Training</option>
                                    </select>
                                </div>
                                <div>
                                    <label for="message">Message*</label>
                                    <textarea id="message" name="message"></textarea>
                                </div>
                            </div>
                        </form>
                        <button>SEND</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <HomeRate class="card"/>
    <AppCarousel class="carousel"/>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;

// hero
.ms_upper-hero {
    background-image: url(https://avada.website/driving/wp-content/uploads/sites/114/2019/02/book-now-hero-background.jpg);
    background-size: cover;
    background-position: 0 -80px;
    height: 350px;
    color: $primary-color;

    h2 {
        position: absolute;
        top: 250px;
        font-size: 3.7rem;
    }
}

.ms_lower-hero {
    height: 350px;
    display: flex;
    align-items: center;

    h3 {
        font-size: 2.7rem;
        color: $secondary-dark;
    }

    p {
        font-size: 1.5rem;
        padding-top: 20px;
        color: $text-color;
    }
}

// /hero

// contact
.ms_contact {
    height: 900px;
    background-image: url(https://avada.website/driving/wp-content/uploads/sites/114/2019/01/latestnews-background.jpg);
    background-size: cover;
    background-position: 0 -200px;
    display: flex;
    justify-content: center;

    .ms_contact-form {
        height: 680px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0px -5px 0px $primary-grey;
        min-width: 100%;
        border-radius: 5px;
        position: relative;
        top: -30px;
        left: 0;

        .ms_contact-info {
            padding: 40px;
            background-color: $primary-color;
            height: 100%;
            padding: 50px;
            border-bottom-left-radius: 5px;

            h4 {
                font-size: 2rem;
                color: $secondary-dark;
            }

            p {
                margin: 5px 0;
                font-weight: 500;
                color: $text-color;
            }

            .ms_phone-number {
                font-size: 2.5rem;
                font-weight: 500;
                color: $text-green;
                margin: 10px 0;
            }

            .ms_email {
                font-size: 1.8rem;
                font-weight: 500;
                color: $text-green;
                margin: 10px 0;
            }
        }


        .ms_quick-contact {
            height: 100%;
            background-color: $primary-color;
            border-bottom-right-radius: 5px;

            h4 {
                font-size: 2rem;
                padding: 40px 0 10px 40px;
                margin-top: 10px;
                color: $secondary-dark;
            }
        }

        .form-group {
            padding: 10px 40px;

            label {
                display: block;
                margin-bottom: 5px;
                margin-top: 10px;
                color: $text-color;
                
            }

            input {
                padding: 13px;
                border: 1px solid $form-border;
                border-radius: 5px;
                width: 100%;
                background-color: $form-color;
                color: $text-color;
            }

            
        }
        
        select,
        textarea {
            width: 100%;
            padding: 13px;
            border: 1px solid $form-border;
            background-color: $form-color;
            border-radius: 5px;
            color: $text-color;
        }
        
        textarea {
            height: 100px;
        }
        
        button {
            background-color: $text-green;
            color: $primary-color;
            padding: 10px 30px;
            border: none;
            border-radius: 30px;
            margin-top: 20px;
            margin-left: 40px;

            &:hover {
                background-color: #45a049;
            }
        }
    }
}

// /contact

// carousel

.carousel {
    padding-top: 400px;
    height: 1100px;
}

// /carousel

// card 

.card {
    max-width: 1200px;
    min-width: 1200px;
    z-index: 1;
    position: absolute;
    background: transparent;
    top: 1550px;
    left: calc((100vw / 2) - 600px);
    right: calc((100vw / 2) - 600px);
    border: none;
}
</style>