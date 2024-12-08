import Select from "react-select";
import { styles } from "../../utils/selectStyles";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createLibraryItem } from "../../redux/actions/library";
import { libraryItemCategories } from "../../utils/selectOptions";
import Loading from "../other/Loading";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddNewLibraryItem = () => {
  const { loading, error, message } = useSelector((state) => state.library);
  const [title, setTitle] = useState("");
  const [subtitle, setSubTitle] = useState("");
  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState("");
  const [edition, setEdition] = useState("");
  const [location, setLocation] = useState("");
  const [isbn, setIsbn] = useState("");
  const [publisherCode, setPublisherCode] = useState("");
  const [copyright, setCopyright] = useState("");
  const [poster, setPoster] = useState("");

  const dispatch = useDispatch();

  const changeImageHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPoster(file);
    };
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.append("title", title);
    myForm.append("subtitle", subtitle);
    myForm.append("type", category.value);
    myForm.append("author", author);
    myForm.append("edition", edition);
    myForm.append("location", location);
    myForm.append("isbn", isbn);
    myForm.append("publisherCode", publisherCode);
    myForm.append("copyright", copyright);
    myForm.append("file", poster);

    dispatch(createLibraryItem(myForm));
  };
  const navigate = useNavigate();
  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
      navigate("/librarian");
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
        onSubmit={submitHandler}
        action=""
        className="bg-white p-[16px] rounded-lg flex flex-col gap-[4px]"
      >
        <label htmlFor="">
          <span className="inline-block mb-[4px]">Title</span>
          <input
            type="text"
            placeholder="Enter Book Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>

        <label htmlFor="">
          <span className="inline-block mb-[4px]">Subtitle</span>
          <input
            type="text"
            placeholder="Enter Subtitle"
            value={subtitle}
            onChange={(e) => setSubTitle(e.target.value)}
          />
        </label>

        <label htmlFor="">
          <span className="inline-block mb-[4px]">Category</span>
          <Select
            options={libraryItemCategories}
            placeholder="Choose Category"
            styles={styles}
            value={category}
            onChange={setCategory}
          />
        </label>

        <label htmlFor="">
          <span className="inline-block mb-[4px]">Author</span>
          <input
            type="text"
            placeholder="Enter Author Name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </label>

        <label htmlFor="">
          <span className="inline-block mb-[4px]">Edition</span>
          <input
            type="text"
            placeholder="Enter Edition"
            value={edition}
            onChange={(e) => setEdition(e.target.value)}
          />
        </label>

        <label htmlFor="">
          <span className="inline-block mb-[4px]">Location</span>
          <input
            type="text"
            placeholder="Enter Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>

        <label htmlFor="">
          <span className="inline-block mb-[4px]">Isbn</span>
          <input
            type="text"
            placeholder="Enter Isbn"
            value={isbn}
            onChange={(e) => setIsbn(e.target.value)}
          />
        </label>

        <label htmlFor="">
          <span className="inline-block mb-[4px]">Publisher Code</span>
          <input
            type="text"
            placeholder="Enter Publisher Code"
            value={publisherCode}
            onChange={(e) => setPublisherCode(e.target.value)}
          />
        </label>

        <label htmlFor="">
          <span className="inline-block mb-[4px]">Copyright</span>
          <input
            type="text"
            placeholder="Enter Copyright"
            value={copyright}
            onChange={(e) => setCopyright(e.target.value)}
          />
        </label>

        <label htmlFor="">
          <span className="inline-block mb-[4px]">Poster</span>
          <input
            type="file"
            placeholder="Enter Copyright"
            onChange={changeImageHandler}
          />
        </label>

        <button className="primary-btn !w-full inline-block mt-[4px]">
          Submit
        </button>
      </form>
    </section>
  );
};

export default AddNewLibraryItem;
