import Menuframe from '../assets/images/Rectangle_107.png'
import { HoverMotionWrapper } from '../ui/HoverMotionWrapper';

interface MenuBarProps {
    selectedMenu: string;
    handleMenuChange: (menu: string) => void;
}


const MenuBar = ({ selectedMenu, handleMenuChange }: MenuBarProps) => {
  return (
    <div
      className="flex flex-wrap justify-center items-center gap-4 py-4"
      style={{
        backgroundImage: `url(${Menuframe})`,
      }}
    >
      <HoverMotionWrapper>
        <button
          className={selectedMenu == "food" ? "btn-main" : "btn-secondary"}
          onClick={() => handleMenuChange("food")}
        >
          FOOD
        </button>
      </HoverMotionWrapper>
      <HoverMotionWrapper>
        <button
          className={selectedMenu == "drinks" ? "btn-main" : "btn-secondary"}
          onClick={() => handleMenuChange("drinks")}
        >
          DRINKS
        </button>
      </HoverMotionWrapper>
      <HoverMotionWrapper>
        <button
          className={selectedMenu == "brunch" ? "btn-main" : "btn-secondary"}
          onClick={() => handleMenuChange("brunch")}
        >
          BRUNCH
        </button>
      </HoverMotionWrapper>
    </div>
  );
};

export default MenuBar