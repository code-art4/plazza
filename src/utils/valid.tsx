const valid = (
  name: string,
  email: string,
  password: string,
  cf_pwd: string
) => {
  if (!name || !email || !password || !cf_pwd) {
    return "field(s) cannot be empty";
  }
  if (!validateEmail) {
    return "Invalid Email entry";
  }
  if (password.length < 6) {
    return "password must be greater than 6 characters";
  }
  if (password !== cf_pwd) {
    return "confirm password must match password";
  }
};

const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export default valid;
