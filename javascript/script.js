const reset = document.getElementById("reset_btn");

reset.addEventListener("click", function () {
    location.reload();
}
);


const roll_button = document.getElementById("roll_btn");


const dice_image_1 = document.getElementById("dice_one");
const dice_image_2 = document.getElementById("dice_two");
const dice_image_3 = document.getElementById("dice_three");


let score1 = 0;
const score_1 = document.getElementById("score_one");

let score2 = 0;
const score_2 = document.getElementById("score_two");

let score3 = 0;
const score_3 = document.getElementById("score_three");


let roll1 = [];
let roll2 = [];
let roll3 = [];


const min_rng = 1;
const max_rng = 6;


let count = 0;
const countlabel = document.getElementById("counter");


roll_button.onclick = function () {
    const randomnum_rng_1 = Math.floor(Math.random() * (max_rng - min_rng + 1)) + min_rng;
    const randomnum_rng_2 = Math.floor(Math.random() * (max_rng - min_rng + 1)) + min_rng;
    const randomnum_rng_3 = Math.floor(Math.random() * (max_rng - min_rng + 1)) + min_rng;

    dice_image_1.src = `assets/dice-${randomnum_rng_1}.png`;
    dice_image_2.src = `assets/dice-${randomnum_rng_2}.png`;
    dice_image_3.src = `assets/dice-${randomnum_rng_3}.png`;

    if (count < 5) {
        count++;
        countlabel.textContent = `Rolled ${count}/5`;

        score1 += randomnum_rng_1;
        score_1.textContent = score1;

        score2 += randomnum_rng_2;
        score_2.textContent = score2;

        score3 += randomnum_rng_3;
        score_3.textContent = score3;

        roll1.push(randomnum_rng_1);
        roll_label_1.textContent = `${roll1.join("+")}`;

        roll2.push(randomnum_rng_2);
        roll_label_2.textContent = `${roll2.join("+")}`;

        roll3.push(randomnum_rng_3);
        roll_label_3.textContent = `${roll3.join("+")}`;
    }

    if (count == 5) {
        countlabel.textContent = "Game over";
        roll_button.disabled = true;

        if (score1 > score2 && score1 > score3) {
            result_player.textContent = `Player 1`;
        }
        else if (score2 > score1 && score2 > score3) {
            result_player.textContent = `Player 2`;
        }
        else if (score3 > score1 && score3 > score2) {
            result_player.textContent = `Player 3`;
        }
        else {
            result_player.textContent = `Draw`;
        }

    }

}

