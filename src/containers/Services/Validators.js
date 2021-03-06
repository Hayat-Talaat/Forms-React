export const isEmail = value => {
    const RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return RegExp.test(value);
}

export const isRequired = (message = "This field is required.") => {
    return value => {
        if (value) {
            return false;
        }

        return message;
    }
};


export const isPassword = value => {
    const passw = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{4,})";
    return passw.match(value);
}

