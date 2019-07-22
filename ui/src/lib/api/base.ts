const url = "http://localhost:4000"

export const request = async (path: string, options?: any) => (
  fetch(`${url}/${path}`, options)
)