import { useRouter } from "next/router";
import { ClipLoader } from "react-spinners";

import useUser from "@/hooks/useUser";

import Header from "@/components/Header";
import UserHero from "@/components/users/UserHero";
import Head from "next/head";

const UserView = () => {
  const router = useRouter();
  const { userId } = router.query;

  const { data: fetchedUser, isLoading } = useUser(userId as string);

  if (isLoading || !fetchedUser) {
    return (
      <div className="if-error">
        <ClipLoader color="lightblue" size={80} />
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>
          {fetchedUser?.name} (@{fetchedUser?.username})
        </title>
      </Head>
      <Header showBackArrow label={fetchedUser?.name} />
      <UserHero userId={userId as string} />
    </>
  );
};

export default UserView;
