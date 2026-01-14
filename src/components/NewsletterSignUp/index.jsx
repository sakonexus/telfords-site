import { useState, useEffect } from 'react';
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/outline';

const NewsletterSignUp = () => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
  });

  const [submitStatus, setSubmitStatus] = useState({
    message: '',
    submitted: false,
    failed: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/add-contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (response.ok) {
      setSubmitStatus({
        message: 'Email submitted successfully.',
        submitted: true,
        failed: false,
      });
      setFormData({
        email: '',
        firstName: '',
        lastName: '',
      });
    } else {
      setSubmitStatus({
        message: `'Error: ' + ${JSON.stringify(result.error)}`,
        submitted: true,
        failed: true,
      });
    }
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,10}$/.test(email);
  };

  return (
    <div className="flex flex-col p-8 w-full mt-8 justify-center items-center xs:p-4">
      <div className="text-center w-full">
        <h2 className="text-6xl font-MonteCarlo">
          Sign up for our&nbsp;newsletter
        </h2>
        <p className="mt-4">
          Stay informed about upcoming events, special offers, and&nbsp;more!
        </p>
      </div>
      {submitStatus.submitted && !submitStatus.failed ? (
        <div className="flex flex-col items-center justify-center my-12">
          <CheckCircleIcon className="w-24 text-green-600 rounded-full" />
          <p className="text-2xl">{submitStatus.message}</p>
        </div>
      ) : (
        !submitStatus.submitted && (
          <form
            className="flex flex-col justify-center items-center mt-8 w-full"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col justify-center items-center w-full max-w-md">
              <div className="grid grid-cols-[max-content_1fr] gap-x-4 gap-y-4 w-full">
                <label className="input-label self-end">Email*</label>
                <input
                  className="input-field w-full"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                <label className="input-label self-end">First Name</label>
                <input
                  className="input-field w-full"
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />

                <label className="input-label self-end">Last Name</label>
                <input
                  className="input-field w-full"
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>

              <div className="mt-6 text-left flex justify-start items-start w-full">
                <p className="text-sm">*Required field</p>
              </div>
              <button
                disabled={!isValidEmail(formData.email)}
                className={`${
                  isValidEmail(formData.email)
                    ? 'bg-[#8c2825] text-white hover:cursor-pointer hover:bg-[#a42f2b]'
                    : 'bg-gray-400 text-text-primary hover:cursor-default'
                } w-72 text-xl rounded-sm px-8 py-4 font-semibold mt-8 transition-all duration-300`}
              >
                Submit
              </button>
            </div>
          </form>
        )
      )}
      {submitStatus.submitted && submitStatus.failed && (
        <div className="flex flex-col items-center justify-center my-12">
          <ExclamationTriangleIcon className="w-24 text-red-600" />
          <p className="text-xl font-bold">{submitStatus.message}</p>
        </div>
      )}
    </div>
  );
};

export default NewsletterSignUp;
