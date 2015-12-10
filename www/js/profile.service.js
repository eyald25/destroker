angular.module('profile.service', [])

  .factory('ProfileService', function() {

    var profile;

    return {

      getEmergencyNumber: function(){
        return profile.emergencyNumber;
      },

      saveProfile: function(profileData){
        profile = profileData;
      }

    }
  });
