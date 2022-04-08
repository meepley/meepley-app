import { useState } from "react";
import { FieldProps } from "formik";
import { FormControl, Icon, Input } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

interface PasswordInputProps extends FieldProps {
  label: string;
  placeholder: string;
  name: string;
}

const PasswordInput: React.FC<PasswordInputProps> = (props) => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const feedbackInvalid =
    props?.form?.touched && props?.form?.errors?.password ? true : false;

  return (
    <FormControl isInvalid={feedbackInvalid} w="100%" maxW="300px">
      <FormControl.Label>{props?.label}</FormControl.Label>
      <Input
        value={props?.field.value}
        isRequired={true}
        isInvalid={feedbackInvalid}
        type={show ? "text" : "password"}
        variant="underlined"
        placeholder={props?.placeholder}
        onChangeText={props?.form.handleChange(props?.field.name)}
        onBlur={props?.form.handleBlur(props?.field.name)}
        fontSize="sm"
        InputRightElement={
          <Icon
            mr="2"
            size={5}
            color="muted.400"
            onPress={handleClick}
            as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />}
          />
        }
      />

      {feedbackInvalid && (
        <FormControl.ErrorMessage>
          {props?.form?.errors?.password}
        </FormControl.ErrorMessage>
      )}
    </FormControl>
  );
};

export default PasswordInput;
