type TextLineProps = {
    name: string;
    placeholder: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextLine = function({ name, placeholder, value, onChange }: TextLineProps) {

    return(
        <input
            type="text"
            name={ name }
            value={ value } 
            onChange={ onChange }
            placeholder={ placeholder }
            className="bg-gray-100 text-gray-600 p-2 rounded-lg outline-red-400" 
        />
    );

};

export default TextLine;