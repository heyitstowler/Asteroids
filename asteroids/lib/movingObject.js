(function (root) {
  var Asteroids = root.Asteroids = root.Asteroids || {};

  var MovingObject =  Asteroids.MovingObject = function (options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color;
  };

  MovingObject.prototype.draw = function (ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0,
      2 * Math.PI
    );

    ctx.fill();

  };

  MovingObject.prototype.move = function() {
    var xPos = this.pos[0];
    var yPos = this.pos[1];

    var xVel = this.vel[0];
    var yVel = this.vel[1];

    this.pos = [(xPos + xVel), (yPos, yVel)];
  };
})(this);