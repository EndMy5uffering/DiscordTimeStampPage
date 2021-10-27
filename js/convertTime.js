const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]

window.addEventListener("load", () => {

    const nDate = new Date()

    const daySelector = document.getElementById("daySelector")
    const monthSelector = document.getElementById("monthSelector")
    const yearSelector = document.getElementById("yearSelector")

    const hoursSelector = document.getElementById("hoursSelector")
    const minSelector = document.getElementById("minSelector")
    const secSelector = document.getElementById("secSelector")

    daySelector.value = nDate.getDate()
    monthSelector.value = months[nDate.getMonth()%12]
    yearSelector.value = nDate.getFullYear()

    hoursSelector.value = nDate.getHours()
    minSelector.value = nDate.getMinutes()
    secSelector.value = nDate.getSeconds()

})