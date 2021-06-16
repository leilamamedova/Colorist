cp = ColorPicker(document.getElementById('pcr'), document.getElementById('picker'), 
function(hex, hsv, rgb, mousePicker, mousepcr) {
currentColor = hex;
    ColorPicker.positionIndicators(
    document.getElementById('pcr-indicator'),
    document.getElementById('picker-indicator'),
    mousepcr, mousePicker);     

    // Conversion
    document.getElementById('color-picker-preview-hex').innerHTML = hex;
    document.getElementById('hex_input').value = hex;
    document.getElementById('rgb').innerHTML = rgb.r.toFixed() + ', ' + rgb.g.toFixed() + ', ' + rgb.b.toFixed();
    document.getElementById('hsv').innerHTML = hsv.h.toFixed() + '°, ' + hsv.s.toFixed(2)*100 + '%, ' + hsv.v.toFixed(2)*100 + '%, ';
    currentColorHSL = CurrentHSL(rgb.r.toFixed() + ',' + rgb.g.toFixed() + ',' + rgb.b.toFixed())
    document.getElementById('hsl').innerHTML = currentColorHSL;
    
    // Background color for PickerBox and PreviewBox
    document.getElementById('color-picker-preview').style.backgroundColor = hex;
    document.getElementById('popoverInput').style.backgroundColor = hex;

    // Color harmonies
    let curColor = document.getElementsByClassName ('cur_color');
    for (let i = 0; i < curColor.length; i++) {
      curColor[i].style.backgroundColor=hex;
      curColor[i].innerHTML=hex;
    }


    ComplementaryClr = ComplementaryHSL(rgb.r.toFixed() + ',' + rgb.g.toFixed() + ',' + rgb.b.toFixed())
    ComplementarytoHex = ComplementaryHex(ComplementaryClr)
    let complColor = document.getElementsByClassName('compl_color');
     for (let i = 0; i < complColor.length; i++) {
      complColor[i].style.backgroundColor= 'HSL(' + ComplementaryClr.toString() + ')'
      complColor[i].innerHTML= ComplementarytoHex;
    }

    
    splitColors = SplitComplementaryHSL(rgb.r.toFixed() + ',' + rgb.g.toFixed() + ',' + rgb.b.toFixed())
    document.getElementById('split_clr1').style.backgroundColor = 'HSL(' + splitColors[0].toString() + ')';
    document.getElementById('split_clr2').style.backgroundColor = 'HSL(' + splitColors[1].toString() + ')';
    splittoHex = SplitComplementaryHex(splitColors)
    document.getElementById('split_clr1').innerHTML = splittoHex[0];
    document.getElementById('split_clr2').innerHTML = splittoHex[1];


    AnalogousClr = AnalogousHSL(rgb.r.toFixed() + ',' + rgb.g.toFixed() + ',' + rgb.b.toFixed());
    document.getElementById('analog_clr1').style.backgroundColor = 'HSL(' + AnalogousClr[0].toString() + ')';
    document.getElementById('analog_clr2').style.backgroundColor = 'HSL(' + AnalogousClr[1].toString() + ')';
    AnalogoustoHex = AnalogousHex(AnalogousClr)
    document.getElementById('analog_clr1').innerHTML = AnalogoustoHex[0];
    document.getElementById('analog_clr2').innerHTML = AnalogoustoHex[1];


    TriadicClr = TriadicHSL(rgb.r.toFixed() + ',' + rgb.g.toFixed() + ',' + rgb.b.toFixed());
    document.getElementById('triadic_clr').style.backgroundColor = 'HSL(' + TriadicClr[0].toString() + ')';
    TriadictoHex = TriadicHex(TriadicClr)
    document.getElementById('triadic_clr').innerHTML = TriadictoHex[0];
    let triada_tetra_Color = document.getElementsByClassName('triad_tetra');
     for (let i = 0; i < triada_tetra_Color.length; i++) {
      triada_tetra_Color[i].style.backgroundColor= 'HSL(' + TriadicClr[1].toString() + ')';
      triada_tetra_Color[i].innerHTML= TriadictoHex[1];
    }


    TetradicClr = TetradicHSL(rgb.r.toFixed() + ',' + rgb.g.toFixed() + ',' + rgb.b.toFixed());
    document.getElementById('tetra_clr').style.backgroundColor = 'HSL(' + TetradicClr.toString() + ')';
    TetradictoHex = TetradicHex(TetradicClr)
    document.getElementById('tetra_clr').innerHTML = TetradictoHex;

    SquareClr = SquareHSL(rgb.r.toFixed() + ',' + rgb.g.toFixed() + ',' + rgb.b.toFixed());
    document.getElementById('square_clr1').style.backgroundColor = 'HSL(' + SquareClr[0].toString() + ')';
    document.getElementById('square_clr2').style.backgroundColor = 'HSL(' + SquareClr[1].toString() + ')';
    SquaretoHex = SquareHex(SquareClr)
    document.getElementById('square_clr1').innerHTML = SquaretoHex[0];
    document.getElementById('square_clr2').innerHTML = SquaretoHex[1];

});
cp.setHex('#D4EDFB');


