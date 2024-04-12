document.addEventListener("DOMContentLoaded", function () {
  var itemSelector = document.getElementById("itemSelector");
  var contentArea1 = document.getElementById("contentarea1");
  var contentArea2 = document.getElementById("contentarea2");
  var contentArea3 = document.getElementById("contentarea3");
  var contentArea4 = document.getElementById("contentarea4");

  itemSelector.addEventListener("change", function () {
    var itemId = this.value;

    if (itemId) {
      // Simulate an AJAX request with setTimeout
      setTimeout(function () {
        // Simulated response based on the selected item.
        // In a real-world scenario, you would make an actual HTTP request here.
        var content1 = {
          samsung: "clean FRP samsung",
          HI: "Clean account",
          IOS: "Remove icloud IOS 16.6",
          NV: "Check lost/clean",
        };

        var content2 = {
          samsung: "#2",
          HI: "#3",
          IOS: "#4",
          NV: "#5",
        };

        var content3 = {
          samsung: "65",
          HI: "66",
          IOS: "67",
          NV: "68",
        };

        var content4 = {
          samsung: "1/2 day",
          HI: "2/3 day",
          IOS: "3/4 day",
          NV: "4/5 day",
        };

        // Update the content area with the simulated response
        contentArea1.textContent = content1[itemId] || "No content found.";
        contentArea2.textContent = content2[itemId] || "No content found.";
        contentArea3.textContent = content3[itemId] || "No content found.";
        contentArea4.textContent = content4[itemId] || "No content found.";
      }, 500); // Simulates network delay
    } else {
      contentArea1.textContent = "Select Service";
      contentArea2.textContent = "Select Service";
      contentArea3.textContent = "Select Service";
      contentArea4.textContent = "Select Service";
    }
  });
});
