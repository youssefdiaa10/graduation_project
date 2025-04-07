import { onboardingData } from "../utils/constants"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { slideInFromDown, slideInFromLeft, slideInFromRight, slideInFromTop } from '../utils/motion';

const Onboarding = () => {
  return (
    <motion.section
    initial="hidden"
    animate="visible"
    className="overflow-hidden"
    >
        <div className="rounded-bl-[200px] rounded-br-[500px] py-6 bg-img-onboarding">
            <motion.div
            variants={slideInFromRight(1.5)}
            className="py-3 flex justify-end">
                <Link to={"/login"}>
                    <button className="py-4 px-7 rounded-2xl text-2xl mr-9 text-white font-bold bg-main-color italic">Sign in</button>
                </Link>
            </motion.div>
            <div className="flex flex-col items-center">
                <motion.div variants={slideInFromTop(1)}>
                    <h1 className="text-secondary-color text-2xl font-bold italic mb-6"><span className="text-[50px]">Unlimited Books, and more</span> <br /> Starts at $10</h1>
                    <h1 className="text-secondary-color text-2xl font-bold italic">Ready to Read? Enter your email/phone number <br /> to create or restart your membership.</h1>
                    <div className="mt-7 flex">
                        <motion.input variants={slideInFromLeft(2)} type="text" className="rounded-2xl outline-none pl-4 pr-10 py-4 bg-main-color focus:text-white  placeholder:font-bold placeholder:italic placeholder:text-[16px] placeholder:text-gray-300" placeholder="Email address or Phone"/>
                        <motion.button variants={slideInFromRight(2)} className="ml-5 italic bg-main-color text-white px-6 font-bold rounded-2xl">Get Started</motion.button>
                    </div>
                </motion.div>
            </div>
        </div>
        <div className="grid grid-flow-col gap-5 mt-10 mx-5">
            {onboardingData.map((data) => (
                <motion.div variants={slideInFromDown(0.5)} className="flex flex-col items-center" key={data.text}>
                    <img src={data.image_src} alt={data.text} width={300} />
                    <h1 className="text-center italic font-light text-[20px]">{data.text}</h1>
                </motion.div>
            ))}
        </div>
    </motion.section>
  )
}

export default Onboarding
