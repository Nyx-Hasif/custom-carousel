const slider = document.querySelector(".slider");
const list = document.querySelector(".list");
const thumbnail = document.querySelector(".thumbnail");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

// Run Autoplay slide initial
let runAutoPlay = setTimeout(() => {
  nextBtn.click();
}, 15000);

// for next BUTTON
const initSlider = (type) => {
  const sliderItem = list.querySelectorAll(".item"); //jadi array
  const thumbnailItem = thumbnail.querySelectorAll(".item"); //jadi array

  if (type === "next") {
    list.appendChild(sliderItem[0]); // item pertama ke akhir
    thumbnail.appendChild(thumbnailItem[0]); // thumbnail pertama ke akhir
    slider.classList.add("next");
  } else {
    const lastItemPosition = sliderItem.length - 1; // sliderItem.length  cth ad 2 item,item terakhir is index 1 so 1-1 =0
    list.prepend(sliderItem[lastItemPosition]);
    thumbnail.prepend(thumbnailItem[lastItemPosition]);
    slider.classList.add("prev");
  }

  // remove class next after 2s loading-bar
  setTimeout(() => {
    slider.classList.remove("next");
    slider.classList.remove("prev");
  }, 2000);

  //   reset timeout and play again
  clearTimeout(runAutoPlay);
  runAutoPlay = setTimeout(() => {
    nextBtn.click();
  }, 15000);
};


nextBtn.addEventListener("click", ()=> initSlider('next')); // sebab ada argument so call callback function
prevBtn.addEventListener("click", ()=> initSlider('prev'));
