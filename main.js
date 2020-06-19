//Workout Generator

//Event listener for generate button
document.getElementById('genbtn').addEventListener('click', generateworkout)

//global variables
//muscle group checkboxes
let legs = document.getElementById('legs');
let arms = document.getElementById('arms');
let chest = document.getElementById('chest');
let back = document.getElementById('back');
let core = document.getElementById('core');

//muscles array
let muscles = [legs, arms, chest, back, core]

//html content for every single exercise in the exercise bank
let squat = '<div class="final"><img src="images/squat.jpg" alt=""><h2>Barbell squats</h2><p>2 sets X 10 reps. Make sure to use safety spotter arms or have a spotter.</p></div>'
let lunge = '<div class="final"><img src="images/lunge.jpg" alt=""><h2>Lunges</h2><p>2 sets X 10 reps each side. With or without weights (dumbbells, kettlebells, etc.)</p></div>'
let deadlift = '<div class="final"><img src="images/deadlift.jpg" alt=""><h2>Deadlifts</h2><p>2 sets X 10 reps. Make sure back is straight.</p></div>'
let jumpsquat = '<div class="final"><img src="images/jumpsquat.jpg" alt=""><h2>Jump squats</h2><p>2 sets X 10 reps. To increase intensity, add weight.</p></div>'
let bulgarian = '<div class="final"><img src="images/bulgarian.jpg" alt=""><h2>Bulgarian split squats</h2><p>2 sets X 10 reps each side. To increase intensity, add weight.</p></div>'
let calfraise = '<div class="final"><img src="images/calfraise.jpg" alt=""><h2>Calf raises</h2><p>2 sets X 10 reps. To increase intensity, add weight. Go slow and hold onto a wall if balancing is hard.</p></div>'

let bicepcurl = '<div class="final"><img src="images/bicepcurl.jpg" alt=""><h2>Bicep curls</h2><p>2 sets X 10 reps. Use dumbbells or a barbell.</p></div>'
let reversecurl = '<div class="final"><img src="images/reversecurl.jpg" alt=""><h2>Reverse curls</h2><p>2 sets X 10 reps. Use a barbell and hold it using a pronated grip (palms facing down). Keep wrists straight.</p></div>'
let shoulderpress = '<div class="final"><img src="images/shoulderpress.jpg" alt=""><h2>Shoulder presses</h2><p>2 sets X 10 reps. Use dumbbells or a barbell. If weight is heavy, lift with a spotter.</p></div>'
let skullcrusher =  '<div class="final"><img src="images/skullcrusher.jpg" alt=""><h2>Skullcrushers</h2><p>2 sets X 10 reps. Use a bar or a dumbbell. Keep a closer grip and ensure elbows do not flare out.</p></div>'
let kickback = '<div class="final"><img src="images/kickback.jpg" alt=""><h2>Tricep kickbacks</h2><p>2 sets X 10 reps. Choose a lighter dumbbell and ensure upper portion of arm does not swing.</p></div>'
let sideraise = '<div class="final"><img src="images/sideraise.jpg" alt=""><h2>Side raises</h2><p>2 sets X 10 reps. Bring weights up to your sides until arms are parallel to the floor.</p></div>'

let dumbbellpress = '<div class="final"><img src="images/dumbbellpress.jpg" alt=""><h2>Dumbbell chest presses</h2><p>2 sets X 10 reps.Using dumbbells press up while laying on a flat bench. If weight is heavy, lift with a spotter.</p></div>'
let benchpress = '<div class="final"><img src="images/benchpress.jpg" alt=""><h2>Bench presses</h2><p>2 sets X 10 reps. TIP: a wider grip will work your chest more and a closer grip will work triceps more. Always lift with a spotter.</p></div>'
let flies = '<div class="final"><img src="images/flies.jpg" alt=""><h2>Flies</h2><p>2 sets X 10 reps. Bring arms out and back until the weights touch. Go slow to avoid injury.</p></div>'
let inclinepress = '<div class="final"><img src="images/inclinepress.jpg" alt=""><h2>Incline chest presses</h2><p>2 sets X 10 reps. Use dumbbells or a barbell on an inclined bench.</p></div>'
let declinepress = '<div class="final"><img src="images/declinepress.jpg" alt=""><h2>Decline chest presses</h2><p>2 sets X 10 reps. Use dumbells or barbells on a declined bench.</p></div>'
let pecdeck = '<div class="final"><img src="images/pecdeck.jpg" alt=""><h2>Pecdeck</h2><p>2 sets X 10 reps.</p></div>'

