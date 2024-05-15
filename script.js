document.addEventListener("DOMContentLoaded", function() {
    const areaButtons = document.querySelectorAll(".area-btn");
    const facilityButtons = document.querySelectorAll(".facility-btn");
    const facilitySelection = document.querySelector(".facility-selection");
    let selectedArea = null;
  
    areaButtons.forEach(button => {
      button.addEventListener("click", function() {
        selectedArea = button.getAttribute("data-area");
        facilitySelection.style.display = "block";
        areaButtons.forEach(btn => btn.disabled = true);
      });
    });
  
    facilityButtons.forEach(button => {
      button.addEventListener("click", function() {
        const selectedFacility = button.getAttribute("data-facility");
        displayConfirmation(selectedArea, selectedFacility);
      });
    });
  
    function displayConfirmation(area, facility) {
      const confirmationMessage = document.getElementById("confirmationMessage");
      confirmationMessage.textContent = `Issue reported for ${facility} in ${area}.`;
      facilitySelection.style.display = "none";
      areaButtons.forEach(btn => btn.disabled = false);
    }
  });
  