import Buttons from './components/Buttons.vue';
import Typography from './components/Typography.vue';
import Card from './components/Card.vue';
import Home from './components/Home.vue';
import Colors from './components/Colors.vue';

const routes = [
    { path: '/home', component: Home },
    { path: '/colors', component: Colors },
    { path: '/typography', component: Typography },
    { path: '/buttons', component: Buttons },
    { path: '/card', component: Card },
];

export default routes;  