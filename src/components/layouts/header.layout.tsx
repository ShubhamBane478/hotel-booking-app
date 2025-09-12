import { Button } from "@/components/ui/button";
import { SERVICE_LIST, type singleService } from "@/config/app.config.ts";


const Header = () => {
  return (
    <header className="bg-brand py-2">
      <div className="container flex justify-between items-center">
        <div id="logo-wrapper">
          <a href="#" aria-label="Go to Booking.com">
            <img
              width={144}
              height={24}
              src="/assets/booking.com.svg"
              alt="Logo of Booking.com"
            />
          </a>
        </div>
        <div id="auth" className="flex gap-2 justify-center items-center">
          <Button className="bg-white cursor-pointer border-primary text-primary rounded-sm hover:bg-white/95">
            Register
          </Button>
          <Button className="bg-white cursor-pointer border-primary text-primary rounded-sm hover:bg-white/95">
            Login
          </Button>
        </div>
      </div>
      <div className="container flex">
        {SERVICE_LIST.map((item: singleService)=>{
          return (
            <Button key={item.id}>{item.title}</Button>
          )
        })}
      </div>
    </header>
  );
};

export default Header;
