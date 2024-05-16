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
    ],
    
    testimonials: [
        {
        image: 'https://avada.website/driving/wp-content/uploads/sites/114/2019/01/testimonial-sophia.png',
        text: 'Adesso finalmente dopo tanti sforzi non devo più prendere il bus.',
        name: 'Sophia Jones'
        },
        {
        image: 'https://avada.website/driving/wp-content/uploads/sites/114/2019/01/testimonial-harold.png',
        text: 'Spero di non distruggere subito la nuova auto che poi mia moglie mi sgrida.',
        name: 'Harold Green'
        },
        {
        image: 'https://avada.website/driving/wp-content/uploads/sites/114/2019/01/testimonial-grant.png',
        text: 'Non ho imparato a guidare ma mi hanno assunto come spazino. Grandi professionisti!',
        name: 'Grant Harvey'
        },
        {
        image: 'https://avada.website/driving/wp-content/uploads/sites/114/2019/01/testimonial-kate.png',
        text: 'Prima guidavo solo il triciclo, adesso posso guidare anche le navi da crociera. Fortemente raccomandato!',
        name: 'Kate Lewis'
        },
        {
        image: 'https://avada.website/driving/wp-content/uploads/sites/114/2019/01/testimonial-kelly.png',
        text: 'Pro: ho imparato a guidare. Contro: dovrò lasciare io i bambini a scuola.',
        name: 'Kelly Johnson'
        },
    ],
});