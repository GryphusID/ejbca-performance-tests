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
        data: {"result": {"minY": 13.0, "minX": 0.0, "maxY": 28164.0, "series": [{"data": [[0.0, 13.0], [0.1, 14.0], [0.2, 14.0], [0.3, 14.0], [0.4, 14.0], [0.5, 14.0], [0.6, 14.0], [0.7, 15.0], [0.8, 15.0], [0.9, 15.0], [1.0, 15.0], [1.1, 15.0], [1.2, 15.0], [1.3, 15.0], [1.4, 15.0], [1.5, 15.0], [1.6, 15.0], [1.7, 15.0], [1.8, 15.0], [1.9, 15.0], [2.0, 15.0], [2.1, 15.0], [2.2, 15.0], [2.3, 15.0], [2.4, 15.0], [2.5, 15.0], [2.6, 15.0], [2.7, 15.0], [2.8, 15.0], [2.9, 15.0], [3.0, 15.0], [3.1, 15.0], [3.2, 15.0], [3.3, 15.0], [3.4, 15.0], [3.5, 15.0], [3.6, 15.0], [3.7, 15.0], [3.8, 15.0], [3.9, 15.0], [4.0, 15.0], [4.1, 15.0], [4.2, 15.0], [4.3, 16.0], [4.4, 16.0], [4.5, 16.0], [4.6, 16.0], [4.7, 16.0], [4.8, 16.0], [4.9, 16.0], [5.0, 16.0], [5.1, 16.0], [5.2, 16.0], [5.3, 16.0], [5.4, 16.0], [5.5, 16.0], [5.6, 16.0], [5.7, 16.0], [5.8, 16.0], [5.9, 16.0], [6.0, 16.0], [6.1, 16.0], [6.2, 16.0], [6.3, 16.0], [6.4, 16.0], [6.5, 16.0], [6.6, 16.0], [6.7, 16.0], [6.8, 16.0], [6.9, 16.0], [7.0, 16.0], [7.1, 16.0], [7.2, 16.0], [7.3, 16.0], [7.4, 16.0], [7.5, 16.0], [7.6, 16.0], [7.7, 16.0], [7.8, 16.0], [7.9, 16.0], [8.0, 16.0], [8.1, 16.0], [8.2, 16.0], [8.3, 16.0], [8.4, 16.0], [8.5, 16.0], [8.6, 16.0], [8.7, 16.0], [8.8, 16.0], [8.9, 16.0], [9.0, 16.0], [9.1, 16.0], [9.2, 16.0], [9.3, 16.0], [9.4, 16.0], [9.5, 16.0], [9.6, 16.0], [9.7, 16.0], [9.8, 16.0], [9.9, 16.0], [10.0, 16.0], [10.1, 16.0], [10.2, 16.0], [10.3, 16.0], [10.4, 16.0], [10.5, 16.0], [10.6, 16.0], [10.7, 16.0], [10.8, 16.0], [10.9, 16.0], [11.0, 16.0], [11.1, 16.0], [11.2, 16.0], [11.3, 16.0], [11.4, 16.0], [11.5, 16.0], [11.6, 16.0], [11.7, 16.0], [11.8, 16.0], [11.9, 16.0], [12.0, 16.0], [12.1, 16.0], [12.2, 16.0], [12.3, 16.0], [12.4, 16.0], [12.5, 16.0], [12.6, 16.0], [12.7, 16.0], [12.8, 16.0], [12.9, 16.0], [13.0, 17.0], [13.1, 17.0], [13.2, 17.0], [13.3, 17.0], [13.4, 17.0], [13.5, 17.0], [13.6, 17.0], [13.7, 17.0], [13.8, 17.0], [13.9, 17.0], [14.0, 17.0], [14.1, 17.0], [14.2, 17.0], [14.3, 17.0], [14.4, 17.0], [14.5, 17.0], [14.6, 17.0], [14.7, 17.0], [14.8, 17.0], [14.9, 17.0], [15.0, 17.0], [15.1, 17.0], [15.2, 17.0], [15.3, 17.0], [15.4, 17.0], [15.5, 17.0], [15.6, 17.0], [15.7, 17.0], [15.8, 17.0], [15.9, 17.0], [16.0, 17.0], [16.1, 17.0], [16.2, 17.0], [16.3, 17.0], [16.4, 17.0], [16.5, 17.0], [16.6, 17.0], [16.7, 17.0], [16.8, 17.0], [16.9, 17.0], [17.0, 17.0], [17.1, 17.0], [17.2, 17.0], [17.3, 17.0], [17.4, 17.0], [17.5, 17.0], [17.6, 17.0], [17.7, 17.0], [17.8, 17.0], [17.9, 17.0], [18.0, 17.0], [18.1, 17.0], [18.2, 17.0], [18.3, 17.0], [18.4, 17.0], [18.5, 17.0], [18.6, 17.0], [18.7, 17.0], [18.8, 17.0], [18.9, 17.0], [19.0, 17.0], [19.1, 17.0], [19.2, 17.0], [19.3, 17.0], [19.4, 17.0], [19.5, 17.0], [19.6, 17.0], [19.7, 17.0], [19.8, 17.0], [19.9, 17.0], [20.0, 17.0], [20.1, 17.0], [20.2, 18.0], [20.3, 18.0], [20.4, 18.0], [20.5, 18.0], [20.6, 18.0], [20.7, 18.0], [20.8, 18.0], [20.9, 18.0], [21.0, 18.0], [21.1, 18.0], [21.2, 18.0], [21.3, 18.0], [21.4, 18.0], [21.5, 18.0], [21.6, 18.0], [21.7, 18.0], [21.8, 18.0], [21.9, 18.0], [22.0, 18.0], [22.1, 18.0], [22.2, 18.0], [22.3, 18.0], [22.4, 18.0], [22.5, 18.0], [22.6, 18.0], [22.7, 18.0], [22.8, 18.0], [22.9, 18.0], [23.0, 18.0], [23.1, 18.0], [23.2, 18.0], [23.3, 18.0], [23.4, 18.0], [23.5, 18.0], [23.6, 18.0], [23.7, 18.0], [23.8, 18.0], [23.9, 18.0], [24.0, 18.0], [24.1, 18.0], [24.2, 18.0], [24.3, 18.0], [24.4, 18.0], [24.5, 18.0], [24.6, 18.0], [24.7, 18.0], [24.8, 18.0], [24.9, 18.0], [25.0, 18.0], [25.1, 18.0], [25.2, 18.0], [25.3, 18.0], [25.4, 18.0], [25.5, 18.0], [25.6, 18.0], [25.7, 19.0], [25.8, 19.0], [25.9, 19.0], [26.0, 19.0], [26.1, 19.0], [26.2, 19.0], [26.3, 19.0], [26.4, 19.0], [26.5, 19.0], [26.6, 19.0], [26.7, 19.0], [26.8, 19.0], [26.9, 19.0], [27.0, 19.0], [27.1, 19.0], [27.2, 19.0], [27.3, 19.0], [27.4, 19.0], [27.5, 19.0], [27.6, 19.0], [27.7, 19.0], [27.8, 19.0], [27.9, 19.0], [28.0, 19.0], [28.1, 19.0], [28.2, 19.0], [28.3, 19.0], [28.4, 19.0], [28.5, 19.0], [28.6, 19.0], [28.7, 19.0], [28.8, 19.0], [28.9, 19.0], [29.0, 19.0], [29.1, 19.0], [29.2, 19.0], [29.3, 19.0], [29.4, 19.0], [29.5, 19.0], [29.6, 19.0], [29.7, 20.0], [29.8, 20.0], [29.9, 20.0], [30.0, 20.0], [30.1, 20.0], [30.2, 20.0], [30.3, 20.0], [30.4, 20.0], [30.5, 20.0], [30.6, 20.0], [30.7, 20.0], [30.8, 20.0], [30.9, 20.0], [31.0, 20.0], [31.1, 20.0], [31.2, 20.0], [31.3, 20.0], [31.4, 20.0], [31.5, 20.0], [31.6, 20.0], [31.7, 20.0], [31.8, 20.0], [31.9, 20.0], [32.0, 20.0], [32.1, 20.0], [32.2, 20.0], [32.3, 20.0], [32.4, 20.0], [32.5, 20.0], [32.6, 20.0], [32.7, 20.0], [32.8, 20.0], [32.9, 20.0], [33.0, 20.0], [33.1, 20.0], [33.2, 20.0], [33.3, 20.0], [33.4, 20.0], [33.5, 20.0], [33.6, 20.0], [33.7, 20.0], [33.8, 20.0], [33.9, 21.0], [34.0, 21.0], [34.1, 21.0], [34.2, 21.0], [34.3, 21.0], [34.4, 21.0], [34.5, 21.0], [34.6, 21.0], [34.7, 21.0], [34.8, 21.0], [34.9, 21.0], [35.0, 21.0], [35.1, 21.0], [35.2, 21.0], [35.3, 21.0], [35.4, 21.0], [35.5, 21.0], [35.6, 21.0], [35.7, 21.0], [35.8, 21.0], [35.9, 21.0], [36.0, 21.0], [36.1, 21.0], [36.2, 21.0], [36.3, 21.0], [36.4, 21.0], [36.5, 21.0], [36.6, 21.0], [36.7, 21.0], [36.8, 21.0], [36.9, 21.0], [37.0, 21.0], [37.1, 21.0], [37.2, 21.0], [37.3, 21.0], [37.4, 21.0], [37.5, 21.0], [37.6, 21.0], [37.7, 21.0], [37.8, 21.0], [37.9, 21.0], [38.0, 22.0], [38.1, 22.0], [38.2, 22.0], [38.3, 22.0], [38.4, 22.0], [38.5, 22.0], [38.6, 22.0], [38.7, 22.0], [38.8, 22.0], [38.9, 22.0], [39.0, 22.0], [39.1, 22.0], [39.2, 22.0], [39.3, 22.0], [39.4, 22.0], [39.5, 22.0], [39.6, 22.0], [39.7, 22.0], [39.8, 22.0], [39.9, 22.0], [40.0, 22.0], [40.1, 22.0], [40.2, 22.0], [40.3, 22.0], [40.4, 22.0], [40.5, 22.0], [40.6, 22.0], [40.7, 22.0], [40.8, 22.0], [40.9, 22.0], [41.0, 22.0], [41.1, 22.0], [41.2, 22.0], [41.3, 22.0], [41.4, 23.0], [41.5, 23.0], [41.6, 23.0], [41.7, 23.0], [41.8, 23.0], [41.9, 23.0], [42.0, 23.0], [42.1, 23.0], [42.2, 23.0], [42.3, 23.0], [42.4, 23.0], [42.5, 23.0], [42.6, 23.0], [42.7, 23.0], [42.8, 23.0], [42.9, 23.0], [43.0, 23.0], [43.1, 23.0], [43.2, 24.0], [43.3, 24.0], [43.4, 24.0], [43.5, 24.0], [43.6, 24.0], [43.7, 24.0], [43.8, 24.0], [43.9, 24.0], [44.0, 24.0], [44.1, 25.0], [44.2, 25.0], [44.3, 25.0], [44.4, 25.0], [44.5, 25.0], [44.6, 25.0], [44.7, 25.0], [44.8, 26.0], [44.9, 26.0], [45.0, 26.0], [45.1, 26.0], [45.2, 26.0], [45.3, 26.0], [45.4, 27.0], [45.5, 27.0], [45.6, 27.0], [45.7, 28.0], [45.8, 28.0], [45.9, 28.0], [46.0, 29.0], [46.1, 29.0], [46.2, 29.0], [46.3, 29.0], [46.4, 30.0], [46.5, 31.0], [46.6, 31.0], [46.7, 32.0], [46.8, 34.0], [46.9, 35.0], [47.0, 44.0], [47.1, 87.0], [47.2, 105.0], [47.3, 108.0], [47.4, 110.0], [47.5, 112.0], [47.6, 115.0], [47.7, 117.0], [47.8, 118.0], [47.9, 119.0], [48.0, 120.0], [48.1, 121.0], [48.2, 121.0], [48.3, 123.0], [48.4, 124.0], [48.5, 125.0], [48.6, 127.0], [48.7, 129.0], [48.8, 132.0], [48.9, 138.0], [49.0, 144.0], [49.1, 155.0], [49.2, 205.0], [49.3, 211.0], [49.4, 215.0], [49.5, 220.0], [49.6, 225.0], [49.7, 228.0], [49.8, 238.0], [49.9, 255.0], [50.0, 294.0], [50.1, 299.0], [50.2, 301.0], [50.3, 303.0], [50.4, 305.0], [50.5, 306.0], [50.6, 308.0], [50.7, 311.0], [50.8, 317.0], [50.9, 325.0], [51.0, 336.0], [51.1, 342.0], [51.2, 345.0], [51.3, 348.0], [51.4, 351.0], [51.5, 360.0], [51.6, 368.0], [51.7, 370.0], [51.8, 372.0], [51.9, 372.0], [52.0, 373.0], [52.1, 373.0], [52.2, 374.0], [52.3, 374.0], [52.4, 374.0], [52.5, 374.0], [52.6, 375.0], [52.7, 375.0], [52.8, 375.0], [52.9, 375.0], [53.0, 375.0], [53.1, 376.0], [53.2, 376.0], [53.3, 376.0], [53.4, 376.0], [53.5, 376.0], [53.6, 376.0], [53.7, 376.0], [53.8, 377.0], [53.9, 377.0], [54.0, 377.0], [54.1, 377.0], [54.2, 377.0], [54.3, 377.0], [54.4, 377.0], [54.5, 377.0], [54.6, 377.0], [54.7, 377.0], [54.8, 378.0], [54.9, 378.0], [55.0, 378.0], [55.1, 378.0], [55.2, 378.0], [55.3, 378.0], [55.4, 378.0], [55.5, 378.0], [55.6, 378.0], [55.7, 378.0], [55.8, 378.0], [55.9, 378.0], [56.0, 378.0], [56.1, 379.0], [56.2, 379.0], [56.3, 379.0], [56.4, 379.0], [56.5, 379.0], [56.6, 379.0], [56.7, 379.0], [56.8, 379.0], [56.9, 379.0], [57.0, 379.0], [57.1, 379.0], [57.2, 379.0], [57.3, 379.0], [57.4, 379.0], [57.5, 380.0], [57.6, 380.0], [57.7, 380.0], [57.8, 380.0], [57.9, 380.0], [58.0, 380.0], [58.1, 380.0], [58.2, 380.0], [58.3, 380.0], [58.4, 380.0], [58.5, 380.0], [58.6, 380.0], [58.7, 380.0], [58.8, 380.0], [58.9, 380.0], [59.0, 380.0], [59.1, 381.0], [59.2, 381.0], [59.3, 381.0], [59.4, 381.0], [59.5, 381.0], [59.6, 381.0], [59.7, 381.0], [59.8, 381.0], [59.9, 381.0], [60.0, 381.0], [60.1, 381.0], [60.2, 381.0], [60.3, 381.0], [60.4, 381.0], [60.5, 381.0], [60.6, 381.0], [60.7, 382.0], [60.8, 382.0], [60.9, 382.0], [61.0, 382.0], [61.1, 382.0], [61.2, 382.0], [61.3, 382.0], [61.4, 382.0], [61.5, 382.0], [61.6, 382.0], [61.7, 382.0], [61.8, 382.0], [61.9, 382.0], [62.0, 382.0], [62.1, 382.0], [62.2, 382.0], [62.3, 382.0], [62.4, 382.0], [62.5, 382.0], [62.6, 383.0], [62.7, 383.0], [62.8, 383.0], [62.9, 383.0], [63.0, 383.0], [63.1, 383.0], [63.2, 383.0], [63.3, 383.0], [63.4, 383.0], [63.5, 383.0], [63.6, 383.0], [63.7, 383.0], [63.8, 383.0], [63.9, 383.0], [64.0, 383.0], [64.1, 383.0], [64.2, 383.0], [64.3, 383.0], [64.4, 383.0], [64.5, 384.0], [64.6, 384.0], [64.7, 384.0], [64.8, 384.0], [64.9, 384.0], [65.0, 384.0], [65.1, 384.0], [65.2, 384.0], [65.3, 384.0], [65.4, 384.0], [65.5, 384.0], [65.6, 384.0], [65.7, 384.0], [65.8, 384.0], [65.9, 384.0], [66.0, 384.0], [66.1, 384.0], [66.2, 384.0], [66.3, 384.0], [66.4, 384.0], [66.5, 384.0], [66.6, 384.0], [66.7, 384.0], [66.8, 385.0], [66.9, 385.0], [67.0, 385.0], [67.1, 385.0], [67.2, 385.0], [67.3, 385.0], [67.4, 385.0], [67.5, 385.0], [67.6, 385.0], [67.7, 385.0], [67.8, 385.0], [67.9, 385.0], [68.0, 385.0], [68.1, 385.0], [68.2, 385.0], [68.3, 385.0], [68.4, 385.0], [68.5, 385.0], [68.6, 385.0], [68.7, 386.0], [68.8, 386.0], [68.9, 386.0], [69.0, 386.0], [69.1, 386.0], [69.2, 386.0], [69.3, 386.0], [69.4, 386.0], [69.5, 386.0], [69.6, 386.0], [69.7, 386.0], [69.8, 386.0], [69.9, 386.0], [70.0, 386.0], [70.1, 386.0], [70.2, 386.0], [70.3, 386.0], [70.4, 386.0], [70.5, 386.0], [70.6, 387.0], [70.7, 387.0], [70.8, 387.0], [70.9, 387.0], [71.0, 387.0], [71.1, 387.0], [71.2, 387.0], [71.3, 387.0], [71.4, 387.0], [71.5, 387.0], [71.6, 387.0], [71.7, 387.0], [71.8, 387.0], [71.9, 387.0], [72.0, 387.0], [72.1, 387.0], [72.2, 387.0], [72.3, 387.0], [72.4, 387.0], [72.5, 388.0], [72.6, 388.0], [72.7, 388.0], [72.8, 388.0], [72.9, 388.0], [73.0, 388.0], [73.1, 388.0], [73.2, 388.0], [73.3, 388.0], [73.4, 388.0], [73.5, 388.0], [73.6, 388.0], [73.7, 388.0], [73.8, 388.0], [73.9, 388.0], [74.0, 388.0], [74.1, 388.0], [74.2, 389.0], [74.3, 389.0], [74.4, 389.0], [74.5, 389.0], [74.6, 389.0], [74.7, 389.0], [74.8, 389.0], [74.9, 389.0], [75.0, 389.0], [75.1, 389.0], [75.2, 389.0], [75.3, 389.0], [75.4, 389.0], [75.5, 389.0], [75.6, 389.0], [75.7, 390.0], [75.8, 390.0], [75.9, 390.0], [76.0, 390.0], [76.1, 390.0], [76.2, 390.0], [76.3, 390.0], [76.4, 390.0], [76.5, 390.0], [76.6, 390.0], [76.7, 390.0], [76.8, 390.0], [76.9, 391.0], [77.0, 391.0], [77.1, 391.0], [77.2, 391.0], [77.3, 391.0], [77.4, 391.0], [77.5, 391.0], [77.6, 391.0], [77.7, 391.0], [77.8, 391.0], [77.9, 392.0], [78.0, 392.0], [78.1, 392.0], [78.2, 392.0], [78.3, 392.0], [78.4, 392.0], [78.5, 392.0], [78.6, 392.0], [78.7, 392.0], [78.8, 393.0], [78.9, 393.0], [79.0, 393.0], [79.1, 393.0], [79.2, 393.0], [79.3, 393.0], [79.4, 394.0], [79.5, 394.0], [79.6, 394.0], [79.7, 394.0], [79.8, 394.0], [79.9, 394.0], [80.0, 395.0], [80.1, 395.0], [80.2, 395.0], [80.3, 395.0], [80.4, 395.0], [80.5, 396.0], [80.6, 396.0], [80.7, 396.0], [80.8, 396.0], [80.9, 397.0], [81.0, 397.0], [81.1, 397.0], [81.2, 397.0], [81.3, 398.0], [81.4, 398.0], [81.5, 398.0], [81.6, 399.0], [81.7, 399.0], [81.8, 399.0], [81.9, 400.0], [82.0, 400.0], [82.1, 400.0], [82.2, 401.0], [82.3, 401.0], [82.4, 401.0], [82.5, 402.0], [82.6, 402.0], [82.7, 402.0], [82.8, 403.0], [82.9, 403.0], [83.0, 403.0], [83.1, 403.0], [83.2, 404.0], [83.3, 404.0], [83.4, 404.0], [83.5, 404.0], [83.6, 405.0], [83.7, 406.0], [83.8, 406.0], [83.9, 406.0], [84.0, 406.0], [84.1, 407.0], [84.2, 407.0], [84.3, 408.0], [84.4, 408.0], [84.5, 408.0], [84.6, 409.0], [84.7, 409.0], [84.8, 409.0], [84.9, 410.0], [85.0, 410.0], [85.1, 410.0], [85.2, 411.0], [85.3, 411.0], [85.4, 412.0], [85.5, 412.0], [85.6, 412.0], [85.7, 413.0], [85.8, 413.0], [85.9, 414.0], [86.0, 414.0], [86.1, 414.0], [86.2, 415.0], [86.3, 415.0], [86.4, 415.0], [86.5, 416.0], [86.6, 416.0], [86.7, 416.0], [86.8, 417.0], [86.9, 417.0], [87.0, 417.0], [87.1, 418.0], [87.2, 418.0], [87.3, 419.0], [87.4, 419.0], [87.5, 419.0], [87.6, 419.0], [87.7, 420.0], [87.8, 420.0], [87.9, 420.0], [88.0, 421.0], [88.1, 421.0], [88.2, 422.0], [88.3, 422.0], [88.4, 422.0], [88.5, 423.0], [88.6, 423.0], [88.7, 423.0], [88.8, 423.0], [88.9, 424.0], [89.0, 424.0], [89.1, 424.0], [89.2, 425.0], [89.3, 425.0], [89.4, 425.0], [89.5, 425.0], [89.6, 426.0], [89.7, 426.0], [89.8, 426.0], [89.9, 426.0], [90.0, 426.0], [90.1, 427.0], [90.2, 427.0], [90.3, 427.0], [90.4, 427.0], [90.5, 427.0], [90.6, 427.0], [90.7, 428.0], [90.8, 428.0], [90.9, 428.0], [91.0, 428.0], [91.1, 428.0], [91.2, 428.0], [91.3, 428.0], [91.4, 429.0], [91.5, 429.0], [91.6, 429.0], [91.7, 429.0], [91.8, 429.0], [91.9, 429.0], [92.0, 429.0], [92.1, 429.0], [92.2, 430.0], [92.3, 430.0], [92.4, 430.0], [92.5, 430.0], [92.6, 430.0], [92.7, 430.0], [92.8, 430.0], [92.9, 431.0], [93.0, 431.0], [93.1, 431.0], [93.2, 431.0], [93.3, 431.0], [93.4, 431.0], [93.5, 431.0], [93.6, 432.0], [93.7, 432.0], [93.8, 432.0], [93.9, 432.0], [94.0, 432.0], [94.1, 432.0], [94.2, 433.0], [94.3, 433.0], [94.4, 433.0], [94.5, 433.0], [94.6, 433.0], [94.7, 433.0], [94.8, 434.0], [94.9, 434.0], [95.0, 434.0], [95.1, 434.0], [95.2, 434.0], [95.3, 434.0], [95.4, 435.0], [95.5, 435.0], [95.6, 435.0], [95.7, 435.0], [95.8, 435.0], [95.9, 435.0], [96.0, 436.0], [96.1, 436.0], [96.2, 436.0], [96.3, 436.0], [96.4, 436.0], [96.5, 436.0], [96.6, 436.0], [96.7, 437.0], [96.8, 437.0], [96.9, 437.0], [97.0, 437.0], [97.1, 437.0], [97.2, 437.0], [97.3, 437.0], [97.4, 438.0], [97.5, 438.0], [97.6, 438.0], [97.7, 438.0], [97.8, 438.0], [97.9, 439.0], [98.0, 439.0], [98.1, 439.0], [98.2, 439.0], [98.3, 440.0], [98.4, 440.0], [98.5, 440.0], [98.6, 441.0], [98.7, 441.0], [98.8, 442.0], [98.9, 443.0], [99.0, 444.0], [99.1, 444.0], [99.2, 446.0], [99.3, 449.0], [99.4, 452.0], [99.5, 457.0], [99.6, 461.0], [99.7, 473.0], [99.8, 483.0], [99.9, 5759.0]], "isOverall": false, "label": "HTTP Request - enroll", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 7065.0, "series": [{"data": [[0.0, 7065.0], [10700.0, 1.0], [11000.0, 1.0], [10900.0, 1.0], [200.0, 149.0], [16500.0, 3.0], [300.0, 4762.0], [5700.0, 3.0], [5900.0, 6.0], [100.0, 306.0], [400.0, 2696.0], [28100.0, 3.0], [500.0, 4.0]], "isOverall": false, "label": "HTTP Request - enroll", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 28100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 3.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 7500.0, "series": [{"data": [[0.0, 7488.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 3.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 9.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 7500.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 2.857142857142857, "minX": 1.74179274E12, "maxY": 6.0, "series": [{"data": [[1.74179286E12, 5.220568335588633], [1.74179316E12, 3.0], [1.74179346E12, 3.0], [1.7417928E12, 6.0], [1.74179376E12, 3.0], [1.74179358E12, 3.0], [1.74179292E12, 3.0], [1.74179322E12, 3.0], [1.74179352E12, 3.0], [1.74179334E12, 3.0], [1.74179364E12, 3.0], [1.74179298E12, 3.0], [1.74179328E12, 3.0], [1.7417931E12, 3.0], [1.7417934E12, 3.0], [1.74179274E12, 6.0], [1.7417937E12, 3.0], [1.74179304E12, 3.0], [1.74179382E12, 2.857142857142857]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74179382E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 18.2, "minX": 1.0, "maxY": 401.0, "series": [{"data": [[4.0, 18.2], [2.0, 401.0], [1.0, 382.0], [5.0, 96.94117647058825], [6.0, 69.08151195680144], [3.0, 396.81589551201864]], "isOverall": false, "label": "HTTP Request - enroll", "isController": false}, {"data": [[4.5579333333333425, 226.40820000000062]], "isOverall": false, "label": "HTTP Request - enroll-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 6.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 383.6, "minX": 1.74179274E12, "maxY": 74295.1, "series": [{"data": [[1.74179286E12, 31277.9], [1.74179316E12, 20439.133333333335], [1.74179346E12, 21418.916666666668], [1.7417928E12, 61132.05], [1.74179376E12, 20765.833333333332], [1.74179358E12, 20905.833333333332], [1.74179292E12, 20999.083333333332], [1.74179322E12, 21419.016666666666], [1.74179352E12, 21139.116666666665], [1.74179334E12, 21279.116666666665], [1.74179364E12, 21559.133333333335], [1.74179298E12, 21558.85], [1.74179328E12, 21419.016666666666], [1.7417931E12, 20859.266666666666], [1.7417934E12, 21045.566666666666], [1.74179274E12, 12463.966666666667], [1.7417937E12, 21045.7], [1.74179304E12, 21325.666666666668], [1.74179382E12, 1306.6666666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.74179286E12, 20248.6], [1.74179316E12, 6000.6], [1.74179346E12, 6288.3], [1.7417928E12, 74295.1], [1.74179376E12, 6096.5], [1.74179358E12, 6137.6], [1.74179292E12, 6165.0], [1.74179322E12, 6288.3], [1.74179352E12, 6206.1], [1.74179334E12, 6247.2], [1.74179364E12, 6329.4], [1.74179298E12, 6329.4], [1.74179328E12, 6288.3], [1.7417931E12, 6123.9], [1.7417934E12, 6178.7], [1.74179274E12, 17453.8], [1.7417937E12, 6178.7], [1.74179304E12, 6260.9], [1.74179382E12, 383.6]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74179382E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 47.19387755102042, "minX": 1.74179274E12, "maxY": 410.109589041096, "series": [{"data": [[1.74179286E12, 142.3890392422193], [1.74179316E12, 410.109589041096], [1.74179346E12, 392.5751633986925], [1.7417928E12, 76.9524248570901], [1.74179376E12, 403.0651685393259], [1.74179358E12, 401.7187500000002], [1.74179292E12, 400.72666666666646], [1.74179322E12, 392.35947712418283], [1.74179352E12, 397.5496688741723], [1.74179334E12, 393.70833333333314], [1.74179364E12, 389.13203463203445], [1.74179298E12, 388.8246753246754], [1.74179328E12, 393.4618736383445], [1.7417931E12, 400.55033557047005], [1.7417934E12, 397.3370288248337], [1.74179274E12, 47.19387755102042], [1.7417937E12, 398.6297117516626], [1.74179304E12, 393.92122538293245], [1.74179382E12, 391.9642857142857]], "isOverall": false, "label": "HTTP Request - enroll", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74179382E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 47.17660910518051, "minX": 1.74179274E12, "maxY": 410.109589041096, "series": [{"data": [[1.74179286E12, 142.38430311231406], [1.74179316E12, 410.109589041096], [1.74179346E12, 392.56427015250574], [1.7417928E12, 76.94099207080973], [1.74179376E12, 403.0629213483145], [1.74179358E12, 401.71428571428595], [1.74179292E12, 400.72444444444477], [1.74179322E12, 392.34858387799557], [1.74179352E12, 397.5452538631346], [1.74179334E12, 393.70833333333314], [1.74179364E12, 389.12770562770567], [1.74179298E12, 388.8160173160177], [1.74179328E12, 393.4531590413945], [1.7417931E12, 400.543624161074], [1.7417934E12, 397.3370288248337], [1.74179274E12, 47.17660910518051], [1.7417937E12, 398.6297117516626], [1.74179304E12, 393.9168490153174], [1.74179382E12, 391.9642857142857]], "isOverall": false, "label": "HTTP Request - enroll", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74179382E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.74179274E12, "maxY": 0.36185243328100475, "series": [{"data": [[1.74179286E12, 0.008795669824086595], [1.74179316E12, 0.025114155251141558], [1.74179346E12, 0.019607843137254895], [1.7417928E12, 0.20947814862622205], [1.74179376E12, 0.020224719101123584], [1.74179358E12, 0.02232142857142858], [1.74179292E12, 0.026666666666666637], [1.74179322E12, 0.023965141612200428], [1.74179352E12, 0.022075055187637964], [1.74179334E12, 0.026315789473684188], [1.74179364E12, 0.01948051948051947], [1.74179298E12, 0.02597402597402595], [1.74179328E12, 0.03050108932461875], [1.7417931E12, 0.024608501118568233], [1.7417934E12, 0.02882483370288246], [1.74179274E12, 0.36185243328100475], [1.7417937E12, 0.022172949002217293], [1.74179304E12, 0.0284463894967177], [1.74179382E12, 0.0]], "isOverall": false, "label": "HTTP Request - enroll", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74179382E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 287.0, "minX": 1.7417928E12, "maxY": 28164.0, "series": [{"data": [[1.74179286E12, 490.0], [1.74179316E12, 444.0], [1.74179346E12, 441.0], [1.7417928E12, 28164.0], [1.74179376E12, 451.0], [1.74179358E12, 461.0], [1.74179292E12, 444.0], [1.74179322E12, 442.0], [1.74179352E12, 446.0], [1.74179334E12, 438.0], [1.74179364E12, 447.0], [1.74179298E12, 438.0], [1.74179328E12, 438.0], [1.7417931E12, 448.0], [1.7417934E12, 437.0], [1.7417937E12, 445.0], [1.74179304E12, 464.0], [1.74179382E12, 406.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.74179286E12, 430.0], [1.74179316E12, 437.0], [1.74179346E12, 433.0], [1.7417928E12, 480.0], [1.74179376E12, 439.0], [1.74179358E12, 436.0], [1.74179292E12, 429.0], [1.74179322E12, 429.0], [1.74179352E12, 435.6], [1.74179334E12, 432.0], [1.74179364E12, 409.0], [1.74179298E12, 427.0], [1.74179328E12, 431.0], [1.7417931E12, 431.0], [1.7417934E12, 433.0], [1.7417937E12, 437.8], [1.74179304E12, 429.0], [1.74179382E12, 402.2]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.74179286E12, 476.0200000000001], [1.74179316E12, 442.0], [1.74179346E12, 440.0], [1.7417928E12, 28164.0], [1.74179376E12, 444.0], [1.74179358E12, 439.0], [1.74179292E12, 437.0], [1.74179322E12, 438.79999999999995], [1.74179352E12, 440.91999999999996], [1.74179334E12, 436.0], [1.74179364E12, 438.0], [1.74179298E12, 433.37], [1.74179328E12, 437.0], [1.7417931E12, 443.52], [1.7417934E12, 436.0], [1.7417937E12, 443.0], [1.74179304E12, 435.0], [1.74179382E12, 406.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.74179286E12, 446.15], [1.74179316E12, 440.0], [1.74179346E12, 437.0], [1.7417928E12, 510.0], [1.74179376E12, 440.0], [1.74179358E12, 437.0], [1.74179292E12, 430.0], [1.74179322E12, 433.0], [1.74179352E12, 437.29999999999995], [1.74179334E12, 434.0], [1.74179364E12, 423.0], [1.74179298E12, 429.0], [1.74179328E12, 434.0], [1.7417931E12, 432.0], [1.7417934E12, 435.0], [1.7417937E12, 441.0], [1.74179304E12, 432.0], [1.74179382E12, 405.1]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.74179286E12, 317.0], [1.74179316E12, 296.0], [1.74179346E12, 304.0], [1.7417928E12, 323.0], [1.74179376E12, 307.0], [1.74179358E12, 301.0], [1.74179292E12, 287.0], [1.74179322E12, 296.0], [1.74179352E12, 301.0], [1.74179334E12, 298.0], [1.74179364E12, 304.0], [1.74179298E12, 290.0], [1.74179328E12, 294.0], [1.7417931E12, 287.0], [1.7417934E12, 301.0], [1.7417937E12, 306.0], [1.74179304E12, 295.0], [1.74179382E12, 382.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.74179286E12, 387.0], [1.74179316E12, 418.0], [1.74179346E12, 385.0], [1.7417928E12, 439.0], [1.74179376E12, 392.0], [1.74179358E12, 392.0], [1.74179292E12, 396.0], [1.74179322E12, 385.0], [1.74179352E12, 390.0], [1.74179334E12, 386.0], [1.74179364E12, 388.0], [1.74179298E12, 381.0], [1.74179328E12, 387.0], [1.7417931E12, 395.0], [1.7417934E12, 388.0], [1.7417937E12, 390.0], [1.74179304E12, 385.0], [1.74179382E12, 391.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74179382E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 16.0, "minX": 4.0, "maxY": 28164.0, "series": [{"data": [[35.0, 409.0], [38.0, 5987.0], [52.0, 439.0], [54.0, 441.5], [63.0, 436.0], [67.0, 444.0], [4.0, 398.5], [68.0, 455.0], [74.0, 28164.0], [73.0, 456.5], [78.0, 434.0], [79.0, 445.0], [81.0, 444.5], [83.0, 442.0], [80.0, 436.0], [84.0, 438.0], [87.0, 437.0], [85.0, 427.0], [91.0, 389.5], [89.0, 420.5], [95.0, 450.5], [93.0, 397.0], [94.0, 396.0], [99.0, 437.5], [97.0, 427.0], [6.0, 399.0], [105.0, 349.0], [107.0, 435.0], [110.0, 349.0], [108.0, 349.0], [111.0, 338.5], [7.0, 386.0], [116.0, 347.0], [120.0, 344.0], [127.0, 354.0], [8.0, 387.0], [9.0, 388.0], [158.0, 16522.0], [25.0, 465.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[25.0, 226.0], [35.0, 21.0], [38.0, 20.0], [50.0, 32.0], [52.0, 22.0], [54.0, 21.0], [63.0, 22.0], [67.0, 21.0], [68.0, 20.5], [74.0, 17.0], [73.0, 21.0], [78.0, 21.0], [79.0, 19.0], [81.0, 20.0], [83.0, 21.0], [80.0, 21.0], [84.0, 20.0], [87.0, 20.0], [85.0, 20.0], [91.0, 20.0], [89.0, 20.0], [95.0, 21.0], [93.0, 20.0], [94.0, 20.0], [99.0, 20.0], [97.0, 18.0], [107.0, 21.0], [105.0, 21.0], [111.0, 17.5], [110.0, 19.0], [108.0, 21.0], [116.0, 22.0], [120.0, 21.0], [127.0, 18.0], [132.0, 21.0], [134.0, 21.0], [139.0, 20.0], [138.0, 17.0], [141.0, 16.0], [146.0, 19.0], [151.0, 18.0], [153.0, 18.0], [156.0, 17.0], [158.0, 16.0], [161.0, 17.0], [166.0, 16.0], [162.0, 17.0], [167.0, 16.0], [170.0, 16.0], [171.0, 16.0], [169.0, 16.0], [178.0, 16.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 178.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 16.0, "minX": 4.0, "maxY": 28164.0, "series": [{"data": [[35.0, 409.0], [38.0, 5987.0], [52.0, 439.0], [54.0, 441.5], [63.0, 436.0], [67.0, 444.0], [4.0, 398.5], [68.0, 455.0], [74.0, 28164.0], [73.0, 456.5], [78.0, 434.0], [79.0, 445.0], [81.0, 444.5], [83.0, 442.0], [80.0, 436.0], [84.0, 438.0], [87.0, 437.0], [85.0, 427.0], [91.0, 389.5], [89.0, 420.5], [95.0, 450.5], [93.0, 397.0], [94.0, 396.0], [99.0, 437.5], [97.0, 427.0], [6.0, 399.0], [105.0, 349.0], [107.0, 435.0], [110.0, 349.0], [108.0, 349.0], [111.0, 338.5], [7.0, 386.0], [116.0, 347.0], [120.0, 344.0], [127.0, 354.0], [8.0, 387.0], [9.0, 387.5], [158.0, 16522.0], [25.0, 465.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[25.0, 226.0], [35.0, 21.0], [38.0, 20.0], [50.0, 32.0], [52.0, 22.0], [54.0, 21.0], [63.0, 22.0], [67.0, 21.0], [68.0, 20.0], [74.0, 17.0], [73.0, 21.0], [78.0, 21.0], [79.0, 19.0], [81.0, 20.0], [83.0, 21.0], [80.0, 21.0], [84.0, 20.0], [87.0, 20.0], [85.0, 20.0], [91.0, 20.0], [89.0, 20.0], [95.0, 21.0], [93.0, 20.0], [94.0, 20.0], [99.0, 20.0], [97.0, 18.0], [107.0, 21.0], [105.0, 21.0], [111.0, 17.5], [110.0, 19.0], [108.0, 21.0], [116.0, 21.0], [120.0, 21.0], [127.0, 18.0], [132.0, 21.0], [134.0, 21.0], [139.0, 20.0], [138.0, 17.0], [141.0, 16.0], [146.0, 19.0], [151.0, 18.0], [153.0, 18.0], [156.0, 17.0], [158.0, 16.0], [161.0, 17.0], [166.0, 16.0], [162.0, 17.0], [167.0, 16.0], [170.0, 16.0], [171.0, 16.0], [169.0, 16.0], [178.0, 16.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 178.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.4166666666666667, "minX": 1.74179274E12, "maxY": 90.38333333333334, "series": [{"data": [[1.74179286E12, 24.583333333333332], [1.74179316E12, 7.3], [1.74179346E12, 7.65], [1.7417928E12, 90.38333333333334], [1.74179376E12, 7.416666666666667], [1.74179358E12, 7.466666666666667], [1.74179292E12, 7.5], [1.74179322E12, 7.65], [1.74179352E12, 7.55], [1.74179334E12, 7.6], [1.74179364E12, 7.7], [1.74179298E12, 7.7], [1.74179328E12, 7.65], [1.7417931E12, 7.45], [1.7417934E12, 7.516666666666667], [1.74179274E12, 21.333333333333332], [1.7417937E12, 7.516666666666667], [1.74179304E12, 7.616666666666666], [1.74179382E12, 0.4166666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74179382E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.4666666666666667, "minX": 1.74179274E12, "maxY": 86.73333333333333, "series": [{"data": [[1.74179286E12, 7.6], [1.74179316E12, 7.3], [1.74179346E12, 7.65], [1.7417928E12, 3.65], [1.74179376E12, 7.416666666666667], [1.74179358E12, 7.466666666666667], [1.74179292E12, 7.5], [1.74179322E12, 7.65], [1.74179352E12, 7.55], [1.74179334E12, 7.6], [1.74179364E12, 7.7], [1.74179298E12, 7.7], [1.74179328E12, 7.65], [1.7417931E12, 7.45], [1.7417934E12, 7.516666666666667], [1.7417937E12, 7.516666666666667], [1.74179304E12, 7.616666666666666], [1.74179382E12, 0.4666666666666667]], "isOverall": false, "label": "201", "isController": false}, {"data": [[1.74179286E12, 17.033333333333335], [1.7417928E12, 86.73333333333333], [1.74179274E12, 21.233333333333334]], "isOverall": false, "label": "400", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74179382E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.4666666666666667, "minX": 1.74179274E12, "maxY": 86.73333333333333, "series": [{"data": [[1.74179286E12, 7.6], [1.74179316E12, 7.3], [1.74179346E12, 7.65], [1.7417928E12, 3.65], [1.74179376E12, 7.416666666666667], [1.74179358E12, 7.466666666666667], [1.74179292E12, 7.5], [1.74179322E12, 7.65], [1.74179352E12, 7.55], [1.74179334E12, 7.6], [1.74179364E12, 7.7], [1.74179298E12, 7.7], [1.74179328E12, 7.65], [1.7417931E12, 7.45], [1.7417934E12, 7.516666666666667], [1.7417937E12, 7.516666666666667], [1.74179304E12, 7.616666666666666], [1.74179382E12, 0.4666666666666667]], "isOverall": false, "label": "HTTP Request - enroll-success", "isController": false}, {"data": [[1.74179286E12, 17.033333333333335], [1.7417928E12, 86.73333333333333], [1.74179274E12, 21.233333333333334]], "isOverall": false, "label": "HTTP Request - enroll-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74179382E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.4666666666666667, "minX": 1.74179274E12, "maxY": 86.73333333333333, "series": [{"data": [[1.74179286E12, 7.6], [1.74179316E12, 7.3], [1.74179346E12, 7.65], [1.7417928E12, 3.65], [1.74179376E12, 7.416666666666667], [1.74179358E12, 7.466666666666667], [1.74179292E12, 7.5], [1.74179322E12, 7.65], [1.74179352E12, 7.55], [1.74179334E12, 7.6], [1.74179364E12, 7.7], [1.74179298E12, 7.7], [1.74179328E12, 7.65], [1.7417931E12, 7.45], [1.7417934E12, 7.516666666666667], [1.7417937E12, 7.516666666666667], [1.74179304E12, 7.616666666666666], [1.74179382E12, 0.4666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.74179286E12, 17.033333333333335], [1.7417928E12, 86.73333333333333], [1.74179274E12, 21.233333333333334]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74179382E12, "title": "Total Transactions Per Second"}},
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

