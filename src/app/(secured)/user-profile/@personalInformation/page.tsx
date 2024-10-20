import React from "react";
import { FormField } from "../page"; // Make sure the import path is correct
import { useForm } from "react-hook-form";
import { UserProfileInformation } from "../page";

const PersonalInformation = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<UserProfileInformation>(); // Using context provided by FormProvider

  const onSubmit = async (data: UserProfileInformation) => {
    // Handle form submission
    console.log(data);
  };

  return (
    <form className="w-full h-full" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h2 className="text-base py-2 px-4 rounded-t-lg border-2 border-slate-100 dark:border-slate-800 text-black bg-slate-50 dark:bg-slate-900 dark:text-slate-200 font-bold">
          <div className="w-full flex flex-row items-center justify-between">
            <div>Personal Information</div>
            <div>
              <button
                type="submit"
                className="px-3 py-1 text-black dark:bg-black dark:text-white bg-white text-xs rounded-md font-semibold dark:hover:bg-slate-800 hover:bg-slate-50"
              >
                Save
              </button>
            </div>
          </div>
        </h2>
      </div>

      <div className="border-x-2 dark:border-slate-800 border-b-2 rounded-b-md border-slate-100 w-full">
        {/* First Name Field */}
        <FormField
          label="First name"
          placeholder="John"
          container="border-dotted border-b border-slate-200 dark:border-slate-500"
          id="personalDetails.firstName"
          type="text"
          maxLength={50}
          register={register}
          validation={{
            required: "First name is required",
            minLength: {
              value: 4,
              message: "Must be at least 2 characters long",
            },
            maxLength: {
              value: 20,
              message: "Must be at most 20 characters long",
            },
          }}
          error={errors.personalDetails?.firstName?.message}
        />

        {/* Last Name Field */}
        <FormField
          label="Last name"
          placeholder="Deo"
          container="border-dotted border-b border-slate-200 dark:border-slate-500"
          id="personalDetails.lastName"
          type="text"
          maxLength={50}
          register={register}
          validation={{
            required: "Last name is required",
            minLength: {
              value: 4,
              message: "Must be at least 2 characters long",
            },
            maxLength: {
              value: 20,
              message: "Must be at most 20 characters long",
            },
          }}
          error={errors.personalDetails?.lastName?.message}
        />

        {/* middle Name Field */}
        <FormField
          label="Middle name (Optional)"
          placeholder=""
          container="border-dotted border-b border-slate-200 dark:border-slate-500"
          id="personalDetails.middleName"
          type="text"
          maxLength={50}
          register={register}
          validation={{
            minLength: {
              value: 2,
              message: "Must be at least 2 characters long",
            },
            maxLength: {
              value: 40,
              message: "Must be at most 40 characters long",
            },
          }}
          error={errors.personalDetails?.middleName?.message}
        />

        {/* Gender */}
        <FormField
          label="Gender"
          placeholder="Male"
          container="border-dotted border-b border-slate-200 dark:border-slate-500"
          id="personalDetails.gender"
          type="text"
          maxLength={10}
          register={register}
          validation={{
            required: "Gender is required",
            minLength: {
              value: 3,
              message: "Must be at least 4 characters long",
            },
            maxLength: {
              value: 40,
              message: "Must be at most 40 characters long",
            },
          }}
          error={errors.personalDetails?.gender?.message}
        />
        {/* Date of Birth */}
        <FormField
          label="Date of birth"
          placeholder="DD/MM/YYYY"
          container="border-dotted border-b border-slate-200 dark:border-slate-500"
          id="personalDetails.dob"
          type="text"
          register={register}
          maxLength={10}
          validation={{
            required: "Date of birth is required",
            maxLength: {
              value: 10,
              message: "Must be at most 40 characters long",
            },
          }}
          error={errors.personalDetails?.dob?.message}
        />
        {/* Marital Status*/}
        <FormField
          label="Marital Status"
          placeholder="Single"
          container="border-dotted border-b border-slate-200 dark:border-slate-500"
          id="personalDetails.maritalStatus"
          type="text"
          register={register}
          maxLength={10}
          validation={{
            required: "Marital status is required",
            maxLength: {
              value: 20,
              message: "Must be at most 20 characters long",
            },
          }}
          error={errors.personalDetails?.maritalStatus?.message}
        />
        {/* Fathers name*/}
        <FormField
          label="Father's name"
          placeholder="William "
          container="border-dotted border-b border-slate-200 dark:border-slate-500"
          id="personalDetails.fatherName"
          type="text"
          register={register}
          maxLength={10}
          validation={{
            required: "Father's name is required",
            minLength: {
              value: 3,
              message: "Must be at least 3 characters long",
            },
            maxLength: {
              value: 50,
              message: "Must be at most 50 characters long",
            },
          }}
          error={errors.personalDetails?.fatherName?.message}
        />
        {/* Nationality*/}
        <FormField
          label="Nationality"
          placeholder="Indian"
          container=""
          id="personalDetails.nationality"
          type="text"
          register={register}
          maxLength={10}
          validation={{
            required: "Nationality is required",
            minLength: {
              value: 3,
              message: "Must be at least 3 characters long",
            },
            maxLength: {
              value: 20,
              message: "Must be at most 20 characters long",
            },
          }}
          error={errors.personalDetails?.nationality?.message}
        />
      </div>
    </form>
  );
};

export default PersonalInformation;
