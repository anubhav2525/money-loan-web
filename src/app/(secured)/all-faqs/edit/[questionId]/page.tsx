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
  title: string;
  description: string;
  shortDescription: string;
  id: string;
  date: string;
};

const AllFaqsEdit = ({ params }: { params: { questionId: string } }) => {
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
    <div className="w-full rounded-lg p-4 md:p-8 shadow-input dark:border dark:border-slate-800 bg-white dark:bg-black">
      <h2 className="font-bold text-lg text-left text-neutral-800 dark:text-neutral-200">
        Update a Question: {params.questionId}
      </h2>

      <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="id">Question ID</Label>
          <Input
            id="id"
            placeholder=""
            type="text"
            value={params.questionId}
            readOnly
            disabled
            {...register("id", {
              required: "Please enter title",
              minLength: {
                value: 3,
                message: "Title must be at least 3 characters long",
              },
              maxLength: {
                value: 50,
                message: "Title cannot exceed 50 characters",
              },
            })}
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            placeholder=""
            type="text"
            {...register("title", {
              required: "Please enter title",
              minLength: {
                value: 3,
                message: "Title must be at least 3 characters long",
              },
              maxLength: {
                value: 50,
                message: "Title cannot exceed 50 characters",
              },
            })}
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="description">Description</Label>
          <Input
            id="description"
            placeholder="description"
            type="text"
            {...register("description", {
              required: "Please enter your last name",
              minLength: {
                value: 3,
                message: "Last name must be at least 3 characters long",
              },
              maxLength: {
                value: 50,
                message: "Last name cannot exceed 50 characters",
              },
            })}
          />
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
          )}
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="shortDescription">Short Description</Label>
          <Input
            id="shortDescription"
            placeholder=""
            type="text"
            {...register("shortDescription", {
              required: "Please enter your email address",
              minLength: {
                value: 3,
                message: "Title must be at least 3 characters long",
              },
              maxLength: {
                value: 50,
                message: "Title cannot exceed 50 characters",
              },
            })}
          />
          {errors.shortDescription && (
            <p className="text-red-500 text-sm">
              {errors.shortDescription.message}
            </p>
          )}
        </LabelInputContainer>

        <div className="w-full flex justify-end items-center md:pt-10 pt-5">
          <button
            className="w-full max-w-40 p-2 flex justify-center items-center gap-x-2 bg-black hover:opacity-75 dark:border dark:border-slate-800 rounded-md text-white"
            type="submit"
          >
            <div>Update</div>
            <BottomGradient />
          </button>
        </div>
      </form>
    </div>
  );
};

export default AllFaqsEdit;
