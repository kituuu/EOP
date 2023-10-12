import Input from "@/app/components/Input/Input";
import Search from "@/app/components/Search/Search";
import React from "react";
import "./create.scss";
function CreateDiscussion() {
  return (
    <main className="flex min-h-screen flex-row items-center justify-between">
      <div className="left-container w-full min-h-screen flex flex-col justify-center items-center gap-10">
        <div className="features flex flex-col justify-around  w-2/4">
          <div className="input input-link">
            <label htmlFor="link">Link</label>
            <input type="text" id="link" placeholder="Link" />
          </div>
          <div className="input input-find">
            <label htmlFor="link">Where did you find it?</label>
            <input type="text" id="link" placeholder="Where did you find it?" />
          </div>
          <div className="input input-purpose">
            <label htmlFor="link">What purpose does it serve?</label>
            <input
              type="text"
              id="link"
              placeholder="What purpose does it serve?"
            />
          </div>
          <div className="submitbtn">
            <button>Submit</button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default CreateDiscussion;
