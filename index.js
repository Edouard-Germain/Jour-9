// Exercice 1 

function whatDayIsToday() {
    console.log('Quel jour sommes nous ?')
    var today = new Date()
    var day = today.getDay()
    var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  console.log("Today is : " + daylist[day] + ".")
}
whatDayIsToday()

// Exercice 2 
function whatMonthIsIt (){
    console.log("What month are we ?")
    var today = new Date()
    var month= today.getMonth()
    var monthlist= ["January", "February", "March", "April", "May", "June", "July", "Augusut", "September", "Octobre", "November", "December"]
    console.log(`Nous sommes en moi de ${monthlist[month]}`)
}
whatMonthIsIt ()


// Exercice 3 

function formatDate(){
    var date = new Date()
    var day = date.getDate()
    var month = date.getMonth() +1
    var year = date.getFullYear()

    var strDate = `${day}/${month}/${year}`

    if ( day < 10 && month < 10) {
    strDate = `0${day}/0${month}/${year}`
    } else if  (month< 10) {
        strDate =`${day}/0${month}/${year}`
    } else if ( day<10){
        strDate=`0${day}/${month}/${year}`
    }

    console.log(strDate)
}

formatDate()


//// Exercice 4 


function Age (Jour,Mois,Année){
    var birthday = new Date(Année, Mois, Jour)
    var date = new Date()
    var year = date.getFullYear()
    var calclulateAge= year - Année
    if (date.getMonth() < Mois || (date.getMonth() == Mois && date.getDate() < Jour)) {
        calclulateAge -- }

    console.log(`${calclulateAge} ans`)
}


Age(12,12,1993)



////  Bonus
