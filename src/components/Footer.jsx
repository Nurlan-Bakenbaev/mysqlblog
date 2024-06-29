
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} My Blog. All rights reserved.
        </p>
        <p className="text-sm">
          Follow us on
          <Link href="https://facebook.com" passHref>
            <span
              className="text-blue-600 hover:underline ml-1 cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </span>
          </Link>
          , and
          <Link href="https://instagram.com" passHref>
            <span
              className="text-pink-400 hover:underline ml-1 cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </span>
          </Link>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
