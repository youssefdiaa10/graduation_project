import { onboardingData } from "../utils/landing"
import bgURL from "../assets/onboarding_grad_proj_bg_img.png"

const Onboarding = () => {
  return (
    <div className="">
        <div className="rounded-bl-[200px] rounded-br-[500px] py-6 bg-[url(../assets/onboarding_grad_proj_bg_img.png)]">
            <div className="py-3 flex justify-end">
                <button className="py-4 px-7 rounded-2xl text-2xl mr-9 text-white font-bold bg-main-color italic">Sign in</button>
            </div>
            <div className="flex flex-col items-center">
                <div className="">
                <h1 className="text-secondary-color text-2xl font-bold italic mb-6"><span className="text-[50px]">Unlimited Books, and more</span> <br /> Starts at $10</h1>
                <h1 className="text-secondary-color text-2xl font-bold italic">Ready to Read? Enter your email/phone number <br /> to create or restart your membership.</h1>
                <div className="mt-7 flex">
                    <input type="text" className="rounded-2xl outline-none pl-4 pr-10 py-4 bg-main-color focus:text-white  placeholder:font-bold placeholder:italic placeholder:text-[16px] placeholder:text-gray-300" placeholder="Email address or Phone"/>
                    <button className="ml-5 italic bg-main-color text-white px-6 font-bold rounded-2xl">Get Started</button>
                </div>
                </div>
            </div>
        </div>
        <div className="grid grid-flow-col gap-4 mt-10">
            {onboardingData.map((data) => (
                <div className="flex flex-col items-center">
                    <img src={data.image_src} alt={data.text} width={300} />
                    <h1 className="text-center italic font-light text-[17px]">{data.text}</h1>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Onboarding
