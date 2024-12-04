import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllLibraryItems } from '../../redux/actions/library';
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
const LibraryItems = () => {
    const dispatch = useDispatch();
    const { items } = useSelector(state => state.library)
    useEffect(() => {
        dispatch(getAllLibraryItems())
    }, [items])
    return (
        <section className='w-full !p-0'>
            <table>
                <thead>
                    <tr>
                        <th>Sr</th>
                        <th>Title</th>
                        <th>Subtitle</th>
                        <th>Category</th>
                        <th>Author</th>
                        <th>Edition</th>
                        <th>Location</th>
                        <th>Isbn</th>
                        <th>Publisher Code</th>
                        <th>Copyright</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {items && items.length > 0 && items.map((i, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{i.title}</td>
                            <td>{i.subtitle}</td>
                            <td>{i.type}</td>
                            <td>{i.author}</td>
                            <td>{i.edition}</td>
                            <td>{i.location}</td>
                            <td>{i.isbn}</td>
                            <td>{i.publisherCode}</td>
                            <td>{i.copyright}</td>
                            <td className='actions'>
                                <button>
                                    <IoEyeOutline />
                                </button>

                                <button>
                                    <FaRegEdit />
                                </button>
                                <button>
                                    <MdDeleteOutline />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    )
}

export default LibraryItems
