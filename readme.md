# Blood Vessel Flow animation #

Author: Vienna Ly, BCIT LTC 2022  
Art: Alistair Boakes  
SME: Teresa Gnoato, instructor NSHA BCIT

© copyleft  
GitHub https://github.com/vie74050/BloodVesselFlow 

## Description #

A simple animation that allows users to see flow changes when blood vessel diameter is adjusted.  Created for Specialty Nursing High Acuity at BCIT.

## About ##

The SVG in the HTML is a cleaned up version of the source SVG, available in the `_sourceFiles` folder.

SVG required IDs & structure:

- `#Rect-inner` The inner rect of the side-view vessel that is scaled
  - `RBC_rect` The Red Blood Cell (RBC) container cluster in side view
    - `g.spin` Individual RBC image
- `#Circle-inner` The inner circle of the cross-section view that is scaled
  - `RBC_circle` The Red Blood Cell container cluster in cross-section view
    - `g.spin` Individual RBC image

Animations are all css-driven, controllable by modifying the css params:

- `--size` Number by which to scale `#Rect-inner` or `#Circle-inner` to adjust sizw
- `--flow-rate` Number to set the animation duration property

These properties can be changed by calling `SetSize(n)` or `SetFlow(n)`, respectively.  See BloodVesselFlow.js