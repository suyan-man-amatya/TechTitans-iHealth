import React from "react";
import Sidebar from "./Sidebar";

const faqs = [
  {
    question: "How do I register a new patient?",
    answer:
      "To register a new patient, navigate to the 'Patient Management' section in the sidebar. Click on 'Add New Patient' and fill out the required details such as name, age, contact information, and medical history. Once completed, click 'Save' to register the patient.",
  },
  {
    question: "How can I view a patient’s medical history?",
    answer:
      "To view a patient's medical history, go to the 'Patient Management' section and search for the patient using their name or ID. Click on the patient's profile, and you will find an option to view their complete medical history including previous visits, diagnoses, and treatments.",
  },
  {
    question: "What should I do if I encounter a technical issue?",
    answer:
      "If you encounter a technical issue, first try refreshing the page or restarting your browser. If the problem persists, contact the IT support team using the 'Support' option in the sidebar. Provide them with a detailed description of the issue and any error messages you have received.",
  },
  {
    question: "How do I update a patient's information?",
    answer:
      "To update a patient's information, go to the 'Patient Management' section, search for the patient, and select their profile. Click on 'Edit' to modify their details such as contact information, address, or medical history. After making the necessary changes, click 'Save' to update the record.",
  },
  {
    question: "Where can I find the hospital’s policy documents?",
    answer:
      "The hospital's policy documents can be found in the 'Resources' section of the sidebar. Click on 'Policies' to access various documents including patient care policies, staff guidelines, and safety procedures.",
  },
];

function Help() {
  return (
    <div>
      <section className="help">
        <aside className="sidebar w-64 h-[80vh] fixed top-0 left-0 flex flex-col">
          <Sidebar />
        </aside>
        <main className="flex ml-24 mt-5 p-4 flex-col w-[80vw]">
          <h1 className="text-2xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white p-4 border border-gray-300 rounded-lg shadow-sm"
              >
                <h2 className="text-lg font-semibold mb-2">{faq.question}</h2>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </main>
      </section>
    </div>
  );
}

export default Help;
