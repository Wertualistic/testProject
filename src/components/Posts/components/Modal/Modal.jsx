// Modal.js
import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Modal = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const mutation = useMutation({
    mutationFn: (newTodo) => {
      return axios.post("https://jsonplaceholder.typicode.com/posts/", newTodo);
    },
  });

  const submitData = () => {
    mutation.mutate({ title, body });
  };

  if (mutation.isSuccess) {
    toast.success("Post submitted successfully!");
  }

  return (
    <div
      className="modal fade"
      id="exampleModal"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Create Post
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="mb-3">
                <label className="form-label">Title</label>
                <input
                  type="text"
                  className="form-control"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter title"
                  name="title"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Body</label>
                <textarea
                  name="body"
                  className="form-control"
                  placeholder="Enter body"
                  value={body}
                  onChange={(e) => setBody(e.target.value)}></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-success"
                onClick={submitData}>
                Send
              </button>
            </form>
            {mutation.isLoading && <p>Sending...</p>}
            {mutation.isError && (
              <p>Error: {mutation.error.message || "Something went wrong"}</p>
            )}
          </div>
        </div>
      </div>
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default Modal;
