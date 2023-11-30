import Header from "@/components/Header";
import useUser from "@/hooks/useUser";
import Head from "next/head";
import { useRouter } from "next/router";
import { ClipLoader } from "react-spinners";

const BookmarkView = () => {
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
        <title>Bookmarks / X</title>
      </Head>
      <Header label="Bookmarks" showBackArrow />
    </>
  );
};

export default BookmarkView;
