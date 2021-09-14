import React from 'react';

const DataFormRow = ({errors, register}) => {
    return (
        <div>
          <label htmlFor="name">name</label>
          <input id="name" {...register("name", { required: true })} />
          {errors.name && <span>This field is required</span>}
          <label htmlFor="title">title</label>
          <input id="title" {...register("title", { required: true })} />
          {errors.title && <span>This field is required</span>}
        </div>
    );
};

export default DataFormRow;