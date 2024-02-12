let filter_1 = document.querySelector("#filter_1");
let filter_2 = document.querySelector("#filter_2");
let filter_3 = document.querySelector("#filter_3");
let filter_4 = document.querySelector("#filter_4");

let Filter_Edit_boxes_section = document.querySelector(
  ".Filter_Edit_boxes_section"
);

let basics_section = document.querySelector("#basics");
let text_section = document.querySelector("#text");
let drawing_section = document.querySelector("#drawing");
let filter_section = document.querySelector("#filter");

let choose_image_button = document.querySelector(".import_image_btn");
let choose_input = document.querySelector(".import_image_btn input");
let image_src = document.querySelector(".image_src img"); //Input image

image_src.style.backgroundColor = "red";
choose_image_button.addEventListener("click", () => choose_input.click());

choose_input.addEventListener("change", () => {
  let file = choose_input.files[0];
  if (!file) return;
  choose_image_button.style.display = "none";
  image_src.src = URL.createObjectURL(file);
});

// -----------------------------------------------
// zoom in / zoom out
let zoom_input = document.getElementById("zoomRange");
zoom_input.addEventListener("input", function () {
  const scale = this.value;
  // const zoomImage = document.getElementById('zoomImage');
  image_src.style.transform = `scale(${scale})`;
});
// -----------------------------------------------

// --------------------------------------------------------------------------
let rotate_button = document.querySelector("#basics .box:nth-child(3)");
let flip_button = document.querySelector("#basics .box:nth-child(4)");
let round_button = document.querySelector("#basics .box:nth-child(5)");
let color_button = document.querySelector("#basics .box:nth-child(6)");

let rotate_edit_box = document.querySelector(
  ".basics_edit_boxes_seciton .edit_box:nth-child(1)"
);
let flip_edit_box = document.querySelector(
  ".basics_edit_boxes_seciton .edit_box:nth-child(2)"
);
let round_edit_box = document.querySelector(
  ".basics_edit_boxes_seciton .edit_box:nth-child(3)"
);
let color_edit_box = document.querySelector(
  ".basics_edit_boxes_seciton .edit_box:nth-child(4)"
);

rotate_button.addEventListener("click", () => {
  rotate_button.style.backgroundColor = "#01c7f81a";
  flip_button.style.backgroundColor = "transparent";
  round_button.style.backgroundColor = "transparent";
  color_button.style.backgroundColor = "transparent";
  rotate_edit_box.style.display = "flex";
  flip_edit_box.style.display = "none";
  round_edit_box.style.display = "none";
  color_edit_box.style.display = "none";
});
flip_button.addEventListener("click", () => {
  rotate_button.style.backgroundColor = "transparent";
  flip_button.style.backgroundColor = "#01c7f81a";
  round_button.style.backgroundColor = "transparent";
  color_button.style.backgroundColor = "transparent";
  rotate_edit_box.style.display = "none";
  flip_edit_box.style.display = "flex";
  round_edit_box.style.display = "none";
  color_edit_box.style.display = "none";
});
round_button.addEventListener("click", () => {
  rotate_button.style.backgroundColor = "transparent";
  flip_button.style.backgroundColor = "transparent";
  round_button.style.backgroundColor = "#01c7f81a";
  color_button.style.backgroundColor = "transparent";
  rotate_edit_box.style.display = "none";
  flip_edit_box.style.display = "none";
  round_edit_box.style.display = "flex";
  color_edit_box.style.display = "none";
});
color_button.addEventListener("click", () => {
  rotate_button.style.backgroundColor = "transparent";
  flip_button.style.backgroundColor = "transparent";
  round_button.style.backgroundColor = "transparent";
  color_button.style.backgroundColor = "#01c7f81a";
  rotate_edit_box.style.display = "none";
  flip_edit_box.style.display = "none";
  round_edit_box.style.display = "none";
  color_edit_box.style.display = "flex";
});

// --------------------------------------------------------------------------

// ___________________________________________________
// edit box :
// child start from 2 - 6,
// 2 -> brightness
let brightness_button = document.querySelector("#filter .box:nth-child(2)");
let contrast_button = document.querySelector("#filter .box:nth-child(3)");
let saturate_button = document.querySelector("#filter .box:nth-child(4)");
let invert_button = document.querySelector("#filter .box:nth-child(5)");
let blur_button = document.querySelector("#filter .box:nth-child(6)");

let brightness_edit_box = document.querySelector(
  ".Filter_Edit_boxes_section .edit_box:nth-child(1)"
);
let contrast_edit_box = document.querySelector(
  ".Filter_Edit_boxes_section .edit_box:nth-child(2)"
);
let saturate_edit_box = document.querySelector(
  ".Filter_Edit_boxes_section .edit_box:nth-child(3)"
);
let invert_edit_box = document.querySelector(
  ".Filter_Edit_boxes_section .edit_box:nth-child(4)"
);
let blur_edit_box = document.querySelector(
  ".Filter_Edit_boxes_section .edit_box:nth-child(5)"
);

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
});
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
});
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
});
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
});
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
});

