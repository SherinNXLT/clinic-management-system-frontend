// utils/validation.ts
export type SignInErrors = {
  email?: string;
  password?: string;
};

export const validateSignIn = (email: string, password: string): SignInErrors => {
  const errors: SignInErrors = {};

  // Email validation
  if (!email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = "Enter a valid email";
  }

  // Password validation
  if (!password) {
    errors.password = "Password is required";
  }

  return errors;
};
