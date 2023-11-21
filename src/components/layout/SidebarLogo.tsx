import { useRouter } from "next/router";
import Image from "next/image";

const SidebarLogo = () => {
  const router = useRouter();

  return (
    <div onClick={() => router.push("/")} className="sidebar-logo">
      <Image src="/images/sidebar/logo.svg" alt="Logo" width={25} height={25} />
    </div>
  );
};

export default SidebarLogo;
