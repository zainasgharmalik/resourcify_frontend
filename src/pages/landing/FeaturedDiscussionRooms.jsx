import React from "react";
import DiscussionRoom from "../../components/DiscussionRoom";
import { assets } from "../../assets";

const FeaturedDiscussionRooms = () => {
  return (
    <section className="flex flex-col w-full sec-section">
      <div className="flex items-center justify-between row">
        <h2>Discussion Rooms</h2>
      </div>

      <div className="w-full grid grid-cols-4 xl:grid-cols-6 mt-[16px] gap-[16px]">
        <DiscussionRoom id={1} image={assets.discussion_room_home} title={"Room Title"}/>
        <DiscussionRoom id={1} image={assets.discussion_room_home} title={"Room Title"}/>
        <DiscussionRoom id={1} image={assets.discussion_room_home} title={"Room Title"}/>
        <DiscussionRoom id={1} image={assets.discussion_room_home} title={"Room Title"}/>
        <DiscussionRoom id={1} image={assets.discussion_room_home} title={"Room Title"}/>
        <DiscussionRoom id={1} image={assets.discussion_room_home} title={"Room Title"}/>
      </div>
    </section>
  );
};

export default FeaturedDiscussionRooms;
