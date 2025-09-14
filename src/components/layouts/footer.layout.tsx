import { FOOTER_SECTION, SOCIAL_LINKS } from '@/config/app.config';
import dayjs from 'dayjs';
import Icon from '../ui/icon';

const Footer = () => {
  return (
    <div className="bg-secondary">
      <footer className="container">
        <div className="grid grid-cols-[repeat(auto-fill,minmax(190px,1fr))] gap-6 py-4">
          {FOOTER_SECTION.map((section, index) => {
            return (
              <div key={index}>
                <h3 className="text-sm font-bold">{section.title}</h3>
                <ul className="flex flex-col gap-1">
                  {section.links.map((links, index) => {
                    return (
                      <li key={index}>
                        <a
                          href={links.href}
                          className="text-sm hover:underline"
                        >
                          {links.text}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </footer>
      <div className="bg-brand">
         <div className="flex flex-col flex-wrap items-center justify-center gap-4 p-4 mx-auto sm:flex-row sm:justify-between max-w-7xl">
          <div className='flex items-center justify-center gap-4'>
            {SOCIAL_LINKS.map((link, index) => (
              <a href={link.href} key={index} className='text-slate-100 hover:text-slate-300 transition-colors'>
                <Icon icon={link.icon} size="18" />
              </a>
            ))}
          </div>
          <div>
            <p className='text-sm text-center text-white'>  
              Copyright &copy;{' '}
              {`${dayjs().year()} Booking.com™. All rights reserved.`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
