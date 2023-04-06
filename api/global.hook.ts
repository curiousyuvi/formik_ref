import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { personalDetailsAPI } from "./global.api";

export const usePersonalDetailsAPI = () => {
  const { mutate, isLoading, isSuccess } = useMutation(personalDetailsAPI, {
    onSuccess: (data) => {
      console.log(data);
      const message = "success";
      toast.success("successfully Saved");
    },
    onError: (err) => {
      console.log(err, "error");
    },
  });

  return { mutate, isSuccess };
};
