// import React, { useState } from 'react';
// import { Mail, User, MessageCircle } from 'lucide-react';

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // In a real application, you would handle form submission here
//     // For now, we'll just show a submission confirmation
//     console.log('Form submitted:', formData);
//     setSubmitted(true);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center w-full m-auto">
//         <div className="text-center">
//           <h2 className="text-3xl font-bold text-gray-800">Contact Me</h2>
//           <p className="text-gray-600 mt-2">I'd love to hear from you!</p>
//         </div>
//         <div className='flex justify-between'>
//         <div>
//             <div className='bg-blue-400 text-black flex flex-col justify-center text-center'>
//                 <span>Email:</span>
//                 <span>olatoyesefaruq@gmail.com</span>
//                 <spa>Send Mail</spa>
//             </div>
//         </div>
//       <div className="max-w-md w-full bg-white shadow-md rounded-lg p-8 space-y-6">
        
//         {submitted ? (
//           <div className="text-center text-green-600 bg-green-50 p-4 rounded-md">
//             <h3 className="text-xl font-semibold">Thank you!</h3>
//             <p>Your message has been sent successfully.</p>
//           </div>
//         ) : (
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div className="relative">
//               <label htmlFor="name" className="sr-only">Name</label>
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <User className="h-5 w-5 text-gray-400" />
//               </div>
//               <input 
//                 type="text" 
//                 id="name"
//                 name="name"
//                 required
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="Your Name"
//                 className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             <div className="relative">
//               <label htmlFor="email" className="sr-only">Email</label>
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <Mail className="h-5 w-5 text-gray-400" />
//               </div>
//               <input 
//                 type="email"
//                 id="email"
//                 name="email"
//                 required
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Your Email"
//                 className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             <div className="relative">
//               <label htmlFor="message" className="sr-only">Message</label>
//               <div className="absolute inset-y-0 left-0 pl-3 pt-2 pointer-events-none">
//                 <MessageCircle className="h-5 w-5 text-gray-400" />
//               </div>
//               <textarea 
//                 id="message"
//                 name="message"
//                 required
//                 value={formData.message}
//                 onChange={handleChange}
//                 placeholder="Your Message"
//                 rows="4"
//                 className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             <button 
//               type="submit" 
//               className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
//             >
//               Send Message
//             </button>
//           </form>
//         )}
//       </div>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;

import React, { useState } from 'react';
import { Mail, User, MessageCircle } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    // For now, we'll just show a submission confirmation
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  return (
    <div id='contact' className="flex flex-col items-center justify-center w-full mt-20 mb-10">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Contact Me</h2>
        <p className="text-gray-600 mt-2">I'd love to hear from you!</p>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-8 w-full max-w-4xl mx-auto">
        
        {/* Email Info Section */}
        <div className='flex flex-col gap-5'>
        <div className="bg-blue-400 text-black p-6 rounded-lg flex flex-col justify-center items-center">
        <Mail className="h-5 w-5 text-black" />
          <span className="text-lg font-semibold">Email:</span>
          <span className="text-xl mb-2">olatoyesefaruq@gmail.com</span>
          <a 
            href="mailto:olatoyesefaruq@gmail.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Send Mail
          </a>
        </div>
        <div className="bg-blue-400 text-black p-6 rounded-lg flex flex-col justify-center items-center">
            <span className='text-2xl'><FaWhatsapp /></span>
          <span className="text-lg font-semibold">Whatsapp:</span>
          <span className="text-xl mb-2">+2349134983159</span>
          <a 
            href="https://wa.me/09134983159"
            target="_blank"
            rel="noopener noreferrer" 
            className="text-white bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Send a Message
          </a>
        </div>
        </div>

        {/* Contact Form Section */}
        <div className="max-w-md w-full bg-white shadow-md rounded-lg p-8 space-y-6">
          {submitted ? (
            <div className="text-center text-green-600 bg-green-50 p-4 rounded-md">
              <h3 className="text-xl font-semibold">Thank you!</h3>
              <p>Your message has been sent successfully.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <label htmlFor="name" className="sr-only">Name</label>
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="relative">
                <label htmlFor="email" className="sr-only">Email</label>
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input 
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="relative">
                <label htmlFor="message" className="sr-only">Message</label>
                <div className="absolute inset-y-0 left-0 pl-3 pt-2 pointer-events-none">
                  <MessageCircle className="h-5 w-5 text-gray-400" />
                </div>
                <textarea 
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="4"
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button 
                type="submit" 
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
