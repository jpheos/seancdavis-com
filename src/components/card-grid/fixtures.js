import faker from "faker"

const mockCard = (theme = "default") => {
  return {
    title: faker.lorem.sentence(),
    theme: theme,
    image: "fpo-image.jpg",
    subtitle: "March 31, 2018",
    to: "/"
  }
}

export default {
  simple: {
    cards: [mockCard(), mockCard(), mockCard(), mockCard()]
  },
  with_horizontal: {
    cards: [mockCard("horizontal"), mockCard(), mockCard(), mockCard()]
  }
}
