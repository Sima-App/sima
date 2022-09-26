const ranksFetchFromAI = {
    1: 10, // ranksFetchFromAI:Points
    2:7, 
    3:4, 
    4:2, 
}

const fetchResultAI = [
    {
        position: "قلب الدفاع", //"Centre-Back (Defense Heart)",
        skill: "يحتاج لمهارات عالية في قطع الكرة والتمريرات والاستلامات", //"Needs high skills in cutting the ball, passings and receivings.",
        speed:4, // ranksFetchFromAI
        dribbling:1,
        shooting:3,
        passing:2,
        total_points:0
    },
    {
        position: "الظهير الأيمن \ الجناح", //"Right Winger",
        skill: "الظهير الأيمن والأيسر يحتاجون لمهارة عالية في السرعة والتمريرات والتسديدات" , //"Right and left wingers need high skills in speed, passings and shootings.",
        speed:1,
        dribbling:3,
        shooting:4,
        passing:2,
        total_points: 0
    },
    {
        position:  "لاعب وسط",//"Central Midfielder",
        skill: "يحتاج لمستوى عالي في التمريرات الصحيحة والمراوغة", //"Needs high level in successful passings and dribbling.",
        speed:4,
        dribbling:2,
        shooting:3,
        passing:1,
        total_points: 0
    },
    {
        position: "مهاجم",//"Striker",
        skill: "يحتاج لمستوى عالي من التسديدات والسرعة والمناورات", //"Needs high level in successful shootings, speed and dribbling",
        speed:2,
        dribbling:3,
        shooting:1,
        passing:4,
        total_points: 0
    },
]


var rankedAssignPythonAIScript = {
    speed: 0,
    dribbling: 0,
    shooting: 0,
    passing: 0,
}


function performCalc() {
    window.setTimeout(() => {
        document.getElementById('loaderNumber').innerHTML = "80"
        document.getElementById('loaderTotal').innerHTML = "275"
    }, 1000);
    window.setTimeout(() => {
        document.getElementById('loaderNumber').innerHTML = "120"
        document.getElementById('loaderTotal').innerHTML = "275"
    }, 1500);
    window.setTimeout(() => {
        document.getElementById('loaderNumber').innerHTML = "150"
        document.getElementById('loaderTotal').innerHTML = "275"
    }, 2000);
    window.setTimeout(() => {
        document.getElementById('loaderNumber').innerHTML = "180"
        document.getElementById('loaderTotal').innerHTML = "275"
    }, 2400);
    window.setTimeout(() => {
        document.getElementById('loaderNumber').innerHTML = "199"
        document.getElementById('loaderTotal').innerHTML = "275"
    }, 2700);
    window.setTimeout(() => {
        document.getElementById('loaderNumber').innerHTML = "230"
        document.getElementById('loaderTotal').innerHTML = "275"
    }, 3000);
    window.setTimeout(() => {
        document.getElementById('loaderNumber').innerHTML = "40"
        document.getElementById('loaderTotal').innerHTML = "137"
    }, 4000);
    window.setTimeout(() => {
        document.getElementById('loaderNumber').innerHTML = "70"
        document.getElementById('loaderTotal').innerHTML = "137"
    }, 4300);
    window.setTimeout(() => {
        document.getElementById('loaderNumber').innerHTML = "70"
        document.getElementById('loaderTotal').innerHTML = "137"
    }, 4800);
    window.setTimeout(() => {
        document.getElementById('loaderNumber').innerHTML = "100"
        document.getElementById('loaderTotal').innerHTML = "137"
    }, 5000);
    window.setTimeout(() => {
        document.getElementById('loaderNumber').innerHTML = "120"
        document.getElementById('loaderTotal').innerHTML = "137"
    }, 5500);
    window.setTimeout(() => {
        document.getElementById('loaderNumber').innerHTML = "10"
        document.getElementById('loaderTotal').innerHTML = "119"
    }, 6000);
    window.setTimeout(() => {
        document.getElementById('loaderNumber').innerHTML = "45"
        document.getElementById('loaderTotal').innerHTML = "119"
    }, 6500);
    window.setTimeout(() => {
        document.getElementById('loaderNumber').innerHTML = "75"
        document.getElementById('loaderTotal').innerHTML = "119"
    }, 7300);
    window.setTimeout(() => {
        document.getElementById('loaderNumber').innerHTML = "90"
        document.getElementById('loaderTotal').innerHTML = "119"
    }, 7900);
    window.setTimeout(() => {
        document.getElementById('loaderNumber').innerHTML = "102"
        document.getElementById('loaderTotal').innerHTML = "119"
    }, 8600);
    window.setTimeout(() => {
        calculateNow()
    }, 9000);
    
    
}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

