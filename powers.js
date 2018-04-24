
/*
    In the following code, replace `event` with the correct string to handle
    a click event on the button. Then write the function that has instructions
    for activating the corresponding power. The function should...
        1. Remove the `disabled` class
        2. Add the `enabled` class

*/


const toggleClass = (section) => {
    console.log("hi")
    // for(let i = 0; i< sectionQuery.length; i ++) 
        console.log(section.classList)
        
        // 1. Remove the `disabled` class
        section.classList.toggle("disabled")
        // 2. Add the `enabled` class
        section.classList.add("enabled")
        // sectionQuery.classList.add("enabled")
        console.log("after", section.classList)
        
    // }
}

const flightSection = document.querySelector('#flight')
const mindSection = document.querySelector("#mindreading")
const xRaySection = document.querySelector("#xray")

document.querySelector("#activate-flight").addEventListener("click", () => toggleClass(flightSection))

/*
Now write two more event handlers that activate the other two powers
when the corresponding buttons are clicked.
*/
document.querySelector("#activate-mindreading").addEventListener("click", () => toggleClass(mindSection))
document.querySelector("#activate-xray").addEventListener("click", () => toggleClass(xRaySection))


/*
    Write two more event handlers for activating and deactivating all powers
    when the corresponding buttons are clicked. You will need to use the
    `document.querySelectorAll()` method for these.
*/

// const sections = () => {
    
//     sect.forEach(currentSect => {
        
//     })
// }
const sect = document.querySelectorAll('.power')


document.querySelector('#activate-all').addEventListener("click", () => toggleClass(sect))