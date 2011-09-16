(function() {
  var Picture;
  Picture = (function() {
    function Picture() {}
    Picture.prototype.draw = function() {
      var a, b, canvas, ctx, g, h, j, r, w, x, y, _results;
      canvas = document.getElementById('sample');
      if (canvas.getContext) {
        ctx = canvas.getContext('2d');
        _results = [];
        for (j = 0; j <= 200; j++) {
          r = (Math.random() * 255).toFixed(0);
          g = (Math.random() * 255).toFixed(0);
          b = (Math.random() * 255).toFixed(0);
          a = Math.random() * 0.5 + 0.25;
          x = (Math.random() * 800).toFixed(0) - 25;
          y = (Math.random() * 600).toFixed(0) - 25;
          w = (Math.random() * 50).toFixed(0);
          h = (Math.random() * 50).toFixed(0);
          ctx.fillStyle = "rgba(" + r + ", " + g + ", " + b + ", " + a + ")";
          _results.push(ctx.fillRect(x, y, w, h));
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
