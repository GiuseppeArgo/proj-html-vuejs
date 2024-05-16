<script>
export default {
    data() {
        return {
            pieArray: [
                {
                    percentage: "95",
                    className: "first"
                },
                {
                    percentage: "100",
                    className: "second"
                },
                {
                    percentage: "0",
                    className: "third"
                }
            ]
        }
    }
}
</script>

<template>
    <section class="rate">
        <div class="container">
            <div class="row">
                <div v-for="myPie in pieArray" class="col-4">
                    <div class="card">
                        <div class="percentage">{{ myPie.percentage }}%</div>
                        <div class="card-body">
                            <div id="pie">
                                <table class="charts-css pie hide-data">
                                    <tbody :class="myPie.className">
                                        <tr>
                                            <td><span class="data"></span></td>
                                        </tr>
                                    </tbody>
                                </table>
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

    // border: 2px solid black;
    .col-4 {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        // border: 2px;
        position: relative;
        top: 0;
        left: 0;

        .card {
            position: relative;
            top: 0;
            left: 0;

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border: 1px solid white;

            background: rgb(122, 188, 100);
            background: linear-gradient(180deg, rgba(122, 188, 100, 1) 2%, rgba(255, 255, 255, 1) 3%);

            min-height: 400px;

            min-width: 350px;

            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

            padding-top: 50px;


            #pie {
                width: 100%;
                min-width: 250px;
                margin: 0 auto;

                table {
                    tbody {
                        stroke: black;
                        stroke-width: 0.1;
                        --start: 0.0;
                        --color: #7abc64;

                        animation-duration: 1.5s;
                        animation-delay: 1s;
                        animation-fill-mode: both;
                        transition-timing-function: ease-in;

                    }

                }

                .first {
                    animation-name: almostfull;
                    --end: 0.95;
                }

                .second {
                    animation-name: fullcircle;
                    --end: 1.1;
                }

                .third {
                    animation-name: none;
                    --end: 0.0;
                }

                @keyframes fullcircle {

                    0% {
                        --end: 0.0;
                    }

                    1% {
                        --end: 0.01;
                    }

                    2% {
                        --end: 0.02;
                    }

                    3% {
                        --end: 0.03;
                    }

                    4% {
                        --end: 0.04;
                    }

                    5% {
                        --end: 0.05;
                    }

                    6% {
                        --end: 0.06;
                    }

                    7% {
                        --end: 0.07;
                    }

                    8% {
                        --end: 0.08;
                    }

                    9% {
                        --end: 0.09;
                    }

                    10% {
                        --end: 0.10;
                    }

                    11% {
                        --end: 0.11;
                    }

                    12% {
                        --end: 0.12;
                    }

                    13% {
                        --end: 0.13;
                    }

                    14% {
                        --end: 0.14;
                    }

                    15% {
                        --end: 0.15;
                    }


                    16% {
                        --end: 0.16;
                    }

                    17% {
                        --end: 0.17;
                    }

                    18% {
                        --end: 0.18;
                    }

                    19% {
                        --end: 0.19;
                    }

                    20% {
                        --end: 0.20;
                    }

                    21% {
                        --end: 0.21;
                    }

                    22% {
                        --end: 0.22;
                    }

                    23% {
                        --end: 0.23;
                    }

                    24% {
                        --end: 0.24;
                    }

                    25% {
                        --end: 0.25;
                    }

                    26% {
                        --end: 0.26;
                    }

                    27% {
                        --end: 0.27;
                    }

                    28% {
                        --end: 0.28;
                    }

                    29% {
                        --end: 0.29;
                    }

                    30% {
                        --end: 0.30;
                    }

                    31% {
                        --end: 0.31;
                    }

                    32% {
                        --end: 0.32;
                    }

                    33% {
                        --end: 0.33;
                    }

                    34% {
                        --end: 0.34;
                    }

                    35% {
                        --end: 0.35;
                    }

                    36% {
                        --end: 0.36;
                    }

                    37% {
                        --end: 0.37;
                    }

                    38% {
                        --end: 0.38;
                    }

                    39% {
                        --end: 0.39;
                    }

                    40% {
                        --end: 0.40;
                    }

                    41% {
                        --end: 0.41;
                    }

                    42% {
                        --end: 0.42;
                    }

                    43% {
                        --end: 0.43;
                    }

                    44% {
                        --end: 0.44;
                    }

                    45% {
                        --end: 0.45;
                    }

                    46% {
                        --end: 0.46;
                    }

                    47% {
                        --end: 0.47;
                    }

                    48% {
                        --end: 0.48;
                    }

                    49% {
                        --end: 0.49;
                    }

                    50% {
                        --end: 0.50;
                    }

                    51% {
                        --end: 0.51;
                    }

                    52% {
                        --end: 0.52;
                    }

                    53% {
                        --end: 0.53;
                    }

                    54% {
                        --end: 0.54;
                    }

                    55% {
                        --end: 0.55;
                    }

                    56% {
                        --end: 0.56;
                    }

                    57% {
                        --end: 0.57;
                    }

                    58% {
                        --end: 0.58;
                    }

                    59% {
                        --end: 0.59;
                    }

                    60% {
                        --end: 0.60;
                    }

                    61% {
                        --end: 0.61;
                    }

                    62% {
                        --end: 0.62;
                    }

                    63% {
                        --end: 0.63;
                    }

                    64% {
                        --end: 0.64;
                    }

                    65% {
                        --end: 0.65;
                    }

                    66% {
                        --end: 0.66;
                    }

                    67% {
                        --end: 0.67;
                    }

                    68% {
                        --end: 0.68;
                    }

                    69% {
                        --end: 0.69;
                    }

                    70% {
                        --end: 0.70;
                    }

                    71% {
                        --end: 0.71;
                    }

                    72% {
                        --end: 0.72;
                    }

                    73% {
                        --end: 0.73;
                    }

                    74% {
                        --end: 0.74;
                    }

                    75% {
                        --end: 0.75;
                    }

                    76% {
                        --end: 0.76;
                    }

                    72% {
                        --end: 0.72;
                    }

                    73% {
                        --end: 0.73;
                    }

                    74% {
                        --end: 0.74;
                    }

                    75% {
                        --end: 0.75;
                    }

                    76% {
                        --end: 0.76;
                    }

                    77% {
                        --end: 0.77;
                    }

                    78% {
                        --end: 0.78;
                    }

                    79% {
                        --end: 0.79;
                    }

                    80% {
                        --end: 0.80;
                    }

                    81% {
                        --end: 0.81;
                    }

                    82% {
                        --end: 0.82;
                    }

                    83% {
                        --end: 0.83;
                    }

                    84% {
                        --end: 0.84;
                    }

                    85% {
                        --end: 0.85;
                    }

                    86% {
                        --end: 0.86;
                    }

                    87% {
                        --end: 0.87;
                    }

                    88% {
                        --end: 0.88;
                    }

                    89% {
                        --end: 0.89;
                    }

                    90% {
                        --end: 0.90;
                    }

                    91% {
                        --end: 0.91;
                    }

                    92% {
                        --end: 0.92;
                    }

                    93% {
                        --end: 0.93;
                    }

                    94% {
                        --end: 0.94;
                    }

                    95% {
                        --end: 0.95;
                    }

                    96% {
                        --end: 0.96;
                    }

                    97% {
                        --end: 0.97;
                    }

                    98% {
                        --end: 0.98;
                    }

                    99% {
                        --end: 0.99;
                    }

                    100% {
                        --end: 1.1;
                    }

                }

                @keyframes almostfull {

                    0% {
                        --end: 0.0;
                    }

                    1% {
                        --end: 0.01;
                    }

                    2% {
                        --end: 0.02;
                    }

                    3% {
                        --end: 0.03;
                    }

                    4% {
                        --end: 0.04;
                    }

                    5% {
                        --end: 0.05;
                    }

                    6% {
                        --end: 0.06;
                    }

                    7% {
                        --end: 0.07;
                    }

                    8% {
                        --end: 0.08;
                    }

                    9% {
                        --end: 0.09;
                    }

                    10% {
                        --end: 0.10;
                    }

                    11% {
                        --end: 0.11;
                    }

                    12% {
                        --end: 0.12;
                    }

                    13% {
                        --end: 0.13;
                    }

                    14% {
                        --end: 0.14;
                    }

                    15% {
                        --end: 0.15;
                    }


                    16% {
                        --end: 0.16;
                    }

                    17% {
                        --end: 0.17;
                    }

                    18% {
                        --end: 0.18;
                    }

                    19% {
                        --end: 0.19;
                    }

                    20% {
                        --end: 0.20;
                    }

                    21% {
                        --end: 0.21;
                    }

                    22% {
                        --end: 0.22;
                    }

                    23% {
                        --end: 0.23;
                    }

                    24% {
                        --end: 0.24;
                    }

                    25% {
                        --end: 0.25;
                    }

                    26% {
                        --end: 0.26;
                    }

                    27% {
                        --end: 0.27;
                    }

                    28% {
                        --end: 0.28;
                    }

                    29% {
                        --end: 0.29;
                    }

                    30% {
                        --end: 0.30;
                    }

                    31% {
                        --end: 0.31;
                    }

                    32% {
                        --end: 0.32;
                    }

                    33% {
                        --end: 0.33;
                    }

                    34% {
                        --end: 0.34;
                    }

                    35% {
                        --end: 0.35;
                    }

                    36% {
                        --end: 0.36;
                    }

                    37% {
                        --end: 0.37;
                    }

                    38% {
                        --end: 0.38;
                    }

                    39% {
                        --end: 0.39;
                    }

                    40% {
                        --end: 0.40;
                    }

                    41% {
                        --end: 0.41;
                    }

                    42% {
                        --end: 0.42;
                    }

                    43% {
                        --end: 0.43;
                    }

                    44% {
                        --end: 0.44;
                    }

                    45% {
                        --end: 0.45;
                    }

                    46% {
                        --end: 0.46;
                    }

                    47% {
                        --end: 0.47;
                    }

                    48% {
                        --end: 0.48;
                    }

                    49% {
                        --end: 0.49;
                    }

                    50% {
                        --end: 0.50;
                    }

                    51% {
                        --end: 0.51;
                    }

                    52% {
                        --end: 0.52;
                    }

                    53% {
                        --end: 0.53;
                    }

                    54% {
                        --end: 0.54;
                    }

                    55% {
                        --end: 0.55;
                    }

                    56% {
                        --end: 0.56;
                    }

                    57% {
                        --end: 0.57;
                    }

                    58% {
                        --end: 0.58;
                    }

                    59% {
                        --end: 0.59;
                    }

                    60% {
                        --end: 0.60;
                    }

                    61% {
                        --end: 0.61;
                    }

                    62% {
                        --end: 0.62;
                    }

                    63% {
                        --end: 0.63;
                    }

                    64% {
                        --end: 0.64;
                    }

                    65% {
                        --end: 0.65;
                    }

                    66% {
                        --end: 0.66;
                    }

                    67% {
                        --end: 0.67;
                    }

                    68% {
                        --end: 0.68;
                    }

                    69% {
                        --end: 0.69;
                    }

                    70% {
                        --end: 0.70;
                    }

                    71% {
                        --end: 0.71;
                    }

                    72% {
                        --end: 0.72;
                    }

                    73% {
                        --end: 0.73;
                    }

                    74% {
                        --end: 0.74;
                    }

                    75% {
                        --end: 0.75;
                    }

                    76% {
                        --end: 0.76;
                    }

                    72% {
                        --end: 0.72;
                    }

                    73% {
                        --end: 0.73;
                    }

                    74% {
                        --end: 0.74;
                    }

                    75% {
                        --end: 0.75;
                    }

                    76% {
                        --end: 0.76;
                    }

                    77% {
                        --end: 0.77;
                    }

                    78% {
                        --end: 0.78;
                    }

                    79% {
                        --end: 0.79;
                    }

                    80% {
                        --end: 0.80;
                    }

                    81% {
                        --end: 0.81;
                    }

                    82% {
                        --end: 0.82;
                    }

                    83% {
                        --end: 0.83;
                    }

                    84% {
                        --end: 0.84;
                    }

                    85% {
                        --end: 0.85;
                    }

                    86% {
                        --end: 0.86;
                    }

                    87% {
                        --end: 0.87;
                    }

                    88% {
                        --end: 0.88;
                    }

                    89% {
                        --end: 0.89;
                    }

                    90% {
                        --end: 0.90;
                    }

                    91% {
                        --end: 0.91;
                    }

                    92% {
                        --end: 0.92;
                    }

                    93% {
                        --end: 0.93;
                    }

                    94% {
                        --end: 0.94;
                    }

                    95% {
                        --end: 0.95;
                    }

                }
            }

            .percentage {
                display: flex;
                justify-content: center;
                align-items: center;

                color: $text-color;
                font-size: 3rem;
                color: $text-color;

                min-width: 220px;
                max-width: 220px;

                aspect-ratio: 1;

                border-radius: 50%;
                background-color: white;
                position: absolute;
                top: 80px;
                left: 65px;
                z-index: 100;

            }

        }
    }
}
</style>