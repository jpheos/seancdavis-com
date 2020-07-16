import { transformer } from "."
import faker, { image } from "faker"

const mockLocation = () => ({ location: { origin: faker.internet.url() } })

const mockImage = () => {
  const imageUrl = `/${faker.lorem.word()}.jpg`
  const imageObj = { childImageSharp: { fixed: { src: imageUrl } } }
  return { imageUrl: imageUrl, imageObj: imageObj }
}

describe("transformer", () => {
  // --- Base ---
  it("returns null when no baseUrl", () => {
    expect(transformer({})).toEqual(null)
  })
  // --- Description ---
  it("uses the given description", () => {
    const description = faker.lorem.paragraph()
    const args = { props: { description: description, ...mockLocation() } }
    expect(transformer(args).description).toEqual(description)
  })
  it("falls back to default", () => {
    const description = faker.lorem.paragraph()
    const args = { defaults: { description: description }, props: { ...mockLocation() } }
    expect(transformer(args).description).toEqual(description)
  })
  // --- Image ---
  it("uses the given image, destructuring it, and prepending the baseUrl", () => {
    const url = faker.internet.url()
    const { imageUrl, imageObj } = mockImage()
    const args = { props: { location: { origin: url }, image: imageObj } }
    expect(transformer(args).imageUrl).toEqual(`${url}${imageUrl}`)
  })
  it("accepts a plain string as an image", () => {
    const url = faker.internet.url()
    const { imageUrl } = mockImage()
    const args = { props: { location: { origin: url }, image: imageUrl } }
    expect(transformer(args).imageUrl).toEqual(`${url}${imageUrl}`)
  })
  it("falls back to default", () => {
    const url = faker.internet.url()
    const { imageUrl, imageObj } = mockImage()
    const args = { props: { location: { origin: url } }, defaults: { image: imageObj } }
    expect(transformer(args).imageUrl).toEqual(`${url}${imageUrl}`)
  })
  // --- Title ---
  it("uses the given title", () => {
    const title = faker.lorem.words()
    const args = { props: { title: title, ...mockLocation() } }
    expect(transformer(args).title).toEqual(title)
  })
  it("falls back to default", () => {
    const title = faker.lorem.words()
    const args = { defaults: { title: title }, props: { ...mockLocation() } }
    expect(transformer(args).title).toEqual(title)
  })
  // --- URL ---
  it("generates a URL", () => {
    const url = faker.internet.url()
    const args = { props: { location: { href: url, origin: url } } }
    expect(transformer(args).url).toEqual(url)
  })
})
