-- Lists all Glam rock bands ranked by longevity up to 2024
SELECT band_name,
       IFNULL(NULLIF(split, ''), 2024) - formed AS lifespan
FROM metal_bands
WHERE FIND_IN_SET('Glam rock', style) > 0
ORDER BY lifespan DESC;
