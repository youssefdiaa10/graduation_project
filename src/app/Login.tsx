import Icon from "../components/Icon"
import image from "../assets/login_grad_proj_img.jpeg"

const Login = () => {
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
                        <input type="email" id="my-email" className="border border-sky-400 py-1 px-1.5 outline-sky-400 rounded-2xl placeholder:italic placeholder:text-[15px]" placeholder="Enter your Email"/>
                    </div>
                    <div className="flex flex-col my-4">
                        <label htmlFor="my-password" className="text-[18px] font-bold italic">Password</label>
                        <input type="password" id="my-password" className="border border-sky-400 py-1 px-1.5 outline-sky-400 rounded-2xl placeholder:italic placeholder:text-[15px]" placeholder="Enter your password"/>
                    </div>
                </form>
                <button type="submit" className="mt-6 text-white bg bg-main-color w-full py-2 rounded-3xl font-bold">Login</button>
                <h1 className="mt-2 text-center">You don't have an account? <span className="text-blue-500">Sign up</span></h1>
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
