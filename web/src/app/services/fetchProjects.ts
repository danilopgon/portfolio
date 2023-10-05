import Project from '../types/Project'

const fetchProjects = async () => {
  const url = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/projects?populate=*&locale=es`

  const options = {
    method: 'GET',
    headers: {
      Authorization: `bearer ${process.env.NEXT_PUBLIC_STRAPI_JWT}`,
    },
  }

  try {
    const response = await fetch(url, options)
    const data = await response.json()
    data.data.sort((a: Project, b: Project) => (a.attributes.finish_date > b.attributes.finish_date ? -1 : 1))
    return data.data as Project[]
  } catch (error) {
    console.error(error)
  }
}

export default fetchProjects
