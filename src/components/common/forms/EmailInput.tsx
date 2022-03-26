import { FieldProps } from "formik";
import { FormControl, Input } from "native-base";

const EmailInput: React.FC<FieldProps> = (props) => {
  const feedbackInvalid =
    props?.form?.touched && props?.form?.errors?.email ? true : false;

  return (
    <FormControl isInvalid={feedbackInvalid} w="100%" maxW="300px">
      <FormControl.Label>Email</FormControl.Label>
      <Input
        value={props?.field.value}
        onChangeText={(val) => props?.form.setFieldValue("email", val.trim())}
        onBlur={props?.form.handleBlur("email")}
        isRequired={true}
        isInvalid={feedbackInvalid}
        type="email"
        variant="underlined"
        placeholder="insere o teu email"
        keyboardType="email-address"
        textContentType="emailAddress"
        autoCompleteType="email"
        autoCapitalize="none"
      />

      {feedbackInvalid && (
        <FormControl.ErrorMessage>
          {props?.form?.errors?.email}
        </FormControl.ErrorMessage>
      )}
    </FormControl>
  );
};

export default EmailInput;
