
angular.module('MyApp', ['MyServices']) //second argument [] causes angular to 
//make a new container, holds names of dependencies -- e.g. modules you need to run


//pass value services in by name
.controller('MainController', function(Playlist, SongLibrary) {

   var self = this;
   self.playlist = new Playlist();
   self.library = SongLibrary.getLibrary();
   self.selectedGenre = "Butt Rock";
  
});