---
title: "Metal Blank Tolerances Explained"
slug: "understanding-metal-blank-tolerances"
date: "2026-03-15"
tags: ["buying-guide", "tolerances", "general"]
material: "general"
segment: "industrial"
description: "Learn about standard metal blank tolerances for thickness, flatness, and dimensions — and when to specify tighter specs."
readTime: "7 min read"
---

## What Tolerance Actually Means

Tolerance is the permissible variation in a dimension. When you order a 0.250" thick aluminum blank, you're not getting exactly 0.250" — you're getting something within an acceptable range around that target. Tolerance defines how wide that range is.

Tolerances are expressed as a plus/minus deviation from the nominal dimension. A blank specified as 0.250" +/- 0.005" can be anywhere from 0.245" to 0.255" and still be in spec. That's a total tolerance band of 0.010".

Every dimension on a metal blank has a tolerance: thickness, width, length, flatness, squareness, and surface finish. This applies whether you're ordering [steel blanks](/steel), [aluminum blanks](/aluminum), or [copper blanks](/copper). Some of these are controlled by the mill that produced the raw stock. Others are controlled by the blank supplier's cutting and processing operations. Understanding which tolerances come from where helps you specify only what you actually need — and avoid paying for precision that doesn't matter.

## Standard Mill Tolerances

Raw metal stock arrives from the mill with tolerances defined by industry standards. The most common references are ASTM standards for specific alloys and AMS (Aerospace Material Specifications) for tighter aerospace requirements.

### Sheet and Plate

For hot-rolled steel plate (ASTM A6), standard thickness tolerances depend on the nominal thickness and the plate width:

- **Up to 3/8" thick, under 48" wide:** +0.030" / -0.010"
- **3/8" to 3/4" thick, under 48" wide:** +0.045" / -0.010"
- **Over 3/4" to 1" thick, under 48" wide:** +0.050" / -0.010"

Notice these are asymmetric — mills run on the plus side to ensure minimum weight compliance. You'll almost always receive plate that's at or above nominal thickness.

Cold-rolled sheet (ASTM A568) has tighter tolerances than hot-rolled:

- **0.060" to 0.075" thick:** +/- 0.004"
- **0.075" to 0.125" thick:** +/- 0.005"
- **0.125" to 0.250" thick:** +/- 0.007"

Aluminum plate (ASTM B209) falls between hot-rolled and cold-rolled steel:

- **0.250" thick, under 36" wide:** +/- 0.007"
- **0.500" thick, under 36" wide:** +/- 0.011"
- **1.000" thick, under 36" wide:** +/- 0.015"

### Bar Stock

For round and flat bar, standard mill tolerances are typically governed by ASTM A29 (steel) or ASTM B211 (aluminum). Cold-finished bar is tighter than hot-rolled:

- **Hot-rolled steel bar, 1" to 2" diameter:** +/- 0.010" to +/- 0.016"
- **Cold-finished steel bar, 1" to 2" diameter:** +/- 0.002" to +/- 0.003"
- **Aluminum round bar, 1" to 2" diameter:** +/- 0.004" to +/- 0.006"

The takeaway: cold-finished and cold-rolled products have significantly tighter tolerances than hot-rolled. If tolerance matters, specify the condition.

## Thickness Tolerance vs. Flatness

These are separate characteristics, and confusing them is one of the most common mistakes buyers make.

**Thickness tolerance** controls how far the actual thickness can deviate from the nominal value. A plate that's called out as 0.500" +/- 0.010" could be 0.495" at one point and 0.508" at another, and both measurements are within tolerance — even though the plate varies by 0.013" across its surface.

**Flatness** controls how much a blank deviates from a true plane. It's measured by placing the blank on a surface plate and checking the gap between the blank and the reference surface. Flatness is typically expressed as a maximum deviation over a given length — for example, 0.010" per foot.

Standard hot-rolled plate flatness per ASTM A6 is surprisingly loose:

- **Up to 36" wide:** 0.250" per foot maximum camber (bow along the length)
- **Thickness under 1":** flatness tolerance of 0.375" to 0.750" depending on width and length

That means a standard mill plate can have nearly 3/4" of bow across its surface and still be within spec. For most machining applications, that's unacceptable — which is why blanks are typically stress-relieved, saw-cut, and/or surface-ground before delivery.

## Precision Grinding Options

When standard mill tolerances aren't sufficient, there are two common grinding processes used to improve blank tolerances:

### Blanchard Grinding (Rotary Surface Grinding)

