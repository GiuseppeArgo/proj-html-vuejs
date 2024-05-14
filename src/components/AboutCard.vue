<script>
export default {
    props: {
        cardName: String,
        cardJob: String,
        cardDescription: String,
        cardLocation: Array,
        cardImg: String,
    },
    methods: {
        getImageFlag(imageName) {

            return new URL(`../assets/img/${imageName}`, import.meta.url).href;

        },
    },
};
</script>

<template>
    <div class="card mb-3 my-card">
        <div class="row g-0">
            <div class="col-md-4">
                <img :src="getImageFlag(cardImg)" class="img-fluid rounded-start m-5 my-img" :alt="cardName">
            </div>
            <div class="col-md-8">
                <div class="card-body m-5">
                    <p class="text-end my-social"><a href="#" class=" text-center tooltip-top"
                            data-tooltip="Facebook"><i class="fa-brands fa-facebook-f m-1"></i></a>
                        <a href="#" class="text-center tooltip-top" data-tooltip="Twitter"><i
                                class="fa-brands fa-x-twitter m-1"></i></a>
                        <a href="#" class="text-center tooltip-top" data-tooltip="Instagram"><i
                                class="fa-brands fa-instagram m-1"></i></a>
                    </p>
                    <h5 class="card-title">{{ cardName }}</h5>
                    <p class="card-text"><small class="text-body-secondary">{{ cardJob }}</small></p>
                    <p class="card-text">{{ cardDescription }}</p>
                    <h6>LOCATIONS COVERED</h6>
                    <p v-for="item in cardLocation"> <i class="fa-regular fa-circle-right"></i> {{ item }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;

h5 {
    color: black;
    font-size: 2rem;

}

h6 {
    color: black;
}

i {
    color: $text-green;
}

.my-img {
    width: 60%;
    transition: .3s ease-in-out;
}

.my-img:hover {
    width: 65%;
}

.my-card {
    border-top: solid 5px $text-green ;
    color: $text-color;
}

.my-social i {
    color: $text-color;
    font-weight: bolder;
}

html {
    box-sizing: border-box;
}

*,
*:before,
*:after {
    box-sizing: inherit;
}

body {
    margin: 64px auto;
    text-align: center;
    font-size: 100%;
    max-width: 640px;
    width: 94%;
}

a:hover {
    text-decoration: none;
}

header,
.demo,
.demo p {
    margin: 4em 0;
    text-align: center;
}

[data-tooltip],
.tooltip {
    position: relative;
    cursor: pointer;
}

[data-tooltip]:before,
[data-tooltip]:after,
.tooltip:before,
.tooltip:after {
    position: absolute;
    visibility: hidden;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);
    opacity: 0;
    -webkit-transition:
        opacity 0.2s ease-in-out,
        visibility 0.2s ease-in-out,
        -webkit-transform 0.2s cubic-bezier(0.71, 1.7, 0.77, 1.24);
    -moz-transition:
        opacity 0.2s ease-in-out,
        visibility 0.2s ease-in-out,
        -moz-transform 0.2s cubic-bezier(0.71, 1.7, 0.77, 1.24);
    transition:
        opacity 0.2s ease-in-out,
        visibility 0.2s ease-in-out,
        transform 0.2s cubic-bezier(0.71, 1.7, 0.77, 1.24);
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    pointer-events: none;
}

[data-tooltip]:hover:before,
[data-tooltip]:hover:after,
[data-tooltip]:focus:before,
[data-tooltip]:focus:after,
.tooltip:hover:before,
.tooltip:hover:after,
.tooltip:focus:before,
.tooltip:focus:after {
    visibility: visible;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);
    opacity: 1;
}

.tooltip:before,
[data-tooltip]:before {
    z-index: 1001;
    border: 6px solid transparent;
    background: transparent;
    content: "";
}

.tooltip:after,
[data-tooltip]:after {
    z-index: 1000;
    padding: 8px;
    width: 160px;
    background-color: #000;
    background-color: hsla(0, 0%, 20%, 0.9);
    color: #fff;
    content: attr(data-tooltip);
    font-size: 14px;
    line-height: 1.2;
}

[data-tooltip]:before,
[data-tooltip]:after,
.tooltip:before,
.tooltip:after,
.tooltip-top:before,
.tooltip-top:after {
    bottom: 100%;
    left: 50%;
}

[data-tooltip]:before,
.tooltip:before,
.tooltip-top:before {
    margin-left: -6px;
    margin-bottom: -12px;
    border-top-color: #000;
    border-top-color: hsla(0, 0%, 20%, 0.9);
}

[data-tooltip]:after,
.tooltip:after,
.tooltip-top:after {
    margin-left: -80px;
}

[data-tooltip]:hover:before,
[data-tooltip]:hover:after,
[data-tooltip]:focus:before,
[data-tooltip]:focus:after,
.tooltip:hover:before,
.tooltip:hover:after,
.tooltip:focus:before,
.tooltip:focus:after,
.tooltip-top:hover:before,
.tooltip-top:hover:after,
.tooltip-top:focus:before,
.tooltip-top:focus:after {
    -webkit-transform: translateY(-12px);
    -moz-transform: translateY(-12px);
    transform: translateY(-12px);
}
</style>