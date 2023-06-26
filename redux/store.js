// using persist
import { combineReducers, configureStore } from "@reduxjs/toolkit";
// reducers
import allServices from "./allServices";
import productDetails from "./productDetails";
import storage from "redux-persist/lib/storage";
import activeProductSlice from "./productDetails";
import mapSlice from "./gmap";
import userSlice from "./userSlice";
import blogsSlice from "./blogs";
import mainBannerSlice from "./inputs";
import complainSlice from "./complainSlice";
import productListSlice from "./productListSlice";
import partSlice from "./partpurjaSlice";
import slugSlice from "./slugSlice";
import seoSlice from "./seoSlice";

import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  allServices,
  productDetails,
  activeProductSlice,
  blogsSlice,
  mapSlice,
  userSlice,
  mainBannerSlice,
  complainSlice,
  productListSlice,
  partSlice,
  slugSlice,
  seoSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export const persistor = persistStore(store);

//without persist

// import { configureStore } from "@reduxjs/toolkit";
// import allServicesSlice from "./allServices";
// import subServiceSlice from "./subServiceSlice";

// export const store = configureStore({
//   reducer: {
//     allServices: allServicesSlice,
//     subServices: subServiceSlice,
//   },
// });
