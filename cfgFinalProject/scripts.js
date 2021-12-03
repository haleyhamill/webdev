function onClickImage(imageNumber) {
    console.log("IMAGE CLICKED " + imageNumber);
  
    if (imageNumber == 3) {
      console.log("IMAGE 3 CLICKED " + imageNumber);
      window.location.href = "https://www.bbc.co.uk/sport";
    } else if (imageNumber == 4) {
      console.log("IMAGE 4 CLICKED " + imageNumber);
      window.location.href = "https://www.theguardian.com/uk";
    }
  }