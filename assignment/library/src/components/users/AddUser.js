import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

const AddUser = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    bookname: "",
    author: "",
    price: "",  
    isbn: "",
    page:"",
    copy: ""

  });

  const { bookname, author, price, isbn, page,copy } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3003/users", user);
    history.push("/");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add New Book</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Book  name"
              name="bookname"
              value={bookname}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Author Name"
              name="author"
              value={author}
              onChange={e => onInputChange(e)}
            />
                    

          </div>
          <div className="form-group">
            <input
              type="numeric"
              className="form-control form-control-lg"
              placeholder="Enter Books Price"
              name="price"
              value={price}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Books ISBN Number"
              name="isbn"
              value={isbn}
              onChange={e => onInputChange(e)}
            />

          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Total Page Number"
              name="page"
              value={page}
              onChange={e => onInputChange(e)}
            />

          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Copy  Available"
              name="copy"
              value={copy}
              onChange={e => onInputChange(e)}
            />

          </div>
          <button className="btn btn-primary btn-block">Add Book</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;