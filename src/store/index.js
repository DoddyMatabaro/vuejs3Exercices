import { createStore} from 'vuex';
import { UserModule } from './User';

export default createStore({
    state:{},

    // mutation are fonction thant effect the state
    mutations: {},

    //actions are functions that you call troughout your application that cal; mutations
    actions:{},

    modules: {
        User: UserModule
    }
})