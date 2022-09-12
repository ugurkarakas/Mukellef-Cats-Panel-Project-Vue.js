import {createRouter, createWebHashHistory} from "vue-router";
import store from "../store";

const routes = [
    {
        name: "Login",
        path : "/",
        component : () => import("@/views/loginTemplate")
    },
    {
        name: "Register",
        path : "/",
        component : () => import("@/views/registerTemplate")
    },
    {
        name: "Panel",
        path : "/panel",
        component : () => import("@/views/panelTemplate")
    },
    {
        name: "NotFound",
        path : "/notfound",
        component : () => import("@/views/notFound")
    },
    {
        // path: "*",
        path: "/:catchAll(.*)",
        name: "NotFound",
        component: import("@/views/notFound"),
        meta: {
          requiresAuth: false
        }
      }
];


const router = createRouter({
    routes,
    history : createWebHashHistory()
});

router.beforeEach((to, from, next)  => {
    const authRequiredRoutes = ["Panel"];
    const _isAuthenticated = store.getters._isAuthenticated
    if(authRequiredRoutes.indexOf(to.name) > -1)
    {
        if(_isAuthenticated) next();
        else next({name: "Login"});
    }
    else{
        next();
    }

    // if(_isAuthenticated)
    // {
    //     next();
    // }
});

export default router;