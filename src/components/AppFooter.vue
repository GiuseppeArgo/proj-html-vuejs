<script>
export default {
    data () {
        return {
            courses: [
                {
                    icon: "fa-circle-right",
                    listItem: "Basic Driving Course"
                },
                {
                    icon: "fa-circle-right",
                    listItem: "Pass Plus Driving Course"
                },
                {
                    icon: "fa-circle-right",
                    listItem: "Intensive Driving Course"
                },
                {
                    icon: "fa-circle-right",
                    listItem: "Instructors Training"
                }
            ],
            details: [
                {
                    icon:"",
                    listItem:"50 North Main Street,New York, NY 98765"
                },
                {
                    icon:"",
                    listItem:"Toll Free: 1-800-555-555"
                },
                {
                    icon:"",
                    listItem:"info@your-domain.com"
                },
                {
                    icon:"",
                    listItem:"Mon to Sat: 8 am – 5 pm"
                }
            ] 
        }
    }
}
</script>

<template>
    <footer class="d-flex">
        <div class="d-flex ms_container">
            <div class="ms_col">
                <img src="https://avada.website/driving/wp-content/uploads/sites/114/2019/02/avada-drivers-logo-1x.png" alt="">
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
                    <li v-for="detail in details">
                        <i :class="'fa-regular' + detail.icon"></i> {{ detail.listItem }}
                    </li>
                </ul>
            </div>
            <div class="ms_col">
                <h3>Book Free Class</h3>
                <img class="drive" src="https://avada.website/driving/wp-content/uploads/sites/114/2019/01/blogpost-ten-400x228.jpg" alt="">
                <a class="ms_book" href="#">BOOK NOW</a>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }
    
    footer {
        background-image: url(https://avada.website/driving/wp-content/uploads/sites/114/2019/01/footer-background-color.jpg);
        background-position: center;
        background-size: cover;
        height: 500px;
        justify-content: center;
        font-size: 1.1rem;
        color: #7799ad;
        
        .ms_container {
            width: 80%;
        }

        a {
            text-decoration: none;
        }

        li {
            list-style: none;
            margin-top: 20px;

            .green_icon {
            color: #7abc64;
            font-size: 0.9rem;
            margin-right: 5px;
            }

            a {
            text-decoration: none;
            color: #7799ad;

                &:hover {
                    color: #7abc64;

                    .green_icon{
                        color: white;
                    }
                }
            }
        }

        .ms_col {
            width: 25%;
            margin: 100px 20px;

            p {
                margin: 30px 0;
                line-height: 30px;
            }

            .ms_about {
                padding: 10px 15px;
                border: 2px solid #7799ad;
                border-radius: 50px;
                color: #7799ad;
                font-size: 1rem;

                &:hover {
                    border-color: #7abc64;
                    color: #7abc64;
                }
            }

            .ms_book {
                padding: 10px 25px;
                border-radius: 50px;
                background-color: #7abc64;
                color: white;
                font-size: 1rem;

                &:hover {
                    background-color: #64a64e;
                }
                
            }

            .drive {
                width: 70%;
                display: block;
                margin: 30px 0;
            }


        }

        h3 {
            color: white;
        }
    }


</style>