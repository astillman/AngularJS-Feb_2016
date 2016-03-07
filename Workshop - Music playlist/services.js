angular.module('MyServices', []) 

//services are good for making a singleton with a bunch of methods on it
.service('SongLibrary', function(SONGS) { //this function is the service
	var self = this;
	self.getLibrary = function() {
		return angular.copy(SONGS);
	};
})


.factory('Playlist', function(SONGS, SongLibrary) {
	function Playlist() {
		this.selectedSongs = [];
	}

	Playlist.prototype.generateList = function(library, explicit) {
		this.selectedSongs = [];
		for (var i=0; i<library.length; i++) {
			if (library[i].selected) {
				if (explicit) {
					library[i].version = "Explicit";
				} else {
					library[i].version = "Clean";
				}
				this.selectedSongs.push(library[i]);
		    }
		}
		this.showPlaylist = true;
	}

	return Playlist; //return the constructor function (aka blueprint) itself
})


.value('SONGS', [{
	title: 'Livin On a Prayer',
	genre: 'Butt Rock'
},
{
	title: 'The Final Countdown',
	genre: 'Butt Rock'
},
{
	title: 'Every Rose Has Its Thorn',
	genre: 'Butt Rock'
},
{
	title: 'Turn, Turn, Turn',
	genre: 'Freedom Rock'
},
{
	title: 'Black Magic Woman',
	genre: 'Freedom Rock'
},
{
	title: 'Smoke on the Water',
	genre: 'Freedom Rock'
},
{
	title: 'Astronomy Domine',
	genre: 'Psychadelic Rock'
},
{
	title: '2,000 Light Years From Home',
	genre: 'Psychadelic Rock'
},
{
	title: 'Interstellar Overdrive',
	genre: 'Psychadelic Rock'
}]);