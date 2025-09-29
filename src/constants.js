import vgc1 from "./assets/vgc-1.jpeg"
import vgc2 from "./assets/vgc-2.jpeg"
import benefit1 from "./assets/benefit-1.jpeg"
import benefit2 from "./assets/benefit-2.jpeg"
import benefit3 from "./assets/benefit-3.jpeg"
  
  const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in eleifend odio. Integer facilisis, lectus id faucibus elementum, ante dui efficitur nisi, sit amet mollis turpis leo non odio. Pellentesque mattis accumsan mauris, eget laoreet ante malesuada id. Nullam eleifend leo orci, mattis posuere sem pellentesque sit amet. Sed felis massa, venenatis vitae ligula in, pretium aliquet dui. Quisque egestas diam enim, ac finibus ipsum suscipit sit amet. Mauris eu mauris tristique, maximus erat vel, ornare risus. Sed vitae aliquet libero. Nam sit amet eleifend dolor, et maximus elit. Sed tempor augue sed feugiat eleifend. Vivamus porttitor eu nibh ac"

  const projects = [
    {
      name: "Video Game Collection",
      description: lorem,
      pictures: [vgc1, vgc2]
    },
    {
      name: "Benefit-App",
      description: lorem,
      pictures: [benefit1, benefit2, benefit3]
    }
  ]

  export {
    lorem,
    projects
  }