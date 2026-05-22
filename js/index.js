const body = document.querySelector('body');
const footer = document.createElement('footer');
body.appendChild(footer);

const today = new Date();
const thisYear = today.getFullYear();

const copyright = document.createElement('p');
copyright.innerHTML = `Rochelle Celesta &copy; ${thisYear}`;
footer.appendChild(copyright);

const skills = ["JavaScript", "HTML", "CSS", "Python"];
const skillsSection = document.getElementById('skills');
const skillsList = skillsSection.querySelector('ul');

for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement('li');
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}

const messageForm = document.querySelector('form[name="leave_message"]');

messageForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const nameInput = event.target.usersName.value;
    const emailInput = event.target.usersEmail.value;
    const messageInput = event.target.usersMessage.value;

    console.log("Name:", nameInput);
    console.log("Email:", emailInput);
    console.log("Message:", messageInput);


    const messageSection = document.getElementById('messages');
    const messageList = messageSection.querySelector('ul');

    const newMesage = document.createElement('li');
    newMesage.innerHTML = `<a href="mailto:${emailInput}">${nameInput}</a> wrote: <span>${messageInput}</span>`;

    const removeButton = document.createElement('button');
    removeButton.innerText = 'remove';
    removeButton.type = 'button';

    removeButton.addEventListener('click', function() {
        const entry = removeButton.parentNode;
        entry.remove();
    });

    newMesage.appendChild(removeButton);
    messageList.appendChild(newMesage);

    messageForm.reset();

});