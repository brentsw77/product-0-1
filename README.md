# Product 0.1

Early proof-of-concept for a goal-based, connection-aware tech compatibility engine.

## Product thesis

Instead of asking users to understand specifications first, Product 0.1 starts with:

**What do you own? → How is it connected? → What are you trying to accomplish?**

The engine checks the whole signal chain and reports **PASS / FAIL / UNKNOWN**. Unknown evidence stays unknown.

## V0.1 scope

Gaming/display chains:

`Console or PC → cable/adapter → monitor/TV → desired resolution + refresh rate`

The first golden test is a PlayStation 5 connected by HDMI to an LG UltraGear 32G620B-B with a target of 1440p at 120Hz.

## Run locally

This prototype is plain HTML/CSS/JavaScript with no build step. Open `index.html` in a normal browser or serve the folder with any static web server.

## Important

The current hardware dataset is intentionally tiny and marked as prototype data. Production capability claims must be tied to verified evidence and modeled per port/mode rather than inferred from marketing labels.
