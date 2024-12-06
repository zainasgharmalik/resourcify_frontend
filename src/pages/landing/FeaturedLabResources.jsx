import React from "react";
import LibraryItem from "../../components/LibraryItem";
import LabResource from "../../components/LabResource";
import { assets } from "../../assets";

const FeaturedLabResources = () => {
  return (
    <section className="flex flex-col w-full sec-section">
      <div className="flex items-center justify-between row">
        <h2>Lab Resources</h2>
      </div>

      <div className="w-full grid grid-cols-4 mt-[16px] gap-[16px]">
        <LabResource image={assets.vscode} title={"VSCode"} description={"Best IDE for web developement"} status={"available"}/>
        <LabResource image={assets.vscode} title={"VSCode"} description={"Best IDE for web developement"} status={"available"}/>
        <LabResource image={assets.vscode} title={"VSCode"} description={"Best IDE for web developement"} status={"available"}/>
        <LabResource image={assets.vscode} title={"VSCode"} description={"Best IDE for web developement"} status={"available"}/>
      </div>
    </section>
  );
};

export default FeaturedLabResources;
