import React from "react";
import { FormField, FormText } from "../page"; // Make sure the import path is correct
import { useForm } from "react-hook-form";
import { UserProfileInformation } from "../page";

const ContactInformation = () => {
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
            <div>Contact Information</div>
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
        {/* phone number Field */}
        <FormField
          label="Phone number"
          placeholder="1234567890"
          container="border-dotted border-b border-slate-200 dark:border-slate-500"
          id="contactDetails.phoneNumber"
          type="text"
          maxLength={50}
          register={register}
          validation={{
            required: "Phone number is required",
            minLength: {
              value: 10,
              message: "Must be at least 10 characters long",
            },
            maxLength: {
              value: 10,
              message: "Must be at most 10 characters long",
            },
          }}
          error={errors.contactDetails?.phoneNumber?.message}
        />

        {/* email address Field */}
        <FormField
          label="Email address"
          placeholder="abc@xyz.com"
          container="border-dotted border-b border-slate-200 dark:border-slate-500"
          id="contactDetails.email"
          type="email"
          maxLength={50}
          register={register}
          validation={{
            required: "Email address is required",
            minLength: {
              value: 10,
              message: "Must be at least 10 characters long",
            },
            maxLength: {
              value: 40,
              message: "Must be at most 40 characters long",
            },
          }}
          error={errors.contactDetails?.email?.message}
        />

        {/* Street address Field */}
        <FormField
          label="Street address"
          placeholder="abc@xyz.com"
          container="border-dotted border-b border-slate-200 dark:border-slate-500"
          id="contactDetails.address.streetAddress"
          type="text"
          maxLength={100}
          register={register}
          validation={{
            required: "Email address is required",
            minLength: {
              value: 10,
              message: "Must be at least 10 characters long",
            },
            maxLength: {
              value: 40,
              message: "Must be at most 40 characters long",
            },
          }}
          error={errors.contactDetails?.address?.streetAddress?.message}
        />

        {/* landmark address Field */}
        <FormField
          label="Landmark (Optional)"
          placeholder="Near Overbridge"
          container="border-dotted border-b border-slate-200 dark:border-slate-500"
          id="contactDetails.address.landmark"
          type="text"
          maxLength={50}
          register={register}
          validation={{
            minLength: {
              value: 10,
              message: "Must be at least 10 characters long",
            },
            maxLength: {
              value: 50,
              message: "Must be at most 50 characters long",
            },
          }}
          error={errors.contactDetails?.address?.landmark?.message}
        />

        {/* city Field */}
        <FormField
          label="City"
          placeholder="Delhi"
          container="border-dotted border-b border-slate-200 dark:border-slate-500"
          id="contactDetails.address.city"
          type="text"
          maxLength={20}
          register={register}
          validation={{
            minLength: {
              value: 3,
              message: "Must be at least 3 characters long",
            },
            maxLength: {
              value: 20,
              message: "Must be at most 20 characters long",
            },
          }}
          error={errors.contactDetails?.address?.city?.message}
        />

        {/* state Field */}
        <FormField
          label="State"
          placeholder="New Delhi"
          container="border-dotted border-b border-slate-200 dark:border-slate-500"
          id="contactDetails.address.state"
          type="text"
          maxLength={20}
          register={register}
          validation={{
            minLength: {
              value: 2,
              message: "Must be at least 2 characters long",
            },
            maxLength: {
              value: 20,
              message: "Must be at most 20 characters long",
            },
          }}
          error={errors.contactDetails?.address?.state?.message}
        />

        {/* pincode  address Field */}
        <FormField
          label="Pincode"
          placeholder="000000"
          container="border-dotted border-b border-slate-200 dark:border-slate-500"
          id="contactDetails.address.pincode"
          type="number"
          maxLength={6}
          register={register}
          validation={{
            minLength: {
              value: 6,
              message: "Must be at least 6 characters long",
            },
            maxLength: {
              value: 6,
              message: "Must be at most 6 characters long",
            },
          }}
          error={errors.contactDetails?.address?.pincode?.message}
        />

        {/* Country field */}
        <FormField
          label="Country"
          placeholder="India"
          container=""
          id="contactDetails.address.country"
          type="text"
          maxLength={20}
          register={register}
          validation={{
            minLength: {
              value: 3,
              message: "Must be at least 3 characters long",
            },
            maxLength: {
              value: 20,
              message: "Must be at most 20 characters long",
            },
          }}
          error={errors.contactDetails?.address?.country?.message}
        />
      </div>
    </form>
  );
};

export default ContactInformation;