function Colorist (hash, hex) {
 
  document.getElementById('color-picker-preview-hex').innerHTML = `${hash}${hex}`;
  document.getElementById('hex_input').value = `${hash}${hex}`;
  
  // Background color for PickerBox and PreviewBox
  document.getElementById('color-picker-preview').style.backgroundColor = `${hash}${hex}`;
  document.getElementById('popoverInput').style.backgroundColor = `${hash}${hex}`;

  rgb = HEXtoRGB(`${hash}${hex}`);
  // Color harmonies
  let curColor = document.getElementsByClassName ('cur_color');
  for (let i = 0; i < curColor.length; i++) {
    curColor[i].style.backgroundColor=`${hash}${hex}`;
    curColor[i].innerHTML=`${hash}${hex}`;
  }

  ComplementaryClr = ComplementaryHSL(rgb.r.toFixed() + ',' + rgb.g.toFixed() + ',' + rgb.b.toFixed())
  ComplementarytoHex = ComplementaryHex(ComplementaryClr)
  let complColor = document.getElementsByClassName('compl_color');
   for (let i = 0; i < complColor.length; i++) {
    complColor[i].style.backgroundColor= 'HSL(' + ComplementaryClr.toString() + ')'
    complColor[i].innerHTML= ComplementarytoHex;
  }

  
  splitColors = SplitComplementaryHSL(rgb.r.toFixed() + ',' + rgb.g.toFixed() + ',' + rgb.b.toFixed())
  document.getElementById('split_clr1').style.backgroundColor = 'HSL(' + splitColors[0].toString() + ')';
  document.getElementById('split_clr2').style.backgroundColor = 'HSL(' + splitColors[1].toString() + ')';
  splittoHex = SplitComplementaryHex(splitColors)
  document.getElementById('split_clr1').innerHTML = splittoHex[0];
  document.getElementById('split_clr2').innerHTML = splittoHex[1];


  AnalogousClr = AnalogousHSL(rgb.r.toFixed() + ',' + rgb.g.toFixed() + ',' + rgb.b.toFixed());
  document.getElementById('analog_clr1').style.backgroundColor = 'HSL(' + AnalogousClr[0].toString() + ')';
  document.getElementById('analog_clr2').style.backgroundColor = 'HSL(' + AnalogousClr[1].toString() + ')';
  AnalogoustoHex = AnalogousHex(AnalogousClr)
  document.getElementById('analog_clr1').innerHTML = AnalogoustoHex[0];
  document.getElementById('analog_clr2').innerHTML = AnalogoustoHex[1];


  TriadicClr = TriadicHSL(rgb.r.toFixed() + ',' + rgb.g.toFixed() + ',' + rgb.b.toFixed());
  document.getElementById('triadic_clr').style.backgroundColor = 'HSL(' + TriadicClr[0].toString() + ')';
  TriadictoHex = TriadicHex(TriadicClr)
  document.getElementById('triadic_clr').innerHTML = TriadictoHex[0];
  let triada_tetra_Color = document.getElementsByClassName('triad_tetra');
   for (let i = 0; i < triada_tetra_Color.length; i++) {
    triada_tetra_Color[i].style.backgroundColor= 'HSL(' + TriadicClr[1].toString() + ')';
    triada_tetra_Color[i].innerHTML= TriadictoHex[1];
  }


  TetradicClr = TetradicHSL(rgb.r.toFixed() + ',' + rgb.g.toFixed() + ',' + rgb.b.toFixed());
  document.getElementById('tetra_clr').style.backgroundColor = 'HSL(' + TetradicClr.toString() + ')';
  TetradictoHex = TetradicHex(TetradicClr)
  document.getElementById('tetra_clr').innerHTML = TetradictoHex;

  SquareClr = SquareHSL(rgb.r.toFixed() + ',' + rgb.g.toFixed() + ',' + rgb.b.toFixed());
  document.getElementById('square_clr1').style.backgroundColor = 'HSL(' + SquareClr[0].toString() + ')';
  document.getElementById('square_clr2').style.backgroundColor = 'HSL(' + SquareClr[1].toString() + ')';
  SquaretoHex = SquareHex(SquareClr)
  document.getElementById('square_clr1').innerHTML = SquaretoHex[0];
  document.getElementById('square_clr2').innerHTML = SquaretoHex[1];
}

// Color Search
const searchBox = document.getElementById('hex_input');
searchBox.addEventListener('click', (e) => {
  document.getElementById('hex_input').value = '';

  searchBox.addEventListener('keyup', (e) => {
    hex = e.target.value;
    if(hex[0] == '#') {
      Colorist(hash='', hex);
    }else {
      Colorist(hash='#', hex);
    }
  })  
})   



$(document).ready(function(){

    // Color Picker Popover
    $("#popoverInput").click(function(){
      $("[data-toggle='popover']").popover('show');
      document.getElementById("colorPicker").style.visibility = "visible"
    });

    $('[data-toggle="popover"]').popover({
      html : true,
      content : document.getElementById("colorPicker")
    });

    $("#colorPicker").mouseleave(function(){
      $("[data-toggle='popover']").popover('hide');
    });


    // Copy Function
    function copyToClipboard(str) {
      var area = document.createElement('textarea');

      document.body.appendChild(area);  
        area.value = str;
        area.select();
        document.execCommand("copy");
      document.body.removeChild(area);  
    }

    $('.palette-color').on("click", function(){
      let id_clr = $(this).attr('id');
      
      let data = $("#" + id_clr).html()
      copyToClipboard(data)
      
      $("#" + id_clr).html("Copied!")
      setTimeout(function(){
        $("#" + id_clr).html(data)
      }, 500);
    })

});
