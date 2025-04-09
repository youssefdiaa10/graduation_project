import Icon from "../components/Icon"
import image from "../assets/login_grad_proj_img.jpeg"
import { Link, useNavigate } from "react-router-dom"
import { login_inputs, users } from "../utils/constants"
import Input from "../components/Input"
import { useState } from "react"
import { useUserStore } from "../store/authStore"

const Login = () => {

  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const setUser = useUserStore(state => state.setUser)

  const isValid = useUserStore(state => state.isValid)

  const navigate = useNavigate()


  function handleLogin(){

    setUser({email, password})

    // for (const element of users) {
    //   if (element.email === email) {
    //     if (element.password === password) {
    //       navigate("/blog")
    //       break
    //     }
    //   }
    // }

    if (isValid(email, password)) {
      navigate("/blog")
    }



    console.log(`Login ${email}`)
    console.log(`Login ${password}`)

    // if (isValid(email, password) === true) {
      // console.log("Logged in!!!")
    // }
  }


  return (
    <div className="flex justify-evenly h-screen">
      <div className="mt-16 ">
        <div className="">
            <Icon/>
        </div>
        <div className="px-14">
            <div className="mt-14">
                <h1 className="italic text-[32px] font-bold text-main-color">Login Into Your Account!</h1>
                <form action="" className="my-10" method="get">
                    <div className="flex flex-col my-4">
                        <label htmlFor="my-email" className="text-[18px] font-bold italic">Email</label>
                        <input onChange={(event) => setEmail(event.target.value)} type="email" id="my-email" className="border border-sky-400 py-1 px-1.5 outline-sky-400 rounded-2xl placeholder:italic placeholder:text-[15px]" placeholder="Enter your Email"/>
                    </div>
                    <div className="flex flex-col my-4">
                        <label htmlFor="my-password" className="text-[18px] font-bold italic">Password</label>
                        <input onChange={(event) => setPassword(event.target.value)} type="password" id="my-password" className="border border-sky-400 py-1 px-1.5 outline-sky-400 rounded-2xl placeholder:italic placeholder:text-[15px]" placeholder="Enter your password"/>
                    </div>
                </form>
                <button onClick={() => {handleLogin()}} type="submit" className="mt-6 text-white bg bg-main-color w-full py-2 rounded-3xl font-bold">Login</button>
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
