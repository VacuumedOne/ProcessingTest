import p5 from 'p5'

const sketch = (p) => {
  p.setup = function () {
    //canvasのセットアップ
    p.createCanvas(500, 500)
    p.background(51)
    //オブジェクトのセットアップ
  }
  p.draw = function () {
    p.ellipse(150, 150, 100, 100)
  }
}

new p5(sketch, document.body)
