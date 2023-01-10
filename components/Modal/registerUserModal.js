import React from "react";
import { useForm } from "react-hook-form";
import Modal from "./modal";
import { useSignup } from "../../hooks/useSignup";

export default function RegisterUserModal({ isOpen, setIsOpen }) {
  const fields = [
    {
      id: 1,
      name: "name",
      type: "text",
      required: true,
      placeholder: "Ваше имя",
      minLength: 3,
    },
    {
      id: 2,
      name: "sirName",
      type: "text",
      required: true,
      placeholder: "Фамилия",
      minLength: 3,
    },
    {
      id: 3,
      name: "phoneNumber",
      type: "number",
      required: false,
      placeholder: "Номер телефона",
      minLength: 10,
    },
    {
      id: 4,
      name: "email",
      type: "email",
      required: true,
      minLength: 3,
      placeholder: "E-mail",
    },
    {
      id: 5,
      name: "password",
      type: "password",
      required: true,
      minLength: 6,
      placeholder: "Пароль",
    },
  ];
  const { register, handleSubmit } = useForm();
  const { signup, error, isLoading } = useSignup();

  async function handleRegister(data) {
    const userData = {
      name: data.name,
      sirName: data.sirName,
      phoneNumber: data.phoneNumber,
      email: data.email,
      password: data.password,
    };
    await signup(userData);

    setIsOpen(false);
  }

  return (
    <Modal setIsOpen={setIsOpen} isOpen={isOpen}>
      <div className=" w-[350px] h-full md:w-[540px]  rounded-[20px] bg-white py-5 md:py-[50px] px-5 md:px-[70px]">
        <div className="flex justify-center">
          <p className="text-[32px]  font-bold">Регистрация</p>
        </div>
        <form
          onSubmit={handleSubmit((data) => handleRegister(data))}
          className="flex flex-col gap-y-[15px] mt-[30px]"
        >
          {fields.map((item) => (
            <div key={item.id.toString()}>
              <input
                {...register(item.name)}
                className=" mt-[10px] h-[55px] accountInput"
                type={item.type}
                placeholder={item.placeholder}
                required={item.required}
                minLength={item.minLength}
              />
            </div>
          ))}

          <button
            className={` btnHover font-semibold  bg-main  w-full h-[55px] rounded-[90px] px-10 py-2 text-white`}
          >
            {isLoading ? "Loading..." : "регистр"}
          </button>
          {error && <p className="mt-5">{error}</p>}
        </form>
      </div>
    </Modal>
  );
}
