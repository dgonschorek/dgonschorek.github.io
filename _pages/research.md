---
permalink: /research/
title: "Research"
description: "Research of Dominic Gonschorek: retinal computation, neuromodulation, retina-to-superior-colliculus processing, machine learning for neuroscience, and large-scale open datasets."
lead: "How does the visual system turn light into neural codes, and how do these codes adapt to context? I approach this question in the mouse retina and its targets in the brain, using large-scale functional recordings together with machine learning."
author_profile: true
page_class: research
---

<nav class="toc-inline" aria-label="On this page">
  <a href="#visual-coding">Retinal computation</a>
  <a href="#neuromodulation">Neuromodulation</a>
  <a href="#colliculus">Retina → superior colliculus</a>
  <a href="#machine-learning">Machine learning</a>
  <a href="#open-science">Datasets & open science</a>
</nav>

The retina is a good place to study neural computation. It is accessible, its output can be recorded almost exhaustively, and it already transforms the visual input in sophisticated ways before anything reaches the brain.
My work combines two-photon imaging and multi-electrode recordings with computational methods. The datasets we build make new models possible, and the models in turn help us interpret the data.

## Retinal computation and cell types {#visual-coding}

**Question.** The retina does not send one image to the brain. It splits the visual input into dozens of parallel channels, the functional types of retinal ganglion cells, each tuned to different features. What does each channel encode, and how fixed is this code?

- **A functional census.** With the All-GCL dataset we characterised light responses of more than 80,000 neurons in the mouse ganglion cell layer and assigned them to 46 functional types.
- **Polarity as a computation.** On and Off signals are classically treated as hard-wired. In zebrafish, with validation in mice, we found that bipolar cells can produce mixed responses that inhibitory circuits normally suppress, so polarity segregation is regulated dynamically.
- **Disease.** In the rd10 mouse model of retinitis pigmentosa, early photoreceptor degeneration affects ganglion cell types to different degrees, while the full breadth of retinal output is still present.
- **Structure to function.** Eyewire II is a connectomic resource of the mouse retina for linking cell types to their circuits.

{% include research-pubs.html theme="retina" %}

## Neuromodulation and context {#neuromodulation}

**Question.** Retinal circuits are not hard-wired. Neuromodulators adjust their computations, so the same circuit can encode the same stimulus differently. Which signals do this, and which computations do they target?

- **Nitric oxide.** Using two-photon Ca²⁺ imaging and multi-electrode array recordings, we showed that nitric oxide selectively modulates contrast suppression in a distinct subset of retinal ganglion cell types. This work began during my PhD in the research training group GRK 2381 "cGMP: From Bedside to Bench".
- **Brain state.** In a perspective for *PLOS Biology*, we discuss how histamine released depending on brain state may modulate the very first stage of vision in the retina.
- I am also interested in other modulatory systems, such as endocannabinoids, that could give the early visual system this flexibility.

{% include research-pubs.html theme="neuromodulation" %}

## From the retina to the superior colliculus {#colliculus}

**Question.** The superior colliculus is one of the main targets of the mouse retina. Which retinal channels does it receive, and how are they arranged?

- Imaging more than 200,000 retinal ganglion cell axon boutons *in vivo* and combining the data with deep learning models, we found that the colliculus receives nearly the full functional diversity of retinal ganglion cells.
- These inputs are organized in systematic laminar gradients, including gradients of direction selectivity and contrast suppression.
- Code and a model notebook are public: [GitHub](https://github.com/yongrong-qiu/retina-axon-model) · [Google Colab](https://colab.research.google.com/drive/1k9411tLWNcDlUX7nYDsU_grMwafiI3qw?usp=sharing).

{% include research-pubs.html theme="colliculus" %}

## Computational neuroscience and machine learning {#machine-learning}

**Question.** Modern recordings are large, high-dimensional and noisy, and they come from many experiments. How do we extract structure from them that holds up and can be interpreted biologically?

- **Integrating data across experiments.** An adversarial domain-adaptation approach removes inter-experimental variability from two-photon imaging data while preserving the biological signal (NeurIPS 2021, spotlight).
- **Predicting neural responses.** Adding an efficient-coding objective based on natural scene statistics to system-identification models improves predictions of retinal responses (*PLOS Computational Biology*, 2023).
- **Representation learning.** TRACE is a self-supervised contrastive method that uses repeated stimulus trials to learn low-dimensional embeddings of neural time series. These embeddings capture continuous variation and cell-type structure (NeurIPS 2025).
- **Shared models and benchmarks.** openretina provides a common framework for training and comparing deep learning models of the retina across datasets and species. Its benchmarks show that current models still leave substantial explainable variance uncaptured.

My computational background goes back to my Master's in Neuroscience, including a research project in theoretical neuroscience at the University of Waterloo and the SMARTSTART training program of the Bernstein Network for Computational Neuroscience.

{% include research-pubs.html theme="ml" %}

## Large-scale datasets and open science {#open-science}

**Question.** Many open questions about neural coding need more data than a single study can produce. How do we build resources that other labs can trust and reuse?

- **All-GCL.** Two-photon recordings from more than 80,000 ganglion cell layer neurons, collected over nine years in 139+ recording sessions, with standardized metadata, functional type assignments, pretrained classifiers and tutorials. Batch effects across experimenters, setups and sessions are small.
  [Paper](/publication/2025-12-09_A_large-scale_dataset) · [Dataset on Hugging Face](https://huggingface.co/datasets/eulerlab/all-gcl) · [Code on GitHub](https://github.com/eulerlab/all-GCL-manuscript)
- **openretina.** An open-source Python package with curated data loaders, a reproducible training pipeline and pretrained models for five public retina datasets.
  [Paper](/publication/2025-03-11_The_openretina_Project) · [Code on GitHub](https://github.com/open-retina/open-retina)
- **Eyewire II.** A connectomic resource of the mouse retina, reconstructed with the citizen-science platform Eyewire II.
  [Preprint](/publication/2026-06-01_Eyewire_II-A_connectomic)

{% include research-pubs.html theme="data" %}

---

Interested in collaborating on any of these topics? [Get in touch](mailto:dominic.gonschorek@cin.uni-tuebingen.de).
