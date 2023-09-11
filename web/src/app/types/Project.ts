interface Project {
  id: number
  attributes: {
    URL: string
    categories: {
      data: {
        id: number
        attributes: {
          Name: string
          createdAt: string
          updatedAt: string
          publishedAt: string
          locale: string
        }
      }[]
    }
    createdAt: string
    description: string
    finish_date: string
    locale: string
    localizations: {
      data: any[]
    }
    publishedAt: string
    slug: string
    start_date: string
    technologies: {
      data: {
        id: number
        attributes: {
          Name: string
          createdAt: string
          updatedAt: string
          publishedAt: string
          locale: string
        }
      }[]
    }
    thumbnail: {
      data: {
        id: number
        attributes: {
          name: string
          alternativeText: string | null
          caption: string | null
          width: number
          height: number
          formats: {
            thumbnail: {
              name: string
              hash: string
              ext: string
              mime: string
              path: string | null
              width: number
              height: number
              size: number
              url: string
            }
            small: {
              name: string
              hash: string
              ext: string
              mime: string
              path: string | null
              width: number
              height: number
              size: number
              url: string
            }
            medium: {
              name: string
              hash: string
              ext: string
              mime: string
              path: string | null
              width: number
              height: number
              size: number
              url: string
            }
          }
          hash: string
          ext: string
          mime: string
          size: number
          url: string
          previewUrl: string | null
          provider: string
          provider_metadata: string | null
          createdAt: string
          updatedAt: string
        }
      }
    }
    title: string
    updatedAt: string
  }
}

export default Project
