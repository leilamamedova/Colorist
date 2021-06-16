function CurrentHSL(rgb) {
    var color = rgb.split(",")
    color = RGBToHSL(color[0], color[1], color[2])
    return (color.toString())
}



function ComplementaryHSL(rgb){
    var colors = rgb.split(",")
    colors = RGBToHSL(colors[0], colors[1], colors[2])
    var newColors = 0
    newColors = parseInt(colors[0]) + 180
    
    if(+newColors > 360){
        newColors = +newColors - 360
    }
        
    colors[0] = newColors
    return(colors.toString())
}

function ComplementaryHex(ComplementaryClr) {
    var color = ComplementaryClr.split(",")
    color = HSLToRGB(parseInt(color[0]), parseInt(color[1]), parseInt(color[2]))

    var hex = color.split(",")
    hex = RGBToHex(hex[0], hex[1], hex[2])
    return (hex.toString())
}


function SplitComplementaryHSL(rgb){
    colors = ComplementaryHSL(rgb).split(",")
    lColor = +colors[0] - 20
    rColor = +colors[0] + 20

    if(+lColor > 360){
        lColor  = +lColor - 360
    }
    if(+rColor > 360){
        rColor  = +rColor - 360
    }

    var splitColors = [[],[]]
    splitColors[0].push(lColor) 
    splitColors[0].push(colors[1])
    splitColors[0].push(colors[2])
    splitColors[1].push(rColor)
    splitColors[1].push(colors[1])
    splitColors[1].push(colors[2])

    return splitColors
}

function SplitComplementaryHex(splitColors) {
    var left = HSLToRGB(parseInt(splitColors[0][0]), parseInt(splitColors[0][1]), parseInt(splitColors[0][2]))
    var right = HSLToRGB(parseInt(splitColors[1][0]), parseInt(splitColors[1][1]), parseInt(splitColors[1][2]))

    var lHex = left.split(",")
    var rHex = right.split(",")

    lHex = RGBToHex(lHex[0], lHex[1], lHex[2])
    rHex = RGBToHex(rHex[0], rHex[1], rHex[2])

    var splitArr = []
    splitArr.push(lHex) 
    splitArr.push(rHex) 

    return (splitArr)
}

function AnalogousHSL(rgb) {
    var colors = rgb.split(",")
    colors = RGBToHSL(colors[0], colors[1], colors[2])

    lColor = parseInt(colors[0]) - 40
    rColor = parseInt(colors[0]) + 40

    if(+lColor > 360){
        lColor  = +lColor - 360
    }
    if(+rColor > 360){
        rColor  = +rColor - 360
    }

    var analogColors = [[],[]]
    analogColors[0].push(lColor) 
    analogColors[0].push(colors[1])
    analogColors[0].push(colors[2])
    analogColors[1].push(rColor)
    analogColors[1].push(colors[1])
    analogColors[1].push(colors[2])

    return analogColors
}

function AnalogousHex(AnalogoustoHex) {
    var left = HSLToRGB(parseInt(AnalogoustoHex[0][0]), parseInt(AnalogoustoHex[0][1]), parseInt(AnalogoustoHex[0][2]))
    var right = HSLToRGB(parseInt(AnalogoustoHex[1][0]), parseInt(AnalogoustoHex[1][1]), parseInt(AnalogoustoHex[1][2]))
     
    var lHex = left.split(",")
    var rHex = right.split(",")

    lHex = RGBToHex(lHex[0], lHex[1], lHex[2])
    rHex = RGBToHex(rHex[0], rHex[1], rHex[2])

    var analogArr = []
    analogArr.push(lHex) 
    analogArr.push(rHex) 

    return (analogArr)
}

function TriadicHSL(rgb) {
    var colors = rgb.split(",")
    colors = RGBToHSL(colors[0], colors[1], colors[2])

    lColor = parseInt(colors[0]) + 120
    rColor = parseInt(colors[0]) - 120

    if(+lColor > 360){
        lColor  = +lColor - 360
    }
    if(+rColor > 360){
        rColor  = +rColor - 360
    }

    var triadicColors = [[],[]]
    triadicColors[0].push(lColor) 
    triadicColors[0].push(colors[1])
    triadicColors[0].push(colors[2])
    triadicColors[1].push(rColor)
    triadicColors[1].push(colors[1])
    triadicColors[1].push(colors[2])

    return triadicColors 
}

function TriadicHex(TriadictoHex) {
    var left = HSLToRGB(parseInt(TriadictoHex[0][0]), parseInt(TriadictoHex[0][1]), parseInt(TriadictoHex[0][2]))
    var right = HSLToRGB(parseInt(TriadictoHex[1][0]), parseInt(TriadictoHex[1][1]), parseInt(TriadictoHex[1][2]))
   
    var lHex = left.split(",")
    var rHex = right.split(",")

    lHex = RGBToHex(lHex[0], lHex[1], lHex[2])
    rHex = RGBToHex(rHex[0], rHex[1], rHex[2])

    var triadicArr = []
    triadicArr.push(lHex) 
    triadicArr.push(rHex) 

    return (triadicArr)
}

