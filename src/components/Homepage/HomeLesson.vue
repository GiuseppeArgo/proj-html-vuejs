<script>
export default {

}
</script>

<template>
    <section class="ms_lesson pt-2">
        <div class="container mt-5">
            <div class="row">
                <div class="col-6 paragraph">
                    <h2>Get Behind The Wheel</h2>
                    <h5>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices auctor sapien id cursus.
                        Aliquam maximus turpis in vehicula semper.
                    </h5>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices auctor sapien id cursus.
                        Aliquam maximus turpis in vehicula semper. Fusce et ultrices libero, at suscipit lacus. Sed
                        vitae fringilla nibh. Nunc ultrices auctor sapien id cursus. Aliquam maximus turpis in vehicula
                        semper. Fusce et ultrices libero, at suscipit lacus. Sed vitae fringilla nibh.
                    </p>
                </div>
                <div class="col-6 form-card">
                    <div class="card text-center">
                        <div class="card-body">
                            <div class="card-title">
                                <h3>First Lesson Free!</h3>

                                <div class="mt-5">
                                    When you make a block booking with us your first lesson is <br> included free.
                                </div>
                            </div>
                            <form>

                                <div class="mb-1">
                                    <label for="inputName" class="form-label"></label>
                                    <input type="text" class="form-control" id="inputName" placeholder="Your Name*">
                                </div>

                                <div class="mb-1">
                                    <label for="inputEmail" class="form-label"></label>
                                    <input type="email" class="form-control" id="inputEmail" placeholder="Email*">
                                </div>

                                <div class="mb-1">
                                    <label for="inputTelephone" class="form-label"></label>
                                    <input type="tel" class="form-control" id="inputTelephone" placeholder="Telephone*">
                                </div>

                                <div class="mb-1">
                                    <label for="inputLocation" class="form-label"></label>
                                    <input type="text" class="form-control" id="inputLocation" placeholder="Location*">
                                </div>

                                <div class="mt-5">
                                    <button type="submit" class="btn ms_btn">REQUEST A CALLBACK</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "../../style/partials/variables" as *;

.ms_lesson {
    position: relative;
    top: 0;
    left: 0;
    background-color: $primary-color;
    min-height: $lesson-height;
    color: $text-color;

    .paragraph {
        padding: 40px 80px;

        * {
            margin-bottom: 20px;
            line-height: 180%;
            // debug
            // border: 2px solid red;
        }

        h2 {
            font-size: 2.5rem;
            color: $secondary-dark;
            font-weight: 600;

        }
    }

    // debug
    // border: 1px solid black;

    .form-card {
        position: relative;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;

        .card {
            position: relative;
            top: -100px;
            // right: 0;
            left: -60px;

            min-height: 600px;
            min-width: 80%;
            padding: 40px;

            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

            .card-title {
                color: $text-color;

                h3 {
                    color: $text-green;
                    font-size: 2rem;
                    font-weight: 600;
                }
            }

            input {
                padding: 10px;
                background-color: #f6f6f6;
            }

            ::placeholder {
                color: $text-color;
                font-size: 0.9rem;
                opacity: 0.5;
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

                &:hover {
                    background-color: $button-hover;
                }
            }
        }
    }
}
</style>