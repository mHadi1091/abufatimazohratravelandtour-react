// import React, { useState, useEffect } from "react";
// import "./Modal.css";

// const Modal = ({ showModal, handleClose }) => {
//   const [isRegister, setIsRegister] = useState(false); // State to toggle between forms

//   useEffect(() => {
//     if (showModal) {
//       document.body.style.overflow = "hidden"; // Disable scroll
//     } else {
//       document.body.style.overflow = "auto"; // Re-enable scroll
//     }

//     return () => {
//       document.body.style.overflow = "auto"; // Ensure to clean up on unmount
//     };
//   }, [showModal]);

//   if (!showModal) return null;

//   return (
//     <div className="modal-overlay">
//       <div className="modal-content">
//         <span className="modal-close" onClick={handleClose}>
//           ×
//         </span>
//         <h2>{isRegister ? "Register" : "Join Our Mailing List"}</h2>
//         <form>
//           {isRegister ? (
//             <>
//               <div>
//                 <label>Username *</label>
//                 <input type="text" placeholder="Username" required />
//               </div>
//               <div>
//                 <label>Phone Number *</label>
//                 <input type="tel" placeholder="Phone Number" required />
//               </div>
//               <div>
//                 <label>Email *</label>
//                 <input type="email" placeholder="Email" required />
//               </div>
//               <div>
//                 <label>Password *</label>
//                 <input type="password" placeholder="Password" required />
//               </div>
//               <div>
//                 <label>Confirm Password *</label>
//                 <input
//                   type="password"
//                   placeholder="Confirm Password"
//                   required
//                 />
//               </div>
//               <button type="submit">Register</button>
//             </>
//           ) : (
//             <>
//               <div>
//                 <label>Email *</label>
//                 <input type="email" placeholder="Email" required />
//               </div>
//               <div>
//                 <label>First name</label>
//                 <input type="text" placeholder="First name" />
//               </div>
//               <button type="submit">Submit</button>
//             </>
//           )}
//         </form>
//         <p onClick={() => setIsRegister(!isRegister)} className="toggle-text">
//           {isRegister
//             ? "Already have an account? Join Our Mailing List"
//             : "Don't have an account? Register"}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Modal;

import React, { useState, useEffect } from "react";
import "./Modal.css";

const Modal = ({ showModal, handleClose }) => {
  const [isRegister, setIsRegister] = useState(false);
  const [animateClose, setAnimateClose] = useState(false); // State to handle close animation

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden"; // Disable scroll
    } else {
      document.body.style.overflow = "auto"; // Re-enable scroll
    }

    return () => {
      document.body.style.overflow = "auto"; // Clean up
    };
  }, [showModal]);

  // Handle closing with animation
  const closeWithAnimation = () => {
    setAnimateClose(true); // Trigger close animation
    setTimeout(() => {
      handleClose(); // Close modal after animation ends
      setAnimateClose(false); // Reset animation state
    }, 400); // Match this to the animation duration
  };

  if (!showModal) return null;

  return (
    <div className={`modal-overlay ${animateClose ? "fade-out" : ""}`}>
      <div className="modal-content">
        <span className="modal-close" onClick={closeWithAnimation}>
          ×
        </span>
        <h2>{isRegister ? "Register" : "Join Our Mailing List"}</h2>
        <form>
          {isRegister ? (
            <>
              <div>
                <label>Username *</label>
                <input type="text" placeholder="Username" required />
              </div>
              <div>
                <label>Phone Number *</label>
                <input type="tel" placeholder="Phone Number" required />
              </div>
              <div>
                <label>Email *</label>
                <input type="email" placeholder="Email" required />
              </div>
              <div>
                <label>Password *</label>
                <input type="password" placeholder="Password" required />
              </div>
              <div>
                <label>Confirm Password *</label>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  required
                />
              </div>
              <button type="submit">Register</button>
            </>
          ) : (
            <>
              <div>
                <label>Email *</label>
                <input type="email" placeholder="Email" required />
              </div>
              <div>
                <label>First name</label>
                <input type="text" placeholder="First name" />
              </div>
              <button type="submit">Submit</button>
            </>
          )}
        </form>
        <p onClick={() => setIsRegister(!isRegister)} className="toggle-text">
          {isRegister
            ? "Already have an account? Join Our Mailing List"
            : "Don't have an account? Register"}
        </p>
      </div>
    </div>
  );
};

export default Modal;
