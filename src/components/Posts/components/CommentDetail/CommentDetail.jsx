import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";

const CommentDetail = () => {
  const { postId } = useParams();

  const { isLoading, error, data } = useQuery({
    queryKey: ["postDetail"],
    queryFn: () =>
      axios.get(
        `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
      ),
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-12 text-center">
          <h1>Comments Table</h1>
        </div>
        <div className="col-12">
            <Link to='/' className="btn btn-warning">Back</Link>
        </div>
        <div className="col-12">
          <table className="table table-bordered text-center">
            <thead>
              <tr>
                <th>№</th>
                <th>Name</th>
                <th>Email</th>
                <th>Body</th>
              </tr>
            </thead>
            <tbody>
              {data.data.map((itm) => (
                <tr key={itm.id}>
                  <td>{itm.id}</td>
                  <td>{itm.name}</td>
                  <td>{itm.email}</td>
                  <td>{itm.body}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CommentDetail;
