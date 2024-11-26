window.onload = function() {
  loadItinerary();
}
function addItinerary() {
    var destination = document.getElementById("destination").value;
    var arrivalDate = document.getElementById("arrivalDate").value;
    var departureDate = document.getElementById("departureDate").value;
    var activities = document.getElementById("activities").value;
  
    if (!destination || !arrivalDate || !departureDate || !activities) {
      alert("Please fill out all fields.");
      return;
    }
  
    var itineraryItem = document.createElement("li");
    itineraryItem.innerHTML = "<strong>Destination:</strong> " + destination +
                               "<br><strong>Arrival Date:</strong> " + arrivalDate +
                               "<br><strong>Departure Date:</strong> " + departureDate +
                               "<br><strong>Activities:</strong> " + activities +
                               "<button class='delete-button' onclick='deleteItem(this)'>Delete</button>";
    document.getElementById("itineraryList").appendChild(itineraryItem);
    saveItinerary();
    // Clear input fields after adding itinerary item
    document.getElementById("destination").value = " ";
    document.getElementById("arrivalDate").value = " ";
    document.getElementById("departureDate").value = " ";
    document.getElementById("activities").value = " ";
  }
  
  function deleteItem(item) {
    var listItem = item.parentElement;
    listItem.remove();
    saveItinerary();
  }
  function saveItinerary() {
    var itineraryList = document.getElementById("itineraryList").innerHTML;
    localStorage.setItem("itinerary", itineraryList);
}

function loadItinerary() {
    var savedItinerary = localStorage.getItem("itinerary");
    if (savedItinerary) {
        document.getElementById("itineraryList").innerHTML = savedItinerary;
    }
}