import React from 'react';
import { useForm } from "react-hook-form";
import DataFormRow from './partials/DataFormRow';

const DataForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <DataFormRow register={register} errors={errors}/>
      <button type="submit" >Send</button>
    </form>
    );
};

export default DataForm;