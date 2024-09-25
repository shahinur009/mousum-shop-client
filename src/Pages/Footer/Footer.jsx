import logo from '../../../public/Mousum-shop-logo.png'
const Footer = () => {
    return (
      <footer className="bg-[#F8F8EC] text-black p-5 border">
        <div className="container grid md:grid-cols-3 justify-items-center">
          <div className="flex flex-col gap-2">
          <img src={logo} alt="mousum shop logo" height={50} width={150} />
            <h1 className="text-2xl text-black font-bold -mt-6"><span className="text-orange-500">Mousum</span> Shop</h1>
            <p className="w-full md:w-3/4">Best Online shop in Bangladesh</p>
            
          </div>
          <div>
            <h1 className="text-black font-bold">Services</h1>
            <ul>
              <li>Home Appliance</li>
              <li>Dress</li>
              <li>Shoe</li>
              <li>More</li>
            </ul>
          </div>
          <div>
            <h1 className="text-black font-bold">Contact Us</h1>
            <ul>
              <li>+8801744604009</li>
              <li>shaheenmis170879@gmail.com</li>
              <li>Dhaka, Bangladesh</li>
              <li></li>
            </ul>
          </div>
        </div>
        <h1 className="text-orange-500 text-center">All rights reserved by @Mousum shop</h1>
      </footer>
    );
  };
  
  export default Footer;