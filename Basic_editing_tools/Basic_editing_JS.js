let slide_button = document.getElementById("slide_button");
let slide_button_svg = document.querySelector("#slide_button_svg");
let edit_section = document.getElementById("edit_section");
let edit_section_inside_div = document.getElementById(
  "edit_section_inside_div"
);
let all_selected_edit_box = document.querySelectorAll(".all_selected_edit_box");
let all_editing_section = document.querySelectorAll(".all_editing_section");
let import_image_div = document.getElementById("import_image_div");
let import_image_btn = document.getElementById("import_image_btn");
let open_image_button = document.getElementById("open_image_button");
let file_input = document.getElementById("file_input");
let image = document.getElementById("image");

// All basic adjust inputs
let brightness_input = document.getElementById("brightness_input");
let contrast_input = document.getElementById("contrast_input");
let saturation_input = document.getElementById("saturation_input");
let blur_input = document.getElementById("blur_input");
let invert_button = document.getElementById("invert_button");

// reset adjustment button
let reset_adjustment_button = document.getElementById(
  "reset_adjustment_button"
);
// reset rotate, flip and resize button
let reset_rotate_flip_resize_button = document.getElementById(
  "reset_rotate_flip_resize_button"
);

// rotate button & flip button
let rotate_right_btn = document.getElementById("rotate_right_btn");
let rotate_left_btn = document.getElementById("rotate_left_btn");
let flip_horizontal = document.getElementById("flip_horizontal");
let flip_vertical = document.getElementById("flip_vertical");

// rotate_div & flip_div
let rotate_div = document.getElementById("rotate_div");
let flip_div = document.getElementById("flip_div");
let resize_div = document.getElementById("resize_div");

// Download Button
let download_button = document.getElementById("download_button");

// disable div
let disable_div = document.getElementById("disable_div");
let disable_download_div = document.getElementById("disable_download_div");

// All filters of filter section
const filters = [
  { name: "Normal", value: "", filter_value: "" },
  { name: "Grayscale", value: "100", filter_value: "grayscale(100%)" },
  { name: "Sepia", value: "100", filter_value: "sepia(100%)" },
  { name: "Brightness", value: "150", filter_value: "brightness(150%)" },
  { name: "Contrast", value: "200", filter_value: "contrast(200%)" },
  { name: "Invert", value: "1", filter_value: "invert(100%)" },
  { name: "Saturate", value: "200", filter_value: "saturate(200%)" },
  { name: "Blur", value: "3", filter_value: "blur(3px)" },
];

// default value
let brightness_value = 100;
let contrast_value = 100;
let saturation_value = 100;
let blur_value = 0;
let invert_value = 0;
let grayscale_value = 0;
let sepia_value = 0;
let rotate_value = 0;
let flip_horizontal_value = 1;
let flip_vertical_value = 1;
let image_width;
let image_height;
let default_image_width;
let default_image_height;
let border_width = 0;
let border_color = "transparent";
let border_radius = 0;

slide_button.addEventListener("click", () => {
  if (slide_button_svg.classList.contains("rotate-180")) {
    slide_button_svg.classList.remove("rotate-180");
    edit_section.style.width = "350px";
    setTimeout(() => {
      edit_section_inside_div.classList.remove("hidden");
    }, 500);
  } else {
    slide_button_svg.classList.add("rotate-180");
    edit_section_inside_div.classList.add("hidden");
    edit_section.style.width = "0px";
  }
  if (!background_remove_section.classList.contains("hidden")) {
    background_remove_section.classList.add("hidden");
  }
});

all_selected_edit_box[0].classList.add("ring-2");
all_selected_edit_box[0].classList.add("ring-offset-0");
all_selected_edit_box[0].classList.add("ring-blue-500");

all_selected_edit_box.forEach((selected_edit_box, index) => {
  selected_edit_box.addEventListener("click", () => {
    selected_edit_box.classList.add("ring-2");
    selected_edit_box.classList.add("ring-offset-0");
    selected_edit_box.classList.add("ring-blue-500");

    switch (index) {
      case 0:
        all_editing_section[0].classList.remove("hidden");
        break;
      case 1:
        all_editing_section[1].classList.remove("hidden");
        break;
      case 2:
        all_editing_section[2].classList.remove("hidden");
        break;
      case 3:
        all_editing_section[3].classList.remove("hidden");
        break;
      case 4:
        all_editing_section[4].classList.remove("hidden");
        break;
      case 5:
        all_editing_section[5].classList.remove("hidden");
        break;
    }

    all_editing_section.forEach((element, i) => {
      if (i !== index) {
        element.classList.add("hidden");
      }
    });

    all_selected_edit_box.forEach((element, i) => {
      if (i !== index) {
        element.classList.remove("ring-2");
        element.classList.remove("ring-offset-0");
        element.classList.remove("ring-blue-500");
        if (cropper) {
          cropper.destroy();
        }
      }
    });
  });
});

function import_image() {
  file_input.click();
}

