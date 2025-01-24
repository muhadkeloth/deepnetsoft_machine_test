import { useEffect, useState } from "react";
import ImgBlock from "../components/ImgBlock"
import MenuBar from "../components/MenuBar"
import Nav from "../components/Nav"
import InfoSection from "../components/InfoSection";
import MenuList from "../components/MenuList";
import Footer from "../components/Footer";
import { fetchMenuByCategory } from "../services/axiosConfig";

export interface Menus {
    _id:string;
    name: string;
    price: number;
    category: string;
    description: string;
}
const Home = () => {
    const [selectedMenu, setSelectedMenu] = useState<string>('food');
    const [menus, setMenus] = useState<Menus[]>([]);

    const handleMenuChange = (menu: string) => {
        setSelectedMenu(menu);
    }

    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const response = await fetchMenuByCategory(selectedMenu);
                setMenus(response.data.response);
            } catch (error) {
                console.log(error);
            }
        } 
        fetchMenu()
    },[selectedMenu])

  return (
    <div className="bg-background">
        <Nav />        
        <ImgBlock />              
        <MenuBar selectedMenu={selectedMenu} handleMenuChange={handleMenuChange} /> 
        <InfoSection menus={menus} selectedMenu={selectedMenu} />  
        <MenuList />           
        <Footer />           
    </div>
  )
}

export default Home