class Player {
    constructor(x, y, w, h, color) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.color = color;
    }
  
    draw() {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.w, this.h);
    }

    move(dx, dy) {
        const vel = 5;
        const nx = this.x + (dx * vel);
        const ny = this.y + (dy * vel);
        if (0 <= ny && ny + this.h <= gameHeight) {
            this.y = ny;
        }
        if (0 <= nx && nx + this.w <= gameWidth) {
            this.x = nx;
        }
    }
  }
  