
function run()
{
    var rootelement = document.getElementById("root");
    rootelement.innerHTML =/*HTML*/
        `
        <button onclick="test()">Test</button>
        <div class="center">
            <H1>The choose-ilator?</H1>
            <h5>it makes choices</h5>

            <div >Name</div>
            <input id ="inputname" type="text" placeholder="Name">

            <div class="padding">how long will it take?     in minutes</div>
            <input id ="Time" type="text" placeholder="time">

            <div class="padding">what does it cost?         int</div>
            <input id ="Cost" type="text" placeholder="cost">

            <div class="padding">your experience level?     int 1-10</div>
            <input id ="Experience" type="text" placeholder="experience">

            <div>
                <button style="margin-top:10px" onclick="addToList(inputname.value, Time.value, Cost.value, Experience.value)">Add</button>
            </div>
        </div>

        <h4 class= center>
            <div>sliders are used to determine the weight of each parameter</>
            <div>minus means shorter or less is valued</div>
            <div>positive means more or higher is valued</div>
            <div>0 means its not important and is ignored</div>

        </h4>
        <div class=center>

            <div>Time</div>
                <input type="range" min="-3" max="3" value="0" id="timeSlider" onchange=updateTimeWeight()><span id="timeValue">0</span>

                <div>Cost</div>
                <input type="range" min="-3" max="3" value="0" id="costSlider" onchange=updateCostWeight()><span id="costValue">0</span>

                <div >Experience</div>
                <input type="range" min="-3" max="3" value="0" id="experienceSlider" onchange=updateExperienceWeight()><span id="experienceValue">0</span>

                <div></div>
                <button style="margin-top: 10px" onclick="calculate()">calculate</button>
        </div>
        <div class="flex padding" style="margin-top: 10px">
            <div class="box">
                <h2>possible choices</h2>
                <div style=" margin-bottom: 20px;" id=listOfParticipants></div>
            </div>
                <div class="box">
                    <h2>top Choice</h2>
                    <div id=sortedList></div>
                </div>
        </div>
        `;
    updateParticipantList();
}




