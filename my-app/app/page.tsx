//+

import Link from "next/link";
import UserButton from "./components/userbutton/UserButton";

export default function Home() {
  return (
    <div>
      Hello at <p>{new Date().toLocaleTimeString()}</p>
      <Link href='/users'>Users</Link>
     <UserButton/>
    </div>
  );
}
