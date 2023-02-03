const eventsNames = [
  'Mr and Ms Taarangana',
  'Rangmanch',
  'Aaghaz',
  'Rap Battle',
  'Group Singing-Antra',
  'Solo Singing-Anhad',
  'Lilac Dreams',
  'Slam Poetry',
  'Urban Thump',
  
  
];

const texts = [
  "“Bright strokes of colours will flood the stage as the night begins,setting the tone for a euphoric evening.“<br><br>Mr and Ms Taarangana is a Title Pageant competition for those with glitz and glamour in their soul. If you are the one who can dazzle the audience with your charisma and stage presence, the crown is waiting to be yours.Arm yourselves with ecstatic grace, dazzle us with your thoughts, and win the Event’s high title.",
  "“Monologue is the most honest way to represent human beings.“ <br>-George Saunders.<br><br>The function of an actor is to make the audience imagine that, for the moment, real things are happening to real people. Rangmanch is a mono-acting competition, giving all the budding actors a chance to get on the stage and enthral the audience with their act.",
  "“The theatre was created to tell people the truth about life and the social situation.“<br>-Stella Adler.<br><br>The nukkad-natak competition, Aaghaz, offers a stage for all performers to captivate the audience with enriching performances. Here is your chance to make your voice heard loud and clear.Stand up, show up and make the stage blow up!",
  "“The life you live is more important than the words you speak.“<br>– Mac Miller<br><br>Rap is an ideal medium for zealous lyrical sagacity, with real-true verses and soulful rhythms that can captivate anyone. Taarangana’23 presents you with the Rap Battle, a stage for you to exhibit your euphonious talent that wins everyone's hearts.",
  "“Music, once admitted to the soul, becomes a sort of spirit and never dies.“<br>-Edward Bulwer Lytton.<br><br>Antra is a group singing competition for all the euphonious groups that know, without a doubt, how to give their lives to music. We encourage every music enthusiast to come forth and subdue the crowd as they hit the notes; diverse talent calls for a demonstration. Join us and set the tone for the evening.",
  "“Only thing better than singing is more singing!“<br><br>Anhad, the solo singing competition, is for all the melodious souls with soothing tunes. It is a solo singing contest in which contestants compete against each other to test their vocal ability, performance, stage presence, and originality. Here, passion for music is the only prerequisite, so hop on to captivate the crowd with your charming voice and win many hearts!",
  "“Style is a way to say who you are without having to speak.“<br> – Rachel Zoe <br><br>Lilac Dreams is a fashion show competition designed for fashionistas to express their emotions through outfits and artwork. If you can tell your fashion tale without talking, the runaway is all yours. Bring out the diva in you and conquer the ramp with your rapturous grace!!",
  "“True poetry is when emotion finds thought, and the thought finds words.“<br><br>A poet is an artist who knows the art of giving life to words. They can make the listeners travel into the world of imagination with them. Taarangana’23 presents Slam Poetry, the solo poetry contest, a stage for budding orators possessing the art of poetry to exhibit their forte. Join us to behold the art of poetry in its purest form. ",
  "“Dance is a pulse, a heartbeat, breathing. It’s the rhythm of your life. It’s the expression, in time and movement, of happiness, joy, sadness, and envy.“<br><br>Urban Thump is a group dance competition for those teams who enjoy swaying to the beats and falling in love with the stage every time. Showcase an escapade, undulate your body, and let the dancer in you reach out. Join us if your team has got those elegant yet fierce wacks and punks."
];

const overlay = document.getElementById("overlay");
const card = document.getElementById("card");
const title = document.getElementById("title");
const text = document.getElementById("text");
const closeButton = document.getElementById("closeButton");
// let popupButton = document.getElementById("popup-button");
let bodyContainer = document.getElementById("body-container");
let containerr = document.getElementById("containerr");


// const blur = document.getElementById('blur');

// blur.addEventListener('click', () => {
//   const overlay = document.querySelectorAll('.overlay.active')
//   overlay.forEach(overlay => {
//     closeButton(overlay)
//   })
// })

for (let i = 0; i < 9; i++) {
  const button = document.getElementById("button" + (i + 1));
  
  button.addEventListener("click", function() {
    overlay.style.display = "block";
    card.style.display="block";
    title.innerHTML = eventsNames[i];
    text.innerHTML = texts[i];
    bodyContainer.classList.add("blur");
    containerr.classList.add("blur");

    
  });


  if (window.matchMedia("(max-width: 760px)").matches) {
    text.style.fontSize = "12px";
    title.style.fontSize="26px";
  } else {
    text.style.fontSize = "22px";
  }
  
  // function setCardContainerSize() {
  //   if (window.matchMedia("(max-width: 767px)").matches) {
  //     card.style.width = '100%';
  //     card.style.height = '200px';
  //   } else {
  //     card.style.width = '80%';
  //     card.style.height = '300px';
  //   }
  // }
  // setCardContainerSize();
  // window.addEventListener('resize', setCardContainerSize);





}

closeButton.addEventListener("click", function() {
  overlay.style.display = "none";
  bodyContainer.classList.remove("blur");
  containerr.classList.remove("blur");

}
);
