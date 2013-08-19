function BangBang() {
    // on click:
        // add image with class bang source /images/Pyang.png
        var img = document.createElement("img");
        img.src = "images/Pyang.png";

        var class_name = "bang";
        img.setAttribute("class", class_name);

        OR

        img.className = "bang";

        // position its center at mouse position
// var coordinates = [0,0];
// d3.select('html') // Selects the 'html' element
//   .on('mousemove', function()
//     {
//       coordinates = d3.mouse(this); // Gets the mouse coordinates with respect to
//                                     // the top of the page (because I selected
//                                     // 'html')
//     });

        // make random rotation
        // fade out after 2 sec
        // Delete the element afterwards as well
}