import React from "react";

const Testimonial = () => {
  const testimonials = [
    {
      image: "/Kashif.jpeg",
      name: "Muhammad Adeel",
      designation:
        "Salesforce Developer | Architect | Product Owner | Trainer | Motivational Speaker | Entrepreneur",
      description:
        "Hassan is one of the few software developers I know who can critique their own code and improve it without the need for any other code reviewer. He joined our organization to work on a complex product that was chiefly architect-ed in US and had such an elegant design that we were afraid that an inexperienced developer would tarnish its quality. But Hassan proved us wrong by continuously understanding its design and improving his own code in line with it. That is a must have skill for any product based organization that wants to maintain and improve the quality of their products continuously. Thus he gets my highest recommendation.",
    },
    {
      image: "/Kashif.jpeg",
      name: "Jawad Waseem",
      designation: "Staff Software Engineer at 10 Pearl",
      description:
        "In my entire career, I havent come across any professional who is as zealous as Hassan, Hassan has got an exceptional skill of keeping eyes on abruptly emerging changes and devising solid solutions for those on the fly. Hassan is insanely obsessed with ensuring the quality delivery of the deliverables at his disposal.Hassan doesn't shy away from going extra mile and leads from the front taking all the heavy lifting onto himself. I have seen him excelling at cloud development with amazing rapid pace. He has proven to be a really great asset for the organization he works for. I recommend him strongly for all the jobs that matches his profile.I wish him all the best for his future endeavors.",
    },
    {
      image: "/Kashif.jpeg",
      name: "Khalid Hussain",
      designation: "Head Of Software Development | PMP, MCTS, MCP",
      description:
        "He is a multidimensional resource. Architects the project keeping possible aspects in mind and by applying latest tools and techniques. He is an innovative thinker and I wish him good luck for future endeavors.",
    },
    {
      image: "/Kashif.jpeg",
      name: "Tahir Raza",
      designation:
        "Android | E-Mobility | IOT | Connected Cars | Automotive Infotainment & Head-Unit | DevOps",
      description:
        "Hassan is one great coder i have seen in my career. he uses extra ordinary approaches which has enabled me to learn more and excel in the field of software developmemt. I believe he will prove to be an asset for any organization.",
    },
    {
      image: "/Kashif.jpeg",
      name: "Jytesh Punjwani",
      designation: "Test Automation Evangelist",
      description:
        "Hassan has been a great mentor to me and is always supportive no matter if he's directly part of that project. His work is also appreciated by all team members including peers. He will always be my mentor and a friend even if we are no longer working together. Thanks for helping me achieve greater achievements in my career.",
    },
    {
      image: "/Kashif.jpeg",
      name: "Matt Demaray",
      designation: "Software Architect at PowerSchool",
      description:
        "I've had the pleasure of working with Hassan for several years on multiple projects. He is an incredibly driven engineer who sees the big picture, but also ensures the details are accounted for. I'm constantly impressed by his efforts to become proficient in cloud technologies and infrastructure as code. He is great at elevating teams, and working directly with end consumers and product organizations. Above all, he ensures that quality code ships on time and meets client needs.",
    },
  ];

  return (
    <div className="flex flex-col items-center min-h-screen">
      <h1 className="text-5xl font-bold font-serif mt-36 text-center">
        Hear from those who know me best
      </h1>
      <p className="mt-4 text-xl text-gray-600 text-center max-w-3xl">
        Here are some testimonials from my clients and collaborators who can
        vouch for my expertise, professionalism, and dedication to excellence.
      </p>

      {/* Testimonial Boxes here...*/}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 w-full px-8 max-w-7xl">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="p-6 border rounded-lg hover:shadow-lg transition-transform hover:scale-105 flex flex-col gap-4"
          >
            {/* Description is here... */}
            <p className="text-gray-500 text-sm-1">{testimonial.description}</p>

            {/* Image, Name, and Designation is here... */}
            <div className="flex items-start gap-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="h-16 w-16 rounded-full"
              />
              <div>
                <h3 className="text-lg font-semibold text-teal-600">{testimonial.name}</h3>
                <p className="text-gray-400 text-sm">{testimonial.designation}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className="w-full border-t-2 border-gray-500 mt-16 mb-32" />
    </div>
  );
};

export default Testimonial;
