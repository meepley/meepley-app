import * as Yup from "yup";

const registerSchema = Yup.object().shape({
  email: Yup.string()
    .email("Email inválido")
    .required("Necessitas de inserir o seu email para realizar o registo"),
  password: Yup.string()
    .required(
      "Necessitas de inserir a sua palavra-passe para realizar o registo"
    )
    .min(8, "A tua password tem de ter pelo menos oito caracteres"),
  passwordConfirmation: Yup.string()
    .required(
      "Necessitas de inserir a sua password novamente para realizar o registo"
    )
    .oneOf([Yup.ref("password"), null], "As passwords têm de ser iguais"),
});

export default registerSchema;
