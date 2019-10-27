//create random number with min and max as arguments
random = (max, min) => {
    return Math.floor(Math.random() * (max - min) + min);
}

//Function that can be called on each button click
generate = () => {

//initialize variables
let randomMonth = random(13, 1);
let randomFate = random(11, 1);
let longDays = random(32, 1);
let shortDays = random(31, 1)
let febDays = random(29, 1);
let year = random(100, 20);
fortuneText = document.querySelector('#fortuneText')

//Switch statement to hand month and days in each month, return month and days
getMonthName = () => {
    switch(randomMonth){
        case 1: 
            month = 'January'
            days = longDays
         break
        case 2: 
            month = 'February'
            days = febDays
         break
        case 3: 
            month = 'March'
            days = longDays
         break
        case 4: 
            month = 'April'
            days = shortDays
         break
        case 5: 
            month = 'May'
            days = longDays
         break
        case 6: 
            month = 'June'
            days = shortDays
         break
        case 7: 
            month = 'July'
            days = longDays
         break
        case 8: 
            month = 'August'
            days = longDays
         break
        case 9: 
            month = 'September'
            days = shortDays
         break
        case 10: 
            month = 'October'
            days = longDays
         break
        case 11: 
            month = 'November'
            days = shortDays
         break
        case 12: 
            month = 'December'
            days = longDays
         break
    }
    return `On ${month} ${days}`
}

//Switch statement to handle possible fortunes
getFate = () => {
    switch (randomFate) {
        case 1:
            fate = 'you will become a millionaire'
        break;
        case 2:
            fate = 'you will lose all of your money'
        break
        case 3:
            fate = 'you are going to be the most famous person in the world'
        break
        case 4:
            fate = 'you are going to become a famous athlete'
        break
        case 5:
            fate = 'you are going to be President of the United States'
        break
        case 6:
            fate = 'you are going to start your own live tv talk show'
        break
        case 7:
            fate = 'you are going to be the first person to live on the moon'
        break
        case 8:
            fate = 'you will save the world'
        break
        case 9:
            fate = 'you will become a worldwide celebrity'
        break
        case 10:
            fate = 'you will be abducted by aliens'
        break
        
    }

    return fate
}
    //Convert data into a string using string literal
    getString = () => {
        return `${getMonthName()}, 20${year}, ${getFate()}.`
    }

    fortuneText.innerText = getString(); 
    
}





