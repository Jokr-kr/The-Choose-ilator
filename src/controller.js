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

    // Filter out attributes with a weight of 0
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
            { Name: "Alice", Time: 30, Cost: 10, Experience: 7 },
            { Name: "Bob", Time: 20, Cost: 15, Experience: 5 },
            { Name: "Charlie", Time: 25, Cost: 20, Experience: 8 },
            { Name: "David", Time: 35, Cost: 10, Experience: 6 },
            { Name: "Eve", Time: 20, Cost: 10, Experience: 10 },
            { Name: "Frank", Time: 40, Cost: 5, Experience: 9 },
            { Name: "Grace", Time: 25, Cost: 15, Experience: 7 },
            { Name: "Hank", Time: 30, Cost: 20, Experience: 5 },
            { Name: "Ivy", Time: 15, Cost: 25, Experience: 6 },
            { Name: "Jack", Time: 20, Cost: 15, Experience: 8 },
            { Name: "Ken", Time: 25, Cost: 10, Experience: 5 },
            { Name: "Lily", Time: 30, Cost: 20, Experience: 7 },
            { Name: "Mia", Time: 20, Cost: 10, Experience: 6 },
            { Name: "Nina", Time: 35, Cost: 25, Experience: 5 },
            { Name: "Oscar", Time: 25, Cost: 15, Experience: 9 }
        )
    updateParticipantList();
}

