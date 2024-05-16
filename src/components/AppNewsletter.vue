<script>
    export default {

    }
</script>

<template>
    <div class="ms_news d-flex justify-content-center">
        <div class="d-flex flex-column align-items-center justify-content-center ms_inner">
            <label for="email">Sign up to our Newsletter</label>
            <input type="email" id="email" name="email">
            <button>SUBSCRIBE</button>
            <p>(We do not share your data with anybody, and only use it for it's intended purpose)</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use "../style/partials/variables" as *;

    .ms_news{
        height: 370px;
        background-image: url(https://avada.website/driving/wp-content/uploads/sites/114/2019/02/newsletter_background.jpg);
        background-size: cover;

        .ms_inner {
            width: 30%;
            
            label {
                margin: 40px;
                font-size: 2rem;
                font-weight: 500;
                color: $secondary-dark;
            }
    
            input {
                width: 100%;
                border-radius: 10px;
                border: 1px solid $form-border;
                padding: 15px 10px;
                color: $text-color;
            }
    
            button {
                width: 100%;
                margin-top: 30px;
                padding: 10px 0;
                border-radius: 50px;
                color: $primary-color;
                border: none;
                background-color: $text-green;
    
                &:hover {
                            background-color: $button-hover;
                        }
            }

            p {
                font-size: .9rem;
                padding-top: 30px;
                color: $text-color;
            }
        }



    }

</style>