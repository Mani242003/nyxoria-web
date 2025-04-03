import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";

interface CountdownTimerProps {
  deadline: Date;
  title: string;
}

interface CountdownTimeLeft {
  days: number;
  hrs: number;
  mins: number;
  secs: number;
}

const INITIAL_TIME_LEFT: CountdownTimeLeft = { days: 0, hrs: 0, mins: 0, secs: 0 };

function CountdownTimer({ deadline, title }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<CountdownTimeLeft>(INITIAL_TIME_LEFT);

  // Wrap calculateTimeLeft in useCallback to prevent unnecessary re-renders
  const calculateTimeLeft = useCallback((): CountdownTimeLeft => {
    const now = new Date();
    const difference = deadline.getTime() - now.getTime();
    return difference > 0
      ? {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hrs: Math.floor((difference / (1000 * 60 * 60)) % 24),
          mins: Math.floor((difference / 1000 / 60) % 60),
          secs: Math.floor((difference / 1000) % 60),
        }
      : INITIAL_TIME_LEFT;
  }, [deadline]); // Depend only on deadline

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    
    return () => clearInterval(timer);
  }, [calculateTimeLeft]); // Depend on the stable function

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#262E40] via-[#203a43] to-[#2c5364] text-white p-6">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-center mb-10">
        <h1 className="text-5xl font-extrabold tracking-wide text-white">🚀 Lexnyxoria is Coming!</h1>
        <p className="text-xl mt-2 text-gray-300">Connecting professionals like never before</p>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }} className="bg-white/10 p-10 rounded-3xl shadow-xl border border-white/20 flex flex-col items-center w-full max-w-lg backdrop-blur-md">
        <h2 className="text-lg font-bold text-white tracking-wider mb-4 uppercase">{title}</h2>
        <div className="grid grid-cols-4 gap-6">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="flex flex-col items-center">
              <div className="w-14 h-14 sm:w-24 sm:h-24  flex items-center justify-center bg-[#20A08F] text-2xl sm:text-4xl font-bold rounded-xl shadow-md transform transition-transform hover:scale-105">{value}</div>
              <p className="text-sm text-gray-300 mt-2 uppercase font-medium">{unit}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1.5 }} 
      className="mt-10 text-center max-w-3xl mx-auto"
    >
       <p className="text-lg text-gray-300">
          Nyxoria is a cutting-edge online platform designed to connect buyers and sellers of professional services. We specialize across a wide range of industries and categories, making it effortless for clients to engage with top-tier professionals.
        </p>
        <br/>
      <p className="text-lg text-gray-300">
        We are busy crafting an Engaging & innovative experience needs just for you.
      </p>
      <p className="text-lg text-gray-300 mt-4">
        In the meantime, we'd love to hear from you. Whether you have needs or just want to say hello to our team, feel free to reach out, &nbsp;  
        <a href="mailto:leela@lexnyxoria.com" className="text-blue-400 underline">leela@lexnyxoria.com </a> &nbsp; 
        and <a href="mailto:admin@lexnyxoria.com" className="text-blue-400 underline">admin@lexnyxoria.com</a>.
      </p>
      <p className="text-lg text-gray-300 mt-15 my-10 font-bold">
        STAY TUNED FOR MORE UPDATES!
      </p>
    </motion.div>
    </div>
  );
}

export default CountdownTimer;
