window.onload = function() {

    fetch('characters.json')
 
    .then(function(response) {
       return response.json();
    })
   
    .then(function(json) {
 
       var tableCode = '<table><caption>Featured Character Builds</caption><thead><tr><th>Character</th><th>Source Material</th><th>Species</th><th>Class</th><th>Background</th></tr></thead><tbody>';
 
       for (var i = 0; i < json.length; i++) {
          tableCode += '<tr><td>' + 
          json[i].character + '</td><td>' + 
          json[i].sourceMaterial + '</td><td>' + 
          json[i].species + '</td><td>' + 
          json[i].class + '</td><td>' + 
          json[i].background + 
          '</td></tr>';
       }
 
       tableCode += '</tbody><tfoot><tr><td colspan="5">These are merely suggestions. Feel free to play around and change whatever you like.</td></tr></tfoot></table>';
 
       document.getElementById('featuredCharacters').innerHTML = tableCode;
   })
 }
 
