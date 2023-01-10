import React from "react";

export default function UnAuthenticatedProfile({
  setLoginModal,
  setRegisterModal,
}) {
  return (
    <div className="mt-5 flex flex-col justify-center items-center gap-y-5">
      <h1 className="text-3xl mb-10 font-semibold">
        Please Create Account or Login{" "}
      </h1>
      <div className="flex gap-x-5">
        <button
          onClick={() => setLoginModal(true)}
          className="btnHover rounded-[90px] bg-main text-white px-10 md:w-44 text-xl py-1"
        >
          Login
        </button>
        <button
          onClick={() => setRegisterModal(true)}
          className="btnHover rounded-[90px] bg-main text-white  px-10 md:w-44 text-xl py-1"
        >
          Register
        </button>
      </div>
    </div>
  );
}
