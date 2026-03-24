console.log('Hello World!');

const name = "Daniel Raygoza";
const everett_deadline = "03/09/2026"
let hasDownloadedResume = false;

document.querySelector('#resume-download').addEventListener("click", () => {
    if(!hasDownloadedResume) {
        setTimeout(() => {
            hasDownloadedResume = true;
            alert("Your resume is downloaded successfully!");
        }, 2000);
    }
});

function get_time_based_greeting(){
    const hour = new Date().getHours();
    if(hour >= 0 && hour < 12) return "Good Morning,";
    else if(hour >= 12 && hour < 18) return "Good Afternoon,";
    else return "Good Evening,";
}

function show_greeting(name){
    const message = get_time_based_greeting() + " my name is " + name + "! Welcome to my portfolio!";
    document.querySelector('#yahallo').innerHTML = message;
}

function days_until_deadline(now, deadline){
    const now_date = new Date(now);
    const deadline_date = new Date(deadline);
    const difference = deadline_date - now_date;
    const days_difference = difference / (1000 * 60 * 60 * 24);
    return days_difference;
}

show_greeting(name);
document.querySelector('#everett-deadline').innerHTML = `Days until deadline: <b>${Math.round(days_until_deadline(Date.now(), everett_deadline))}</b>`;