function TetradicHSL(rgb) {
    var colors = rgb.split(",")
    colors = RGBToHSL(colors[0], colors[1], colors[2])

    newColors = parseInt(colors[0]) + 60
    
    if(+newColors > 360){
        newColors = +newColors - 360
    }
        
    colors[0] = newColors
    return(colors)
}

function TetradicHex(TetradictoHex) {
    var color = HSLToRGB(parseInt(TetradictoHex[0]), parseInt(TetradictoHex[1]), parseInt(TetradictoHex[2]))

    var colorNew = color.split(",")
    colorNew = RGBToHex(colorNew[0], colorNew[1], colorNew[2])

    return (colorNew.toString())
}


function SquareHSL(rgb) {
    var colors = rgb.split(",")
    colors = RGBToHSL(colors[0], colors[1], colors[2])

    lColor = parseInt(colors[0]) + 90
    rColor = parseInt(colors[0]) + 270

    if(+lColor > 360){
        lColor  = +lColor - 360
    }
    if(+rColor > 360){
        rColor  = +rColor - 360
    }

    var SquareColors = [[],[]]
    SquareColors[0].push(lColor) 
    SquareColors[0].push(colors[1])
    SquareColors[0].push(colors[2])
    SquareColors[1].push(rColor)
    SquareColors[1].push(colors[1])
    SquareColors[1].push(colors[2])

    return SquareColors
}

function SquareHex(SquaretoHex) {
    var left = HSLToRGB(parseInt(SquaretoHex[0][0]), parseInt(SquaretoHex[0][1]), parseInt(SquaretoHex[0][2]))
    var right = HSLToRGB(parseInt(SquaretoHex[1][0]), parseInt(SquaretoHex[1][1]), parseInt(SquaretoHex[1][2]))
     
    var lHex = left.split(",")
    var rHex = right.split(",")

    lHex = RGBToHex(lHex[0], lHex[1], lHex[2])
    rHex = RGBToHex(rHex[0], rHex[1], rHex[2])

    var SquareArr = []
    SquareArr.push(lHex) 
    SquareArr.push(rHex) 

    return (SquareArr)
}




function RGBToHSL(r,g,b) {
    // Make r, g, and b fractions of 1
    r /= 255;
    g /= 255;
    b /= 255;
  
    // Find greatest and smallest channel values
    let cmin = Math.min(r,g,b),
        cmax = Math.max(r,g,b),
        delta = cmax - cmin,
        h = 0,
        s = 0,
        l = 0;

        if (delta == 0)
        h = 0;
      // Red is max
      else if (cmax == r)
        h = ((g - b) / delta) % 6;
      // Green is max
      else if (cmax == g)
        h = (b - r) / delta + 2;
      // Blue is max
      else
        h = (r - g) / delta + 4;
    
      h = Math.round(h * 60);
        
      // Make negative hues positive behind 360°
      if (h < 0)
          h += 360;

          // Calculate lightness
        l = (cmax + cmin) / 2;

        // Calculate saturation
        s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
            
        // Multiply l and s by 100
        s = +(s * 100).toFixed(1);
        l = +(l * 100).toFixed(1);

        if (l < 50 ) {
            $('.palette-color').css('color', 'white');
            $('#color-picker-preview-hex').css('color', 'white');
        } else {
            $('.palette-color').css('color', 'black');
            $('#color-picker-preview-hex').css('color', 'black');
        }

        hsl = {
            h: h,
            s: s,
            l: l
        }

        return [Math.round(h) + "°", + Math.round(s) + "%", Math.round(l) + "%"];
    }

function HSLToRGB(h, s, l){
    s /= 100;
    l /= 100;
    C = (1 - Math.abs(2 * l - 1)) * s;
    var hue = h / 60;
    X = C * (1 - Math.abs(hue % 2 - 1));
    r = g = b = 0;
    
    if (hue >= 0 && hue < 1) {
        r = C;
        g = X;
    } else if (hue >= 1 && hue < 2) {
        r = X;
        g = C;
    } else if (hue >= 2 && hue < 3) {
        g = C;
        b = X;
    } else if(hue >= 3 && hue < 4) {
        g = X;
        b = C;
    } else if (hue >= 4 && hue < 5) {
        r = X;
        b = C;
    } else {
        r = C;
        b = X;
    }
    m = l - C / 2;
    r += m;
    g += m;
    b += m;

    r = Math.abs(Math.round(r * 255));
    g = Math.abs(Math.round(g * 255));
    b = Math.abs(Math.round(b * 255));
    
    return (r + "," + g + "," + b);
}


function rgbToHex(rgb) { 
    var hex = Number(rgb).toString(16);
    if (hex.length < 2) {
         hex = "0" + hex;
    }
    return hex;
  };

function RGBToHex(r,g,b) {
    var red = rgbToHex(r);
    var green = rgbToHex(g);
    var blue = rgbToHex(b);
    return ("#" + red+green+blue);
  }

function HEXtoRGB(hex) {
    var validHEXInput = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!validHEXInput) {
        return false;
    }
    var output = {
        r: parseInt(validHEXInput[1], 16),
        g: parseInt(validHEXInput[2], 16),
        b: parseInt(validHEXInput[3], 16),
    };
    return output;
}