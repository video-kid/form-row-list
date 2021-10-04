import React from "react";
import { Button } from "../../components/button/Button";
import { useAPI } from "../../hooks/useAPI";
import { useHookForm } from "../../hooks/useHookForm";
import DataFormRow from "./partials/DataFormRow";

const DataForm = () => {
  const { register, submitHandler, errors } = useHookForm();
  const { sendingHandler } = useAPI();

  return (
    <form onSubmit={(e) => submitHandler(e, sendingHandler)}>
      <Button>Add position</Button>
      <DataFormRow register={register} errors={errors} />
      <Button type="submit">Send</Button>
    </form>
  );
};

export default DataForm;
