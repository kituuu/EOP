import React from "react";
import "./details.scss";
function ViewDiscussion() {
  return (
    <main className="flex min-h-screen flex-row items-center justify-between">
      <div className="left-container w-2/3 min-h-screen flex flex-col justify-center items-center gap-10">
        <div className="features flex flex-col gap-10 justify-around  w-4/5 ">
          <div className="h-20 w-3/4 details">txt</div>
          <div className="h-20 w-3/4 details">txt</div>
          <div className="h-20 w-3/4 details">txt</div>
          <div className="h-40 w-3/4 details comments">Comments</div>
        </div>
      </div>
      <div className="right-container w-1/3 min-h-screen flex flex-col justify-center items-center">
        <div className="tokeninfo w-4/5">kuch toh aayega idhar</div>
      </div>
    </main>
  );
}

export default ViewDiscussion;
