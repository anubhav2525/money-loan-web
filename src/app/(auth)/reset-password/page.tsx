"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import {
  BottomGradient,
  LabelInputContainer,
} from "@/components/form-container/FormContainer";

type FormData = {
  otp: string;
  password: string;
  confirmPassword: string;
};

const SaveSvg = () => {
  return (
    <svg
      className="w-4 h-4"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke-width="2"
        d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  );
};

const ResetPassword = () => {
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
        Update your password
      </h2>

      <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
        {/* OTP Input */}
        <LabelInputContainer className="mb-4">
          <Label htmlFor="otp">One Time Password</Label>
          <Input
            id="otp"
            placeholder="123456"
            type="number"
            maxLength={6}
            {...register("otp", {
              required: "OTP is required",
              minLength: {
                value: 6,
                message: "OTP must be 6 digits",
              },
              maxLength: {
                value: 6,
                message: "OTP must be 6 digits",
              },
            })}
          />
          {errors.otp && (
            <p className="text-red-500 text-sm">{errors.otp?.message}</p>
          )}
        </LabelInputContainer>

        {/* Password Input */}
        <div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="password">New password</Label>
            <Input
              id="password"
              placeholder="••••••••"
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
                maxLength: {
                  value: 40,
                  message: "Password must be at most 50 characters long",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password?.message}</p>
            )}
          </LabelInputContainer>
        </div>

        {/* Confirm Password Input */}
        <LabelInputContainer className="mb-4">
          <Label htmlFor="confirmPassword">Confirm password</Label>
          <Input
            id="confirmPassword"
            placeholder="••••••••"
            type="password"
            {...register("confirmPassword", {
              required: "Confirm password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters long",
              },
              maxLength: {
                value: 50,
                message: "Password must be at most 50 characters long",
              },
            })}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">
              {errors.confirmPassword?.message}
            </p>
          )}
        </LabelInputContainer>

        {/* Submit Button */}
        <button
          className="w-full p-2 flex justify-center items-center gap-x-2 bg-neutral-100 hover:bg-neutral-200 border border-slate-300/90 dark:bg-black dark:hover:bg-slate-900 dark:border dark:border-slate-700 rounded-md text-black dark:text-white"
          type="submit"
        >
          <div>Update</div>
          <div>
            <SaveSvg />
          </div>
          <BottomGradient />
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
