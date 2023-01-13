import React from "react";
import { useForm } from "react-hook-form";
import Modal from "./modal";
import { useAuthHooks } from "../../hooks/authHooks";

export default function LoginModal({ isOpen, setIsOpen }) {
  const fields = [
    {
      name: "email",
      type: "email",
      required: true,
      minLength: 3,
      placeholder: "E-mail",
    },
    {
      name: "password",
      type: "password",
      required: true,
      minLength: 6,
      placeholder: "Пароль",
    },
  ];
  const { register, handleSubmit } = useForm();

  const { login, error, isLoading } = useAuthHooks();

  async function handleLogin(data) {
    const userData = {
      email: data.email,
      password: data.password,
    };
    await login(userData);

    setIsOpen(false);
  }

  return (
    <Modal setIsOpen={setIsOpen} isOpen={isOpen}>
      <div className=" w-[350px] h-full md:w-[540px]  rounded-[20px] bg-white py-5 md:py-[50px] px-5 md:px-[70px]">
        <div className="flex justify-center">
          <p className="text-[32px]  font-bold">Вход</p>
        </div>
        <form
          onSubmit={handleSubmit((data) => handleLogin(data))}
          className="flex flex-col gap-y-[15px] mt-[30px]"
        >
          {fields.map((item) => (
            <input
              key={item.name}
              {...register(item.name)}
              className=" mt-[10px] h-[55px] accountInput"
              type={item.type}
              placeholder={item.placeholder}
              required={item.required}
              minLength={item.minLength}
            />
          ))}
          <button
            className={` btnHover font-semibold  bg-main  w-full h-[55px] rounded-[90px] px-10 py-2 text-white`}
          >
            {isLoading ? "Loading..." : "Войти"}
          </button>
          {error && <p className="mt-5">{error}</p>}
        </form>
      </div>
    </Modal>
  );
}
