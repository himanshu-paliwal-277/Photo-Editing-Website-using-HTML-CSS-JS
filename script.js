const dropdownButton_1 = document.getElementById("dropdown-button-1");
const dropdownButton_2 = document.getElementById("dropdown-button-2");
const dropdownButton_3 = document.getElementById("dropdown-button-3");
const dropdownMenu_1 = document.getElementById("dropdown-menu-1");
const dropdownMenu_2 = document.getElementById("dropdown-menu-2");
const dropdownMenu_3 = document.getElementById("dropdown-menu-3");

let remove_background_feature_link = document.querySelector(
  "#remove_background_feature_link"
);
let remove_background_feature_link_inside_svg = document.querySelector(
  "#remove_background_feature_link > svg"
);

let basic_editing_feature_link = document.querySelector(
  "#basic_editing_feature_link"
);
let basic_editing_feature_link_inside_svg = document.querySelector(
  "#basic_editing_feature_link > svg"
);

let crop_image_feature_link = document.querySelector(
  "#crop_image_feature_link"
);
let crop_image_feature_link_inside_svg = document.querySelector(
  "#crop_image_feature_link > svg"
);

let drawing_board_feature_link = document.querySelector(
  "#drawing_board_feature_link"
);
let drawing_board_feature_link_inside_svg = document.querySelector(
  "#drawing_board_feature_link > svg"
);

let isDropdown_1_Open = false;
let isDropdown_2_Open = false;
let isDropdown_3_Open = false;

// Function to toggle the dropdown

// Toggle the dropdown when the button is clicked
dropdownButton_1.addEventListener("click", () => {
  isDropdown_1_Open = !isDropdown_1_Open;
  if (isDropdown_1_Open) {
    dropdownMenu_1.classList.remove("hidden");
  } else {
    dropdownMenu_1.classList.add("hidden");
  }
});
dropdownButton_2.addEventListener("click", () => {
  isDropdown_2_Open = !isDropdown_2_Open;
  if (isDropdown_2_Open) {
    dropdownMenu_2.classList.remove("hidden");
  } else {
    dropdownMenu_2.classList.add("hidden");
  }
});
dropdownButton_3.addEventListener("click", () => {
  isDropdown_3_Open = !isDropdown_3_Open;
  if (isDropdown_3_Open) {
    dropdownMenu_3.classList.remove("hidden");
  } else {
    dropdownMenu_3.classList.add("hidden");
  }
});

// Close the dropdown when clicking outside of it
window.addEventListener("click", (event) => {
  if (
    !dropdownButton_1.contains(event.target) &&
    !dropdownMenu_1.contains(event.target)
  ) {
    dropdownMenu_1.classList.add("hidden");
    isDropdown_1_Open = false;
  }
  if (
    !dropdownButton_2.contains(event.target) &&
    !dropdownMenu_2.contains(event.target)
  ) {
    dropdownMenu_2.classList.add("hidden");
    isDropdown_2_Open = false;
  }
  if (
    !dropdownButton_3.contains(event.target) &&
    !dropdownMenu_3.contains(event.target)
  ) {
    dropdownMenu_3.classList.add("hidden");
    isDropdown_3_Open = false;
  }
});

// Scroll to change navbar background color
document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("navbar");

  window.onscroll = function () {
    if (window.pageYOffset > 10) {
      navbar.classList.add("bg-white", "shadow-lg");
      navbar.classList.remove("bg-transparent");
    } else {
      navbar.classList.add("bg-transparent");
      navbar.classList.remove("bg-white", "shadow-lg");
    }
  };
});

// if reload then scroll to top of web page
if (window.performance.getEntriesByType("navigation")[0].type === "reload") {
  window.scrollTo(0, 0);
}

remove_background_feature_link.addEventListener("mouseover", () => {
  remove_background_feature_link_inside_svg.classList.add("invert");
});

remove_background_feature_link.addEventListener("mouseout", () => {
  remove_background_feature_link_inside_svg.classList.remove("invert");
});

basic_editing_feature_link.addEventListener("mouseover", () => {
  basic_editing_feature_link_inside_svg.classList.add("invert");
});

basic_editing_feature_link.addEventListener("mouseout", () => {
  basic_editing_feature_link_inside_svg.classList.remove("invert");
});

crop_image_feature_link.addEventListener("mouseover", () => {
  crop_image_feature_link_inside_svg.classList.add("invert");
});

crop_image_feature_link.addEventListener("mouseout", () => {
  crop_image_feature_link_inside_svg.classList.remove("invert");
});

drawing_board_feature_link.addEventListener("mouseover", () => {
  drawing_board_feature_link_inside_svg.classList.add("invert");
});

drawing_board_feature_link.addEventListener("mouseout", () => {
  drawing_board_feature_link_inside_svg.classList.remove("invert");
});

// ______________________________ AOS JS library ______________________________
AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 50, // offset (in px) from the original trigger point
  // delay: 0, // values from 0 to 3000, with step 50ms
  duration: 500, // values from 0 to 3000, with step 50ms
  // easing: "ease", // default easing for AOS animations
  // once: false, // whether animation should happen only once - while scrolling down
  // mirror: false, // whether elements should animate out while scrolling past them
  // anchorPlacement: "top-bottom", // defines which position of the element regarding to window should
});
