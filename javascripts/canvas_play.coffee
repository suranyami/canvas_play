class Picture
  draw: ->
    canvas = document.getElementById 'sample'
    if canvas.getContext
      ctx = canvas.getContext '2d'
      for j in [0..200]
        r = (Math.random() * 255).toFixed(0)
        g = (Math.random() * 255).toFixed(0)
        b = (Math.random() * 255).toFixed(0)
        a = Math.random() * 0.5 + 0.25
        x = (Math.random() * 800).toFixed(0) - 25
        y = (Math.random() * 600).toFixed(0) - 25
        w = (Math.random() * 50 ).toFixed(0)
        h = (Math.random() * 50 ).toFixed(0)
        
        ctx.fillStyle = "rgba(#{r}, #{g}, #{b}, #{a})"
        ctx.fillRect x, y, w, h

$(document).ready ->
  document.picture = new Picture
  document.picture.draw()
  setInterval((-> document.picture.draw()), 1)
  