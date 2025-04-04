import Icon from "../components/Icon"
import image from "../assets/signup_grad_proj_img.jpeg"
import { signup_inputs } from "../utils/inputs"
import Input from "../components/Input"

const Signup = () => {
  return (
    <div className="flex justify-evenly h-screen">
      <div className="mt-16">
        <div className="">
            <Icon/>
        </div>
        <div className="px-14">
            <div className="mt-14">
                <h1 className="italic text-[32px] font-bold text-main-color">Create Your Account</h1>
                <form action="" className="my-10" method="post">
                    {/* <div className="flex flex-col my-4">
                        <label htmlFor="my-name" className="text-[18px] font-bold italic">Name</label>
                        <input type="text" id="my-name" className="border border-sky-400 py-1 px-1.5 outline-sky-400 rounded-2xl placeholder:italic placeholder:text-[15px]" placeholder="Enter your Name"/>
                    </div>
                    <div className="flex flex-col my-4">
                        <label htmlFor="my-email" className="text-[18px] font-bold italic">Email</label>
                        <input type="email" id="my-email" className="border border-sky-400 py-1 px-1.5 outline-sky-400 rounded-2xl placeholder:italic placeholder:text-[15px]" placeholder="Enter your Email"/>
                    </div>
                    <div className="flex flex-col my-4">
                        <label htmlFor="my-password" className="text-[18px] font-bold italic">Password</label>
                        <input type="password" id="my-password" className="border border-sky-400 py-1 px-1.5 outline-sky-400 rounded-2xl placeholder:italic placeholder:text-[15px]" placeholder="Enter your password"/>
                    </div>
                    <div className="flex flex-col my-4">
                        <label htmlFor="my-re-password" className="text-[18px] font-bold italic">Confirm Password</label>
                        <input type="password" id="my-re-password" className="border border-sky-400 py-1 px-1.5 outline-sky-400 rounded-2xl placeholder:italic placeholder:text-[15px]" placeholder="Re-enter the password"/>
                    </div> */}
                    {signup_inputs.map(input => (
                      <Input
                      div_class={input.div_class}
                      label_class={input.label_class}
                      label_text={input.label_text}
                      input_id={input.input_id}
                      input_type={input.input_type}
                      input_class={input.input_class}
                      placeholder={input.placeholder}
                      />
                    ))}
                </form>
                <button type="submit" className="mt-2 text-white bg bg-main-color w-full py-2 rounded-3xl font-bold">Sign up</button>
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