import_image_btn.addEventListener("click", import_image);
import_image_div.addEventListener("click", import_image);
open_image_button.addEventListener("click", import_image);

let file;
let image_url;
let is_second_import_image = false;

file_input.addEventListener("change", function () {
  disable_div.classList.add("hidden");
  disable_download_div.classList.add("hidden");

  image.style.width = "";
  image.style.height = "";

  import_image_div.classList.add("hidden");
  image_div.classList.remove("hidden");
  file = file_input.files[0];
  image.src = URL.createObjectURL(file);
  image_url = image.src;

  // Set width and height of image to resize input_width and input_height
  setTimeout(() => {
    input_width.value = image.width;
    input_height.value = image.height;
    image_width = image.width;
    image_height = image.height;
    default_image_width = image_width;
    default_image_height = image_height;
  }, 200);

  if (is_second_import_image) {
    // Reset all previous styling
    brightness_value = 100;
    contrast_value = 100;
    saturation_value = 100;
    blur_value = 0;
    invert_value = 0;
    grayscale_value = 0;
    sepia_value = 0;
    image.style.filter = "";

    rotate_value = 0;
    flip_vertical_value = 1;
    flip_horizontal_value = 1;
    border_radius = 0;
    border_width = 0;
    image.style.borderWidth = "0px";
    image.style.borderRadius = "0px";
    image.style.transform = `rotate(${rotate_value}deg) scale(${scale}) scaleX(${flip_vertical_value}) scaleY(${flip_horizontal_value})`;
  } else {
    is_second_import_image = true;
  }
});

// ----------------------Zoom in Zoom out feature----------------------
const zoomContainer = document.getElementById("zoom-container");
// Initial scale value
let scale = 1;

const zoomSpeed = 0.1; // Control the speed of zooming

zoomContainer.addEventListener("wheel", (event) => {
  if (event.ctrlKey) {
    // Prevent the page from scrolling
    event.preventDefault();

    if (event.deltaY < 0) {
      // Scrolling up, zoom in
      if (scale < 2) {
        scale += zoomSpeed;
      }
    } else {
      // Scrolling down, zoom out
      scale -= zoomSpeed;
      if (scale <= 0.5) {
        // Prevent zooming out beyond the initial scale
        scale = 0.5;
      }
    }

    // Apply the scale transformation
    image.style.transform = `rotate(${rotate_value}deg) scale(${scale}) scaleX(${flip_vertical_value}) scaleY(${flip_horizontal_value})`;

    // zoom in zoom out value
    document.getElementById(
      "zoom_in_zoom_out_value"
    ).innerHTML = `${scale.toFixed(1)}%`;
  }
});

// zoom in / zoom out button
let zoom_in_button = document.getElementById("zoom_in_button");
let zoom_out_button = document.getElementById("zoom_out_button");

zoom_in_button.addEventListener("click", () => {
  scale += zoomSpeed;
  image.style.transform = `rotate(${rotate_value}deg) scale(${scale}) scaleX(${flip_vertical_value}) scaleY(${flip_horizontal_value})`;
  document.getElementById(
    "zoom_in_zoom_out_value"
  ).innerHTML = `${scale.toFixed(1)}%`;
});

zoom_out_button.addEventListener("click", () => {
  if (scale < 0.6) {
    // Prevent zooming out beyond the initial scale
    scale = 0.5;
  } else {
    scale -= zoomSpeed;
  }
  image.style.transform = `rotate(${rotate_value}deg) scale(${scale}) scaleX(${flip_vertical_value}) scaleY(${flip_horizontal_value})`;
  document.getElementById(
    "zoom_in_zoom_out_value"
  ).innerHTML = `${scale.toFixed(1)}%`;
});
// ----------------------Zoom in Zoom out feature----------------------

// All basic adjust

// Brightness adjust
brightness_input.addEventListener("input", function () {
  brightness_value = this.value;
  image.style.filter = `brightness(${brightness_value}%) contrast(${contrast_value}%) saturate(${saturation_value}%) blur(${blur_value}px)  invert(${invert_value}) grayscale(${grayscale_value}%) sepia(${sepia_value}%)`;
  document.getElementById("brightness_value").innerHTML = `${
    brightness_value - 100
  }`;
});

contrast_input.addEventListener("input", function () {
  contrast_value = this.value;
  image.style.filter = `brightness(${brightness_value}%) contrast(${contrast_value}%) saturate(${saturation_value}%) blur(${blur_value}px)  invert(${invert_value}) grayscale(${grayscale_value}%) sepia(${sepia_value}%)`;
  document.getElementById("contrast_value").innerHTML = `${
    contrast_value - 100
  }`;
});

saturation_input.addEventListener("input", function () {
  saturation_value = this.value;
  image.style.filter = `brightness(${brightness_value}%) contrast(${contrast_value}%) saturate(${saturation_value}%) blur(${blur_value}px)  invert(${invert_value}) grayscale(${grayscale_value}%) sepia(${sepia_value}%)`;
  document.getElementById("saturation_value").innerHTML = `${
    saturation_value - 100
  }`;
});

