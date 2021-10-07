import React, { useState, Fragment } from "react";
import { UserIcon } from "@heroicons/react/solid";
import { Dialog, Transition } from "@headlessui/react";
import axios from "axios";

const Navbar = ({ passResults }: any) => {
  let [isOpen, setOpen] = useState(false);

  const [values, setValue] = useState({
    name: "",
    photoURL: "",
  });

  const onChange = (e: any) => {
    const { value, name } = e.target;
    setValue((prevState) => ({ ...prevState, [name]: value }));
  };

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  const submitPhoto = async () => {
    try {
      const response = await axios.post<any>("/api/photo/insert", values);
      const result = await response.data;
      if (result.message === "Ok.") {
        console.log("Uploaded.");
        setValue({ name: "", photoURL: "" });
      }
    } catch (e: any) {
      console.log(e.message);
    }
  };

  const search = async (search: string) => {
    try {
      const response = await axios.post<any>("/api/photo/search", { search });
      const result = await response.data;
      passResults(result);
    } catch (e: any) {
      console.log(e.message);
    }
  };

  return (
    <>
      <div className="flex flex-wrap md:justify-between w-full p-6">
        <div className="flex w-full md:w-3/4 lg:w-3/5 space-x-4">
          <div className="flex my-auto space-x-2 font-bold">
            <UserIcon className="w-6 h-6" />
            <p className="tracking-tight">MyUnsplash</p>
          </div>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:ring-2 focus:ring-blue-200 focus:shadow-outline focus:outline-none focus:bg-white focus:border-blue-500"
            placeholder="Search by name"
            onChange={(e) => {
              search(e.target.value);
            }}
          />
        </div>
        <div className="flex ml-4 mt-2 md:mt-0">
          <button
            onClick={openModal}
            className="bg-green-500 hover:bg-green-700 focus:ring-4 focus:ring-green-200 text-white tracking-tight font-semibold py-2 px-4 shadow-lg rounded-lg transition duration-300"
          >
            Add a photo
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
                <Dialog.Title className="font-bold tracking-tight">
                  Add a Photo
                </Dialog.Title>
                <div className="flex flex-col mt-2 space-y-2">
                  <label className="font-thin tracking-tight">Label</label>
                  <input
                    placeholder="Lorem ipsum dolor.."
                    className="shadow bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                    value={values.name}
                    name="name"
                    onChange={onChange}
                  />
                  <label className="font-thin tracking-tight">Photo URL</label>
                  <input
                    placeholder="https://image.unsplash/90384"
                    className="shadow bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                    name="photoURL"
                    onChange={onChange}
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
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-green-900 shadow bg-green-100 border border-transparent rounded-md hover:bg-green-200 focus:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-green-500"
                    onClick={submitPhoto}
                  >
                    Submit
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

export default Navbar;
