import Project from '../types/Project'

const fetchProjects = async () => {
  const url = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/projects?locale=es`

  const options = {
    method: 'GET',
    headers: {
      Authorization: `bearer ${process.env.NEXT_PUBLIC_STRAPI_JWT}`,
    },
  }

  try {
    const response = await fetch(url, options)
    const data = await response.json()
    return data as Project[]
  } catch (error) {
    console.error(error)
  }
}

export default fetchProjects
