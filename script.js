
const anotherStar = {
  image: "https://upload.wikimedia.org/wikipedia/en/e/e2/Songs_in_the_key_of_life.jpg",
  name: "Another Star",
  artist: "Stevie Wonder",
  songURL: "https://youtu.be/scWSTDsj3IM?si=x57bSjnAfvpq70Jo",
  fileName: "anotherStar"
};

const papillon = {
  image: "https://i.scdn.co/image/ab67616d0000b2734c5fac07f80bad278dfbad1e",
  name: "Papillon",
  artist: "Chaka Khan",
  songURL: "https://youtu.be/scWSTDsj3IM?si=x57bSjnAfvpq70Jo",
  fileName: "papillon"
};

const dontThinkTwice = {
  image: "https://i.scdn.co/image/ab67616d0000b273faaf3fac6a7d81bbff3b2846",
  name: "Don't Think Twice",
  artist: "Hikaru Utada",
  songURL: "https://youtu.be/scWSTDsj3IM?si=x57bSjnAfvpq70Jo",
  fileName: "dontThinkTwice"
};

const moveMe = {
  image: "https://i1.sndcdn.com/artworks-1mSQzsNCdzuGRp3Q-xwGz8A-t500x500.jpg",
  name: "Move Me",
  artist: "Hiroshi Okubo",
  songURL: "https://youtu.be/scWSTDsj3IM?si=x57bSjnAfvpq70Jo",
  fileName: "moveMe"
};

const theHeartPart5 = {
  image: "https://upload.wikimedia.org/wikipedia/en/5/57/Kendrick_Lamar_-_The_Heart_Part_5.jpg",
  name: "The Heart Pt. 5",
  artist: "Kendrick Lamar",
  songURL: "https://youtu.be/scWSTDsj3IM?si=x57bSjnAfvpq70Jo",
  fileName: "theHeartPart5"
};

const NY = {
  image: "https://upload.wikimedia.org/wikipedia/en/2/27/IllmaticNas.jpg",
  name: "NY State of Mind",
  artist: "Nas",
  songURL: "https://youtu.be/scWSTDsj3IM?si=x57bSjnAfvpq70Jo",
  fileName: "NY"
};

const strongAndStrike = {
  image: "https://i.scdn.co/image/ab67616d0000b2736d1c1a631e1b46ccc32eaee2",
  name: "Strong and Strike",
  artist: "Yasuharu Takanashi",
  songURL: "https://youtu.be/scWSTDsj3IM?si=x57bSjnAfvpq70Jo",
  fileName: "strongAndStrike"
};

const songs = [anotherStar, papillon, dontThinkTwice, moveMe, theHeartPart5, NY, strongAndStrike];

let songsContainer = document.querySelector("#songs");

songCounter = 1;
songs.forEach((song) => { 
  songCounter++
//Here, I'm nesting Song Card divs with unique IDs each iteration of this forEach loop
  
  //Individual Song Card Div
  let songCard = document.createElement("div")
  songCard.id = song.fileName;
  songCard.className = "songCard";
  songsContainer.appendChild(songCard);
  
    //Image Append
    let songImage = document.createElement("img");
    songImage.src = song.image;
    songCard.appendChild(songImage);
  
    //Song Name Append
    let songName = document.createElement("div");
    songName.className = "songName";
    songName.innerHTML = song.name;
    songCard.appendChild(songName);
  
    //Artist Name and SongURL Append
    let artistName = document.createElement("a");
    artistName.className = "artistName";
    artistName.innerHTML = song.artist;
    artistName.href = song.songURL;
    artistName.target = "_blank";
    songCard.appendChild(artistName);

  if (songCounter % 2 !== 0){
    console.log(songCounter)
    songCard.className = "songCardInverted";
    songName.className = "songNameInverted";
    artistName.className = "artistNameInverted"
  }
});

// Song Input Form
let songCardForm = document.createElement("form");
songCardForm.classList.add ("songCard", "songCardForm");

let songNameInput = document.createElement("input");
songNameInput.setAttribute("type", "text");
songNameInput.placeholder = "Song Name";
songCardForm.appendChild(songNameInput);

let songURLInput = document.createElement("input");
songURLInput.setAttribute("type", "text");
songURLInput.placeholder = "Song URL";
songCardForm.appendChild(songURLInput);

let artistInput = document.createElement("input");
artistInput.setAttribute("type", "text");
artistInput.placeholder = "Artist";
songCardForm.appendChild(artistInput);

let imageInput = document.createElement("input");
imageInput.setAttribute("type", "text");
imageInput.placeholder = "Image URL";
songCardForm.appendChild(imageInput);


//Creating Submit Button and Event
let submitButton = document.createElement("button");
submitButton.innerHTML = "Submit";

submitButton.onclick = (event) => {
  console.log(event);
  console.log(songNameInput.value);
  event.preventDefault();

  songCounter++

    //Individual Song Card Div
    let songCard = document.createElement("div")
    songCard.id = songCounter;
    songCard.className = "songCard";
    songsContainer.insertBefore(songCard, songsContainer.lastChild);
  
    console.log("foobar");

      //Image Append
      let songImage = document.createElement("img");
      songImage.src = imageInput.value;
      songCard.appendChild(songImage);

      //Song Name Append
      let songName = document.createElement("div");
      songName.className = "songName";
      songName.innerHTML = songNameInput.value;
      songCard.appendChild(songName);

      //Artist Name and SongURL Append
      let artistName = document.createElement("a");
      artistName.className = "artistName";
      artistName.innerHTML = artistInput.value;
      artistName.target = "_blank";
      artistName.href = songURLInput.value;
      songCard.appendChild(artistName);

    if (songCounter % 2 !== 0){
      console.log(songCounter)
      songCard.className = "songCardInverted";
      songName.className = "songNameInverted";
      artistName.className = "artistNameInverted"
    }
}

songCardForm.appendChild(submitButton);

songsContainer.appendChild(songCardForm);



