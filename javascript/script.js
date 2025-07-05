const reset = document.getElementById("reset_btn");

reset.addEventListener("click", function()
{
    location.reload();
}
);

const roll_button = document.getElementById("roll_btn");

const dice_image_1 = document.getElementById("dice_one");
const dice_image_2 = document.getElementById("dice_two");
const dice_image_3 = document.getElementById("dice_three");

const roll_label_one = document.getElementById("roll_label_1");
const roll_label_two = document.getElementById("roll_label_2");
const roll_label_three = document.getElementById("roll_label_3");


const min_rng = 1;
const max_rng = 6;


roll_button.onclick = function () {
    const randomnum_rng_1 = Math.floor(Math.random() * (max_rng - min_rng + 1)) + min_rng;
    const randomnum_rng_2 = Math.floor(Math.random() * (max_rng - min_rng + 1)) + min_rng;
    const randomnum_rng_3 = Math.floor(Math.random() * (max_rng - min_rng + 1)) + min_rng;

    dice_image_1.src = `assets/dice-${randomnum_rng_1}.png`;
    dice_image_2.src = `assets/dice-${randomnum_rng_2}.png`;
    dice_image_3.src = `assets/dice-${randomnum_rng_3}.png`;


    roll_label_one.textContent = randomnum_rng_1;
    roll_label_two.textContent = randomnum_rng_2;
    roll_label_three.textContent = randomnum_rng_3;
}


//counter

