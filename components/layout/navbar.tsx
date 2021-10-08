import React, { useState, Fragment } from "react";
import { UserIcon } from "@heroicons/react/solid";
import { Dialog, Transition } from "@headlessui/react";
import axios from "axios";
import Alert from "@/components/layout/alert";

const Navbar = ({ passResults }: any) => {
  let [isOpen, setOpen] = useState(false);

  const [success, setSuccess] = useState(false);

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
        // console.log("Uploaded.");
        setSuccess(true);
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

  const setStatus = (status: boolean) => {
    setSuccess(status);
  };

  return (
    <>
      <div className="navbar_wrapper">
        <div className="navbar_logo">
          <div className="flex my-auto space-x-2 font-bold">
            <UserIcon className="w-6 h-6" />
            <p className="tracking-tight">MyUnsplash</p>
          </div>
          <input
            className="navbar_search"
            placeholder="Search by name"
            onChange={(e) => {
              search(e.target.value);
            }}
          />
        </div>
        <div className="flex ml-4 mt-2 md:mt-0">
          <button
            onClick={openModal}
            className="navbar_button"
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
              <div className="navbar_modal_container">
                <Dialog.Title className="font-bold tracking-tight">
                  Add a Photo
                </Dialog.Title>
                {success && (
                  <Alert
                    setStatus={setStatus}
                    message="Photo successfully added."
                  />
                )}
                <div className="flex flex-col mt-2 space-y-2">
                  <label className="font-thin tracking-tight">Label</label>
                  <input
                    placeholder="Lorem ipsum dolor.."
                    className="navbar_modal_input"
                    value={values.name}
                    name="name"
                    onChange={onChange}
                  />
                  <label className="font-thin tracking-tight">Photo URL</label>
                  <input
                    placeholder="https://image.unsplash/90384"
                    className="navbar_modal_input"
                    name="photoURL"
                    onChange={onChange}
                  />
                </div>
                <div className="flex float-right space-x-2 mt-4">
                  <button
                    type="button"
                    className="modal_cancel_button"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="modal_submit_button"
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
