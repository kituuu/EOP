"use client";
import "./connect.scss";
function Connect() {
  const connect = () => {
    console.log("connect");
  };
  return (
    <div className="connect-btn" onClick={connect}>
      Connect
    </div>
  );
}

export default Connect;
