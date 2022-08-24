import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./components/views/Home";
import About from "./components/views/About"; 
// component 추가'

Vue.use(VueRouter);

const router = new VueRouter({//eslint-disable-line no-unused-vars
    mode: "history",
    routes: [
        {path:"/", component: Home},
        {path:"/about", component: About}
    ]
});

export default router;