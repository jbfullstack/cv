document.addEventListener('DOMContentLoaded', function() {
    var languageSelect = document.getElementById('language-select');
  
    languageSelect.addEventListener('change', function() {
      var selectedLanguage = languageSelect.value;
  
      // Load the resume content based on the selected language
      loadResumeContent(selectedLanguage);
    });

    // initalisation part
    loadResumeContent(languageSelect.value);
  
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