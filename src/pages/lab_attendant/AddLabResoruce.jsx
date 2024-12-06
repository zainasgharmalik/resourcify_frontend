import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createLabResource } from "../../redux/actions/lab";
import Loading from "../other/Loading";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const AddLabResoruce = () => {
  const [title, setTitle] = useState("");
  const [version, setVersion] = useState("");
  const [link, setLink] = useState("");
  const [instructions, setInstructions] = useState("");
  const [os, setOS] = useState("");
  const [publisher, setPublisher] = useState("");
  const [size, setSize] = useState("");
  const [icon, setIcon] = useState("");

  const dispatch = useDispatch();

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
    myForm.append("icon", icon);

    dispatch(createLabResource(myForm));
  };

  const { message, error, loading } = useSelector((state) => state.lab);
  const navigate = useNavigate();
  
  const changeImageHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPoster(file);
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

  return loading ? (
    <Loading />
  ) : (
    <section className="!p-0">
      <form
        action=""
        className="bg-white p-[16px] rounded-lg flex flex-col gap-[4px]"
        onSubmit={submitHandler}
      >
        <h2 className="text-2xl font-clemente-regular">Add New Lab Resource</h2>

        <label htmlFor="">
          <span>Title</span>
          <input type="text" placeholder="Enter Title" />
        </label>

        <label htmlFor="">
          <span>Version</span>
          <input type="text" placeholder="Enter Version" />
        </label>

        <label htmlFor="">
          <span>Link</span>
          <input type="text" placeholder="Enter Link" />
        </label>

        <label htmlFor="">
          <span>Installation (, separator)</span>
          <textarea
            name=""
            id=""
            placeholder="Enter Instructions"
            className="resize-none"
          ></textarea>
        </label>

        <label htmlFor="">
          <span>Tested Os</span>
          <input type="text" placeholder="Enter Os" />
        </label>

        <label htmlFor="">
          <span>Publisher</span>
          <input type="text" placeholder="Enter Publisher" />
        </label>

        <label htmlFor="">
          <span>Size</span>
          <input type="text" placeholder="Enter Size" />
        </label>

        <label htmlFor="">
          <span>Icon</span>
          <input type="file" placeholder="Enter Size" />
        </label>

        <button className="primary-btn !w-full mt-[4px]">Submit</button>
      </form>
    </section>
  );
};

export default AddLabResoruce;
