import Image from "next/image";
import navLogo from "../../public/assets/images/navLogo.png";
const Navbar = () => {
    return <header className={"bg-pink-300 fixed w-full top-0 left-0 max-h-[90px] px-6 py-2"}>
        <Image src={navLogo} height={70} alt={"Navigation logo"}/>
        <nav></nav>
    </header>
}
export default Navbar;