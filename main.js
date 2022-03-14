setInterval(updateTime,1000)

let Time = {
    date: new Date(),
    hour:Number,
    minutes:Number,
    seconds:String,
    midday:String,
}

function updateTime() {
    Time.date = new Date()
    Time.hour = Time.date.getHours()
    Time.minutes = Time.date.getMinutes()
    Time.seconds = Time.date.getSeconds()
    IsAM()
    UpdateClock()
}

function IsAM() {
    if(Time.hour > 13) {
        Time.midday = 'PM'
    }
    else {
        Time.midday = 'AM'
    }
}

function UpdateClock() {
    if(Time.hour > 13) {
        let RegularTime = Time.hour - 12
        Time.hour = RegularTime
    }
    if(Time.minutes < 10) {
        minutes = "0" + Time.minutes
        Time.minutes = minutes
    }
    if(Time.seconds < 10) {
        seconds = '0' + Time.seconds
        Time.seconds = seconds
    }
    let HourMin = Time.hour + ":" + Time.minutes
    let SecondMidday = Time.seconds + " " + Time.midday
    CurrentTime = HourMin + " " + SecondMidday.small()
    document.querySelector('.clock').innerHTML = CurrentTime
}