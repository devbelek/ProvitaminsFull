import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

type DrawerProps = {
  title?: string;
  description?: string;
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Drawer({ children, isOpen, setIsOpen }: DrawerProps) {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        onClose={() => setIsOpen(false)}
        className="fixed inset-0 z-[10000] overflow-y-auto max-h-screen"
      >
        <div className="flex w-full min-h-full">
          <Dialog.Overlay className="z-40 fixed inset-0" />
          <Transition.Child
            as={Fragment}
            enter="transition ease-out duration-300 transform"
            enterFrom="translate-y-[90vh]"
            enterTo="translate-y-0"
            leave="transition ease-out duration-300 transform"
            leaveFrom="translate-y-0"
            leaveTo="translate-y-[100vh]"
          >
            <div className="relative z-[9999] w-full bg-white min-h-screen">
              {children}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
