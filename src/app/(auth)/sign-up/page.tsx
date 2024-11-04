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
  firstName: string;
  lastName: string;
  email: string;
};

const GoogleSVG = () => {
  return (
    <span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        className="w-7 h-7"
        viewBox="0 0 48 48"
      >
        <path
          fill="#fbc02d"
          d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
        ></path>
        <path
          fill="#e53935"
          d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
        ></path>
        <path
          fill="#4caf50"
          d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
        ></path>
        <path
          fill="#1565c0"
          d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
        ></path>
      </svg>
    </span>
  );
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

const SignUp = () => {
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
    <div className="max-w-xl w-full mx-auto rounded-xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-center text-neutral-800 dark:text-neutral-200">
        Create an account
      </h2>

      <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full grid grid-cols-1 gap-x-4 md:grid-cols-2">
          {/* First name Input */}
          <LabelInputContainer className="mb-4">
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              placeholder="John"
              type="text"
              {...register("firstName", {
                required: "Please enter your first name",
                minLength: {
                  value: 3,
                  message: "First name must be at least 3 characters long",
                },
                maxLength: {
                  value: 50,
                  message: "First name cannot exceed 50 characters",
                },
                pattern: {
                  value: /^[a-zA-Z ]+$/,
                  message: "First name can only contain letters and spaces",
                },
              })}
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm">{errors.firstName.message}</p>
            )}
          </LabelInputContainer>

          {/* Last name Input */}
          <LabelInputContainer className="mb-4">
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              placeholder="Doe"
              type="text"
              {...register("lastName", {
                required: "Please enter your last name",
                minLength: {
                  value: 3,
                  message: "Last name must be at least 3 characters long",
                },
                maxLength: {
                  value: 50,
                  message: "Last name cannot exceed 50 characters",
                },
                pattern: {
                  value: /^[a-zA-Z ]+$/,
                  message: "Last name can only contain letters and spaces",
                },
              })}
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm">{errors.lastName.message}</p>
            )}
          </LabelInputContainer>
        </div>

        {/* Email Input */}
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="abc@xyz.com"
            type="email"
            {...register("email", {
              required: "Please enter your email address",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Please enter a valid email address",
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
          <div>Sign up</div>
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

      <button
        className="w-full p-2 flex justify-center items-center gap-x-4 bg-neutral-100 hover:bg-neutral-200 border border-slate-300/90 dark:bg-black dark:hover:bg-slate-900 dark:border dark:border-slate-700 rounded-md"
        type="button"
      >
        <GoogleSVG />
        <span className="text-sm font-medium text-black dark:text-white leading-none">
          Continue With Google
        </span>
        <BottomGradient />
      </button>

      <p className="text-sm pt-4 font-light text-center text-gray-500 dark:text-gray-400">
        Already have an account?{" "}
        <Link
          href={"/sign-in"}
          className="font-medium dark:text-blue-500 text-blue-600 hover:text-blue-800 dark:hover:text-blue-700"
        >
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
