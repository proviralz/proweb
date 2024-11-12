export default function FAQ() {
    const faqItems = [
      {
        question: "⁠What about Proviralz?",
        answer: "Proviralz is a digital marketing platform that links service users and artisans through the use of technology.",
        c: true
      },
      {
        question: "How to profit from Proviralz?",
        answer: "Through Proviralz platforms, service providers can showcase their diverse services and take advantage of chances to embrace technology and reach huge audiences",
      },
      {
        question: "⁠How can I register with Proviralz?",
        answer: "Get the Proviralz app from the Google Play store or IOS stores, register using your email address, select the appropriate choice (service user or provider), and then correctly complete the registration processes.",
        
      },
      {
        question: "How can I schedule a service on Proviralz",
        answer: "This is dependent on the service providers' availability. Once you have found the exact service you need and are happy with the provider's review, you may make an appointment.",
        c: true
      },
      {
        question: "How are payments made?",
        answer: "For ease of understanding, information about price, payment options, and invoice generation is available on the Proviralz app.",
        c: true
      },
      {
        question: "How can I get in touch with the service provider?",
        answer: "The message system of Proviralz allows you to interact with the service provider. Following service delivery, customers are required to offer feedback and reviews for the service providers in the designated review space.",
      },
      
      // Add more FAQ items as needed
    ];
  
    return (
      <section className="px-4 py-16 md:px-8 lg:px-16">
        {/* Heading */}
        <div className="text-left mb-8">
          <h4 className="text-purple-600 font-semibold uppercase mb-2">FAQ</h4>
          <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
        </div>
  
        {/* FAQ Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              bgColor={item?.c ? "bg-[#ba68c8] text-white" : "bg-white text-gray-800"}
            />
          ))}
        </div>
      </section>
    );
  }
  
  // FAQ Item Component
  function FAQItem({ question, answer, bgColor }) {
    return (
      <div className={`${bgColor} p-6 rounded-lg shadow-md`}>
        <h3 className="text-xl font-semibold mb-2">{question}</h3>
        <p>{answer}</p>
      </div>
    );
  }