blur_input.addEventListener("input", function () {
  blur_value = this.value;
  image.style.filter = `brightness(${brightness_value}%) contrast(${contrast_value}%) saturate(${saturation_value}%) blur(${blur_value}px)  invert(${invert_value}) grayscale(${grayscale_value}%) sepia(${sepia_value}%)`;
  document.getElementById("blur_value").innerHTML = `${blur_value}`;
});

let invert_toggle_btn = document.querySelector("#invert_button > div");

invert_button.addEventListener("click", () => {
  if (invert_value === 1) {
    invert_toggle_btn.classList.remove("bg-blue-600");
    invert_toggle_btn.classList.add("bg-gray-400");
    invert_toggle_btn.classList.remove("flex-row-reverse");
    invert_value = 0;
  } else if (invert_value === 0) {
    invert_toggle_btn.classList.remove("bg-gray-400");
    invert_toggle_btn.classList.add("bg-blue-600");
    invert_toggle_btn.classList.add("flex-row-reverse");
    invert_value = 1;
  }
  image.style.filter = `brightness(${brightness_value}%) contrast(${contrast_value}%) saturate(${saturation_value}%) blur(${blur_value}px) invert(${invert_value}) grayscale(${grayscale_value}%) sepia(${sepia_value}%)`;
});

// reset adjustment function
function reset_adjustment() {
  brightness_value = 100;
  contrast_value = 100;
  saturation_value = 100;
  blur_value = 0;
  invert_value = 0;
  sepia_value = 0;
  grayscale_value = 0;
  brightness_input.value = 100;
  contrast_input.value = 100;
  saturation_input.value = 100;
  blur_input.value = 0;
  document.getElementById("brightness_value").innerHTML = `${
    brightness_value - 100
  }`;
  document.getElementById("contrast_value").innerHTML = `${
    contrast_value - 100
  }`;
  document.getElementById("saturation_value").innerHTML = `${
    saturation_value - 100
  }`;
  document.getElementById("blur_value").innerHTML = `${blur_value}`;
  invert_toggle_btn.classList.remove("bg-blue-600");
  invert_toggle_btn.classList.remove("flex-row-reverse");
  image.style.filter = `brightness(${brightness_value}%) contrast(${contrast_value}%) saturate(${saturation_value}%) blur(${blur_value}px)  invert(${invert_value}) grayscale(${grayscale_value}%) sepia(${sepia_value}%)`;
}

// rotate feature
rotate_right_btn.addEventListener("click", () => {
  rotate_value += 90;
  image.style.transform = `rotate(${rotate_value}deg) scale(${scale}) scaleX(${flip_vertical_value}) scaleY(${flip_horizontal_value})`;
});

rotate_left_btn.addEventListener("click", () => {
  rotate_value -= 90;
  image.style.transform = `rotate(${rotate_value}deg) scale(${scale}) scaleX(${flip_vertical_value}) scaleY(${flip_horizontal_value})`;
});

// flip feature
flip_horizontal.addEventListener("click", () => {
  if (flip_horizontal_value === 1) {
    flip_horizontal_value = -1;
  } else {
    flip_horizontal_value = 1;
  }
  image.style.transform = `rotate(${rotate_value}deg) scale(${scale}) scaleX(${flip_vertical_value}) scaleY(${flip_horizontal_value})`;
});

flip_vertical.addEventListener("click", () => {
  if (flip_vertical_value === 1) {
    flip_vertical_value = -1;
  } else {
    flip_vertical_value = 1;
  }
  image.style.transform = `rotate(${rotate_value}deg) scale(${scale}) scaleX(${flip_vertical_value}) scaleY(${flip_horizontal_value})`;
});

// Resize Feature
let input_width = document.getElementById("input_width");
let input_height = document.getElementById("input_height");

image.style.width = `${image_width}px`;
image.style.height = `${image_height}px`;

input_width.addEventListener("input", function () {
  image_width = this.value;
  if (image_width > 0) {
    image.style.width = `${image_width}px`;
    image.style.height = `${image_height}px`;
  }
});

input_height.addEventListener("input", function () {
  image_height = this.value;
  if (image_height > 0) {
    image.style.height = `${image_height}px`;
    image.style.width = `${image_width}px`;
  }
});

let rotate_div_arrow_svg = document.querySelector(
  "#rotate_div #rotate_div_arrow_svg"
);
let flip_div_arrow_svg = document.querySelector(
  "#flip_div #flip_div_arrow_svg"
);
let resize_div_arrow_svg = document.querySelector(
  "#resize_div #resize_div_arrow_svg"
);

// Rotate div drop down feature
rotate_div.addEventListener("click", () => {
  if (
    rotate_left_btn.classList.contains("hidden") &&
    rotate_right_btn.classList.contains("hidden")
  ) {
    rotate_left_btn.classList.remove("hidden");
    rotate_right_btn.classList.remove("hidden");
    rotate_div.classList.add("ring-1");
    rotate_div.classList.add("ring-offset-0");
    rotate_div.classList.add("ring-blue-500");
    rotate_div_arrow_svg.classList.remove("rotate-180");
    rotate_div_arrow_svg.classList.add("rotate-[270deg]");
  } else {
    rotate_left_btn.classList.add("hidden");
    rotate_right_btn.classList.add("hidden");
    rotate_div.classList.remove("ring-1");
    rotate_div.classList.remove("ring-offset-0");
    rotate_div.classList.remove("ring-blue-500");
    rotate_div_arrow_svg.classList.add("rotate-180");
    rotate_div_arrow_svg.classList.remove("rotate-[270deg]");
  }
});

// Flip div drop down feature
flip_div.addEventListener("click", () => {
  if (
    flip_horizontal.classList.contains("hidden") &&
    flip_vertical.classList.contains("hidden")
  ) {
    flip_horizontal.classList.remove("hidden");
    flip_vertical.classList.remove("hidden");
    flip_div.classList.add("ring-1");
    flip_div.classList.add("ring-offset-0");
    flip_div.classList.add("ring-blue-500");
    flip_div_arrow_svg.classList.remove("rotate-180");
    flip_div_arrow_svg.classList.add("rotate-[270deg]");
  } else {
    flip_horizontal.classList.add("hidden");
    flip_vertical.classList.add("hidden");
    flip_div.classList.remove("ring-1");
    flip_div.classList.remove("ring-offset-0");
    flip_div.classList.remove("ring-blue-500");
    flip_div_arrow_svg.classList.add("rotate-180");
    flip_div_arrow_svg.classList.remove("rotate-[270deg]");
  }
});

let all_filtered_images = document.querySelectorAll("#all_filters_section img");
let all_filtered_images_name = document.querySelectorAll(
  "#all_filters_section span"
);

// filterd img of filters section
all_selected_edit_box[3].addEventListener("click", () => {
  all_filtered_images.forEach((img, index) => {
    img.src = image.src;
    img.style.filter = `${filters[index].filter_value}`;
    img.addEventListener("click", () => {
      switch (index) {
        case 0:
          brightness_value = 100;
          contrast_value = 100;
          saturation_value = 100;
          blur_value = 0;
          invert_value = 0;
          grayscale_value = 0;
          sepia_value = 0;
          brightness_input.value = 100;
          contrast_input.value = 100;
          saturation_input.value = 100;
          blur_input.value = 0;
          document.getElementById("brightness_value").innerHTML = `${
            brightness_value - 100
          }`;
          document.getElementById("contrast_value").innerHTML = `${
            contrast_value - 100
          }`;
          document.getElementById("saturation_value").innerHTML = `${
            saturation_value - 100
          }`;
          image.style.filter = `brightness(${brightness_value}%) contrast(${contrast_value}%) saturate(${saturation_value}%) blur(${blur_value}px)  invert(${invert_value}) grayscale(${grayscale_value}%) sepia(${sepia_value}%)`;
          break;
        case 1:
          brightness_value = 100;
          contrast_value = 100;
          saturation_value = 100;
          blur_value = 0;
          invert_value = 0;
          grayscale_value = filters[1].value;
          sepia_value = 0;
          image.style.filter = `brightness(${brightness_value}%) contrast(${contrast_value}%) saturate(${saturation_value}%) blur(${blur_value}px)  invert(${invert_value}) grayscale(${grayscale_value}%) sepia(${sepia_value}%)`;
          break;
        case 2:
          brightness_value = 100;
          contrast_value = 100;
          saturation_value = 100;
          blur_value = 0;
          invert_value = 0;
          grayscale_value = 0;
          sepia_value = filters[2].value;
          image.style.filter = `brightness(${brightness_value}%) contrast(${contrast_value}%) saturate(${saturation_value}%) blur(${blur_value}px)  invert(${invert_value}) grayscale(${grayscale_value}%) sepia(${sepia_value}%)`;
          break;
        case 3:
          brightness_value = filters[3].value;
          contrast_value = 100;
          saturation_value = 100;
          blur_value = 0;
          invert_value = 0;
          grayscale_value = 0;
          sepia_value = 0;
          image.style.filter = `brightness(${brightness_value}%) contrast(${contrast_value}%) saturate(${saturation_value}%) blur(${blur_value}px)  invert(${invert_value}) grayscale(${grayscale_value}%) sepia(${sepia_value}%)`;
          break;
        case 4:
          brightness_value = 100;
          contrast_value = filters[4].value;
          saturation_value = 100;
          blur_value = 0;
          invert_value = 0;
          grayscale_value = 0;
          sepia_value = 0;
          image.style.filter = `brightness(${brightness_value}%) contrast(${contrast_value}%) saturate(${saturation_value}%) blur(${blur_value}px)  invert(${invert_value}) grayscale(${grayscale_value}%) sepia(${sepia_value}%)`;
          break;
        case 5:
          brightness_value = 100;
          contrast_value = 100;
          saturation_value = 100;
          blur_value = 0;
          invert_value = filters[5].value;
          grayscale_value = 0;
          sepia_value = 0;
          image.style.filter = `brightness(${brightness_value}%) contrast(${contrast_value}%) saturate(${saturation_value}%) blur(${blur_value}px)  invert(${invert_value}) grayscale(${grayscale_value}%) sepia(${sepia_value}%)`;
          break;
        case 6:
          brightness_value = 100;
          contrast_value = 100;
          saturation_value = filters[6].value;
          blur_value = 0;
          invert_value = 0;
          grayscale_value = 0;
          sepia_value = 0;
          image.style.filter = `brightness(${brightness_value}%) contrast(${contrast_value}%) saturate(${saturation_value}%) blur(${blur_value}px)  invert(${invert_value}) grayscale(${grayscale_value}%) sepia(${sepia_value}%)`;
          break;
        case 7:
          brightness_value = 100;
          contrast_value = 100;
          saturation_value = 100;
          blur_value = filters[7].value;
          invert_value = 0;
          grayscale_value = 0;
          sepia_value = 0;
          image.style.filter = `brightness(${brightness_value}%) contrast(${contrast_value}%) saturate(${saturation_value}%) blur(${blur_value}px)  invert(${invert_value}) grayscale(${grayscale_value}%) sepia(${sepia_value}%)`;
          break;
      }
    });
  });

  all_filtered_images_name.forEach((span_name, index) => {
    span_name.innerHTML = `${filters[index].name}`;
  });
});

// resize_width_and_height_input_number_div
let resize_width_and_height_input_number_div = document.getElementById(
  "resize_width_and_height_input_number_div"
);

// Resize div drop down feature
resize_div.addEventListener("click", () => {
  if (resize_div_arrow_svg.classList.contains("rotate-180")) {
    resize_width_and_height_input_number_div.classList.remove("hidden");
    resize_div.classList.add("ring-1");
    resize_div.classList.add("ring-offset-0");
    resize_div.classList.add("ring-blue-500");
    resize_div_arrow_svg.classList.remove("rotate-180");
    resize_div_arrow_svg.classList.add("rotate-[270deg]");
  } else {
    resize_width_and_height_input_number_div.classList.add("hidden");
    resize_div.classList.remove("ring-1");
    resize_div.classList.remove("ring-offset-0");
    resize_div.classList.remove("ring-blue-500");
    resize_div_arrow_svg.classList.add("rotate-180");
    resize_div_arrow_svg.classList.remove("rotate-[270deg]");
  }
});

// Border (frame) feature
// border width input
let border_size_input = document.getElementById("border_size_input");
let border_size_value_span = document.getElementById("border_size_value_span");
// Border radius input
let border_radius_input = document.getElementById("border_radius_input");
let border_radius_value_span = document.getElementById(
  "border_radius_value_span"
);
// border color input
let border_color_input = document.getElementById("border_color_input");

image.style.borderWidth = `${border_width}px`;
border_size_input.addEventListener("input", function () {
  border_width = this.value;
  border_size_value_span.innerHTML = `${border_width}`;
  image.style.borderWidth = `${border_width}px`;
  image.style.borderColor = `${border_color}`;
});

border_color_input.addEventListener("input", function () {
  border_color = this.value;
  image.style.borderColor = `${border_color}`;
});

function setBorderColor_1() {
  border_color = "#c8c8c8";
  image.style.borderColor = `${border_color}`;
}
function setBorderColor_2() {
  border_color = "#000000";
  image.style.borderColor = `${border_color}`;
}
function setBorderColor_3() {
  border_color = "#0f77ff";
  image.style.borderColor = `${border_color}`;
}
function setBorderColor_4() {
  border_color = "#5ca644";
  image.style.borderColor = `${border_color}`;
}
function setBorderColor_5() {
  border_color = "#ffd23a";
  image.style.borderColor = `${border_color}`;
}
function setBorderColor_6() {
  border_color = "#93c5fd";
  image.style.borderColor = `${border_color}`;
}

// Border radius input
border_radius_input.addEventListener("input", function () {
  border_radius = this.value;
  border_radius_value_span.innerHTML = `${border_radius}`;
  image.style.borderRadius = `${border_radius}px`;
});

// reset adjustment button
reset_adjustment_button.addEventListener("click", reset_adjustment);

// reset rotate, flip & resize function
function reset_rotate_flip_resize() {
  rotate_value = 0;
  flip_horizontal_value = 1;
  flip_vertical_value = 1;
  image_width = default_image_width;
  image_height = default_image_height;
  input_width.value = default_image_width;
  input_height.value = default_image_height;
  image.style.transform = `rotate(${rotate_value}deg) scale(${scale}) scaleX(${flip_vertical_value}) scaleY(${flip_horizontal_value})`;
  image.style.width = `${image_width}px`;
  image.style.height = `${image_height}px`;
}

// reset rotate, flip and resize
reset_rotate_flip_resize_button.addEventListener(
  "click",
  reset_rotate_flip_resize
);

// -------------------------------Image Crop Feature-----------------------------------
let All_crop_ratio = document.querySelectorAll(".crop_ratio");
let apply_button = document.getElementById("apply_button");
let cancel_button = document.getElementById("cancel_button");
let cropper;
let croped_image_canvas;
let isFirstClick = true;

all_selected_edit_box[1].addEventListener("click", () => {
  if (isFirstClick === true) {
    cropper = new Cropper(image, {
      aspectRatio: NaN,
    });
    isFirstClick = false;
  }
});

// crop ratio
let x;
let y;

function apply_crop() {
  croped_image_canvas = cropper.getCroppedCanvas({
    width: 510,
    height: 300,
  });
  image.src = croped_image_canvas.toDataURL();
  cropper.destroy();
  // Change the image_width and image_height
  image_width = croped_image_canvas.width;
  image_height = croped_image_canvas.height;
  default_image_width = image_width;
  default_image_height = image_height;
  input_width.value = image_width;
  input_height.value = image_height;
}

function cancel_crop() {
  cropper.destroy();
  All_crop_ratio.forEach((crop_ratio) => {
    crop_ratio.classList.remove("ring-2");
    crop_ratio.classList.remove("ring-offset-0");
    crop_ratio.classList.remove("ring-blue-500");
  });
}

apply_button.addEventListener("click", apply_crop);
cancel_button.addEventListener("click", cancel_crop);

All_crop_ratio.forEach((crop_ratio, index) => {
  crop_ratio.addEventListener("click", () => {
    crop_ratio.classList.add("ring-2");
    crop_ratio.classList.add("ring-offset-0");
    crop_ratio.classList.add("ring-blue-500");
    switch (index) {
      case 0:
        cropper.destroy();
        cropper = new Cropper(image, {
          aspectRatio: NaN,
        });
        break;
      case 1:
        x = 1;
        y = 1;
        cropper.destroy();
        cropper = new Cropper(image, {
          aspectRatio: x / y,
        });
        break;
      case 2:
        x = 3;
        y = 2;
        cropper.destroy();
        cropper = new Cropper(image, {
          aspectRatio: x / y,
        });
        break;
      case 3:
        x = 2;
        y = 3;
        cropper.destroy();
        cropper = new Cropper(image, {
          aspectRatio: x / y,
        });
        break;
      case 4:
        x = 4;
        y = 3;
        cropper.destroy();
        cropper = new Cropper(image, {
          aspectRatio: x / y,
        });
        break;
      case 5:
        x = 3;
        y = 4;
        cropper.destroy();
        cropper = new Cropper(image, {
          aspectRatio: x / y,
        });
        break;
      case 6:
        x = 16;
        y = 9;
        cropper.destroy();
        cropper = new Cropper(image, {
          aspectRatio: x / y,
        });
        break;
      case 7:
        x = 9;
        y = 16;
        cropper.destroy();
        cropper = new Cropper(image, {
          aspectRatio: x / y,
        });
        break;
    }

    All_crop_ratio.forEach((element, i) => {
      if (index !== i) {
        element.classList.remove("ring-2");
        element.classList.remove("ring-offset-0");
        element.classList.remove("ring-blue-500");
      }
    });
  });
});
// -------------------------------Image Crop Feature-----------------------------------

// -------------------------------AI Bg remove feature---------------------------------
let bg_remover_div = document.getElementById("bg_remover_div");
let gray_background = document.getElementById("gray_background");

gray_background.style.width = "50%";
bg_remover_div.addEventListener("mouseenter", () => {
  gray_background.classList.add("background_remove_animation");
});

bg_remover_div.addEventListener("mouseleave", () => {
  gray_background.classList.remove("background_remove_animation");
});

// Bg remove logic
let apply_bg_remove_button = document.getElementById("apply_bg_remove_button");
let cancel_bg_remove_button = document.getElementById(
  "cancel_bg_remove_button"
);
let bg_remover_div_of_main_section = document.getElementById(
  "bg_remover_div_of_main_section"
);
let background_remove_section = document.getElementById(
  "background_remove_section"
);

let fileName = "image.jpg";

function remove_backgound() {
  image.classList.add("opacity-80");
  // const apiKey = "xLDZT7m1re43GfxVMsC9XW9a";
  // const apiKey = "7Lt2ibMDVmERC3NqjTNbi9qi";
  const apiKey = "aq4BHm4XPDddngLBPshDnVvP";

  const formData = new FormData();
  formData.append("image_file", file);
  formData.append("size", "auto");
  image_url = image.src;
  image.classList.add("loading_animation_effect");
  fetch("https://api.remove.bg/v1.0/removebg", {
    method: "POST",
    headers: {
      "X-Api-Key": apiKey,
    },
    body: formData,
  })
    .then(function (reponse) {
      return reponse.blob();
    })
    .then(function (blob) {
      const url = URL.createObjectURL(blob);
      image.src = url;
      image.classList.remove("loading_animation_effect");
    })
    .catch(() => {
      alert("ERROR");
      image.classList.remove("loading_animation_effect");
    });
}

bg_remover_div.addEventListener("click", () => {
  remove_backgound();
  slide_button.click();
  background_remove_section.classList.remove("hidden");
});

bg_remover_div_of_main_section.addEventListener("click", () => {
  // remove_backgound();
});

apply_bg_remove_button.addEventListener("click", () => {
  slide_button.click();
  background_remove_section.classList.add("hidden");
});

cancel_bg_remove_button.addEventListener("click", () => {
  image.src = image_url;
  slide_button.click();
  background_remove_section.classList.add("hidden");
});
// -------------------------------AI Bg remove feature---------------------------------

// Function to apply border-radius in image
function clipRoundedRect(ctx, x, y, width, height, borderRadius) {
  ctx.beginPath();
  ctx.moveTo(x + borderRadius, y);
  ctx.lineTo(x + width - borderRadius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + borderRadius);
  ctx.lineTo(x + width, y + height - borderRadius);
  ctx.quadraticCurveTo(
    x + width,
    y + height,
    x + width - borderRadius,
    y + height
  );
  ctx.lineTo(x + borderRadius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - borderRadius);
  ctx.lineTo(x, y + borderRadius);
  ctx.quadraticCurveTo(x, y, x + borderRadius, y);
  ctx.closePath();
  ctx.clip();
}

// Download quality option feature
let download_option_window = document.getElementById("download_option_window");
let close_download_option_button = document.getElementById(
  "close_download_option_button"
);
let select_download_quality_button = document.getElementById(
  "select_download_quality_button"
);
let download_quality_options_low_medium_high = document.getElementById(
  "download_quality_options_low_medium_high"
);
let All_download_quality_low_medium_high = document.querySelectorAll(
  "#download_quality_options_low_medium_high > h2"
);
let All_selected_tick = document.querySelectorAll(
  "#download_quality_options_low_medium_high .selected_tick"
);
let download_quality_span = document.getElementById("download_quality_span");
let download_formate_jpg_button = document.getElementById(
  "download_formate_jpg_button"
);
let download_formate_png_button = document.getElementById(
  "download_formate_png_button"
);
let png_default_quality_span = document.getElementById(
  "png_default_quality_span"
);
let file_name_input = document.getElementById("file_name_input");
let download_image_preview = document.getElementById("download_image_preview");

let download_image_format = "image/png";
// Image quality in range of: 0 - 1 where 0.3 for low, 0.5 for medium and 0.8 for high quality
let download_image_quality = 0.5;
let file_name = "image";

close_download_option_button.addEventListener("click", () => {
  download_option_window.classList.add("hidden");
});

select_download_quality_button.addEventListener("click", () => {
  if (download_quality_options_low_medium_high.classList.contains("hidden")) {
    download_quality_options_low_medium_high.classList.remove("hidden");
  } else {
    download_quality_options_low_medium_high.classList.add("hidden");
  }
});

// when click to high quality
All_download_quality_low_medium_high[0].addEventListener("click", () => {
  download_image_quality = 0.9;
  download_quality_span.innerHTML = "High";
  All_selected_tick[0].classList.remove("hidden");
  All_selected_tick[1].classList.add("hidden");
  All_selected_tick[2].classList.add("hidden");
});

// when click to medium quality
All_download_quality_low_medium_high[1].addEventListener("click", () => {
  download_image_quality = 0.5;
  download_quality_span.innerHTML = "Medium";
  All_selected_tick[0].classList.add("hidden");
  All_selected_tick[1].classList.remove("hidden");
  All_selected_tick[2].classList.add("hidden");
});

// when click to low quality
All_download_quality_low_medium_high[2].addEventListener("click", () => {
  download_image_quality = 0.3;
  download_quality_span.innerHTML = "Low";
  All_selected_tick[0].classList.add("hidden");
  All_selected_tick[1].classList.add("hidden");
  All_selected_tick[2].classList.remove("hidden");
});

select_download_quality_button.classList.add("hidden");

download_formate_jpg_button.addEventListener("click", () => {
  download_image_format = "image/jpeg";
  select_download_quality_button.classList.remove("hidden");
  png_default_quality_span.classList.add("hidden");
  download_formate_jpg_button.classList.remove("ring-gray-300");
  download_formate_jpg_button.classList.add("ring-blue-700");
  download_formate_png_button.classList.add("ring-gray-300");
  download_formate_png_button.classList.remove("ring-blue-700");
  download_formate_jpg_button.classList.add("text-blue-600");
  download_formate_png_button.classList.remove("text-blue-600");
});
download_formate_png_button.addEventListener("click", () => {
  download_image_format = "image/png";
  select_download_quality_button.classList.add("hidden");
  png_default_quality_span.classList.remove("hidden");
  download_formate_png_button.classList.remove("ring-gray-300");
  download_formate_png_button.classList.add("ring-blue-700");
  download_formate_jpg_button.classList.add("ring-gray-300");
  download_formate_jpg_button.classList.remove("ring-blue-700");
  download_formate_jpg_button.classList.remove("text-blue-600");
  download_formate_png_button.classList.add("text-blue-600");
});

