export const isPassword = value => {
    const passw = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{4,})";
    return passw.match(value);
}