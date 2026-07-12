import { useContext, useLayoutEffect, useRef } from "react";
import { PostList } from "../store/post-list-store";
import { useNavigate, Form, redirect } from "react-router-dom";

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  return (
    <Form className="create-post" method="POST">
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter your userId
        </label>
        <input
          type="text"
          name="userId"
          className="form-control"
          id="userId"
          placeholder="your user id..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          name="title"
          className="form-control"
          id="title"
          placeholder="How are you feeling today..."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post content
        </label>
        <textarea
          type="text"
          name="body"
          rows="4"
          className="form-control"
          id="body"
          placeholder="Tell us more about it"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reaction" className="form-label">
          number of reaction
        </label>
        <input
          type="text"
          name="reactions"
          className="form-control"
          id="reaction"
          placeholder="Howmany people react this post"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter your hasTags here
        </label>
        <input
          type="text"
          name="tags"
          className="form-control"
          id="tags"
          placeholder="Plese enter tags using space"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </Form>
  );
};

export async function createPostAction(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  console.log(postData);

  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),

    /* other post data */
  })
    .then((res) => res.json())
    .then((post) => {
      addPost(post);
      console.log(post);
    });
  return redirect("/");
}

export default CreatePost;
