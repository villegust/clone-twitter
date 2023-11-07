import { useRouter } from "next/router";
import { useCallback } from "react";
import { BiArrowBack } from "react-icons/bi";

import Search from "@/components/headercomps/search";

interface HeaderProps {
  showBackArrow?: boolean;
  label: string;
}

const Header: React.FC<HeaderProps> = ({ showBackArrow, label }) => {
  const router = useRouter();

  const handleBack = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <>
      {label === "Explore" ? (
        <Search label={label} />
      ) : (
        <div className="header">
          <div className="header__text">
            {showBackArrow && (
              <BiArrowBack
                onClick={handleBack}
                color="white"
                size={20}
                className="back-arrow"
              />
            )}
            <h1>{label}</h1>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
