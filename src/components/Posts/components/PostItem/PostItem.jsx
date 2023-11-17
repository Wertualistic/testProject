import React from "react";
import { Link } from "react-router-dom";

const PostItem = ({ data, prev, next }) => {
  return (
    <>
      {data.data.slice(prev, next).map((itm) => (
        <tr key={itm.id}>
          <td>{itm.id}</td>
          <td>{itm.title.slice(0, 40)}...</td>
          <td>{itm.body.slice(0, 90)}...</td>
          <td>
            <Link
              to={`/post/${itm.id}`}
              className="btn btn-primary btn-sm"
              href="">
              Show
            </Link>
          </td>
          <td>
            <a
              className="btn btn-warning btn-sm"
              href="{{route('abouts.edit' , $about->id)}}">
              Edit
            </a>
          </td>
          <td>
            <form
              action="{{route('abouts.destroy' , $about->id)}}"
              method="post">
              <button
                className="btn btn-danger btn-sm"
                onClick="return confirm('Delete?')">
                Delete
              </button>
            </form>
          </td>
        </tr>
      ))}
    </>
  );
};

export default PostItem;
