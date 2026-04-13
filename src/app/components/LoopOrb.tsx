import { useEffect, useRef } from "react";

interface Ripple {
  r: number;
  alpha: number;
}

export function LoopOrb() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio, 2);

    const setup = () => {
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
    };
    setup();
    const ro = new ResizeObserver(setup);
    ro.observe(canvas);

    let angle = 0;
    const SPEED = 0.45;
    const TAIL_LENGTH = 72;
    const trail: { x: number; y: number }[] = [];
    const ripples: Ripple[] = [];
    let lastLoopAngle = 0;

    let raf: number;
    let prev = performance.now();

    const draw = (now: number) => {
      const dt = Math.min((now - prev) / 1000, 0.05);
      prev = now;

      const W = canvas.width;
      const H = canvas.height;
      const cx = W / 2;
      const cy = H / 2;
      const scale = Math.min(W, H);
      const RING_R = scale * 0.38;

      ctx.clearRect(0, 0, W, H);

      // ── Ambient centre glow ──────────────────────────────
      const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, scale * 0.4);
      glow.addColorStop(0, "rgba(99,102,241,0.10)");
      glow.addColorStop(1, "rgba(99,102,241,0)");
      ctx.beginPath();
      ctx.arc(cx, cy, scale * 0.4, 0, Math.PI * 2);
      ctx.fillStyle = glow;
      ctx.fill();

      // ── Static ring ──────────────────────────────────────
      ctx.beginPath();
      ctx.arc(cx, cy, RING_R, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(99,102,241,0.22)";
      ctx.lineWidth = 1 * dpr;
      ctx.stroke();

      // ── Advance comet ────────────────────────────────────
      angle += SPEED * dt;

      const loops = Math.floor(angle / (Math.PI * 2));
      const lastLoops = Math.floor(lastLoopAngle / (Math.PI * 2));
      if (loops > lastLoops) {
        ripples.push({ r: RING_R, alpha: 0.55 });
      }
      lastLoopAngle = angle;

      const cometX = cx + RING_R * Math.cos(angle);
      const cometY = cy + RING_R * Math.sin(angle);

      trail.push({ x: cometX, y: cometY });
      if (trail.length > TAIL_LENGTH) trail.shift();

      // ── Draw tail ────────────────────────────────────────
      for (let i = 1; i < trail.length; i++) {
        const t = i / trail.length;
        const alpha = Math.pow(t, 2) * 0.75;
        const width = t * 2.5 * dpr;
        ctx.beginPath();
        ctx.moveTo(trail[i - 1].x, trail[i - 1].y);
        ctx.lineTo(trail[i].x, trail[i].y);
        ctx.strokeStyle = `rgba(165,180,252,${alpha.toFixed(3)})`;
        ctx.lineWidth = width;
        ctx.lineCap = "round";
        ctx.stroke();
      }

      // ── Draw comet head ──────────────────────────────────
      const halo = ctx.createRadialGradient(cometX, cometY, 0, cometX, cometY, 14 * dpr);
      halo.addColorStop(0, "rgba(165,180,252,0.45)");
      halo.addColorStop(0.4, "rgba(99,102,241,0.15)");
      halo.addColorStop(1, "rgba(99,102,241,0)");
      ctx.beginPath();
      ctx.arc(cometX, cometY, 14 * dpr, 0, Math.PI * 2);
      ctx.fillStyle = halo;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(cometX, cometY, 2.5 * dpr, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(230,225,255,0.98)";
      ctx.fill();

      // ── Ripples ──────────────────────────────────────────
      for (let i = ripples.length - 1; i >= 0; i--) {
        const rp = ripples[i];
        rp.r += scale * 0.18 * dt;
        rp.alpha -= 0.55 * dt;

        if (rp.alpha <= 0) {
          ripples.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(cx, cy, rp.r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(99,102,241,${rp.alpha.toFixed(3)})`;
        ctx.lineWidth = 1 * dpr;
        ctx.stroke();
      }

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    null
  );
}
