import { Icon, Menu, Sun, X , Moon } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";


const Navbar = () => {
  // const {colorMode, toggleMode} =useState();
  // const isDark = colorMode ==="dark";
 

const [theme,setTheme] = useState(null)


useEffect(() => {
  if (window.matchMedia("prefer-color-scheme:dark").matches){
      setTheme('dark')


  }else{
    setTheme('light')
  }
    

 
}, [])

useEffect(() => {
  if (theme == 'dark'){
    document.documentElement.classList.add('dark')

      


  }else{
    document.documentElement.classList.remove('dark')
  }
    

 
}, [theme])

const handleThemeSwitch=()=>{
  setTheme(theme == 'dark' ? 'light' :'dark')
}

 


  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80  ">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
            <span className="text-xl tracking-tight light:text-light-text dark:text-dark-text">VirtualReality</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12 light:text-light-text dark:text-dark-text">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href="#" className="py-2 px-3 border rounded-md light:text-light-text dark:text-white">
              Sign In
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
            >
              Create an account
            </a>

           
            <button onClick={handleThemeSwitch} className="light:text-light-text dark:text-white" >
            {theme == 'dark' ? <Moon/> : <Sun/>}
            </button>
            <div>
             
            </div>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}> {item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a href="#" className="py-2 px-3 border rounded-md">
                Sign In
              </a>
              <a
                href="#"
                className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800"
              >
                Create an account
               
              </a>
              
              {/* <button >
              {<Moon/>}
            </button> */}
              
            </div>
            
        </div>
        
        )}
      </div>
    </nav>
  );
};

export default Navbar;
