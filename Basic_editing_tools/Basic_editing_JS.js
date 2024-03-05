let slide_button = document.getElementById("slide_button");
let slide_button_svg = document.querySelector("#slide_button svg");
let edit_section = document.getElementById("edit_section");
let edit_section_inside_div = document.getElementById(
  "edit_section_inside_div"
);
let all_selected_edit_box = document.querySelectorAll(".all_selected_edit_box");
let all_editing_section = document.querySelectorAll(".all_editing_section");
let import_image_div = document.getElementById("import_image_div");
let import_image_btn = document.getElementById("import_image_btn");
let file_input = document.getElementById("file_input");
let image = document.getElementById("image");

// All basic adjust inputs
let brightness_input = document.getElementById("brightness_input");
let contrast_input = document.getElementById("contrast_input");
let saturation_input = document.getElementById("saturation_input");
let blur_input = document.getElementById("blur_input");
let invert_button = document.getElementById("invert_button");

// reset adjustment button
let reset_adjustment_button = document.getElementById("reset_adjustment_button");

// rotate button & flip button
let rotate_right_btn = document.getElementById("rotate_right_btn");
let rotate_left_btn = document.getElementById("rotate_left_btn");
let flip_horizontal = document.getElementById("flip_horizontal");
let flip_vertical = document.getElementById("flip_vertical");

// rotate_div & flip_div
let rotate_div = document.getElementById("rotate_div");
let flip_div = document.getElementById("flip_div");

// Download Button
let download_button = document.getElementById("download_button");

// default value 
let brightness_value = 100;
let contrast_value = 100;
let saturation_value = 100;
let blur_value = 0;
let invert_value = 0;
let rotate_value = 0;

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
});

all_selected_edit_box[0].classList.add("ring-2");
all_selected_edit_box[0].classList.add("ring-offset-0");
all_selected_edit_box[0].classList.add("ring-blue-500");

all_selected_edit_box.forEach((selected_edit_box, index) => {
  selected_edit_box.addEventListener("click", () => {
    selected_edit_box.classList.add("ring-2");
    selected_edit_box.classList.add("ring-offset-0");
    selected_edit_box.classList.add("ring-blue-500");

    switch(index) {
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
      if(i !== index){
        element.classList.add("hidden");
      }
    })

    all_selected_edit_box.forEach((element, i) => {
      if (i !== index) {
        element.classList.remove("ring-2");
        element.classList.remove("ring-offset-0");
        element.classList.remove("ring-blue-500");
      }
    });
  });
});

function import_image() {
  file_input.click();
}

import_image_btn.addEventListener("click", import_image);
import_image_div.addEventListener("click", import_image);

file_input.addEventListener("change", function () {
  import_image_div.classList.add("hidden");
  image_div.classList.remove("hidden");
  let file = file_input.files[0];
  image.src = URL.createObjectURL(file);
});

// ----------------------Zoom in Zoom out feature----------------------
const zoomContainer = document.getElementById("zoom-container");
let scale = 1; // Initial scale value

const zoomSpeed = 0.1; // Control the speed of zooming

zoomContainer.addEventListener("wheel", (e) => {
  e.preventDefault(); // Prevent the page from scrolling

  if (e.deltaY < 0) {
    // Scrolling up, zoom in
    if(scale < 2){
      scale += zoomSpeed;
    }
  } else {
    // Scrolling down, zoom out
    scale -= zoomSpeed;
    if (scale <= 0.5) {
      scale = 0.5; // Prevent zooming out beyond the initial scale
    }
  }

  // Apply the scale transformation
  image.style.transform = `rotate(${rotate_value}deg) scale(${scale})`;
  // image_div.style.transform = `scale(${scale})`;

  // zoom in zoom out value
  document.getElementById("zoom_in_zoom_out_value").innerHTML = `${scale.toFixed(1)}%`;
});

// zoom in / zoom out button
let zoom_in_button = document.getElementById("zoom_in_button");
let zoom_out_button = document.getElementById("zoom_out_button");

zoom_in_button.addEventListener("click", () => {
  scale += zoomSpeed;
  image.style.transform = `rotate(${rotate_value}deg) scale(${scale})`;
  document.getElementById("zoom_in_zoom_out_value").innerHTML = `${scale.toFixed(1)}%`;
})

