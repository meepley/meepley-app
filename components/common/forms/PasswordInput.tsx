import { useState } from "react";
import { FieldProps } from "formik";
import { FormControl, Icon, Input, WarningOutlineIcon } from "native-base";
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
        InputRightElement={
          <Icon
            onPress={handleClick}
            as={<MaterialIcons name="visibility-off" />}
            size={5}
            mr="2"
            color="muted.400"
          />
        }
      />

      {feedbackInvalid && (
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          {props?.form?.errors?.password}
        </FormControl.ErrorMessage>
      )}
    </FormControl>
  );
};

export default PasswordInput;
