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
        data: {"result": {"minY": 12.0, "minX": 0.0, "maxY": 228.0, "series": [{"data": [[0.0, 12.0], [0.1, 13.0], [0.2, 13.0], [0.3, 13.0], [0.4, 13.0], [0.5, 13.0], [0.6, 13.0], [0.7, 13.0], [0.8, 13.0], [0.9, 13.0], [1.0, 14.0], [1.1, 14.0], [1.2, 14.0], [1.3, 14.0], [1.4, 14.0], [1.5, 14.0], [1.6, 14.0], [1.7, 14.0], [1.8, 14.0], [1.9, 14.0], [2.0, 14.0], [2.1, 14.0], [2.2, 14.0], [2.3, 14.0], [2.4, 14.0], [2.5, 14.0], [2.6, 14.0], [2.7, 14.0], [2.8, 14.0], [2.9, 14.0], [3.0, 14.0], [3.1, 14.0], [3.2, 14.0], [3.3, 14.0], [3.4, 14.0], [3.5, 14.0], [3.6, 14.0], [3.7, 14.0], [3.8, 14.0], [3.9, 14.0], [4.0, 14.0], [4.1, 14.0], [4.2, 14.0], [4.3, 14.0], [4.4, 14.0], [4.5, 14.0], [4.6, 14.0], [4.7, 14.0], [4.8, 14.0], [4.9, 14.0], [5.0, 14.0], [5.1, 14.0], [5.2, 14.0], [5.3, 14.0], [5.4, 14.0], [5.5, 14.0], [5.6, 14.0], [5.7, 14.0], [5.8, 14.0], [5.9, 14.0], [6.0, 14.0], [6.1, 14.0], [6.2, 14.0], [6.3, 14.0], [6.4, 14.0], [6.5, 15.0], [6.6, 15.0], [6.7, 15.0], [6.8, 15.0], [6.9, 15.0], [7.0, 15.0], [7.1, 15.0], [7.2, 15.0], [7.3, 15.0], [7.4, 15.0], [7.5, 15.0], [7.6, 15.0], [7.7, 15.0], [7.8, 15.0], [7.9, 15.0], [8.0, 15.0], [8.1, 15.0], [8.2, 15.0], [8.3, 15.0], [8.4, 15.0], [8.5, 15.0], [8.6, 15.0], [8.7, 15.0], [8.8, 15.0], [8.9, 15.0], [9.0, 15.0], [9.1, 15.0], [9.2, 15.0], [9.3, 15.0], [9.4, 15.0], [9.5, 15.0], [9.6, 15.0], [9.7, 15.0], [9.8, 15.0], [9.9, 15.0], [10.0, 15.0], [10.1, 15.0], [10.2, 15.0], [10.3, 15.0], [10.4, 15.0], [10.5, 15.0], [10.6, 15.0], [10.7, 15.0], [10.8, 15.0], [10.9, 15.0], [11.0, 15.0], [11.1, 15.0], [11.2, 15.0], [11.3, 15.0], [11.4, 15.0], [11.5, 15.0], [11.6, 15.0], [11.7, 15.0], [11.8, 15.0], [11.9, 15.0], [12.0, 15.0], [12.1, 15.0], [12.2, 15.0], [12.3, 15.0], [12.4, 15.0], [12.5, 15.0], [12.6, 15.0], [12.7, 15.0], [12.8, 15.0], [12.9, 15.0], [13.0, 15.0], [13.1, 15.0], [13.2, 15.0], [13.3, 15.0], [13.4, 15.0], [13.5, 15.0], [13.6, 15.0], [13.7, 15.0], [13.8, 15.0], [13.9, 15.0], [14.0, 15.0], [14.1, 15.0], [14.2, 15.0], [14.3, 15.0], [14.4, 15.0], [14.5, 15.0], [14.6, 15.0], [14.7, 15.0], [14.8, 15.0], [14.9, 15.0], [15.0, 15.0], [15.1, 15.0], [15.2, 15.0], [15.3, 15.0], [15.4, 15.0], [15.5, 15.0], [15.6, 15.0], [15.7, 15.0], [15.8, 15.0], [15.9, 15.0], [16.0, 15.0], [16.1, 15.0], [16.2, 15.0], [16.3, 15.0], [16.4, 15.0], [16.5, 15.0], [16.6, 15.0], [16.7, 15.0], [16.8, 15.0], [16.9, 15.0], [17.0, 15.0], [17.1, 15.0], [17.2, 15.0], [17.3, 15.0], [17.4, 15.0], [17.5, 15.0], [17.6, 15.0], [17.7, 15.0], [17.8, 15.0], [17.9, 15.0], [18.0, 15.0], [18.1, 15.0], [18.2, 15.0], [18.3, 15.0], [18.4, 15.0], [18.5, 15.0], [18.6, 15.0], [18.7, 15.0], [18.8, 15.0], [18.9, 15.0], [19.0, 15.0], [19.1, 15.0], [19.2, 15.0], [19.3, 15.0], [19.4, 15.0], [19.5, 15.0], [19.6, 15.0], [19.7, 15.0], [19.8, 15.0], [19.9, 15.0], [20.0, 15.0], [20.1, 15.0], [20.2, 15.0], [20.3, 15.0], [20.4, 15.0], [20.5, 15.0], [20.6, 15.0], [20.7, 15.0], [20.8, 15.0], [20.9, 15.0], [21.0, 15.0], [21.1, 15.0], [21.2, 15.0], [21.3, 15.0], [21.4, 15.0], [21.5, 15.0], [21.6, 15.0], [21.7, 15.0], [21.8, 15.0], [21.9, 15.0], [22.0, 15.0], [22.1, 15.0], [22.2, 15.0], [22.3, 15.0], [22.4, 15.0], [22.5, 15.0], [22.6, 15.0], [22.7, 15.0], [22.8, 15.0], [22.9, 15.0], [23.0, 15.0], [23.1, 15.0], [23.2, 15.0], [23.3, 15.0], [23.4, 15.0], [23.5, 15.0], [23.6, 15.0], [23.7, 15.0], [23.8, 15.0], [23.9, 15.0], [24.0, 15.0], [24.1, 15.0], [24.2, 15.0], [24.3, 15.0], [24.4, 15.0], [24.5, 15.0], [24.6, 15.0], [24.7, 15.0], [24.8, 15.0], [24.9, 15.0], [25.0, 15.0], [25.1, 15.0], [25.2, 15.0], [25.3, 15.0], [25.4, 15.0], [25.5, 15.0], [25.6, 15.0], [25.7, 15.0], [25.8, 15.0], [25.9, 15.0], [26.0, 15.0], [26.1, 15.0], [26.2, 15.0], [26.3, 15.0], [26.4, 15.0], [26.5, 15.0], [26.6, 15.0], [26.7, 15.0], [26.8, 15.0], [26.9, 15.0], [27.0, 15.0], [27.1, 15.0], [27.2, 15.0], [27.3, 15.0], [27.4, 15.0], [27.5, 15.0], [27.6, 15.0], [27.7, 15.0], [27.8, 15.0], [27.9, 15.0], [28.0, 15.0], [28.1, 15.0], [28.2, 15.0], [28.3, 15.0], [28.4, 15.0], [28.5, 15.0], [28.6, 15.0], [28.7, 15.0], [28.8, 15.0], [28.9, 15.0], [29.0, 15.0], [29.1, 15.0], [29.2, 15.0], [29.3, 15.0], [29.4, 15.0], [29.5, 15.0], [29.6, 15.0], [29.7, 15.0], [29.8, 15.0], [29.9, 15.0], [30.0, 15.0], [30.1, 15.0], [30.2, 15.0], [30.3, 15.0], [30.4, 15.0], [30.5, 15.0], [30.6, 15.0], [30.7, 15.0], [30.8, 15.0], [30.9, 15.0], [31.0, 15.0], [31.1, 15.0], [31.2, 15.0], [31.3, 15.0], [31.4, 15.0], [31.5, 15.0], [31.6, 15.0], [31.7, 15.0], [31.8, 15.0], [31.9, 15.0], [32.0, 15.0], [32.1, 15.0], [32.2, 15.0], [32.3, 15.0], [32.4, 15.0], [32.5, 15.0], [32.6, 15.0], [32.7, 15.0], [32.8, 15.0], [32.9, 15.0], [33.0, 15.0], [33.1, 15.0], [33.2, 15.0], [33.3, 15.0], [33.4, 15.0], [33.5, 15.0], [33.6, 15.0], [33.7, 15.0], [33.8, 15.0], [33.9, 15.0], [34.0, 15.0], [34.1, 15.0], [34.2, 15.0], [34.3, 15.0], [34.4, 15.0], [34.5, 15.0], [34.6, 15.0], [34.7, 15.0], [34.8, 15.0], [34.9, 15.0], [35.0, 15.0], [35.1, 15.0], [35.2, 15.0], [35.3, 15.0], [35.4, 15.0], [35.5, 15.0], [35.6, 15.0], [35.7, 15.0], [35.8, 15.0], [35.9, 15.0], [36.0, 15.0], [36.1, 15.0], [36.2, 15.0], [36.3, 15.0], [36.4, 16.0], [36.5, 16.0], [36.6, 16.0], [36.7, 16.0], [36.8, 16.0], [36.9, 16.0], [37.0, 16.0], [37.1, 16.0], [37.2, 16.0], [37.3, 16.0], [37.4, 16.0], [37.5, 16.0], [37.6, 16.0], [37.7, 16.0], [37.8, 16.0], [37.9, 16.0], [38.0, 16.0], [38.1, 16.0], [38.2, 16.0], [38.3, 16.0], [38.4, 16.0], [38.5, 16.0], [38.6, 16.0], [38.7, 16.0], [38.8, 16.0], [38.9, 16.0], [39.0, 16.0], [39.1, 16.0], [39.2, 16.0], [39.3, 16.0], [39.4, 16.0], [39.5, 16.0], [39.6, 16.0], [39.7, 16.0], [39.8, 16.0], [39.9, 16.0], [40.0, 16.0], [40.1, 16.0], [40.2, 16.0], [40.3, 16.0], [40.4, 16.0], [40.5, 16.0], [40.6, 16.0], [40.7, 16.0], [40.8, 16.0], [40.9, 16.0], [41.0, 16.0], [41.1, 16.0], [41.2, 16.0], [41.3, 16.0], [41.4, 16.0], [41.5, 16.0], [41.6, 16.0], [41.7, 16.0], [41.8, 16.0], [41.9, 16.0], [42.0, 16.0], [42.1, 16.0], [42.2, 16.0], [42.3, 16.0], [42.4, 16.0], [42.5, 16.0], [42.6, 16.0], [42.7, 16.0], [42.8, 16.0], [42.9, 16.0], [43.0, 16.0], [43.1, 16.0], [43.2, 16.0], [43.3, 16.0], [43.4, 16.0], [43.5, 16.0], [43.6, 16.0], [43.7, 16.0], [43.8, 16.0], [43.9, 16.0], [44.0, 16.0], [44.1, 16.0], [44.2, 16.0], [44.3, 16.0], [44.4, 16.0], [44.5, 16.0], [44.6, 16.0], [44.7, 16.0], [44.8, 16.0], [44.9, 16.0], [45.0, 16.0], [45.1, 16.0], [45.2, 16.0], [45.3, 16.0], [45.4, 16.0], [45.5, 16.0], [45.6, 16.0], [45.7, 16.0], [45.8, 16.0], [45.9, 16.0], [46.0, 16.0], [46.1, 16.0], [46.2, 16.0], [46.3, 16.0], [46.4, 16.0], [46.5, 16.0], [46.6, 16.0], [46.7, 16.0], [46.8, 16.0], [46.9, 16.0], [47.0, 16.0], [47.1, 16.0], [47.2, 16.0], [47.3, 16.0], [47.4, 16.0], [47.5, 16.0], [47.6, 16.0], [47.7, 16.0], [47.8, 16.0], [47.9, 16.0], [48.0, 16.0], [48.1, 16.0], [48.2, 16.0], [48.3, 16.0], [48.4, 16.0], [48.5, 16.0], [48.6, 16.0], [48.7, 16.0], [48.8, 16.0], [48.9, 16.0], [49.0, 16.0], [49.1, 16.0], [49.2, 16.0], [49.3, 16.0], [49.4, 16.0], [49.5, 16.0], [49.6, 16.0], [49.7, 16.0], [49.8, 16.0], [49.9, 16.0], [50.0, 16.0], [50.1, 16.0], [50.2, 16.0], [50.3, 16.0], [50.4, 16.0], [50.5, 16.0], [50.6, 16.0], [50.7, 16.0], [50.8, 16.0], [50.9, 16.0], [51.0, 16.0], [51.1, 16.0], [51.2, 16.0], [51.3, 16.0], [51.4, 16.0], [51.5, 16.0], [51.6, 16.0], [51.7, 16.0], [51.8, 16.0], [51.9, 16.0], [52.0, 16.0], [52.1, 16.0], [52.2, 16.0], [52.3, 16.0], [52.4, 16.0], [52.5, 16.0], [52.6, 16.0], [52.7, 16.0], [52.8, 16.0], [52.9, 16.0], [53.0, 16.0], [53.1, 16.0], [53.2, 16.0], [53.3, 16.0], [53.4, 16.0], [53.5, 16.0], [53.6, 16.0], [53.7, 16.0], [53.8, 16.0], [53.9, 16.0], [54.0, 16.0], [54.1, 16.0], [54.2, 16.0], [54.3, 16.0], [54.4, 16.0], [54.5, 16.0], [54.6, 16.0], [54.7, 16.0], [54.8, 16.0], [54.9, 16.0], [55.0, 16.0], [55.1, 16.0], [55.2, 16.0], [55.3, 16.0], [55.4, 16.0], [55.5, 16.0], [55.6, 16.0], [55.7, 16.0], [55.8, 16.0], [55.9, 16.0], [56.0, 16.0], [56.1, 16.0], [56.2, 16.0], [56.3, 16.0], [56.4, 16.0], [56.5, 16.0], [56.6, 16.0], [56.7, 16.0], [56.8, 16.0], [56.9, 16.0], [57.0, 16.0], [57.1, 16.0], [57.2, 16.0], [57.3, 16.0], [57.4, 16.0], [57.5, 16.0], [57.6, 16.0], [57.7, 16.0], [57.8, 16.0], [57.9, 16.0], [58.0, 16.0], [58.1, 16.0], [58.2, 16.0], [58.3, 16.0], [58.4, 16.0], [58.5, 16.0], [58.6, 16.0], [58.7, 16.0], [58.8, 16.0], [58.9, 16.0], [59.0, 16.0], [59.1, 16.0], [59.2, 16.0], [59.3, 16.0], [59.4, 16.0], [59.5, 16.0], [59.6, 16.0], [59.7, 16.0], [59.8, 16.0], [59.9, 16.0], [60.0, 16.0], [60.1, 16.0], [60.2, 16.0], [60.3, 16.0], [60.4, 16.0], [60.5, 16.0], [60.6, 16.0], [60.7, 16.0], [60.8, 16.0], [60.9, 16.0], [61.0, 16.0], [61.1, 16.0], [61.2, 16.0], [61.3, 16.0], [61.4, 16.0], [61.5, 16.0], [61.6, 16.0], [61.7, 16.0], [61.8, 16.0], [61.9, 16.0], [62.0, 16.0], [62.1, 16.0], [62.2, 16.0], [62.3, 16.0], [62.4, 16.0], [62.5, 16.0], [62.6, 16.0], [62.7, 16.0], [62.8, 16.0], [62.9, 16.0], [63.0, 16.0], [63.1, 16.0], [63.2, 16.0], [63.3, 16.0], [63.4, 16.0], [63.5, 16.0], [63.6, 16.0], [63.7, 16.0], [63.8, 16.0], [63.9, 16.0], [64.0, 16.0], [64.1, 16.0], [64.2, 16.0], [64.3, 16.0], [64.4, 16.0], [64.5, 16.0], [64.6, 16.0], [64.7, 16.0], [64.8, 16.0], [64.9, 16.0], [65.0, 16.0], [65.1, 16.0], [65.2, 16.0], [65.3, 16.0], [65.4, 16.0], [65.5, 16.0], [65.6, 16.0], [65.7, 16.0], [65.8, 16.0], [65.9, 16.0], [66.0, 16.0], [66.1, 16.0], [66.2, 16.0], [66.3, 16.0], [66.4, 16.0], [66.5, 16.0], [66.6, 16.0], [66.7, 16.0], [66.8, 16.0], [66.9, 16.0], [67.0, 16.0], [67.1, 16.0], [67.2, 16.0], [67.3, 16.0], [67.4, 16.0], [67.5, 16.0], [67.6, 16.0], [67.7, 16.0], [67.8, 16.0], [67.9, 16.0], [68.0, 16.0], [68.1, 16.0], [68.2, 16.0], [68.3, 16.0], [68.4, 16.0], [68.5, 16.0], [68.6, 16.0], [68.7, 16.0], [68.8, 16.0], [68.9, 16.0], [69.0, 16.0], [69.1, 16.0], [69.2, 16.0], [69.3, 16.0], [69.4, 16.0], [69.5, 16.0], [69.6, 16.0], [69.7, 16.0], [69.8, 16.0], [69.9, 16.0], [70.0, 16.0], [70.1, 16.0], [70.2, 16.0], [70.3, 16.0], [70.4, 16.0], [70.5, 16.0], [70.6, 16.0], [70.7, 16.0], [70.8, 16.0], [70.9, 16.0], [71.0, 16.0], [71.1, 16.0], [71.2, 16.0], [71.3, 16.0], [71.4, 16.0], [71.5, 16.0], [71.6, 16.0], [71.7, 16.0], [71.8, 16.0], [71.9, 16.0], [72.0, 16.0], [72.1, 16.0], [72.2, 16.0], [72.3, 16.0], [72.4, 16.0], [72.5, 16.0], [72.6, 16.0], [72.7, 16.0], [72.8, 16.0], [72.9, 16.0], [73.0, 16.0], [73.1, 16.0], [73.2, 16.0], [73.3, 16.0], [73.4, 16.0], [73.5, 16.0], [73.6, 16.0], [73.7, 16.0], [73.8, 16.0], [73.9, 16.0], [74.0, 16.0], [74.1, 16.0], [74.2, 16.0], [74.3, 16.0], [74.4, 16.0], [74.5, 16.0], [74.6, 16.0], [74.7, 16.0], [74.8, 16.0], [74.9, 16.0], [75.0, 16.0], [75.1, 17.0], [75.2, 17.0], [75.3, 17.0], [75.4, 17.0], [75.5, 17.0], [75.6, 17.0], [75.7, 17.0], [75.8, 17.0], [75.9, 17.0], [76.0, 17.0], [76.1, 17.0], [76.2, 17.0], [76.3, 17.0], [76.4, 17.0], [76.5, 17.0], [76.6, 17.0], [76.7, 17.0], [76.8, 17.0], [76.9, 17.0], [77.0, 17.0], [77.1, 17.0], [77.2, 17.0], [77.3, 17.0], [77.4, 17.0], [77.5, 17.0], [77.6, 17.0], [77.7, 17.0], [77.8, 17.0], [77.9, 17.0], [78.0, 17.0], [78.1, 17.0], [78.2, 17.0], [78.3, 17.0], [78.4, 17.0], [78.5, 17.0], [78.6, 17.0], [78.7, 17.0], [78.8, 17.0], [78.9, 17.0], [79.0, 17.0], [79.1, 17.0], [79.2, 17.0], [79.3, 17.0], [79.4, 17.0], [79.5, 17.0], [79.6, 17.0], [79.7, 17.0], [79.8, 17.0], [79.9, 17.0], [80.0, 17.0], [80.1, 17.0], [80.2, 17.0], [80.3, 17.0], [80.4, 17.0], [80.5, 17.0], [80.6, 17.0], [80.7, 17.0], [80.8, 17.0], [80.9, 17.0], [81.0, 17.0], [81.1, 17.0], [81.2, 17.0], [81.3, 17.0], [81.4, 17.0], [81.5, 17.0], [81.6, 17.0], [81.7, 17.0], [81.8, 17.0], [81.9, 17.0], [82.0, 17.0], [82.1, 17.0], [82.2, 17.0], [82.3, 17.0], [82.4, 17.0], [82.5, 17.0], [82.6, 17.0], [82.7, 17.0], [82.8, 17.0], [82.9, 17.0], [83.0, 17.0], [83.1, 17.0], [83.2, 17.0], [83.3, 17.0], [83.4, 17.0], [83.5, 17.0], [83.6, 17.0], [83.7, 17.0], [83.8, 17.0], [83.9, 17.0], [84.0, 17.0], [84.1, 17.0], [84.2, 17.0], [84.3, 17.0], [84.4, 17.0], [84.5, 17.0], [84.6, 17.0], [84.7, 17.0], [84.8, 17.0], [84.9, 17.0], [85.0, 17.0], [85.1, 17.0], [85.2, 17.0], [85.3, 17.0], [85.4, 17.0], [85.5, 17.0], [85.6, 17.0], [85.7, 17.0], [85.8, 17.0], [85.9, 17.0], [86.0, 17.0], [86.1, 17.0], [86.2, 17.0], [86.3, 17.0], [86.4, 17.0], [86.5, 17.0], [86.6, 17.0], [86.7, 17.0], [86.8, 17.0], [86.9, 17.0], [87.0, 17.0], [87.1, 17.0], [87.2, 17.0], [87.3, 17.0], [87.4, 17.0], [87.5, 17.0], [87.6, 17.0], [87.7, 17.0], [87.8, 17.0], [87.9, 17.0], [88.0, 17.0], [88.1, 17.0], [88.2, 17.0], [88.3, 18.0], [88.4, 18.0], [88.5, 18.0], [88.6, 18.0], [88.7, 18.0], [88.8, 18.0], [88.9, 18.0], [89.0, 18.0], [89.1, 18.0], [89.2, 18.0], [89.3, 18.0], [89.4, 18.0], [89.5, 18.0], [89.6, 18.0], [89.7, 18.0], [89.8, 18.0], [89.9, 18.0], [90.0, 18.0], [90.1, 18.0], [90.2, 18.0], [90.3, 18.0], [90.4, 18.0], [90.5, 18.0], [90.6, 18.0], [90.7, 18.0], [90.8, 18.0], [90.9, 18.0], [91.0, 18.0], [91.1, 18.0], [91.2, 18.0], [91.3, 18.0], [91.4, 18.0], [91.5, 19.0], [91.6, 19.0], [91.7, 19.0], [91.8, 19.0], [91.9, 19.0], [92.0, 19.0], [92.1, 19.0], [92.2, 19.0], [92.3, 19.0], [92.4, 19.0], [92.5, 19.0], [92.6, 19.0], [92.7, 19.0], [92.8, 19.0], [92.9, 19.0], [93.0, 19.0], [93.1, 19.0], [93.2, 20.0], [93.3, 20.0], [93.4, 20.0], [93.5, 20.0], [93.6, 20.0], [93.7, 20.0], [93.8, 20.0], [93.9, 20.0], [94.0, 20.0], [94.1, 20.0], [94.2, 20.0], [94.3, 20.0], [94.4, 20.0], [94.5, 20.0], [94.6, 21.0], [94.7, 21.0], [94.8, 21.0], [94.9, 21.0], [95.0, 21.0], [95.1, 21.0], [95.2, 21.0], [95.3, 21.0], [95.4, 21.0], [95.5, 22.0], [95.6, 22.0], [95.7, 22.0], [95.8, 22.0], [95.9, 23.0], [96.0, 23.0], [96.1, 23.0], [96.2, 24.0], [96.3, 24.0], [96.4, 25.0], [96.5, 26.0], [96.6, 27.0], [96.7, 28.0], [96.8, 29.0], [96.9, 30.0], [97.0, 31.0], [97.1, 32.0], [97.2, 33.0], [97.3, 34.0], [97.4, 35.0], [97.5, 36.0], [97.6, 37.0], [97.7, 38.0], [97.8, 39.0], [97.9, 40.0], [98.0, 41.0], [98.1, 42.0], [98.2, 43.0], [98.3, 44.0], [98.4, 45.0], [98.5, 46.0], [98.6, 47.0], [98.7, 49.0], [98.8, 50.0], [98.9, 51.0], [99.0, 52.0], [99.1, 54.0], [99.2, 54.0], [99.3, 55.0], [99.4, 56.0], [99.5, 58.0], [99.6, 59.0], [99.7, 61.0], [99.8, 64.0], [99.9, 68.0]], "isOverall": false, "label": "HTTP Request - enroll", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 3.0, "minX": 0.0, "maxY": 99997.0, "series": [{"data": [[0.0, 99997.0], [200.0, 3.0]], "isOverall": false, "label": "HTTP Request - enroll", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 100000.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 100000.0, "series": [{"data": [[0.0, 100000.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.75387962E12, "maxY": 1.0, "series": [{"data": [[1.7538798E12, 1.0], [1.7538801E12, 1.0], [1.7538804E12, 1.0], [1.7538807E12, 1.0], [1.753881E12, 1.0], [1.7538813E12, 1.0], [1.75387968E12, 1.0], [1.75388094E12, 1.0], [1.75388124E12, 1.0], [1.75387962E12, 1.0], [1.75387992E12, 1.0], [1.75388022E12, 1.0], [1.75388052E12, 1.0], [1.75388082E12, 1.0], [1.75388112E12, 1.0], [1.75388046E12, 1.0], [1.75388076E12, 1.0], [1.75388106E12, 1.0], [1.75388136E12, 1.0], [1.75387974E12, 1.0], [1.75388004E12, 1.0], [1.75388034E12, 1.0], [1.75388064E12, 1.0], [1.75387998E12, 1.0], [1.75388028E12, 1.0], [1.75388058E12, 1.0], [1.75388088E12, 1.0], [1.75388118E12, 1.0], [1.75387986E12, 1.0], [1.75388016E12, 1.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75388136E12, "title": "Active Threads Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 3600000);
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
        data: {"result": {"minY": 16.990179999999928, "minX": 1.0, "maxY": 16.990179999999928, "series": [{"data": [[1.0, 16.990179999999928]], "isOverall": false, "label": "HTTP Request - enroll", "isController": false}, {"data": [[1.0, 16.990179999999928]], "isOverall": false, "label": "HTTP Request - enroll-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 1.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 14265.833333333334, "minX": 1.75387962E12, "maxY": 169150.96666666667, "series": [{"data": [[1.7538798E12, 162300.46666666667], [1.7538801E12, 162626.65], [1.7538804E12, 165283.25], [1.7538807E12, 168731.06666666668], [1.753881E12, 162906.46666666667], [1.7538813E12, 162720.03333333333], [1.75387968E12, 157687.6], [1.75388094E12, 160995.2], [1.75388124E12, 162859.16666666666], [1.75387962E12, 46924.35], [1.75387992E12, 160389.25], [1.75388022E12, 165889.21666666667], [1.75388052E12, 163185.31666666668], [1.75388082E12, 124789.05], [1.75388112E12, 161927.78333333333], [1.75388046E12, 165702.08333333334], [1.75388076E12, 148414.31666666668], [1.75388106E12, 163465.28333333333], [1.75388136E12, 107035.83333333333], [1.75387974E12, 160809.23333333334], [1.75388004E12, 163512.63333333333], [1.75388034E12, 165562.51666666666], [1.75388064E12, 165655.5], [1.75387998E12, 161881.33333333334], [1.75388028E12, 165050.35], [1.75388058E12, 169150.96666666667], [1.75388088E12, 147342.53333333333], [1.75388118E12, 161648.43333333332], [1.75387986E12, 161415.46666666667], [1.75388016E12, 163932.01666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7538798E12, 49342.5], [1.7538801E12, 49441.666666666664], [1.7538804E12, 50249.166666666664], [1.7538807E12, 51297.5], [1.753881E12, 49526.666666666664], [1.7538813E12, 49470.0], [1.75387968E12, 47940.0], [1.75388094E12, 48945.833333333336], [1.75388124E12, 49512.5], [1.75387962E12, 14265.833333333334], [1.75387992E12, 48761.666666666664], [1.75388022E12, 50433.333333333336], [1.75388052E12, 49611.666666666664], [1.75388082E12, 37938.333333333336], [1.75388112E12, 49229.166666666664], [1.75388046E12, 50376.666666666664], [1.75388076E12, 45120.833333333336], [1.75388106E12, 49696.666666666664], [1.75388136E12, 32540.833333333332], [1.75387974E12, 48889.166666666664], [1.75388004E12, 49710.833333333336], [1.75388034E12, 50334.166666666664], [1.75388064E12, 50362.5], [1.75387998E12, 49215.0], [1.75388028E12, 50178.333333333336], [1.75388058E12, 51425.0], [1.75388088E12, 44795.0], [1.75388118E12, 49144.166666666664], [1.75387986E12, 49073.333333333336], [1.75388016E12, 49838.333333333336]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75388136E12, "title": "Bytes Throughput Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 3600000);
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
        data: {"result": {"minY": 16.14600550964186, "minX": 1.75387962E12, "maxY": 21.96489917849145, "series": [{"data": [[1.7538798E12, 16.784381280505322], [1.7538801E12, 16.817191977077346], [1.7538804E12, 16.521567521849466], [1.7538807E12, 16.18061309030656], [1.753881E12, 16.778890160183067], [1.7538813E12, 16.801546391752566], [1.75387968E12, 17.096926713947965], [1.75388094E12, 16.96787264833571], [1.75388124E12, 16.773390557939884], [1.75387962E12, 18.463753723932495], [1.75387992E12, 17.042126670540387], [1.75388022E12, 16.44999999999993], [1.75388052E12, 16.724157624214747], [1.75388082E12, 21.96489917849145], [1.75388112E12, 16.891798561151088], [1.75388046E12, 16.469347581552316], [1.75388076E12, 18.42417582417585], [1.75388106E12, 16.723774230330687], [1.75388136E12, 17.263822377013508], [1.75387974E12, 16.88611996522748], [1.75388004E12, 16.72242804217728], [1.75388034E12, 16.49676329862087], [1.75388064E12, 16.478199718706044], [1.75387998E12, 16.87392055267705], [1.75388028E12, 16.564652738565837], [1.75388058E12, 16.14600550964186], [1.75388088E12, 18.58001265022135], [1.75388118E12, 16.916402421447046], [1.75387986E12, 16.92580831408778], [1.75388016E12, 16.673678226264897]], "isOverall": false, "label": "HTTP Request - enroll", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75388136E12, "title": "Response Time Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 3600000);
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
        data: {"result": {"minY": 16.141046831955897, "minX": 1.75387962E12, "maxY": 21.95929798356983, "series": [{"data": [[1.7538798E12, 16.778639104220485], [1.7538801E12, 16.8126074498568], [1.7538804E12, 16.515647025655475], [1.7538807E12, 16.17757525545433], [1.753881E12, 16.77345537757436], [1.7538813E12, 16.79696449026342], [1.75387968E12, 17.084810874704495], [1.75388094E12, 16.961794500723588], [1.75388124E12, 16.769384835479265], [1.75387962E12, 18.435948361469684], [1.75387992E12, 17.036316095293376], [1.75388022E12, 16.446348314606734], [1.75388052E12, 16.719303255282725], [1.75388082E12, 21.95929798356983], [1.75388112E12, 16.88604316546765], [1.75388046E12, 16.465129358830147], [1.75388076E12, 18.419466248037686], [1.75388106E12, 16.718072976054753], [1.75388136E12, 17.258598171528078], [1.75387974E12, 16.882352941176492], [1.75388004E12, 16.71872328298668], [1.75388034E12, 16.492260061919477], [1.75388064E12, 16.472855133614683], [1.75387998E12, 16.867299942429444], [1.75388028E12, 16.558159232072317], [1.75388058E12, 16.141046831955897], [1.75388088E12, 18.575585072738818], [1.75388118E12, 16.91063707120212], [1.75387986E12, 16.919168591223997], [1.75388016E12, 16.669414440022738]], "isOverall": false, "label": "HTTP Request - enroll", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75388136E12, "title": "Latencies Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 3600000);
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
        data: {"result": {"minY": 8.28500414250208E-4, "minX": 1.75387962E12, "maxY": 0.1936444885799406, "series": [{"data": [[1.7538798E12, 0.00114843525696239], [1.7538801E12, 8.595988538681958E-4], [1.7538804E12, 8.457851705666769E-4], [1.7538807E12, 8.28500414250208E-4], [1.753881E12, 8.581235697940509E-4], [1.7538813E12, 8.591065292096225E-4], [1.75387968E12, 0.0020685579196217533], [1.75388094E12, 8.683068017366146E-4], [1.75388124E12, 8.583690987124474E-4], [1.75387962E12, 0.1936444885799406], [1.75387992E12, 0.0011621150493898909], [1.75388022E12, 8.426966292134837E-4], [1.75388052E12, 0.001142204454597374], [1.75388082E12, 0.0011202389843166555], [1.75388112E12, 8.633093525179862E-4], [1.75388046E12, 8.436445444319467E-4], [1.75388076E12, 9.419152276295149E-4], [1.75388106E12, 0.0011402508551881427], [1.75388136E12, 0.0013060513713539401], [1.75387974E12, 0.0011590843233845276], [1.75388004E12, 8.549444286121412E-4], [1.75388034E12, 0.0011258091753447803], [1.75388064E12, 8.43881856540085E-4], [1.75387998E12, 0.0011514104778353493], [1.75388028E12, 8.469791078486739E-4], [1.75388058E12, 0.0013774104683195601], [1.75388088E12, 0.0018975332068311224], [1.75388118E12, 8.648025367541087E-4], [1.75387986E12, 0.0014434180138568145], [1.75388016E12, 8.527572484366126E-4]], "isOverall": false, "label": "HTTP Request - enroll", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75388136E12, "title": "Connect Time Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 3600000);
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
        data: {"result": {"minY": 12.0, "minX": 1.75387962E12, "maxY": 228.0, "series": [{"data": [[1.7538798E12, 66.0], [1.7538801E12, 76.0], [1.7538804E12, 79.0], [1.7538807E12, 62.0], [1.753881E12, 69.0], [1.7538813E12, 76.0], [1.75387968E12, 73.0], [1.75388094E12, 81.0], [1.75388124E12, 69.0], [1.75387962E12, 227.0], [1.75387992E12, 71.0], [1.75388022E12, 68.0], [1.75388052E12, 69.0], [1.75388082E12, 80.0], [1.75388112E12, 77.0], [1.75388046E12, 69.0], [1.75388076E12, 228.0], [1.75388106E12, 71.0], [1.75388136E12, 70.0], [1.75387974E12, 74.0], [1.75388004E12, 81.0], [1.75388034E12, 65.0], [1.75388064E12, 57.0], [1.75387998E12, 68.0], [1.75388028E12, 67.0], [1.75388058E12, 64.0], [1.75388088E12, 84.0], [1.75388118E12, 95.0], [1.75387986E12, 81.0], [1.75388016E12, 68.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7538798E12, 17.0], [1.7538801E12, 17.0], [1.7538804E12, 19.0], [1.7538807E12, 18.0], [1.753881E12, 17.0], [1.7538813E12, 17.0], [1.75387968E12, 18.0], [1.75388094E12, 17.0], [1.75388124E12, 17.0], [1.75387962E12, 20.0], [1.75387992E12, 17.0], [1.75388022E12, 18.0], [1.75388052E12, 18.0], [1.75388082E12, 48.0], [1.75388112E12, 17.0], [1.75388046E12, 18.0], [1.75388076E12, 21.0], [1.75388106E12, 17.0], [1.75388136E12, 18.0], [1.75387974E12, 18.0], [1.75388004E12, 17.0], [1.75388034E12, 18.0], [1.75388064E12, 18.0], [1.75387998E12, 17.0], [1.75388028E12, 19.0], [1.75388058E12, 18.0], [1.75388088E12, 21.0], [1.75388118E12, 17.0], [1.75387986E12, 17.0], [1.75388016E12, 17.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7538798E12, 46.0], [1.7538801E12, 49.090000000000146], [1.7538804E12, 42.51999999999998], [1.7538807E12, 38.0], [1.753881E12, 46.0], [1.7538813E12, 50.0], [1.75387968E12, 46.0], [1.75388094E12, 52.0], [1.75388124E12, 50.0], [1.75387962E12, 25.0], [1.75387992E12, 55.570000000000164], [1.75388022E12, 42.0], [1.75388052E12, 45.9699999999998], [1.75388082E12, 67.0], [1.75388112E12, 53.0], [1.75388046E12, 41.429999999999836], [1.75388076E12, 59.13999999999987], [1.75388106E12, 47.909999999999854], [1.75388136E12, 54.0], [1.75387974E12, 44.48000000000002], [1.75388004E12, 52.90000000000009], [1.75388034E12, 47.460000000000036], [1.75388064E12, 38.0], [1.75387998E12, 53.0], [1.75388028E12, 40.0], [1.75388058E12, 37.0], [1.75388088E12, 62.0], [1.75388118E12, 56.0], [1.75387986E12, 53.0], [1.75388016E12, 45.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7538798E12, 20.0], [1.7538801E12, 20.0], [1.7538804E12, 21.0], [1.7538807E12, 20.0], [1.753881E12, 20.0], [1.7538813E12, 23.0], [1.75387968E12, 20.0], [1.75388094E12, 20.0], [1.75388124E12, 20.0], [1.75387962E12, 22.0], [1.75387992E12, 20.84999999999991], [1.75388022E12, 20.0], [1.75388052E12, 21.0], [1.75388082E12, 56.0], [1.75388112E12, 20.0], [1.75388046E12, 21.0], [1.75388076E12, 42.0], [1.75388106E12, 19.0], [1.75388136E12, 22.09999999999991], [1.75387974E12, 20.0], [1.75388004E12, 20.0], [1.75388034E12, 20.0], [1.75388064E12, 20.0], [1.75387998E12, 21.0], [1.75388028E12, 20.0], [1.75388058E12, 20.0], [1.75388088E12, 43.0], [1.75388118E12, 20.0], [1.75387986E12, 20.0], [1.75388016E12, 20.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.7538798E12, 13.0], [1.7538801E12, 13.0], [1.7538804E12, 12.0], [1.7538807E12, 12.0], [1.753881E12, 13.0], [1.7538813E12, 13.0], [1.75387968E12, 13.0], [1.75388094E12, 13.0], [1.75388124E12, 13.0], [1.75387962E12, 13.0], [1.75387992E12, 12.0], [1.75388022E12, 12.0], [1.75388052E12, 12.0], [1.75388082E12, 13.0], [1.75388112E12, 13.0], [1.75388046E12, 12.0], [1.75388076E12, 12.0], [1.75388106E12, 13.0], [1.75388136E12, 13.0], [1.75387974E12, 13.0], [1.75388004E12, 13.0], [1.75388034E12, 12.0], [1.75388064E12, 12.0], [1.75387998E12, 13.0], [1.75388028E12, 12.0], [1.75388058E12, 12.0], [1.75388088E12, 13.0], [1.75388118E12, 13.0], [1.75387986E12, 13.0], [1.75388016E12, 13.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7538798E12, 16.0], [1.7538801E12, 16.0], [1.7538804E12, 16.0], [1.7538807E12, 16.0], [1.753881E12, 16.0], [1.7538813E12, 16.0], [1.75387968E12, 16.0], [1.75388094E12, 16.0], [1.75388124E12, 16.0], [1.75387962E12, 18.0], [1.75387992E12, 16.0], [1.75388022E12, 16.0], [1.75388052E12, 16.0], [1.75388082E12, 16.0], [1.75388112E12, 16.0], [1.75388046E12, 16.0], [1.75388076E12, 16.0], [1.75388106E12, 16.0], [1.75388136E12, 16.0], [1.75387974E12, 16.0], [1.75388004E12, 16.0], [1.75388034E12, 16.0], [1.75388064E12, 16.0], [1.75387998E12, 16.0], [1.75388028E12, 16.0], [1.75388058E12, 16.0], [1.75388088E12, 16.0], [1.75388118E12, 16.0], [1.75387986E12, 16.0], [1.75388016E12, 16.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75388136E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
        fixTimeStamps(infos.data.result.series, 3600000);
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
    data: {"result": {"minY": 14.0, "minX": 23.0, "maxY": 31.5, "series": [{"data": [[33.0, 20.0], [32.0, 18.0], [35.0, 17.0], [34.0, 17.0], [36.0, 17.0], [37.0, 17.0], [38.0, 16.0], [39.0, 16.0], [41.0, 17.0], [40.0, 16.0], [42.0, 16.0], [43.0, 16.0], [44.0, 16.0], [45.0, 16.0], [47.0, 16.0], [46.0, 16.0], [49.0, 16.0], [48.0, 16.0], [50.0, 17.0], [51.0, 17.0], [53.0, 16.0], [52.0, 16.0], [54.0, 16.0], [55.0, 16.0], [57.0, 16.0], [56.0, 16.0], [58.0, 16.0], [59.0, 16.0], [61.0, 16.0], [60.0, 16.0], [63.0, 15.0], [62.0, 15.0], [64.0, 15.0], [66.0, 15.0], [65.0, 15.0], [67.0, 15.0], [68.0, 14.0], [70.0, 14.0], [69.0, 14.0], [23.0, 22.0], [26.0, 21.0], [28.0, 31.5], [30.0, 16.0], [31.0, 28.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 70.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 14.0, "minX": 23.0, "maxY": 31.5, "series": [{"data": [[33.0, 20.0], [32.0, 18.0], [35.0, 17.0], [34.0, 17.0], [36.0, 17.0], [37.0, 17.0], [38.0, 16.0], [39.0, 16.0], [41.0, 17.0], [40.0, 16.0], [42.0, 16.0], [43.0, 16.0], [44.0, 16.0], [45.0, 16.0], [47.0, 16.0], [46.0, 16.0], [49.0, 16.0], [48.0, 16.0], [50.0, 17.0], [51.0, 17.0], [53.0, 16.0], [52.0, 16.0], [54.0, 16.0], [55.0, 16.0], [57.0, 16.0], [56.0, 16.0], [58.0, 16.0], [59.0, 16.0], [61.0, 16.0], [60.0, 16.0], [63.0, 15.0], [62.0, 15.0], [64.0, 15.0], [66.0, 15.0], [65.0, 15.0], [67.0, 15.0], [68.0, 14.0], [70.0, 14.0], [69.0, 14.0], [23.0, 22.0], [26.0, 21.0], [28.0, 31.5], [30.0, 16.0], [31.0, 28.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 70.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 16.8, "minX": 1.75387962E12, "maxY": 60.5, "series": [{"data": [[1.7538798E12, 58.05], [1.7538801E12, 58.166666666666664], [1.7538804E12, 59.11666666666667], [1.7538807E12, 60.35], [1.753881E12, 58.266666666666666], [1.7538813E12, 58.2], [1.75387968E12, 56.4], [1.75388094E12, 57.583333333333336], [1.75388124E12, 58.25], [1.75387962E12, 16.8], [1.75387992E12, 57.36666666666667], [1.75388022E12, 59.333333333333336], [1.75388052E12, 58.36666666666667], [1.75388082E12, 44.63333333333333], [1.75388112E12, 57.916666666666664], [1.75388046E12, 59.266666666666666], [1.75388076E12, 53.083333333333336], [1.75388106E12, 58.46666666666667], [1.75388136E12, 38.266666666666666], [1.75387974E12, 57.516666666666666], [1.75388004E12, 58.483333333333334], [1.75388034E12, 59.21666666666667], [1.75388064E12, 59.25], [1.75387998E12, 57.9], [1.75388028E12, 59.03333333333333], [1.75388058E12, 60.5], [1.75388088E12, 52.7], [1.75388118E12, 57.81666666666667], [1.75387986E12, 57.733333333333334], [1.75388016E12, 58.63333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75388136E12, "title": "Hits Per Second"}},
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
        fixTimeStamps(infos.data.result.series, 3600000);
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
        data: {"result": {"minY": 16.783333333333335, "minX": 1.75387962E12, "maxY": 60.5, "series": [{"data": [[1.7538798E12, 58.05], [1.7538801E12, 58.166666666666664], [1.7538804E12, 59.11666666666667], [1.7538807E12, 60.35], [1.753881E12, 58.266666666666666], [1.7538813E12, 58.2], [1.75387968E12, 56.4], [1.75388094E12, 57.583333333333336], [1.75388124E12, 58.25], [1.75387962E12, 16.783333333333335], [1.75387992E12, 57.36666666666667], [1.75388022E12, 59.333333333333336], [1.75388052E12, 58.36666666666667], [1.75388082E12, 44.63333333333333], [1.75388112E12, 57.916666666666664], [1.75388046E12, 59.266666666666666], [1.75388076E12, 53.083333333333336], [1.75388106E12, 58.46666666666667], [1.75388136E12, 38.28333333333333], [1.75387974E12, 57.516666666666666], [1.75388004E12, 58.483333333333334], [1.75388034E12, 59.21666666666667], [1.75388064E12, 59.25], [1.75387998E12, 57.9], [1.75388028E12, 59.03333333333333], [1.75388058E12, 60.5], [1.75388088E12, 52.7], [1.75388118E12, 57.81666666666667], [1.75387986E12, 57.733333333333334], [1.75388016E12, 58.63333333333333]], "isOverall": false, "label": "201", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75388136E12, "title": "Codes Per Second"}},
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
        fixTimeStamps(infos.data.result.series, 3600000);
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
        data: {"result": {"minY": 16.783333333333335, "minX": 1.75387962E12, "maxY": 60.5, "series": [{"data": [[1.7538798E12, 58.05], [1.7538801E12, 58.166666666666664], [1.7538804E12, 59.11666666666667], [1.7538807E12, 60.35], [1.753881E12, 58.266666666666666], [1.7538813E12, 58.2], [1.75387968E12, 56.4], [1.75388094E12, 57.583333333333336], [1.75388124E12, 58.25], [1.75387962E12, 16.783333333333335], [1.75387992E12, 57.36666666666667], [1.75388022E12, 59.333333333333336], [1.75388052E12, 58.36666666666667], [1.75388082E12, 44.63333333333333], [1.75388112E12, 57.916666666666664], [1.75388046E12, 59.266666666666666], [1.75388076E12, 53.083333333333336], [1.75388106E12, 58.46666666666667], [1.75388136E12, 38.28333333333333], [1.75387974E12, 57.516666666666666], [1.75388004E12, 58.483333333333334], [1.75388034E12, 59.21666666666667], [1.75388064E12, 59.25], [1.75387998E12, 57.9], [1.75388028E12, 59.03333333333333], [1.75388058E12, 60.5], [1.75388088E12, 52.7], [1.75388118E12, 57.81666666666667], [1.75387986E12, 57.733333333333334], [1.75388016E12, 58.63333333333333]], "isOverall": false, "label": "HTTP Request - enroll-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75388136E12, "title": "Transactions Per Second"}},
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
        fixTimeStamps(infos.data.result.series, 3600000);
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
        data: {"result": {"minY": 16.783333333333335, "minX": 1.75387962E12, "maxY": 60.5, "series": [{"data": [[1.7538798E12, 58.05], [1.7538801E12, 58.166666666666664], [1.7538804E12, 59.11666666666667], [1.7538807E12, 60.35], [1.753881E12, 58.266666666666666], [1.7538813E12, 58.2], [1.75387968E12, 56.4], [1.75388094E12, 57.583333333333336], [1.75388124E12, 58.25], [1.75387962E12, 16.783333333333335], [1.75387992E12, 57.36666666666667], [1.75388022E12, 59.333333333333336], [1.75388052E12, 58.36666666666667], [1.75388082E12, 44.63333333333333], [1.75388112E12, 57.916666666666664], [1.75388046E12, 59.266666666666666], [1.75388076E12, 53.083333333333336], [1.75388106E12, 58.46666666666667], [1.75388136E12, 38.28333333333333], [1.75387974E12, 57.516666666666666], [1.75388004E12, 58.483333333333334], [1.75388034E12, 59.21666666666667], [1.75388064E12, 59.25], [1.75387998E12, 57.9], [1.75388028E12, 59.03333333333333], [1.75388058E12, 60.5], [1.75388088E12, 52.7], [1.75388118E12, 57.81666666666667], [1.75387986E12, 57.733333333333334], [1.75388016E12, 58.63333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75388136E12, "title": "Total Transactions Per Second"}},
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
        fixTimeStamps(infos.data.result.series, 3600000);
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

