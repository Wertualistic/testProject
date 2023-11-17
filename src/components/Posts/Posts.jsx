import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import "./style.css";
import PostItem from "./components/PostItem/PostItem";
import Pagination from "./components/Pagination/Pagination";
import Modal from "./components/Modal/Modal";
import axios from "axios";

const Posts = () => {
  const [prev, setPrev] = useState(0);
  const [next, setNext] = useState(10);
  const { isLoading, error, data } = useQuery({
    queryKey: ["data"],
    queryFn: () =>
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  const paginations = [
    {
      id: 1,
      prevPage: 0,
      nextPage: 10,
    },
    {
      id: 2,
      prevPage: 10,
      nextPage: 20,
    },
    {
      id: 3,
      prevPage: 20,
      nextPage: 30,
    },
    {
      id: 4,
      prevPage: 30,
      nextPage: 40,
    },
    {
      id: 5,
      prevPage: 40,
      nextPage: 50,
    },
    {
      id: 6,
      prevPage: 50,
      nextPage: 60,
    },
    {
      id: 7,
      prevPage: 60,
      nextPage: 70,
    },
    {
      id: 8,
      prevPage: 70,
      nextPage: 80,
    },
    {
      id: 9,
      prevPage: 80,
      nextPage: 90,
    },
    {
      id: 10,
      prevPage: 90,
      nextPage: 100,
    },
  ];

  console.log(data.data);
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-12 text-center">
          <h1>Posts Table</h1>
        </div>
        <div className="col-12 text-right mb-3">
          <button
            type="button"
            className="btn btn-success"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal">
            Create
          </button>
          <Modal />
        </div>
        <div className="col-12">
          <table className="table table-bordered text-center">
            <thead>
              <tr>
                <th>№</th>
                <th>Title</th>
                <th>Body</th>
                <th colSpan="3">Action</th>
              </tr>
            </thead>
            <tbody>
              <PostItem data={data} prev={prev} next={next} />
            </tbody>
          </table>
          <Pagination
            paginations={paginations}
            setNext={setNext}
            setPrev={setPrev}
          />
        </div>
      </div>
    </div>
  );
};

export default Posts;
