# KNOT Boundary Field Lab

An interactive, high-precision research environment for exploring wave field dynamics, pattern formation, and boundary-criticality heuristics. 

**[Launch Live Simulation](https://DraganaMitova.github.io/knot-boundary-field-lab/)**

---

## 🎯 Purpose

This lab provides a reproducible playground for studying Partial Differential Equations (PDEs) and the emergence of localized field patterns. It is designed to bridge the gap between "visual toys" and "numerical research tools" by providing exact state serialization, deterministic replay, and trajectory tracking.

### Core Objectives
- **Interaction**: Directly manipulate wave fields and reaction-diffusion systems.
- **Tracking**: Quantify pattern identity and continuity via confidence-aware heuristics.
- **Analysis**: Map simulation states to a "Boundary Stress" lens to study transition thresholds.
- **Portability**: Export local browser states to Python (NumPy) for offline scientific validation.

---

## 🧪 Simulation Models

- **Linear Wave**: Baseline propagation and boundary reflection.
- **Sine-Gordon**: Nonlinear restores for studying soliton-like stability.
- **φ⁴ (Phi-Four)**: Classical nonlinear field theory toy.
- **Gray-Scott**: Reaction-diffusion patterns (mitosis, coral, labyrinth).

---

## 🕹️ Interaction Model

- **Inject Disturbances**: Click/drag on the field canvas.
- **Negative Inversion**: `Shift + Click` (or long-press on touch) to inject negative waves.
- **Pattern Inspection**: Click a tracked pattern to highlight its trajectory and lifetime history.
- **Persistence**: The lab automatically saves state on **Pause**. Use **Restore Autosave** to resume after a reload.

---

## 🛠️ Research Workflow

1. **Design**: Configure model parameters and experiment scenarios (Pulse, Slit, Collision).
2. **Observe**: Track emerging patterns and monitor the Boundary Stress index.
3. **Export**: 
   - **Full JSON**: Save the entire simulation state (fields + history) for sharing.
   - **Real Python**: Generate a standalone Python/NumPy script to replay the exact local run.
4. **Inspect**: Use the Pattern Inspector to analyze confidence and continuity over time.

---

## ⚠️ Scientific Boundaries

**Important Disclaimer**: This is an educational tool and a "visual lens" into complex dynamics. 
- Localized patterns are measured heuristics, not empirical proof of physical particles.
- The "Boundary Stress Index" is a weighted hypothesis, not a validated physical constant.
- **Simulation ≠ Discovery.** This tool is intended to help ask sharper questions, not to provide final physical answers.

---

## 💻 Developer Setup

The project is a standalone Vanilla JS/HTML/CSS application. No build step is required for the UI.

### Automated Testing
To run the Playwright validation suite:
```bash
npm install
npx playwright install chromium
npm test
```

---

## 🏷️ Topics
`pde-simulation` · `wave-equation` · `sine-gordon` · `reaction-diffusion` · `gray-scott` · `pattern-tracking` · `educational` · `reproducible` · `nonlinear-dynamics`
