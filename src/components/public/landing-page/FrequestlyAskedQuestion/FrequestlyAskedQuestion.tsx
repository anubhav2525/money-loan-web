"use client";
import React from "react";
import { List } from "../List/List";
import { CardType } from "../List/List";

const FrequentlyAskedQuestion = () => {
  return (
    <div className="py-10 md:py-20 px-4 md:px-0 h-full w-full antialiased relative overflow-hidden bg-slate-50 dark:bg-black">
      <h2 className="max-w-7xl mx-auto text-2xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans pb-6">
        Frequently Asked Questions ?
      </h2>
      <div className="max-w-7xl mx-auto">
        <List content={cards} />
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestion;

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
