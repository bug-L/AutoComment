// Configure your comments:
const comments = ["Did you get a chance to review my previous comment?", 
"Just checking in again, did you get a chance to review my previous comments?", 
"I hope all is well as I have not heard from you in a while. If we do not hear from you tomorrow then we will go ahead and close the ticket. However, please keep in mind that you can simply re-open the ticket or create a follow-up."];

const template = document.getElementById("li_template");
const elements = new Set();

for (let i = 0; i < comments.length; i++) {
    const element = template.content.firstElementChild.cloneNode(true);
    const title = comments[i]
    element.querySelector(".title").textContent = title
    element.querySelector("a").addEventListener("click", async() => {
        navigator.clipboard.writeText(title)
    })
    elements.add(element)
}

document.querySelector("ul").append(...elements);

