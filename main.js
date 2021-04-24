                                      // points to element vars
var modal1 = document.getElementById('modal1'); //grabs the 1st modal
var modalBtn = document.getElementsByClassName('button')[0]; // grabs the modal button
var closeModal1 = document.getElementsByClassName('closeBtn')[0]; //grabs the "x" close button

                                      //event listeners
modalBtn.addEventListener('click', openModal); // listens for click on see modal button
closeModal1.addEventListener('click', closeModal); // listens for click on "x" modal button
window.addEventListener('click', outsideClick);

                                      //Functions

//opens Modal1
function openModal(){
  modal1.style.display = 'flex';
}

//closesModals
function closeModal(){
  modal1.style.display = 'none';
}

//outside click closes modal
function outsideClick(e){
if(e.target == modal1)
  modal1.style.display = 'none';
}