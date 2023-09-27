
//   set auto color to text........
let num1 = Math.round(Math.random() * 255);
let num2 = Math.round(Math.random() * 255);
let num3 = Math.round(Math.random() * 255);
document.querySelector(
    ".text"
).innerHTML = `rgb(${num1}, ${num2}, ${num3})`;

//   set color to each card.....
let text = document.querySelector(".text").innerHTML;
let card = document.querySelectorAll(".box .card");
for (let i = 0; i < card.length; i++) {
    if (num1 <= 0 || num1 >= 255) {
        num1 = 50;
    } else {
        num1 += 150;
    }
    if (num3 <= 0 || num3 >= 200) {
        num3 = 100;
    } else {
        num3 += 100;
    }
    if (num2 <= 0 || num2 >= 255) {
        num2 = 150;
    } else {
        num2 += 50;
    }
    card[i].style.backgroundColor = `rgb(${num1}, ${num2}, ${num3})`;
}

// easy...........
document.querySelector(".easy").addEventListener("click", () => {
    // document.querySelector(".refresh").click();
    for (let i = 3; i < card.length; i++) {
        card[i].style.display = "none";
    }
    let num = Math.round(Math.random() * 3);
    card[num].style.backgroundColor = text;
});

// Hard..................
document.querySelector(".hard").addEventListener("click", () => {
    document.querySelector(".refresh").click();
});


//   set auto color to card.....

let num = Math.round(Math.random() * 5);
card[num].style.backgroundColor = text;

    


// console.log(num,card[num].style.backgroundColor);

//   to check color match
let count = 0;
let result = document.querySelector(".result");
let ans = document.querySelector(".ans");
for (let ele = 0; ele < card.length; ele++) {
    card[ele].addEventListener("click", () => {
        count++;
        let clickrgb = card[ele].style.backgroundColor;
        // console.log(clickrgb);
        // console.log(count);
        // document.querySelector(".try").style.display = "block";
        // document.querySelector(".tryAgain").innerHTML = "Try Again";

        if (count <= 3) {
            if (clickrgb == text) {
                for (let i = 0; i < card.length; i++) {
                    card[i].style.backgroundColor = text;
                }
                // result.style.display = "block";
                // ans.innerHTML = "You Won";
                Swal.fire({
                    title: "You Won",
                    footer: '<a href="color_checker.html">Please try again?</a>',
                });

            } else {
                // result.style.display = "block";
                // ans.innerHTML = "You Loss";
                Swal.fire({
                    icon: 'error',
                    title: 'You Loss!',
                    text: 'Oops... ' + (3 - count) + " more chance ",
                });
            }
        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'You Loss!',
                text: "Oops...  Your chance over",
                footer: '<a href="color_checker.html">Please try again?</a>'
            })

        }
    });
}

//   try again...........
// document.querySelector(".try").addEventListener("click", () => {
//     location.reload();
// });

// Refresh.........
document.querySelector(".refresh").addEventListener("click", () => {
    location.reload();
});
