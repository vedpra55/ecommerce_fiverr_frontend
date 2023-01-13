import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAuthHooks } from "../../hooks/authHooks";
import Modal from "./modal";

export default function AddressModal({ isOpen, setIsOpen, user }) {
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
      name: "zipCode",
      type: "Number",
      required: false,
      placeholder: "Zipcode",
      minLength: 3,
    },
    {
      id: 7,
      name: "city",
      type: "text",
      required: false,
      placeholder: "City",
      minLength: 3,
    },
    {
      id: 8,
      name: "state",
      type: "text",
      required: false,
      placeholder: "State",
      minLength: 3,
    },
    {
      id: 9,
      name: "landMark",
      type: "text",
      required: false,
      placeholder: "Landmark",
      minLength: 3,
    },
  ];
  const { register, handleSubmit, reset } = useForm();
  const { profileEdit, isLoading, error } = useAuthHooks();

  const defaulValue = {
    name: user.name,
    sirName: user.sirName,
    email: user.email,
    phoneNumber: user.phoneNumber,
    zipCode: user.address.zipCode,
    city: user.address.city,
    state: user.address.state,
    landMark: user.address.landMark,
  };

  async function handleProfileEdit(data) {
    const userData = {
      name: data.name,
      sirName: data.sirName,
      phoneNumber: data.phoneNumber,
      address: {
        zipCode: data.zipCode,
        city: data.city,
        state: data.state,
        landMark: data.landMark,
      },
      token: user.token,
    };
    await profileEdit(userData);
    setIsOpen(false);
  }

  useEffect(() => {
    reset({ ...defaulValue });
  }, []);

  return (
    <Modal setIsOpen={setIsOpen} isOpen={isOpen}>
      <div className=" w-[350px] h-full md:w-[540px]  rounded-[20px] bg-white py-5 md:py-[50px] px-5 md:px-[70px]">
        <div className="flex justify-center">
          <p className="text-[32px]  font-bold">Address</p>
        </div>
        <form
          onSubmit={handleSubmit((data) => handleProfileEdit(data))}
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
