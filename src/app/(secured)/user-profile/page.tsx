"use client";
import React from "react";
import PersonalInformation from "./@personalInformation/page";
import ContactInformation from "./@contactInformation/page";

export interface UserProfileInformation {
  personalDetails: {
    firstName: string;
    lastName: string;
    middleName?: string;
    gender: string;
    dob: string;
    maritalStatus: string;
    fatherName: string;
    nationality: string;
  };

  contactDetails: {
    phoneNumber: string;
    alternatePhoneNumber: string;
    emergencyContactNumber?: string;
    email: string;
    secondaryEmail?: string;
    address: {
      streetAddress: string;
      landmark?: string;
      city: string;
      state: string;
      pincode: string;
      country: string;
      typeOfResidence: string;
      durationAtCurrentAddress: string;
    };
  };

  bankDetails: {
    accountNumber: string;
    bankName: string;
    branchName: string;
    ifscCode: string;
    accountHolderName: string;
    accountType: string;
    averageMonthlyBalance?: number;
    isVerified: boolean;
  };

  nationalId: {
    aadharCard: string;
    aadharCardDoc?: string;
    panCard: string;
    panCardDoc?: string;
  };
}

const UserProfile = () => {
  return (
    <div className="min-w-full p-4 md:p-6 min-h-full flex flex-col justify-center items-center">
      <div className="w-full pb-2">
        <h1 className="text-xl text-black dark:text-slate-300 md:text-2xl lg:text-3xl font-bold">
          Your Profile
        </h1>
      </div>
      <div className="w-full pt-4 h-full grid grid-cols-1 gap-2 lg:grid-cols-2">
        {/* personal information */}
        <PersonalInformation />
        {/* contact information  */}
        <ContactInformation />
      </div>
    </div>
  );
};

export default UserProfile;

export const FormField = ({
  label,
  id,
  type,
  container,
  placeholder,
  validation,
  register,
  error,
  maxLength,
}: {
  label: string;
  id: string;
  type: string;
  container: string;
  placeholder: string;
  maxLength?: number;
  validation?: any;
  register: any;
  error?: string;
}) => {
  return (
    <div className={`text-xs w-full grid grid-cols-3 p-2 ${container}`}>
      <label
        htmlFor={id}
        className="text-slate-500 dark:text-slate-300 w-full flex items-center"
      >
        {label}:
      </label>
      <div className="flex w-full bg-white dark:bg-black items-center p-1 col-span-2 duration-300 delay-200 rounded-md">
        <div className="w-full flex flex-col">
          <input
            type={type}
            name={id}
            id={id}
            maxLength={maxLength ? maxLength : ""}
            className="flex-1 focus:outline-none text-black dark:bg-black dark:text-white placeholder:text-slate-300 dark:placeholder:text-neutral-300"
            placeholder={placeholder}
            {...register(id, validation)}
          />
          <ErrorMessage message={error} />
        </div>
      </div>
    </div>
  );
};

export const FormText = ({
  label,
  id,
  container,
  placeholder,
  validation,
  register,
  error,
}: {
  label: string;
  id: string;
  container: string;
  placeholder: string;
  validation?: any;
  register: any;
  error?: string;
}) => {
  return (
    <div
      className={`text-xs w-full grid items-start grid-cols-3 p-2 ${container}`}
    >
      <label
        htmlFor={id}
        className="text-slate-500 dark:text-slate-300 w-full flex items-center"
      >
        {label}:
      </label>
      <div className="flex w-full bg-white dark:bg-black items-center p-1 col-span-2 duration-300 delay-200 rounded-md">
        <div className="w-full flex flex-col">
          <textarea
            name={id}
            id={id}
            className="flex-1 w-full focus:outline-none text-black dark:bg-black dark:text-white placeholder:text-slate-300 dark:placeholder:text-neutral-300"
            placeholder={placeholder}
            {...register(id, validation)}
          />
          <ErrorMessage message={error} />
        </div>
      </div>
    </div>
  );
};

const ErrorMessage = ({ message }: { message?: string }) => {
  return message ? (
    <p className="text-red-500 text-xs pt-2">{message}</p>
  ) : null;
};
