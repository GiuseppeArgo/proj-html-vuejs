<script>

export default {

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

                </div>
                <div class="col-8 ms_quick-contact">

                </div>
            </div>
        </div>
    </section>
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
        width: 1200px;
        height: 600px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0px -5px 0px $secondary-dark;
        border: 1px solid black;
        border-radius: 5px;
        position: absolute;
        top: 670px;

        .ms_col {
            display: flex;
            background-color: #ffffff;
            overflow: hidden;
        }

        .ms_contact-info {
            padding: 40px;
            background-color: $primary-color;
            height: 100%;

            h2 {
                color: #4caf50;
                margin-bottom: 10px;
            }

            p {
                margin: 5px 0;
            }

            .phone-number {
                font-size: 2.5rem;
                color: #4caf50;
                margin: 10px 0;
            }

            .email {
                font-size: 16px;
                color: #4caf50;
                margin: 10px 0;
            }
        }


        .ms_quick-contact {
            height: 100%;
            background-color: $primary-color;
            border: 1px solid black;

            h2 {
                margin-bottom: 20px;
            }
        }

        .form-group {
            margin-bottom: 15px;

            label {
                display: block;
                margin-bottom: 5px;
                color: #555;
            }

            input {
                padding: 8px;
                border: 1px solid #ccc;
                border-radius: 4px;
            }

            select,
            textarea {
                width: 100%;
                padding: 8px;
                border: 1px solid #ccc;
                border-radius: 4px;
            }

            textarea {
                height: 100px;
            }
        }

        button {
            background-color: #4caf50;
            color: #ffffff;
            padding: 10px 30px;
            border: none;
            border-radius: 30px;

            &:hover {
                background-color: #45a049;
            }
        }

        .ms_half {
            width: 50%;
            display: inline;
        }
    }
}
</style>