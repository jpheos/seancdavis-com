import faker from "faker"

const mockText = () => `${faker.lorem.words()}.`

export default {
  default: {
    texts: [...Array(8)].map(mockText)
  }
}
