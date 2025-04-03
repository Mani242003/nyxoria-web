import { useEffect, useState } from "react";
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

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft(): CountdownTimeLeft {
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
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#262E40] via-[#203a43] to-[#2c5364] text-white p-6">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-center mb-10">
        <h1 className="text-5xl font-extrabold tracking-wide text-white">🚀 Nyxoria is Coming!</h1>
        <p className="text-xl mt-2 text-gray-300">Connecting professionals like never before</p>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }} className="bg-white/10 p-10 rounded-3xl shadow-xl border border-white/20 flex flex-col items-center w-full max-w-lg backdrop-blur-md">
        <h2 className="text-lg font-bold text-white tracking-wider mb-4 uppercase">{title}</h2>
        <div className="grid grid-cols-4 gap-6">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="flex flex-col items-center">
              <div className="w-24 h-24 flex items-center justify-center bg-[#20A08F] text-4xl font-bold rounded-xl shadow-md transform transition-transform hover:scale-105">{value}</div>
              <p className="text-sm text-gray-300 mt-2 uppercase font-medium">{unit}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }} className="mt-10 text-center max-w-3xl">
        <p className="text-lg text-gray-300">
          Nyxoria is a cutting-edge online platform designed to connect buyers and sellers of professional services. We specialize across a wide range of industries and categories, making it effortless for clients to engage with top-tier professionals.
        </p>
        <p className="text-lg text-gray-300 mt-4">
          In just <span className="text-[#20A08F] font-semibold">150 days</span>, we'll be revolutionizing the professional services space. Stay connected and be part of the journey!
        </p>
        <p className="text-lg mt-4">
          Have questions? Contact us at <a href="mailto:leela@lexnyxoria.com" className="text-[#20A08F] underline">leela@lexnyxoria.com</a> & <a href="mailto:admin@lexnyxoria.com" className="text-[#20A08F] underline">admin@lexnyxoria.com</a>
        </p>
      </motion.div>
    </div>
  );
}

export default CountdownTimer;
