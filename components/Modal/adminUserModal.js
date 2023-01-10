import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Modal from "./modal";

export default function AdminUserModal({ isOpen, setIsOpen, user, adminUser }) {
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

  const createdAt = new Date(user.createdAt);
  const { register, handleSubmit, reset } = useForm();

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

  useEffect(() => {
    reset({ ...defaulValue });
  }, []);

  async function handeEditClientDetails(data) {
    const userData = {
      adminId: adminUser?._id,
      userId: user?._id,
      name: data.name,
      sirName: data.sirName,
      phoneNumber: data.phoneNumber,
      password: data.password,
      address: {
        zipCode: data.zipCode,
        city: data.city,
        state: data.state,
        landMark: data.landMark,
      },
    };
    const URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/account/adminEditUser`;
    const response = await fetch(URL, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });
    if (response.ok) {
      toast.success("Client edited sucessfully");
    }
    if (!response.ok) {
      toast.error("Something goes wrong");
    }
    setIsOpen(false);
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className=" w-[350px] h-full md:w-[540px] 3xl:w-[600px]  rounded-[20px] bg-white py-5 md:py-[50px] px-5 md:px-[70px]">
        <div className="flex justify-center">
          <p className="text-[32px]  font-bold">Client Details</p>
        </div>
        <p className="mt-[30px]">
          Joined On : {createdAt.getDate()} /{createdAt.getMonth() + 1} /
          {createdAt.getFullYear()}
        </p>
        <form
          onSubmit={handleSubmit((data) => handeEditClientDetails(data))}
          className="flex flex-col gap-y-[15px] mt-[10px]"
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
            регистр
          </button>
        </form>
      </div>
    </Modal>
  );
}
