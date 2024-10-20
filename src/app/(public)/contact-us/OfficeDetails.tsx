"use client";
import React from "react";

const OfficeDetails = () => {
  const contacts = [
    {
      title: "Customer Support",
      description: "Get help with your loan inquiries.",
      metaData: "Available during business hours.",
      details: [
        { type: "Phone", value: "+1 800-123-4567" },
        { type: "Email", value: "support@loanapp.com" },
        { type: "Working Hours", value: "Monday to Friday, 9 AM - 6 PM (EST)" },
      ],
    },

    {
      title: "Office Address",
      description: "Visit us at our office.",
      metaData: "Open for appointments.",
      details: [
        {
          type: "Address",
          value: "123 Finance Street, Suite 100, Cityville, State, ZIP",
        },
      ],
    },
  ];

  const socialMedia = {
    title: "Social Media",
    description: "Follow us on social media for updates.",
    metaData: "Connect with us online.",
    details: [
      {
        type: "Facebook",
        link: "facebook.com/loanapp",
        className:
          "p-2 flex items-center rounded-full justify-center text-white bg-blue-700/95 hover:bg-blue-600",
        icon: <FacebookIcon />,
      },
      {
        type: "X.com",
        link: "x.com/loanapp",
        className:
          "p-2 flex items-center rounded-full justify-center text-white bg-gray-950 hover:bg-gray-800",
        icon: <XIcon />,
      },
      {
        type: "LinkedIn",
        link: "linkedin.com/company/loanapp",
        className:
          "p-2 flex items-center rounded-full justify-center text-white bg-sky-800 hover:bg-sky-700",
        icon: <LinkedInIcon />,
      },
      {
        type: "Youtube",
        link: "youtube.com/loanapp",
        className:
          "p-2 flex items-center rounded-full justify-center text-white bg-red-600 hover:bg-red-700",
        icon: <YoutubeIcon />,
      },
    ],
  };

  return (
    <div className="w-full h-full grid grid-cols-1 gap-4">
      {contacts.map((item, index) => (
        <div
          className="border rounded-lg  bg-white dark:bg-black dark:border-neutral-800 p-6 shadow-md"
          key={index}
        >
          <h3 className="text-xl font-bold dark:text-white text-slate-800/90 mb-2">
            {item.title}
          </h3>
          <p className="text-neutral-600 dark:text-neutral-300 mb-4">
            {item.description}
          </p>

          <ul className="list-none mt-2 text-xs space-y-2">
            {item.details.map((detail, index) => (
              <li
                key={index}
                className="text-neutral-700 dark:text-neutral-300"
              >
                <strong>{detail.type}:</strong> {detail.value}
              </li>
            ))}
          </ul>
          <p className="text-neutral-500 text-xs dark:text-neutral-400 italic mt-4">
            {item.metaData}
          </p>
        </div>
      ))}
      <div className="border rounded-lg  bg-white dark:bg-black dark:border-neutral-800 p-6 shadow-md">
        <h3 className="text-xl font-bold dark:text-white text-slate-800/90 mb-2">
          {socialMedia.title}
        </h3>
        <p className="text-neutral-600 dark:text-neutral-300 mb-4">
          {socialMedia.description}
        </p>

        {/* social links */}
        <div className="w-full flex gap-x-2 items-center">
          {socialMedia.details.map((item, index) => (
            <div key={index}>
              <a href={item.link} className={item.className}>
                {item.icon}
              </a>
            </div>
          ))}
        </div>
        <p className="text-neutral-500 text-xs dark:text-neutral-400 italic mt-4">
          {socialMedia.metaData}
        </p>
      </div>
    </div>
  );
};

export default OfficeDetails;

const XIcon = () => {
  return (
    <svg
      aria-hidden="true"
      className="w-5 h-5 "
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" />
    </svg>
  );
};

const FacebookIcon = () => {
  return (
    <svg
      aria-hidden="true"
      className="lg:w-6 lg:h-6 w-5 h-5 "
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        fillRule="evenodd"
        d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

const LinkedInIcon = () => {
  return (
    <svg
      aria-hidden="true"
      className="lg:w-6 lg:h-6 w-5 h-5 "
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        fillRule="evenodd"
        d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
        clipRule="evenodd"
      />
      <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
    </svg>
  );
};

const YoutubeIcon = () => {
  return (
    <svg
      className="lg:w-6 lg:h-6 w-5 h-5 "
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        fillRule="evenodd"
        d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
