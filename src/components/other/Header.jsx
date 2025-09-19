import React, { useEffect } from "react";
import { useState } from "react";
const Header = (props) => {
  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    props.changeUser("");
  };
  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br />{" "}
        <span className="text-3xl font-semibold">
          {props.data ? props.data.firstName : "Admin"} 👋
        </span>
      </h1>
      <button
        onClick={logOutUser}
        className="bg-red-600 text-base font-medium text-white px-5 py-2 rounded-sm"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;

// import React, { useEffect } from "react";
// import { useState } from "react";

// const Header = ({ changeUser, data }) => {
//   // ✅ CHANGED: Destructure props properly
//   const logOutUser = () => {
//     localStorage.setItem("loggedInUser", "");
//     changeUser(""); // ✅ CHANGED: Use changeUser directly
//   };

//   return (
//     <div className="flex items-end justify-between">
//       <h1 className="text-2xl font-medium">
//         Hello <br />
//         <span className="text-3xl font-semibold">
//           {data ? data.firstName : "Admin"} 👋{" "}
//           {/* ✅ CHANGED: Dynamic username */}
//         </span>
//       </h1>
//       <button
//         onClick={logOutUser}
//         className="bg-red-600 text-base font-medium text-white px-5 py-2 rounded-sm"
//       >
//         Log Out
//       </button>
//     </div>
//   );
// };

// export default Header;
