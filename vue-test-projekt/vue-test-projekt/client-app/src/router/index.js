import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/Home.vue";
import Counter from "@/components/Counter.vue";
import FetchData from "@/components/FetchData.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    
    {
        path: "/FetchData",
        name: "FetchData",
        component: FetchData,
    },
{
    path: "/Counter",
        name: "Counter",
        component: Counter,
}
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;