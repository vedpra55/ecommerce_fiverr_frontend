import React, { useState } from "react";
import { useRouter } from "next/router";
import { imageUrl } from "../../helper/imageUrl";
import Image from "next/image";
import Link from "next/link";
import Modal from "./modal";
import { toast } from "react-hot-toast";

export default function AdminOrderModal({ isOpen, setIsOpen, order, adminId }) {
  const createdAt = new Date(order.createdAt);
  const router = useRouter();
  const [statusText, setText] = useState(order.statusDelivery);

  async function handleShippingDetails() {
    if (statusText) {
      const URL = "http://localhost:4000/api/order/updateShippingState";
      const data = {
        orderId: order._id,
        uid: adminId,
        shipping: statusText,
      };

      const response = await fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const resData = await response.json();

      if (response.ok) {
        if (resData) {
          toast.success("Shipping status updated");
          setIsOpen(false);
          window.location.reload();
          router.push("/admin?tab=1");
        }
      }
      if (!response.ok) {
        toast.error("Something goes wrong");
        setIsOpen(false);
      }
    } else {
      toast.error("Invaild text");
    }
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className=" w-[350px] h-full md:w-[540px] 3xl:w-[600px]  rounded-[20px] bg-white py-5 md:py-[50px] px-5 md:px-[70px]">
        <div className="flex justify-center">
          <p className="text-[32px]  font-bold">Details</p>
        </div>
        <div className="pt-5">
          <h4 className=" text-xl font-medium pb-2">Products</h4>
          <hr />
          {order.products.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-12 my-2 gap-x-5 items-start"
            >
              <Link
                href={`/${item.productId}?brand=${item.brand}`}
                className="col-span-3 relative h-36"
              >
                <Image
                  fill
                  sizes="25vh"
                  className="w-full h-full rounded-md hover:shadow-xl"
                  src={imageUrl(item.image)}
                  alt={item.name}
                />
              </Link>
              <div className="col-span-9 flex flex-col gap-y-1">
                <p>{item.name}</p>
                <p>Brand : {item.brand}</p>
                <p>Selected Size : {item.selectedSize}</p>
                <p>Quantity : {item.quantity}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="pt-5">
          <h4 className=" text-xl font-medium pb-2">Order Details</h4>
          <hr />
          <div className="flex flex-col gap-y-1 mt-2">
            <p>
              Order Data : {createdAt.getDate()} /{createdAt.getMonth() + 1} /
              {createdAt.getFullYear()}
            </p>
            <p>Total Amount : {order.totalAmount} ₽</p>
            <p>Discount : {order.discount} ₽</p>
            <p>Shipping : {order.shippingPrice} ₽</p>
            <p>isPaid : {order.isPaid ? "Order is Paid" : "Order Not Paid"} </p>
            <div className="flex flex-wrap gap-y-2 items-center gap-x-3">
              <p>Status Of Delivery :</p>
              <input
                className=" border border-gray-400 rounded-md focus:outline-main px-2 py-1"
                type={"text"}
                value={statusText}
                onChange={(e) => setText(e.target.value)}
              />
              <button
                onClick={handleShippingDetails}
                className=" btnHover bg-main text-white py-1 px-2 rounded-[90px]"
              >
                Edit
              </button>
            </div>
          </div>
        </div>
        <div className="pt-5">
          <h4 className=" text-xl font-medium pb-2">Shipping Details</h4>
          <hr />
          <div className="flex flex-col gap-y-1 mt-2">
            <p>Name : {order.shippingAddress.userName}</p>
            <p>Email : {order.shippingAddress.email}</p>
            <p>Phone no : {order.shippingAddress.phoneNumber}</p>
            <p>Landmark : {order.shippingAddress.landMark}</p>
            <p>Zipcode : {order.shippingAddress.zipCode}</p>
            <p>City : {order.shippingAddress.city}</p>
            <p>State : {order.shippingAddress.state}</p>
          </div>
        </div>
      </div>
    </Modal>
  );
}
