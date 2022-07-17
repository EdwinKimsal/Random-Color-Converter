var rgb = ('rgb(255, 255, 255)');

function randomColor(){
    
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    
    rgb = ('rgb(' + r + ', ' + g + ', ' + b + ')');
    document.getElementById('bg').backgroundColor = rgb;

}
