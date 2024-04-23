import { configureStore } from '@reduxjs/toolkit';
import testReducer from './slices/test';

export const store = configureStore({
	reducer: {
		tests: testReducer,
	},
});
