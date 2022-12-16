import React from "react";
// import Add from "../img/addAvatar.png";
// import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
// import { auth, storage, db } from "../firebase";
// import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// import { doc, setDoc } from "firebase/firestore";
// import { Link, useNavigate } from "react-router-dom";

function Register() {
  //   const [err, setErr] = useState(false);
  //   const navigate = useNavigate();

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     const displayName = e.target[0].value;
  //     const email = e.target[1].value;
  //     const password = e.target[2].value;

  // try {
  //   const res = await createUserWithEmailAndPassword(auth, email, password);
  //   console.log(res);

  //   const storageRef = ref(storage, displayName);

  //   const uploadTask = uploadBytesResumable(storageRef, file);

  //   uploadTask.on(
  //     (error) => {
  //       setErr(true);
  //     },
  //     () => {
  //       getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
  //         await updateProfile(res.user, {
  //           displayName,
  //           photoURL: downloadURL,
  //         });
  //         await setDoc(doc(db, "users", res.user.uid), {
  //           uid: res.user.uid,
  //           displayName,
  //           email,
  //           photoURL: downloadURL,
  //         });
  //         await setDoc(doc(db, "userChats", res.user.uid), {});
  //         navigate("/");
  //       });
  //     }
  //   );
  // } catch (err) {
  //   setErr(true);
  // }
  //   };

  return (
    <div className="flex items-center justify-center h-screen ">
      
      <div className="flex flex-col gap-3 items-start justify-center xs:w-4/5 w-6/12">
        
        <div>
          <h3 className="text-xl font-bold mb-5">Create an account</h3>
          <p className=" text-[14px] font-semibold">
            Create apersonal account <br />
            
            {/* Sign in to ebay or <Link to="/register">create an account</Link> */}
          </p>
        </div>
        <p>Continue with:</p>
        <div className="flex justify-evenly w-full cursor-pointer">
          <div className="border-gray-400 border p-2 rounded-full">
            <img
              className="w-[20px]"
              src="https://img.icons8.com/fluency/48/null/google-logo.png"
              alt=""
            />
          </div>
          <div className="border-gray-400 border p-2 rounded-full">
            <img
              className="w-[20px]"
              src="https://img.icons8.com/material-rounded/24/000000/facebook.png"
              alt=""
            />
          </div>
          <div className="border-gray-400 border p-2 rounded-full">
            <img
              className="w-[20px]"
              src="https://pngimg.com/uploads/apple_logo/apple_logo_PNG19666.png"
              S
              alt=""
            />
          </div>
        </div>
        <form className="flex flex-col gap-5 w-full">
          <div class="relative flex justify-center py-1 items-center">
            <div class="flex-grow border-t border-gray-400"></div>
            <span class="flex-shrink mx-2 text-gray-400">or</span>
            <div class="flex-grow border-t border-gray-400"></div>
          </div>
          <div className="flex gap-2 w-full">
            <input
              className="w-2/4 focus:ring-2 focus:ring-teal-300 border-solid border-[1px] rounded-lg p-1 px-2 ring-1 ring-gray-300 outline-none"
              type="text"
              placeholder="First name"
            />
            <input
              className="w-2/4 focus:ring-2 focus:ring-teal-300 border-solid border-[1px] rounded-lg p-1 px-2 ring-1 ring-gray-300 outline-none"
              type="text"
              placeholder="Last name"
            />
          </div>
          <input
            className="focus:ring-2 focus:ring-teal-300 border-solid border-[1px] rounded-lg p-1 px-2 ring-1 ring-gray-300 outline-none"
            type="email"
            placeholder="Email"
          />
          <input
            className="focus:ring-2 focus:ring-teal-300 border-solid border-[1px] rounded-lg p-1 px-2 ring-1 ring-gray-300 outline-none"
            type="password"
            placeholder="Password"
          />
          {/* {err && <span>Something went wrong</span>} */}
          <button
            className="bg-gray-400 text-gray-50 p-2 w-full rounded-full tracking-wide
                                font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-gray-500
                                "
          >
            Create account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
