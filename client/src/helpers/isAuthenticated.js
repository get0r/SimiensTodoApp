export const isAuthenticated = (user) => {
    if (user === undefined) return 0;
    if (user === null) return 2;
    return 1;
};