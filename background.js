const canvas = document.querySelector("#canvas"),
  ctx = canvas.getContext("2d");
let w,
  h,
  particles,
  particleDistance = 40,
  mouse = { x: void 0, y: void 0, radius: 90 };
function init() {
  resizeReset(), animationLoop();
}
function resizeReset() {
  (w = canvas.width = window.innerWidth),
    (h = canvas.height = window.innerHeight),
    (particles = []);
  for (
    let t = ((h % particleDistance) + 2 * particleDistance) / 2;
    t <= h;
    t += particleDistance
  )
    for (
      let e = ((w % particleDistance) + particleDistance) / 2;
      e <= w;
      e += particleDistance
    )
      particles.push(new Particle(e, t));
}
function animationLoop() {
  ctx.clearRect(0, 0, w, h), drawScene(), requestAnimationFrame(animationLoop);
}
function drawScene() {
  for (let t = 0; t < particles.length; t++)
    particles[t].update(), particles[t].draw();
  drawLine();
}
function drawLine() {
  for (let t = 0; t < particles.length; t++)
    for (let e = t; e < particles.length; e++) {
      let i = particles[t].x - particles[e].x,
        s = particles[t].y - particles[e].y,
        a = Math.sqrt(i * i + s * s);
      a < 1.5 * particleDistance &&
        ((opacity = 1 - a / (1.5 * particleDistance)),
        (ctx.strokeStyle = "#78d3da"),
        (ctx.lineWidth = 2),
        ctx.beginPath(),
        ctx.moveTo(particles[t].x, particles[t].y),
        ctx.lineTo(particles[e].x, particles[e].y),
        ctx.stroke());
    }
}
function mousemove(t) {
  (mouse.x = t.x), (mouse.y = t.y);
}
function mouseout() {
  (mouse.x = void 0), (mouse.y = void 0);
}
class Particle {
  constructor(t, e) {
    (this.x = t),
      (this.y = e),
      (this.size = 4),
      (this.baseX = this.x),
      (this.baseY = this.y),
      (this.speed = 25 * Math.random() + 5);
  }
  draw() {
    (ctx.fillStyle = ctx.strokeStyle =
        "#78d3da"),
      ctx.beginPath(),
      ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI),
      ctx.closePath(),
      ctx.fill();
  }
  update() {
    let t = mouse.x - this.x,
      e = mouse.y - this.y,
      i = Math.sqrt(t * t + e * e),
      s = mouse.radius,
      a = (s - i) / s,
      c = (t / i) * a * this.speed,
      r = (e / i) * a * this.speed;
    if (i < mouse.radius) (this.x -= c), (this.y -= r);
    else {
      if (this.x !== this.baseX) {
        let o = this.x - this.baseX;
        this.x -= o / 10;
      }
      if (this.y !== this.baseY) {
        let n = this.y - this.baseY;
        this.y -= n / 10;
      }
    }
  }
}
init(),
  window.addEventListener("resize", resizeReset),
  window.addEventListener("mousemove", mousemove),
  window.addEventListener("mouseout", mouseout);
