function allowDrop(event) {
    event.preventDefault();
  }
  
  function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
  }
  
  function drop(event) {
    event.preventDefault();
    const itemId = event.dataTransfer.getData("text");
    const item = document.getElementById(itemId);
    event.target.appendChild(item);
    // event.target.querySelector('.drop-message').style.display = 'none';
    alert('Item dropped successfully!');
  }
  
  function resetContainers() {
    const sourceContainer = document.querySelector('.source-container');
    const destinationContainer = document.querySelector('.destination-container');
    
    // Reset the source container by appending the items back
    const items = destinationContainer.querySelectorAll('.item');
    // Reset the destination container
    destinationContainer.innerHTML = '<div class="drop-message">Drop items here</div>';
  
    items.forEach((item) => {
      sourceContainer.appendChild(item);
    });
  }
  