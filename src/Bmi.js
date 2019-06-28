export default class Bmi {
  constructor(element) {
    this.element = element;
    this.state = {
      fields: {
        weight: '',
        height: '',
        sex: 'Male',
      },
      resultIsShown: false,
      errorMessage: '',
    };
  }

  showError() {
    const blockError = this.element.querySelector('#bmi-error');
    blockError.textContent = this.state.errorMessage;
  }

  showResult() {
    const { weight, height } = this.state.fields;
    const blockResultIndex = this.element.querySelector('#bmi-index');
    const blockResultDescription = this.element.querySelector('#bmi-result-description');

    const resultIndex = (weight / ((height / 100) ** 2)).toFixed(1);

    let resultDescription = '';
    if (resultIndex <= 18.5) {
      resultDescription = 'Underweight';
    } else if (resultIndex >= 18.6 && resultIndex <= 24.9) {
      resultDescription = 'Normal weight';
    } else if (resultIndex >= 25 && resultIndex <= 29.9) {
      resultDescription = 'Overweight';
    } else {
      resultDescription = 'Obesity';
    }

    blockResultIndex.textContent = resultIndex;
    blockResultDescription.textContent = resultDescription;
  }

  init() {
    const blockData = this.element.querySelector('#bmi-data');
    const blockResult = this.element.querySelector('#bmi-result');
    const btnResult = this.element.querySelector('#bmi-btn-result');

    btnResult.addEventListener('click', (e) => {
      e.preventDefault();

      this.state.fields.weight = this.element.querySelector('#bmi-weight').value;
      this.state.fields.height = this.element.querySelector('#bmi-height').value;
      [...blockData.querySelectorAll('input[name="bmi-sex"]')].forEach((el) => {
        if (el.checked) {
          this.state.fields.sex = el.value;
        }
      });

      if (this.state.fields.weight === '' || this.state.fields.height === '') {
        this.state.errorMessage = 'All fields must be entered!';
      } else {
        this.state.errorMessage = '';
        blockData.classList.remove('bmi-show');
        blockData.classList.add('bmi-hide');
        blockResult.classList.remove('bmi-hide');
        blockResult.classList.add('bmi-show');
        this.state.resultIsShown = true;
      }
    });
  }
}
