
const  Validation = (values) => {

    let errors={};
    if(!values.fullname)
    {
        errors.fullname="Name is required!!"
    }
    if(!values.email){
        errors.email="Email is required!!"
    } else if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(values.email)){
        errors.email="Email is invalid!!"
    }
    if(!values.password){
        errors.password="Password is required!!"
    } else if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(values.password)) {
        errors.password = "Password must conatin Uppercase, Lowercase, Number and a special characters and must be 8 character long.";
    }
    if(!values.pass){
        errors.pass="Password is required!!"
    } else if(values.pass !== values.password) {
        errors.pass = "password must be similar!!"
    }

    return errors;
}

export default Validation;
