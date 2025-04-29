import Icon from "../../components/Icon"
import image from "../assets/signup/signup_grad_proj_img.jpeg"
import { useState } from "react"
// import { useUserStore } from "../store/authStore"
import { useNavigate } from "react-router-dom"

// import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Signup = () => {

  // const [email, setEmail] = useState<string>("")
  // const [password, setPassword] = useState<string>("")

  // const setUser = useUserStore(state => state.setUser)
  // const navigate = useNavigate()


  //   function handleSignup() {

  //     setUser({email, password})

  //     navigate("/login")

  //     console.log(`Signup ${email}`)
  //     console.log(`Signup ${password}`)

  // }




  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);

  const user = {
    name: "",
    email: "",
    password: "",
    rePassword: "",
    // phone: "",
  };

  const valid = Yup.object({
    name: Yup.string()
      .required("Name Required")
      .min(3, "Name min length is 3")
      .max(20, "Name max length is 20"),
    email: Yup.string()
      .required("Email Required")
      .email("Email pattern is Invalid"),
    // phone: Yup.string()
    //   .required("Phone Required")
    //   .matches(/^01[0125][0-9]{8}$/),
    password: Yup.string()
      .required("Password Required")
      .matches(/^[a-zA-Z][a-zA-Z0-9]{6,9}$/),
    rePassword: Yup.string()
      .required("Re-password Required")
      .oneOf([Yup.ref("password")]),
  });




  // const navigate = useNavigate();





  // async function submitForm(value) {
  //   setLoading(true);

  //   const { data } = await axios
  //     .post("https://dummyjson.com/users", value)
  //     .catch((error) => {
  //       console.log(error);

  //       setError(error.response.data.message);

  //       setLoading(false);
  //     });

  //   if (data.message === "success") {
  //     setLoading(false);

  //     localStorage.setItem("token", data.token);

  //     navigate("/login");
  //   }
  // }




  // function submitForm(value){
  //   console.log(value)
  // }

  // const formik = useFormik({
  //   initialValues: user,

  //   onSubmit: submitForm,

  //   validationSchema: valid,
  // });





  return (
    <div className="flex justify-evenly h-screen">
      <div className="mt-16">
        <div className="">
            <Icon/>
        </div>
        <div className="px-14">
            <div className="mt-14">
                <h1 className="italic text-[32px] font-bold text-main-color">Create Your Account</h1>

                <form className="my-10" onSubmit={formik.handleSubmit}>

                    <div className="flex flex-col my-4">
                        <label htmlFor="my-name" className="text-[18px] font-bold italic">Name</label>
                        <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" id="my-name" className="border border-sky-400 py-1 px-1.5 outline-sky-400 rounded-2xl placeholder:italic placeholder:text-[15px]" placeholder="Enter your Name"/>
                        {formik.errors.name && formik.touched.name ? (<div className="bg-red-400 text-red-800 py-3 px-5">{formik.errors.name}</div>) : ("")}
                    </div>

                    <div className="flex flex-col my-4">
                        <label htmlFor="my-email" className="text-[18px] font-bold italic">Email</label>
                        <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="email" id="my-email" className="border border-sky-400 py-1 px-1.5 outline-sky-400 rounded-2xl placeholder:italic placeholder:text-[15px]" placeholder="Enter your Email"/>
                        {formik.errors.email && formik.touched.email ? (<div className="bg-red-400 text-red-800 py-3 px-5">{formik.errors.email}</div>) : ("")}
                    </div>

                    <div className="flex flex-col my-4">
                        <label htmlFor="my-password" className="text-[18px] font-bold italic">Password</label>
                        <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="password" id="my-password" className="border border-sky-400 py-1 px-1.5 outline-sky-400 rounded-2xl placeholder:italic placeholder:text-[15px]" placeholder="Enter your password"/>
                        {formik.errors.password && formik.touched.password ? (<div className="bg-red-400 text-red-800 py-3 px-5">{formik.errors.password}</div>) : ("")}
                    </div>

                    <div className="flex flex-col my-4">
                        <label htmlFor="my-re-password" className="text-[18px] font-bold italic">Confirm Password</label>
                        <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="password" id="my-re-password" className="border border-sky-400 py-1 px-1.5 outline-sky-400 rounded-2xl placeholder:italic placeholder:text-[15px]" placeholder="Re-enter the password"/>
                        {formik.errors.rePassword && formik.touched.rePassword ? (<div className="bg-red-400 text-red-800 py-3 px-5">{formik.errors.rePassword}</div>) : ("")}
                    </div>

                </form>
                <button disabled={!(formik.isValid && formik.dirty)} type="submit" className="mt-2 text-white bg bg-secondary w-full py-2 rounded-3xl font-bold">Sign up</button>

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
