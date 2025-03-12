// Handle button click to show birthday message
document.getElementById("showMessageButton").addEventListener("click", function() {
    const birthdayMessage = document.getElementById("birthday-message");
  
    // Add class to display the message with animation
    birthdayMessage.classList.add("show");
  });
  
  // Handle the modal popup for birthday wishes
  document.getElementById("showWishesButton").addEventListener("click", function() {
    const modal = document.getElementById("wishesModal");
    const wishesContainer = document.getElementById("wishes-container");
  
    // Wishes array with 8 people
    const wishes = [
        { name: "Amol", message: "Namita, may your day be filled with love, laughter, and everything you dream of!" },
        { name: "Ruchita", message: "Happy Birthday, Namita! You are a gem, and I wish you all the best this year!" },
        { name: "Rohan", message: "Wishing you a wonderful year ahead, Namita! May all your dreams come true." },
        { name: "Kiran", message: "Namita, may this day bring you as much happiness as you bring to everyone around you!" },
        { name: "Krishna", message: "Wishing you a fabulous year ahead, Namita! May every day bring you new reasons to smile and cherish life. Happy Birthday!" },
        { name: "Tausif", message: "On your special day, I wish you happiness, success, and a heart full of love. Enjoy every moment, Namita! Happy Birthday!" },
        { name: "Tanvi", message: "Happy Birthday to the one who lights up every room they enter! Wishing you a day as amazing as you are, Namita!" },
        { name: "Vipul", message: "May your birthday be filled with laughter, joy, and all your heart’s desires, Namita! Here’s to another incredible year of success and happiness!" }
      ];
      
  
    // Clear existing wishes
    wishesContainer.innerHTML = '';
  
    // Loop through wishes array and display them
    wishes.forEach((wish, index) => {
      const wishBox = document.createElement("div");
      wishBox.classList.add("wish-box");
      wishBox.innerHTML = `<p class="wish-message"><strong>${wish.name}</strong>: "${wish.message}"</p>`;
      wishesContainer.appendChild(wishBox);
  
      // Add animation after a delay for each wish
      setTimeout(() => {
        wishBox.style.opacity = 1;
        wishBox.style.transform = 'translateY(0)';
      }, index * 500); // Delay each wish by 500ms
    });
  
    // Show the modal
    modal.style.display = "block";
  });
  
  // Close the modal when the close button is clicked
  document.getElementById("closeModalButton").addEventListener("click", function() {
    const modal = document.getElementById("wishesModal");
    modal.style.display = "none";
  });
  