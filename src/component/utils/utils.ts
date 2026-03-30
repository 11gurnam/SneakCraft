export const getInitials = (user) => {
    const initialLetters = user.email.slice(0, 2);
    return initialLetters.toUpperCase();
}