let latpulldown = '<div class="final"><img src="images/latpulldown.jpg" alt=""><h2>Lat pulldowns</h2><p>2 sets X 10 reps. TIP: try various grips to work different muscles.</p></div>'
let bentoverrow = '<div class="final"><img src="images/bentoverrow.jpg" alt=""><h2>Bent-over Rows</h2><p>2 sets X 10 reps. Use a barbell with a pronated or supinated grip. Make sure back does not curve.</p></div>'
let facepulls = '<div class="final"><img src="images/facepulls.jpg" alt=""><h2>Facepulls</h2><p>2 sets X 10 reps. Hold rope attatchment on the cable machine. Bring ropes to ears and contract upper back.</p></div>'
let cablerow = '<div class="final"><img src="images/cablerow.jpg" alt=""><h2>Cable Rows</h2><p>2 sets X 10 reps. Make sure back stays straight, not to use excessive body momentum, and to squeeze shoulder blades together.</p></div>'
let reversefly = '<div class="final"><img src="images/reversefly.jpg" alt=""><h2>Reverse flies</h2><p>2 sets X 10 reps. Use dumbells.</p></div>'
let superman = '<div class="final"><img src="images/superman.jpg" alt=""><h2>Supermans</h2><p>3 sets X 15 reps. Laying on your front, lift knees and chest off the floor. Sqeeze your glutes and lower back. Keep arms straight.</p></div>'

let situp = '<div class="final"><img src="images/situp.jpg" alt=""><h2>Sit-ups</h2><p>Do as many as possible in 1 minute. Repeat for a total of 3 rounds.</p></div>'
let plank = '<div class="final"><img src="images/plank.jpg" alt=""><h2>Plank</h2><p>Hold for one minute. Repeat for a total of 3 rounds.</p></div>'
let flutterkicks = '<div class="final"><img src="images/flutterkick.jpg" alt=""><h2>Flutter kicks</h2><p>Do for 1 minute and repeat for a total of 3 rounds. TIP: go slow to increase the intensity.</p></div>'
let bicyclecrunches = '<div class="final"><img src="images/bicyclecrunches.jpg" alt=""><h2>Bicycle crunches</h2><p>Do for 1 minute and repeat for a total of 3 rounds. </p></div>'
let reversecrunches = '<div class="final"><img src="images/reversecrunch.jpg" alt=""><h2>Reverse Crunches</h2><p>Do for 1 minute and repeat for a total of 3 rounds. </p></div>'
let sideplank = '<div class="final"><img src="images/sideplank.jpg" alt=""><h2>Sideplank</h2><p>Hold for 30 seconds each side. Repeat for a total of 3 rounds. </p></div>'

//create a personalized workout
function generateworkout() {

    //exercises array
    let exercises = [[squat, lunge, deadlift, jumpsquat, bulgarian, calfraise], [bicepcurl, reversecurl, shoulderpress, skullcrusher, kickback, sideraise], [dumbbellpress, benchpress, flies, inclinepress, declinepress, pecdeck], [latpulldown, bentoverrow, facepulls, cablerow, reversefly, superman], [situp, plank, flutterkicks, bicyclecrunches, reversecrunches, sideplank]]
    
    //array for selected muscle groups
    let SelectedExercises = []
    
    //display a message if no muscles are selected
    document.getElementById('error').innerHTML = ''
    if (legs.checked == false && arms.checked == false && chest.checked == false && back.checked == false && core.checked == false) {
        document.getElementById('error').innerHTML='no muscle groups are selected'
    }

    //creating an array of selected muscles
    for (let i = 0; i < muscles.length; i++) { 
        //finding checked checkboxes
        if (muscles[i].checked == true) {
            //adding selected exercises to the array
            SelectedExercises.push(exercises[i])
        } 
    }

    let FinalWorkout = []
    //loop for number of muscle groups
    for (let q = 0; q < SelectedExercises.length; q++) {
        
        //loop for exercises within each group
        for (let i = 0; i < 3; i++){
        
        //random selection of exercises within the group
        let exerciseindex = Math.floor(Math.random()*(SelectedExercises[q].length))
        
        FinalWorkout.push(SelectedExercises[q][exerciseindex])
      
        //removal of exercise to avoid choosing same one twice in one set
        SelectedExercises[q].splice(exerciseindex,1)
        } 
    }
    console.log(FinalWorkout)

    //clear old workout displayed on the page
    document.getElementById('display').innerHTML = ''

    //display new workout on the page
    for (let w=0; w < FinalWorkout.length; w++)
    
    document.getElementById('display').innerHTML += FinalWorkout[w]
    
    //message at the end
    document.getElementById('signoff').innerHTML = ''
    if (FinalWorkout.length > 0) {
        document.getElementById('signoff').innerHTML = 'Enjoy your workout!'
    }
}
