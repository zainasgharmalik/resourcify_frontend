import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLabResources } from "../../redux/actions/lab";

const LabResources = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.lab);
  useEffect(() => {
    dispatch(getLabResources());
  }, [items]);

  return (
    <section className="!p-0">
      <table>
        <thead>
          <tr>
            <th>Sr</th>
            <th>Software</th>
            <th>Version</th>
            <th>Link</th>
            <th>Insturctions</th>
            <th>Tested OS</th>
            <th>Publisher</th>
            <th>Size</th>
          </tr>
        </thead>
        <tbody>
          {items &&
            items.length > 0 &&
            items.map((i, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{i.title}</td>
                <td>{i.version}</td>
                <td>{i.link}</td>
                <td></td>
                <td>{i.os}</td>
                <td>{i.publisher}</td>
                <td>{i.size}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </section>
  );
};

export default LabResources;
