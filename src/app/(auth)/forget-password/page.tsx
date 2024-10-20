"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import {
  BottomGradient,
  LabelInputContainer,
} from "@/components/form-container/FormContainer";
import Link from "next/link";

type FormData = {
  email: string;
};

const ArrowSVG = () => {
  return (
    <svg
      className="w-6 h-6"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth="2"
        d="M19 12H5m14 0-4 4m4-4-4-4"
      />
    </svg>
  );
};

const ForgetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  // Handle form submission
  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
  };
  return (
    <div className="max-w-md w-full mx-auto rounded-xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-center text-neutral-800 dark:text-neutral-200">
        Recover your password
      </h2>
      <p className="text-neutral-600 w-full text-xs italic max-w-sm mt-2 text-center dark:text-neutral-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, debitis.
      </p>

      <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
        {/* Email Input */}
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="abc@xyz.com"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Enter a valid email address",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </LabelInputContainer>

        {/* Submit Button */}
        <button
          className="w-full p-2 flex justify-center items-center gap-x-2 bg-neutral-100 hover:bg-neutral-200 border border-slate-300/90 dark:bg-black dark:hover:bg-slate-900 dark:border dark:border-slate-700 rounded-md text-black dark:text-white"
          type="submit"
        >
          <div>Find your account</div>
          <div>
            <ArrowSVG />
          </div>
          <BottomGradient />
        </button>
      </form>

      <div className="inline-flex py-5 items-center justify-center w-full">
        <hr className="max-w-6xl min-w-72  h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
        <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2  left-1/2 dark:text-white bg-white dark:bg-black">
          or
        </span>
      </div>

      <p className="text-sm font-light text-center text-gray-500 dark:text-gray-400">
        Do you want to try again?{" "}
        <Link
          href={"/sign-in"}
          className="font-medium text-primary-600  dark:text-blue-500 text-blue-600 hover:text-blue-800 dark:hover:text-blue-700"
        >
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default ForgetPassword;