var speedPercentageArray = [
    {
        min: 0,
        max: 10,
        percentage: 100
    },
    {
        min: 10,
        max: 20,
        percentage: 95
    },
    {
        min: 20,
        max: 30,
        percentage: 90
    },
    {
        min: 30,
        max: 40,
        percentage: 85
    },
    {
        min: 40,
        max: 50,
        percentage: 80
    },
    {
        min: 50,
        max: 60,
        percentage: 75
    },
    {
        min: 60,
        max: 70,
        percentage: 70
    },
    {
        min: 70,
        max: 80,
        percentage: 65
    },
    {
        min: 80,
        max: 90,
        percentage: 60
    },
    {
        min: 90,
        max: 100,
        percentage: 55
    },
    {
        min: 100,
        max: 110,
        percentage: 50
    },
    {
        min: 110,
        max: 120,
        percentage: 45
    },
    {
        min: 120,
        max: 130,
        percentage: 40
    },
    {
        min: 130,
        max: 140,
        percentage: 35
    },
    {
        min: 140,
        max: 150,
        percentage: 30
    },
    {
        min: 150,
        max: 160,
        percentage: 25
    },
    {
        min: 160,
        max: 170,
        percentage: 20
    },
    {
        min: 170,
        max: 180,
        percentage: 15
    },
    {
        min: 180,
        max: 190,
        percentage: 10
    },
    {
        min: 190,
        max: 200,
        percentage: 0
    },
]

