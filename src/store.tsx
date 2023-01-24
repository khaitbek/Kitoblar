import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./features/categorySlice";
import authReducer from "./features/AuthSlicer";
import authorReducer from "./features/AuthorSlicer";
import bookReducer from "./features/BookSlicer";
import themeReducer from "./features/ThemeSlicer";
import languageReducer from "./features/LanguageSlicer";
export const store = configureStore({
    reducer: {
        category: categoryReducer,
        auth:authReducer,
        author:authorReducer,
        books: bookReducer,
        theme:themeReducer,
        lang:languageReducer
    }
})
export type RootState = ReturnType<typeof store.getState>;