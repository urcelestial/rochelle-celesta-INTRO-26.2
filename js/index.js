const body = document.querySelector('body');

// adding footer to the structutre of the page
const footer = document.createElement('footer');
body.appendChild(footer);

const today = new Date();
const thisYear = today.getFullYear();


// adding copyright to the footer
const copyright = document.createElement('p');
copyright.innerHTML = `Rochelle Celesta &copy; ${thisYear}`;
footer.appendChild(copyright);


// adding skills to the skills section
const Skills = ["JavaScript", "HTML", "CSS", "Python"];
const skillsSection = document.getElementById('Skills');
const skillsList = skillsSection.querySelector('ul');

// loop through the skills array and create a list item for each skill, then append it to the skills list
for (let i = 0; i < Skills.length; i++) {
    const skill = document.createElement('li');
    skill.innerText = Skills[i];
    skillsList.appendChild(skill);
} 

// adding messages to the leave a message section
const messageForm = document.querySelector('form[name="leave_message"]');


// add an event listener to the form to handle the submit event
messageForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const nameInput = event.target.usersName.value;
    const emailInput = event.target.usersEmail.value;
    const messageInput = event.target.usersMessage.value;

    console.log("Name:", nameInput);
    console.log("Email:", emailInput);
    console.log("Message:", messageInput);

// create a new list item for the message and append it to the messages list
    const messageSection = document.getElementById('messages');
    const messageList = messageSection.querySelector('ul');

    const newMesage = document.createElement('li');
    newMesage.innerHTML = `<a href="mailto:${emailInput}">${nameInput}</a> wrote: <span>${messageInput}</span>`;

// create a remove button for each message and add an event listener to it to remove the message when clicked
    const removeButton = document.createElement('button');
    removeButton.innerText = 'remove';
    removeButton.type = 'button';

    removeButton.addEventListener('click', function() {
        const entry = removeButton.parentNode;
        entry.remove();
    });

// append the remove button to the message and the message to the message list
    newMesage.appendChild(removeButton);
    messageList.appendChild(newMesage);

    messageForm.reset();

});

// fetching repositories from GitHub API and adding them to the projects section
fetch('https://api.github.com/users/urcelestial/repos')
    .then(function(response) {
        return response.json();
    })
    .then(function(repositories) {
        console.log("repositories:", repositories);

        const projectSection = document.getElementById('Projects');
        const projectList = projectSection.querySelector('ul');

        for (let i = 0; i < repositories.length; i++) {
            const project = document.createElement('li');
            project.innerText = repositories[i].name;
            projectList.appendChild(project);
        }
    })

    .catch(function(error) {
        console.log("Error fetching repositories:", error);
    });
