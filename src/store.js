import {reactive} from "vue";

export const store = reactive({
    team: [
        {
            name: "Mike Hart",
            job: "Principle Instructor",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices auctor sapien id cursus. Aliquam maximus turpis in vehicula semper. Nunc ultrices auctor sapien id cursus. Aliquam maximus turpis in vehicula semper.",
            location: ["San Diego", "Los Angeles", "Fresno", "San Francisco"],
            img: "mike-hart-about-page-400x504.jpg",
            imgThumb: "https://avada.website/driving/wp-content/uploads/sites/114/2019/01/instructor-mikehart.jpg"
        },
        {
            name: "John Smith",
            job: "Course Instructor",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices auctor sapien id cursus. Aliquam maximus turpis in vehicula semper. Nunc ultrices auctor sapien id cursus. Aliquam maximus turpis in vehicula semper.",
            location: ["New York", "New Jersey", "Washington D.C", "Virginia"],
            img: "john-smith-about-page-400x504.jpg",
            imgThumb: "https://avada.website/driving/wp-content/uploads/sites/114/2019/01/instructor-johnsmith.jpg"
            
        },
        {
            name: "Angela Hart",
            job: "Driving Instructor",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices auctor sapien id cursus. Aliquam maximus turpis in vehicula semper. Nunc ultrices auctor sapien id cursus. Aliquam maximus turpis in vehicula semper.",
            location: ["New York", "South Carolina", "Washington D.C", "Florida"],
            img: "angela-hart-about-page-400x504.jpg",
            imgThumb: "https://avada.website/driving/wp-content/uploads/sites/114/2019/01/instructor-angelahart.jpg"
        },
    ]
});