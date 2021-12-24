export const isAuthenticated = token => {
    if (token === undefined) return 0;
    if (token === null) return 2;
    if (token === 0) return 3;
    return 1;
};