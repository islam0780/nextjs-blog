import Image from "next/image";
import Link from "next/link";




const Footer = () => {
  const year = new Date().getFullYear();
    return (
        <footer>
           <span  >Copyright © {year} <Link href="/">Almesrah Ry</Link> - All rights reserved.</span>
            <ul >
                <ol>
                    <a href="https://www.facebook.com/Almesrah" target="_blank" rel="noreferrer">
                        <Image src="/icons/facebook.svg" width={24} height={24} alt="facebook-icon" />
                    </a>
                </ol>
                <ol>
                    <a href="https://www.facebook.com/RadioEspooInternational" target="_blank" rel="noreferrer">
                        <Image src="/icons/facebook.svg" width={24} height={24} alt="facebook-icon" />
                    </a>
                </ol>
              
                <ol>
                    <a href="https://www.youtube.com/@espoofm" target="_blank" rel="noreferrer">
                        <Image src="/icons/youtube.svg" width={24} height={24} alt="youtube-icon" />
                    </a>
                </ol>
            </ul>
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