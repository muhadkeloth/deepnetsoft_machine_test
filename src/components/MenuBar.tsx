import Menuframe from '../assets/images/Rectangle_107.png'

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
      <button
        className={selectedMenu == "food" ? "btn-main" : "btn-secondary"}
        onClick={() => handleMenuChange("food")}
      >
        FOOD
      </button>
      <button
        className={selectedMenu == "drinks" ? "btn-main" : "btn-secondary"}
        onClick={() => handleMenuChange("drinks")}
      >
        DRINKS
      </button>
      <button
        className={selectedMenu == "brunch" ? "btn-main" : "btn-secondary"}
        onClick={() => handleMenuChange("brunch")}
      >
        BRUNCH
      </button>
    </div>
  );
};

export default MenuBar