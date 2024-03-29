// Write a function that determines whether a driver is within the speed limit. You will receive the speed and the area. Each area has a different limit: 
// •	On the motorway, the limit is 130 km/h
// •	On the interstate, the limit is 90 km/h
// •	In the city, the limit is 50 km/h 
// •	Within a residential area, the limit is 20 km/h
// If the driver is within the limits, there should be a printed speed and the speed limit. 
// `Driving {speed} km/h in a {speed limit} zone`
// If the driver is over the limit, however, your function should print the severity of the infraction and the difference in speeds. 
// `The speed is {difference} km/h faster than the allowed speed of {speed limit} - {status}`
// For speeding up to 20 km/h over the limit, the status should be speeding.
// For speeding up to 40 km/h over the limit, the status should be excessive speeding.
// For anything else, status should be reckless driving.
// The input comes as 2 string parameters. The first element is the current speed (number), the second element is the area.
// The output should be printed on the console.
function speeding(currentSpeed,location){
    let allowedSpeed = {
       'city': 50,
       'interstate': 90,
       'motorway': 130,
       'residential':20
    }
    if ( currentSpeed > allowedSpeed[location]){
       let aboveSpeed = currentSpeed - allowedSpeed[location];
       punishment(aboveSpeed);
    }else{
       console.log(`Driving ${currentSpeed} km/h in a ${allowedSpeed[location]} zone`);
    }
       function punishment(aboveSpeed){
           if (aboveSpeed <= 20){
               console.log(`The speed is ${aboveSpeed} km/h faster than the allowed speed of ${allowedSpeed[location]} - speeding`)
           }else if (aboveSpeed <=40){
               console.log(`The speed is ${aboveSpeed} km/h faster than the allowed speed of ${allowedSpeed[location]} - excessive speeding`)
           }else{
               console.log(`The speed is ${aboveSpeed} km/h faster than the allowed speed of ${allowedSpeed[location]} - reckless driving`)
           }
       }
   
   }
   speeding(40,'city');
   speeding(21, 'residential')
speeding(120, 'interstate')
speeding(200, 'motorway')
speeding(0,'residential')