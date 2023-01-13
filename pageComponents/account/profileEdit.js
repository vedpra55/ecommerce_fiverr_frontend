import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAuthHooks } from "../../hooks/authHooks";

export default function ProfileEdit({ user }) {
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
      phoneNumber: parseInt(data.phoneNumber),
      address: {
        zipCode: data.zipCode,
        city: data.city,
        state: data.state,
        landMark: data.landMark,
      },
      token: user.token,
    };
    await profileEdit(userData);
  }

  useEffect(() => {
    reset({ ...defaulValue });
  }, []);

  return (
    <div className="col-span-12 md:col-span-8 3xl:col-span-9">
      <h5 className="font-bold text-2xl mb-5">Профиль</h5>
      <form
        onSubmit={handleSubmit((data) => handleProfileEdit(data))}
        className="flex flex-col gap-y-[25px]"
      >
        {fields.map((item) => (
          <div key={item.id}>
            <label className="">{item.placeholder}</label>
            <input
              {...register(item.name)}
              className=" mt-[10px] h-[55px] accountInput"
              placeholder="Ваше имя"
              type={item.type}
            />
          </div>
        ))}
        <div className="flex justify-end">
          <button
            type="submit"
            className={`btnHover bg-main text-white lg:w-[305px] lg:h-[55px] flex justify-center items-center px-20 py-2 rounded-[90px]`}
          >
            {isLoading ? "Loading..." : "Сохранить"}
          </button>
        </div>
        {error && <p className="mt-5">{error}</p>}
      </form>
    </div>
  );
}
