<script>
export default {

}
</script>

<template>
   <section class="rate">
        <div class="container">
            <div class="row">
                <div v-for="index in 3" class="col-4">
                    <div class="card">
                        <div class="card-body">
                            <div class="graph">
                                100%
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

.rate {
    min-height: 200px;
    background-image: url(../../assets/img/triangolo.webp);
    background-size: contain;
    background-repeat: no-repeat;

    // border: 2px solid black;
    .col-4 {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        // border: 2px;
    

        .card {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border:  1px solid white;

            background: rgb(122, 188, 100);
            background: linear-gradient(180deg, rgba(122, 188, 100, 1) 2%, rgba(255, 255, 255, 1) 3%);
            min-height: 400px;
            min-width: 350px;

            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

            padding-top: 50px;

            .graph {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                font-size: 2rem;
                color: $text-color;

                width: 250px;
                aspect-ratio: 1;
                border: 10px solid $text-green;
                border-radius: 50%;


                // transform-origin: 50% 50%;
                // animation: prova 2s ease-in;
            }
        }
    }
}
</style>