Blanchard grinding uses a rotating magnetic chuck and a vertical-spindle grinding wheel to remove material from one or both faces. It's fast and cost-effective for bringing plate to a closer thickness tolerance.

- **Typical tolerance:** +/- 0.001" to +/- 0.003" on thickness
- **Surface finish:** 63 to 125 Ra (microinch). Blanchard leaves a characteristic circular scratch pattern.
- **Flatness:** 0.002" to 0.005" per foot, depending on material thickness and blank size.
- **Best for:** Mold plates, fixture bases, die blanks, and any application where consistent thickness matters more than surface finish.

### Precision Surface Grinding

Precision (reciprocating) surface grinding uses a horizontal-spindle grinder with a traversing table. It's slower than Blanchard grinding but produces tighter tolerances and better surface finish.

- **Typical tolerance:** +/- 0.0005" to +/- 0.001" on thickness
- **Surface finish:** 16 to 32 Ra (microinch). A smooth, linear scratch pattern.
- **Flatness:** 0.001" to 0.002" per foot.
- **Best for:** Gauge blocks, precision tooling, optical mounting plates, and applications where both dimensional accuracy and surface finish are critical.

The cost difference between the two is significant. Blanchard grinding might add $5–15 per blank for small to medium plates. Precision grinding can be $25–75 or more, depending on size and tolerance requirements.

## How Tolerances Affect Cost

Tighter tolerances cost more, and the relationship is nonlinear. Going from +/- 0.010" to +/- 0.005" might add 10–15% to the cost of a blank. Going from +/- 0.005" to +/- 0.001" can add 50–100% or more, because the supplier has to switch from sawing and basic processing to grinding operations with inspection at every step.

Cost drivers for tighter tolerances include:

- **Processing time.** Grinding is slower than sawing, and tighter tolerances require more passes and careful measurement.
- **Scrap rate.** Tighter specs mean more blanks fall out of tolerance during processing. The supplier prices in that waste.
- **Inspection.** Standard blanks might get a spot check. Tight-tolerance blanks need full dimensional inspection, often with calibrated instruments and documentation.
- **Material selection.** Achieving tight thickness tolerances may require starting with pre-ground stock or stress-relieved plate, both of which cost more than standard mill plate.

## Specifying Tolerances on an RFQ

When you send out a request for quote, unclear or excessive tolerance callouts are one of the fastest ways to drive up the price. Here's how to specify tolerances effectively:

### Call Out Only What Matters

Not every dimension needs a tight tolerance. If you're machining all six faces of a blank, the saw-cut length and width tolerances are irrelevant — you're removing that material anyway. Focus your tolerance callouts on the dimensions that actually affect fit, function, or your machining process.

Common approach: specify tight thickness tolerance (because you're machining from one side and referencing off the other), standard tolerance on length and width (because you have machining allowance), and call out flatness if you're fixturing off a raw surface.

### Use Standard Tolerance Bands

Suppliers are set up to hit standard tolerance bands efficiently. Specifying +/- 0.005" or +/- 0.001" will usually get you a better price than an oddball callout like +/- 0.0035", because the supplier can use their standard process rather than setting up something custom.

### Specify Material Condition

State whether you want hot-rolled, cold-rolled, annealed, stress-relieved, or pre-hardened material. The condition affects both the achievable tolerances and the cost. A tolerance of +/- 0.002" is straightforward on cold-finished bar but may require grinding on hot-rolled plate.

### Include Flatness If It Matters

If flatness is important to your application, call it out explicitly. Don't assume the supplier will deliver flat material — standard plate can be bowed, twisted, or wavy and still meet mill specs. Specify flatness as a maximum deviation over a given length (e.g., "0.005" per 12" maximum").

### State Your Inspection Method

If you plan to inspect incoming blanks with specific instruments (calipers, micrometers, CMM), mention it on the RFQ. This helps the supplier understand your expectations and avoid disputes over measurement method differences.

### Ask About Standard vs. Custom

Before specifying a tight tolerance, ask the supplier what their standard tolerance is for the product you're ordering. You may find their standard process already meets your needs, saving you the cost of a custom callout. Many suppliers maintain tighter internal standards than the minimums published in ASTM specs.

## The Bottom Line

Tolerances are a cost lever. Every tenth of a thousandth you specify has a dollar value attached to it. Check our [live metal prices](/prices) page for current LME spot rates before specifying your RFQ. The goal is to match the tolerance to the actual functional requirement — tight enough that the part works, loose enough that you're not paying for precision that gets machined away. When in doubt, call the supplier and ask what they can hold as standard. You'll often find the answer is tighter than you expected.
