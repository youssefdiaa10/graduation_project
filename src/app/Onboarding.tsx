import { onboardingData } from "../utils/constants"
import { Link, Links } from "react-router-dom"
import { motion } from "framer-motion"
import { slideInFromDown, slideInFromLeft, slideInFromRight, slideInFromTop } from '../utils/motion';

const Onboarding = () => {
  return (
    <motion.section
    initial="hidden"
    animate="visible"
    className="overflow-hidden"
    >
        <div className="rounded-bl-[500px] rounded-br-[500px] bg-img-onboarding py-20">

            <div className="flex flex-col items-center">
                <motion.div variants={slideInFromTop(1)}>
                    <h1 className="text-secondary-color text-2xl font-bold italic mb-6"><span className="text-[50px]">Unlimited Books, and more</span> <br /></h1>
                    <h1 className="text-secondary-color text-2xl font-bold italic">Ready to Read? Enter your email/phone number <br /> to create or restart your membership.</h1>
                    <div className="mt-7 flex">
                        <Link to={"/login"}>
                            <motion.button
                            variants={slideInFromLeft(1.5)}
                            whileHover={{backgroundColor: "#0261A0"}}
                            style={{backgroundColor: "#003659"}}
                            className="text-[30px] py-2 italic text-white px-6 font-bold rounded-2xl">
                                Login
                            </motion.button>
                        </Link>
                        <Link to={"/signup"}>
                            <motion.button
                            variants={slideInFromRight(1.5)}
                            whileHover={{backgroundColor: "#0261A0"}}
                            style={{backgroundColor: "#003659"}}
                            className="ml-5 text-[30px] py-2 italic text-white px-6 font-bold rounded-2xl">
                                Sign up
                            </motion.button>
                        </Link>
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
