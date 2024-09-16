
// 1. Opening the File
// 2. It goes to browswer
// 3. HTML Parsing - Scanning the HTML
// 4. Tokenization - Dividing the HTML into Tokens - Tags , Attributes , content

// Tag - h1 , h2 , h3 
// Attribute - class , src , id , href 
// content - Hello world

// 5. DOM Tree construction


// DOM - Document Object Model 

// Document - Whole html file.
// Object - Tags are converted to objects.
// Model - tree like structure / hiearchical

{/* <div class="main_box boxes" id="main">
    <p>Hello world</p>
</div> */}

// {
//     tagName : "div",
//     id : "main",
//     className : "main_box boxes",
//     children : [
//         {
//             tagName : "p",
//             textContent : "Hello World"
//         }
//     ]
// }


// HTML DOM
// CSSOM

// .box{
//     background-color: yellow;
// }

// 1. Parallelly constructs the CSSOM along with HTML DOM