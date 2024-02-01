// Function to generate a random string
function generateRandomString (length: number): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let result = ''
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return result
}

// Function to insert the random string into the HTML document
function insertRandomString () {
  const randomString = generateRandomString(6)
  const randomStringPlaceholder = document.getElementById('verifyTokenPlaceholder')
  if (randomStringPlaceholder) {
    randomStringPlaceholder.textContent = randomString
  }
}
