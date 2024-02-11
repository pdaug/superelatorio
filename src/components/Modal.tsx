import { useEffect } from "react";

type ModalProps = {
    show: boolean;
    setShow: (value: boolean) => void;
    message: string;
};

const Modal = function ({ show, setShow, message }: ModalProps) {
    useEffect(
        function () {
            let intervalId = 0;
            if (show) {
                intervalId = setInterval(function () {
                    setShow(false);
                }, 3000);
            }
            return function () {
                return clearInterval(intervalId);
            };
        },
        [show, setShow],
    );
    return (
        <>
            {show && (
                <div className="absolute h-screen w-screen flex items-center justify-center top-0 left-0 bg-[rgba(0,0,0,.5)] z-50">
                    <div className="bg-white rounded-lg p-4 shadow-lg">
                        {message}
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;
