angular.module('profile.service', [])

  .factory('ProfileService', function() {

    var profile;

    return {

      getProfile: function(){
        return {name:"Max Borenstein", emergencyNumber: "054-7852525", nationalEmergencyNumber:"101"}
      },

      getEmergencyNumber: function(){
        return profile.emergencyNumber;
      },

      saveProfile: function(profileData){
        profile = profileData;
      }

    }
  });
