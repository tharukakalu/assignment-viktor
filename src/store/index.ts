import { configureStore } from '@reduxjs/toolkit';
import blogReducer from '../store/slices/blogSlice';
import cacheReducer from '../store/slices/cacheSlice';

export const store = configureStore({
  reducer: {
    blog: blogReducer,
    cache: cacheReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // For Date objects
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;