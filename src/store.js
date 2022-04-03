import { applyMiddleware, createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import thunk from 'redux-thunk'
import storage from "redux-persist/lib/storage";

const state = { life:0, progress_track: [false, false, false, false, false ] }

const Techwood = (state={life:[0,0,0,0,0]}, action) => {
    switch(action.type) {
        case 'SET_ANS':
            return{
                ...state,
                string: action.payload
            }
        case 'SET_INCORRECT':
            return{
                ...state,
                life: action.payload
            }
        default:
            return state;
    }
};

const Bingo = (state= { life:5, cnt:0}, action) => {
    switch(action.type){
        case 'REDUCE_LIFE':
            return{
                ...state,
                life: action.payload
            }
        case 'SUBMIT':
            return{
                ...state,
                num: action.payload
            }
        case 'INC_CNT':
            return{
                ...state,
                cnt: action.payload
            }
        case 'STORE_PROGRESS':
            return{
                ...state,
                progress_track: action.payload
            }
        default:
            return state;
    }
}

const reducers = combineReducers({
    Techwood: Techwood,
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