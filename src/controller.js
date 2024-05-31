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

//i got major help with math from "chat-gippity" ¯\_(ツ)_/¯
function calculate()
{

    var timeWeight = parseFloat(document.getElementById("timeSlider").value);
    var costWeight = parseFloat(document.getElementById("costSlider").value);
    var experienceWeight = parseFloat(document.getElementById("experienceSlider").value);

    // Create an array of weighted attributes
    var weights = [
        { attribute: 'Time', weight: timeWeight },
        { attribute: 'Cost', weight: costWeight },
        { attribute: 'Experience', weight: experienceWeight }
    ];

    weights = weights.filter(w => w.weight !== 0);

    // Sort attributes by the absolute value of their weight in descending order
    weights.sort((a, b) => Math.abs(b.weight) - Math.abs(a.weight));

    // Sort participants using the comparison function
    model.sorted = model.participants.slice().sort((a, b) => compareParticipants(a, b, weights));

    updateSortedList();
}

function compareParticipants(a, b, weights)
{
    for (var i = 0; i < weights.length; i++)
    {
        var attribute = weights[i].attribute;
        var weight = weights[i].weight;
        var aValue = parseFloat(a[attribute]);
        var bValue = parseFloat(b[attribute]);

        if (aValue !== bValue)
        {
            if (weight > 0)
            {
                return bValue - aValue; // Higher values first
            } else
            {
                return aValue - bValue; // Lower values first
            }
        }
    }
    return 0; // If all compared values are equal
}

//test setup
function test()
{
    model.participants.push
        (
            { Name: "#1", Time: 30, Cost: 10, Experience: 7 },
            { Name: "#2", Time: 20, Cost: 15, Experience: 5 },
            { Name: "#3", Time: 25, Cost: 20, Experience: 8 },
            { Name: "#4", Time: 35, Cost: 10, Experience: 6 },
            { Name: "#5", Time: 20, Cost: 10, Experience: 10 },
            { Name: "#6", Time: 40, Cost: 5, Experience: 9 },
            { Name: "bb", Time: 25, Cost: 15, Experience: 7 },
            { Name: "#8", Time: 30, Cost: 20, Experience: 5 },
            { Name: "#9", Time: 15, Cost: 25, Experience: 6 },
            { Name: "#10", Time: 20, Cost: 15, Experience: 8 },
            { Name: "#11", Time: 25, Cost: 10, Experience: 5 },
            { Name: "#12", Time: 30, Cost: 20, Experience: 7 },
            { Name: "#aa", Time: 20, Cost: 10, Experience: 6 },
            { Name: "#ab", Time: 35, Cost: 25, Experience: 5 },
            { Name: "#15", Time: 25, Cost: 15, Experience: 9 }
        )
    updateParticipantList();
}

