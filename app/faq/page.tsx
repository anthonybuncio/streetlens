const faqData = [
  {
    question: "What is a cloud sharing dashcam video platform?",
    answer:
      "A cloud sharing dashcam video platform is an online service that allows users to securely upload, store, and share their dashcam videos and related data in the cloud. It provides a convenient and efficient way to manage and access your dashcam footage from anywhere.",
  },
  {
    question: "How does our platform work?",
    answer:
      "Our platform works by enabling you to connect your dashcam to our service. The videos and data recorded by your dashcam are then automatically uploaded to the cloud, where you can access and manage them through our user-friendly dashboard. You can also share videos with others and review your driving history.",
  },
  {
    question: "Is my data secure on your platform?",
    answer:
      "Yes, we take data security seriously. Your data is stored securely in the cloud and is protected by encryption and other security measures to ensure your privacy and the safety of your videos.",
  },
  {
    question:
      "What dashcam brands and models are compatible with your platform?",
    answer:
      "Our platform is designed to be compatible with a wide range of dashcam brands and models. However, for specific compatibility details, please refer to our list of supported devices on our website or contact our support team for assistance.",
  },
  {
    question:
      "Can I share my dashcam videos with others, such as insurance companies or law enforcement?",
    answer:
      "Yes, you have the option to share your dashcam videos with authorized parties, such as insurance companies or law enforcement, as needed. This can be a valuable resource in the event of accidents or incidents.",
  },
  {
    question: "Is there a mobile app for your platform?",
    answer:
      "Yes, we offer a mobile app for both iOS and Android devices, making it convenient to access your dashcam videos and data on the go. You can download our app from the respective app stores.",
  },
  {
    question:
      "What are the benefits of using a cloud sharing dashcam video platform?",
    answer:
      "Using our platform offers several benefits, including easy access to your dashcam footage from anywhere, secure storage, the ability to share videos with relevant parties, and the peace of mind that comes from having a reliable witness on the road.",
  },
  {
    question: "Do you offer any subscription plans or pricing options?",
    answer:
      "Yes, we offer various subscription plans to cater to different user needs. You can find detailed information about our pricing and plans on our website.",
  },
  {
    question: "How do I get started with your platform?",
    answer:
      "To get started, simply create an account on our platform, follow the setup instructions for your dashcam, and start uploading your videos to the cloud. It's a straightforward process, and we provide step-by-step guidance.",
  },
  {
    question:
      "Is customer support available if I have questions or encounter issues?",
    answer:
      "Absolutely. Our customer support team is available to assist you with any questions or concerns you may have. You can reach out to us through our website or contact our support team directly for assistance.",
  },
];

const Faq = () => {
  return (
    <section className="py-12 min-h-screen max-h-full bg-zinc-950 text-white">
      <div className="container max-w-4xl px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center lg:text-3xl">
          Frequently asked questions
        </h1>

        <div className="mt-12 space-y-8">
          <div className="space-y-4">
            {faqData &&
              faqData.map((item, i) => {
                return (
                  <details
                    key={i}
                    className="group rounded-lg bg-zinc-800 text-white p-6 [&_summary::-webkit-details-marker]:hidden"
                    open={i === 0}
                  >
                    <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                      <h2 className=" font-bold uppercase tracking-wider">
                        {item.question}
                      </h2>

                      <span className="relative h-5 w-5 shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </span>
                    </summary>

                    <p className="mt-4 leading-relaxed text-zinc-400">
                      {item.answer}
                    </p>
                  </details>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Faq;
