// Write a fetch request to the Giphy API
// Then log the response in the console
// fetch('https://api.giphy.com/v1/gifs/trending?api_key=HvaacROi9w5oQCDYHSIk42eiDSIXH3FN', {
//   credentials: 'include'
// });

// addEventListener.click (
//     'btn'
// )



var giphyButton = document.getElementById('giphy-button');

giphyButton.addEventListener('click', function(event){

  
fetch('https://api.chucknorris.io/jokes/random')
  .then(function(response) { 
    return response.json()
  })
  .then(function(data) {
    console.log(data)
  });
})
