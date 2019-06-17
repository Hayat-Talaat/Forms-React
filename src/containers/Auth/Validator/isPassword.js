export const isPassword = value => {
    const passw = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{1,3}$/;
    return passw.match(value);
}