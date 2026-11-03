ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32611").setExtent([-1768510.754398, -175752.657474, 9831280.184641, 5977046.504636]);
var wms_layers = [];


        var lyr_YandexSatellite_0 = new ol.layer.Tile({
            'title': 'Yandex Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="">Yandex Satellite</a>',
                url: 'https://core-sat.maps.yandex.net/tiles?l=sat&v=3.1025.0&x={x}&y={y}&z={z}&scale=1&lang=ru_RU'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_ESRISatelliteArcGISWorld_Imagery_2 = new ol.layer.Tile({
            'title': 'ESRI Satellite (ArcGIS/World_Imagery)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_BingMapsSatelliteImagery_3 = new ol.layer.Tile({
            'title': 'Bing Maps Satellite Imagery',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://t0.tiles.virtualearth.net/tiles/a{q}.jpeg?g=685&mkt=en-us&n=z'
            })
        });

        var lyr_RRZEOpenStreetMapStandardHD_4 = new ol.layer.Tile({
            'title': 'RRZE OpenStreetMap Standard HD',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://osm.rrze.fau.de/osmhd/{z}/{x}/{y}.png'
            })
        });

        var lyr_NightEarthNightMap_5 = new ol.layer.Tile({
            'title': 'NightEarth NightMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://www.nightearth.com/nightmap/nightmap2012/{z}/{x}/{-y}.webp'
            })
        });
var format_linea_6 = new ol.format.GeoJSON();
var features_linea_6 = format_linea_6.readFeatures(json_linea_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32611'});
var jsonSource_linea_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_linea_6.addFeatures(features_linea_6);
var lyr_linea_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_linea_6, 
                style: style_linea_6,
                popuplayertitle: 'linea',
                interactive: true,
                title: '<img src="styles/legend/linea_6.png" /> linea'
            });
var format_puntos_7 = new ol.format.GeoJSON();
var features_puntos_7 = format_puntos_7.readFeatures(json_puntos_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32611'});
var jsonSource_puntos_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_puntos_7.addFeatures(features_puntos_7);
var lyr_puntos_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_puntos_7, 
                style: style_puntos_7,
                popuplayertitle: 'puntos',
                interactive: true,
                title: '<img src="styles/legend/puntos_7.png" /> puntos'
            });
var format_poligono_8 = new ol.format.GeoJSON();
var features_poligono_8 = format_poligono_8.readFeatures(json_poligono_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32611'});
var jsonSource_poligono_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poligono_8.addFeatures(features_poligono_8);
var lyr_poligono_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_poligono_8, 
                style: style_poligono_8,
                popuplayertitle: 'poligono',
                interactive: true,
                title: '<img src="styles/legend/poligono_8.png" /> poligono'
            });
var lyr_geobcsur_9 = new ol.layer.Image({
        opacity: 1,
        
    title: 'geo bc sur<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/geobcsur_9.png",
            attributions: ' ',
            projection: 'EPSG:32611',
            alwaysInRange: true,
            imageExtent: [687123.503134, 3108378.169269, 938706.878612, 3278779.688763]
        })
    });
var lyr_geobccentro_10 = new ol.layer.Image({
        opacity: 1,
        
    title: 'geo bc centro<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/geobccentro_10.png",
            attributions: ' ',
            projection: 'EPSG:32611',
            alwaysInRange: true,
            imageExtent: [543981.227315, 3240232.518127, 797599.811405, 3433571.327461]
        })
    });
var lyr_geobcnorte_11 = new ol.layer.Image({
        opacity: 1,
        
    title: 'geo bc norte<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/geobcnorte_11.png",
            attributions: ' ',
            projection: 'EPSG:32611',
            alwaysInRange: true,
            imageExtent: [482505.994998, 3427601.641118, 767043.263634, 3623606.062737]
        })
    });
var lyr_geotj_12 = new ol.layer.Image({
        opacity: 1,
        
    title: 'geo tj<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/geotj_12.png",
            attributions: ' ',
            projection: 'EPSG:32611',
            alwaysInRange: true,
            imageExtent: [482500.869967, 3578541.863265, 537243.832900, 3605596.998495]
        })
    });
var format_redgeodesicadetijuana_13 = new ol.format.GeoJSON();
var features_redgeodesicadetijuana_13 = format_redgeodesicadetijuana_13.readFeatures(json_redgeodesicadetijuana_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32611'});
var jsonSource_redgeodesicadetijuana_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_redgeodesicadetijuana_13.addFeatures(features_redgeodesicadetijuana_13);
var lyr_redgeodesicadetijuana_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_redgeodesicadetijuana_13, 
                style: style_redgeodesicadetijuana_13,
                popuplayertitle: 'red geodesica de tijuana',
                interactive: true,
                title: '<img src="styles/legend/redgeodesicadetijuana_13.png" /> red geodesica de tijuana'
            });
