import { createStore } from "vuex";
import VuexPersistence from "vuex-persist";
import SecureLS from "secure-ls";
var ls = new SecureLS({isCompression:false});

export default createStore({
    state:{
        user:null,
        saltKey: "456!mukellef123?co"
    },
    plugins:[new VuexPersistence({
       storage:{
        getItem: key => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: key => length.remove(key)
       }
    }).plugin],
    mutations: {
        setUser(state, user){
            state.user = user;
        },
        logoutUser(state){
            state.user = null;
        }
    },
    getters: {
        _isAuthenticated : state => state.user != null,
        _getCurrentUser(state){
            const user = state.user;
            delete user?.password
            return user;
        },
        _saltKey: state => state.saltKey
    }
});

