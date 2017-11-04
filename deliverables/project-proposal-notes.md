# Project Proposal

## Title

---

> Include your name, class, project title, and advisor.

## Motivation and Goal

---

> Give a high-level introduction to your topic area and state specifically what problem you will be addressing.  You should clearly state the goal of your project with a sentence beginning “The goal of my project is …”. Explain why that goal is important and/or interesting, perhaps with a description of applications or people enabled by achieving it.

* This is a field I am interested in. Here is an issue relating to that field. Here is big data. Here is how we can leverage the data in new ways.

* We want interesting technology applied to an interesting problem.

* Reference our key term, weak signal analysis. Weak signals are characteristics that are not readily apparent in any single set of factors, but are highly predictive of some desired event.

* There are indicators out there, but what are looking for is not present as a single indicator but rather as a set of indicators. (Bin Laden was found because he was living in an expensive house that also had no communications.)

* This is a novel investigation of a dataset.

* With the onset of Brexit, the United Kingdom's Department of International Trade is looking to optimize its efforts to increase UK exports world wide.

* Can we develop a system to find targets for UK exports world wide?

* Why does a Barbour jacket sell in Princeton, but not Boulder despite similar socioeconomic levels. What is the hidden indicator? (Ratio of Starbucks coffee shops to independent coffee shops or percentage of expensive bike ownership?)

* We want to create a quantitatively rigorous and systematic way of assessing potential markets.

* Could we gather a variety of datasets on cities and then used unsupervised learning to cluster them. We could then extract the feature that make them similar and force rank them by potential market viability.

* How do you make problems well defined. This means creating rules and first principles so that the you can use reinforcement learning that does not require much data to make better models. This essentially allows bootstrapping.

## Problem Background and Related Work

---

> Place your project in context of prior work.  Give some background of what has been done before to achieve your stated goal. Include citations to closely related academic papers and/or list commercial products targeted at the same goal.  Finish this section with a brief explanation of the problem unsolved by previous work that will be addressed by your project.

* Give a summary of similar work.

* Reference big data (volume, velocity, variety, variability, and value) as an area that has not be fully applied in this area.

* Scraping through social media is not interesting and has already been done.

* These efforts have focused primarily on volume, velocity, variability, and value.

* Currently, the UK uses ad hoc talks with trade agents to determine market viability. This is neither systematic or quantitative.

### Related Work

* [How To Make Sense of Weak Signals](http://sloanreview.mit.edu/article/how-to-make-sense-of-weak-signals/)

* [Strategic Early Warning System](https://en.wikipedia.org/wiki/Strategic_early_warning_system)

## Approach

---

> Provide a concise description of the key idea underlying your approach to achieving the stated goal.  Provide an argument of why your approach is a good idea – i.e., why it can achieve the stated goal where others have not.

* Our key novel idea is variability and systematic weak signal analysis.

* Most work focuses on the determining causation, we are purely interested in predictive value, whether or not that has an causal relationship.

* Our differentiator is a focus on variety. (How do you mix satellite data with census data?)

* Discuss the how an iPhone captures many photos to eliminate noise. An iPhone takes better photos not through better optics (value), but by taking many noisy photos (data stacking).

* We are no longer data limited, but analysis limited. We need systematic approaches or even better systems that carry out the analysis for us at scale.

* Our goal is to use multiple weak datasets such that new signals reveal themselves. Compare this to using ensemble learning with weak learners (who are high bias, low variance), in order to produce strong models.

* Weak signal analysis is designed to eliminate noise.

* Can you apply noise reduction algorithms from photography to these datasets?

* Our approach is to use a combination of intriguing factors that capture subtle social differences.

* We want to use data to reveal cultural indicators that would not have been found on their own except through a systematic approach. This is can be considered an ecosystem based approach.

* We want to discover proxy measures that are not causal, but never the less predictive of what we are interested in.

* Could you create a recommender system for products and markets?

## Plan

---

> Describe the steps you plan to take and/or the issues you plan to address during the execution of your project.  What data sets will you have to acquire?  What algorithms will you have to develop?  What theorems will you have to prove?  etc.  For the steps that are non-trivial, provide a brief description of the issue, options, and planned approach.    Please indicate any particularly risky aspects of the project and discuss contingencies in case they do not go as planned.

* We will be using export and census data from Princeton data services.

* I will building the analytics with Python (jupyter notebooks, keras) and Javascript (node, react, graphql). We also be using ArcGIS to produce overlays and geo-spatial analysis.

* Develop a model and beta test that model over the next year by identifying markets for 4 or 5 UK products in the United States.

* Identify datasets and output values.

* Develop correlation matrices to identify features using principal component analysis and non-negative matrix factorization. Answer the question of what dimensions have variability and are responsible for variation.

* PCA will identify suites of indicators that could be used, which is much more systematic than the current approaches being used.

* Correlation coefficients can be used to determine how to weight features in the index (model?)

* Develop composite measures also known as an index.

## Evaluation

---

> Describe the methodology you plan to use to evaluate how well your project has achieved the stated goal.  Be specific.  What data will you use?  What test will you run?  What quantitative metric will you use to measure success?  etc.  This is a very important and often over-looked aspect of a project plan – please think about it before finalizing your project selection.

* What is the experiment design?

* How will you measure performance?

* What will you compare your results to?

* Mention the Lord Kelvin quote "if you can not measure it, you can not improve it"

* We should be able to systematically create heat maps that indicate where the best markets be for certain products and the amount of economic value that can be extracted from them. Or do we just need to be able to force rank the markets and know that this one should be prioritized over another. How do you determine the optimal set of markets to target given limited resources.