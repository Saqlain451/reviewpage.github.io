const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];
let num =0;
console.log(reviews[num].img);
console.log(reviews.length)

const preButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");
const personImg = document.getElementById("person-img");
const name = document.getElementById("author");
const job = document.getElementById("job");
const info =document.getElementById("info");

let preBio=()=>{
    num--;
    if(num<0){
        num=reviews.length-1;
    }
    setElement();
}

let nextBio=()=>{
    console.log('working');
    num++;
    if(num>reviews.length-1){
        num=0;
    }
    setElement();
}

function setElement(){
  personImg.src=`${reviews[num].img}`
  name.innerHTML = `${reviews[num].name}`
  job.innerHTML = `${reviews[num].job}`
  info.innerHTML=`${reviews[num].text}`
}

preButton.addEventListener("click",preBio);
nextButton.addEventListener('click',nextBio);