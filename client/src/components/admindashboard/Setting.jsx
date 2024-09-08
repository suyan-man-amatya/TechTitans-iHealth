import React, { useState } from "react";
import Sidebar from "./Sidebar";
import adin from "../../assets/adin.png";

function Setting() {
  // Initial profile data
  const [profile, setProfile] = useState({
    username: "user123",
    email: "user123@example.com",
    bio: "This is a short bio.",
    photo: adin, // URL or base64 data for the photo
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  // Handle photo change
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile({ ...profile, photo: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // Normally, you would submit the form data to a server here.
    console.log("Profile updated:", profile);
  };

  return (
    <div className="flex h-screen">
      <aside className="w-64 h-full  text-white fixed top-0 left-0 flex flex-col ">
        <Sidebar />
      </aside>
      <main className="flex-1 ml-24 p-6 bg-gray-100 flex flex-col">
        <h1 className="text-2xl font-bold mb-6">Admins Profile Settings</h1>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 border border-gray-300 rounded-lg shadow-md"
        >
          <div className="mb-6 flex flex-col items-center">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Profile Photo
            </label>
            <div className="relative w-32 h-32 mb-4">
              {profile.photo ? (
                <img
                  src={profile.photo}
                  alt="Profile"
                  className="absolute inset-0 w-full h-full object-cover rounded-full border border-gray-300"
                />
              ) : (
                <div className="absolute inset-0 w-full h-full bg-gray-200 rounded-full border border-gray-300 flex items-center justify-center">
                  <span className="text-gray-500">No Photo</span>
                </div>
              )}
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              className="block w-full text-sm text-gray-500 file:py-2 file:px-4 file:border file:border-gray-300 file:rounded-md file:bg-gray-50 file:text-gray-700 file:cursor-pointer hover:file:bg-gray-100"
            />
          </div>
          {/* Username Input */}
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={profile.username}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          {/* Email Input */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          {/* Bio Textarea */}
          <div className="mb-4">
            <label
              htmlFor="bio"
              className="block text-sm font-medium text-gray-700"
            >
              Bio
            </label>
            <textarea
              id="bio"
              name="bio"
              value={profile.bio}
              onChange={handleChange}
              rows="4"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Save Changes
          </button>
        </form>
      </main>
    </div>
  );
}

export default Setting;
