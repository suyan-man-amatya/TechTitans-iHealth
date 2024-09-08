import React, { useState } from "react";
import emailjs from "emailjs-com";
import Sidebar from "./Sidebar";

const Email = () => {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");
  const [response, setResponse] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      to_email: to,
      subject,
      message: text,
    };

    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        templateParams,
        "YOUR_USER_ID"
      )
      .then((result) => {
        setResponse("Email sent successfully!");
        setShowAlert(true);
        console.log(result.text);
      })
      .catch((error) => {
        setResponse("Failed to send email.");
        setShowAlert(true);
        console.error(error.text);
      });
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <section className="email">
      <aside className="sidebar w-64 h-screen fixed top-0 left-0 flex flex-col">
        <Sidebar />
      </aside>
      <main className="flex ml-24 mt-5 p-4 flex-col w-[80vw]">
        <div className="container mx-auto p-4 bg-white shadow-md rounded-lg">
          <h1 className="text-2xl font-bold mb-4">Send an Email</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="to" className="block text-sm font-medium">
                To
              </label>
              <input
                id="to"
                type="email"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <div>
              <label htmlFor="text" className="block text-sm font-medium">
                Message
              </label>
              <textarea
                id="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Send Email
            </button>
          </form>
          {showAlert && (
            <div
              className={`mt-4 p-4 rounded-md ${
                response === "Email sent successfully!"
                  ? "bg-green-100 border-green-500 text-green-800"
                  : "bg-yellow-100 border-yellow-500 text-yellow-800"
              } border`}
            >
              <div className="flex justify-between items-center">
                <p>{response}</p>
                <button
                  onClick={handleCloseAlert}
                  className="text-sm font-bold text-gray-500"
                >
                  &times;
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </section>
  );
};

export default Email;
