class Field extends Element {

  constructor(elementId) {
    super(`#${elementId}`);                                               //# - для того чтобы строку-параметр перевести в ID (# из CSS)
    //this.errorEl = document.querySelector(`#${elementId} + .error`); 
    this.error = new Element(`#${elementId} + .error`);                   //"+" это комбинатор, # - это ID   
  }  

  touch(touched) {
    if (touched) {
      this.el.classList.add('touched');
    } else {
      this.el.classList.remove('touched');
    }
    
  }

  get value() {                     
    return this.el.value;
  }  

  validate() {
    this.error.show(!this.el.value);
  }

  clear() {
    this.el.value = '';
    this.touch(false);  //убираем класс touched, чтобы после закрытия формы иповторного возврата к форме, поля не становились с красной рамкой(как буд-то невалидными) 
    this.error.show(false);
  }  

}