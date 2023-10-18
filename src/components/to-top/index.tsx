"use client";

const Up = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="h-6 w-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 15.75l7.5-7.5 7.5 7.5"
    />
  </svg>
);

const ToTop = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div
      onClick={scrollToTop}
      className="absolute bottom-6 right-6  rounded-full bg-white p-6 drop-shadow-md dark:bg-blue-gray-900"
    >
      <Up />
    </div>
  );
};

export default ToTop;
