# Composite Measure Creation

> Below I have summarized how we can approach creating a composite indictor and heat maps. The approach is based largely on the document “Handbook on Constructing Composite Indicators: Methodology and User Guide” which I have appended below. I have referenced the pages and examples with section and page numbers, as appropriate.

We are producing a composite measure for the “likelihood of supporting a successful BrewDog”
We have areas that are known to BrewDog locations which we will use to identify the characteristics that are supportive of a BrewDog.
The composite measure will be calculated for each UK census unit.

The composite measure (B) will consist of a series of indicators (I1, I2, I3, etc.) that are associated (either by themselves or in combination) with populations that are known to support BrewDog.  
The indicators will be weighted (W) according to the strength of the association.  
For each location, the indicators will remain the same, but the weightings will be different, based on the value of the indicator for that location.
So, for each province, B = Sum (I1(W1), I2(W2), I3W3, etc.).  
The values will be used to produce a heat map for UK at the census resolution.

The first task is to decide which indicators will be used for the composite measure.  
We begin with the locations that are known to have BrewDogs.
We normalize the data using either the min-max method or the z-score method.
Z-score method is Section 5.2, page 84. Min-Max is Section 5.3, page 85.
We produce a correlation matrix and remove the indicators that are redundant — e.g. have correlation coefficients greater than 0.9 or -0.9

We run PCA on the normalized data for all the indicators for the locations that have BrewDogs.  
We retain for the analysis, the subset of principal components that account for the largest amount of variance.  
We use the scree plot to identify those principal components, but typically they have eigenvalues greater than 1 and the combined subset is responsible for most (~90%) of the variance. This is typically ~3-4 of the principal components. The analysis is described in Section 4.1 (page 63), Section 4.2 (page 69), and Section 6.1 (page 89).

After we have selected the Principal Components, we perform a rotation (varimax rotation). As stated in the paragraph below Table 16 on page 90, the rotation is used to minimize the number of individual indicators. We then use the squared factor loadings scaled to a unity sum, as illustrated in Table 17 (page 90). The result is a list of individual indicators with relative weightings (as shown in the PC column of Table 18).

Now that we have the indicators we are going to use, and their relative weightings, we can calculate the composite measure for each location by inserting the location values for each of the selected indicators with the appropriate relative weighting.

For the heat maps, we assign each composite value a color, based on the distribution of values, selecting meaningful breaks.
