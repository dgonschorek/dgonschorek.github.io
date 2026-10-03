---
permalink: /
title: "Dominic Gonschorek"
kicker: "Computational & Systems Neuroscience"
description: "Dominic Gonschorek is a computational and systems neuroscientist in Tübingen. He studies how visual circuits encode the world, combining large-scale neural recordings with machine learning and open, reusable datasets."
author_profile: true
page_class: home
redirect_from:
  - /about/
  - /about.html
---

<p class="intro">
I study how neural circuits encode the visual world, and how that encoding changes with context.
My work centres on the mouse retina and its projections to the superior colliculus. I combine
large-scale functional recordings with machine learning models of neural activity.
</p>

I am a postdoctoral researcher in the [Euler Lab](https://eulerlab.de/) at the University of Tübingen.
Besides running experiments, I develop the computational side of the work: methods that integrate data
across experiments, models that predict neural responses, representation learning for neural time series,
and curated datasets and software that other labs can reuse.

<!-- TODO (optional): one sentence on what you are working on right now that is not yet public, e.g. "I am currently ..." -->

<ul class="methods" aria-label="Methods">
  <li>Two-photon imaging</li>
  <li>Multi-electrode array recordings</li>
  <li>Deep learning models of neural responses</li>
  <li>Self-supervised representation learning</li>
  <li>Large-scale data integration</li>
  <li>Python</li>
</ul>

## Research themes {#themes}

<div class="themes">
  <a class="theme" href="/research/#visual-coding">
    <h3 class="theme__title">Visual coding & cell types</h3>
    <p>How the retina's parallel output channels encode visual input, and how these signals are organized in the superior colliculus.</p>
  </a>
  <a class="theme" href="/research/#neuromodulation">
    <h3 class="theme__title">Neuromodulation & context</h3>
    <p>How neuromodulators such as nitric oxide and histamine reshape retinal computations depending on brain state and context.</p>
  </a>
  <a class="theme" href="/research/#machine-learning">
    <h3 class="theme__title">Machine learning for neuroscience</h3>
    <p>Predictive models of neural responses, contrastive learning for multi-trial recordings, and removal of variability between experiments.</p>
  </a>
  <a class="theme" href="/research/#open-science">
    <h3 class="theme__title">Open datasets & tools</h3>
    <p>Curated large-scale datasets, shared modelling frameworks and connectomic resources that make results reusable across labs.</p>
  </a>
</div>

## Selected work {#selected}

{% assign selected = site.publications | where: "selected", true | sort: "date" | reverse %}
<ol class="pub-list pub-list--compact">
  {% for p in selected %}{% include publication-item.html pub=p %}{% endfor %}
</ol>

<p class="more-link"><a href="/publications/">All publications &rarr;</a></p>

## News {#news}

{% include news-list.html limit=4 %}

<p class="more-link"><a href="/news/">All news &rarr;</a></p>

## Contact {#contact}

I am happy to hear from researchers interested in collaborating, students looking for projects, and anyone curious about vision and the brain.
The best way to reach me is by email at <a href="mailto:dominic.gonschorek@cin.uni-tuebingen.de">dominic.gonschorek@cin.uni-tuebingen.de</a>.
You can also find me on [Google Scholar](https://scholar.google.de/citations?user=1HUhiwoAAAAJ), [GitHub](https://github.com/dgonschorek) and [LinkedIn](https://www.linkedin.com/in/dominic-gonschorek).
