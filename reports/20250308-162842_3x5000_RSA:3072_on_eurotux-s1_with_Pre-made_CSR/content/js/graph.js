/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 214.0, "minX": 0.0, "maxY": 1092.0, "series": [{"data": [[0.0, 214.0], [0.1, 220.0], [0.2, 222.0], [0.3, 223.0], [0.4, 224.0], [0.5, 225.0], [0.6, 226.0], [0.7, 227.0], [0.8, 228.0], [0.9, 230.0], [1.0, 231.0], [1.1, 232.0], [1.2, 233.0], [1.3, 234.0], [1.4, 236.0], [1.5, 238.0], [1.6, 239.0], [1.7, 241.0], [1.8, 243.0], [1.9, 245.0], [2.0, 249.0], [2.1, 251.0], [2.2, 255.0], [2.3, 263.0], [2.4, 275.0], [2.5, 277.0], [2.6, 278.0], [2.7, 279.0], [2.8, 280.0], [2.9, 280.0], [3.0, 281.0], [3.1, 281.0], [3.2, 281.0], [3.3, 282.0], [3.4, 282.0], [3.5, 282.0], [3.6, 282.0], [3.7, 282.0], [3.8, 282.0], [3.9, 283.0], [4.0, 283.0], [4.1, 283.0], [4.2, 283.0], [4.3, 283.0], [4.4, 283.0], [4.5, 284.0], [4.6, 284.0], [4.7, 284.0], [4.8, 284.0], [4.9, 284.0], [5.0, 284.0], [5.1, 284.0], [5.2, 284.0], [5.3, 284.0], [5.4, 285.0], [5.5, 285.0], [5.6, 285.0], [5.7, 285.0], [5.8, 285.0], [5.9, 285.0], [6.0, 285.0], [6.1, 285.0], [6.2, 285.0], [6.3, 285.0], [6.4, 285.0], [6.5, 286.0], [6.6, 286.0], [6.7, 286.0], [6.8, 286.0], [6.9, 286.0], [7.0, 286.0], [7.1, 286.0], [7.2, 286.0], [7.3, 286.0], [7.4, 286.0], [7.5, 286.0], [7.6, 286.0], [7.7, 286.0], [7.8, 286.0], [7.9, 287.0], [8.0, 287.0], [8.1, 287.0], [8.2, 287.0], [8.3, 287.0], [8.4, 287.0], [8.5, 287.0], [8.6, 287.0], [8.7, 287.0], [8.8, 287.0], [8.9, 287.0], [9.0, 287.0], [9.1, 287.0], [9.2, 287.0], [9.3, 287.0], [9.4, 287.0], [9.5, 287.0], [9.6, 288.0], [9.7, 288.0], [9.8, 288.0], [9.9, 288.0], [10.0, 288.0], [10.1, 288.0], [10.2, 288.0], [10.3, 288.0], [10.4, 288.0], [10.5, 288.0], [10.6, 288.0], [10.7, 288.0], [10.8, 288.0], [10.9, 288.0], [11.0, 288.0], [11.1, 288.0], [11.2, 288.0], [11.3, 289.0], [11.4, 289.0], [11.5, 289.0], [11.6, 289.0], [11.7, 289.0], [11.8, 289.0], [11.9, 289.0], [12.0, 289.0], [12.1, 289.0], [12.2, 289.0], [12.3, 289.0], [12.4, 289.0], [12.5, 289.0], [12.6, 289.0], [12.7, 289.0], [12.8, 289.0], [12.9, 289.0], [13.0, 289.0], [13.1, 289.0], [13.2, 289.0], [13.3, 289.0], [13.4, 289.0], [13.5, 290.0], [13.6, 290.0], [13.7, 290.0], [13.8, 290.0], [13.9, 290.0], [14.0, 290.0], [14.1, 290.0], [14.2, 290.0], [14.3, 290.0], [14.4, 290.0], [14.5, 290.0], [14.6, 290.0], [14.7, 290.0], [14.8, 290.0], [14.9, 290.0], [15.0, 290.0], [15.1, 290.0], [15.2, 290.0], [15.3, 290.0], [15.4, 290.0], [15.5, 291.0], [15.6, 291.0], [15.7, 291.0], [15.8, 291.0], [15.9, 291.0], [16.0, 291.0], [16.1, 291.0], [16.2, 291.0], [16.3, 291.0], [16.4, 291.0], [16.5, 291.0], [16.6, 291.0], [16.7, 291.0], [16.8, 291.0], [16.9, 291.0], [17.0, 291.0], [17.1, 291.0], [17.2, 291.0], [17.3, 291.0], [17.4, 291.0], [17.5, 291.0], [17.6, 291.0], [17.7, 292.0], [17.8, 292.0], [17.9, 292.0], [18.0, 292.0], [18.1, 292.0], [18.2, 292.0], [18.3, 292.0], [18.4, 292.0], [18.5, 292.0], [18.6, 292.0], [18.7, 292.0], [18.8, 292.0], [18.9, 292.0], [19.0, 292.0], [19.1, 292.0], [19.2, 292.0], [19.3, 292.0], [19.4, 292.0], [19.5, 292.0], [19.6, 292.0], [19.7, 292.0], [19.8, 292.0], [19.9, 293.0], [20.0, 293.0], [20.1, 293.0], [20.2, 293.0], [20.3, 293.0], [20.4, 293.0], [20.5, 293.0], [20.6, 293.0], [20.7, 293.0], [20.8, 293.0], [20.9, 293.0], [21.0, 293.0], [21.1, 293.0], [21.2, 293.0], [21.3, 293.0], [21.4, 293.0], [21.5, 293.0], [21.6, 293.0], [21.7, 293.0], [21.8, 293.0], [21.9, 293.0], [22.0, 293.0], [22.1, 294.0], [22.2, 294.0], [22.3, 294.0], [22.4, 294.0], [22.5, 294.0], [22.6, 294.0], [22.7, 294.0], [22.8, 294.0], [22.9, 294.0], [23.0, 294.0], [23.1, 294.0], [23.2, 294.0], [23.3, 294.0], [23.4, 294.0], [23.5, 294.0], [23.6, 294.0], [23.7, 294.0], [23.8, 294.0], [23.9, 294.0], [24.0, 294.0], [24.1, 294.0], [24.2, 295.0], [24.3, 295.0], [24.4, 295.0], [24.5, 295.0], [24.6, 295.0], [24.7, 295.0], [24.8, 295.0], [24.9, 295.0], [25.0, 295.0], [25.1, 295.0], [25.2, 295.0], [25.3, 295.0], [25.4, 295.0], [25.5, 295.0], [25.6, 295.0], [25.7, 295.0], [25.8, 295.0], [25.9, 296.0], [26.0, 296.0], [26.1, 296.0], [26.2, 296.0], [26.3, 296.0], [26.4, 296.0], [26.5, 296.0], [26.6, 296.0], [26.7, 296.0], [26.8, 296.0], [26.9, 296.0], [27.0, 296.0], [27.1, 296.0], [27.2, 296.0], [27.3, 296.0], [27.4, 296.0], [27.5, 296.0], [27.6, 296.0], [27.7, 296.0], [27.8, 296.0], [27.9, 297.0], [28.0, 297.0], [28.1, 297.0], [28.2, 297.0], [28.3, 297.0], [28.4, 297.0], [28.5, 297.0], [28.6, 297.0], [28.7, 297.0], [28.8, 297.0], [28.9, 297.0], [29.0, 297.0], [29.1, 297.0], [29.2, 297.0], [29.3, 297.0], [29.4, 297.0], [29.5, 297.0], [29.6, 297.0], [29.7, 297.0], [29.8, 298.0], [29.9, 298.0], [30.0, 298.0], [30.1, 298.0], [30.2, 298.0], [30.3, 298.0], [30.4, 298.0], [30.5, 298.0], [30.6, 298.0], [30.7, 298.0], [30.8, 298.0], [30.9, 298.0], [31.0, 298.0], [31.1, 298.0], [31.2, 298.0], [31.3, 298.0], [31.4, 298.0], [31.5, 298.0], [31.6, 298.0], [31.7, 299.0], [31.8, 299.0], [31.9, 299.0], [32.0, 299.0], [32.1, 299.0], [32.2, 299.0], [32.3, 299.0], [32.4, 299.0], [32.5, 299.0], [32.6, 299.0], [32.7, 299.0], [32.8, 299.0], [32.9, 299.0], [33.0, 299.0], [33.1, 299.0], [33.2, 299.0], [33.3, 300.0], [33.4, 300.0], [33.5, 300.0], [33.6, 300.0], [33.7, 300.0], [33.8, 300.0], [33.9, 300.0], [34.0, 300.0], [34.1, 300.0], [34.2, 300.0], [34.3, 300.0], [34.4, 300.0], [34.5, 300.0], [34.6, 300.0], [34.7, 300.0], [34.8, 300.0], [34.9, 300.0], [35.0, 301.0], [35.1, 301.0], [35.2, 301.0], [35.3, 301.0], [35.4, 301.0], [35.5, 301.0], [35.6, 301.0], [35.7, 301.0], [35.8, 301.0], [35.9, 301.0], [36.0, 301.0], [36.1, 301.0], [36.2, 301.0], [36.3, 301.0], [36.4, 301.0], [36.5, 301.0], [36.6, 301.0], [36.7, 301.0], [36.8, 302.0], [36.9, 302.0], [37.0, 302.0], [37.1, 302.0], [37.2, 302.0], [37.3, 302.0], [37.4, 302.0], [37.5, 302.0], [37.6, 302.0], [37.7, 302.0], [37.8, 302.0], [37.9, 302.0], [38.0, 302.0], [38.1, 302.0], [38.2, 302.0], [38.3, 303.0], [38.4, 303.0], [38.5, 303.0], [38.6, 303.0], [38.7, 303.0], [38.8, 303.0], [38.9, 303.0], [39.0, 303.0], [39.1, 303.0], [39.2, 303.0], [39.3, 303.0], [39.4, 303.0], [39.5, 303.0], [39.6, 303.0], [39.7, 303.0], [39.8, 303.0], [39.9, 304.0], [40.0, 304.0], [40.1, 304.0], [40.2, 304.0], [40.3, 304.0], [40.4, 304.0], [40.5, 304.0], [40.6, 304.0], [40.7, 304.0], [40.8, 304.0], [40.9, 304.0], [41.0, 304.0], [41.1, 304.0], [41.2, 304.0], [41.3, 304.0], [41.4, 304.0], [41.5, 304.0], [41.6, 304.0], [41.7, 305.0], [41.8, 305.0], [41.9, 305.0], [42.0, 305.0], [42.1, 305.0], [42.2, 305.0], [42.3, 305.0], [42.4, 305.0], [42.5, 305.0], [42.6, 305.0], [42.7, 305.0], [42.8, 305.0], [42.9, 305.0], [43.0, 305.0], [43.1, 305.0], [43.2, 305.0], [43.3, 305.0], [43.4, 305.0], [43.5, 306.0], [43.6, 306.0], [43.7, 306.0], [43.8, 306.0], [43.9, 306.0], [44.0, 306.0], [44.1, 306.0], [44.2, 306.0], [44.3, 306.0], [44.4, 306.0], [44.5, 306.0], [44.6, 306.0], [44.7, 306.0], [44.8, 306.0], [44.9, 306.0], [45.0, 306.0], [45.1, 306.0], [45.2, 306.0], [45.3, 306.0], [45.4, 307.0], [45.5, 307.0], [45.6, 307.0], [45.7, 307.0], [45.8, 307.0], [45.9, 307.0], [46.0, 307.0], [46.1, 307.0], [46.2, 307.0], [46.3, 307.0], [46.4, 307.0], [46.5, 307.0], [46.6, 307.0], [46.7, 307.0], [46.8, 307.0], [46.9, 307.0], [47.0, 307.0], [47.1, 307.0], [47.2, 308.0], [47.3, 308.0], [47.4, 308.0], [47.5, 308.0], [47.6, 308.0], [47.7, 308.0], [47.8, 308.0], [47.9, 308.0], [48.0, 308.0], [48.1, 308.0], [48.2, 308.0], [48.3, 308.0], [48.4, 308.0], [48.5, 308.0], [48.6, 308.0], [48.7, 308.0], [48.8, 308.0], [48.9, 308.0], [49.0, 308.0], [49.1, 308.0], [49.2, 308.0], [49.3, 308.0], [49.4, 309.0], [49.5, 309.0], [49.6, 309.0], [49.7, 309.0], [49.8, 309.0], [49.9, 309.0], [50.0, 309.0], [50.1, 309.0], [50.2, 309.0], [50.3, 309.0], [50.4, 309.0], [50.5, 309.0], [50.6, 309.0], [50.7, 309.0], [50.8, 309.0], [50.9, 309.0], [51.0, 309.0], [51.1, 309.0], [51.2, 309.0], [51.3, 309.0], [51.4, 310.0], [51.5, 310.0], [51.6, 310.0], [51.7, 310.0], [51.8, 310.0], [51.9, 310.0], [52.0, 310.0], [52.1, 310.0], [52.2, 310.0], [52.3, 310.0], [52.4, 310.0], [52.5, 310.0], [52.6, 310.0], [52.7, 310.0], [52.8, 310.0], [52.9, 310.0], [53.0, 310.0], [53.1, 310.0], [53.2, 310.0], [53.3, 310.0], [53.4, 311.0], [53.5, 311.0], [53.6, 311.0], [53.7, 311.0], [53.8, 311.0], [53.9, 311.0], [54.0, 311.0], [54.1, 311.0], [54.2, 311.0], [54.3, 311.0], [54.4, 311.0], [54.5, 311.0], [54.6, 311.0], [54.7, 311.0], [54.8, 311.0], [54.9, 311.0], [55.0, 311.0], [55.1, 311.0], [55.2, 312.0], [55.3, 312.0], [55.4, 312.0], [55.5, 312.0], [55.6, 312.0], [55.7, 312.0], [55.8, 312.0], [55.9, 312.0], [56.0, 312.0], [56.1, 312.0], [56.2, 312.0], [56.3, 312.0], [56.4, 312.0], [56.5, 312.0], [56.6, 312.0], [56.7, 312.0], [56.8, 312.0], [56.9, 312.0], [57.0, 312.0], [57.1, 312.0], [57.2, 313.0], [57.3, 313.0], [57.4, 313.0], [57.5, 313.0], [57.6, 313.0], [57.7, 313.0], [57.8, 313.0], [57.9, 313.0], [58.0, 313.0], [58.1, 313.0], [58.2, 313.0], [58.3, 313.0], [58.4, 313.0], [58.5, 313.0], [58.6, 313.0], [58.7, 313.0], [58.8, 313.0], [58.9, 313.0], [59.0, 313.0], [59.1, 313.0], [59.2, 313.0], [59.3, 314.0], [59.4, 314.0], [59.5, 314.0], [59.6, 314.0], [59.7, 314.0], [59.8, 314.0], [59.9, 314.0], [60.0, 314.0], [60.1, 314.0], [60.2, 314.0], [60.3, 314.0], [60.4, 314.0], [60.5, 314.0], [60.6, 314.0], [60.7, 314.0], [60.8, 314.0], [60.9, 314.0], [61.0, 314.0], [61.1, 314.0], [61.2, 315.0], [61.3, 315.0], [61.4, 315.0], [61.5, 315.0], [61.6, 315.0], [61.7, 315.0], [61.8, 315.0], [61.9, 315.0], [62.0, 315.0], [62.1, 315.0], [62.2, 315.0], [62.3, 315.0], [62.4, 315.0], [62.5, 315.0], [62.6, 315.0], [62.7, 315.0], [62.8, 315.0], [62.9, 315.0], [63.0, 315.0], [63.1, 316.0], [63.2, 316.0], [63.3, 316.0], [63.4, 316.0], [63.5, 316.0], [63.6, 316.0], [63.7, 316.0], [63.8, 316.0], [63.9, 316.0], [64.0, 316.0], [64.1, 316.0], [64.2, 316.0], [64.3, 316.0], [64.4, 316.0], [64.5, 316.0], [64.6, 316.0], [64.7, 316.0], [64.8, 317.0], [64.9, 317.0], [65.0, 317.0], [65.1, 317.0], [65.2, 317.0], [65.3, 317.0], [65.4, 317.0], [65.5, 317.0], [65.6, 317.0], [65.7, 317.0], [65.8, 317.0], [65.9, 317.0], [66.0, 317.0], [66.1, 317.0], [66.2, 317.0], [66.3, 318.0], [66.4, 318.0], [66.5, 318.0], [66.6, 318.0], [66.7, 318.0], [66.8, 318.0], [66.9, 318.0], [67.0, 318.0], [67.1, 318.0], [67.2, 318.0], [67.3, 318.0], [67.4, 318.0], [67.5, 318.0], [67.6, 318.0], [67.7, 318.0], [67.8, 319.0], [67.9, 319.0], [68.0, 319.0], [68.1, 319.0], [68.2, 319.0], [68.3, 319.0], [68.4, 319.0], [68.5, 319.0], [68.6, 319.0], [68.7, 319.0], [68.8, 319.0], [68.9, 319.0], [69.0, 319.0], [69.1, 320.0], [69.2, 320.0], [69.3, 320.0], [69.4, 320.0], [69.5, 320.0], [69.6, 320.0], [69.7, 320.0], [69.8, 320.0], [69.9, 320.0], [70.0, 320.0], [70.1, 320.0], [70.2, 320.0], [70.3, 321.0], [70.4, 321.0], [70.5, 321.0], [70.6, 321.0], [70.7, 321.0], [70.8, 321.0], [70.9, 321.0], [71.0, 321.0], [71.1, 321.0], [71.2, 321.0], [71.3, 321.0], [71.4, 321.0], [71.5, 322.0], [71.6, 322.0], [71.7, 322.0], [71.8, 322.0], [71.9, 322.0], [72.0, 322.0], [72.1, 322.0], [72.2, 322.0], [72.3, 322.0], [72.4, 322.0], [72.5, 322.0], [72.6, 323.0], [72.7, 323.0], [72.8, 323.0], [72.9, 323.0], [73.0, 323.0], [73.1, 323.0], [73.2, 323.0], [73.3, 323.0], [73.4, 323.0], [73.5, 323.0], [73.6, 323.0], [73.7, 324.0], [73.8, 324.0], [73.9, 324.0], [74.0, 324.0], [74.1, 324.0], [74.2, 324.0], [74.3, 324.0], [74.4, 324.0], [74.5, 324.0], [74.6, 324.0], [74.7, 324.0], [74.8, 324.0], [74.9, 324.0], [75.0, 324.0], [75.1, 325.0], [75.2, 325.0], [75.3, 325.0], [75.4, 325.0], [75.5, 325.0], [75.6, 325.0], [75.7, 325.0], [75.8, 325.0], [75.9, 325.0], [76.0, 325.0], [76.1, 325.0], [76.2, 325.0], [76.3, 326.0], [76.4, 326.0], [76.5, 326.0], [76.6, 326.0], [76.7, 326.0], [76.8, 326.0], [76.9, 326.0], [77.0, 326.0], [77.1, 326.0], [77.2, 326.0], [77.3, 326.0], [77.4, 326.0], [77.5, 327.0], [77.6, 327.0], [77.7, 327.0], [77.8, 327.0], [77.9, 327.0], [78.0, 327.0], [78.1, 327.0], [78.2, 327.0], [78.3, 327.0], [78.4, 327.0], [78.5, 327.0], [78.6, 327.0], [78.7, 327.0], [78.8, 328.0], [78.9, 328.0], [79.0, 328.0], [79.1, 328.0], [79.2, 328.0], [79.3, 328.0], [79.4, 328.0], [79.5, 328.0], [79.6, 328.0], [79.7, 328.0], [79.8, 328.0], [79.9, 328.0], [80.0, 329.0], [80.1, 329.0], [80.2, 329.0], [80.3, 329.0], [80.4, 329.0], [80.5, 329.0], [80.6, 329.0], [80.7, 329.0], [80.8, 329.0], [80.9, 329.0], [81.0, 329.0], [81.1, 329.0], [81.2, 329.0], [81.3, 330.0], [81.4, 330.0], [81.5, 330.0], [81.6, 330.0], [81.7, 330.0], [81.8, 330.0], [81.9, 330.0], [82.0, 330.0], [82.1, 330.0], [82.2, 330.0], [82.3, 330.0], [82.4, 330.0], [82.5, 331.0], [82.6, 331.0], [82.7, 331.0], [82.8, 331.0], [82.9, 331.0], [83.0, 331.0], [83.1, 331.0], [83.2, 331.0], [83.3, 331.0], [83.4, 331.0], [83.5, 331.0], [83.6, 331.0], [83.7, 331.0], [83.8, 331.0], [83.9, 332.0], [84.0, 332.0], [84.1, 332.0], [84.2, 332.0], [84.3, 332.0], [84.4, 332.0], [84.5, 332.0], [84.6, 332.0], [84.7, 332.0], [84.8, 332.0], [84.9, 332.0], [85.0, 333.0], [85.1, 333.0], [85.2, 333.0], [85.3, 333.0], [85.4, 333.0], [85.5, 333.0], [85.6, 333.0], [85.7, 333.0], [85.8, 333.0], [85.9, 333.0], [86.0, 333.0], [86.1, 333.0], [86.2, 333.0], [86.3, 333.0], [86.4, 334.0], [86.5, 334.0], [86.6, 334.0], [86.7, 334.0], [86.8, 334.0], [86.9, 334.0], [87.0, 334.0], [87.1, 334.0], [87.2, 334.0], [87.3, 334.0], [87.4, 334.0], [87.5, 334.0], [87.6, 334.0], [87.7, 335.0], [87.8, 335.0], [87.9, 335.0], [88.0, 335.0], [88.1, 335.0], [88.2, 335.0], [88.3, 335.0], [88.4, 335.0], [88.5, 335.0], [88.6, 335.0], [88.7, 336.0], [88.8, 336.0], [88.9, 336.0], [89.0, 336.0], [89.1, 336.0], [89.2, 336.0], [89.3, 336.0], [89.4, 336.0], [89.5, 336.0], [89.6, 336.0], [89.7, 336.0], [89.8, 336.0], [89.9, 336.0], [90.0, 337.0], [90.1, 337.0], [90.2, 337.0], [90.3, 337.0], [90.4, 337.0], [90.5, 337.0], [90.6, 337.0], [90.7, 337.0], [90.8, 337.0], [90.9, 337.0], [91.0, 337.0], [91.1, 338.0], [91.2, 338.0], [91.3, 338.0], [91.4, 338.0], [91.5, 338.0], [91.6, 338.0], [91.7, 338.0], [91.8, 338.0], [91.9, 338.0], [92.0, 339.0], [92.1, 339.0], [92.2, 339.0], [92.3, 339.0], [92.4, 339.0], [92.5, 339.0], [92.6, 339.0], [92.7, 339.0], [92.8, 339.0], [92.9, 340.0], [93.0, 340.0], [93.1, 340.0], [93.2, 340.0], [93.3, 340.0], [93.4, 340.0], [93.5, 340.0], [93.6, 340.0], [93.7, 340.0], [93.8, 341.0], [93.9, 341.0], [94.0, 341.0], [94.1, 341.0], [94.2, 341.0], [94.3, 341.0], [94.4, 341.0], [94.5, 341.0], [94.6, 341.0], [94.7, 341.0], [94.8, 342.0], [94.9, 342.0], [95.0, 342.0], [95.1, 342.0], [95.2, 342.0], [95.3, 342.0], [95.4, 342.0], [95.5, 342.0], [95.6, 342.0], [95.7, 343.0], [95.8, 343.0], [95.9, 343.0], [96.0, 343.0], [96.1, 343.0], [96.2, 343.0], [96.3, 343.0], [96.4, 343.0], [96.5, 344.0], [96.6, 344.0], [96.7, 344.0], [96.8, 344.0], [96.9, 344.0], [97.0, 344.0], [97.1, 344.0], [97.2, 344.0], [97.3, 345.0], [97.4, 345.0], [97.5, 345.0], [97.6, 345.0], [97.7, 345.0], [97.8, 345.0], [97.9, 345.0], [98.0, 346.0], [98.1, 346.0], [98.2, 346.0], [98.3, 346.0], [98.4, 346.0], [98.5, 347.0], [98.6, 347.0], [98.7, 347.0], [98.8, 348.0], [98.9, 348.0], [99.0, 348.0], [99.1, 349.0], [99.2, 349.0], [99.3, 350.0], [99.4, 351.0], [99.5, 352.0], [99.6, 354.0], [99.7, 356.0], [99.8, 361.0], [99.9, 369.0]], "isOverall": false, "label": "HTTP Request - enroll", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 10002.0, "series": [{"data": [[300.0, 10002.0], [800.0, 1.0], [200.0, 4995.0], [1000.0, 2.0]], "isOverall": false, "label": "HTTP Request - enroll", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1000.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 3.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 14997.0, "series": [{"data": [[0.0, 14997.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 3.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 2.9863013698630136, "minX": 1.74145806E12, "maxY": 3.0, "series": [{"data": [[1.74145812E12, 3.0], [1.74145962E12, 2.9863013698630136], [1.74145932E12, 3.0], [1.74145902E12, 3.0], [1.7414592E12, 3.0], [1.7414589E12, 3.0], [1.7414586E12, 3.0], [1.7414583E12, 3.0], [1.74145944E12, 3.0], [1.74145914E12, 3.0], [1.74145884E12, 3.0], [1.74145854E12, 3.0], [1.74145872E12, 3.0], [1.74145842E12, 3.0], [1.74145896E12, 3.0], [1.74145866E12, 3.0], [1.74145836E12, 3.0], [1.74145818E12, 3.0], [1.74145956E12, 3.0], [1.74145926E12, 3.0], [1.74145848E12, 3.0], [1.74145824E12, 3.0], [1.7414595E12, 3.0], [1.74145806E12, 3.0], [1.74145938E12, 3.0], [1.74145908E12, 3.0], [1.74145878E12, 3.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74145962E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 309.43088617723487, "minX": 1.0, "maxY": 330.0, "series": [{"data": [[2.0, 330.0], [1.0, 313.0], [3.0, 309.43088617723487]], "isOverall": false, "label": "HTTP Request - enroll", "isController": false}, {"data": [[2.9997333333333334, 309.4338666666661]], "isOverall": false, "label": "HTTP Request - enroll-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 3.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 5153.3, "minX": 1.74145806E12, "maxY": 78654.05, "series": [{"data": [[1.74145812E12, 78275.65], [1.74145962E12, 36806.13333333333], [1.74145932E12, 69956.8], [1.74145902E12, 71469.08333333333], [1.7414592E12, 69956.46666666666], [1.7414589E12, 72225.53333333334], [1.7414586E12, 74872.16666666667], [1.7414583E12, 78023.86666666667], [1.74145944E12, 69200.28333333334], [1.74145914E12, 70712.66666666667], [1.74145884E12, 71595.33333333333], [1.74145854E12, 76385.18333333333], [1.74145872E12, 71847.08333333333], [1.74145842E12, 77141.4], [1.74145896E12, 71469.25], [1.74145866E12, 74620.45], [1.74145836E12, 77519.36666666667], [1.74145818E12, 78654.05], [1.74145956E12, 69578.65], [1.74145926E12, 70712.75], [1.74145848E12, 77141.23333333334], [1.74145824E12, 78275.61666666667], [1.7414595E12, 69200.38333333333], [1.74145806E12, 21932.433333333334], [1.74145938E12, 69578.46666666666], [1.74145908E12, 71091.05], [1.74145878E12, 72477.83333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.74145812E12, 18391.95], [1.74145962E12, 8648.066666666668], [1.74145932E12, 16437.25], [1.74145902E12, 16792.65], [1.7414592E12, 16437.25], [1.7414589E12, 16970.35], [1.7414586E12, 17592.3], [1.7414583E12, 18332.716666666667], [1.74145944E12, 16259.55], [1.74145914E12, 16614.95], [1.74145884E12, 16822.266666666666], [1.74145854E12, 17947.7], [1.74145872E12, 16881.5], [1.74145842E12, 18125.4], [1.74145896E12, 16792.65], [1.74145866E12, 17533.066666666666], [1.74145836E12, 18214.25], [1.74145818E12, 18480.8], [1.74145956E12, 16348.4], [1.74145926E12, 16614.95], [1.74145848E12, 18125.4], [1.74145824E12, 18391.95], [1.7414595E12, 16259.55], [1.74145806E12, 5153.3], [1.74145938E12, 16348.4], [1.74145908E12, 16703.8], [1.74145878E12, 17029.583333333332]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74145962E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 287.7387820512818, "minX": 1.74145806E12, "maxY": 332.95205479452073, "series": [{"data": [[1.74145812E12, 288.29951690821264], [1.74145962E12, 332.95205479452073], [1.74145932E12, 323.8576576576577], [1.74145902E12, 317.8395061728395], [1.7414592E12, 322.9855855855855], [1.7414589E12, 314.3420593368234], [1.7414586E12, 301.96632996632945], [1.7414583E12, 290.00484652665557], [1.74145944E12, 327.2513661202185], [1.74145914E12, 320.9982174688057], [1.74145884E12, 315.41373239436575], [1.74145854E12, 296.1402640264026], [1.74145872E12, 315.4157894736841], [1.74145842E12, 293.23039215686265], [1.74145896E12, 317.44268077601424], [1.74145866E12, 303.51858108108115], [1.74145836E12, 292.52520325203244], [1.74145818E12, 287.7387820512818], [1.74145956E12, 325.37137681159436], [1.74145926E12, 320.6274509803923], [1.74145848E12, 293.96895424836623], [1.74145824E12, 289.718196457327], [1.7414595E12, 326.77777777777777], [1.74145806E12, 298.74712643678157], [1.74145938E12, 326.8985507246373], [1.74145908E12, 317.8120567375888], [1.74145878E12, 312.93217391304347]], "isOverall": false, "label": "HTTP Request - enroll", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74145962E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 287.724358974359, "minX": 1.74145806E12, "maxY": 332.94863013698614, "series": [{"data": [[1.74145812E12, 288.2834138486311], [1.74145962E12, 332.94863013698614], [1.74145932E12, 323.8468468468469], [1.74145902E12, 317.8395061728395], [1.7414592E12, 322.9819819819823], [1.7414589E12, 314.3403141361256], [1.7414586E12, 301.95959595959596], [1.7414583E12, 289.99515347334415], [1.74145944E12, 327.24408014571935], [1.74145914E12, 320.9982174688057], [1.74145884E12, 315.40316901408426], [1.74145854E12, 296.13201320132], [1.74145872E12, 315.4122807017539], [1.74145842E12, 293.21732026143786], [1.74145896E12, 317.43738977072314], [1.74145866E12, 303.5118243243241], [1.74145836E12, 292.51382113821114], [1.74145818E12, 287.724358974359], [1.74145956E12, 325.36956521739125], [1.74145926E12, 320.6238859180035], [1.74145848E12, 293.95751633986896], [1.74145824E12, 289.70048309178753], [1.7414595E12, 326.772313296903], [1.74145806E12, 298.68965517241367], [1.74145938E12, 326.89492753623153], [1.74145908E12, 317.8085106382977], [1.74145878E12, 312.92521739130433]], "isOverall": false, "label": "HTTP Request - enroll", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74145962E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.74145806E12, "maxY": 2.3563218390804606, "series": [{"data": [[1.74145812E12, 0.02254428341384864], [1.74145962E12, 0.0], [1.74145932E12, 0.014414414414414418], [1.74145902E12, 0.014109347442680779], [1.7414592E12, 0.014414414414414418], [1.7414589E12, 0.013961605584642236], [1.7414586E12, 0.015151515151515154], [1.7414583E12, 0.02261712439418417], [1.74145944E12, 0.010928961748633883], [1.74145914E12, 0.016042780748663093], [1.74145884E12, 0.01408450704225352], [1.74145854E12, 0.014851485148514856], [1.74145872E12, 0.01754385964912281], [1.74145842E12, 0.013071895424836607], [1.74145896E12, 0.015873015873015858], [1.74145866E12, 0.016891891891891886], [1.74145836E12, 0.014634146341463419], [1.74145818E12, 0.019230769230769235], [1.74145956E12, 0.01630434782608695], [1.74145926E12, 0.014260249554367204], [1.74145848E12, 0.017973856209150315], [1.74145824E12, 0.019323671497584547], [1.7414595E12, 0.014571948998178512], [1.74145806E12, 2.3563218390804606], [1.74145938E12, 0.016304347826086946], [1.74145908E12, 0.012411347517730495], [1.74145878E12, 0.013913043478260872]], "isOverall": false, "label": "HTTP Request - enroll", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74145962E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 214.0, "minX": 1.74145806E12, "maxY": 1092.0, "series": [{"data": [[1.74145812E12, 356.0], [1.74145962E12, 362.0], [1.74145932E12, 380.0], [1.74145902E12, 364.0], [1.7414592E12, 358.0], [1.7414589E12, 379.0], [1.7414586E12, 345.0], [1.7414583E12, 352.0], [1.74145944E12, 361.0], [1.74145914E12, 392.0], [1.74145884E12, 391.0], [1.74145854E12, 366.0], [1.74145872E12, 379.0], [1.74145842E12, 337.0], [1.74145896E12, 369.0], [1.74145866E12, 362.0], [1.74145836E12, 355.0], [1.74145818E12, 329.0], [1.74145956E12, 357.0], [1.74145926E12, 364.0], [1.74145848E12, 361.0], [1.74145824E12, 352.0], [1.7414595E12, 356.0], [1.74145806E12, 1092.0], [1.74145938E12, 353.0], [1.74145908E12, 372.0], [1.74145878E12, 348.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.74145812E12, 300.80000000000007], [1.74145962E12, 348.0], [1.74145932E12, 342.40000000000003], [1.74145902E12, 335.0], [1.7414592E12, 339.0], [1.7414589E12, 333.0], [1.7414586E12, 318.0], [1.7414583E12, 304.0], [1.74145944E12, 344.0], [1.74145914E12, 339.0], [1.74145884E12, 331.1], [1.74145854E12, 308.0], [1.74145872E12, 331.0], [1.74145842E12, 306.0], [1.74145896E12, 334.0], [1.74145866E12, 316.0], [1.74145836E12, 305.0], [1.74145818E12, 299.0], [1.74145956E12, 346.0], [1.74145926E12, 340.0], [1.74145848E12, 305.0], [1.74145824E12, 300.80000000000007], [1.7414595E12, 345.0], [1.74145806E12, 297.0], [1.74145938E12, 343.0], [1.74145908E12, 336.0], [1.74145878E12, 331.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.74145812E12, 330.0], [1.74145962E12, 359.14], [1.74145932E12, 350.0], [1.74145902E12, 348.32000000000005], [1.7414592E12, 347.43999999999994], [1.7414589E12, 346.0], [1.7414586E12, 339.04999999999995], [1.7414583E12, 333.39999999999986], [1.74145944E12, 348.0], [1.74145914E12, 354.65999999999997], [1.74145884E12, 347.8599999999997], [1.74145854E12, 344.4399999999996], [1.74145872E12, 346.8699999999999], [1.74145842E12, 320.87], [1.74145896E12, 358.2800000000002], [1.74145866E12, 335.35000000000025], [1.74145836E12, 326.68000000000006], [1.74145818E12, 322.0], [1.74145956E12, 352.94000000000005], [1.74145926E12, 352.14], [1.74145848E12, 333.74], [1.74145824E12, 331.67999999999984], [1.7414595E12, 351.0], [1.74145806E12, 1092.0], [1.74145938E12, 351.0], [1.74145908E12, 347.0], [1.74145878E12, 342.24]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.74145812E12, 307.9], [1.74145962E12, 352.0], [1.74145932E12, 344.0], [1.74145902E12, 337.0], [1.7414592E12, 341.0], [1.7414589E12, 336.0], [1.7414586E12, 323.25], [1.7414583E12, 310.0], [1.74145944E12, 345.5], [1.74145914E12, 341.0], [1.74145884E12, 336.0], [1.74145854E12, 314.65], [1.74145872E12, 333.0], [1.74145842E12, 310.0], [1.74145896E12, 337.0], [1.74145866E12, 319.0], [1.74145836E12, 310.19999999999993], [1.74145818E12, 302.0], [1.74145956E12, 348.0], [1.74145926E12, 342.0], [1.74145848E12, 310.0], [1.74145824E12, 305.0], [1.7414595E12, 346.0], [1.74145806E12, 308.25], [1.74145938E12, 344.0], [1.74145908E12, 338.0], [1.74145878E12, 334.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.74145812E12, 215.0], [1.74145962E12, 305.0], [1.74145932E12, 229.0], [1.74145902E12, 244.0], [1.7414592E12, 238.0], [1.7414589E12, 228.0], [1.7414586E12, 223.0], [1.7414583E12, 218.0], [1.74145944E12, 241.0], [1.74145914E12, 231.0], [1.74145884E12, 233.0], [1.74145854E12, 224.0], [1.74145872E12, 231.0], [1.74145842E12, 221.0], [1.74145896E12, 236.0], [1.74145866E12, 225.0], [1.74145836E12, 214.0], [1.74145818E12, 217.0], [1.74145956E12, 252.0], [1.74145926E12, 235.0], [1.74145848E12, 222.0], [1.74145824E12, 219.0], [1.7414595E12, 262.0], [1.74145806E12, 218.0], [1.74145938E12, 249.0], [1.74145908E12, 235.0], [1.74145878E12, 226.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.74145812E12, 288.0], [1.74145962E12, 335.0], [1.74145932E12, 324.0], [1.74145902E12, 317.0], [1.7414592E12, 325.0], [1.7414589E12, 312.0], [1.7414586E12, 302.0], [1.7414583E12, 291.0], [1.74145944E12, 326.0], [1.74145914E12, 322.0], [1.74145884E12, 314.0], [1.74145854E12, 296.0], [1.74145872E12, 318.0], [1.74145842E12, 294.0], [1.74145896E12, 316.0], [1.74145866E12, 305.0], [1.74145836E12, 293.0], [1.74145818E12, 289.0], [1.74145956E12, 323.0], [1.74145926E12, 320.0], [1.74145848E12, 294.0], [1.74145824E12, 291.0], [1.7414595E12, 325.0], [1.74145806E12, 288.0], [1.74145938E12, 327.0], [1.74145908E12, 317.0], [1.74145878E12, 311.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74145962E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 296.0, "minX": 4.0, "maxY": 338.5, "series": [{"data": [[4.0, 323.5], [9.0, 315.0], [10.0, 302.0], [11.0, 299.0], [6.0, 338.5], [12.0, 296.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 12.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 296.0, "minX": 4.0, "maxY": 338.5, "series": [{"data": [[4.0, 323.5], [9.0, 315.0], [10.0, 301.0], [11.0, 299.0], [6.0, 338.5], [12.0, 296.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 12.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 2.95, "minX": 1.74145806E12, "maxY": 10.4, "series": [{"data": [[1.74145812E12, 10.35], [1.74145962E12, 4.816666666666666], [1.74145932E12, 9.25], [1.74145902E12, 9.45], [1.7414592E12, 9.25], [1.7414589E12, 9.55], [1.7414586E12, 9.9], [1.7414583E12, 10.316666666666666], [1.74145944E12, 9.166666666666666], [1.74145914E12, 9.35], [1.74145884E12, 9.466666666666667], [1.74145854E12, 10.1], [1.74145872E12, 9.5], [1.74145842E12, 10.2], [1.74145896E12, 9.45], [1.74145866E12, 9.866666666666667], [1.74145836E12, 10.25], [1.74145818E12, 10.4], [1.74145956E12, 9.2], [1.74145926E12, 9.35], [1.74145848E12, 10.2], [1.74145824E12, 10.35], [1.7414595E12, 9.15], [1.74145806E12, 2.95], [1.74145938E12, 9.183333333333334], [1.74145908E12, 9.4], [1.74145878E12, 9.583333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74145962E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 2.9, "minX": 1.74145806E12, "maxY": 10.4, "series": [{"data": [[1.74145812E12, 10.35], [1.74145962E12, 4.866666666666666], [1.74145932E12, 9.25], [1.74145902E12, 9.45], [1.7414592E12, 9.25], [1.7414589E12, 9.55], [1.7414586E12, 9.9], [1.7414583E12, 10.316666666666666], [1.74145944E12, 9.15], [1.74145914E12, 9.35], [1.74145884E12, 9.466666666666667], [1.74145854E12, 10.1], [1.74145872E12, 9.5], [1.74145842E12, 10.2], [1.74145896E12, 9.45], [1.74145866E12, 9.866666666666667], [1.74145836E12, 10.25], [1.74145818E12, 10.4], [1.74145956E12, 9.2], [1.74145926E12, 9.35], [1.74145848E12, 10.2], [1.74145824E12, 10.35], [1.7414595E12, 9.15], [1.74145806E12, 2.9], [1.74145938E12, 9.2], [1.74145908E12, 9.4], [1.74145878E12, 9.583333333333334]], "isOverall": false, "label": "201", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74145962E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 2.9, "minX": 1.74145806E12, "maxY": 10.4, "series": [{"data": [[1.74145812E12, 10.35], [1.74145962E12, 4.866666666666666], [1.74145932E12, 9.25], [1.74145902E12, 9.45], [1.7414592E12, 9.25], [1.7414589E12, 9.55], [1.7414586E12, 9.9], [1.7414583E12, 10.316666666666666], [1.74145944E12, 9.15], [1.74145914E12, 9.35], [1.74145884E12, 9.466666666666667], [1.74145854E12, 10.1], [1.74145872E12, 9.5], [1.74145842E12, 10.2], [1.74145896E12, 9.45], [1.74145866E12, 9.866666666666667], [1.74145836E12, 10.25], [1.74145818E12, 10.4], [1.74145956E12, 9.2], [1.74145926E12, 9.35], [1.74145848E12, 10.2], [1.74145824E12, 10.35], [1.7414595E12, 9.15], [1.74145806E12, 2.9], [1.74145938E12, 9.2], [1.74145908E12, 9.4], [1.74145878E12, 9.583333333333334]], "isOverall": false, "label": "HTTP Request - enroll-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74145962E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 2.9, "minX": 1.74145806E12, "maxY": 10.4, "series": [{"data": [[1.74145812E12, 10.35], [1.74145962E12, 4.866666666666666], [1.74145932E12, 9.25], [1.74145902E12, 9.45], [1.7414592E12, 9.25], [1.7414589E12, 9.55], [1.7414586E12, 9.9], [1.7414583E12, 10.316666666666666], [1.74145944E12, 9.15], [1.74145914E12, 9.35], [1.74145884E12, 9.466666666666667], [1.74145854E12, 10.1], [1.74145872E12, 9.5], [1.74145842E12, 10.2], [1.74145896E12, 9.45], [1.74145866E12, 9.866666666666667], [1.74145836E12, 10.25], [1.74145818E12, 10.4], [1.74145956E12, 9.2], [1.74145926E12, 9.35], [1.74145848E12, 10.2], [1.74145824E12, 10.35], [1.7414595E12, 9.15], [1.74145806E12, 2.9], [1.74145938E12, 9.2], [1.74145908E12, 9.4], [1.74145878E12, 9.583333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74145962E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

