import { Eye, EyeOff } from "lucide-react";
import Nav from "../Nav";
import { useState } from "react";

const Password = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Nav />
      <section className="dark:bg-slate-900 min-h-screen flex flex-col items-center justify-center ">
        <span className="text-3xl my-4 dark:text-slate-50">Show/Hide Password</span>
        <div className="bg-slate-200 dark:bg-slate-700 h-30 w-80 flex items-center justify-center rounded-md gap-1">
          <input
            type={showPassword ? 'text' : 'password'}
            className="dark:text-slate-50 font-semibold border-slate-700 dark:border-slate-50 border-2 rounded-md p-4"
            placeholder="Enter password"
          />
          <div
            onClick={() => setShowPassword(!showPassword)}
            className="border-slate-700 dark:border-slate-50 border-2 p-2 rounded-md cursor-pointer"
          >
            {showPassword ? (
              <Eye className="dark:text-slate-50" height={40} width={40} />
            ) : (
              <EyeOff className="dark:text-slate-50" height={40} width={40} />
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Password;
