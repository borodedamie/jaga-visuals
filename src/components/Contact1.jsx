import React, { useState, useRef } from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import 'react-toastify/dist/ReactToastify.css';
import { BiLogoFacebook } from "react-icons/bi";
import { AiFillYoutube } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";

const Contact1 = () => {
  const [isEmailHovered, setIsEmailHovered] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [error, setError] = useState();
  const copyToClipboard = () => {
    navigator.clipboard.writeText("hello@jagavisuals.com");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    fetch("https://formsubmit.co/ajax/hello@jagavisuals.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Response Data:", data);
        // Display success toast notification
        toast.success("Form submitted successfully!");
        // Clear form data after successful submission
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Error during form submission:", error);
        // Display error toast notification
        toast.error("Failed to submit form. Please try again later.");
      });
  };

  

  return (
    <div className="flex mx-5 md:mx-0 pt-[2rem] md:pt-0 pb-[5rem] md:pb-[4rem] flex-col lg:flex-row justify-center items items-center md:items-stretch md:px-[15vw] lg:px-[5vw] lg:items-center gap-[2rem] lg:gap-[5rem] xl:gap-[10rem] h-fit lg:h-[90vh]">
      <div className="flex flex-col">
        <div>
          <h1 className="text-[blue] text-[35px] md:text-[40px]  font-bold mb-[1rem]">
            Let's create magic
          </h1>{" "}
          <p className="text-[25px] font-bold">
            Let us help you get your <br /> project started.
          </p>
        </div>
        <div>
          <h2 className="text-[25px] font-bold pt-[1rem]">Contact us</h2>
          <p
            onClick={copyToClipboard}
            className={`text-[blue] text-[30px] font-bold cursor-pointer ${
              isEmailHovered ? "ishovered" : ""
            }`}
            onMouseEnter={() => setIsEmailHovered(true)}
            onMouseLeave={() => {
              setIsEmailHovered(false);
              setIsCopied(false);
            }}
          >
            hello@jagavisuals.com
          </p>
          <div style={{ height: "10px" }}>
            {isEmailHovered && isCopied && (
              <p className="text-[blue] font-bold text-[18px]">Copied!</p>
            )}
            {isEmailHovered && !isCopied && (
              <p
                onClick={copyToClipboard}
                className="text-[blue] font-bold text-[18px] cursor-pointer"
              >
                Copy to clipboard...
              </p>
            )}
          </div>
          <div className="mt-[1rem] gap-3 lg:pb-16 pt-5 flex flex-row">
            <div className="cursor-pointer bg-[#5b5959] rounded-full border flex h-[3rem] w-[3rem] items-center text-center justify-center">
              <BiLogoFacebook className="text-white text-[25px]" />
            </div>
            <div className="cursor-pointer bg-[#5b5959] rounded-full border flex h-[3rem] w-[3rem] items-center text-center justify-center">
              <AiOutlineInstagram className="text-white text-[25px]" />
            </div>

            <div className="cursor-pointer bg-[#5b5959] rounded-full border flex h-[3rem] w-[3rem] items-center text-center justify-center">
              <AiFillYoutube className="text-white text-[25px]" />
            </div>
          </div>
        </div>
      </div>
      <hr className="hidden lg:flex h-[24rem] bg-gray-200 border-2 dark:bg-gray-700"></hr>
      <div className="flex flex-col">
        <h1 className="text-[blue] text-[35px] font-bold pb-7">
          Start your project
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="flex flex-col lg:flex-row gap-2 lg:gap-[1rem] mb-3 w-full">
            <input
              className="border-b-2 font-medium border-[#5b5959] leading-10"
              placeholder="First Name"
              id="first-name"
              name="firstName"
              required
              value={formData.firstName}
              onChange={handleInputChange}
            />
            <input
              className="border-b-2  font-medium border-[#5b5959] leading-10"
              placeholder="Last Name"
              id="last-name"
              name="lastName"
              required
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </div>
          <input
            className="border-b-2 font-medium mb-5 border-[#5b5959] leading-10"
            value={formData.email}
            onChange={handleInputChange}
            type="email"
            id="email"
            name="email"
          />
          {error && <p className="text-red-500">{error}</p>}

          <input
            className="border-2 font-medium mt-3 mb-5 border-[#5b5959] leading-10"
            type="text"
            placeholder="Message"
            id="message"
            name="message"
            required=""
            value={formData.message}
            onChange={handleInputChange}
          />
          <div className="flex flex-row justify-end">
            <button
              type="submit"
              className="border-[2px] hover:text-[white] hover:bg-[blue] items-center cursor-pointer font-bold tracking-widest w-[12rem] h-[3.5rem] flex text-[14px] text-center justify-center rounded-[2rem] border-[blue]"
            >
              SUBMIT
            </button>
          </div>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact1;
