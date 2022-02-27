// Описан в документации
import flatpickr from 'flatpickr';
// Дополнительный импорт стилей
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
    startBtn: document.querySelector('button[data-start]'),
    inputTime: document.querySelector('#datetime-picker'),
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
}

let selectedDates = 0;
let currentDate = new Date();
let timerId = null;

// refs.startBtn.addEventListener('click', (e => {
//     refs.startBtn.setAttribute('disabled', '');

//     timerId = setInterval()
// }));


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      selectDate = selectDates[0].getTime();
      console.log(selectDate);
      if (selectedDate < nowDate) {
          alert('Please choose a date in the future');
      } else {
          refs.startBtn.removeAttribute("disabled");
      }
  },
};

getButtonStart()

