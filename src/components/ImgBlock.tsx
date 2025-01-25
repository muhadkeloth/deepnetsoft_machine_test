import menuImg from "../assets/images/Rectangle_103.png";
import {motion} from "framer-motion";

const ImgBlock = () => {
  return (
    <main className="flex-1 relative">
      <div
        className="absolute inset-0 bg-cover bg-[center_left_-200px]  md:bg-[center_left_-100px]  "
        style={{
          backgroundImage: `url(${menuImg})`,
        }}
      />
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="p-8  max-w-2xl mx-auto flex-col justify-center">
          <motion.h1
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[75px] font-bold text-center mb-3 tracking-wide 
          [text-shadow:1.5px_1.25px_0_#800020] sm:[text-shadow:4px_3px_0_#800020]"
          >
            MENU
          </motion.h1>
          <motion.p
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className=" text-para text-center "
          >
            Please take a look at our menu featuring food, drinks, and brunch.
            If you'd like to place an order, use the "Order Online" button
            located below the menu.
          </motion.p>
        </div>
      </div>
    </main>
  );
};

export default ImgBlock;
