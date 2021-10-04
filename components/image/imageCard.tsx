import React, { useState, Fragment } from "react";
import Image from "next/image";
import testPic from "public/test.jpg";
import { TrashIcon } from "@heroicons/react/solid";
import { Dialog, Transition } from "@headlessui/react";

const ImageCard = () => {
  let [isOpen, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="w-full h-full relative overflow-hidden">
        <Image
          alt="image_alt"
          src={testPic}
          placeholder="blur"
          objectFit="cover"
          className="rounded hover:shadow-2xl object-cover"
        />
        <div className="absolute w-full h-full px-2.5 py-2.5 bottom-0 inset-x-0 bg-transparent cursor-pointer text-opacity-0 hover:text-opacity-100 text-white text-xs md:text-base text-center truncate leading-4 transition duration-300">
          <p className="font-thin">Image Name here</p>
          <button
            onClick={openModal}
            className="rounded-xl appearance-none float-right p-2 hover:bg-red-400"
          >
            <TrashIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title className="font-bold tracking-tight">Are you sure?</Dialog.Title>
                <div className="flex flex-col mt-2 space-y-2">
                  <label className="font-thin tracking-tight">Photo URL</label>
                  <input
                    placeholder="https://image.unsplash/90384"
                    className="shadow bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                  />
                </div>
                <div className="flex float-right space-x-2 mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-900 shadow bg-gray-100 border border-transparent rounded-md hover:bg-gray-200 focus:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-gray-500"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-red-900 shadow bg-red-100 border border-transparent rounded-md hover:bg-red-200 focus:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-red-500"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ImageCard;