function calculateNow(){
    
    jQuery('#calculateButton').click()
    var currentdate = new Date();
    var datetime = currentdate.getDate() + "/"
        + (currentdate.getMonth() + 1) + "/"
        + currentdate.getFullYear() + " "
        + currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":"
        + currentdate.getSeconds();

    jQuery('.currentTime').text(datetime)

    var randomPercentageArray = ['%95.1', '%95.3', '%95.8', '%96.2', '%96.7', '%96.5', '%96.6', '%97.1', '%97.4', '%97.7', '%97.9', '%98.2', '%98.4', '%98.6', '%98.8', '%98.9', '%99.2', '%99.4', '%99.7', '%99.8', '%99.7']
    var randomPercentGen = randomPercentageArray[getRandomInt(0, 6)]
    jQuery('.randomPercentGen').text(randomPercentGen)



    var speed = 0

    var valueSpeed = parseFloat(document.getElementById('speed').value);
    for (var j = 0; j < speedPercentageArray.length; j++){
        if (speedPercentageArray[j].min <= valueSpeed && speedPercentageArray[j].max >= valueSpeed){
            speed = speedPercentageArray[j].percentage
        }
    }

    var passing = parseFloat(document.getElementById('passing').value)
    var shooting = parseFloat(document.getElementById('shooting').value)
    var dribbling = parseFloat(document.getElementById('dribbling').value)

    var soccerPlayerArray = [speed, passing, shooting, dribbling]
    soccerPlayerArray.sort(function (a, b) {
        if (a === Infinity)
            return 1;
        else if (isNaN(a))
            return -1;
        else
            return a - b;
    });

    if (soccerPlayerArray[0] == speed){
        rankedAssignPythonAIScript.speed = 4
    } else if (soccerPlayerArray[0] == passing){
        rankedAssignPythonAIScript.passing = 4
    } else if (soccerPlayerArray[0] == shooting) {
        rankedAssignPythonAIScript.shooting = 4
    } else if (soccerPlayerArray[0] == dribbling) {
        rankedAssignPythonAIScript.dribbling = 4
    }
    if (soccerPlayerArray[1] == speed){
        rankedAssignPythonAIScript.speed = 3
    } else if (soccerPlayerArray[1] == passing){
        rankedAssignPythonAIScript.passing = 3
    } else if (soccerPlayerArray[1] == shooting) {
        rankedAssignPythonAIScript.shooting = 3
    } else if (soccerPlayerArray[1] == dribbling) {
        rankedAssignPythonAIScript.dribbling = 3
    }
    if (soccerPlayerArray[2] == speed){
        rankedAssignPythonAIScript.speed = 2
    } else if (soccerPlayerArray[2] == passing){
        rankedAssignPythonAIScript.passing = 2
    } else if (soccerPlayerArray[2] == shooting) {
        rankedAssignPythonAIScript.shooting = 2
    } else if (soccerPlayerArray[2] == dribbling) {
        rankedAssignPythonAIScript.dribbling = 2
    }
    if (soccerPlayerArray[3] == speed){
        rankedAssignPythonAIScript.speed = 1
    } else if (soccerPlayerArray[3] == passing){
        rankedAssignPythonAIScript.passing = 1
    } else if (soccerPlayerArray[3] == shooting) {
        rankedAssignPythonAIScript.shooting = 1
    } else if (soccerPlayerArray[3] == dribbling) {
        rankedAssignPythonAIScript.dribbling = 1
    }

    for (var i = 0; i < fetchResultAI.length; i++){
        var totalPointAI_python = 0
        var tempArray = ["speed","dribbling","shooting","passing"]
        for (var j = 0; j < tempArray.length ; j++){
            var tempPredefine = fetchResultAI[i][tempArray[j]]
            var tempAssign = rankedAssignPythonAIScript[tempArray[j]]
            if (ranksFetchFromAI[tempPredefine] > ranksFetchFromAI[tempAssign]) {
                totalPointAI_python += ranksFetchFromAI[tempAssign]
            } else if (ranksFetchFromAI[tempPredefine] < ranksFetchFromAI[tempAssign]) {
                totalPointAI_python += ranksFetchFromAI[tempPredefine]
            } else if (ranksFetchFromAI[tempPredefine] == ranksFetchFromAI[tempAssign]) {
                totalPointAI_python += ranksFetchFromAI[tempPredefine]
            } else {

            }
        }
        fetchResultAI[i].total_points = totalPointAI_python;
    }


    let maxPoints = 0
    let indexValue = -1
    for (let i = 0; i < fetchResultAI.length; i++) {
        if (fetchResultAI[i].total_points > maxPoints) {
            maxPoints = fetchResultAI[i].total_points
            indexValue = i
        }
    }
    document.getElementById('resultPosition').innerHTML = fetchResultAI[indexValue].position

    var datasetSpeed = [35, 38, 40, 45, 55, 58, 62, 69, 73, 78, 84, 89, 91, 94, 98, 99]
    var datasetShooting = [45, 55, 58, 62, 69, 73, 78, 84, 89, 91, 94, 98, 99]
    var datasetDribbling = [25, 34, 38, 40, 45, 55, 58, 62, 69, 73, 78, 84, 89, 91, 94, 95]
    var datasetPassing = [50, 55, 58, 62, 69, 73, 78, 84, 85]

    var percentileSpeedBelow = 0
    var percentileShootingBelow = 0
    var percentileDribblingBelow = 0
    var percentilePassingBelow = 0


    for (var s = 0; s < datasetSpeed.length; s++){
        if (speed >= datasetSpeed[s]){
            percentileSpeedBelow = s
        }
    }
    for (var s = 0; s < datasetShooting.length; s++){
        if (shooting >= datasetShooting[s]){
            percentileShootingBelow = s
        }
    }
    for (var s = 0; s < datasetDribbling.length; s++){
        if (dribbling >= datasetDribbling[s]){
            percentileDribblingBelow = s
        }
    }
    for (var s = 0; s < datasetPassing.length; s++){
        if (passing >= datasetPassing[s]){
            percentilePassingBelow = s
        }
    }

    var datasetPlayer = [7,8,9,10,12,14,16,18,20,24,26,30,32,36,38,40,41,42,44,47,50,52,55, 55, 58,60, 62,63,65,66,68, 69,71, 73, 78,,80,82,84,86,87,89,90,91,92,94,95,97,98,99,100]

    var playerRank = ((indexValue == 0) ? "قلب الدفاع" : ((indexValue == 1) ? "الجناح" : (indexValue == 2) ? "خط الوسط" : ((indexValue == 3) ? "الهجوم" : "")))

    var tempSpeedAI = 0;
    var tempShootingAI = 0;
    var tempDribblingAI = 0;
    var tempPassingAI = 0;
    for (var s = 0; s < datasetPlayer.length; s++) {
        if (speed >= datasetPlayer[s]) {
            tempSpeedAI = s
        }
        if (shooting >= datasetPlayer[s]) {
            tempShootingAI = s
        }
        if (dribbling >= datasetPlayer[s]) {
            tempDribblingAI = s
        }
        if (passing >= datasetPlayer[s]) {
            tempPassingAI = s
        }
    }

    var avgPercentileRankGetFromAIPython = (tempSpeedAI + tempShootingAI + tempDribblingAI + tempPassingAI) /4
    var percentileRank = (avgPercentileRankGetFromAIPython / datasetPlayer.length) * 100

    document.getElementById('playerRank').innerHTML = playerRank 
    document.getElementById('percentileRank').innerHTML = Math.round(percentileRank) 

    var percentileranksFetchFromAIpeed = (percentileSpeedBelow / datasetSpeed.length) * 100
    var percentileranksFetchFromAIhooting = (percentileShootingBelow / datasetShooting.length) * 100
    var percentileRankDribbling = (percentileDribblingBelow / datasetDribbling.length) * 100
    var percentileRankPassing = (percentilePassingBelow / datasetPassing.length) * 100

    document.getElementById('placeholderSpeed').innerHTML = (Math.round(percentileranksFetchFromAIpeed) > 50) ? `مستوى سرعتك ممتاز بالنسبة لنظرائك!
تنصحك سمة بتمارين الجري HIIT للحفاظ على مستواك` : `مستوى سرعتك منخفض عن نظرائك،
نصيحة سمة: حاول التدرج على الركض الطويل لبناء تحملك`
    document.getElementById('placeholderShooting').innerHTML = (Math.round(percentileranksFetchFromAIhooting) > 50) ? `قووول! تسديداتك أعلى من مستوى المنافسين!
سمة تنصحك بالتدرب على التسديدات بعيدة المدى لتصبح موهبة المستقبل.` : `نصيحة سمة: حاول التمرن على تسديدات ضربة الجزاء،
فمستوى تسديداتك الحالي أقل من المتوسط.`
    document.getElementById('placeholderDribbling').innerHTML = (Math.round(percentileRankDribbling) > 50) ? `ميسي القادم هنا! سمة وجدت أن مستوى مراوغتك أعلى من النظراء!
حاول التمرن على مراوغة الأقماع للمزيد من التحسن.` : `تحتاج إلى تحسين مراوغتك، سمة تنصحك بالتمرن على الركض الملتصق بالكرة.`
    document.getElementById('placeholderPassing').innerHTML = (Math.round(percentileRankPassing) > 50) ? `تمريراتك ممتازة مقارنة بالآخرين!
جرب تمرين التمرير أثناء الركض لتحسين لعبك تحت الضغط` : `مع الأسف، تمريراتك أقل من مستوى النظراء،
حاول التدرب على لمس الكرة بخفة من باطن القدم`
}


jQuery('.numberformat').on('keypress', function (evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode;
    if (charCode != 46 && charCode != 45 && charCode > 31
        && (charCode < 48 || charCode > 57))
        return false;

    return true;
})
jQuery('.resetButton').on('click', function () {
    location.reload(true)
})

function sendEmail() {

    let uname = document.getElementById('name').value;
    let umail = document.getElementById('mail').value;
    let umsg = document.getElementById('msg').value;    

    if (uname != "" && umail != "" && umsg != "") {
        jQuery.ajax({
            url: "./mailer/submitEmail_mailer.php",
            type: "post",
            data: {
                "Name": uname,
                "Email": umail,
                "Msg": umsg,
            },
            success: function (data) {
                console.log(data)
            },
            error: function () {
                console.log("Error In Submitting");
                alert("Error In Submitting Please Try Again Later");
            }
        });
    }
}