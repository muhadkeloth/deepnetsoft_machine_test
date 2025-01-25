import {  Mail, MapPin, Phone, } from 'lucide-react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import logo from '../assets/images/Logo.png';
import {  ZoomMotionWrapper } from '../ui/ZoomMotionWrapper';


const MenuList = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 px-4 py-20 md:px-28">
      <ZoomMotionWrapper className="w-full sm:w-1/3 border border-white rounded-2xl p-6 text-center order-1 sm:order-2 relative">
        <img
          src={logo}
          alt="Decorative"
          className="absolute left-1/2 transform -translate-x-1/2 -top-10 w-18 h-18 bg-black"
        />

        <h1 className=" text-[35px] leading-tight tracking-wide mt-8">
          <span className="text-main-clr">DEEP</span>
          <span> NET</span>
          <span className="text-shade-txt"> SOFT</span>
        </h1>
        <div className="flex justify-center items-center gap-2 mt-4 text-icon-media">
          <FaFacebook size={14} />
          <FaTwitter size={12} />
          <FaYoutube size={12} />
          <FaInstagram size={12} />
        </div>
      </ZoomMotionWrapper>

      <ZoomMotionWrapper className="w-full sm:w-1/3 border border-white rounded-2xl p-6 text-center order-2 sm:order-1">
        <h1 className="text-xl font-bold text-main-clr  tracking-wide">
          CONNECT WITH US
        </h1>
        <span className="flex  justify-center items-center mt-4 text-shade-txt">
          <Phone size={16} className="mr-3 text-icon-clr" /> + 91 9567843340
        </span>
        <span className="flex  justify-center items-center mt-2 text-shade-txt">
          <Mail size={16} className="mr-3 text-icon-clr" /> info@deepnetsoft.com
        </span>
      </ZoomMotionWrapper>

      <ZoomMotionWrapper className="w-full sm:w-1/3 border border-white rounded-2xl p-6 text-center order-3">
        <h1 className="text-xl font-bold text-main-clr  tracking-wide">
          FIND US
        </h1>
        <span className="flex justify-center items-start mt-4 text-shade-txt">
          <MapPin size={16} className="mr-3 mt-1 text-icon-clr" />
          <div className="space-y-2">
            <p>First floor, Geo infopark,</p>
            <p>Infopark EXPY, Kakkanad</p>
          </div>
        </span>
      </ZoomMotionWrapper>
    </div>
  );
}

export default MenuList