import Home from '../pages/Home/Home.vue'
import GoShop from '../pages/GoShop/GoShop.vue'
import Classification from '../pages/Classification/Classification.vue'
import Identify from '../pages/Identify/Identify.vue'
import Person from '../pages/Person/Person.vue'


export default[
    {
        path: '/home', 
        component: Home
    },
    {
        path: '/goShop', 
        component: GoShop
    },
    {
        path: '/classification', 
        component: Classification
    },
    {
        path: '/identify', 
        component: Identify
    },
    {
        path: '/person', 
        component: Person
    },
]