zoom_out_button.addEventListener("click", () => {
  if (scale < 0.6) {
    scale = 0.5; // Prevent zooming out beyond the initial scale
  }
  else{
    scale -= zoomSpeed;
  }
  image.style.transform = `rotate(${rotate_value}deg) scale(${scale})`;
  document.getElementById("zoom_in_zoom_out_value").innerHTML = `${scale.toFixed(1)}%`;
})

// All basic adjust

// Brightness adjust
brightness_input.addEventListener("input", function () {
  brightness_value = this.value;
  image.style.filter = `brightness(${brightness_value}%) contrast(${contrast_value}%) saturate(${saturation_value}%) blur(${blur_value}px)  invert(${invert_value})`;
  document.getElementById("brightness_value").innerHTML = `${brightness_value - 100}`;
});

contrast_input.addEventListener("input", function () {
  contrast_value = this.value;
  image.style.filter = `brightness(${brightness_value}%) contrast(${contrast_value}%) saturate(${saturation_value}%) blur(${blur_value}px)  invert(${invert_value})`;
  document.getElementById("contrast_value").innerHTML = `${contrast_value - 100}`;
});

saturation_input.addEventListener("input", function () {
  saturation_value = this.value;
  image.style.filter = `brightness(${brightness_value}%) contrast(${contrast_value}%) saturate(${saturation_value}%) blur(${blur_value}px)  invert(${invert_value})`;
  document.getElementById("saturation_value").innerHTML = `${saturation_value - 100}`;
});

blur_input.addEventListener("input", function () {
  blur_value = this.value;
  image.style.filter = `brightness(${brightness_value}%) contrast(${contrast_value}%) saturate(${saturation_value}%) blur(${blur_value}px)  invert(${invert_value})`;
  document.getElementById("blur_value").innerHTML = `${blur_value}`;
});

let invert_toggle_btn = document.querySelector("#invert_button > div");

invert_button.addEventListener("click", () => {
  if(invert_value === 1){
    invert_toggle_btn.classList.remove("bg-blue-600");
    invert_toggle_btn.classList.add("bg-gray-400");
    invert_toggle_btn.classList.remove("flex-row-reverse");
    invert_value = 0;
  }
  else if(invert_value === 0){
    invert_toggle_btn.classList.remove("bg-gray-400");
    invert_toggle_btn.classList.add("bg-blue-600");
    invert_toggle_btn.classList.add("flex-row-reverse");
    invert_value = 1;
  }
  image.style.filter = `brightness(${brightness_value}%) contrast(${contrast_value}%) saturate(${saturation_value}%) blur(${blur_value}px) invert(${invert_value})`;
})

// reset adjustment function
function reset_adjustment() {
  brightness_value = 100;
  contrast_value = 100;
  saturation_value = 100;
  blur_value = 0;
  invert_value = 0;
  brightness_input.value = 100;
  contrast_input.value = 100;
  saturation_input.value = 100;
  blur_input.value = 0;
  document.getElementById("brightness_value").innerHTML = `${brightness_value - 100}`;
  document.getElementById("contrast_value").innerHTML = `${contrast_value - 100}`;
  document.getElementById("saturation_value").innerHTML = `${saturation_value - 100}`;
  document.getElementById("blur_value").innerHTML = `${blur_value}`;
  invert_toggle_btn.classList.remove("bg-blue-600");
  invert_toggle_btn.classList.remove("flex-row-reverse");
  image.style.filter = `brightness(${brightness_value}%) contrast(${contrast_value}%) saturate(${saturation_value}%) blur(${blur_value}px)  invert(${invert_value})`;
}

// rotate feature
rotate_right_btn.addEventListener("click", () => {
  rotate_value += 90
  image.style.transform = `rotate(${rotate_value}deg) scale(${scale})`;
  // image_src.style.transform = `rotate(${rotate_value}deg) scale(${scale}) scaleX(${flip_in_x_axis}) scaleY(${flip_in_y_axis})`;
})

rotate_left_btn.addEventListener("click", () => {
  rotate_value -= 90
  image.style.transform = `rotate(${rotate_value}deg) scale(${scale})`;
})

let rotate_div_arrow_svg = document.querySelector("#rotate_div #rotate_div_arrow_svg");
let flip_div_arrow_svg = document.querySelector("#flip_div #flip_div_arrow_svg");

