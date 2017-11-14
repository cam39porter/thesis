# Project Proposal

## Title

* **Name**: Cameron Porter

* **Class**: 2016

* **Title**: *Identification of United Kingdom Export Markets Post-Brexit via Systematic Weak Signal Analysis*

* **Advisors**: Christopher M. Moretti & Gregory E. van der Vink

## Motivation and Goal

* On June 23, 2016, in what has come to he known as the *Brexit Referendum*, the United Kingdom (UK) voted to leave the European Union (EU) [(HM Treasury, 5)](#treasury-brexit).

* The effect of Brexit on the UK's trade and economy is one of the most pressing debates as we approach the final day of UK's membership in the EU, March 29, 2019.

* There is a consensus in the academic community that in the long run, Brexit will have a negative effect on trade, although the extent of the effect is uncertain [(Sampson, 164)](#sampson-brexit).

* The purpose of this project is not to analyze the economics of Brexit.

* The purpose of this project is to design a systematic way of quantitatively analyzing potential markets for UK products in order to optimize the UK's Department of International Trade's effort to boost UK net trade in the face of a seemingly inevitable decline.

* Our goal is to design an automated *weak signal analysis* system, capable of dynamic data augmentation, for identifying markets for up to five UK products/services in the United States (US).

## Problem Background and Related Work

### Economics of Brexit

> Academics, private firms, and government agencies have weighed in on the economics of Brexit. Overall, the analysis focuses on two aspects of Brexit: what will be the macro level effects on the UK's economy, and what is the desired nature of relations between the EU and UK post Brexit.

* [(HM Treasury)](#treasury-brexit)

* [(Carl)](carl-brexit)

* [(Sampson)](#sampson-brexit)

* [IMG Forum Expert Panel Survey on Brexit I](http://www.igmchicago.org/surveys/brexit-2)

* [IMG Forum Expert Panel Survey on Brexit II](http://www.igmchicago.org/surveys/brexit-ii)

* In terms of small and medium size enterprises (SMEs), the UK's share of exports is in the bottom five across Europe [(WorldFirst, 5)](#worldfirst-brexit).

* One of the primary factors deterring UK SMEs from exporting is sense that their product or service will not be suitable for a particular market [(WorldFirst, 6)](#worldfirst-brexit).

* Although it may be assumed that weakening pound will increase exports, the global nature of UK supply chains combined with the potential for increased tariffs means exporters could become less competitive [(WorldFirst, 12)](#worldfirst-brexit).

* Due to the price inelasticity of UK goods and services abroad, quality and brand are two of the most important factors in determining their success [(WorldFirst, 12)](#worldfirst-brexit).

* More than half of SME exports go to the US [(WorldFirst, 16)](#worldfirst-brexit).

* "SMEs in the IT and Communications sectors are much more likely to have plans to export (23% had such plans). Similarly, across the Professional and Scientific Service industries, 11% of SMEs said that they have such plans. This still leaves a considerable number of businesses across the UK with no intention to export" [(WorldFirst, 19)](#worldfirst-brexit).

### Market Segmentation

> *Market segmentation* describes the process of dividing potential consumers into particular groups based on shared characteristics. The characteristics shared by certain segments will make them in expectation a better *target market*. There are different types of market segmentation. Ours falls into the category of *geodemographic segmentation*. Our system can be considered a *geographic information system*.

* [(Grekousis)](#grekousis-segmentation)

* [Esri Demographics](http://www.esri.com/data/esri_data)

* [PSYTE HD: Market segmentation system for Canada](https://www.pitneybowes.com/us/data/demographic-data/psyte-hd-canada.html)

### Weak Signal Analysis

> There are *five V's* of big data: volume, velocity, variety, variability, and value [(Jain)](#jain-data). Weak signals are a phenomenon of ecosystems with many interacting parts. Observing these ecosystems and performing weak signal analysis requires ingesting diverse streams of data and then systematically looking at how these data streams interact with one another to produce strong predictive indicators. *Strong signals*, by contrast, arise from a single source. The result of our weak signal analysis will be a suite of indicators, no one of which is predictive of our desired output, but in combination provide valuable insight.

* [How to Make Sense of Weak Signals](http://sloanreview.mit.edu/article/how-to-make-sense-of-weak-signals/)

* [The strategic strength of weak signal analysis](http://www.sciencedirect.com/science/article/pii/S0016328711002564)

* [The strongness of weak signals: self-reference and paradox in anticipatory systems](https://link.springer.com/article/10.1007/s40309-016-0085-1)

## Approach

### Conceptual Framework

> This section describes the operating lense for this project, including the assumptions being made and theory behind our methodology.

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

### Taxonomy

> This section lays out the components of our methodology in a schematic form.

### Algorithm

> This section describes the algorithm behind the methodology in mathematical form.

## Plan

### Product / Service Selection

> In order to test our methodology, we have selected five UK products/services. In order to qualify for selection, these products/services must already be successfully exported to the US. This may seem counterintuitive, but the purpose is to hone the focus of this project. The goal of the project is to identify prime markets for UK products/services. By restricting our selection to those already being exported to the US, we are mitigating the importance of other influential economic and political factors on export success. These factors include quotas, tariffs, and regulatory compliance. We would also like to note our reasoning for selecting not only products, but services as well. The purpose of the project is to boost UK's net trade. This can be done by decreasing imports or increasing exports. Since products are often made from imported components, the value in terms net trade from exporting them is partially offset by the import cost of the components. However, since services have no imported components, exporting them has a *purely* positive effect on net trade.

<!-- * TODO: Why store already exporting via e-commerce would benefit from brick and mortar stores. -->

* [Brompton](https://www.brompton.com/)

* [Rapha](http://www.rapha.cc/us/en_US/)

* [Vulpine](http://www.vulpine.cc/uk/mens/new)

<!-- TODO: Financial Service -->

<!-- TODO: Service -->

### Datasets

> We have already identified a number of potential data sets from a variety of providers including, Princeton, Kaggle, Amazon, Uber, and the US Government. Each of these datasets has a location attribute. What follows is a selection of them.

#### Census

> Census data can provide demographic insights useful for geodemographic market segmentation.

* [Sage Stats](http://library.princeton.edu/resource/4453) is a collection of US state rankings on variety of topics.

* [American FactFinder](http://library.princeton.edu/resource/4640) combines data from the US decennial census, the American Community Survey, and more.

* [US Income Tax Data](https://www.kaggle.com/wpncrh/zip-code-income-tax-data-2014) provides data on the income by zip code.

* [US Permanent Visa Applications](https://www.kaggle.com/jboysen/us-perm-visas) provides data on where Visa applications originate.

* [IRS 990 Filings](https://aws.amazon.com/public-datasets/irs-990/) provides data on nonprofit tax filings.

* [Open Address](http://results.openaddresses.io/) provides street names, house numbers, and postal codes that can be combines with geographic coordinates.

* [World Cities Database](https://www.kaggle.com/max-mind/world-cities-database) provides data to convert country and city names to geographic coordinates.

* [Homlessness in the United States](https://www.kaggle.com/adamschroeder/homelessness) provides data on the rates of homelessness in cities.

#### Housing

> The cost of living is an important characteristic of populations.

* [Census of Population and Housing](http://library.princeton.edu/resource/5016) contains useful demographic information.

* [Zillow Rent Index](https://www.kaggle.com/zillow/rent-index) provides data on the median estimated monthly rental price for given areas.

* [AirBnB Listings](http://insideairbnb.com/get-the-data.html) provides data on neighborhoods and rental prices in select US cities.

* [US Gross Rent Statistics](https://www.kaggle.com/goldenoakresearch/acs-gross-rent-us-statistics) provides gross rent data across the US.

#### Trade

> US trade data can be useful in evaluating the effectiveness of our methodology.

* [Wiser Trade](http://library.princeton.edu/resource/4433) is an international trade database that provides data on U.S. exports and imports by customs district and port.

* [City Data](http://library.princeton.edu/resource/title/city-data) provides a city by city guide to product costs and business expenses.

#### Retail

> The retail stores already located in a given city can provide insights into the consumption preferences of the population.

* [Whole Foods](https://www.wholefoodsmarket.com/stores/list/state) is a high end grocery store whose locations tend to be in close proximity to affluent areas.

* [Starbucks Locations](https://www.kaggle.com/starbucks/store-locations) provides insight into the prevalence of Starbucks in US cities.

* [Breweries & Brew Pubs in the USA](https://www.kaggle.com/datafiniti/breweries-brew-pubs-in-the-usa) provides data on the location of breweries.

* [Restaurants on YellowPages.com](https://www.kaggle.com/PromptCloudHQ/restaurants-on-yellowpagescom) provides data on the type and quality of restaurants.

#### Culture

> We can attempt to quantify the culture of cities.

* [Museums, Aquariums, and Zoos](https://www.kaggle.com/imls/museum-directory) provides location data on these entertainment entities.

* [World University Rankings](https://www.kaggle.com/mylesoneill/world-university-rankings) provides data on the location of top universities.

* [TED Talk Locations](https://www.kaggle.com/rounakbanik/ted-talks) provides data on the location of TED events.

* [KickStarter](https://www.kaggle.com/socathie/kickstarter-project-statistics) provides data on where people who seek funding on the platform come from.

#### Energy

> The type and amount of energy consumed can be used to characterize cities.

* [United States Energy Census](https://www.kaggle.com/lislejoem/us_energy_census_gdp_10-14) provides data on the type and amount of energy for locations across the US.

#### Infrastructure

> The quality of infrastructure can provide insight into the cities priorities.

* [Hospital Ratings](https://www.kaggle.com/center-for-medicare-and-medicaid/hospital-ratings) provides data on the quality of health care.

#### Transportation

> Where people go and how they get there are important characteristics that distinguish populations.

* [Uber Movement Data](https://movement.uber.com/cities?lang=en-US) captures the movement patterns of cities around the world.

* [Move Hub Rankings](https://www.kaggle.com/blitzr/movehub-city-rankings) provides data on how easy it is to get around various cities.

* [Airport, Train Stations, and Ferry Terminals](https://www.kaggle.com/open-flights/airports-train-stations-and-ferry-terminals) provides data on the locations of transportation hubs in the US.

* [Amtrak](https://catalog.data.gov/dataset/amtrak-rail-stations-national) provides data on the location of Amtrak terminals.

* [Major Ports](https://catalog.data.gov/dataset/major-ports-national) provides data on the location of major ports in the US.

* [Freight Analysis Framework](https://catalog.data.gov/dataset/freight-analysis-framework-network-national) provides data for modeling freight in US.

* [Navigable Waterways](https://catalog.data.gov/dataset/navigable-waterway-nodes-national-national-geospatial-data-asset-ngda-waterway-nodes) provides data on the location of navigable waterways in the US.

#### Jobs

> Where people work is an important demographic characteristic.

* [Jobs on Naukri.com](https://www.kaggle.com/PromptCloudHQ/jobs-on-naukricom) provides job postings data.

* [US Jobs on Monster.com](https://www.kaggle.com/PromptCloudHQ/us-jobs-on-monstercom) provides job postings data.

#### Political

> Data on politicians, in particular concerning the orientation and the special interest groups they support, can provide useful insights into the nature of their constituency.

* [CQ Congress Collection](http://library.princeton.edu/resource/5062) is database containing roll call votes by topic and special interest group scores.

* [CQ Political MoneyLine](http://library.princeton.edu/resource/5082) provides data on the flow of money through the US political system.

### System Architecture

> The system will have three primary components: a persistent storage layer, a virtual dataset layer, and an analysis layer.

* Persistent storage will come in a variety of forms depending on the structure of the data source. These potentially include `S3`, `MySQL`, and `Mongo`.

* Datasets will be *virtualized* using `Dremio`'s open source software. `Dremio` allows you to build virtual datasets that are created from queries on a variety of distinct data sources.

* This virtualized dataset will be an asset for any further analysis on this topic.

* The analysis layer is described below.

### Analysis and Presentation

> Analysis and model creation will be done primarily using Python and presentation with Javascript.

* For analysis, libraries such as `pandas`, `numpy`, and `scikit-learn`, as well as `keras` if neural networks are used. Jupyter notebooks will be used. These libraries will be used to build a weak signal analysis module.

* Heat maps can be produced using the `ArcGIS` Javascript API.

<!-- TODO: add SOM / MdPM here -->

## Evaluation

> There are two primary criteria for evaluating this project.

* To what extent are the indicators our methodology produces valuable in identifying potential markets for UK products in the US?

  * Backtesting could be used verify the value of the indicators we produce. This would require acquiring granular export data for one of a product/service. We could then analyze the correlation between our indicators and the success of a product/service in various markets.

* To what extent is the design of our systematic weak signal analysis flexible enough to be used to address different goals?

  * Answering this question will likely require a more qualitative analysis. Factors such as ease of integrating new datasets and ease of producing new indicators should be considered.

## Bibliography

* <a id='sampson-brexit' href='https://www.aeaweb.org/articles?id=10.1257/jep.31.4.163'>Sampson, Thomas. 2017. "Brexit: The Economics of International Disintegration". Journal of Economic Perspectives, 31(4): 163-84.</a>

* <a id='treasury-brexit' href='https://www.aeaweb.org/articles?id=10.1257/jep.31.4.163'>"HM Treasury analysis: the long-term economic impact of EU membership and the alternatives". London: HM Treasury, 2016. Print.</a>

* <a id='carl-brexit' href='https://www.aeaweb.org/articles?id=10.1257/jep.31.4.163'>Emmerson, Carl, et al. "Brexit and the UK's public finances". London: Institute for Fiscal Studies, 2016. Print.</a>

* <a id='grekousis-segmentation' href='http://www.sciencedirect.com/science/article/pii/S0143622811002256'>Grekousis, George, and Hatzichristos Thomas. "Comparison of Two Fuzzy Algorithms in Geodemographic Segmentation Analysis: The Fuzzy C-Means and Gustafson–Kessel  Methods." Applied Geography 34 (2012): 125-36. Web.</a>

* <a id='jain-data' href='https://www.ibm.com/blogs/watson-health/the-5-vs-of-big-data/'>Jain, Anil. "The 5 Vs of Big Data." Watson Health Perspectives. IBM, 07 June 2017. Web.</a>

* <a id='worldfirst-brexit' href=''>"Thinking Global: The Route to UK Exporting Success". WorldFirst. October 2016. Print.</a>

<a id='' href=''></a>
