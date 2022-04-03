import { applyMiddleware, createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import thunk from 'redux-thunk'
import storage from "redux-persist/lib/storage";

const state = { life:0 }

const Bollywood = (state={life:1}, action) => {
    switch(action.type) {
        case 'INCORRECT':
            return{
                ...state,
                life: action.payload
            }
        case 'UPDATE_STRING':
            return{
                ...state,
                s: action.payload
            }
        default:
            return state;
    }
};

const Bingo = (state= { life:5, cnt:0 }, action) => {
    switch(action.type){
        case 'REDUCE_LIFE':
            return{
                ...state,
                life: action.payload
            }
        case 'SUBMIT':
            console.log(action.payload)
            return{
                ...state,
                num: action.payload
            }
        case 'INC_CNT':
            return{
                ...state,
                cnt: action.payload
            }
        default:
            return state;
    }
}

const reducers = combineReducers({
    Bollywood: Bollywood,
    Bingo: Bingo
})

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer, state, applyMiddleware(thunk));

const persistor = persistStore(store);

export default store
export { persistor }