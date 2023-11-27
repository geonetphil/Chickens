function myFunction(x) {
    x.classList.toggle("change");
  
  var dropdownContent = document.querySelector(".dropdown-content");
  dropdownContent.classList.toggle("active");
}

document.addEventListener('click', function(event) {
    var dropdown = document.querySelector('.dropdown');
    var dropdownContent = document.querySelector('.dropdown-content');

    if (!dropdown.contains(event.target) && !dropdownContent.contains(event.target)) {
        var container = document.querySelector('.container');
        container.classList.remove('change');
        dropdownContent.classList.remove('active');
    }
});