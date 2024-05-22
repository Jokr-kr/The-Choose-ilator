function addToList(name, time, cost, experience)
{
    if (name == "" || time == "" || cost == "" || experience == "")
        console.error();
    else
        model.participants.push(
            {
                Name: name,
                Time: time,
                Cost: cost,
                Experience: experience
            });
    updateParticipantList();
}

//i got major help with math from "chatgippity" ¯\_(ツ)_/¯
function calculate()
{
    var timeWeight = parseFloat(document.getElementById("timeSlider").value);
    var costWeight = parseFloat(document.getElementById("costSlider").value);
    var experienceWeight = parseFloat(document.getElementById("experienceSlider").value);

    model.sorted = [];

    // Perform z-score normalization for each attribute
    const meanTime = model.participants.reduce((sum, participant) => sum + participant.Time, 0) / model.participants.length;
    const meanCost = model.participants.reduce((sum, participant) => sum + participant.Cost, 0) / model.participants.length;
    const meanExperience = model.participants.reduce((sum, participant) => sum + participant.Experience, 0) / model.participants.length;

    const stdDevTime = Math.sqrt(model.participants.reduce((sum, participant) => sum + Math.pow(participant.Time - meanTime, 2), 0) / model.participants.length);
    const stdDevCost = Math.sqrt(model.participants.reduce((sum, participant) => sum + Math.pow(participant.Cost - meanCost, 2), 0) / model.participants.length);
    const stdDevExperience = Math.sqrt(model.participants.reduce((sum, participant) => sum + Math.pow(participant.Experience - meanExperience, 2), 0) / model.participants.length);

    // Calculate z-scores for each attribute and update the participants
    model.participants.forEach(participant =>
    {
        participant.normalizedTime = (participant.Time - meanTime) / stdDevTime;
        participant.normalizedCost = (participant.Cost - meanCost) / stdDevCost;
        participant.normalizedExperience = (participant.Experience - meanExperience) / stdDevExperience;
    });

    // Calculate scores for each participant and add them to model.sorted
    model.participants.forEach(participant =>
    {
        var timeScore = timeWeight === 0 ? 0 : Math.abs(participant.normalizedTime - timeWeight / 5);
        var costScore = costWeight === 0 ? 0 : Math.abs(participant.normalizedCost - costWeight / 5);
        var experienceScore = experienceWeight === 0 ? 0 : Math.abs(participant.normalizedExperience - experienceWeight / 5);

        var totalScore = (timeScore + costScore + experienceScore) / 3;

        // Add participant along with score to model.sorted
        model.sorted.push({ participant: participant, score: totalScore });
    });

    // Sort model.sorted based on scores in ascending order
    model.sorted.sort((a, b) => a.score - b.score);

    updateSortedList();
}
