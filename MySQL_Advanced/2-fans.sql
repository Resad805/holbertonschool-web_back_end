-- Rank country origins of bands by total number of fans
-- Computes sum of fans per origin and orders descending

SELECT origin, SUM(fans) AS nb_fans
FROM metal_bands
GROUP BY origin
ORDER BY nb_fans DESC;
