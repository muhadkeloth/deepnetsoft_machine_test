
const Footer = () => {
  return (
    <footer className="bg-[#1E1E1E] text-shade-txt md:px-28">
        <div className="container mx-auto  py-4">
       
          <div className="hidden md:flex justify-between items-center text-sm font-lato">
            <div>© 2024 Deepnetsoft Solutions. All rights reserved.</div>
            <div className="space-x-4">
              <button className="hover:opacity-80">Terms & Conditions</button>
              <button className="hover:opacity-80">Privacy Policy</button>
            </div>
          </div>

          <div className="md:hidden text-center space-y-2 text-[10px] tracking-wider font-lato ">
            <div>© 2024 42 Bar & Grill. Developed by Deepnetsoft Solutions.</div>
            <div className="space-x-4 ">
              <button className="hover:opacity-80 tracking-wide">Terms & Conditions</button>
              <button className="hover:opacity-80 tracking-wide">Privacy Policy</button>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer