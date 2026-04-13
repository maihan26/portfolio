//Import Calgary boundaries (shapefile)
var aoi = ee.FeatureCollection("projects/project-sds-473702/assets/Calgary");
// Check the Calgary boundaries (AOI) on the map using the imported shapefile
Map.centerObject(aoi, 10);
Map.addLayer(aoi, {}, 'AOI');

//Print the result - The geometry and one feature
print(aoi);
print(aoi.first());

// Define a period for image search with startDate and endDate (2000, 2005, 2010, 2015, 2020, and 2025)
var startDate00 = '2000-05-01';
var endDate00 = '2000-09-30';

var startDate05 = '2005-05-01';
var endDate05 = '2005-09-30';

var startDate10 = '2010-05-01';
var endDate10 = '2010-09-30';

var startDate15 = '2015-05-01';
var endDate15 = '2015-09-30';

var startDate20 = '2020-05-01';
var endDate20 = '2020-09-30';

var startDate25 = '2025-05-01';
var endDate25 = '2025-09-30';

// Apply scaling factors for Landsat 5,7, and 8
function applyScaleFactors(image) {
  var opticalBands = image.select('SR_B.').multiply(0.0000275).add(-0.2);
  return image.addBands(opticalBands, null, true);
}

// Call Landsat 5 TM Surface Reflectance collection, create a composite limited into Calgary boundary and time frame
function L5_00_composite (start, end) { 
return ee.ImageCollection('LANDSAT/LT05/C02/T1_L2')
.filterBounds(aoi)
.filterDate(start, end)
.filter(ee.Filter.lt("CLOUD_COVER", 20))
.map(applyScaleFactors)
.map(cloudMaskLandsat5_7)
.map(function(i){ return i.clip(aoi); })
.median();
}

// Create visual display setting for Landsat 5 and 7
var L5_7_viz = {
  bands: ['SR_B3', 'SR_B2', 'SR_B1'],
  min: 0.0,
  max: 1.0,
};

// Create Landsat 5 and 7 cloud mask, filtering out cloud, shadow, and snow
function cloudMaskLandsat5_7(image){
  var qa = image.select('QA_PIXEL');  
  var cloud = 1 << 1;
  var shadow = 1 << 2;
  var snow = 1 << 4;
  
  var mask = qa.bitwiseAnd(cloud).eq(0)
    .and(qa.bitwiseAnd(shadow).eq(0))
    .and(qa.bitwiseAnd(snow).eq(0));
  return image.updateMask(mask);
}

// Call Landsat 5 TM Surface Reflectance collection, create a composite limited into Calgary boundary and time frame (2005)
function L5_05_composite (start, end) {
return ee.ImageCollection('LANDSAT/LT05/C02/T1_L2')
.filterBounds(aoi)
.filterDate(start, end)
.filter(ee.Filter.lt("CLOUD_COVER", 20))
.map(applyScaleFactors)
.map(cloudMaskLandsat5_7)
.map(function(i){ return i.clip(aoi); })
.median();
}

// Apply scaling factors for Landsat 5,7, and 8
function applyScaleFactors(image) {
  var opticalBands = image.select('SR_B.').multiply(0.0000275).add(-0.2);
  return image.addBands(opticalBands, null, true);
}
var L5_00 = L5_00_composite(startDate00, endDate00);
var L5_05 = L5_05_composite(startDate05, endDate05);

// Landsat 5 Map Layers
Map.centerObject(aoi, 10);
Map.addLayer(L5_00, L5_7_viz, 'L5 2000 (RGB)', false);
Map.addLayer(L5_05, L5_7_viz, 'L5 2005 (RGB)', true);

// Print Landsat 5
print('L5 2000', L5_00);
print('L5 2005', L5_05);

//Repeat the same process to create Landsat 7 ETM+ Surface Reflectance composite for 2010

function L7_10_composite (start, end) { 
return ee.ImageCollection('LANDSAT/LE07/C02/T1_L2')
.filterBounds(aoi)
.filterDate(start, end)
.filter(ee.Filter.lt("CLOUD_COVER", 20))
.map(applyScaleFactors)
.map(cloudMaskLandsat5_7)
.map(function(i){ return i.clip(aoi); })
.median();
}

var L7_10 = L7_10_composite(startDate10, endDate10);

// Landsat 7 Map Layers
Map.centerObject(aoi, 10);
Map.addLayer(L7_10, L5_7_viz, 'L7 2010 (RGB)', false);

// Print Landsat 7
print('L7 2010', L7_10);


//Repeat the same process to create Landsat 8 OLI Surface Reflectance composite for 2015, 2020, and 2025
// Landsat 8 with 2015 timeframe
function L8_15_composite (start, end) { 
return ee.ImageCollection('LANDSAT/LC08/C02/T1_L2')
.filterBounds(aoi)
.filterDate(start, end)
.filter(ee.Filter.lt("CLOUD_COVER", 20))
.map(applyScaleFactors)
.map(cloudMaskLandsat8)
.map(function(i){ return i.clip(aoi); })
.median();
}
// Create Landsat 8 cloud mask
function cloudMaskLandsat8(image8){
  var qa8 = image8.select('QA_PIXEL');  
  var cloud8 = 1 << 3;
  var shadow8 = 1 << 4;
  var snow8 = 1 << 5;
  
  var mask8 = qa8.bitwiseAnd(cloud8).eq(0)
    .and(qa8.bitwiseAnd(shadow8).eq(0))
    .and(qa8.bitwiseAnd(snow8).eq(0));
  return image8.updateMask(mask8);
}
// Landsat 8 with 2020 timeframe
function L8_20_composite (start, end) { 
return ee.ImageCollection('LANDSAT/LC08/C02/T1_L2')
.filterBounds(aoi)
.filterDate(start, end)
.filter(ee.Filter.lt("CLOUD_COVER", 20))
.map(applyScaleFactors)
.map(cloudMaskLandsat8)
.map(function(i){ return i.clip(aoi); })
.median();
}

// Landsat 8 with 2025 timeframe
function L8_25_composite (start, end) { 
return ee.ImageCollection('LANDSAT/LC08/C02/T1_L2')
.filterBounds(aoi)
.filterDate(start, end)
.filter(ee.Filter.lt("CLOUD_COVER", 20))
.map(applyScaleFactors)
.map(cloudMaskLandsat8)
.map(function(i){ return i.clip(aoi); })
.median();
}
var L8_15 = L8_15_composite(startDate15, endDate15);
var L8_20 = L8_20_composite(startDate20, endDate20);
var L8_25 = L8_25_composite(startDate25, endDate25);

var L8_viz = {
  bands: ['SR_B4', 'SR_B3', 'SR_B2'],
  min: 0.0,
  max: 1.0,
};

// Landsat 8 Map Layers
Map.centerObject(aoi, 10);
Map.addLayer(L8_15, L8_viz, 'L8 2015 (RGB)', true);
Map.addLayer(L8_20, L8_viz, 'L8 2020 (RGB)', false);
Map.addLayer(L8_25, L8_viz, 'L8 2025 (RGB)', false);

// Print Landsat 8
print('L8 2015', L8_15);
print('L8 2020', L8_20);
print('L8 2025', L8_25);
