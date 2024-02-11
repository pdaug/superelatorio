type TextMultilineProps = {
    name: string;
    lines: number;
    placeholder: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const TextMultiline = function ({
    name,
    lines,
    placeholder,
    value,
    onChange,
}: TextMultilineProps) {
    return (
        <textarea
            rows={lines}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="bg-gray-100 text-gray-600 p-2 rounded-lg outline-red-400"
        />
    );
};

export default TextMultiline;
