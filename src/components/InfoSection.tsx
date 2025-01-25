import bgInfoSection from '../assets/images/Rectangle_146.png'
import Frame_left from '../assets/images/Frame_left.png'
import Frame_right from '../assets/images/Frame_right.png'
import cocktail_top from '../assets/images/cocktail_top.png'
import cocktail_bottom from '../assets/images/cocktail_bottom.png'
import { Menus } from '../pages/Home'


interface infoSectionProps {
    menus:Menus[];
    selectedMenu:string;
    isLoading?:boolean;
}


const InfoSection = ({menus,selectedMenu,isLoading}:infoSectionProps) => {
  return (
    <div
      className="relative bg-cover bg-center md:h-[600px] pb-16"
      style={{ backgroundImage: `url(${bgInfoSection})` }}
    >
      <div
        className="absolute left-0 top-5 w-1/12 h-[570px] bg-cover hidden md:block"
        style={{ backgroundImage: `url(${Frame_left})` }}
      ></div>

      <div
        className="absolute right-0 top-6 w-1/12 h-[570px] bg-cover hidden md:block"
        style={{ backgroundImage: `url(${Frame_right})` }}
      ></div>

      <div className="relative mx-auto max-w-5xl  text-center pt-20 md:pt-28 md:px-0 px-4 z-10">
        <div className="border p-8 relative pb-20">
          <img
            src={cocktail_top}
            alt="Top Left"
            className="absolute md:top-[-125px] top-[-15px] md:left-[-50px] left-[-10px] w-20 h-28 md:w-40 md:h-60"
          />

          <h1
            className="md:text-5xl text-3xl font-bold flex items-center justify-center md:gap-4 
        [text-shadow:1.5px_1.25px_0_#800020] sm:[text-shadow:4px_3px_0_#800020]"
          >
            <span className="w-16 h-[2px] bg-shade-txt"></span>
            {selectedMenu === "brunch"
              ? "BRUNCH COCKTAILS"
              : selectedMenu.toUpperCase()}
            <span className="w-16 h-[2px] bg-shade-txt"></span>
          </h1>

          {isLoading ? (
            <p className="flex justify-center mt-10">Loading...</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 mt-16 gap-8">
              {menus.map((item, index) => (
                <div key={index} className="space-y-1">
                  <h1 className="text-2xl flex justify-between items-center pb-1 relative">
                    <span className="">{item.name.toUpperCase()}</span>
                    <span className="flex-1 border-b-2 border-dotted mt-5   "></span>
                    <span className="">{item.price}</span>
                  </h1>

                  <p className="opacity-75 text-sm md:text-lg text-left">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          )}

          <img
            src={cocktail_bottom}
            alt="Bottom Right"
            className="absolute md:bottom-[-30px] bottom-0 md:right-[-2px] right-0 md:w-40 w-20 md:h-44 h-24"
          />
        </div>
      </div>
    </div>
  );
}

export default InfoSection