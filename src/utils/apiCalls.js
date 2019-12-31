export const fetchIdeas = (url, options) => {
  return fetch(url, options)
    .then(res => {
      if (!res.ok) {
        throw Error('Error fetching ideas!')
      }
      return res.json()
    })
}
