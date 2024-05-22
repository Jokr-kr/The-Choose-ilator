function updateParticipantList()
{
    const partList = document.getElementById("listOfParticipants")
    partList.innerHTML = ""
    for (let i = 0; i < model.participants.length; i++)
    {
        partList.innerHTML += `<div>${model.participants[i].Name}</div>`;
    }
}

function updateSortedList()
{
    const sortedList = document.getElementById("sortedList")
    sortedList.innerHTML = "";
    for (let i = 0; i < model.sorted.length; i++)
    {
        sortedList.innerHTML += `<div>${model.sorted[i].participant.Name}</div>`;
    }
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