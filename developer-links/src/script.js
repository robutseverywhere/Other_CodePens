var dots = [],
    mouse = {
      x: 10,
      y: 10
    };

var Dot = function() {
  this.x = 0;
  this.y = 0;
  this.node = (function(){
    var n = document.createElement("div");
    n.className = "trail";
    document.body.appendChild(n);
    return n;
  }());
};

Dot.prototype.draw = function() {
  this.node.style.left = this.x + "px";
  this.node.style.top = this.y + "px";
};

for (var i = 0; i < 12; i++) {
  var d = new Dot();
  dots.push(d);
}

function draw() {
  var x = mouse.x,
      y = mouse.y;

  dots.forEach(function(dot, index, dots) {
    var nextDot = dots[index + 1] || dots[0];
    
    dot.x = x;
    dot.y = y;
    dot.draw();
    x += (nextDot.x - dot.x) * .5;
    y += (nextDot.y - dot.y) * .5;
  });
}

addEventListener("mousemove", function(event) {
  mouse.x = event.pageX;
  mouse.y = event.pageY;
});

function animate() {
draw();
requestAnimationFrame(animate);
}

animate();