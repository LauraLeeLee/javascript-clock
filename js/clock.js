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

    (minutes == 00 && seconds == 00) ? setTimeout(changeImage(), 1900) : "";

    document.getElementsByTagName('body')[0].style.backgroundColor = hexColorStr;

    document.getElementById('date').innerHTML = dayName + ' ' + monthName + ' ' +
                                             date + ',' + ' ' + year; 

    document.getElementById('time').innerHTML = hours + ':' + minutes + ':' + seconds + meridian;
    
    // document.getElementById('time-shadow').innerHTML = hours + ':' + minutes + ':' + seconds + meridian;
    let time = setTimeout(startTime, 500);
}

startTime();

function changeImage() {
    let keyword = "golden retriever";

    $(document).ready(function(){

    //     $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
    //     {
    //         tags: keyword,
    //         tagmode: "any",
    //         format: "json"
    //     },
    //     function(data) {
    //         let randomImg = Math.floor(Math.random() * data.items.length);

    //         let image_src = data.items[randomImg]['media']['m'].replace("_m", "_b");
           
    //         document.getElementById('image').src = image_src;
    //         console.log(data);
    //         console.log(randomImg);
    //     });
    // });  

        $.getJSON("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=53720a5aa39c0c8378c8831fc1c48b6d&jsoncallback=?",
           { tags: keyword,
            tagmode: 'any',
            format: 'json',
           },
        function(data) {
            let items = data.photos.photo;
            
            let randomImg = Math.floor(Math.random() * items.length);
            let farmId = items[randomImg]['farm'];
            let serverId = items[randomImg]['server'];
            let photoId = items[randomImg]['id'];
            let secretId = items[randomImg]['secret'];

            console.log(farmId);
            console.log(photoId);
            console.log(serverId);
            console.log(secretId);

            let image_src = `https://farm${farmId}.staticflickr.com/${serverId}/${photoId}_${secretId}_m.jpg`;
           
            document.getElementById('image').src = image_src;
            console.log(data);
            console.log("items", ":", items);
            console.log(items.length);
            console.log(image_src);
            console.log(keyword);
        });
    });
 }

changeImage();