// file_name_input
file_name_input.addEventListener("input", function () {
  file_name = this.value;
});

// download image function
function download_image() {
  let canvas = document.createElement("canvas");
  let ctx = canvas.getContext("2d");
  // Apply rotate when rotate value 90, 270, 450...
  let isRotated = false;
  if (Math.abs(rotate_value) % 180 !== 0 && rotate_value !== 0) {
    [image_width, image_height] = [image_height, image_width];
    isRotated = true;
  }
  // Apply width and height :-
  let borderWidth = parseInt(border_width);
  image_width = Number(image_width);
  image_height = Number(image_height);
  canvas.width = image_width + Number(borderWidth * 2);
  canvas.height = image_height + Number(borderWidth * 2);

  // This is used to fill background of image
  // ctx.fillStyle = bg_color;
  // apply border radius
  clipRoundedRect(ctx, 0, 0, canvas.width, canvas.height, border_radius);
  ctx.clip();
  if (borderWidth > 0) {
    ctx.lineWidth = borderWidth;
    ctx.strokeStyle = border_color; // Set the border color here
    ctx.strokeRect(
      borderWidth / 2,
      borderWidth / 2,
      canvas.width - borderWidth,
      canvas.height - borderWidth
    );
  }
  // apply filters :-
  ctx.filter = `brightness(${brightness_value}%) contrast(${contrast_value}%) saturate(${saturation_value}%) blur(${blur_value}px) invert(${invert_value}) grayscale(${grayscale_value}%) sepia(${sepia_value}%)`;
  // apply - Backgound color
  ctx.translate(image_width / 2 + borderWidth, image_height / 2 + borderWidth);
  // apply - rotate :-
  ctx.rotate((rotate_value * Math.PI) / 180);
  // apply - flip
  ctx.scale(flip_vertical_value, flip_horizontal_value);
  if (isRotated === true) {
    ctx.drawImage(
      image,
      -image_height / 2,
      -image_width / 2,
      image_height,
      image_width
    );
  } else {
    ctx.drawImage(
      image,
      -image_width / 2,
      -image_height / 2,
      image_width,
      image_height
    );
  }
  ctx.setTransform(1, 0, 0, 1, 0, 0);

  // Download image logic
  if (file_name === "") {
    file_name = "image";
  }
  const link = document.createElement("a");
  link.download = `${file_name}.${download_image_format.split("/")[1]}`;
  if (download_image_format === "image/jpeg") {
    link.href = canvas.toDataURL(
      download_image_format,
      parseFloat(download_image_quality)
    );
  } else {
    link.href = canvas.toDataURL(download_image_format);
  }
  link.click();
}

// download button
download_button.addEventListener("click", () => {
  // this will show the download quality window
  download_option_window.classList.remove("hidden");
  download_image_preview.src = image.src;
  download_image_preview.style.filter = `brightness(${brightness_value}%) contrast(${contrast_value}%) saturate(${saturation_value}%) blur(${blur_value}px) invert(${invert_value}) grayscale(${grayscale_value}%) sepia(${sepia_value}%)`;
  download_image_preview.style.width = `${image_width}px`;
  download_image_preview.style.height = `${image_height}px`;
  download_image_preview.style.transform = `rotate(${rotate_value}deg) scaleX(${flip_vertical_value}) scaleY(${flip_horizontal_value})`;
  download_image_preview.style.borderWidth = `${border_width}px`;
  download_image_preview.style.borderColor = `${border_color}`;
  download_image_preview.style.borderRadius = `${border_radius}px`;
});

// download_image_button after adjust the quality
let download_image_button = document.getElementById("download_image_button");
download_image_button.addEventListener("click", download_image);

document.addEventListener("DOMContentLoaded", function () {
  // Create an instance of URLSearchParams based on the current URL's query string
  const urlParams = new URLSearchParams(window.location.search);

  // Get the value of the 'button' query parameter
  const buttonId = urlParams.get("button");

  // If there's a buttonId, try to click the corresponding button
  if (buttonId) {
    if (buttonId === "button1") {
      all_selected_edit_box[1].click();
    } else if (buttonId === "button2") {
      all_selected_edit_box[2].click();
    } else if (buttonId === "button3") {
      all_selected_edit_box[3].click();
    } else if (buttonId === "button4") {
      all_selected_edit_box[4].click();
    } else if (buttonId === "button5") {
      all_selected_edit_box[5].click();
    }
  }
  all_filtered_images.forEach((img) => {
    img.src = "../Assets/sample_img_2.jpg";
  });
});
