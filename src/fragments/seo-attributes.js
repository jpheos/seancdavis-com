import { graphql } from "gatsby"

export const SeoAttributes = graphql`
  fragment SeoImageAttributes on File {
    childImageSharp {
      fixed(width: 1200, height: 628) {
        src
      }
    }
  }

  fragment SeoAttributes on MarkdownRemarkFrontmatterSeo {
    # title_template
    title
    description
    image {
      ...SeoImageAttributes
    }
    og {
      # type
      title
      description
      image {
        ...SeoImageAttributes
      }
    }
    twitter {
      # card
      title
      description
      image {
        ...SeoImageAttributes
      }
    }
  }
`
