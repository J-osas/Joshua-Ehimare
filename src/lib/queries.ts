export const projectsQuery = `
  *[_type == "project"] | order(order asc) {
    _id,
    title,
    "slug": slug.current,
    category,
    description,
    image,
    url,
    isFigma,
    year,
    overview,
    challenge,
    solution,
    role,
    timeline,
    tools
  }
`

export const projectBySlugQuery = `
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    category,
    description,
    image,
    url,
    isFigma,
    year,
    overview,
    challenge,
    solution,
    role,
    timeline,
    tools
  }
`

export const postsQuery = `
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    category,
    excerpt,
    coverImage,
    publishedAt,
    readTime
  }
`

export const postBySlugQuery = `
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    category,
    excerpt,
    coverImage,
    publishedAt,
    readTime,
    body
  }
`
