import React, { useState } from "react";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e:any) => {
    e.preventDefault();
    setFirstName("");
    setLastName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <div className="container mx-auto px-4 py-4 m-4 sm:my-16 w-full sm:w-1/2">

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4 mb-4 ">
          <div>
            <label htmlFor="firstName" className="block text-lg font-semibold mb-2 text-gray-300">
              İsim
            </label>
            <input
              type="text"
              id="firstName"
              className="w-full p-2 border border-gray-400 bg-transparent text-gray-300 rounded focus:outline-none"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-lg font-semibold mb-2 text-gray-300">
              Soyisim
            </label>
            <input
              type="text"
              id="lastName"
              className="w-full p-2 border border-gray-400  bg-transparent text-gray-300 rounded focus:outline-none"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-semibold mb-2 text-gray-300">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border border-gray-400  bg-transparent text-gray-300 rounded focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="subject" className="block text-lg font-semibold mb-2 text-gray-300">
            Başlık
          </label>
          <input
            type="text"
            id="subject"
            className="w-full p-2 border border-gray-400  bg-transparent text-gray-300 rounded focus:outline-none"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-lg font-semibold mb-2 text-gray-300">
            İçerik
          </label>
          <textarea
            id="message"
            className="w-full p-2 border border-gray-400  bg-transparent text-gray-300 rounded focus:outline-none"
            rows={6}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-sky-700 text-white font-semibold py-1 px-2 rounded"
        >
          Gönder
        </button>
      </form>
    </div>
  );
};

export default Contact;
