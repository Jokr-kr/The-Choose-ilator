function updateParticipantList()
{
    const partList = document.getElementById("listOfParticipants")
    partList.innerHTML = ""
    for (let i = 0; i < model.participants.length; i++)
    {
        partList.innerHTML += `<div>${model.participants[i].Name} <div>time:${model.participants[i].Time} cost:${model.participants[i].Cost} XP:${model.participants[i].Experience}</div></div>`;
    }
}

function updateSortedList()
{
    const sortedList = document.getElementById("sortedList");
    sortedList.innerHTML = model.sorted.map(p => `
                <div>
                    ${p.Name} <div>time: ${p.Time} cost: ${p.Cost} XP: ${p.Experience}</div>
                </div>
            `).join("");
}
function updateTimeWeight()
{
    document.getElementById("timeValue").innerHTML = timeSlider.value
}
function updateCostWeight()
{
    document.getElementById("costValue").innerHTML = costSlider.value
}
function updateExperienceWeight()
{
    document.getElementById("experienceValue").innerHTML = experienceSlider.value
}


