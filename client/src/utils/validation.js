const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
export const validate = (credentials) => {
  const errors = {};
  const { email, password, name } = credentials;

  if (!name) errors["name"] = "El campo es obligatorio";
  if (!email) errors["email"] = "El campo es obligatorio";
  if (!password) errors["password"] = "El campo es obligatorio";

  if (email && !emailRegex.test(email))
    errors["email"] = "Correo electrónico no válido";

  if (password && !passwordRegex.test(password))
    errors["password"] = "Al menos 6 caracteres (Letras, números y especiales)";

  return errors;
};
