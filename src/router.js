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
    ]
});