var format_nuevosdttosfederales2023_14 = new ol.format.GeoJSON();
var features_nuevosdttosfederales2023_14 = format_nuevosdttosfederales2023_14.readFeatures(json_nuevosdttosfederales2023_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32611'});
var jsonSource_nuevosdttosfederales2023_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nuevosdttosfederales2023_14.addFeatures(features_nuevosdttosfederales2023_14);
var lyr_nuevosdttosfederales2023_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_nuevosdttosfederales2023_14, 
                style: style_nuevosdttosfederales2023_14,
                popuplayertitle: 'nuevos dttos federales 2023',
                interactive: true,
    title: 'nuevos dttos federales 2023<br />\
    <img src="styles/legend/nuevosdttosfederales2023_14_0.png" /> 1.00<br />\
    <img src="styles/legend/nuevosdttosfederales2023_14_1.png" /> 2.00<br />\
    <img src="styles/legend/nuevosdttosfederales2023_14_2.png" /> 3.00<br />\
    <img src="styles/legend/nuevosdttosfederales2023_14_3.png" /> 4.00<br />\
    <img src="styles/legend/nuevosdttosfederales2023_14_4.png" /> 5.00<br />\
    <img src="styles/legend/nuevosdttosfederales2023_14_5.png" /> 6.00<br />\
    <img src="styles/legend/nuevosdttosfederales2023_14_6.png" /> 7.00<br />\
    <img src="styles/legend/nuevosdttosfederales2023_14_7.png" /> 8.00<br />\
    <img src="styles/legend/nuevosdttosfederales2023_14_8.png" /> 9.00<br />' });
var format_distritoslocales2024_15 = new ol.format.GeoJSON();
var features_distritoslocales2024_15 = format_distritoslocales2024_15.readFeatures(json_distritoslocales2024_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32611'});
var jsonSource_distritoslocales2024_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_distritoslocales2024_15.addFeatures(features_distritoslocales2024_15);
var lyr_distritoslocales2024_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_distritoslocales2024_15, 
                style: style_distritoslocales2024_15,
                popuplayertitle: 'distritos locales 2024',
                interactive: true,
    title: 'distritos locales 2024<br />\
    <img src="styles/legend/distritoslocales2024_15_0.png" /> 1<br />\
    <img src="styles/legend/distritoslocales2024_15_1.png" /> 2<br />\
    <img src="styles/legend/distritoslocales2024_15_2.png" /> 3<br />\
    <img src="styles/legend/distritoslocales2024_15_3.png" /> 4<br />\
    <img src="styles/legend/distritoslocales2024_15_4.png" /> 5<br />\
    <img src="styles/legend/distritoslocales2024_15_5.png" /> 6<br />\
    <img src="styles/legend/distritoslocales2024_15_6.png" /> 7<br />\
    <img src="styles/legend/distritoslocales2024_15_7.png" /> 8<br />\
    <img src="styles/legend/distritoslocales2024_15_8.png" /> 9<br />\
    <img src="styles/legend/distritoslocales2024_15_9.png" /> 10<br />\
    <img src="styles/legend/distritoslocales2024_15_10.png" /> 11<br />\
    <img src="styles/legend/distritoslocales2024_15_11.png" /> 12<br />\
    <img src="styles/legend/distritoslocales2024_15_12.png" /> 13<br />\
    <img src="styles/legend/distritoslocales2024_15_13.png" /> 14<br />\
    <img src="styles/legend/distritoslocales2024_15_14.png" /> 15<br />\
    <img src="styles/legend/distritoslocales2024_15_15.png" /> 16<br />\
    <img src="styles/legend/distritoslocales2024_15_16.png" /> 17<br />' });
var format_SECCION_16 = new ol.format.GeoJSON();
var features_SECCION_16 = format_SECCION_16.readFeatures(json_SECCION_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32611'});
var jsonSource_SECCION_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SECCION_16.addFeatures(features_SECCION_16);
var lyr_SECCION_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SECCION_16, 
                style: style_SECCION_16,
                popuplayertitle: 'SECCION',
                interactive: true,
                title: '<img src="styles/legend/SECCION_16.png" /> SECCION'
            });

