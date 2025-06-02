import Link from 'next/link';
import Newsletter from './Newsletter';

const COMPANY_LINKS = [
  { title: 'Catalog', url: '/catalog' },
  { title: 'About us', url: '/about-us' },
  { title: 'LookBook', url: '/look-book' },
  { title: 'Contact', url: '/contact' },
];

const SOCIAL_LINKS = [
  {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com',
  },
  { title: 'Facebook', url: 'https://www.facebook.com' },
  { title: 'Instagram', url: 'https://www.instagram.com' },
  { title: 'Twitter', url: 'https://www.x.com' },
];

const SUPPORT_LINKS = [
  { title: 'Account', url: '/account' },
  { title: 'Return Policy', url: '/return-policy' },
  { title: 'FAQ', url: '/faq' },
];

const LEGAL_LINKS = [
  { title: 'Privacy Policy', url: '/privacy-policy' },
  { title: 'Terms and Conditions', url: '/terms-and-conditions' },
  { title: 'Cookie Policy', url: '/cookie-policy' },
];

const Footer = () => {
  return (
    <footer className="grid gap-10 py-5 px-3 bg-brand-black text-brand-white md:grid-cols-2">
      <div className="flex flex-col gap-3 col-start-1 row-span-2">
        <Link href="/" className="text-fs-600 md:text-fs-700 font-libre">
          HARU
        </Link>

        <Newsletter />
      </div>

      <div className="flex">
        <div className="flex-1 flex flex-col gap-3">
          <p className="text-fs-400">Company</p>
          {COMPANY_LINKS.map((link) => (
            <Link
              key={link.url}
              href={link.url}
              className="text-white/50 hover:text-white/100 transition-colors duration-150"
            >
              {link.title}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-3  flex-1">
          <p className="text-fs-400">Social</p>
          {SOCIAL_LINKS.map((link) => (
            <Link
              key={link.url}
              href={link.url}
              className="text-white/50 hover:text-white/100 transition-colors duration-150"
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex">
        <div className="flex flex-col gap-3 flex-1">
          <p className="text-fs-400">Support</p>
          {SUPPORT_LINKS.map((link) => (
            <Link
              key={link.url}
              href={link.url}
              className="text-white/50 hover:text-white/100 transition-colors duration-150"
            >
              {link.title}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-3  flex-1">
          <p className="text-fs-400">Legal</p>
          {LEGAL_LINKS.map((link) => (
            <Link
              key={link.url}
              href={link.url}
              className="text-white/50 hover:text-white/100 transition-colors duration-150"
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>

      <div className="col-span-full flex text-fs-200 gap-2 text-brand-white/40 place-self-end">
        <p>&copy; {new Date().getFullYear()} HARU. All Rights Reserved.</p>
        <p>Designed & developed by Sai Say Noom Leng</p>
      </div>
    </footer>
  );
};

export default Footer;
