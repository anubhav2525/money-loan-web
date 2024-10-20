"use client";
import React, { useState } from "react";
import { Spotlight } from "@/components/ui/spotlight";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  BottomGradient,
  LabelInputContainer,
} from "@/components/form-container/FormContainer";
import Alert, { AlertProps } from "@/components/common/Alert/Alert";
import { useForm, SubmitHandler } from "react-hook-form";
import OfficeDetails from "./OfficeDetails";

const ContactPage = () => {
  const [notificationStatus, setNotificationStatus] = useState<string>(""); // Use empty string to hide the alert initially
  const [notificationMessage, setNotificationMessage] = useState<string>(""); // Message for alert
  const [notificationDescription, setNotificationDescription] =
    useState<string>(""); // Description for alert

  return (
    <main className="min-h-screen bg-slate-100/[0.96] dark:bg-black/[0.90] antialiased">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="blue" />
      <div className="pt-24 px-4 w-full md:w-[90%] mx-auto flex flex-col antialiased items-center justify-center relative overflow-hidden">
        <h1 className="mt-2 px-4 md:mt-0 text-3xl md:text-4xl mb-6  font-bold text-black/70 dark:text-white/75">
          Contact Us
        </h1>

        <p className="text-sm md:text-xl font-medium text-black/70 dark:text-white/75">
          We're here to help with all your loan inquiries.
        </p>

        <div className="w-full sm:w-[70%] md:w-[40%] py-2">
          {/* Alert Component */}
          {notificationStatus && (
            <Alert
              status={notificationStatus}
              message={notificationMessage}
              description={notificationDescription}
              notification={notificationStatus}
              setNotification={setNotificationStatus}
            />
          )}
        </div>

        <div className="py-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
          <OfficeDetails />

          <ContactForm
            setNotificationStatus={setNotificationStatus}
            setNotificationMessage={setNotificationMessage}
            setNotificationDescription={setNotificationDescription}
          />
        </div>
      </div>
    </main>
  );
};

export default ContactPage;

/* handling form*/
interface FormData {
  fullName: string;
  email: string;
  contactNumber: string;
  message: string;
}

interface ContactFormProps {
  setNotificationStatus: (status: AlertProps["status"]) => void;
  setNotificationMessage: (message: string) => void;
  setNotificationDescription: (description: string) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({
  setNotificationStatus,
  setNotificationMessage,
  setNotificationDescription,
}) => {
  // React Hook Form setup
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  // Asynchronous submit function
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      // Simulate async operation (e.g., API call)
      await new Promise((resolve) => setTimeout(resolve, 5000));

      // If successful
      setNotificationStatus("success");
      setNotificationMessage("Message Sent Successfully");
      setNotificationDescription(
        "Thank you for reaching out to us. We will get back to you shortly."
      );

      // Reset the form
      reset();
    } catch (error) {
      // If there's an error
      setNotificationStatus("error");
      setNotificationMessage("Error Sending Message");
      setNotificationDescription("An error occurred. Please try again later.");
    }
  };

  return (
    <div className=" w-full shadow-md rounded-md md:rounded-lg p-4 md:p-8 bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200 text-center">
        Get in Touch
      </h2>
      <form className="my-8" onSubmit={handleSubmit(onSubmit)}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="fullName">Full Name</Label>
          <Input
            id="fullName"
            placeholder="John Doe"
            {...register("fullName", {
              required: "Full name is required.",
              minLength: {
                value: 5,
                message: "Min 5 characters",
              },
              maxLength: {
                value: 40,
                message: "Max 40 characters",
              },
            })}
          />
          {errors.fullName && (
            <p className="text-red-500 text-xs mt-1">
              {errors.fullName.message}
            </p>
          )}
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="youremailaddress@xyz.com"
            type="email"
            {...register("email", {
              required: "Email address is required.",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Email address is invalid.",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="contactNumber">Contact number</Label>
          <Input
            id="contactNumber"
            placeholder="1234567890"
            type="tel"
            {...register("contactNumber", {
              required: "Contact number is required.",
              pattern: {
                value: /^\d{10}$/,
                message: "Contact number must be a 10-digit number.",
              },
            })}
          />
          {errors.contactNumber && (
            <p className="text-red-500 text-xs mt-1">
              {errors.contactNumber.message}
            </p>
          )}
        </LabelInputContainer>

        <LabelInputContainer className="mb-8">
          <Label htmlFor="message">Your Message</Label>
          <Input
            id="message"
            placeholder="Type your message..."
            {...register("message", { required: "Message is required." })}
          />
          {errors.message && (
            <p className="text-red-500 text-xs mt-1">
              {errors.message.message}
            </p>
          )}
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600  dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] flex items-center justify-center"
          type="submit"
          disabled={isSubmitting} // Disable button while submitting
        >
          {isSubmitting ? (
            <span className="loader">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            </span> // You can customize the loader here
          ) : (
            "Send Message"
          )}
          <BottomGradient />
        </button>
      </form>
    </div>
  );
};
