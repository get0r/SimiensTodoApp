export const isAuthenticated = (user) => {
    if (user === undefined) return 0;
    if (user === null) return 2;
    if (user === 0) return 3;
    return 1;
};