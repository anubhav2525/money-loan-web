"use client";
import React, { useState } from "react";
import { Spotlight } from "@/components/ui/spotlight";
import { List, CardType } from "@/components/public/landing-page/List/List";

const FAQPage = () => {
  const [loader, setloader] = useState(false);

  const LoadMoreButton = () => {
    return (
      <button
        className="px-8 py-2 rounded-full relative bg-slate-700 text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600"
        type="button"
        onClick={() => setloader(!loader)}
      >
        <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
        {loader ? (
          <div className="flex justify-center gap-x-2 items-center">
            <svg
              aria-hidden="true"
              className="w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
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
            <span>Loading</span>
          </div>
        ) : (
          <div className="relative z-20">Load More</div>
        )}
      </button>
    );
  };
  return (
    <div className="min-h-screen bg-slate-100/[0.96] dark:bg-black/[0.90] antialiased  ">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="blue" />
      <div className="pt-24 px-4 md:w-[80%] mx-auto flex flex-col antialiased items-center justify-center relative overflow-hidden">
        <h1 className="mt-2 px-4 md:mt-0 text-3xl md:text-4xl mb-6 md:mb-12 font-bold text-black/70 dark:text-white/75">
          Frequently Asked Questions
        </h1>
        <List content={cards} />
        <div className="pt-10">
          <LoadMoreButton />
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
const cards: CardType[] = [
  {
    title: "Summertime Sadness1",
    content: () => {
      return (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          temporibus iure non officia? Ipsum magnam autem vitae sed corrupti
        </p>
      );
    },
  },
  {
    title: "Summertime Sadness2",
    content: () => {
      return (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          temporibus iure non officia? Ipsum magnam autem vitae sed corrupti
          repellat quibusdam expedita vero reiciendis itaque nulla voluptas
          perspiciatis explicabo eveniet exercitationem, recusandae molestias
          inventore velit est, ea, atque deleniti delectus. Optio voluptatibus
          delectus atque quam qui accusamus nobis necessitatibus nesciunt cumque
          corrupti tempore libero labore, quisquam enim exercitationem id
          sapiente iusto, hic totam molestiae assumenda. Animi voluptates
          dolores sed vero consequuntur vel sequi obcaecati nihil voluptatibus!
          Beatae distinctio labore magnam illum ab repellat quos similique
        </p>
      );
    },
  },
  {
    title: "Summertime Sadness4",
    content: () => {
      return (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          temporibus iure non officia? Ipsum magnam autem vitae sed corrupti
          repellat quibusdam expedita vero reiciendis itaque nulla voluptas
          perspiciatis explicabo eveniet exercitationem, recusandae molestias
          inventore velit est, ea, atque deleniti delectus. Optio voluptatibus
          delectus atque quam qui accusamus nobis necessitatibus nesciunt cumque
          corrupti tempore libero labore, quisquam enim exercitationem id
          sapiente iusto, hic totam molestiae assumenda. Animi voluptates
          dolores sed vero consequuntur vel sequi obcaecati nihil voluptatibus!
          Beatae distinctio labore magnam illum ab repellat quos similique
          tenetur ut numquam, accusamus autem eaque cumque optio reprehenderit
          modi obcaecati, quaerat quibusdam alias nisi?
        </p>
      );
    },
  },
  {
    title: "Summertime Sadness5",
    content: () => {
      return (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          temporibus iure non officia? Ipsum magnam autem vitae sed corrupti
          repellat quibusdam expedita vero reiciendis itaque nulla voluptas
          perspiciatis explicabo eveniet exercitationem, recusandae molestias
          inventore velit est, ea, atque deleniti delectus. Optio voluptatibus
          delectus atque quam qui accusamus nobis necessitatibus nesciunt cumque
          corrupti tempore libero labore, quisquam enim exercitationem id
          sapiente iusto, hic totam molestiae assumenda. Animi voluptates
          dolores sed vero consequuntur vel sequi obcaecati nihil voluptatibus!
          Beatae distinctio labore magnam illum ab repellat quos similique
          tenetur ut numquam, accusamus autem eaque cumque optio reprehenderit
          modi obcaecati, quaerat quibusdam alias nisi?
        </p>
      );
    },
  },
  {
    title: "Summertime Sadness3",
    content: () => {
      return (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          temporibus iure non officia? Ipsum magnam autem vitae sed corrupti
          repellat quibusdam expedita vero reiciendis itaque nulla voluptas
          perspiciatis explicabo eveniet exercitationem, recusandae molestias
          inventore velit est, ea, atque deleniti delectus. Optio voluptatibus
          delectus atque quam qui accusamus nobis necessitatibus nesciunt cumque
          corrupti tempore libero labore, quisquam enim exercitationem id
          sapiente iusto, hic totam molestiae assumenda. Animi voluptates
          dolores sed vero consequuntur vel sequi obcaecati nihil voluptatibus!
          Beatae distinctio labore magnam illum ab repellat quos similique
          tenetur ut numquam, accusamus autem eaque cumque optio reprehenderit
          modi obcaecati, quaerat quibusdam alias nisi?
        </p>
      );
    },
  },
];
