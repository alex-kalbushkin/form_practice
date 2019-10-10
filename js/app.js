let modal = null;
const USERNAME = 'Alex';
const PASSWORD = 'Alex';

function onLoginClick() {  
  modal = new Modal();
  modal.show(true);                 //true передаем для отображения
}

function onLogoutClick() {
  const loginButton = new Element('#loginButton');
  const loggedUserName = new Element('#loggedUserName');
  const logoutButton = new Element('#logoutButton');

  loginButton.show(true);  
  loggedUserName.show(false);
  loggedUserName.innerHTML = '';
  
  logoutButton.show(false);                     //скрываем logout после клика по кнопке logout
}

function onModalBackDropClick() {
  closeLoginModal();
}

function onFieldBlur(elementId) {
  const field = new Field(elementId);
  field.touch(true);
  field.validate();                                       
}

function onLoginSubmit() {
  const username = new Field('username');
  const password = new Field('password');

  console.log(username.value);
  console.log(password.value);

  const validUser = username.value === USERNAME && password.value === PASSWORD;

  if (validUser) {
    
    const loginButton = new Element('#loginButton');
    loginButton.show(false);
    const loggedUserName = new Element('#loggedUserName');
    loggedUserName.show(true);
    loggedUserName.innerHTML = username.value;

    const logoutButton = new Element('#logoutButton'); 
    logoutButton.show(true);                                    //показываем logout после авторизации

    closeLoginModal(); //закрываем мод. окно
  } else {
    const error = new Element('#serverError');
    error.show(true);
    error.innerHTML = 'Invalid user name or password';
  }  

  return false;
}


function closeLoginModal() {
  
  if (modal) {
    modal.show(false);            //false передаем для скрытия
    modal = null;

    const username = new Field('username');
    username.clear();

    const password = new Field('password');
    password.clear();

    const error = new Element('#serverError');
    error.show(false);
    error.innerHTML = '';
  }

}


