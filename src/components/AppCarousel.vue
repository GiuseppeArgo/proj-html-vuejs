<script>
    import { store } from "../store.js";
    
    export default {
        data() {
            return {
                testimonials: store.testimonials,
                currentTestimonial: 0,
            };
        },
        
        mounted() {
            this.autoPlay();
        },
        
        methods: {
            autoPlay() {
                this.interval = setInterval(() => {
                this.currentTestimonial = (this.currentTestimonial + 1) % this.testimonials.length;
                }, 4000);
            },
        }
    };
</script>

<template>
    <div class="d-flex ms_div-img">
        <div class="ms_carousel-container">
            <h2>Testimonials</h2>
            <p>Here’s what our happy drivers had to say about our services:</p>
            <div class="ms_testimonials" v-for="(testimonial, index) in testimonials" v-show="currentTestimonial === index">
                <img :src="testimonial.image" alt="" class="ms_testimonial-img"/>
                <p class="ms_testimonial-text">{{ testimonial.text }}</p>
                <p class="ms_testimonial">{{ testimonial.name }}</p>
            </div>
            <div class="ms_circle-menu">
                <span v-for="(testimonial, index) in testimonials" class="ms_testimonial-circle" :class="{ active: currentTestimonial === index }" @click="currentTestimonial = index"></span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use "../style/partials/variables" as *;

    .ms_div-img {
        background-image: url(https://avada.website/driving/wp-content/uploads/sites/114/2019/01/testimonial-background.jpg);
        background-size: cover;
        background-position: center;
        height: 600px;
        
        .ms_carousel-container {
        width: 100%;
        width: 600px;
        margin: auto;
        text-align: center;
        position: relative;
        
            h2 {
                font-size: 2.8rem;
                color: $secondary-dark;
            }
    
            p {
                font-size: 1.3rem;
                color: $text-color;
            }
            
            .ms_testimonials {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px;
            transition: opacity 1s;
                
    
                .ms_testimonial-img {
                width: 150px;
                height: 150px;
                border-radius: 50%;
                margin-bottom: 15px;
                }
            
                .ms_testimonial-text {
                font-style: italic;
                margin-bottom: 10px;
                color: $text-color;
                }
            
                .ms_testimonial {
                font-weight: bold;
                color: $text-color;
                }
            }
        
        
            .ms_circle-menu {
            display: flex;
            justify-content: center;
            margin-top: 10px;
                
                .ms_testimonial-circle {
                height: 10px;
                width: 10px;
                margin: 0 5px;
                background-color: #bbb;
                border-radius: 50%;
                display: inline-block;
                transition: background-color 0.6s ease;
                }
            
                .ms_testimonial-circle.active {
                background-color: $text-color;
                }
            }
        
        }
    }

</style>