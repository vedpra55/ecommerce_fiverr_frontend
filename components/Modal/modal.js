import { Dialog } from "@headlessui/react";
import { AiOutlineClose } from "react-icons/ai";

export default function Modal({ children, isOpen, setIsOpen }) {
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      <div className="fixed inset-0 overflow-y-auto ">
        <div className="flex min-h-full items-center justify-center ">
          {/* The actual dialog panel  */}
          <Dialog.Panel className=" relative rounded-[20px] mx-auto  md:w-auto  bg-white">
            {/* ... */}
            <div className="absolute z-50 top-3 right-5">
              <button
                onClick={() => setIsOpen(false)}
                className="text-xl hover:text-main"
              >
                <AiOutlineClose />
              </button>
            </div>
            <div className="mt-2 md:mt-0">{children}</div>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
}

{
  /* Full-screen container to center the panel */
}