lyr_YandexSatellite_0.setVisible(false);lyr_GoogleSatellite_1.setVisible(false);lyr_ESRISatelliteArcGISWorld_Imagery_2.setVisible(false);lyr_BingMapsSatelliteImagery_3.setVisible(false);lyr_RRZEOpenStreetMapStandardHD_4.setVisible(true);lyr_NightEarthNightMap_5.setVisible(true);lyr_linea_6.setVisible(false);lyr_puntos_7.setVisible(false);lyr_poligono_8.setVisible(false);lyr_geobcsur_9.setVisible(false);lyr_geobccentro_10.setVisible(false);lyr_geobcnorte_11.setVisible(false);lyr_geotj_12.setVisible(false);lyr_redgeodesicadetijuana_13.setVisible(false);lyr_nuevosdttosfederales2023_14.setVisible(false);lyr_distritoslocales2024_15.setVisible(false);lyr_SECCION_16.setVisible(false);
var layersList = [lyr_YandexSatellite_0,lyr_GoogleSatellite_1,lyr_ESRISatelliteArcGISWorld_Imagery_2,lyr_BingMapsSatelliteImagery_3,lyr_RRZEOpenStreetMapStandardHD_4,lyr_NightEarthNightMap_5,lyr_linea_6,lyr_puntos_7,lyr_poligono_8,lyr_geobcsur_9,lyr_geobccentro_10,lyr_geobcnorte_11,lyr_geotj_12,lyr_redgeodesicadetijuana_13,lyr_nuevosdttosfederales2023_14,lyr_distritoslocales2024_15,lyr_SECCION_16];
lyr_linea_6.set('fieldAliases', {'id': 'id', 'nombre': 'nombre', 'tipo': 'tipo', 'nota': 'nota', 'foto': 'foto', 'longitud': 'longitud', });
lyr_puntos_7.set('fieldAliases', {'id': 'id', 'nombre': 'nombre', 'tipo': 'tipo', 'nota': 'nota', 'foto': 'foto', });
lyr_poligono_8.set('fieldAliases', {'id': 'id', 'nombre': 'nombre', 'tipo': 'tipo', 'nota': 'nota', 'foto': 'foto', 'area': 'area', 'perimetro': 'perimetro', });
lyr_redgeodesicadetijuana_13.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_nuevosdttosfederales2023_14.set('fieldAliases', {'ID': 'ID', 'ENTIDAD': 'ENTIDAD', 'MUNICIPIO': 'MUNICIPIO', 'SECCION': 'SECCION', 'TIPO': 'TIPO', 'CONTROL': 'CONTROL', 'SNAGY': 'SNAGY', 'SNAG': 'SNAG', 'N2023DTFE': 'N2023DTFE', 'SNAGO': 'SNAGO', 'N2023_DTLO': 'N2023_DTLO', });
lyr_distritoslocales2024_15.set('fieldAliases', {'Name': 'Name', 'dttonum': 'dttonum', });
lyr_SECCION_16.set('fieldAliases', {'ID': 'ID', 'ENTIDAD': 'ENTIDAD', 'MUNICIPIO': 'MUNICIPIO', 'SECCION': 'SECCION', 'TIPO': 'TIPO', 'CONTROL': 'CONTROL', 'SNAGY': 'SNAGY', });
lyr_linea_6.set('fieldImages', {'id': '', 'nombre': '', 'tipo': '', 'nota': '', 'foto': '', 'longitud': '', });
lyr_puntos_7.set('fieldImages', {'id': '', 'nombre': '', 'tipo': '', 'nota': '', 'foto': '', });
lyr_poligono_8.set('fieldImages', {'id': '', 'nombre': '', 'tipo': '', 'nota': '', 'foto': '', 'area': '', 'perimetro': '', });
lyr_redgeodesicadetijuana_13.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_nuevosdttosfederales2023_14.set('fieldImages', {'ID': 'TextEdit', 'ENTIDAD': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'SECCION': 'TextEdit', 'TIPO': 'TextEdit', 'CONTROL': 'TextEdit', 'SNAGY': 'TextEdit', 'SNAG': 'TextEdit', 'N2023DTFE': 'TextEdit', 'SNAGO': 'TextEdit', 'N2023_DTLO': 'TextEdit', });
lyr_distritoslocales2024_15.set('fieldImages', {'Name': 'TextEdit', 'dttonum': 'Range', });
lyr_SECCION_16.set('fieldImages', {'ID': '', 'ENTIDAD': '', 'MUNICIPIO': '', 'SECCION': '', 'TIPO': '', 'CONTROL': '', 'SNAGY': '', });
lyr_linea_6.set('fieldLabels', {'id': 'no label', 'nombre': 'no label', 'tipo': 'no label', 'nota': 'no label', 'foto': 'no label', 'longitud': 'no label', });
lyr_puntos_7.set('fieldLabels', {'id': 'no label', 'nombre': 'no label', 'tipo': 'no label', 'nota': 'no label', 'foto': 'no label', });
lyr_poligono_8.set('fieldLabels', {'id': 'no label', 'nombre': 'no label', 'tipo': 'no label', 'nota': 'no label', 'foto': 'no label', 'area': 'no label', 'perimetro': 'no label', });
lyr_redgeodesicadetijuana_13.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_nuevosdttosfederales2023_14.set('fieldLabels', {'ID': 'no label', 'ENTIDAD': 'no label', 'MUNICIPIO': 'no label', 'SECCION': 'no label', 'TIPO': 'no label', 'CONTROL': 'no label', 'SNAGY': 'no label', 'SNAG': 'no label', 'N2023DTFE': 'no label', 'SNAGO': 'no label', 'N2023_DTLO': 'no label', });
lyr_distritoslocales2024_15.set('fieldLabels', {'Name': 'no label', 'dttonum': 'no label', });
lyr_SECCION_16.set('fieldLabels', {'ID': 'no label', 'ENTIDAD': 'no label', 'MUNICIPIO': 'no label', 'SECCION': 'no label', 'TIPO': 'no label', 'CONTROL': 'no label', 'SNAGY': 'no label', });
lyr_SECCION_16.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});