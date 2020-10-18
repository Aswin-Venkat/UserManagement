export default function validators(formValues) {
    let errors = {}
    if (!formValues.email) {
        errors.email = "Please enter the email"
    }
    if (!formValues.first_name) {
        errors.first_name = "Please enter the first name"
    }
    if (!formValues.last_name) {
        errors.last_name = "Please enter the last name"
    }
    if (!formValues.job) {
        errors.job = "Please enter the job"
    }
    if (!formValues.password) {
        errors.password = "Please enter the password"
    }
    if (!formValues.confirmpassword) {
        errors.confirmpassword = "Please enter the confirm password"
    }
    if (formValues.password !== formValues.confirmpassword) {
        errors.confirmpassword = "Confirm password is not same as password"
    }
    return errors
}