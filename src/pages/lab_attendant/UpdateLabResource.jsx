import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createLabResource,
  getLabResourceById,
  updateLabResource,
} from "../../redux/actions/lab";
import Loading from "../other/Loading";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

const UpdateLabResource = () => {
  const [title, setTitle] = useState("");
  const [version, setVersion] = useState("");
  const [link, setLink] = useState("");
  const [instructions, setInstructions] = useState("");
  const [os, setOS] = useState("");
  const [publisher, setPublisher] = useState("");
  const [size, setSize] = useState("");
  const [icon, setIcon] = useState("");

  const dispatch = useDispatch();
  const { id } = useParams();

  const submitHandler = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.append("title", title);
    myForm.append("version", version);
    myForm.append("link", link);
    myForm.append("instructions", instructions);
    myForm.append("os", os);
    myForm.append("publisher", publisher);
    myForm.append("size", size);
    myForm.append("file", icon);

    dispatch(updateLabResource(id, myForm));
  };

  const { message, error, loading, item } = useSelector((state) => state.lab);
  const navigate = useNavigate();

  const changeImageHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setIcon(file);
    };
  };

  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
      navigate("/lab_attendant");
    }

    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
  }, [error, message]);

  useEffect(() => {
    dispatch(getLabResourceById(id));
    setTitle(item.title);
    setVersion(item.version);
    setLink(item.link);
    setInstructions(item.instructions);
    setOS(item.os);
    setPublisher(item.publisher);
    setSize(item.size);
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <section className="!p-0">
      <form
        action=""
        className="bg-white p-[16px] rounded-lg flex flex-col gap-[4px]"
        onSubmit={submitHandler}
      >
        <label htmlFor="">
          <span>Title</span>
          <input
            type="text"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>

        <label htmlFor="">
          <span>Version</span>
          <input
            type="text"
            placeholder="Enter Version"
            value={version}
            onChange={(e) => setVersion(e.target.value)}
          />
        </label>

        <label htmlFor="">
          <span>Link</span>
          <input
            type="text"
            placeholder="Enter Link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </label>

        <label htmlFor="">
          <span>Installation ( , separator)</span>
          <textarea
            name=""
            id=""
            placeholder="Enter Instructions"
            className=""
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
          ></textarea>
        </label>

        <label htmlFor="">
          <span>Tested Os</span>
          <input
            type="text"
            placeholder="Enter Os"
            value={os}
            onChange={(e) => setOS(e.target.value)}
          />
        </label>

        <label htmlFor="">
          <span>Publisher</span>
          <input
            type="text"
            placeholder="Enter Publisher"
            value={publisher}
            onChange={(e) => setPublisher(e.target.value)}
          />
        </label>

        <label htmlFor="">
          <span>Size</span>
          <input
            type="text"
            placeholder="Enter Size"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          />
        </label>

        <label htmlFor="">
          <span>Icon</span>
          <input
            type="file"
            placeholder="Enter Size"
            onChange={changeImageHandler}
          />
        </label>

        <button className="primary-btn !w-full mt-[4px]">Submit</button>
      </form>
    </section>
  );
};

export default UpdateLabResource;
