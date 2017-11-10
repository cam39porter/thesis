# [Self Organizing Maps](https://en.wikipedia.org/wiki/Self-organizing_map)

## [A Review of Self-Organizing Map Applicationsin Meteorology and Oceanography](http://cdn.intechopen.com/pdfs/13302/InTech-A_review_of_self_organizing_map_applications_in_meteorology_and_oceanography.pdf)

> Coupled ocean-atmosphere science steadily advances with increasing information obtained from long-records of in situ observations, multiple-year archives of remotely sensed satellite images, and long time series of numerical model outputs. However, the percentage of data actually used tends to be low, in part because of a lack of efficient and effective analysis tools. [pg. 253]

* This is the same problem we are trying to solve

> The Self-Organizing Map (SOM), also known as Kohonen Map or Self-Organizing Feature Map, is an unsupervised neural network based on competitive learning (Kohonen, 1988, 2001; Vesanto & Alhoniemi, 2000). [pg. 253]

* This is a tool that we could use as well.

* It projects high dimensional data into low (2) dimensional space

> Because it preserves the neighborhood relations of the input data, the SOM is a topology-preserving technique [pg. 254]

* What does this mean for geospatial data

> SOM applications are becoming increasingly useful in geosciences (e.g., Liu and Weisberg, 2005), because it has been demonstrated to be an effective feature extraction technique that has many advantages over conventional data analysis method (e.g., Liu et al. 2006a). [pg. 255]

* SOM is often used in conjunction with K means or other unsupervised clustering mechanisms

> Multiple variables can be simultaneously handled in the SOM algorithm. Thus, the SOM is often used to examine the patterns of co-variability among several meteorological variables. Cavazos (2000) [pg. 255]

* Can we use SOM to perform feature extraction?

> The SOM is often used as a feature extraction method in cloud classification of satellite imagery. [pg. 257]

* Can we use some for feature extraction of other satellite images.

> The empirical orthogonal function (EOF) or principal component analysis (PCA) method is often used to extract patterns of variability in meteorological and oceanographic data. [pg. 261]

* How can this be used along side PCA?

> Liu & Weisberg (2005, 2007) used both EOF and SOM to extract ocean current patterns from the same data set (a long time series of velocity from a moored ADCP array), and found that the SOM patterns were more accurate and intuitive than the leading mode EOF patterns. The asymmetric features (in current strength, coastal jet location and velocity vector veering with depth) between upwelling and downwelling current patterns extracted by the (nonlinear) SOM were not readily revealed by the (linear) EOF (Liu & Weisberg, 2005). [pg. 261]

> The SOM was shown to extract the patterns of a linear progressive sine wave as the EOF did, even with noise added. [pg. 261]

* SOM is able to find nonlinear relationships that PCA cannot. It is also more robust.

> These advantages, of course, must be tempered by the fact that PCA uses an empirical vector space that spans the data space, hence aspects of the data space may be quantitatively reconstructed from the vector space (Liu, 2006; Liu & Weisberg, 2005) [pg. 261]

* SOM has some disadvantages relative to PCA though

> They found that the SOM determined the cluster membership more accurately than the K-means method and Ward’s method. K-means somehow is a subset of SOM, meaning that SOM reduces to k-means for particular choice of parameters (e.g., Lobo, 2009), and therefore it is natural to assume that SOM is more flexible than k-means (Solidoro et al., 2007) [pg. 261]

* K-means is a subset of SOM

> SOM new users may be perplexed by the choice of SOM parameters, because different parameter choices may result in different SOM patterns. This challenge may prevent some potential new users from pursuing further SOM applications. [pg. 262]

* Since we are looking for predictive, not explanatory power, this may not be a concern for our work

> In recent years, the SOM has gained its popularity in meteorology and oceanography community as a powerful pattern recognition and feature extraction method. The SOM analysis has been applied to a variety of data sets in meteorology and oceanography, such as in situ long time series, remotely sensed satellite and radar data, and numerical model output.

* Some is popular for its effectiveness and ability to be used with a variety of data

## [Multidimensional Perceptual Map for Project Prioritization and Selection](https://www.slideshare.net/jgzheng/multidimensional-perceptual-map)

* perceptual maps are commonly used for market segmentation or project portfolio management [pg. 6]

> A high level overview visualization that shows the distribution and relative positioning of all objects based on multiple attributes. It is the basis to map analysis targets.

* Continue research on author Guangzhi Zheng => ['Multidemensional perceptual map approach to project prioritization and selection'](https://www.researchgate.net/publication/264935893_A_Multidimensional_Perceptual_Map_Approach_to_Project_Prioritization_and_Selection)

* Continue research on author Guangzhi Zheng => ['Multidemensional and Visual Exploration approach to project portfolio management'](http://scholarworks.gsu.edu/cis_diss/34/)