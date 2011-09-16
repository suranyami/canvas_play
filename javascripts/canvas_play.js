(function() {
  var Picture;
  Picture = (function() {
    function Picture() {}
    Picture.prototype.rand = function(range, min) {
      if (min == null) {
        min = 0;
      }
      return (Math.random() * range) + min;
    };
    Picture.prototype.randInt = function(range, min) {
      if (min == null) {
        min = 0;
      }
      return (this.rand(range, min)).toFixed(0);
    };
    Picture.prototype.randRGB = function() {
      return "rgb(" + (this.randInt(255)) + ", " + (this.randInt(255)) + ", " + (this.randInt(255)) + ")";
    };
    Picture.prototype.randRGBA = function() {
      return "rgba(" + (this.randInt(255)) + ", " + (this.randInt(255)) + ", " + (this.randInt(255)) + ", " + (this.rand(0.5, 0.25)) + ")";
    };
    Picture.prototype.draw = function() {
      var canvas, ctx, j, _results;
      canvas = document.getElementById('sample');
      if (canvas.getContext) {
        ctx = canvas.getContext('2d');
        _results = [];
        for (j = 0; j <= 200; j++) {
          ctx.fillStyle = this.randRGBA();
          _results.push(ctx.fillRect(this.randInt(800, -25), this.randInt(600, -25), this.randInt(50), this.randInt(50)));
        }
        return _results;
      }
    };
    return Picture;
  })();
  $(document).ready(function() {
    document.picture = new Picture;
    document.picture.draw();
    return setInterval((function() {
      return document.picture.draw();
    }), 1);
  });
}).call(this);
