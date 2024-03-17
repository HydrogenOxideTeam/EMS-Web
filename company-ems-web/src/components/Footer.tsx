import Image from "next/image";
import navLogo from "../../public/assets/images/navLogo.png";
import Link from "next/link";

const Footer = () => {
    return <footer className={"mt-auto px-6 py-2 bg-cyan-300 flex flex-col items-center w-full"}>
        <div className={"flex justify-between w-full items-center"}>
            <Image src={navLogo} height={50} alt={"Navigation logo"}/>
            <nav className={"flex gap-2"}>
                <Link href={"/"}>Home</Link>
                <Link href={"/"}>About</Link>
                <Link href={"/"}>Contacts</Link>
            </nav>
        </div>
        <small>© Produced by Olenka in {new Date().getFullYear()}</small>
    </footer>
}
export default Footer;