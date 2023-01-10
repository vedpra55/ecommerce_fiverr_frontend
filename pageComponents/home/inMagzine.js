import Image from "next/image";
import React, { useState } from "react";

export default function InMagzine() {
  return (
    <div className="mt-10 md:mt-20 xl:[115px]  myContainer">
      <div className="grid grid-cols-12 lg:gap-x-10 gap-y-5">
        <div className="col-span-12 lg:col-span-6 flex flex-col gap-y-5 justify-start items-start">
          <p className="font-bold text-xl md:text-3xl 3xl:text-[40px]">
            О нашем магазине
          </p>
          <p>
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness. No one
            rejects, dislikes, or avoids pleasure itself, because it is
            pleasure, but because those who do not know how to pursue pleasure
            rationally encounter consequences that are extremely painful.
          </p>
          <p>
            Nor again is there anyone who loves or pursues or desires to obtain
            pain of itself, because it is pain, but because occasionally
            circumstances occur in which toil and pain can procure him some
            great pleasure. To take a trivial example, which of us ever
            undertakes laborious physical exercise, except to obtain some
            advantage from it? But who has any right to find fault with a man
            who chooses to enjoy a pleasure that has no annoying consequences,
            or one who avoids a pain that produces no resultant pleasure?
          </p>
          <button
            className={` btnHover bg-main  w-[298px] h-[55px] rounded-[90px] px-10 py-2 text-white`}
          >
            Часто задаваемые вопросы
          </button>
        </div>
        <div className="col-span-12 lg:col-span-6 relative h-96 3xl:h-[556px] lg:h-full">
          <Image
            fill
            sizes="100vh"
            className="w-full h-full object-cover  rounded-xl"
            src="https://res.cloudinary.com/dtme6qv4c/image/upload/v1673353407/fiverr%20zara/modal.webp"
            alt="modal"
          />
        </div>
      </div>
    </div>
  );
}
