/* eslint-disable global-require */
/* eslint-disable no-undef */
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import AsyncStorage from '@react-native-community/async-storage';
import rootReducer from '../reducers/rootReducer';

let middleware = [thunk];
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

middleware = [...middleware];

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default (configureStore = initialState => {
  const store = createStore(
    persistedReducer,
    initialState,
    applyMiddleware(...middleware),
  );
  const persistor = persistStore(store);
  return {store, persistor};
});
