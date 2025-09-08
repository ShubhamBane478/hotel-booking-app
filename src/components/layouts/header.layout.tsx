const Header = () => {
  return (
    <header className="bg-brand py-2">
      <div className="container flex justify-between items-center">
        <div id="logo-wrapper">
          <a href="#" aria-label="Go to Booking.com">
            <img src="/assets/booking.com.svg" alt="Logo of Booking.com"/>
          </a>
        </div>
        <div id="auth"></div>
      </div>
    </header>
  );
};

export default Header;
