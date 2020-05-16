const intro = {
  title: "Otto Eklund",
  subtitle: "Web Developer",
  body: [
    "Hello!",
    "My name is Otto and I am starting a career in web development. To learn more about me, please select one of the topics in the menu.",
    "I am currently looking for a job, so feel free to contact me if you are in search of new team members!"
    ]
}

const edu = {
  name: "education",
  id: 1,
  content: [
    {
      title: "Full stack Javascript bootcamp",
      subtitle: "2019–2020, Academic Work",
      body: [
        "A four-month intensive training programme aimed at ambitious and driven individuals with the right skills to begin a new career as a full stack developer. The education follows a pedagogic model where high speed practical learning is put at the forefront, giving students a wide array of programming skills to be ready to contribute as soon as the training is completed.",
        "The focus of the programme rested heavily on Javascript, using Node.js in the backend and vanilla JS on the frontend, gradually progressing to more and more complex framework-based projects over the course of the programme."
      ]
    },
    {
      title: "BA in Scandinavian Languages",
      subtitle: "2012–2019, University of Helsinki",
      body: [
        "A varied and broad education in the study of Nordic languages and their properties. Throughout my studies at the University I gained insight in the structure, usage and purpose of natural language. Furthermore, I gained a good understanding of what makes up languages in general and how to apply this knowledge outside the realm of linguistics.",
        "While translation and natural languages made up the bulk of my studies at the time, I also found an interest for programming during the later part of my studies and took a handful of courses in computer science. Additionally, my University studies greatly improved my information literacy and critical thinking skills"
      ]
    }
  ]
}

const tech = [
  {
    title: "technologies",
    body: ["• HTML, CSS, Javascript","• Node.js", "• Typescript", "• Front end frameworks: Vue, React, Angular", "• State management tools (e.g. Redux)", "• React Native", "• Responsive design / UX", "• Rest API Design", "• SQL (PostgreSQL)", "• NoSQL (MongoDB)", "• AWS", "• Git", "• TDD"]
  },
  {
    title: "language skills",
    body: ["Swedish (first language)", "Finnish (first language)", "English (full professional profiency)", "Norwegian (professional proficiency)", "Danish (professional proficiency)"]
  },
  {
    title: "other",
    body: ["Agile methods (Certified Scrum Master)", "Digital Audio Workstation proficiency, other musical production and performance skills", "Translation skills", "Computer hardware installation"]
  }
]

const work = [
  {
    title: "Translator",
    subtitle: "2012–2018, Freelance",
    body: ""
  },
  {
    title: "Shop Assistant",
    subtitle: "2011–2012, Stockmann",
    body: ""
  },
  {
    title: "Library Assistant",
    subtitle: "2009–2010, Helsinki City Library",
    body: ""
  }
]

console.log(intro, edu, tech, work)