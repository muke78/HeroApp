import { useState } from "react";

export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    //Una forma de hacerlo
    // setFormState(initialForm);

    // Segunda forma de hacerlo
    setFormState({
      username: formState.username, 
      email: "",
      password: "",
    });
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  };
};
