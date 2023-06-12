document.getElementById("button").addEventListener("click", function() {
    var button = document.getElementById("button");
    var loading = document.getElementById("loading");
  
    button.disabled = true;
    button.innerHTML = "Encontrando Oportunidades...";
    loading.style.display = "block";
  
    setTimeout(function() {
      button.disabled = false;
      button.innerHTML = "Desligar Sinais";
      loading.style.display = "none";
  
      var percentage = document.getElementById("percentage");
      if (!percentage) {
        percentage = document.createElement("span");
        percentage.id = "percentage";
        button.parentNode.insertBefore(percentage, button);
      }
  
      var validUntil = document.getElementById("valid-until");
      if (!validUntil) {
        validUntil = document.createElement("span");
        validUntil.id = "valid-until";
        button.parentNode.insertBefore(validUntil, button.nextSibling);
      }
  
      percentage.style.display = "block";
      validUntil.style.display = "block";
  
      var currentPercentage = 87;
      var intervalId;
  
      function updatePercentage() {
        var randomPercentage = Math.floor(Math.random() * (95 - 87 + 1) + 87);
        var colorClass = "";
        if (randomPercentage >= 87 && randomPercentage <= 89) {
          colorClass = "orange";
        } else if (randomPercentage >= 90 && randomPercentage <= 93) {
          colorClass = "yellow";
        } else if (randomPercentage >= 94 && randomPercentage <= 95) {
          colorClass = "green";
        }
        percentage.innerText = "Probabilidade de Ganhos em: " + randomPercentage + "%";
        percentage.className = colorClass;
      }
  
      function resetPage() {
        button.disabled = false;
        button.innerHTML = "Hacker Fortune Tiger";
        percentage.style.display = "none";
        validUntil.style.display = "none";
        clearInterval(intervalId);
      }
  
      updatePercentage();
      intervalId = setInterval(updatePercentage, 15000);
  
      var currentTime = new Date();
      var validTime = new Date(currentTime.getTime() + 2 * 60000);
      validUntil.innerText = "Válido até: " + validTime.toLocaleTimeString();
  
      setTimeout(function() {
        resetPage();
      }, 2 * 60000);
    }, 5000);
  });
  