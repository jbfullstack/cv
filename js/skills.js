document.getElementById('right-triangle').addEventListener('click', function() {
    var current = document.querySelector('.skills-catagory.active');
    current.classList.remove('active');
    void current.offsetWidth; // force reflow
  
    var next = current.nextElementSibling;
    while (next && !next.classList.contains('skills-catagory')) { 
      next = next.nextElementSibling;
    }
  
    if (next == null) { 
      next = document.querySelector('.skills-catagory');
    }
  
    next.classList.add('active');
  });