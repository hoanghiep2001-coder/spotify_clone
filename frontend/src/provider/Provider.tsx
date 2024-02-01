import { createContext, useState, ReactNode } from "react";

interface ContextType {
    exampleField: string// định nghĩa các trường và kiểu dữ liệu ở đây
}

const defaultValue: ContextType = {
    exampleField: "default value",
};
const context = createContext<ContextType>(defaultValue);

interface ProviderProps {
    children: ReactNode;
}

const Provider: React.FC<ProviderProps> = ({ children }) => {
    const [exampleField, setExampleField] = useState(defaultValue.exampleField);

    const value = {
        exampleField,
    }

    return (<context.Provider value={value}>{children}</context.Provider>);
}

export {Provider, context} ;