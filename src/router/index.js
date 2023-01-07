import {createRouter , createWebHistory} from "vue-router"
import Home from "../views/Home.vue";
import MealList from "../views/MealList.vue"
import Ingredients from "../views/Ingredients.vue"
import ByName from "../views/ByName.vue"

const routes = [
    {
        path:"/",
        name:'home',
        component:Home,
    },
    {
        path:"/by-name/:name?",
        name:'byName',
        component:ByName,
    },
    {
        path:"/by-letter/:letter?",
        name:'byLetter',
        component:MealList,
    },
    {
        path:"/by-ingredients/:ingredients?",
        name:'byIngredients',
        component:Ingredients,
    },
]


const router = createRouter({
    history:createWebHistory(),
    routes,
})


export default router;