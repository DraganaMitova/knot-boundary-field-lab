# KNOT Boundary Field Lab V9.1.1

## Live demo

https://DraganaMitova.github.io/knot-boundary-field-lab/

Open `index.html` in a modern browser.

## Browser workflow

1. Run Self-Test.
2. Run Production Tests.
3. Pause to autosave the current state to this browser.
4. Export Full JSON for exact local state replay.
5. Export Real Python for NumPy replay.

## Controls

- Click/drag on the field to inject a positive disturbance.
- Shift + click injects a negative disturbance.
- Touch devices support long-press before dragging for negative injection.
- Performance Mode reduces step/render pressure; 256×256 forces it automatically.
- Theme toggles between dark and light UI.

## Local CI tests

```bash
npm install
npx playwright install chromium
npm test
```

## Status

Production-oriented educational/demo build: performance mode, separated self/production tests, JSON import/export, real Python replay, runtime recovery tests, pause autosave, FPS display, touch input documentation, dark/light theme, accessibility improvements, and Playwright CI skeleton.

## Notes

WebGPU compute is intentionally not included in this patch. It remains high-effort and not necessary for the current production-hardening pass. Internationalization is also deferred because the app is still changing quickly.

## Topics

`pde-simulation` `wave-equation` `sine-gordon` `reaction-diffusion` `gray-scott` `pattern-tracking` `educational` `simulation` `reproducible` `boundary-conditions` `nonlinear-dynamics`
