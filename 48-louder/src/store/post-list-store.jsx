import { createContext, useReducer, useState, useEffect } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
 
  deletePost: () => {},
});

const postListReducer = (currentValue, action) => {
  let newPostList = currentValue;

  if (action.type === "DELETE_POST") {
    {
      newPostList = currentValue.filter(
        (post) => post.id !== action.payload.postId,
      );
    }
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currentValue];
  } else if (action.type === "ADD_INITIAL_POST") {
    newPostList = action.payload.posts;
  }

  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

 

  const addPost = (post) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: post,
    });
  };

  

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

 

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};



export default PostListProvider;
