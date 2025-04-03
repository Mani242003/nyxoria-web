
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import sample1 from "/sample.png";
import { BadgeCheck } from 'lucide-react';
import CustomCountContainer from "../ui/common/CustomCountContainer";
import AnimatedText from "../ui/AnimatedText";
import { Typewriter } from "react-simple-typewriter";
// import "@fontsource/orbitron";
export const Banner = () => {




    return (
        <section className="w-full  py-16 bg-white  " style={{ backgroundImage: "url('/')" }}>
            <div className="container mx-auto flex flex-col md:flex-row ">
                {/* Left Side */}
                <div className="md:w-1/2 pt-30 pl-12">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >

                        {/* <div className="w-5 rounded-full bg-gray-400 h-1"></div> */}

                        <AnimatedText
                            className=" spacing  text-black-900 font-bold mb-3 italic underline"
                            data="The Nyxoria Way to Infrastructure Expert Consulting - Empowering Growth for All"
                        />


                        <span className=" font-bold mb-4 mb-5 text-[55px] text-[#172E59] font-bold leading-none">
                            1-on-1
                        </span>&nbsp; &nbsp;
                        <span className="font-bold mb-4 mb-5 text-[55px] text-[#20A08F] font-bold leading-none">
                            <Typewriter
                                words={["Design", "Execution", "Planning", "Delay", "Quantum", "Claims & Costing", "Disputes", "Quality"]}
                                loop={true}
                                cursor
                                typeSpeed={200}
                                deleteSpeed={200}
                                delaySpeed={300}

                            />
                        </span><br />


                        <span className=" font-bold  text-[55px] text-[#172E59] font-bold leading-none">
                         Expert Opinions
                        </span>
                        {/* <p className="text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p> */}
                        <div className="py-6">
                            {positivePoints.map((point, index) => (
                                <p key={index} className="mb-2 flex items-center  text-[15px] font-bolder text-gray-900 ">
                                    <BadgeCheck className=" mr-2 text-[#20A08F]" size={17} />
                                    {point}
                                </p>
                            ))}
                        </div>
                        <div className="flex gap-12">
                            <CustomCountContainer num={100} id="true" text1="" text2="Sessions Booked" />
                            <CustomCountContainer num={50} id="true" text1="" text2="Professional Experts " />
                            <CustomCountContainer num={4} id="false" text1="" text2="Average Session Rating" />
                        </div>
                        <Button className="mt-6 flex items-center gap-2" onClick={() => console.log("connect")}>
                            Let’s Connect <ArrowRight size={20} />
                        </Button>
                    </motion.div>
                </div>

                {/* Right Side (Image) */}
                <div className="md:w-1/2  flex  bg-cover bg-center"
                    style={{ backgroundImage: "url('/ng-banner-decor-dark-opt.png')" }}>

                    <motion.img
                        src={sample1}
                        alt="Header Image"
                        className="w-3/4 md:w-full"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    />






                </div>
            </div>
        </section>

    );
};


const positivePoints = [
    " Get tailored advice to solve your toughest challenges.",
    "Reduce time spent in the trial-and-error phase.",
    "Connect with rigorously vetted experts you can trust.",
    "Validate your ideas and execute with confidence.",

];

