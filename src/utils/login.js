export async function login({username, password}) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'niels' && password === 'aap') {
        resolve()
      } else {
        reject()
      }
    }, 1000)
  })
}
