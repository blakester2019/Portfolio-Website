/*
  Function to load models
*/
document.addEventListener('DOMContentLoaded', function () {

  const modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  ScrollOut({
    once: false
  });

});

// Runs loop through jobsArray to create
// a card for each job
function mainLoop() {
  for (let i = 0; i < numJobs; i++) {
    createCard(jobsArray[i]);
  }
}

/*
  Job class is used to create a new job. Each job will have its own
  card and modal on index.html
*/

class Job {
  constructor(title, desc, siteLink, imgLink) {
    this.title = title;
    this.desc = desc;
    this.siteLink = siteLink;
    this.imgLink = imgLink;
  }
};

/*
  Instances for all jobs
*/

const Farmhouse = new Job(
  title = "Farmhouse Meat Co.",
  desc = "Farmhouse Meat Co. is a meat locker in my hometown of Carthage, Il. I created the Farmhouse website in the summer of 2019. Farmhouse Meat Co. uses their website to inform customers on products and prices.",
  siteLink = "https://www.farmhousemeatco.com/",
  imgLink = "imgs/farmhouse2.jpg"
);

const WearDrug = new Job(
  title = "Wear Drug",
  desc = "Wear Drug is a pharmacy in my hometown, Carthage, IL. I created the Wear Drug website using a content content management system in early 2019. Wear Drug uses the site to inform customers about their store and direct customers to their software.",
  siteLink = "https://www.weardrug.com/",
  imgLink = "imgs/weardrugimage2.jpg"
);

const numJobs = 2; // total number of jobs
const jobsArray = [WearDrug, Farmhouse]; // the array that is looped through in the main function

/*
  createCard:
  The createCard function takes in an instance of the job class
  as a parameter. It creates a new card for the class and appends the card
  to the html document
*/

let element = document.getElementById("projects-container"); // parent Element
function createCard(Job) {
  // Top of Card and container (image)

  let cardDiv = document.createElement("div");
  cardDiv.classList.add("card");
  cardDiv.classList.add("col");
  cardDiv.classList.add("s12");
  cardDiv.classList.add("m6");
  let activator = document.createElement("div");
  activator.classList.add("card-image");
  activator.classList.add("waves-effect");
  activator.classList.add("waves-block");
  activator.classList.add("waves-light");
  let img = document.createElement("img");
  img.classList.add("activator");
  img.src = Job.imgLink;

  activator.appendChild(img);
  cardDiv.appendChild(activator);

  // Title of card

  let contentDiv = document.createElement("div");
  contentDiv.classList.add("card-content");
  let contentDivSpan = document.createElement("span");
  contentDivSpan.classList.add("card-title");
  contentDivSpan.classList.add("card-main-title");
  contentDivSpan.classList.add("activator");
  contentDivSpan.classList.add("grey-text");
  contentDivSpan.classList.add("text-darken-4");
  let spanText = document.createElement("p");
  spanText.classList.add("span-text");
  spanText.appendChild(document.createTextNode(Job.title));
  let vertIcon = document.createElement("i");
  vertIcon.classList.add("material-icons");
  vertIcon.classList.add("remove-icon-from-phones");
  vertIcon.classList.add("right");
  vertIcon.appendChild(document.createTextNode("more_vert"));

  contentDivSpan.appendChild(spanText);
  contentDivSpan.appendChild(vertIcon);
  contentDiv.appendChild(contentDivSpan);
  cardDiv.appendChild(contentDiv);

  // Displays once card has been clicked

  let cardReveal = document.createElement("div");
  cardReveal.classList.add("card-reveal");
  let cardRevealSpan1 = document.createElement("span");
  cardRevealSpan1.classList.add("card-title");
  let closeIcon = document.createElement("i");
  closeIcon.classList.add("material-icons");
  closeIcon.classList.add("right");
  closeIcon.appendChild(document.createTextNode("close"));
  let cardRevealSpan2 = document.createElement("span");
  cardRevealSpan2.classList.add("card-title");
  cardRevealSpan2.classList.add("grey-text");
  cardRevealSpan2.classList.add("text-darken-4");
  let text = document.createElement("p");
  text.appendChild(document.createTextNode(Job.desc));
  let website = document.createElement("a");
  website.href = Job.siteLink;
  website.target = "_blank";
  website.appendChild(document.createTextNode("Click here to see the site!"));

  cardRevealSpan1.appendChild(closeIcon);
  cardRevealSpan2.appendChild(document.createTextNode(Job.title));
  cardReveal.appendChild(cardRevealSpan1);
  cardReveal.appendChild(cardRevealSpan2);
  cardReveal.appendChild(text);
  cardReveal.appendChild(website);
  cardDiv.appendChild(cardReveal);

  // Final Append
  element.appendChild(cardDiv);
}

mainLoop();