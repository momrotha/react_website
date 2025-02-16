import React from "react";

const ContactComponent = () => {
  return (
    <div className="container my-12 mt-20  mx-auto px-2 md:px-4">
      <section className="mb-32">
        <div className="flex justify-center">
          <div className="text-center md:max-w-xl lg:max-w-3xl">
            <h2 className="mb-12 px-6 text-3xl font-bold">Contact us</h2>
          </div>
        </div>

        <div className="flex flex-wrap">
          {/* Contact Form */}
          <form className="mb-12 w-full md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
            <div className="mb-3 w-full">
              <label
                className="block font-medium mb-1 text-teal-700"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                className="px-2 py-2 border w-full outline-none rounded-md"
                id="name"
                placeholder="Name"
              />
            </div>

            <div className="mb-3 w-full">
              <label
                className="block font-medium mb-1 text-teal-700"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                className="px-2 py-2 border w-full outline-none rounded-md"
                id="email"
                placeholder="Enter your email address"
              />
            </div>

            <div className="mb-3 w-full">
              <label
                className="block font-medium mb-1 text-teal-700"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="px-2 py-2 border rounded-md w-full outline-none"
                id="message"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="mb-6 w-full rounded bg-teal-400 px-6 py-2.5 font-medium uppercase text-white hover:shadow-md hover:bg-teal-500"
            >
              Send
            </button>
          </form>

          {/* Contact Details */}
          <div className="w-full lg:w-7/12">
            <div className="flex flex-wrap">
              {[
                {
                  title: "Technical support",
                  email: "support@example.com",
                  phone: "+1 234-567-89",
                  iconPath:
                    "M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z",
                },
                {
                  title: "Sales questions",
                  email: "sales@example.com",
                  phone: "+1 234-567-89",
                  iconPath:
                    "M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75",
                },
                {
                  title: "Press",
                  email: "press@example.com",
                  phone: "+1 234-567-89",
                  iconPath:
                    "M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25",
                },
                {
                  title: "Bug report",
                  email: "bugs@example.com",
                  phone: "+1 234-567-89",
                  iconPath:
                    "M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013",
                },
              ].map((contact, index) => (
                <div
                  key={index}
                  className="mb-12 w-full md:w-6/12 md:px-3 lg:px-6"
                >
                  <div className="flex items-start">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-teal-100 p-4 text-teal-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          className="h-6 w-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d={contact.iconPath}
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-6 grow">
                      <p className="mb-2 font-bold">{contact.title}</p>
                      <p className="text-neutral-500">{contact.email}</p>
                      <p className="text-neutral-500">{contact.phone}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactComponent;
