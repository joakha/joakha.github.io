import vgc1 from "./assets/vgc-1.jpeg"
import vgc2 from "./assets/vgc-2.jpeg"
import benefit1 from "./assets/benefit-1.jpeg"
import benefit2 from "./assets/benefit-2.jpeg"
import benefit3 from "./assets/benefit-3.jpeg"
  
  const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in eleifend odio. Integer facilisis, lectus id faucibus elementum, ante dui efficitur nisi, sit amet mollis turpis leo non odio. Pellentesque mattis accumsan mauris, eget laoreet ante malesuada id. Nullam eleifend leo orci, mattis posuere sem pellentesque sit amet. Sed felis massa, venenatis vitae ligula in, pretium aliquet dui. Quisque egestas diam enim, ac finibus ipsum suscipit sit amet. Mauris eu mauris tristique, maximus erat vel, ornare risus. Sed vitae aliquet libero. Nam sit amet eleifend dolor, et maximus elit. Sed tempor augue sed feugiat eleifend. Vivamus porttitor eu nibh ac"

  const projects = [
    {
      name: "Video Game Collection",
      stack: ["TypeScript", "React Native", "Expo", "Firebase"],
      description: `A mobile application which allows the user to find games and track their own collection. Also includes many other features like game status tracking, 
      setting custom cover art from phone media library and collection statistics. Mobile programming course final project.`,
      pictures: [vgc1, vgc2],
      repository: "https://github.com/joakha/video-game-collection"
    },
    {
      name: "Benefit-App",
      stack: ["Typescript", "React", "Java", "Spring Boot", "PostgreSQL", "Docker"],
      description: `Benefit-App was a collaborative software project between a Haaga-Helia University of Applied Sciences student group and FiSMA ry (Finnish Software Measurement Association).
       It is a tool that can be used to estimate the scope of software projects. As part of the team I worked in a front-end oriented role on many features like project component management, 
       multilingual interface and project version history.`,
      pictures: [benefit1, benefit2, benefit3],
      repository: "https://github.com/joakha/benefit-app"
    }
  ]

  export {
    lorem,
    projects
  }