const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");

toggle.addEventListener('click', () => {
  toggle.classList.toggle('active');
  menu.classList.toggle('active');
});

const quotesArray = ['"Our greatest glory is not in never falling, but in rising every time we fall.” — Confucius', 
'“The secret of change is to focus all of your energy not on fighting the old, but on building the new.” — Socrates', 
'“The past has no power over the present moment.” — Eckhart Tolle', 
'"Life is not about finding yourself. Life is about creating yourself.” — George Bernard Shaw', 
'“If you hate a person, then you are defeated by them.“ — Confucius', 
'“To live is the rarest thing in the world. Most people exist, that is all.” — Oscar Wilde', 
'“There is only one way to avoid criticism: do nothing, say nothing, and be nothing.” — Aristotle', 
'“If you are depressed you are living in the past, if you are anxious you are living in the future. If you are at peace, you are living in the present.” — Lao Tzu', 
'“Of all forms of caution, caution in love is perhaps the most fatal to true happiness.” — Bertrand Russell',
'“A journey of a thousand miles begins with a single step.” — Confucius',
'"If you hear a voice within you say you cannot paint, then by all means paint, and that voice will be silenced." — Vincent van Gogh'];

const container = document.querySelector('.container');

const x = Math.floor(Math.random() * 11);

container.textContent = quotesArray[x]; 


const myForm = document.querySelector('.myform');
const nameInput = document.querySelector('.name');
const emailInput = document.querySelector('.email');
const msg = document.querySelector('.msg');


const disappear = () => msg.remove();



const onSubmit = (e) => {
    e.preventDefault();

if(!nameInput.value || !emailInput.value) {
msg.classList.add('error'); 
msg.innerHTML = '<h3>Please enter all fields</h3>';
setTimeout(disappear, 2000);
} else {
nameInput.value = '';  //clear fields
emailInput.value = '';
}
};



myForm.addEventListener('submit', onSubmit); 

