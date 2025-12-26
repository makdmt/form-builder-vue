import {createRouter, createWebHistory} from 'vue-router'
import MainPage from "@/pages/mainPage.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: MainPage
        },
        {
            path: '/user-form',
            name: 'userForm',
            component: () => import("@/pages/userFormPage.vue")
        },
        {
            path: '/user-contact-form',
            name: 'userContactForm',
            component: () => import("@/pages/userContactFormPage.vue")
        },
        {
            path: '/user-edit-form',
            name: 'userEditForm',
            component: () => import("@/pages/userEditFormPage.vue")
        },
    ],
})

export default router
