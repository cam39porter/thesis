# Project Proposal

## Title

---

* **Name**: Cameron Porter

* **Class**: 2016

* **Title**: *Identification of United Kingdom Export Markets Post-Brexit via Systematic Weak Signal Analysis*

* **Advisors**: Christopher Moretti & Greg van der Vink

## Motivation and Goal

---

* On June 23, 2016, in what has come to he known as the *Brexit Referendum*, the United Kingdom (UK) voted to leave the European Union (EU).

* The effect of Brexit on the UK's trade and economy is one of the most pressing debates as we approach the final day of UK's membership in the EU, March 29, 2019.

* There is a consensus in the academic community that in the long run, Brexit will have a negative effect on trade, although the extent of the effect is uncertain. [CITE](https://www.aeaweb.org/articles?id=10.1257/jep.31.4.163)

* The purpose of this project is not to analyze the economics of Brexit.

* The purpose of this project is to design a systematic way of quantitatively analyzing potential markets for UK products in order to optimize the UK's Department of International Trade's effort to boost UK exports in the face of a seemingly inevitable decline.

* Our goal is to design an automated *weak signal analysis* system, capable of dynamic data augmentation, for identifying markets for up to five UK products in the United States (US).

## Problem Background and Related Work

---

### Economics of Brexit

> Academics, private firms, and government agencies have weighed in on the economics of Brexit. Overall, the analysis focuses on two aspects of Brexit: what will be the macro level effects on the UK's economy, and what is the desired nature of relations between the EU and UK post Brexit.

* [HM Treasury analysis: the long-term economic impact of EU membership and the alternatives](https://www.gov.uk/government/publications/hm-treasury-analysis-the-long-term-economic-impact-of-eu-membership-and-the-alternatives)

* [Brexit and UK's Public Finances](https://www.ifs.org.uk/uploads/publications/comms/r116.pdf)

* [Brexit: The Economics of International Disintegration](https://www.aeaweb.org/articles?id=10.1257/jep.31.4.163)

* [IMG Forum Expert Panel Survey on Brexit I](http://www.igmchicago.org/surveys/brexit-2)

* [IMG Forum Expert Panel Survey on Brexit II](http://www.igmchicago.org/surveys/brexit-ii)

### Market Segmentation

> *Market segmentation* describes the process of dividing potential consumers into particular groups based on shared characteristics. The characteristics shared by certain segments will make them in expectation a better *target market*. There are different types of market segmentation. Ours falls into the category of *geodemographic segmentation*. Our system can be considered a *geographic information system*.

* [Esri Demographics](http://www.esri.com/data/esri_data)

* [PSYTE HD: Market segmentation system for Canada](https://www.pitneybowes.com/us/data/demographic-data/psyte-hd-canada.html)

### Weak Signal Analysis

> There *five V's* of big data: volume, velocity, variety, variability, and value. Weak signals are a phenomenon of ecosystems with many interacting parts. Observing these ecosystems and performing weak signal analysis requires ingesting diverse streams of data and then systematically looking at how these data streams interact with one another to produce strong predictive indicators. *Strong signals*, by contrast, arise from a single source.

* [How to Make Sense of Weak Signals](http://sloanreview.mit.edu/article/how-to-make-sense-of-weak-signals/)

* [The strategic strength of weak signal analysis](http://www.sciencedirect.com/science/article/pii/S0016328711002564)

* [The strongness of weak signals: self-reference and paradox in anticipatory systems](https://link.springer.com/article/10.1007/s40309-016-0085-1)

## Approach

---

* Our approach to identifying markets for UK products focuses on quantitative rigour and weak signal analysis to create ecosystem level insights.

* Quantitative rigour will be achieved by extracting salient features from data via established algorithms such as *Principle Component Analysis* (PCA) and *Non-Negative Matrix Factorization* (NMF). Clustering algorithms can also be used to identify interesting shared characteristics across markets. Using *correlation matrices* of these features with output variables, sets of features from disparate data sources can be integrated into a single indicator quantitatively.

* Unlike other methodologies that focus on the volume/value of data, we will be focusing on using data from a variety of sources (satellite imagery, amount of bike friendly lanes, number of Starbucks, average income, etc.). From this variety, we will inevitably find proxy measures that though not causal, are nonetheless predictive of what we are interested in.

* Much like in *ensemble learning* where a set of *weak learners* are used in conjunction to produce a strong model, we believe that by integrating weak signals from a variety of datasets, we can eliminate noise to capture subtle but powerful indicators. These indicators would otherwise be overlooked by methodologies not focused on the complex interplay that creates the salient characteristics of ecosystems.

* In order to effectively carry out this methodology, we must recognize that we are no longer data limited, but analysis limited. However since the methodology is quantitative, we can design systems to carry it out on our behalf.

* The system we design will have three key features.

  1. It must be able to operate on a variety of data sources simultaneously as if they were a single source.
  1. It must be able to carry out feature extraction and weak signal analysis.
  1. It must be able to dynamically integrate new data sources.

* Using a variety of data sources, weak signal analysis, and an automated system, we hope to be able to create heat maps identifying potential markets for UK products.

## Plan

---

### Datasets

> We have already identified a number of potential data sets from a variety of providers including, Princeton, Kaggle, Amazon, Uber, and the US Government. Each of these datasets has a location attribute. What follows is a selection of them.

#### Princeton

* [Sage Stats](http://library.princeton.edu/resource/4453)

* [CQ Congress Collection](http://library.princeton.edu/resource/5062)

* [American FactFinder](http://library.princeton.edu/resource/4640)

* [CQ Political MoneyLune](http://library.princeton.edu/resource/5082)

#### Amazon

* [US Census ACS PUMS](https://aws.amazon.com/public-datasets/us-census-acs-pums/)

* [Landsat](https://aws.amazon.com/public-datasets/landsat/)

#### Kaggle

* [Move Hub Rankings](https://www.kaggle.com/blitzr/movehub-city-rankings)

* [Open Address](https://openaddresses.io/)

* [AirBnB](http://insideairbnb.com/get-the-data.html)

* [Restaurants on YellowPages.com](https://www.kaggle.com/PromptCloudHQ/restaurants-on-yellowpagescom)

* [Airport, Train Stations, and Ferry Terminals](https://www.kaggle.com/open-flights/airports-train-stations-and-ferry-terminals)

* [US Permanent Visa Applications](https://www.kaggle.com/jboysen/us-perm-visas)

* [Ted Talk Locations](https://www.kaggle.com/rounakbanik/ted-talks)

* [US Jobs on Monster.com](https://www.kaggle.com/PromptCloudHQ/us-jobs-on-monstercom)

* [US Election Data](https://www.kaggle.com/benhamner/2016-us-election)

* [US Household Incomes](https://www.kaggle.com/goldenoakresearch/us-household-income-stats-geo-locations)

* [KickStarter](https://www.kaggle.com/socathie/kickstarter-project-statistics)

* [Starbucks Locations](https://www.kaggle.com/starbucks/store-locations)

#### [Uber Movement Data](https://movement.uber.com/cities?lang=en-US)

#### Government

* [Amtrak](https://catalog.data.gov/dataset/amtrak-rail-stations-national)

* [Major Ports](https://catalog.data.gov/dataset/major-ports-national)

* [Freight Analysis Framework](https://catalog.data.gov/dataset/freight-analysis-framework-network-national)

* [Navigable Waterways](https://catalog.data.gov/dataset/navigable-waterway-nodes-national-national-geospatial-data-asset-ngda-waterway-nodes)

### System Architecture

> The system will have three primary components: a persistent storage layer, a virtual dataset layer, and an analysis layer.

* Persistent storage will come in a variety of forms depending on the structure of the data source. These potentially include `S3`, `MySQL`, and `Mongo`.

* Datasets will be virtualized using `Dremio`'s open source software. `Dremio` allows you to build virtual datasets that are created from queries on a variety of distinct data sources.

* The analysis layer is described below.

### Analysis and Presentation

> Analysis and model creation will be done primarily using Python and presentation with Javascript.

* For analysis, libraries such as `pandas`, `numpy`, `scikit-learn`, and as `keras` will be used. Jupyter notebooks will be used.

* Heat maps can be produced using the `ArcGIS` Javascript API.

## Evaluation

---

> There are two primary criteria for evaluating this project.

* Are the indicators our methodology produces valuable in identifying potential markets for UK products in the US?

* Is the system we designed flexible enough to be used to create new indicators with different datasets to address other problems that would benefit from systematic weak signal analysis?
