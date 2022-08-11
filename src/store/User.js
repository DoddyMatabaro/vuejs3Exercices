export const UserModule = {
    namespaced:true,


    state:{
        user: null
    },
        // mutation are fonction thant effect the state
    mutations: {
        SET_USER(state, user){
            state.user = user;
        }
    },


    //actions are functions that you call troughout your application that cal; mutations
    actions:{
        setUser({commit}, user){
            commit('SET_USER', user);
        }
    },
}  