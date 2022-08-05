
if(window.location.pathname == "/index.html") {
    var apexlegendsguide = document.getElementById("mainTitle").style.color = "blue"

    var gibbyImage = document.querySelector("#gibraltar");
    gibbyImage.addEventListener("click", changeGibbyImage);

    var lifelineAbilities = document.querySelector("#lifeline");
    lifelineAbilities.addEventListener("mouseover", showLifeLineAbilities);
    alert("Hello Apex Legends");
} else if(window.location.pathname == "/weapons.html") {
    alert("Apex Weapons");
}




// Changes gibby's background image
// if the background image is the blue gibby, change it to the other one
// else (if background is the other one) change it to the blue gibby
function changeGibbyImage() {
    if((gibbyImage.style.backgroundImage == 'url("https://wallpapercave.com/dwp2x/wp5695029.jpg")') || gibbyImage.style.backgroundImage == "") {
        gibbyImage.style.backgroundImage = 'url("https://www.vgr.com/wp-content/uploads/2020/06/Gibraltar.jpg")';
    } else {
        gibbyImage.style.backgroundImage = 'url("https://wallpapercave.com/dwp2x/wp5695029.jpg")';
    }
    
    
}



function showLifeLineAbilities () {
    lifelineAbilities = document.querySelector("#lifeline p");
    lifelineAbilities.textContent = "Passive skill: Combat Medic. Deploy D.O.C. to revive teamates. leaving you free to move and defend. Active Skill: D.O.C. Heal Drone. Heals nearby allies over time. Ultimate: Care Package. Call in a supply drop of high quality defensive gear."
}