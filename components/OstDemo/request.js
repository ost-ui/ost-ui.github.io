export default (params, error = false) => {
  return new Promise((resolve, reject) => {
    if(error) {
      setTimeout(function() {
        reject({
          status: 500,
          message: 'bad'
        })
      }, 1000);
    } else {
      setTimeout(function() {
        resolve({
          status: 200,
          message: 'Jane'
        })
      }, 500);
    }
  })
}