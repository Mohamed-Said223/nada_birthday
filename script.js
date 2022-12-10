function message() {
    document.querySelector(
        "head"
    ).innerHTML += `<link rel="stylesheet" href="style_message.css">`;
    document.querySelector("body").innerHTML = `
    <canvas id="canvas"></canvas>
    <section class="wrap">
        <section class="gift">
            <div class="giftcard carddd" ><p onclick="showMessage()">show</p></div>
            <section class="gift_top">
                <div class="ribbon_right"></div>
                <div class="ribbon_left"></div>
                <div class="gift_box_top"></div>
                <div class="gift_ribbon_left"></div>
            </section>
            <div class="gift_ribbon_center"></div>
            <div class="gift_box_bottom_top"></div>
            <div class="gift_box_bottom">
                <div class="gift_box_bottom_ribbon" id="ribbon1"></div>
                <div class="gift_box_bottom_ribbon" id="ribbon2"></div>
                <div class="gift_box_bottom_ribbon" id="ribbon3"></div>
                <div class="gift_box_bottom_ribbon" id="ribbon4"></div>
            </div>
        </section>
        <section class="cake">
            <div class="one_number">
                <div class="one_flame"></div>
            </div>
            <div class="seven_number">
                <div class="seven_flame"></div>
            </div>
            <section class="cake_top2">
                <section class="cake_top1_creams">
                    <div class="cake_top1_cream1"></div>
                    <div class="cake_top1_cream2"></div>
                    <div class="cake_top1_cream3"></div>
                    <div class="cake_top1_cream4"></div>
                    <div class="cake_top1_cream5"></div>
                    <div class="cake_top1_cream6"></div>
                    <div class="cake_top1_cream7"></div>
                    <div class="cake_top1_cream8"></div>
                    <div class="cake_top1_cream9"></div>
                    <div class="cake_top1_cream10"></div>
                    <div class="cake_top1_cream11"></div>
                    <div class="cake_top1_cream12"></div>
                    <div class="cake_top1_cream13"></div>
                </section>
            </section>
            <section class="cake_top1">
                <div class="cherry" id="cherry1"></div>
                <div class="cherry" id="cherry2"></div>
                <div class="cherry" id="cherry3"></div>
                <div class="cherry" id="cherry4"></div>
                <div class="cherry" id="cherry5"></div>
                <section class="circles">
                    <div class="cake_circle" id="circle1"></div>
                    <div class="cake_circle" id="circle2"></div>
                    <div class="cake_circle" id="circle3"></div>
                    <div class="cake_circle" id="circle4"></div>
                    <div class="cake_circle" id="circle5"></div>
                </section>
                <div class="cake_line" id="cake_line1"></div>
                <div class="cake_line" id="cake_line2"></div>
                <div class="cake_line" id="cake_line3"></div>
                <div class="cake_line" id="cake_line4"></div>
                <div class="cake_line" id="cake_line5"></div>
                <div class="cake_line" id="cake_line6"></div>
                <div class="cake_line" id="cake_line7"></div>
                <div class="cake_line" id="cake_line8"></div>
                <div class="cake_line" id="cake_line9"></div>
                <div class="cake_line" id="cake_line10"></div>
                <div class="cake_line" id="cake_line11"></div>
                <div class="cake_line" id="cake_line12"></div>
                <div class="cake_line" id="cake_line13"></div>
                <div class="cake_line" id="cake_line14"></div>
                <div class="cake_line" id="cake_line15"></div>
                <div class="cake_line" id="cake_line16"></div>
                <div class="cake_line" id="cake_line17"></div>
                <div class="cake_line" id="cake_line18"></div>
                <div class="cake_line" id="cake_line19"></div>
                <div class="cake_line" id="cake_line20"></div>
                <div class="cake_line" id="cake_line21"></div>
                <div class="cake_line" id="cake_line22"></div>
                <div class="cake_line" id="cake_line23"></div>
                <div class="cake_line" id="cake_line24"></div>
            </section>
            <section class="cake_bottom3">
                <section class="cake_bottom3_creams">
                    <div class="cake_bottom3_cream1"></div>
                    <div class="cake_bottom3_cream2"></div>
                    <div class="cake_bottom3_cream3"></div>
                    <div class="cake_bottom3_cream4"></div>
                    <div class="cake_bottom3_cream5"></div>
                    <div class="cake_bottom3_cream6"></div>
                    <div class="cake_bottom3_cream7"></div>
                    <div class="cake_bottom3_cream8"></div>
                    <div class="cake_bottom3_cream9"></div>
                    <div class="cake_bottom3_cream10"></div>
                    <div class="cake_bottom3_cream11"></div>
                    <div class="cake_bottom3_cream12"></div>
                    <div class="cake_bottom3_cream13"></div>
                    <div class="cake_bottom3_cream14"></div>
                    <div class="cake_bottom3_cream15"></div>
                    <div class="cake_bottom3_cream16"></div>
                    <div class="cake_bottom3_cream17"></div>
                    <div class="cake_bottom3_cream18"></div>
                    <div class="cake_bottom3_cream19"></div>
                    <div class="cake_bottom3_cream20"></div>
                    <div class="cake_bottom3_cream21"></div>
                    <div class="cake_bottom3_cream22"></div>
                    <div class="cake_bottom3_cream23"></div>
                </section>
            </section>
            <section class="cake_bottom2">
                <section class="cake_bottom1_creams">
                    <div class="cake_bottom1_cream1"></div>
                    <div class="cake_bottom1_cream2"></div>
                    <div class="cake_bottom1_cream3"></div>
                    <div class="cake_bottom1_cream4"></div>
                </section>
            </section>
            <div class="cake_bottom">
            </div>
        </section>
        <div class="line"></div>
    </section>
    `;
    zena();
}

function showMessage() {
    let card = document.querySelector(".carddd");
    card.classList.add("message");
    card.classList.remove("giftcard");
    card.innerHTML = `
    <i onclick="re()" style="position: absolute;top: 5%;right: 5%;">❌</i>
    <h3>
    ❤❤❤ كل سنة وانت طيبة يا ندى <br>
    ويجعلها يارب سنة سعيدة عليك و تحقق احلامك فيها <br>
    ❤❤❤ ويوفقك  يارب <br>
    ❤❤❤ وعقبال سنين كتييير في سعادة دايما ياختي  <br>
    تكون الهدية البسيطة دي عجبتك <br>
    Happy Birthday My Sister 🤍🤍🤍🤍
    </h3>`;
}
function re() {
    let card = document.querySelector(".carddd");
    card.classList.remove("message");
    card.classList.add("giftcard");
    card.innerHTML = `<p onclick="showMessage()">show</p>`;
}
