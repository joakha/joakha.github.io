import vgc1 from "./assets/vgc-1.jpeg"
import vgc2 from "./assets/vgc-2.jpeg"
import benefit1 from "./assets/benefit-1.jpeg"
import benefit2 from "./assets/benefit-2.jpeg"
import benefit3 from "./assets/benefit-3.jpeg"
import chocolate1 from "./assets/chocolate-1.jpeg"
import chocolate2 from "./assets/chocolate-2.jpeg"
import chocolate3 from "./assets/chocolate-3.jpeg"
import catalog1 from "./assets/catalog-1.jpeg"
import catalog2 from "./assets/catalog-2.jpeg"
import catalog3 from "./assets/catalog-3.jpeg"
import weather1 from "./assets/weather-1.jpeg"
import weather2 from "./assets/weather-2.jpeg"
import weather3 from "./assets/weather-3.jpeg"

const introductionText = "Hello,\n\n" +
  "I'm a third-year student at Haaga-Helia University of Applied Sciences pursuing a degree in Business Information Technology and majoring in software development.\n\n" +
  "In my studies I have focused on full-stack development and my goal is to become a web developer. When it comes to frontend I've built projects with TypeScript, React and React Native. " +
  "On the backend, I've been learning frameworks like Express and Spring Boot.\n\n" +
  "New technologies have always been interesting to me and I'm always looking to learn something new and expand my skills. " +
  "To gain valuable practical experience, I'm actively looking for internship opportunities in web development.\n\n" +
  "Thank you for visiting my portfolio."

const projects = [
  {
    name: "Chocolate-Review",
    stack: ["Typescript", "React", "Node.js", "Express", "MongoDB", "Playwright"],
    description: `Chocolate-Review is a full-stack web application where users can register and write reviews for their favorite chocolates.
      Finding reviews created by other users is easy with many filtering and sorting options. Users can also comment on reviews made by other users
      to give feedback or just to say hello.`,
    pictures: [chocolate1, chocolate2, chocolate3],
    repository: "https://github.com/joakha/chocolate-review",
    liveLink: "https://chocolate-review-joakha.onrender.com/find-reviews"
  },
  {
    name: "Benefit-App",
    stack: ["Typescript", "React", "Java", "Spring Boot", "PostgreSQL", "Docker"],
    description: `Benefit-App was a collaborative software project between a Haaga-Helia University of Applied Sciences student group and FiSMA ry (Finnish Software Measurement Association).
       It is a tool that can be used to estimate the scope of software projects. As part of the team I worked in a front-end oriented role on many features like project component management, 
       multilingual interface and project version history.`,
    pictures: [benefit1, benefit2, benefit3],
    repository: "https://github.com/joakha/benefit-app"
  },
  {
    name: "Video Game Collection",
    stack: ["TypeScript", "React Native", "Expo", "Firebase"],
    description: `A mobile application which allows the user to find games and track their own collection. Also includes many other features like game status tracking, 
      setting custom cover art from phone media library and collection statistics. Mobile programming course final project.`,
    pictures: [vgc1, vgc2],
    repository: "https://github.com/joakha/video-game-collection"
  },
  {
    name: "Weather App",
    stack: ["JavaScript", "React", "Java", "Spring Boot", "MySQL"],
    description: `Group project where me and other students made a Full Stack application for visualizing weather data coming from a measurement device owned by our teacher. 
      The application also used the Norwegian Meteorogical Institute API to display weather forecasts and METAR information. In this project I implemented the layout for the frontend and worked on data fetching.`,
    pictures: [weather1, weather2, weather3],
    repository: "https://github.com/joakha/Weatherapp-frontend"
  },
  {
    name: "Movie Catalog",
    stack: ["Java", "Spring Boot", "PostgreSQL"],
    description: `Spring Boot application for keeping track of watched movies. User can add, edit, delete or see their movies. Also has REST -api for searching movies based on different criteria.`,
    pictures: [catalog1, catalog2, catalog3],
    repository: "https://github.com/joakha/Movie-Catalog"
  },
]

const aboutLinks = [
  {
    name: "My Github",
    address: "https://github.com/joakha"
  },
  {
    name: "My LinkedIn",
    address: "https://linkedin.com/in/johannes-haapanen-56598a249"
  }
]

const skillBoxesContents = [
  {
    header: "Frontend",
    arrays: [
      ["JavaScript ES6+", "TypeScript"],
      ["React", "React Native"],
      ["HTML5", "CSS", "Tailwind"]
    ]
  },
  {
    header: "Backend",
    arrays: [
      ["Node.js", "Express"],
      ["Java", "Spring Boot"],
      ["MongoDB", "PostgreSQL"]
    ]
  },
  {
    header: "Dev Tools",
    arrays: [
      ["Git", "GitHub"],
      ["Docker"],
      ["Playwright"]
    ]
  }
]

export {
  introductionText,
  projects,
  aboutLinks,
  skillBoxesContents
}