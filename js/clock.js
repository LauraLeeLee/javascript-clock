function startTime() {
    let today = new Date();
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 
                'Friday', 'Saturday', 'Sunday'];
    let dayName = days[today.getDay()];
    let months = ['January', 'February', 'March', 'April', 'May', 
                'June', 'July', 'August', 'September', 'October', 
                'November', 'December'];
    let monthName = months[today.getMonth()];
    let date = today.getDate();
    let year = today.getFullYear();

    let hours = today.getHours();
    let meridian = ( hours < 12 ) ? 'AM' : 'PM';
    hours = ( hours > 12) ? hours - 12 : hours;
    hours = ( hours < 10 ? '0' : '') + hours;
    hours = ( hours == 0 ) ? 12 : hours;

    let minutes = today.getMinutes();
    minutes = (minutes < 10 ? '0' : '') + minutes;

    let seconds = today.getSeconds();
    seconds = (seconds < 10 ? '0' : '') + seconds;

    let hexColorStr = '#' + hours + minutes + seconds;

    (minutes == 00 && seconds == 00) ? setTimeout(changeImage(), 900) : "";

    document.getElementsByTagName('body')[0].style.backgroundColor = hexColorStr;

    document.getElementById('date').innerHTML = dayName + ' ' + monthName + ' ' +
                                             date + ',' + ' ' + year; 

    document.getElementById('time').innerHTML = hours + ':' + minutes + ':' + seconds + meridian;
    
    // document.getElementById('time-shadow').innerHTML = hours + ':' + minutes + ':' + seconds + meridian;
    let time = setTimeout(startTime, 500);

    console.log(hexColorStr);
}

startTime();

function changeImage() {
    var keyword = "golden retriever";

    $(document).ready(function(){

        $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
        {
            tags: keyword,
            tagmode: "any",
            format: "json"
        },
        function(data) {
            var rnd = Math.floor(Math.random() * data.items.length);

            var image_src = data.items[rnd]['media']['m'].replace("_m", "_b");
           
            document.getElementById('image').src = image_src;
        });
    });
}

changeImage();
