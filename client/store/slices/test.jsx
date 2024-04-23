import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
	repositories: [],
	loading: undefined,
	error: undefined,
};

export const fetchRepositories = createAsyncThunk('repos/fetchRepos', async (username) => {
	return fetch(`https://api.github.com/users/${username}/repos`).then((res) => res.json());
});

export const testSlice = createSlice({
	name: 'tests',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(fetchRepositories.pending, (state, action) => {
				state.loading = true;
			})
			.addCase(fetchRepositories.fulfilled, (state, action) => {
				state.loading = false;
				state.error = false;
				state.repositories = action.payload;
			})
			.addCase(fetchRepositories.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			});
	},
});

export default testSlice.reducer;
