import React from "react";
import { Label } from "../../../components/form/partials/Label";
import { Input } from "../../../components/form/partials/Input";
import { FormRow } from "../../../components/form/partials/FormRow";

const DataFormRow = ({ errors, register }) => {
  return (
    <div>
      <FormRow error={errors?.name?.message}>
        <Label htmlFor="name">name</Label>
        <Input id="name" {...register("name", { required: "name required" })} />
      </FormRow>
      <FormRow error={errors?.title?.message}>
        <Label htmlFor="title">title</Label>
        <Input
          id="title"
          {...register("title", { required: "title required" })}
        />
      </FormRow>
    </div>
  );
};

export default DataFormRow;
