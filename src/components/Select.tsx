type SelectProps = {
    name: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    children: React.ReactNode;
};

const Select = function ({ name, value, onChange, children }: SelectProps) {
    return (
        <select name={name} value={value} onChange={onChange} className="bg-gray-100 text-gray-600 p-2 rounded-lg outline-red-400">
            {children}
        </select>
    );
};

export default Select;
