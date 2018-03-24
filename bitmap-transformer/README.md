##Lab-Bitmap

### Description

In this application we create a bitmap (.bmp) transformer which reads the bitmap from the disc, runs one or more raster or color transforms and writes it out to a new file.

For this application, we created 4 specific bitmap transformations.
* cross.js - after running this transformation, the selected bitmap will have a cross and an X running through the middle of the image.
* darken.js - this transformation darkens all the colors in the image slightly but does not change the order of pixels.
* random.js - the pixels in the bitmap are rearranged in a random order.
* all-white.js - the image is turned compltely white.

#### index.js

This is the entry point for our application. In this file, we call the read-write-file.js, passing it the file path for the image you would like to transform, followed by the file path that you would like the new image to be written to, with a callback function as the third parameter which is the transformation that you would like to happen.

In order to run this application, make sure you have at least one transformation in index.js, then in your terminal run:

```
node index.js
```

The application will then read the bitmap file, apply the selected transformation, and write the new bitmap file to the data/ folder within the root/ folder.

#### constructor.js

The constructor file is where the Bitmap object constructor lives. This constructor takes in one parameter, the data returned by the file system readFile function. It then constructs an object and returns it.

#### read-write-file.js

This is where the file system reads and writes files with the use of Node.js. This function accepts three parameters, the filepath to the original .bmp file, the file path you want to be created, and the name of the function for the transformation you want to be performed. 
The readFile portion retreives the binary data from the file system, sends it to the object constructor, then taks the constructed bitmap object and sends it to the transformation function. Once this is returned back, it then turns the received transformed string data and constructs a new bitmap string, which is then converted to a buffer and send to the write file function.
The write file function takes the buffer object and writes a bitmap file which is then saved into your computer using the file path you created.

#### all-white.js

This function accepts one parameter, the bitmap object you created in object constructor. The file doesn't actually need the bitmap object, however, because it uses string concatination and for loops to add white as the only color on the color palette, and then the index of every pixel in the pixel array to point to the first number in the color palette.

#### cross.js

This function accepts one parameter, the bitmap object that was created. The code then finds the middle of the array containing pixel data, and using various algorithms, creates 4 lines intersecting the middle of the screen. The function then returns the string data back to the read-write-file to be written to a .bmp.

#### darken.js

This function accepts one parameter, the bitmap object that was created. The code then takes each color in the color palette array and maps it to a new value. It does this by breaking the string data up into chunks of 2 to find the decimal value of each hex value, reduce it by 40, and then turned back in to a hex value so it can inserted back into a string and because each hex value is lower, each color will be lower. The pixel array goes untouched and inserted back into the bitmap object.

#### random.js

This function accepts one parameter, the bitmap object that was created. The code then takes every item in the pixel array and and randomizes the indexes that the items in the pixel array point to in order to create a random image from the colors in the color palette.
