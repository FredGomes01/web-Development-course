function control(temp) {
  console.log(temp);
}

class Control {
  constructor(temp, color) {
    this.color = color;
    this.temp = temp;
    this.isOn = true;
  }
  power() {
    this.isOn = !this.isOn;
    return "plin!!"
  }

  upper() {
    if( this.temp <30) {
        this.temp++;
    }
    ++this.temp;
    return this.temp;
  }
  down() {
    if(this.temp > 16) {
        this.temp--;
    }
    return this.temp;
  }
}

control(17);
const control1 = new Control(17, "Branco");
const control2 = new Control(20, "Marron");
console.log(control1.qualquer);
console.log(control1.color);
console.log(control2.color);
console.log(control1.isOn);
console.log(control1.power());
console.log(control1.isOn);
console.log(control1.upper());
console.log(control1.temp);

