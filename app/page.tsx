'use client';

import { UsersViewModelInterface } from "@/repository/view_model/user/user_view_model";
import { Fragment } from "react";
import { useForm } from "react-hook-form";

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UsersViewModelInterface>()

  const onSubmit = async (data: UsersViewModelInterface) => {
    const response = await fetch('http://localhost:3000/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log(result)
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue="1" {...register("id")} />
        <input {...register("first_name")} />
        {errors.first_name && <span>This field is required</span>}
        <input type="submit" />
      </form>
    </Fragment>
  );
}
