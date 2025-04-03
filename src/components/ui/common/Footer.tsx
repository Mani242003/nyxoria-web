import { motion } from "framer-motion";
// import { MapPin, MessageSquareMore, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
export default function Footer() {
  const footerContent = {
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, y: 100 },
  };

  const footerImage = {
    visible: { y: 0, transition: { duration: 1 } },
    hidden: { y: -100 },
  };

  return (
    <div >
      {/* Contact Section */}
      {/* <div className="w-full  py-10 px-5 sm:px-10 flex flex-col items-center">
     <h2 className="text-[#262E40] text-center font-head text-[2rem] md:text-[2.5rem] lg:text-[50px] font-medium mb-[18px] sm:w-9/12 lg:w-6/12">
              Get In Touch
            </h2>
     </div> */}

      {/* <div className="flex">
        
     
    <div className="flex flex-col items-center p-6 bg-white  w-full max-w-sm">
      <div className="flex items-center justify-center w-20 h-20  bg-[#20A08F] rounded-full">
        <Phone className="w-10 h-10 text-white" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-gray-900">Phone</h3>
      <p className="mt-2 text-center text-gray-700 font-medium">9940392066</p>
    
    </div>
    <div className="flex flex-col items-center  p-6 bg-white w-full max-w-sm">
      <div className="flex items-center justify-center w-20 h-20 bg-[#20A08F] rounded-full">
        <MapPin className="w-10 h-10 text-white" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-gray-900">ADDRESS</h3>
      <p className="mt-2 text-center text-gray-700 font-medium">Lex Nyxoria Consultants</p>
      <p className="mt-1 text-center text-sm text-gray-600">VUET0221</p>
      <p className="mt-1 text-center text-sm text-gray-600">
        Compass Building - Al Hulaila, <br /> AL Hulaila Industrial Zone-FZ, <br /> Ras Al Khaimah, United Arab Emirates
      </p>
    </div>
    <div className="flex flex-col items-center  p-6 bg-white w-full max-w-sm">
      <div className="flex items-center justify-center w-20 h-20  bg-[#20A08F] rounded-full">
        <MessageSquareMore className="w-10 h-10 text-white" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-gray-900">Email</h3>
      <p className="mt-1 text-center text-sm text-gray-600">leela@lexnyxoria.com</p>
      <p className="mt-1 text-center text-sm text-gray-600">
      
admin@lexnyxoria.com

      </p>
    </div>
      </div> */}
      {/* <div className="border-b border-white/15 relative overflow-hidden bg-white">
        <div className="container mx-auto max-w-[1344px]">
          <motion.section
            initial="hidden"
            whileInView="visible"
            variants={footerContent}
            className="px-5 py-10 flex flex-col items-center text-center sm:px-10"
          >
            <h2 className="text-[#262E40] font-head text-[2rem] md:text-[2.5rem] lg:text-[50px] font-medium mb-[18px] sm:w-9/12 lg:w-6/12">
              We can take care of the installation
            </h2>
            <p className="font-body text-gray-900 text-sm mb-[30px] sm:w-7/12 lg:w-5/12">
              Don’t want to deal with technical stuff? Let us fire up Uvodo for
              you, so you can spend your time selling right away.
            </p>
            <button className="border border-[#004C3F] bg-[#004C3F] text-[#FFDB95] p-5 text-lg uppercase font-body font-bold md:px-[34px] md:py-5 sm:w-fit lg:w-fit hover:bg-[#002E24] hover:border-white hover:text-white transition-all duration-200 ease-in">
              CONTACT US
            </button>
          </motion.section>
        </div>

        <motion.img
          initial="hidden"
          whileInView="visible"
          animate={{ rotate: 360, transition: { duration: 15, repeat: Infinity, ease: "easeInOut" } }}
          variants={footerImage}
          className="hidden lg:block absolute top-1/4 -left-28"
          src="/eclipse-1.svg"
          alt="Rotating Eclipse Decoration"
        />
        <motion.img
          initial="hidden"
          whileInView="visible"
          animate={{ rotate: 360, transition: { duration: 30, repeat: Infinity, ease: "easeInOut" } }}
          variants={footerImage}
          className="hidden lg:block absolute top-[20%] -right-24"
          src="/eclipse-2.svg"
          alt="Rotating Eclipse Decoration"
        />
      </div> */}
      {/* contact-us */}
      <div className="flex min-h-screen bg-gray-100">
        <div className="w-full bg-white p-8 flex flex-col md:flex-row gap-8">
          {/* Left Side - Contact Info */}
          <div className="w-full flex flex-col justify-center text-left text-[#262E40] p-18">
            <h2 className="text-4xl font-extrabold mb-4">
              Connect With Us For Your Solutions Needs
            </h2>
            <p className="text-lg mb-6">
              We'd love to hear from you! Fill out the form and we'll get back to you as soon as possible.
            </p>
            <div className=" pb-4 pt-4">
              <div className="flex items-center gap-4">
                <img src="/UAE.png" alt="" className="w-10" />
                <span className="text-[20px] font-semibold text-black">UAE (Head Office)</span>
              </div>
              <div className="flex items-center py-4 gap-4">
                <div>
                  <MapPin className="text-[25px]" />

                </div>
                <div>
                  <span className="text-[16px] tracking-wide text-black cursor-pointer">


                    VUET0221
                    Compass building - Al Hulaila,
                    AL Hulaila Industrial Zone-FZ,
                    Ras Al Khaimah, United Arab Emirates
                  </span>
                </div>
              </div>
              <div className="flex items-center py-4 gap-4">
                <Mail className="text-[25px]" />
                <a href="mailto:leela@lexnyxoria.com" className="text-black">
                  leela@lexnyxoria.com

                </a>
              </div>
              <div className="flex items-center pt-2 gap-4">
                <Phone className="text-[25px]" />
                <span className="text-[16px] tracking-wide text-black cursor-pointer">
                  9940392066

                </span>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="w-full p-16 text-white">
           <div className="bg-[#20A08F] rounded-lg p-8 shadow-lg">
           <h2 className="text-4xl font-extrabold mb-4">Get in Touch</h2>
           <h2 className="text-1xl font-bolder mb-4">We can Reach us anytime</h2>
           
            <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" className="p-3 border-b border-gray-300  w-full focus:ring-2 focus:ring-blue-400" />
                <input type="text" placeholder="Last Name" className="p-3 border-b border-gray-300  w-full focus:ring-2 focus:ring-blue-400" />
              </div>
              <input type="email" placeholder="Email" className="p-3 border-b border-gray-300  w-full focus:ring-2 focus:ring-blue-400" />
              <input type="tel" placeholder="Phone Number" className="p-3 border-b border-gray-300  w-full focus:ring-2 focus:ring-blue-400" />
              <textarea placeholder="Message" rows={4} className="p-3 border-b border-gray-300  w-full focus:ring-2 focus:ring-blue-400"></textarea>
              <button type="submit" className="w-full bg-[#262E40] text-white py-3  font-semibold hover:bg-blue-700 transition duration-300">
                Submit
              </button>
            </form>
           </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-[#20A08F] container mx-auto max-w-[1344px] py-10 px-5 sm:px-10">
        <div className="grid lg:grid-cols-3 gap-10 lg:gap-y-32">
          {/* Logo & Description */}
          <div>
            <Link to="/" className="flex items-center space-x-3">
              <img src="/logo.jpg" alt="Lexnyxoria Logo" className="h-15 w-15 rounded-full" />
              <span className="text-xl font-bold tracking-wide text-white font-orbitron">
                Lexnyxoria
              </span>
            </Link>
            <p className="text-white mt-5 mb-5">
            Nyxoria is a cutting-edge online platform designed to connect buyers and sellers of professional services. We specialize across a wide range of industries and categories, making it effortless for clients to engage with top-tier professionals.
            </p>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 gap-9 md:grid-cols-4 lg:col-span-2">
            {[
              {
                title: "Platform", links: ["Browse Mentors", "Book a Session", "Become a Mentor", "Mentorship for Teams",
                  "Testimonials"
                ]
              },
              {
                title: "Resources", links: [

                  "Newsletter",
                  "Books",
                  "Perks",
                  "Templates",
                  "Career Paths",
                  "Blog"
                ]
              },
              {
                title: "Company", links: [

                  "About",
                  "Case Studies",
                  "Partner Program",
                  "Code of Conduct",
                  "Privacy Policy",
                  "DMCA"
                ]
              },
              {
                title: "Support", links: [
                  "FAQ",
                  "Contact"]
              },
            ].map((section, index) => (
              <div key={index}>
                <h6 className="mb-5 font-medium text-lg text-white">{section.title}</h6>
                <div className="flex flex-col gap-4 text-white/70 text-sm">
                  {section.links.map((link, idx) => (
                    <a key={`${index}-${idx}`} className="hover:text-white transition" href="#">
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-10 text-center">
          <p className="text-white font-medium">
            © 2024, Stigmata Techno Solution. Ltd. All Rights Reserved.
          </p>
          <div className="flex items-center justify-center gap-4 mt-4 md:mt-0">
            {["instagram", "github", "telegram", "linkedin"].map((platform) => (
              <a key={platform} href="#" target="_blank" rel="noopener noreferrer">
                <img className="w-10 transition hover:opacity-75" src={`/${platform}.svg`} alt={`${platform} icon`} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}


// const ContactInfoItem = ({ label, value, Icon }: { label: string; value: string; Icon: any }) => {
//   return (
//     <div className="flex items-center gap-3 bg-white bg-opacity-20 p-4 rounded-lg shadow-md">
//       <Icon className="text-white w-6 h-6" />
//       <div>
//         <p className="text-sm font-semibold text-gray-200">{label}</p>
//         <p className="text-lg font-bold text-white">{value}</p>
//       </div>
//     </div>
//   );
// };