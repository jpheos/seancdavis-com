import faker from "faker"

export default {
  default: {
    title: faker.lorem.sentence(),
    image: "fpo-image.jpg",
    subtitle: "March 31, 2018",
    to: "/"
  },
  featured: {
    title: faker.lorem.sentence(),
    image: "fpo-image.jpg",
    theme: "featured",
    subtitle: "March 31, 2018",
    to: "/"
  },
  horizontal: {
    title: faker.lorem.sentence(),
    theme: "horizontal",
    image: "fpo-image.jpg",
    subtitle: "March 31, 2018",
    to: "/"
  }
}
