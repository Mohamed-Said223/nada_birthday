const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

let today = new Date(),
    dd = String(today.getDate()).padStart(2, "0"),
    mm = String(today.getMonth() + 1).padStart(2, "0"),
    yyyy = today.getFullYear(),
    nextYear = yyyy + 1,
    dayMonth = "12/11/",
    birthday = dayMonth + yyyy;

today = mm + "/" + dd + "/" + yyyy;
if (today > birthday) {
    birthday = dayMonth + nextYear;
}
//end

const countDown = new Date(birthday).getTime(),
    x = setInterval(function () {
        const now = new Date().getTime(),
            distance = countDown - now;

        (document.getElementById("days").innerText = Math.floor(
            distance / day
        )),
            (document.getElementById("hours").innerText = Math.floor(
                (distance % day) / hour
            )),
            (document.getElementById("minutes").innerText = Math.floor(
                (distance % hour) / minute
            )),
            (document.getElementById("seconds").innerText = Math.floor(
                (distance % minute) / second
            ));
        //do something later when date is reached
        if (distance < 0) {
            document.querySelector(".contant h1").innerHTML = "";
            effect();
            zena();
            clearInterval(x);
            setTimeout(function () {
                document.querySelector(".contant").remove();
                document.querySelector(".btns").style.opacity = 1;
            }, 13000);
        }

        //seconds
    }, 0);
let y = setInterval(function () {
    const now = new Date().getTime(),
        distance = countDown - now;
    if (distance < 28000) {
        color = ["red", "orange", "yellow", "green", "blue", "aqua", "purple"];
        let i = 0;
        z = setInterval(function () {
            document.querySelectorAll("li").forEach((e) => {
                e.style.color = color[i % 7];
            });
            i++;
        }, 1000);
        clearInterval(y);
    }

    //seconds
}, 900);
function audio() {
    document.querySelector(".audio").innerHTML = `<audio id="music" src="./music.mp3" hidden loop ></audio>`;
    let music = document.querySelector("#music");
    document.querySelector(".audioo").remove();
    let w = setInterval(function () {
        const now = new Date().getTime(),
            distance = countDown - now;
            
        if (distance < 28000) {
            music.play();
            music.volume = 0;
            let i = 0;
            let v = setInterval(function () {
                i += 0.1;
                music.volume = i;
                if (i == 1.0) clearInterval(v);
            }, 1000);
            clearInterval(w);
        }

        //seconds
    },0);
}
