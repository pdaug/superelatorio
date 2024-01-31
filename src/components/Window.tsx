type WindowProps = {
    children: React.ReactNode;
};

const Window = function({ children }: WindowProps) {

    return (
        <div className="absolute h-svh w-svw flex items-center justify-center z-50">
            <div className="sm:w-[640px] sm:h-auto m-8 w-full flex flex-col gap-4 p-4 bg-white rounded-lg shadow-lg">
                { children }
            </div>
        </div>
    );

};

export default Window;