// Rotate div drop down feature
rotate_div.addEventListener("click", () => {
  if(rotate_left_btn.classList.contains("hidden") && rotate_right_btn.classList.contains("hidden")){
    rotate_left_btn.classList.remove("hidden");
    rotate_right_btn.classList.remove("hidden");
    rotate_div.classList.add("ring-1");
    rotate_div.classList.add("ring-offset-0");
    rotate_div.classList.add("ring-blue-500");
    rotate_div_arrow_svg.classList.remove("rotate-180");
    rotate_div_arrow_svg.classList.add("rotate-[270deg]");
  }
  else{
    rotate_left_btn.classList.add("hidden");
    rotate_right_btn.classList.add("hidden");
    rotate_div.classList.remove("ring-1");
    rotate_div.classList.remove("ring-offset-0");
    rotate_div.classList.remove("ring-blue-500");
    rotate_div_arrow_svg.classList.add("rotate-180");
    rotate_div_arrow_svg.classList.remove("rotate-[270deg]");
  }
})

// Flip div drop down feature
flip_div.addEventListener("click", () => {
  if(flip_horizontal.classList.contains("hidden") && flip_vertical.classList.contains("hidden")){
    flip_horizontal.classList.remove("hidden");
    flip_vertical.classList.remove("hidden");
    flip_div.classList.add("ring-1");
    flip_div.classList.add("ring-offset-0");
    flip_div.classList.add("ring-blue-500");
    flip_div_arrow_svg.classList.remove("rotate-180");
    flip_div_arrow_svg.classList.add("rotate-[270deg]");
  }
  else{
    flip_horizontal.classList.add("hidden");
    flip_vertical.classList.add("hidden");
    flip_div.classList.remove("ring-1");
    flip_div.classList.remove("ring-offset-0");
    flip_div.classList.remove("ring-blue-500");
    flip_div_arrow_svg.classList.add("rotate-180");
    flip_div_arrow_svg.classList.remove("rotate-[270deg]");
  }
})

// reset adjustment button
reset_adjustment_button.addEventListener("click", reset_adjustment);

// download image function
function download_image(){
  if (confirm("Do you want to download an image")) {
    let canvas = document.createElement("canvas");
    let ctx = canvas.getContext("2d");
    canvas.width = image.naturalWidth;
    canvas.height = image.naturalHeight;
    // apply filters
    ctx.filter = `brightness(${brightness_value}%) contrast(${contrast_value}%) saturate(${saturation_value}%) blur(${blur_value}px) invert(${invert_value})`;
    // apply border radius
    // clipRoundedRect(ctx, 0, 0, canvas.width, canvas.height, round_value);
    // apply - Backgound color
    // ctx.fillStyle = color_value;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.translate(canvas.width / 2, canvas.height / 2);
    // apply - rotate 
    // ctx.rotate(rotate_value * Math.PI / 180);
    // apply - flip
    // ctx.scale(flip_in_x_axis,flip_in_y_axis);
    ctx.drawImage(
      image,
      -canvas.width / 2,
      -canvas.height / 2,
      canvas.width,
      canvas.height
    );
    // ---------------------------------------------------------------
    // Function to apply border-radius in image_src
    // function clipRoundedRect(ctx, x, y, width, height, borderRadius) {
    //     ctx.beginPath();
    //     ctx.moveTo(x + borderRadius, y);
    //     ctx.lineTo(x + width - borderRadius, y);
    //     ctx.quadraticCurveTo(x + width, y, x + width, y + borderRadius);
    //     ctx.lineTo(x + width, y + height - borderRadius);
    //     ctx.quadraticCurveTo(x + width, y + height, x + width - borderRadius, y + height);
    //     ctx.lineTo(x + borderRadius, y + height);
    //     ctx.quadraticCurveTo(x, y + height, x, y + height - borderRadius);
    //     ctx.lineTo(x, y + borderRadius);
    //     ctx.quadraticCurveTo(x, y, x + borderRadius, y);
    //     ctx.closePath();
    //     ctx.clip();
    // }
    // ---------------------------------------------------------------
    const link = document.createElement("a");
    link.download = "image.jpg";
    link.href = canvas.toDataURL();
    link.click();
  }
}

// download button
download_button.addEventListener("click", download_image);


// -----for not i hide all edit section and unhide rotate edit section-------
all_editing_section[0].classList.add("hidden");
all_editing_section[2].classList.remove("hidden");