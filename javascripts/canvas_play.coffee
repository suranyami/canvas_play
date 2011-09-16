class Picture
  rand: (range, min = 0) ->
    (Math.random() * range) + min
  
  randInt: (range, min = 0) ->
    (@rand range, min).toFixed 0
  
  randRGB: ->
    "rgb(#{@randInt(255)}, #{@randInt(255)}, #{@randInt(255)})"

  randRGBA: ->
    "rgba(#{@randInt(255)}, #{@randInt(255)}, #{@randInt(255)}, #{@rand(0.5, 0.25)})"

  draw: ->
    canvas = document.getElementById 'sample'
    if canvas.getContext
      ctx = canvas.getContext '2d'
      for j in [0..200]
        ctx.fillStyle = @randRGBA()
        ctx.fillRect @randInt(800, -25), @randInt(600, -25), @randInt(50), @randInt(50)

$(document).ready ->
  document.picture = new Picture
  document.picture.draw()
  setInterval((-> document.picture.draw()), 1)
  