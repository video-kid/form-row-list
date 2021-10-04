import { useForm } from "react-hook-form";

const useHookForm = () => {
  const {
    register,
    getValues,
    trigger,
    formState: { errors, isValid },
  } = useForm();

  const submitHandler = (e, handler) => {
    e.preventDefault();
    if (isValid) {
      handler(getValues());
    } else {
      trigger();
    }
  };

  return { register, submitHandler, errors };
};

export { useHookForm };
