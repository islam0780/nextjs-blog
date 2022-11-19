import Image from "next/image";


const Footer = () => {
    return (
        <footer >
        <p
          href="Islam & Omar & Asmae"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span >
            <Image src="/mm.jpg" alt="Vercel Logo" width={16} height={16} />
          </span>
        </p>
      </footer>
    );
  }
   
  export default Footer;