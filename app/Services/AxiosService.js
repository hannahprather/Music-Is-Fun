// @ts-ignore
export const sandBoxApi = axios.create({
  //TODO Change YOURNAME to your actual name
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/hannahprather/songs',
  timeout: 5000
});

// export const musicApi = axios.create({
//   baseURL: 'https://itunes.apple.com/search?term',
//   timeout: 5000
// })
