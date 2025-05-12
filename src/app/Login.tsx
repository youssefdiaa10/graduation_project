import image from "../assets/login/login_grad_proj_img.jpeg"
import { Link, useNavigate } from "react-router-dom"
import Icon from './../components/Icon';
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../utils/schema";
import { useUserStore } from "../store/authStore";

interface ILogin {
  email: string;
  password: string;
}

const Login = () => {

  const navigate = useNavigate()
  const { user, login } = useUserStore()

  const { handleSubmit, control, formState } = useForm<ILogin>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginSchema)
  })

  const onSubmit: SubmitHandler<ILogin> = (data) => {
    login(data.email, data.password)
    if (user.isAdmin === true) {
      navigate("/admin")
    }
    else if (user.id !== null && user.id !== undefined) {
      localStorage.setItem("isAuth", "true")
      navigate("/category")
    }
  }

  return (
    <div className="flex justify-evenly h-screen">
      <div className="mt-16 ">
        <div className="">
          <Icon text="Bookly" text_className="text-[32px] font-bold italic ml-5 text-main-color" />
        </div>
        <div className="px-14">
          <div className="mt-14">
            <h1 className="text-[32px] font-bold text-main-color">Login Into Your Account!</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="my-10">
              <div className="flex flex-col my-4">
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => <>
                    <label
                      htmlFor="my-email"
                      className="text-[18px] font-bold"
                    >
                      Email
                    </label>
                    <input
                      {...field}
                      type="text"
                      id="my-email"
                      className="border border-sky-400 py-1 px-3.5 outline-sky-400 rounded-2xl placeholder:italic placeholder:text-[15px]"
                      placeholder="Enter your Email" />
                    {formState.errors.email && formState.touchedFields.email ? (<div className="bg-red-200 text-red-900 rounded-2xl mt-1.5 py-3 px-3">{formState.errors.email.message}</div>) : ("")}
                  </>
                  }
                />
              </div>

              <div className="flex flex-col my-4">
                <Controller
                  name="password"
                  control={control}
                  render={({ field }) => <>
                    <label
                      htmlFor="my-password"
                      className="text-[18px] font-bold"
                    >
                      Password
                    </label>
                    <input
                      {...field}
                      type="password"
                      id="my-password"
                      className="border border-sky-400 py-1 px-3.5 outline-sky-400 rounded-2xl placeholder:italic placeholder:text-[15px]"
                      placeholder="Enter your Password" />
                    {formState.errors.password && formState.touchedFields.password ? (<div className="bg-red-200 text-red-900 rounded-2xl mt-1.5 py-3 px-3">{
                      <div className="bg-red-200 text-red-900 rounded-2xl mt-1.5 py-1">
                        <p>Must be : </p>
                        <div className="flex flex-col">
                          <p>* Start with a letter (either uppercase or lowercase).</p>
                          <p>* Be between 6 and 9 characters in total.</p>
                          <p>* Can only contain letters (A-Z or a-z) and numbers (0-9)</p>
                        </div>
                      </div>
                    }</div>) : ("")}
                  </>
                  }
                />
              </div>

              <button
                disabled={!formState.isValid}
                type="submit"
                className="mt-6 disabled:cursor-not-allowed text-white bg-main disabled:bg-secondary w-full py-2 rounded-3xl font-bold"
              >
                Login
              </button>
            </form>

            <h1 className="mt-2 text-center">You don't have an account? <br />
              <Link to={"/signup"}>
                <span className="text-blue-500">Sign up</span>
              </Link>
            </h1>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <img src={image} alt="cup of coffee on a table" className="h-full rounded-4xl" width={480} />
      </div>
    </div>
  )
}

export default Login
