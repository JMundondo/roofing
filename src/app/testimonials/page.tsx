import React from "react";

const testimonialsData = [
  {
    name: "John Doe",
    feedback:
      "The construction team was professional and delivered on time. Highly recommend!",
  },
  {
    name: "Jane Smith",
    feedback: "Excellent service and quality work. My house looks amazing!",
  },
  {
    name: "Michael Johnson",
    feedback:
      "They transformed my office space beautifully. Very satisfied with the results!",
  },
  {
    name: "Emily Davis",
    feedback:
      "Great attention to detail and very reliable. Will use them again for future projects.",
  },
];

const Testimonials = () => {
  return (
    <div className="mt-24">
      <h1 className="text-2xl font-bold mb-6">Client Testimonials</h1>
      <div className="space-y-4">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="border p-4 rounded shadow">
            <p className="font-semibold">{testimonial.name}</p>
            <p className="text-gray-600">{testimonial.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
