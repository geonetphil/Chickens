function myFunction(x) {
    x.classList.toggle("change");
  
  let dropdownContent = document.querySelector(".dropdown-content");
  dropdownContent.classList.toggle("active");
}

document.addEventListener('click', function(event) {
    let dropdown = document.querySelector('.dropdown');
    let dropdownContent = document.querySelector('.dropdown-content');

    if (!dropdown.contains(event.target) && !dropdownContent.contains(event.target)) {
        let container = document.querySelector('.container');
        container.classList.remove('change');
        dropdownContent.classList.remove('active');
    }
});