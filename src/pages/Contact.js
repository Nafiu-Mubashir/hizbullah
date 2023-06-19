import React from "react";
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import image from "../assets/Rectangle 14.png";

const Contact = () => {
  return (
    <div className="bg-gradient-to-r from-white via-white to-green-100 mt-12">
      <div className="contact h-[160px] w-full lg:h-[220px] bg-cover bg-center bg-no-repeat flex justify-center items-center">
        {/* <Header
            type={1}
            text={"Contact Us"}
            className={
              "text-center text-[32px] lg:text-[40px] lg:mb-4 p-2 lg:p-4"
            }
          /> */}
      </div>
      <div className="lg:w-[90%] p-2 m-auto">
        <div>
          <div className="flex flex-col lg:flex-row justify-between gap-3 p-3">
            <div className="lg:w-[40%] w-full rounded-lg lg:h-[500px] 395.54px p-3">
              <Header
                type={1}
                text={"Send us a message"}
                className={"text-[20px] lg:text-[32px] mb-4"}
              />
              <form className="w-full max-w-lg">
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-3 lg: md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-black text-xs font-bold mb-2 text-[10.481px] lg:text-[14.8993px]"
                      for="grid-first-name"
                    >
                      First Name
                    </label>
                    <input
                      className="appearance-none block w-full bg-white shadow text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                      id="grid-first-name"
                      type="text"
                      placeholder="Mubashir"
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label
                      className="block uppercase tracking-wide text-black text-xs font-bold mb-2 text-[10.481px] lg:text-[14.8993px]"
                      for="grid-password"
                    >
                      Email
                    </label>
                    <input
                      className="appearance-none block w-full bg-white shadow text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                      id="grid-password"
                      type="mail"
                      placeholder="email@gmail.com"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-3 lg:mb-6">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-black text-xs font-bold mb-2 text-[10.481px] lg:text-[14.8993px]"
                      for="grid-password"
                    >
                      Message
                    </label>
                    <textarea
                      className="appearance-none block w-full bg-white shadow h-[200px] text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                      id="grid-password"
                      type="mail"
                      placeholder="Please type your message here..."
                    />
                  </div>
                </div>
                <Button text={"Contact Us"} type={"submit"} />
              </form>
            </div>
            <div className="p-3">
              <img src={image} alt="" />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-between gap-3 p-3">
            <div className="lg:w-[40%] w-full rounded-lg lg:h-[500px] 395.54px p-3">
              <Header
                type={1}
                text={"You can get in touch with us via the following"}
                className={"text-[20px] lg:text-[32px] mb-4"}
              />
              <ul class="text-black">
                <li class="mb-4">
                  <a
                    href="/contact"
                    className="hover:underline w-full lg:w-[px] flex gap-2 justify-center lg:justify-start"
                  >
                    <svg
                      className=""
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.9999 14.1699C9.86988 14.1699 8.12988 12.4399 8.12988 10.2999C8.12988 8.15994 9.86988 6.43994 11.9999 6.43994C14.1299 6.43994 15.8699 8.16994 15.8699 10.3099C15.8699 12.4499 14.1299 14.1699 11.9999 14.1699ZM11.9999 7.93994C10.6999 7.93994 9.62988 8.99994 9.62988 10.3099C9.62988 11.6199 10.6899 12.6799 11.9999 12.6799C13.3099 12.6799 14.3699 11.6199 14.3699 10.3099C14.3699 8.99994 13.2999 7.93994 11.9999 7.93994Z"
                        fill="#292D32"
                      />
                      <path
                        d="M11.9999 22.76C10.5199 22.76 9.02993 22.2 7.86993 21.09C4.91993 18.25 1.65993 13.72 2.88993 8.33C3.99993 3.44 8.26993 1.25 11.9999 1.25C11.9999 1.25 11.9999 1.25 12.0099 1.25C15.7399 1.25 20.0099 3.44 21.1199 8.34C22.3399 13.73 19.0799 18.25 16.1299 21.09C14.9699 22.2 13.4799 22.76 11.9999 22.76ZM11.9999 2.75C9.08993 2.75 5.34993 4.3 4.35993 8.66C3.27993 13.37 6.23993 17.43 8.91993 20C10.6499 21.67 13.3599 21.67 15.0899 20C17.7599 17.43 20.7199 13.37 19.6599 8.66C18.6599 4.3 14.9099 2.75 11.9999 2.75Z"
                        fill="#292D32"
                      />
                    </svg>
                    8,10,12 Al-kawthar Avenue, Abule-Oko Via Adiyan-Gasline, via Agbado Station, Ifo Local Government, Ogun State
                  </a>
                </li>

                <li class="mb-4">
                  <a
                    href="tel:08039187401"
                    className="hover:underline flex gap-2 "
                  >
                    <svg
                      className=""
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.45 22.75C16.32 22.75 15.13 22.48 13.9 21.96C12.7 21.45 11.49 20.75 10.31 19.9C9.14 19.04 8.01 18.08 6.94 17.03C5.88 15.96 4.92 14.83 4.07 13.67C3.21 12.47 2.52 11.27 2.03 10.11C1.51 8.87 1.25 7.67 1.25 6.54C1.25 5.76 1.39 5.02 1.66 4.33C1.94 3.62 2.39 2.96 3 2.39C3.77 1.63 4.65 1.25 5.59 1.25C5.98 1.25 6.38 1.34 6.72 1.5C7.11 1.68 7.44 1.95 7.68 2.31L10 5.58C10.21 5.87 10.37 6.15 10.48 6.43C10.61 6.73 10.68 7.03 10.68 7.32C10.68 7.7 10.57 8.07 10.36 8.42C10.21 8.69 9.98 8.98 9.69 9.27L9.01 9.98C9.02 10.01 9.03 10.03 9.04 10.05C9.16 10.26 9.4 10.62 9.86 11.16C10.35 11.72 10.81 12.23 11.27 12.7C11.86 13.28 12.35 13.74 12.81 14.12C13.38 14.6 13.75 14.84 13.97 14.95L13.95 15L14.68 14.28C14.99 13.97 15.29 13.74 15.58 13.59C16.13 13.25 16.83 13.19 17.53 13.48C17.79 13.59 18.07 13.74 18.37 13.95L21.69 16.31C22.06 16.56 22.33 16.88 22.49 17.26C22.64 17.64 22.71 17.99 22.71 18.34C22.71 18.82 22.6 19.3 22.39 19.75C22.18 20.2 21.92 20.59 21.59 20.95C21.02 21.58 20.4 22.03 19.68 22.32C18.99 22.6 18.24 22.75 17.45 22.75ZM5.59 2.75C5.04 2.75 4.53 2.99 4.04 3.47C3.58 3.9 3.26 4.37 3.06 4.88C2.85 5.4 2.75 5.95 2.75 6.54C2.75 7.47 2.97 8.48 3.41 9.52C3.86 10.58 4.49 11.68 5.29 12.78C6.09 13.88 7 14.95 8 15.96C9 16.95 10.08 17.87 11.19 18.68C12.27 19.47 13.38 20.11 14.48 20.57C16.19 21.3 17.79 21.47 19.11 20.92C19.62 20.71 20.07 20.39 20.48 19.93C20.71 19.68 20.89 19.41 21.04 19.09C21.16 18.84 21.22 18.58 21.22 18.32C21.22 18.16 21.19 18 21.11 17.82C21.08 17.76 21.02 17.65 20.83 17.52L17.51 15.16C17.31 15.02 17.13 14.92 16.96 14.85C16.74 14.76 16.65 14.67 16.31 14.88C16.11 14.98 15.93 15.13 15.73 15.33L14.97 16.08C14.58 16.46 13.98 16.55 13.52 16.38L13.25 16.26C12.84 16.04 12.36 15.7 11.83 15.25C11.35 14.84 10.83 14.36 10.2 13.74C9.71 13.24 9.22 12.71 8.71 12.12C8.24 11.57 7.9 11.1 7.69 10.71L7.57 10.41C7.51 10.18 7.49 10.05 7.49 9.91C7.49 9.55 7.62 9.23 7.87 8.98L8.62 8.2C8.82 8 8.97 7.81 9.07 7.64C9.15 7.51 9.18 7.4 9.18 7.3C9.18 7.22 9.15 7.1 9.1 6.98C9.03 6.82 8.92 6.64 8.78 6.45L6.46 3.17C6.36 3.03 6.24 2.93 6.09 2.86C5.93 2.79 5.76 2.75 5.59 2.75ZM13.95 15.01L13.79 15.69L14.06 14.99C14.01 14.98 13.97 14.99 13.95 15.01Z"
                        fill="#292D32"
                      />
                    </svg>
                    (684) 555-0102
                  </a>
                </li>

                <li class="mb-4">
                  <a
                    href="mailto:hizbullah@gmail.com?subject"
                    className="hover:underline flex gap-2 "
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17 21.25H7C3.35 21.25 1.25 19.15 1.25 15.5V8.5C1.25 4.85 3.35 2.75 7 2.75H17C20.65 2.75 22.75 4.85 22.75 8.5V15.5C22.75 19.15 20.65 21.25 17 21.25ZM7 4.25C4.14 4.25 2.75 5.64 2.75 8.5V15.5C2.75 18.36 4.14 19.75 7 19.75H17C19.86 19.75 21.25 18.36 21.25 15.5V8.5C21.25 5.64 19.86 4.25 17 4.25H7Z"
                        fill="#292D32"
                      />
                      <path
                        d="M11.9998 12.87C11.1598 12.87 10.3098 12.61 9.65978 12.08L6.52978 9.57997C6.20978 9.31997 6.14978 8.84997 6.40978 8.52997C6.66978 8.20997 7.13978 8.14997 7.45978 8.40997L10.5898 10.91C11.3498 11.52 12.6398 11.52 13.3998 10.91L16.5298 8.40997C16.8498 8.14997 17.3298 8.19997 17.5798 8.52997C17.8398 8.84997 17.7898 9.32997 17.4598 9.57997L14.3298 12.08C13.6898 12.61 12.8398 12.87 11.9998 12.87Z"
                        fill="#292D32"
                      />
                    </svg>
                    info@alkawharfoundations.org
                  </a>
                </li>
              </ul>
            </div>
            <div className="p-3 w-full lg:w-[55%]">
              <div className="w-full">
                <iframe
                  className="w-full h-[268px] lg:h-[517px]"
                  title="map"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Al-Kawthar%20Avenue%20Adiyan%20Gasline%20Ogun%20%20state+(Hizbullah%20Movement%20of%20Nigeria)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                >
                  <a href="https://www.maps.ie/distance-area-calculator.html">
                    measure acres/hectares on map
                  </a>
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
