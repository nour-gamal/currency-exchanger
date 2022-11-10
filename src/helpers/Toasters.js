import { toast } from "react-toastify";

const props = {
  position: "bottom-center",
  autoClose: 1500,
  rtl: true,
  hideProgressBar: true,
  progress: 0,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
};

export const toastSuccess = (message) => {
  toast.success(message, props);
};

export const toastError = (message) => {
  if (message) {
    toast.error(message, props);
  } else {
    toast.error("An Error Occured", props);
  }
};
