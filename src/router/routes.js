import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import Concert from "../pages/Concerts.vue";
import Music from "../pages/Music.vue";
import Interviews from "../pages/Interviews.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/concerts",
    name: "Concert",
    component: Concert,
  },
  {
    path: "/music",
    name: "Music",
    component: Music,
  },
  {
    path: "/interviews",
    name: "Interviews",
    component: Interviews,
  },
];

export default routes;
