import { createContext, useReducer, useState, useEffect } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  fetching: false,
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

  const [fetching, setFetching] = useState(false);

  const addPost = (post) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: post,
    });
  };

  const addInitialPost = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POST",
      payload: {
        posts,
      },
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

  useEffect(() => {
    setFetching(true);

    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((obj) => {
        addInitialPost(obj.posts);
        setFetching(false);
      });

    return () => {
      console.log("useEfect cleanup");
      controller.abort();
    };
  }, []);

  return (
    <PostList.Provider value={{ postList, addPost, deletePost, fetching }}>
      {children}
    </PostList.Provider>
  );
};

let Default_post_list = [
  {
    id: "1",
    title: "Going to Mumbay",
    body: "Hi friends, i am going to mumbay",
    reaction: 3,
    userId: "user-9",
    tags: ["vacation", "mumbay"],
  },
  {
    id: "2",
    title: "Going to Mumbay",
    body: "Hi friends, i am going to mumbay",
    reaction: 3,
    userId: "user-9",
    tags: ["vacation", "mumbay"],
  },
  {
    id: "3",
    title: "Going to Mumbay",
    body: "Hi friends, i am going to mumbay",
    reaction: 3,
    userId: "user-9",
    tags: ["vacation", "mumbay"],
  },
];

export default PostListProvider;
