async function fetchAndUseData() {
    try {
      const response = await fetch('data.json');
      if (!response.ok) {
        console.log('Oops! Something went wrong.');
        return;
      }
      const data = await response.json();
      
      const dailyButton = document.querySelector(`#dailyButton`);
      const weeklyButton = document.querySelector(`#weeklyButton`);
      const monthlyButton = document.querySelector(`#monthlyButton`);

      dailyButton.addEventListener(`click`, function(){
        for (let i = 0; i < data.length; i++) {
            // Your loop logic here
            document.querySelector(`#card${i}`).innerHTML = `${data[i].timeframes.daily.current}hrs`;
            document.querySelector(`#cardPrevious${i}`).innerHTML = `Last day - ${data[i].timeframes.daily.previous}hrs`;
      }});

      weeklyButton.addEventListener(`click`, function(){
        for (let i = 0; i < data.length; i++) {
            // Your loop logic here
            document.querySelector(`#card${i}`).innerHTML = `${data[i].timeframes.weekly.current}hrs`;
            document.querySelector(`#cardPrevious${i}`).innerHTML = `Last day - ${data[i].timeframes.weekly.previous}hrs`;
      }});

      monthlyButton.addEventListener(`click`, function(){
        for (let i = 0; i < data.length; i++) {
            // Your loop logic here
            document.querySelector(`#card${i}`).innerHTML = `${data[i].timeframes.monthly.current}hrs`;
            document.querySelector(`#cardPrevious${i}`).innerHTML = `Last day - ${data[i].timeframes.monthly.previous}hrs`;
      }});

      console.log(data);
      console.log(data[0].timeframes.daily.current);
      // Use the JSON data here

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  function functionName() {
    // Code to be executed
}

  fetchAndUseData();
  