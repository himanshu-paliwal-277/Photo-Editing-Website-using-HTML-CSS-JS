let filter_1 = document.querySelector("#filter_1");
let filter_2 = document.querySelector("#filter_2");
let filter_3 = document.querySelector("#filter_3");
let filter_4 = document.querySelector("#filter_4");

let Filter_Edit_boxes_section = document.querySelector(".Filter_Edit_boxes_section");

let basics_section = document.querySelector("#basics");
let text_section = document.querySelector("#text");
let drawing_section = document.querySelector("#drawing");
let filter_section = document.querySelector("#filter");

let choose_image_button = document.querySelector(".import_image_btn");
let choose_input = document.querySelector(".import_image_btn input");
let image_src = document.querySelector(".image_src img"); //Input image
image_src.style.backgroundColor = "red"

choose_image_button.addEventListener("click", () => choose_input.click());

choose_input.addEventListener("change", () => {
    let file = choose_input.files[0];
    if(!file) return;
    choose_image_button.style.display = "none";
    image_src.src = URL.createObjectURL(file);
});

// -----------------------------------------------
// zoom in / zoom out 
let zoom_input = document.getElementById('zoomRange')
zoom_input.addEventListener('input', function() {
  const scale = this.value;
  // const zoomImage = document.getElementById('zoomImage');
  image_src.style.transform = `scale(${scale})`;
});
// -----------------------------------------------

// ___________________________________________________
// edit box :
// child start from 2 - 6,
// 2 -> brightness
let brightness_button = document.querySelector("#filter .box:nth-child(2)");
let contrast_button = document.querySelector("#filter .box:nth-child(3)");
let saturate_button = document.querySelector("#filter .box:nth-child(4)");
let invert_button = document.querySelector("#filter .box:nth-child(5)");
let blur_button = document.querySelector("#filter .box:nth-child(6)");

let brightness_edit_box = document.querySelector(".Filter_Edit_boxes_section .edit_box:nth-child(1)");
let contrast_edit_box = document.querySelector(".Filter_Edit_boxes_section .edit_box:nth-child(2)");
let saturate_edit_box = document.querySelector(".Filter_Edit_boxes_section .edit_box:nth-child(3)");
let invert_edit_box = document.querySelector(".Filter_Edit_boxes_section .edit_box:nth-child(4)");
let blur_edit_box = document.querySelector(".Filter_Edit_boxes_section .edit_box:nth-child(5)");

brightness_button.addEventListener("click", () => {
  brightness_button.style.backgroundColor = "#01c7f81a";
  contrast_button.style.backgroundColor = "transparent";
  saturate_button.style.backgroundColor = "transparent";
  invert_button.style.backgroundColor = "transparent";
  blur_button.style.backgroundColor = "transparent";
  brightness_edit_box.style.display = "flex";
  contrast_edit_box.style.display = "none";
  saturate_edit_box.style.display = "none";
  invert_edit_box.style.display = "none";
  blur_edit_box.style.display = "none";
})
contrast_button.addEventListener("click", () => {
  contrast_button.style.backgroundColor = "#01c7f81a";
  brightness_button.style.backgroundColor = "transparent";
  saturate_button.style.backgroundColor = "transparent";
  invert_button.style.backgroundColor = "transparent";
  blur_button.style.backgroundColor = "transparent";
  brightness_edit_box.style.display = "none";
  contrast_edit_box.style.display = "flex";
  saturate_edit_box.style.display = "none";
  invert_edit_box.style.display = "none";
  blur_edit_box.style.display = "none";
})
saturate_button.addEventListener("click", () => {
  saturate_button.style.backgroundColor = "#01c7f81a";
  brightness_button.style.backgroundColor = "transparent";
  contrast_button.style.backgroundColor = "transparent";
  invert_button.style.backgroundColor = "transparent";
  blur_button.style.backgroundColor = "transparent";
  brightness_edit_box.style.display = "none";
  contrast_edit_box.style.display = "none";
  saturate_edit_box.style.display = "flex";
  invert_edit_box.style.display = "none";
  blur_edit_box.style.display = "none";
})
invert_button.addEventListener("click", () => {
  invert_button.style.backgroundColor = "#01c7f81a";
  brightness_button.style.backgroundColor = "transparent";
  contrast_button.style.backgroundColor = "transparent";
  saturate_button.style.backgroundColor = "transparent";
  blur_button.style.backgroundColor = "transparent";  
  brightness_edit_box.style.display = "none";
  contrast_edit_box.style.display = "none";
  saturate_edit_box.style.display = "none";
  invert_edit_box.style.display = "flex";
  blur_edit_box.style.display = "none";
})
blur_button.addEventListener("click", () => {
  blur_button.style.backgroundColor = "#01c7f81a";
  brightness_button.style.backgroundColor = "transparent";
  contrast_button.style.backgroundColor = "transparent";
  saturate_button.style.backgroundColor = "transparent";
  invert_button.style.backgroundColor = "transparent";  
  brightness_edit_box.style.display = "none";
  contrast_edit_box.style.display = "none";
  saturate_edit_box.style.display = "none";
  invert_edit_box.style.display = "none";
  blur_edit_box.style.display = "flex";
})

let brightness_range_input = document.querySelector(".Filter_Edit_boxes_section .edit_box:nth-child(1) input");
brightness_range_input.addEventListener("input", function() {
  let brightness_value = this.value;
  image_src.style.filter = `brightness(${brightness_value}%)`;
  document.querySelector("#brightnss_value").innerHTML = `${brightness_value}%`;
  // imgSrc.style.filter = `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturate}%) invert(${invert}%) blur(${blur}px)`

})

// ___________________________________________________


filter_1.style.backgroundColor = "red";
filter_1.addEventListener("click", () => {
  filter_1.style.backgroundColor = "red";
  filter_2.style.backgroundColor = "transparent";
  filter_3.style.backgroundColor = "transparent";
  filter_4.style.backgroundColor = "transparent";
  basics_section.style.display = "flex";
  Filter_Edit_boxes_section.style.display = "none";
});
filter_2.addEventListener("click", () => {
  filter_1.style.backgroundColor = "transparent";
  filter_2.style.backgroundColor = "red";
  filter_3.style.backgroundColor = "transparent";
  filter_4.style.backgroundColor = "transparent";
  text_section.style.display = "flex";
  basics_section.style.display = "none";
  Filter_Edit_boxes_section.style.display = "none";
});
filter_3.addEventListener("click", () => {
  filter_1.style.backgroundColor = "transparent";
  filter_2.style.backgroundColor = "transparent";
  filter_3.style.backgroundColor = "red";
  filter_4.style.backgroundColor = "transparent";
  drawing_section.style.display = "flex";
  basics_section.style.display = "none";
  text_section.style.display = "none";
  Filter_Edit_boxes_section.style.display = "none";
});
filter_4.addEventListener("click", () => {
  filter_1.style.backgroundColor = "transparent";
  filter_2.style.backgroundColor = "transparent";
  filter_3.style.backgroundColor = "transparent";
  filter_4.style.backgroundColor = "red";
  filter_section.style.display = "flex";
  basics_section.style.display = "none";
  text_section.style.display = "none";
  drawing_section.style.display = "none";
  Filter_Edit_boxes_section.style.display = "block";
});
