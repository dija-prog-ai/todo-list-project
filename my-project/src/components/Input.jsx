import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";



const Input = ({label,type,placeholder,onChange}) => {
    const [showPassword, setShowPassword] = useState(false);
    
    return ( <>
            <div className="space-y-4 flex flex-col pb-6"></div>
        <label htmlFor={label}> {label} </label>
        <input
          className="transition-all hover:opacity-80 duration-700 bg-gray-300 text-white flex items-center justify-center py-[6px]  px-4  gap-4 rounded-lg"
          onChange={onChange}
          id={label}
          placeholder={placeholder}
          type={
            type !== "password" ? type : !showPassword ? "password" : "text"
          }
        />
             {type === "password" && (
          <div className="absolute hover:cursor-pointer right-3 top-1/2 transform -translate-y-1/2">
            {showPassword ? (
              <EyeOff size={16} onClick={() => setShowPassword(false)} />
            ) : (
              <Eye size={16} onClick={() => setShowPassword(true)} />
            )}
          </div>
        )}
    </> );
}
 
   
 
export default Input;