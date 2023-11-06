import PostItem from "./PostItem";

const PostFeed = ({ POST_DATA }: any) => {
  return (
    <>
      {POST_DATA.map((item: any, index: number) => (
        <PostItem
          name={item.name}
          username={item.username}
          postText={item.postText}
          postImg={item.postImg}
          posted={item.posted}
          comments={item.comments}
          reposts={item.reposts}
          likes={item.likes}
          views={item.views}
        />
      ))}
    </>
  );
};

export default PostFeed;
