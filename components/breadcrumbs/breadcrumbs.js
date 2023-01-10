import Link from "next/link";
import React from "react";
import { AiOutlineRight } from "react-icons/ai";

export default function Breadcrumbs({ text }) {
  return (
    <div className="flex gap-x-5 items-center">
      <Link href={"/"}>
        <p className="text-main cursor-pointer underline">Главная</p>
      </Link>
      <AiOutlineRight />
      <p className="hover:text-main cursor-pointer active:text-[#94D9FF]">
        {text}
      </p>
    </div>
  );
}
