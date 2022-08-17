//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getMeme)

function getMeme(){
  //const choice = document.querySelector('input').value
  const url = `https://api.imgflip.com/get_memes`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.data.memes)
        const arrOfMemes = Object.keys(data.data.memes)
        //we can also change the randomized array index by using arrOfMemes
        //we have a variable here that represents a function that randomly generates a number between 0 - 100 which comes from the object
        let pickedIndex = function getRandomIntInclusive(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
          }
        //we know that the pickedIndex will return and in order to use it we must create a new variable that will take the arguments of 0 and 100 into the function to a new varible as it is shown below
        let finalIndex = pickedIndex(0, 100)
        //here we have our doc query selector that changes the source of the img

        document.querySelector('img').src = data.data.memes[`${finalIndex}`].url
        
        // let ansYes = document.getElementById('yes').value
        // let ansNo = document.getElementById('no').value
        // let answers = []
        // answers.push(ansNo)
        // console.log(answers)


      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

// IMPORTANT: this will not work if the number is generated after line 24. The number must be generated before it is implimented into the template literal