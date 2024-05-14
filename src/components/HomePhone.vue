<script>
export default {

}
</script>

<template>
    <section class="ms_phone">
        <div class="container">
            <div class="row justify-content-between align-items-center">
                <div class="col-4 left-col">
                    <h2>Start Learning To Drive Today</h2>
                    <h3>Give us a call to schedule your first driving lesson</h3>
                </div>
                <div class="col-4 right-col">
                    <h2>
                        <i class="fa-solid fa-phone"></i> 1-800-555-555
                    </h2>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;


.ms_phone {
    background-image: url(https://avada.website/driving/wp-content/uploads/sites/114/2019/01/horizontal-cta-background.jpg);
    background-size: contain;
    background-repeat: no-repeat;
    min-height: 300px;

    display: flex;
    justify-content: center;
    align-items: center;

    color: $primary-color;

    .left-col {
        min-width: 800px;

        * {
            font-weight: 600;
        }

        h2 {
            font-size: 3rem;
        }

        h3 {
            font-size: 1.5rem;
        }
    }

    .right-col {
        min-width: 200px;
    }
}
</style>