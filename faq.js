const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

const accordianBody = document.querySelector("accordian_body");
const paragroup = document.querySelectorAll("show_btn");

let faqs = [];

function showFaq(faqs) {  
  faqs.forEach(item => {
    document.getElementById("wrapper").appendChild(item)
  }); 
}

// Created the HTML elements and added required classes to class list.
function createFaq(faqData, faqs) {
  for(let i=0; i<faqData.length; i++){
    const node = document.createElement("div");
    const headWrapper = document.createElement("div");
    const head = document.createElement("h3");
    const title = document.createTextNode(faqData[i]?.question);
    const para = document.createElement("p");
    const desc = document.createTextNode(faqData[i]?.answer);
    const btn = document.createElement("a");
    btn.classList.add("show_btn");
    btn.innerText = "+";

    head.appendChild(title);
    para.appendChild(desc);
    para.classList.add("description")
    headWrapper.appendChild(head);
    headWrapper.appendChild(btn);
    node.appendChild(headWrapper);
    node.appendChild(para);
    node.classList.add('faq', );
    headWrapper.classList.add('faq_header');
    btn.classList.add("expand");
    faqs.push(node);
    para.style.display = 'none';
  }
}

// updated the button status of each element on each click.
function btnStatusUpdate(item) {
  item.innerText==='+'?item.innerText='-':item.innerText='+';
  item.parentNode.nextSibling.style.display==='block'?item.parentNode.nextSibling.style.display='none':item.parentNode.nextSibling.style.display='block'
}

createFaq(faqData, faqs);
showFaq(faqs);

// Added event listener to each element from array of query result.
document.querySelectorAll('.show_btn').forEach(item => {
  item.addEventListener('click', event => {
    btnStatusUpdate(item);    
  })
})