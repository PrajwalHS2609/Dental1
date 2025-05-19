"use client";
import React from "react";
import Accordion from "react-bootstrap/Accordion";

const HomeFaqAcc = () => {
  const faqAcc = [
    {
      id: 1,
      question: "How often should I visit the dentist?",
      answer:
        "It’s recommended to see your dentist every 6 months for a routine check-up and cleaning, unless advised otherwise.",
    },
    {
      id: 2,
      question: "What should I do in a dental emergency?",
      answer:
        "Call our office immediately. We offer same-day emergency care for issues like severe pain, broken teeth, or swelling.",
    },
    {
      id: 3,
      question: "Do you offer services for kids?",
      answer:
        "Absolutely! We provide gentle, friendly pediatric dental care for children of all ages.",
    },
    {
      id: 4,
      question: "What are my options for replacing missing teeth?",
      answer:
        "We offer dental implants, bridges, and dentures depending on your needs and preferences.",
    },
    {
      id: 5,
      question: "Is teeth whitening safe?",
      answer:
        "Yes, when performed by a dental professional, teeth whitening is safe and effective with long-lasting results.",
    },
  ];
  return (
    <div>
      <Accordion defaultActiveKey="0">
        {faqAcc.map((x) => (
          <Accordion.Item key={x.id} eventKey={x.id.toString()}>
            <Accordion.Header className="faqAccHeader">
              <span>{x.question}</span>
            </Accordion.Header>
            <Accordion.Body className="faqAccBody">
              {" "}
              <p>{x.answer}</p>{" "}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default HomeFaqAcc;
