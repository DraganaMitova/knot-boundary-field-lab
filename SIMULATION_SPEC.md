# KNOT Boundary Field Lab V9.1.1 — Simulation Spec

## Scope

This is a reproducible educational simulation for local field behavior, boundary stress inspection, pattern tracking, and export/replay. It is not a validated scientific instrument and does not prove new physics.

## Models

### Linear Wave
`u_tt = c²∇²u − γu_t + source/noise`

### Sine-Gordon Toy
`u_tt = c²∇²u − α sin(u) − γu_t + source/noise`

### φ⁴ Toy
`u_tt = c²∇²u − α(u³ − u) − γu_t + source/noise`

### Gray-Scott Reaction-Diffusion
`A_t = D_A∇²A − AB² + F(1−A)`

`B_t = D_B∇²B + AB² − (K+F)B`

Gray-Scott is separated from wave models because it is reaction-diffusion, not wave physics.

## Numerical Safety

- 2D CFL stability status is computed for wave models.
- NaN/Infinity recovery resets invalid cells to bounded defaults.
- Pattern trajectories are bounded in export: 100 live points, 50 archived points.
- 256×256 forces reduced frame pressure through Performance Mode.
- Pause-triggered localStorage autosave stores the exact exported browser state locally.
- FPS display is diagnostic only; it is not part of simulation physics.

## Pattern Tracking

Pattern identity is approximate. Tracking uses predicted centroid motion plus mass/spread similarity and confidence history. Merge/split events can invalidate identity; these are reported as uncertainty rather than hidden.

## Boundary Stress Index

Boundary Stress Index is a weighted heuristic. It is useful for inspection and comparison, not a first-principles scientific derivation.
