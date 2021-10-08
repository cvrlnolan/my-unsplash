import React, { useState, Fragment } from "react";
import Image from "next/image";
import axios from "axios";
import { TrashIcon } from "@heroicons/react/solid";
import { Dialog, Transition } from "@headlessui/react";

const ImageCard = ({ photo }: any) => {
  let [isOpen, setOpen] = useState(false);

  const [success, setSuccess] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  const deletePhoto = async () => {
    try {
      const response = await axios.post<any>("/api/photo/delete", {
        id: photo._id,
      });
      const data = await response.data;
      if (data.message === "Deleted.") {
        // console.log("Deleted.");
        setSuccess(true);
      }
    } catch (e: any) {
      console.log(e.message);
    }
  };

  return (
    <>
      <div className="w-full h-full relative overflow-hidden">
        <Image
          alt="image_alt"
          src={photo.photoURL}
          width="450"
          height="400"
          objectFit="cover"
          className="rounded hover:shadow-2xl object-cover"
        />
        <div className="delete_wrapper">
          <p className="font-thin">{photo.name}</p>
          <button
            onClick={openModal}
            className="delete_button"
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
              <div className="image_modal_container">
                <Dialog.Title className="font-bold tracking-tight">
                  Are you sure?
                </Dialog.Title>
                {/* <div className="flex flex-col mt-2 space-y-2">
                  <label className="font-thin tracking-tight">Password</label>
                  <input
                    type="password"
                    placeholder="https://image.unsplash/90384"
                    className="shadow bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                  />
                </div> */}
                {success && (
                  <p className="text-center tracking-tight text-red-400">
                    Photo successfully deleted.
                  </p>
                )}
                <div className="flex float-right space-x-2 mt-4">
                  <button
                    type="button"
                    className="image_modal_cancel"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    aria-label="delete_button"
                    className="image_modal_submit"
                    onClick={deletePhoto}
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
