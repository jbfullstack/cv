document.addEventListener('DOMContentLoaded', function() {

    var languageButtons = document.querySelectorAll('.language-button');
  
    languageButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        var selectedLanguage = button.getAttribute('data-value');
  
        // Update the active button
        languageButtons.forEach(function(btn) {
          btn.classList.remove('active');
        });
        button.classList.add('active');
  
        // Load the resume content based on the selected language
        loadResumeContent(selectedLanguage);
      });
    });
   
    // Initialization part
    var defaultButton = document.querySelector('.language-button.active');
    var defaultLanguage = defaultButton.getAttribute('data-value');
    loadResumeContent(defaultLanguage);
  
    function loadResumeContent(language) {
      // Fetch the JSON file based on the selected language
      fetch('./texts/resume-' + language + '.json')
        .then(function(response) {
          if (!response.ok) {
            throw new Error('Failed to load resume content.');
          }
          return response.json();
        })
        .then(function(data) {
          // Update the resume section with the fetched JSON data
          updateResumeContent(data);
        })
        .catch(function(error) {
          console.error(error);
        });
    }
  
    function updateResumeContent(data) {
      // Update each HTML element with the corresponding JSON data
      for (var id in data) {
        if (data.hasOwnProperty(id)) {
          var element = document.getElementById(id);
          if (element) {
            element.innerHTML = data[id];
          }
        }
      }
    }
  });
  