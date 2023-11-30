import Link from "next/link";
import Logo from "../public/Futbolchi rasmi.png";
import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <div className="navbar justify-between text-center items-center bg-slate-800 px-3 md:px-20 lg:px-56 py-3">
        <Link className="flex justify-center" href={"/"}>
          <Image src={Logo} width={200} height={100} />
        </Link>
        <nav className="flex gap-2 text-white justify-between items-center  px-8 py-3">
          <Link className="" href={"/"}>Bosh sahifa</Link>
          <Link className="" href={"/qulayliklar"}>Qulayliklar</Link>
          <Link className="" href={"/band"}>Band stadionlarni ko`rish</Link>
          <Link className="" href={"/addTopic"}>Stadion band qilish</Link>
          <Link className="" href={"/login"}>Admin</Link>
        </nav>
      </div>
    </>
  );
}

