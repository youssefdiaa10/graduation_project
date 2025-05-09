import Icon from "../components/Icon"
import image from "../assets/signup/signup_grad_proj_img.jpeg"
import { useForm, SubmitHandler, Controller } from "react-hook-form"
// import { yupResolver } from "@hookform/resolvers/yup"
// import { signupSchema } from "../utils/schema";
import { useUserStore } from "../store/authStore";
import { Link } from "react-router-dom";


interface ISignup {
  email: string;
  phone: string;
  username: string;
  password: string;
}

const Signup = () => {

  const { message, emailConfirmationLink, signup } = useUserStore()

  const { handleSubmit, control, formState } = useForm<ISignup>({
    defaultValues: {
      email: "",
      phone: "",
      username: "",
      password: "",
    },
    // resolver: yupResolver(signupSchema)
  })
  const onSubmit: SubmitHandler<ISignup> = (data) => {
    // console.log(data)
    signup(data.email, data.phone, data.username, data.password)
  }

  return (
    <div className="flex justify-evenly h-screen">
      <div className="mt-16">
        <div className="">
          <Icon text="Bookly" text_className="text-[32px] font-bold italic ml-5 text-main-color" />
        </div>
        <div className="px-14">
          <div className="mt-14">
            <h1 className="text-[32px] font-bold text-main-color">Create Your Account</h1>


            <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
              <div className="flex flex-col my-4">
                <Controller
                  name="username"
                  control={control}
                  render={({ field }) => <>
                    <label
                      htmlFor="my-name"
                      className="text-[18px] font-bold"
                    >
                      Name
                    </label>
                    <input
                      {...field}
                      type="text"
                      id="my-name"
                      className="border border-sky-400 py-1 px-3.5 outline-sky-400 rounded-2xl placeholder:italic placeholder:text-[15px]"
                      placeholder="Enter your Name" />
                    {formState.errors.username && formState.touchedFields.username ? (<div className="bg-red-200 text-red-900 rounded-2xl mt-1.5 py-3 px-3">{formState.errors.username.message}</div>) : ("")}
                  </>
                  }
                />
              </div>


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
                      type="email"
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
                  name="phone"
                  control={control}
                  render={({ field }) => <>
                    <label
                      htmlFor="my-phone"
                      className="text-[18px] font-bold"
                    >
                      Phone
                    </label>
                    <input
                      {...field}
                      type="tel"
                      id="my-phone"
                      className="border border-sky-400 py-1 px-3.5 outline-sky-400 rounded-2xl placeholder:italic placeholder:text-[15px]"
                      placeholder="Enter your Phone" />
                    {formState.errors.phone && formState.touchedFields.phone ? (<div className="bg-red-200 text-red-900 rounded-2xl mt-1.5 py-3 px-3">Invalid Phone</div>) : ("")}
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
                className={`mt-2 mb-4 disabled:cursor-not-allowed text-white bg-main disabled:bg-secondary w-full py-2 rounded-3xl font-bold`}
              >
                {
                  message !== "Registration successful"
                    ?
                    "Sign up"
                    :
                    <a
                      href={emailConfirmationLink}
                    >
                      Confirm
                    </a>
                }
              </button>
            </form>

            <h1 className="mt-2 text-center">You have an account ? <br />
              <Link to={"/login"}>
                <span className="text-blue-500">Login</span>
              </Link>
            </h1>

          </div>
        </div>
      </div>
      <div className="my-8">
        <img src={image} alt="cup of coffee on a table" className="h-full rounded-4xl" width={480} />
      </div>
    </div>
  )
}

export default Signup
