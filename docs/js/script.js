let openMenu = document.querySelector('.open-btn');
let body = document.querySelector('body');
let menu = document.querySelector('.menu-mobile');

openMenu.onclick = function () {
   openMenu.classList.toggle('__active');
   body.classList.toggle('__noscroll');
   menu.classList.toggle('__active');
};


var upgradeTime = 7200;
var seconds = upgradeTime;
function timer() {
   var days = Math.floor(seconds / 24 / 60 / 60);
   var hoursLeft = Math.floor((seconds) - (days * 86400));
   var hours = Math.floor(hoursLeft / 3600);
   var minutesLeft = Math.floor((hoursLeft) - (hours * 3600));
   var minutes = Math.floor(minutesLeft / 60);
   var remainingSeconds = seconds % 60;
   function pad(n) {
      return (n < 10 ? "0" + n : n);
   }
   function hou(n) {
      return (n < 10 ? n : n);
   }
   document.querySelector('.content__right-time').innerHTML = hou(hours) + ":" + pad(minutes) + ":" + pad(remainingSeconds);
   if (seconds == 0) {
      clearInterval(countdownTimer);
      document.querySelector('.content__right-time').innerHTML = "Completed";
   } else {
      seconds--;
   }
}
var countdownTimer = setInterval('timer()', 1000);


document.addEventListener('DOMContentLoaded', function () {
   const form = document.getElementById('form');
   form.addEventListener('submit', formSend);

   async function formSend(e) {
      e.preventDefault();
      let erorr = formValidate(form);

      if (erorr === 0) {
         //отправка формы
      } else {
         alert('введите номер телефона в нужном формате');
      }

      function formValidate(form) {
         let erorr = 0;
         let formReq = document.querySelectorAll('._req');

         for (let i = 0; i < formReq.length; i++) {
            const input = formReq[i];
            formRemoveErorr(input);

            //if (input.classList.contains('__email')) {
            //   if (emailTest(input)) {
            //      formAddErorr(input);
            //      erorr++;
            //   }
            //} else {
            //   if (input.value === '') {
            //      formAddErorr(input);
            //      erorr++;
            //   }
            //}

            if (input.classList.contains('__phone')) {
               if (phonetest(input)) {
                  formAddErorr(input);
                  erorr++;
               }
            } else {
               if (input.value === '') {
                  formAddErorr(input);
                  erorr++;
               }
            }
         }
         return erorr;
      }

      function formAddErorr(input) {
         input.parentElement.classList.add('__erorr');
         input.classList.add('__erorr');

      }
      function formRemoveErorr(input) {
         input.parentElement.classList.remove('__erorr');
         input.classList.remove('__erorr');
      }

      //function emailTest(input) {
      //   return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
      //}

      function phonetest(input) {
         return /^(?:\+38)?(0[5-9][0-9]\d{7})$/.test(input.value);
      }
   }
});

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = 'Order date:' + "   " + dd + '.' + mm + '.' + yyyy;
document.querySelector('.content__right-date').innerHTML = today;
