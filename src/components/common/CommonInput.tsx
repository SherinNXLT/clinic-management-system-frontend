import React from "react";

type CommonInputProps = {
    label: string;
    type?: string;
    value: string;
    placeholder?: string;
    autoComplete?: string;
    required?: boolean;
    icon?: React.ReactNode; // 👈 new prop
    error?: string; // 👈 new
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const CommonInput: React.FC<CommonInputProps> = ({
    label,
    type = "text",
    value,
    placeholder,
    autoComplete = "off",
    required = false,
    icon,
    error,
    onChange,
}) => {
    return (
        <div>
            {/* Label */}
            <label className="block text-sm font-medium text-gray-700 mb-1">
                {label}
            </label>

            {/* Input + Icon wrapper */}
            <div className="relative">
                {icon && (
                    <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                        {icon}
                    </span>
                )}
                <input
                    type={type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    autoComplete={autoComplete}
                    required={required}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-700 ${icon ? "pl-10" : ""
                        }`}
                />
                {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
            </div>
        </div>
    );
};

export default CommonInput;
