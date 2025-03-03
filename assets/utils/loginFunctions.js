export const loginValidation = (email, password) => {
  if (!email || !password) return { valid: false, message: "Email and Password are required!" };
  if (!email.includes("@")) return { valid: false, message: "Invalid email format" };
  return { valid: true };
};