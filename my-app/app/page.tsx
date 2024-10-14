import Image from "next/image";
import Link from "next/link";
import UserButton from "./components/userbutton/UserButton";

export default function Home() {
  return (
    <div>
      Hello
      <Link href='/users'>Users</Link>
     <UserButton/>
    </div>
  );
}
