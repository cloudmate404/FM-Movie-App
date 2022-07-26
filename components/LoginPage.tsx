import React, { Dispatch, SetStateAction, useState } from "react";

import { useForm, SubmitHandler } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../hooks/useAuth";

interface Inputs {
  email: string;
  password: string;
}
interface Props {
  isLogin: boolean;
  setIsLogin: Dispatch<SetStateAction<boolean>>;
}
function LoginPage({ isLogin, setIsLogin }: Props) {
  const [login, setLogin] = useState(false);
  const { signIn, signUp } = useAuth();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  // to implement the sign in and sign up functions
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
    // if setLogin is true, signIn
    if (login) {
      await signIn(data.email, data.password);
    }
  };
  return (
    <div className="flex flex-col mx-auto gap-3 min-w-[310px] max-w-[400px] min-h-[365px] space-y-5 bg-[#161D2F] px-6 rounded-2xl md:min-w-[400px] md:max-w-[500px] py-8 md:mb-32 ">
      <h1 className="text-[32px] font-light ">Login</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        {/* register your input into the hook by invoking the "register" function */}
        <button
          // onClick={signIn}
          className="flex items-center justify-center w-[100%] transition bg-slate-100 text-[#161D2F] py-2 rounded-md hover:bg-slate-500 gap-1 "
        >
          <FcGoogle />
          Log in with Google
        </button>
        <h4 className="text-center">or</h4>
        <input
          type="email"
          placeholder="Email Address"
          className="input"
          {...register("email", { required: true })}
        />

        {/* include validation with required or other standard HTML validation rules */}
        <input
          type="password"
          placeholder="Password"
          className="input"
          {...register("password", { required: true })}
        />
        {/* errors will return when field validation fails  */}
        {/* {errors.exampleRequired && <span>This field is required</span>} */}

        <button
          className="cursor-pointer w-[100%] bg-red-700 text-white py-3 outline-none rounded-md mt-8 transition hover:bg-white hover:text-[#161D2F]"
          type="submit"
          onClick={() => setLogin(true)}
        >
          Login to your account
        </button>
        <hr />

        <div className="text-center text-white/75 flex gap-2 justify-center">
          Don't have an account?{/*   */}
          <button
            className="text-[red] transition hover:underline"
            type="submit"
            onClick={() => {
              setIsLogin(false);
            }}
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
