import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue"
import Contacts from "./pages/Contacts.vue"
import About from "./pages/About.vue"
export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomePage
        },
<<<<<<< HEAD

=======
        {
            path: "/about",
            name: "about",
            component: About
        },
        {
            path: "/contacts",
            name: "contacts",
            component: Contacts
        }
>>>>>>> ea52652ef3fc12558faec4ee50b1555217d33efc
    ]
});