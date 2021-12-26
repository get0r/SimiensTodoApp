export const fetchBegin = (state) => {
    state.loading = true;
    state.hasErrors = false;
    state.error = null;
}

export const fetchSuccess = (state, name, payload) => {
    state.loading = false;
    state.hasErrors = false;
    state.error = null;
    state[name] = payload;
};

export const fetchFail = (state, payload) => {
    state.loading = false;
    state.hasErrors = true;
    state.error = payload;
};