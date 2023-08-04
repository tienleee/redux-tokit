import { Action, ThunkAction, combineReducers, configureStore } from '@reduxjs/toolkit';
import {
    FLUSH,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    REHYDRATE,
    persistReducer,
    persistStore,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import productAPI, { productReducer } from '../api/product';
// import { counterReducer } from '../slices/Count';

// import { cartReducer } from '@/slices/cart';
// import { cartReducer } from '@/slices/Cart';

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['counter']
}
const rootReducer = combineReducers({
    // counter: counterReducer,
    [productAPI.reducerPath]: productReducer
    // cart: cartReducer
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }).concat(productAPI.middleware),
});
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>

export default persistStore(store)