  // ATM machines allow 4 to 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits

  function validatePin(pin){
      if(!isNaN(pin) && Number.isInteger(pin) && pin.toString().length == 4 || pin.toString().length == 6){
        return true
      }else{
        return false
      }
    }