// All Filter section input range:
let brightness_range_input = document.querySelector(
  ".Filter_Edit_boxes_section .edit_box:nth-child(1) input"
);
let contrast_range_input = document.querySelector(
  ".Filter_Edit_boxes_section .edit_box:nth-child(2) input"
);
let saturate_range_input = document.querySelector(
  ".Filter_Edit_boxes_section .edit_box:nth-child(3) input"
);
let invert_range_input = document.querySelector(
  ".Filter_Edit_boxes_section .edit_box:nth-child(4) input"
);
let blur_range_input = document.querySelector(
  ".Filter_Edit_boxes_section .edit_box:nth-child(5) input"
);

// default value of filters:
let brightness_value = 100; // 100 is default value | Range 0 - 200
let contrast_value = 100; // 100 is default value | Range 0 - 200
let saturate_value = 100; // 100 is default value | Range 0 - 200
let invert_value = 0; // 0 is default value | Range 0 - 100
let blur_value = 0; // 0 is default value | Range 0 - 100

// Brightness input range :
brightness_range_input.addEventListener("input", function () {
  brightness_value = this.value;
  document.querySelector("#brightnss_value").innerHTML = `${brightness_value}%`;
  image_src.style.filter = `brightness(${brightness_value}%) contrast(${contrast_value}%) saturate(${saturate_value}%) invert(${invert_value}%) blur(${blur_value}px)`;
});

// Contrast input range :
contrast_range_input.addEventListener("input", function () {
  contrast_value = this.value;
  document.querySelector("#contrast_value").innerHTML = `${contrast_value}%`;
  image_src.style.filter = `brightness(${brightness_value}%) contrast(${contrast_value}%) saturate(${saturate_value}%) invert(${invert_value}%) blur(${blur_value}px)`;
});

// Saturate input range :
saturate_range_input.addEventListener("input", function () {
  saturate_value = this.value;
  document.querySelector("#saturate_value").innerHTML = `${saturate_value}%`;
  image_src.style.filter = `brightness(${brightness_value}%) contrast(${contrast_value}%) saturate(${saturate_value}%) invert(${invert_value}%) blur(${blur_value}px)`;
});

// Invert input range :
invert_range_input.addEventListener("input", function () {
  invert_value = this.value;
  document.querySelector("#invert_value").innerHTML = `${invert_value}%`;
  image_src.style.filter = `brightness(${brightness_value}%) contrast(${contrast_value}%) saturate(${saturate_value}%) invert(${invert_value}%) blur(${blur_value}px)`;
});

// Blur input range :
blur_range_input.addEventListener("input", function () {
  blur_value = this.value;
  document.querySelector("#blur_value").innerHTML = `${blur_value}%`;
  image_src.style.filter = `brightness(${brightness_value}%) contrast(${contrast_value}%) saturate(${saturate_value}%) invert(${invert_value}%) blur(${blur_value}px)`;
});

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

// Reset and Save button:
let reset_button = document.querySelector(
  ".reset_and_save_btn > button:nth-child(1)"
);
let save_button = document.querySelector(
  ".reset_and_save_btn > button:nth-child(2)"
);

// If user click reset button:
reset_button.addEventListener("click", () => {
  if (confirm("Do you really want to reset filters")) {
    brightness_value = 100;
    contrast_value = 100;
    saturate_value = 100;
    invert_value = 0;
    blur_value = 0;
    brightness_range_input.value = 100;
    contrast_range_input.value = 100;
    saturate_range_input.value = 100;
    invert_range_input.value = 0;
    blur_range_input.value = 0;
    document.querySelector(
      "#brightnss_value"
    ).innerHTML = `${brightness_value}%`;
    document.querySelector("#contrast_value").innerHTML = `${contrast_value}%`;
    document.querySelector("#saturate_value").innerHTML = `${saturate_value}%`;
    document.querySelector("#invert_value").innerHTML = `${invert_value}%`;
    document.querySelector("#blur_value").innerHTML = `${blur_value}%`;
    image_src.style.filter = `brightness(${brightness_value}%) contrast(${contrast_value}%) saturate(${saturate_value}%) invert(${invert_value}%) blur(${blur_value}px)`;
  }
});

save_button.addEventListener("click", function () {
  if (confirm("Do you want to download an image")) {
    let canvas = document.createElement("canvas");
    let ctx = canvas.getContext("2d");
    canvas.width = image_src.naturalWidth;
    canvas.height = image_src.naturalHeight;
    ctx.filter = `brightness(${brightness_value}%) contrast(${contrast_value}%) saturate(${saturate_value}%) invert(${invert_value}%) blur(${blur_value}px)`;
    ctx.translate(canvas.width / 2, canvas.height / 2);
    // ctx.scale(flip_x, flip_y);
    ctx.drawImage(
      image_src,
      -canvas.width / 2,
      -canvas.height / 2,
      canvas.width,
      canvas.height
    );
    const link = document.createElement("a");
    link.download = "image.jpg";
    link.href = canvas.toDataURL();
    link.click();
  }
});
