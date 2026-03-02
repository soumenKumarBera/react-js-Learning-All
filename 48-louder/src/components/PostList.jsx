import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as postListData } from "../store/post-list-store";
import WelcomeMsg from "./welecomeMsg";
import LodingSpiner from "./lodingSpiner";
const PostList = () => {
  const { postList, fetching } = useContext(postListData);

  return (
    <>
      {" "}
      {fetching && <LodingSpiner />}
      {!fetching && postList.length === 0 && <WelcomeMsg />}
      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </>
    
  );
};
export default PostList;


