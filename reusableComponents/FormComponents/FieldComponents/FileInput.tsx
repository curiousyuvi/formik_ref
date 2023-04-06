import { Base64File } from "@/components/Dashboard/TabPanels/KycDetails/KycInterface";
import fileToBase64 from "@/helper/fileToBase64";
import genRandomID from "@/helper/genRandomID";
import { Dialog } from "@headlessui/react";
import { Blob } from "buffer";
import { ErrorMessage, useFormikContext } from "formik";
import React, { useMemo, useState, useCallback } from "react";
import { IoIosClose, IoMdCloseCircle } from "react-icons/io";
import ImageCapture from "react-image-data-capture";
import { BsCameraFill } from "react-icons/bs";

type Props = {
  label: string;
  id?: string;
  name: string;
  multiple?: boolean;
  placeholder?: string;
};

const FileInput = (props: Props) => {
  const { setFieldValue, values } = useFormikContext<any>();
  const [isCameraOpen, setIsCameraOpen] = useState<boolean>(false);
  // const [display, setDisplay] = useState<boolean>(false);
  const handleChange = async (event: any) => {
    const files = event.currentTarget?.files;
    // setDisplay(true);
    const validateFile = () => {
      return (
        !files || // Check if `files` is defined
        files.length === 0 || // Check if `files` is not an empty list
        Array.from(files).every((file: any) => file?.size <= 2_000_000)
      );
    };

    try {
      if (validateFile()) {
        if (props.multiple)
          Array.from(files).forEach(async (file: any) => {
            console.log("fileFromPicker", file);

            const base64 = await fileToBase64(file);
            if (values && base64)
              setFieldValue(props.name, [
                ...values[props.name],
                { name: file.name, base64 },
              ]);
          });
        else {
          console.log("fileFromPicker", files[0]);

          const base64 = await fileToBase64(files[0]);
          if (values && base64)
            setFieldValue(props.name, [{ name: files[0].name, base64 }]);
        }
        console.log(values, "upload Values kdksd");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = (name: string) => {
    if (values && setFieldValue) {
      setFieldValue(
        props.name,
        values[props.name].filter((uf: Base64File) => uf.name !== name)
      );
    }
  };

  const handleUFCamera = () => {
    setIsCameraOpen(true);
  };

  const config = useMemo(() => ({ video: true }), []);
  /*
    { video: true } - Default Camera View
    { video: { facingMode: environment } } - Back Camera
    { video: { facingMode: "user" } } - Front Camera
  */
  const [imgSrc, setImgSrc] = useState(null);
  const [imgFile, setImgFile] = useState(null);
  const onCapture = async (imageData: any) => {
    console.log("imageData", imageData);
    console.log("file", imageData.file);

    try {
      if (props.multiple) {
        const base64 = await fileToBase64(imageData.blob);
        if (values && base64)
          setFieldValue(props.name, [
            ...values[props.name],
            { name: imageData.file.name, base64 },
          ]);
      } else {
        const base64 = await fileToBase64(imageData.blob);
        if (values && base64)
          setFieldValue(props.name, [{ name: imageData.file.name, base64 }]);
      }
      console.log(values, "upload Values kdksd");
    } catch (err) {
      console.log(err);
    }
    setIsCameraOpen(false);
  };
  const onError = useCallback((error: any) => {
    console.log(error);
  }, []);

  return (
    <div className="flex flex-col justify-start items-start gap-1">
      <label htmlFor={props.id || props.name} className="text-sm text-gray-400">
        {props.label}
      </label>

      <div className=" rounded-lg px-3 py-2 w-[17rem] mobileLg:w-[21.7rem]">
        <div className="flex items-center gap-9">
          <div className="hidden mobileLg:block">
            <div className="w-32 h-8 px-3 py-3 cursor-pointer overflow-hidden bg-sky-300 text-dark-blue border-light-blue border-2 rounded-md text-sm  font-normal ouline-none relative flex justify-center items-center ">
              <input
                className="w-full h-full opacity-0 absolute text-sm mobileLg:text-xl "
                id={props.id}
                type="file"
                multiple={props.multiple}
                onChange={handleChange}
                accept="image/png, image/gif, image/jpeg"
              />
              Upload File
            </div>
          </div>
          <button type="button" className="text-sm" onClick={handleUFCamera}>
            <BsCameraFill className="text-4xl" />
          </button>
          <Dialog
            className="fixed z-50 w-full max-w-2xl m-4 top-[30%] left-[27%] bg-light-blue rounded-xl p-6 drop-shadow-lg"
            open={isCameraOpen}
            onClose={() => setIsCameraOpen(false)}
          >
            <Dialog.Panel>
              {/* <Dialog.Title>Deactivate account</Dialog.Title> */}

              <div className="flex flex-col gap-4 items-center rounded-lg">
                <ImageCapture
                  onCapture={onCapture}
                  onError={onError}
                  width={300}
                  userMediaConfig={config}
                />

                <button
                  type="button"
                  className="py-3 px-4 text-sm bg-red-500 text-white rounded-lg "
                  onClick={() => setIsCameraOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </Dialog.Panel>
          </Dialog>
          <p className="font-normal text-sm block mobileLg:hidden">
            {props.placeholder}
          </p>
        </div>
      </div>
      <div className="text-red-500 text-sm w-[300px]">
        <ErrorMessage name={props.name} />
      </div>
      <div className={`flex flex-wrap items-center gap-2 py-2`}>
        {values &&
          values[props.name]?.map((uf: Base64File) => (
            <div className="relative">
              <img
                src={uf.base64}
                className="h-24 rounded-sm aspect-square object-cover"
              />
              <button
                onClick={() => handleDelete(uf.name)}
                type="button"
                className="bg-red-500 absolute top-0 right-0 rounded-sm text-white"
              >
                <IoIosClose />
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FileInput;
