import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const navigate = useNavigate();

  const [bookInput, setBookInput] = useState({
    title: "",
    description: "",
    cover: "",
  });

  const handleChange = (e) => {
    setBookInput((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/books", bookInput);
      navigate("/");
    } catch (err) {
      console.log(">>>errr", err);
    }
  };

  return (
    <div className="form">
      <input
        type="text"
        placeholder="title"
        name="title"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="description"
        name="description"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="cover"
        name="cover"
        onChange={handleChange}
      />
      <button type="submit" value={"SUBMIT"} onClick={handleSubmit} />
    </div>
  );
};

export default Add;
