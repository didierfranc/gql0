export default ({ url, headers }) => arg => ({
  call: variables => {
    const query = arg[0]
      .replace(/\s{2,}/g, ' ')
      .replace(/\t/g, '')
      .replace(/\n/g, ' ')
      .trim()

    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...headers },
        body: JSON.stringify({ query, variables }),
      })
        .then(r => r.json())
        .then(({ data, errors }) => (errors ? reject(errors) : resolve(data)))
        .catch(e => reject(e))
    })
  },
})
