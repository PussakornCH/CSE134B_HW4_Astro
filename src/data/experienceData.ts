export type Job = {
  title: string;
  company: string;
  dates: string;
  description: string[];
};

export const jobs: Job[] = [
  {
    title: "Undergraduate Research Assistant",
    company: "UC San Diego (Department of Computer Engineering)",
    dates: "09/2022 - Present",
    description: [
      "Assist in developing and testing embedded systems for autonomous robotics projects.",
      "Collaborate with graduate researchers to design and implement algorithms in C++ and Python.",
      "Collect, analyze, and document experiment data to improve system performance and reliability.",
      "Present research findings at weekly lab meetings, contributing to cross-team discussions and problem-solving."
    ]
  },
  {
    title: "Software Engineer Intern",
    company: "Tech Innovations, Inc.",
    dates: "06/2023 - 09/2023",
    description: [
      "Developed a web-based dashboard for real-time data visualization using React and Node.js.",
      "Implemented APIs to integrate sensor data from IoT devices, improving system efficiency by 30%.",
      "Collaborated with senior developers on feature design and code reviews, following Agile methodologies.",
      "Optimized database queries and data models in MongoDB, reducing response times by 40%.",
      "Presented final project outcomes to executive leadership, highlighting system scalability and future enhancements."
    ]
  }
];