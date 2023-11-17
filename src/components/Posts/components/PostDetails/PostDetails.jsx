// PostDetails.js
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import axios from "axios";
import CommentDetail from "../CommentDetail/CommentDetail";

const PostDetails = () => {
  const { postId } = useParams();

  const { isLoading, error, data } = useQuery({
    queryKey: ["postDetail"],
    queryFn: () =>
      axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`),
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="post_detail">
      <h2>{data.data.title}</h2>
      <p>{data.data.body}</p>
      <CommentDetail />
    </div>
  );
};

export default PostDetails;
