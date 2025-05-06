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
        data: {"result": {"minY": 11.0, "minX": 0.0, "maxY": 4728.0, "series": [{"data": [[0.0, 11.0], [0.1, 12.0], [0.2, 12.0], [0.3, 12.0], [0.4, 12.0], [0.5, 12.0], [0.6, 12.0], [0.7, 12.0], [0.8, 12.0], [0.9, 13.0], [1.0, 13.0], [1.1, 13.0], [1.2, 13.0], [1.3, 13.0], [1.4, 13.0], [1.5, 13.0], [1.6, 13.0], [1.7, 13.0], [1.8, 13.0], [1.9, 13.0], [2.0, 13.0], [2.1, 13.0], [2.2, 13.0], [2.3, 13.0], [2.4, 13.0], [2.5, 13.0], [2.6, 13.0], [2.7, 13.0], [2.8, 13.0], [2.9, 13.0], [3.0, 13.0], [3.1, 13.0], [3.2, 13.0], [3.3, 13.0], [3.4, 13.0], [3.5, 13.0], [3.6, 13.0], [3.7, 13.0], [3.8, 13.0], [3.9, 13.0], [4.0, 13.0], [4.1, 13.0], [4.2, 13.0], [4.3, 13.0], [4.4, 13.0], [4.5, 13.0], [4.6, 13.0], [4.7, 13.0], [4.8, 13.0], [4.9, 13.0], [5.0, 13.0], [5.1, 13.0], [5.2, 13.0], [5.3, 13.0], [5.4, 13.0], [5.5, 13.0], [5.6, 13.0], [5.7, 13.0], [5.8, 13.0], [5.9, 13.0], [6.0, 13.0], [6.1, 13.0], [6.2, 13.0], [6.3, 14.0], [6.4, 14.0], [6.5, 14.0], [6.6, 14.0], [6.7, 14.0], [6.8, 14.0], [6.9, 14.0], [7.0, 14.0], [7.1, 14.0], [7.2, 14.0], [7.3, 14.0], [7.4, 14.0], [7.5, 14.0], [7.6, 14.0], [7.7, 14.0], [7.8, 14.0], [7.9, 14.0], [8.0, 14.0], [8.1, 14.0], [8.2, 14.0], [8.3, 14.0], [8.4, 14.0], [8.5, 14.0], [8.6, 14.0], [8.7, 14.0], [8.8, 14.0], [8.9, 14.0], [9.0, 14.0], [9.1, 14.0], [9.2, 14.0], [9.3, 14.0], [9.4, 14.0], [9.5, 14.0], [9.6, 14.0], [9.7, 14.0], [9.8, 14.0], [9.9, 14.0], [10.0, 14.0], [10.1, 14.0], [10.2, 14.0], [10.3, 14.0], [10.4, 14.0], [10.5, 14.0], [10.6, 14.0], [10.7, 14.0], [10.8, 14.0], [10.9, 14.0], [11.0, 14.0], [11.1, 14.0], [11.2, 14.0], [11.3, 14.0], [11.4, 14.0], [11.5, 14.0], [11.6, 14.0], [11.7, 14.0], [11.8, 14.0], [11.9, 14.0], [12.0, 14.0], [12.1, 14.0], [12.2, 14.0], [12.3, 14.0], [12.4, 14.0], [12.5, 14.0], [12.6, 14.0], [12.7, 14.0], [12.8, 14.0], [12.9, 14.0], [13.0, 14.0], [13.1, 14.0], [13.2, 14.0], [13.3, 14.0], [13.4, 14.0], [13.5, 14.0], [13.6, 14.0], [13.7, 14.0], [13.8, 14.0], [13.9, 14.0], [14.0, 14.0], [14.1, 14.0], [14.2, 14.0], [14.3, 14.0], [14.4, 14.0], [14.5, 14.0], [14.6, 14.0], [14.7, 14.0], [14.8, 14.0], [14.9, 14.0], [15.0, 14.0], [15.1, 14.0], [15.2, 14.0], [15.3, 14.0], [15.4, 14.0], [15.5, 14.0], [15.6, 14.0], [15.7, 14.0], [15.8, 14.0], [15.9, 14.0], [16.0, 14.0], [16.1, 14.0], [16.2, 14.0], [16.3, 14.0], [16.4, 14.0], [16.5, 14.0], [16.6, 14.0], [16.7, 14.0], [16.8, 14.0], [16.9, 14.0], [17.0, 14.0], [17.1, 14.0], [17.2, 14.0], [17.3, 14.0], [17.4, 14.0], [17.5, 14.0], [17.6, 14.0], [17.7, 14.0], [17.8, 14.0], [17.9, 14.0], [18.0, 14.0], [18.1, 14.0], [18.2, 14.0], [18.3, 14.0], [18.4, 14.0], [18.5, 14.0], [18.6, 14.0], [18.7, 14.0], [18.8, 14.0], [18.9, 14.0], [19.0, 14.0], [19.1, 14.0], [19.2, 14.0], [19.3, 14.0], [19.4, 14.0], [19.5, 14.0], [19.6, 14.0], [19.7, 14.0], [19.8, 14.0], [19.9, 14.0], [20.0, 14.0], [20.1, 14.0], [20.2, 14.0], [20.3, 14.0], [20.4, 14.0], [20.5, 14.0], [20.6, 14.0], [20.7, 14.0], [20.8, 14.0], [20.9, 14.0], [21.0, 14.0], [21.1, 14.0], [21.2, 14.0], [21.3, 14.0], [21.4, 14.0], [21.5, 14.0], [21.6, 14.0], [21.7, 14.0], [21.8, 14.0], [21.9, 14.0], [22.0, 14.0], [22.1, 14.0], [22.2, 14.0], [22.3, 14.0], [22.4, 14.0], [22.5, 14.0], [22.6, 14.0], [22.7, 14.0], [22.8, 14.0], [22.9, 14.0], [23.0, 14.0], [23.1, 14.0], [23.2, 14.0], [23.3, 14.0], [23.4, 14.0], [23.5, 14.0], [23.6, 14.0], [23.7, 14.0], [23.8, 14.0], [23.9, 14.0], [24.0, 14.0], [24.1, 14.0], [24.2, 14.0], [24.3, 14.0], [24.4, 14.0], [24.5, 14.0], [24.6, 14.0], [24.7, 14.0], [24.8, 14.0], [24.9, 14.0], [25.0, 14.0], [25.1, 14.0], [25.2, 14.0], [25.3, 14.0], [25.4, 14.0], [25.5, 14.0], [25.6, 14.0], [25.7, 14.0], [25.8, 14.0], [25.9, 14.0], [26.0, 14.0], [26.1, 14.0], [26.2, 14.0], [26.3, 14.0], [26.4, 14.0], [26.5, 14.0], [26.6, 14.0], [26.7, 14.0], [26.8, 14.0], [26.9, 14.0], [27.0, 14.0], [27.1, 14.0], [27.2, 14.0], [27.3, 14.0], [27.4, 14.0], [27.5, 14.0], [27.6, 14.0], [27.7, 14.0], [27.8, 14.0], [27.9, 14.0], [28.0, 14.0], [28.1, 14.0], [28.2, 14.0], [28.3, 14.0], [28.4, 14.0], [28.5, 14.0], [28.6, 14.0], [28.7, 14.0], [28.8, 14.0], [28.9, 14.0], [29.0, 14.0], [29.1, 14.0], [29.2, 15.0], [29.3, 15.0], [29.4, 15.0], [29.5, 15.0], [29.6, 15.0], [29.7, 15.0], [29.8, 15.0], [29.9, 15.0], [30.0, 15.0], [30.1, 15.0], [30.2, 15.0], [30.3, 15.0], [30.4, 15.0], [30.5, 15.0], [30.6, 15.0], [30.7, 15.0], [30.8, 15.0], [30.9, 15.0], [31.0, 15.0], [31.1, 15.0], [31.2, 15.0], [31.3, 15.0], [31.4, 15.0], [31.5, 15.0], [31.6, 15.0], [31.7, 15.0], [31.8, 15.0], [31.9, 15.0], [32.0, 15.0], [32.1, 15.0], [32.2, 15.0], [32.3, 15.0], [32.4, 15.0], [32.5, 15.0], [32.6, 15.0], [32.7, 15.0], [32.8, 15.0], [32.9, 15.0], [33.0, 15.0], [33.1, 15.0], [33.2, 15.0], [33.3, 15.0], [33.4, 15.0], [33.5, 15.0], [33.6, 15.0], [33.7, 15.0], [33.8, 15.0], [33.9, 15.0], [34.0, 15.0], [34.1, 15.0], [34.2, 15.0], [34.3, 15.0], [34.4, 15.0], [34.5, 15.0], [34.6, 15.0], [34.7, 15.0], [34.8, 15.0], [34.9, 15.0], [35.0, 15.0], [35.1, 15.0], [35.2, 15.0], [35.3, 15.0], [35.4, 15.0], [35.5, 15.0], [35.6, 15.0], [35.7, 15.0], [35.8, 15.0], [35.9, 15.0], [36.0, 15.0], [36.1, 15.0], [36.2, 15.0], [36.3, 15.0], [36.4, 15.0], [36.5, 15.0], [36.6, 15.0], [36.7, 15.0], [36.8, 15.0], [36.9, 15.0], [37.0, 15.0], [37.1, 15.0], [37.2, 15.0], [37.3, 15.0], [37.4, 15.0], [37.5, 15.0], [37.6, 15.0], [37.7, 15.0], [37.8, 15.0], [37.9, 15.0], [38.0, 15.0], [38.1, 15.0], [38.2, 15.0], [38.3, 15.0], [38.4, 15.0], [38.5, 15.0], [38.6, 15.0], [38.7, 15.0], [38.8, 15.0], [38.9, 15.0], [39.0, 15.0], [39.1, 15.0], [39.2, 15.0], [39.3, 15.0], [39.4, 15.0], [39.5, 15.0], [39.6, 15.0], [39.7, 15.0], [39.8, 15.0], [39.9, 15.0], [40.0, 15.0], [40.1, 15.0], [40.2, 15.0], [40.3, 15.0], [40.4, 15.0], [40.5, 15.0], [40.6, 15.0], [40.7, 15.0], [40.8, 15.0], [40.9, 15.0], [41.0, 15.0], [41.1, 15.0], [41.2, 15.0], [41.3, 15.0], [41.4, 15.0], [41.5, 15.0], [41.6, 15.0], [41.7, 15.0], [41.8, 15.0], [41.9, 15.0], [42.0, 15.0], [42.1, 15.0], [42.2, 15.0], [42.3, 15.0], [42.4, 15.0], [42.5, 15.0], [42.6, 15.0], [42.7, 15.0], [42.8, 15.0], [42.9, 15.0], [43.0, 15.0], [43.1, 15.0], [43.2, 15.0], [43.3, 15.0], [43.4, 15.0], [43.5, 15.0], [43.6, 15.0], [43.7, 15.0], [43.8, 15.0], [43.9, 15.0], [44.0, 15.0], [44.1, 15.0], [44.2, 15.0], [44.3, 15.0], [44.4, 15.0], [44.5, 15.0], [44.6, 15.0], [44.7, 15.0], [44.8, 15.0], [44.9, 15.0], [45.0, 15.0], [45.1, 15.0], [45.2, 15.0], [45.3, 15.0], [45.4, 15.0], [45.5, 15.0], [45.6, 15.0], [45.7, 15.0], [45.8, 15.0], [45.9, 15.0], [46.0, 15.0], [46.1, 15.0], [46.2, 15.0], [46.3, 15.0], [46.4, 15.0], [46.5, 15.0], [46.6, 15.0], [46.7, 15.0], [46.8, 15.0], [46.9, 15.0], [47.0, 15.0], [47.1, 15.0], [47.2, 15.0], [47.3, 15.0], [47.4, 15.0], [47.5, 15.0], [47.6, 15.0], [47.7, 15.0], [47.8, 15.0], [47.9, 15.0], [48.0, 15.0], [48.1, 15.0], [48.2, 15.0], [48.3, 15.0], [48.4, 15.0], [48.5, 15.0], [48.6, 15.0], [48.7, 15.0], [48.8, 15.0], [48.9, 15.0], [49.0, 15.0], [49.1, 15.0], [49.2, 15.0], [49.3, 15.0], [49.4, 15.0], [49.5, 15.0], [49.6, 15.0], [49.7, 15.0], [49.8, 15.0], [49.9, 15.0], [50.0, 15.0], [50.1, 15.0], [50.2, 15.0], [50.3, 15.0], [50.4, 15.0], [50.5, 15.0], [50.6, 15.0], [50.7, 15.0], [50.8, 15.0], [50.9, 15.0], [51.0, 15.0], [51.1, 15.0], [51.2, 15.0], [51.3, 15.0], [51.4, 15.0], [51.5, 15.0], [51.6, 15.0], [51.7, 15.0], [51.8, 15.0], [51.9, 15.0], [52.0, 15.0], [52.1, 15.0], [52.2, 15.0], [52.3, 15.0], [52.4, 15.0], [52.5, 15.0], [52.6, 15.0], [52.7, 15.0], [52.8, 15.0], [52.9, 15.0], [53.0, 15.0], [53.1, 15.0], [53.2, 15.0], [53.3, 15.0], [53.4, 15.0], [53.5, 15.0], [53.6, 15.0], [53.7, 15.0], [53.8, 15.0], [53.9, 15.0], [54.0, 15.0], [54.1, 15.0], [54.2, 15.0], [54.3, 15.0], [54.4, 15.0], [54.5, 15.0], [54.6, 15.0], [54.7, 15.0], [54.8, 15.0], [54.9, 15.0], [55.0, 15.0], [55.1, 15.0], [55.2, 15.0], [55.3, 15.0], [55.4, 15.0], [55.5, 15.0], [55.6, 15.0], [55.7, 15.0], [55.8, 15.0], [55.9, 15.0], [56.0, 15.0], [56.1, 15.0], [56.2, 15.0], [56.3, 15.0], [56.4, 15.0], [56.5, 15.0], [56.6, 15.0], [56.7, 15.0], [56.8, 15.0], [56.9, 15.0], [57.0, 15.0], [57.1, 15.0], [57.2, 15.0], [57.3, 15.0], [57.4, 15.0], [57.5, 15.0], [57.6, 15.0], [57.7, 15.0], [57.8, 15.0], [57.9, 15.0], [58.0, 15.0], [58.1, 15.0], [58.2, 15.0], [58.3, 15.0], [58.4, 15.0], [58.5, 15.0], [58.6, 15.0], [58.7, 15.0], [58.8, 15.0], [58.9, 15.0], [59.0, 15.0], [59.1, 15.0], [59.2, 15.0], [59.3, 15.0], [59.4, 15.0], [59.5, 15.0], [59.6, 15.0], [59.7, 15.0], [59.8, 15.0], [59.9, 15.0], [60.0, 15.0], [60.1, 15.0], [60.2, 15.0], [60.3, 15.0], [60.4, 15.0], [60.5, 15.0], [60.6, 15.0], [60.7, 15.0], [60.8, 15.0], [60.9, 15.0], [61.0, 15.0], [61.1, 15.0], [61.2, 15.0], [61.3, 15.0], [61.4, 15.0], [61.5, 15.0], [61.6, 15.0], [61.7, 15.0], [61.8, 15.0], [61.9, 15.0], [62.0, 15.0], [62.1, 15.0], [62.2, 15.0], [62.3, 15.0], [62.4, 15.0], [62.5, 15.0], [62.6, 15.0], [62.7, 15.0], [62.8, 15.0], [62.9, 15.0], [63.0, 15.0], [63.1, 15.0], [63.2, 15.0], [63.3, 15.0], [63.4, 15.0], [63.5, 15.0], [63.6, 15.0], [63.7, 15.0], [63.8, 15.0], [63.9, 15.0], [64.0, 15.0], [64.1, 15.0], [64.2, 15.0], [64.3, 15.0], [64.4, 15.0], [64.5, 15.0], [64.6, 15.0], [64.7, 15.0], [64.8, 15.0], [64.9, 15.0], [65.0, 15.0], [65.1, 15.0], [65.2, 15.0], [65.3, 15.0], [65.4, 15.0], [65.5, 15.0], [65.6, 15.0], [65.7, 15.0], [65.8, 15.0], [65.9, 15.0], [66.0, 15.0], [66.1, 15.0], [66.2, 15.0], [66.3, 15.0], [66.4, 15.0], [66.5, 15.0], [66.6, 15.0], [66.7, 15.0], [66.8, 15.0], [66.9, 15.0], [67.0, 15.0], [67.1, 15.0], [67.2, 15.0], [67.3, 15.0], [67.4, 15.0], [67.5, 15.0], [67.6, 15.0], [67.7, 15.0], [67.8, 15.0], [67.9, 15.0], [68.0, 15.0], [68.1, 15.0], [68.2, 15.0], [68.3, 15.0], [68.4, 15.0], [68.5, 15.0], [68.6, 15.0], [68.7, 15.0], [68.8, 15.0], [68.9, 15.0], [69.0, 15.0], [69.1, 15.0], [69.2, 15.0], [69.3, 15.0], [69.4, 15.0], [69.5, 15.0], [69.6, 15.0], [69.7, 15.0], [69.8, 16.0], [69.9, 16.0], [70.0, 16.0], [70.1, 16.0], [70.2, 16.0], [70.3, 16.0], [70.4, 16.0], [70.5, 16.0], [70.6, 16.0], [70.7, 16.0], [70.8, 16.0], [70.9, 16.0], [71.0, 16.0], [71.1, 16.0], [71.2, 16.0], [71.3, 16.0], [71.4, 16.0], [71.5, 16.0], [71.6, 16.0], [71.7, 16.0], [71.8, 16.0], [71.9, 16.0], [72.0, 16.0], [72.1, 16.0], [72.2, 16.0], [72.3, 16.0], [72.4, 16.0], [72.5, 16.0], [72.6, 16.0], [72.7, 16.0], [72.8, 16.0], [72.9, 16.0], [73.0, 16.0], [73.1, 16.0], [73.2, 16.0], [73.3, 16.0], [73.4, 16.0], [73.5, 16.0], [73.6, 16.0], [73.7, 16.0], [73.8, 16.0], [73.9, 16.0], [74.0, 16.0], [74.1, 16.0], [74.2, 16.0], [74.3, 16.0], [74.4, 16.0], [74.5, 16.0], [74.6, 16.0], [74.7, 16.0], [74.8, 16.0], [74.9, 16.0], [75.0, 16.0], [75.1, 16.0], [75.2, 16.0], [75.3, 16.0], [75.4, 16.0], [75.5, 16.0], [75.6, 16.0], [75.7, 16.0], [75.8, 16.0], [75.9, 16.0], [76.0, 16.0], [76.1, 16.0], [76.2, 16.0], [76.3, 16.0], [76.4, 16.0], [76.5, 16.0], [76.6, 16.0], [76.7, 16.0], [76.8, 16.0], [76.9, 16.0], [77.0, 16.0], [77.1, 16.0], [77.2, 16.0], [77.3, 16.0], [77.4, 16.0], [77.5, 16.0], [77.6, 16.0], [77.7, 16.0], [77.8, 16.0], [77.9, 16.0], [78.0, 16.0], [78.1, 16.0], [78.2, 16.0], [78.3, 16.0], [78.4, 16.0], [78.5, 16.0], [78.6, 16.0], [78.7, 16.0], [78.8, 16.0], [78.9, 16.0], [79.0, 16.0], [79.1, 16.0], [79.2, 16.0], [79.3, 16.0], [79.4, 16.0], [79.5, 16.0], [79.6, 16.0], [79.7, 16.0], [79.8, 16.0], [79.9, 16.0], [80.0, 16.0], [80.1, 16.0], [80.2, 16.0], [80.3, 16.0], [80.4, 16.0], [80.5, 16.0], [80.6, 16.0], [80.7, 16.0], [80.8, 16.0], [80.9, 16.0], [81.0, 16.0], [81.1, 16.0], [81.2, 16.0], [81.3, 16.0], [81.4, 16.0], [81.5, 16.0], [81.6, 16.0], [81.7, 16.0], [81.8, 16.0], [81.9, 16.0], [82.0, 16.0], [82.1, 16.0], [82.2, 16.0], [82.3, 16.0], [82.4, 16.0], [82.5, 16.0], [82.6, 16.0], [82.7, 16.0], [82.8, 16.0], [82.9, 16.0], [83.0, 16.0], [83.1, 16.0], [83.2, 16.0], [83.3, 16.0], [83.4, 16.0], [83.5, 16.0], [83.6, 16.0], [83.7, 16.0], [83.8, 16.0], [83.9, 16.0], [84.0, 16.0], [84.1, 16.0], [84.2, 16.0], [84.3, 16.0], [84.4, 16.0], [84.5, 16.0], [84.6, 16.0], [84.7, 16.0], [84.8, 16.0], [84.9, 16.0], [85.0, 16.0], [85.1, 16.0], [85.2, 16.0], [85.3, 16.0], [85.4, 16.0], [85.5, 16.0], [85.6, 16.0], [85.7, 16.0], [85.8, 16.0], [85.9, 16.0], [86.0, 16.0], [86.1, 16.0], [86.2, 16.0], [86.3, 16.0], [86.4, 16.0], [86.5, 16.0], [86.6, 16.0], [86.7, 16.0], [86.8, 16.0], [86.9, 16.0], [87.0, 16.0], [87.1, 16.0], [87.2, 16.0], [87.3, 16.0], [87.4, 16.0], [87.5, 16.0], [87.6, 16.0], [87.7, 16.0], [87.8, 16.0], [87.9, 16.0], [88.0, 16.0], [88.1, 16.0], [88.2, 16.0], [88.3, 16.0], [88.4, 16.0], [88.5, 16.0], [88.6, 16.0], [88.7, 16.0], [88.8, 17.0], [88.9, 17.0], [89.0, 17.0], [89.1, 17.0], [89.2, 17.0], [89.3, 17.0], [89.4, 17.0], [89.5, 17.0], [89.6, 17.0], [89.7, 17.0], [89.8, 17.0], [89.9, 17.0], [90.0, 17.0], [90.1, 17.0], [90.2, 17.0], [90.3, 17.0], [90.4, 17.0], [90.5, 17.0], [90.6, 17.0], [90.7, 17.0], [90.8, 17.0], [90.9, 17.0], [91.0, 17.0], [91.1, 17.0], [91.2, 17.0], [91.3, 17.0], [91.4, 17.0], [91.5, 17.0], [91.6, 17.0], [91.7, 17.0], [91.8, 17.0], [91.9, 17.0], [92.0, 17.0], [92.1, 17.0], [92.2, 17.0], [92.3, 17.0], [92.4, 17.0], [92.5, 17.0], [92.6, 17.0], [92.7, 17.0], [92.8, 17.0], [92.9, 18.0], [93.0, 18.0], [93.1, 18.0], [93.2, 18.0], [93.3, 18.0], [93.4, 18.0], [93.5, 18.0], [93.6, 18.0], [93.7, 18.0], [93.8, 18.0], [93.9, 18.0], [94.0, 18.0], [94.1, 18.0], [94.2, 18.0], [94.3, 18.0], [94.4, 19.0], [94.5, 19.0], [94.6, 19.0], [94.7, 19.0], [94.8, 19.0], [94.9, 19.0], [95.0, 19.0], [95.1, 19.0], [95.2, 19.0], [95.3, 20.0], [95.4, 20.0], [95.5, 20.0], [95.6, 20.0], [95.7, 20.0], [95.8, 21.0], [95.9, 21.0], [96.0, 21.0], [96.1, 21.0], [96.2, 22.0], [96.3, 22.0], [96.4, 22.0], [96.5, 23.0], [96.6, 23.0], [96.7, 24.0], [96.8, 24.0], [96.9, 24.0], [97.0, 25.0], [97.1, 25.0], [97.2, 25.0], [97.3, 26.0], [97.4, 26.0], [97.5, 26.0], [97.6, 27.0], [97.7, 27.0], [97.8, 27.0], [97.9, 28.0], [98.0, 28.0], [98.1, 28.0], [98.2, 28.0], [98.3, 29.0], [98.4, 29.0], [98.5, 29.0], [98.6, 30.0], [98.7, 30.0], [98.8, 30.0], [98.9, 31.0], [99.0, 31.0], [99.1, 32.0], [99.2, 32.0], [99.3, 33.0], [99.4, 34.0], [99.5, 35.0], [99.6, 36.0], [99.7, 38.0], [99.8, 40.0], [99.9, 45.0], [100.0, 4728.0]], "isOverall": false, "label": "HTTP Request - enroll", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 99994.0, "series": [{"data": [[0.0, 99994.0], [300.0, 1.0], [1200.0, 1.0], [4700.0, 1.0], [100.0, 1.0], [1900.0, 1.0], [2000.0, 1.0]], "isOverall": false, "label": "HTTP Request - enroll", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 99996.0, "series": [{"data": [[0.0, 99996.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 3.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.74657276E12, "maxY": 1.0, "series": [{"data": [[1.74657318E12, 1.0], [1.74657348E12, 1.0], [1.74657378E12, 1.0], [1.74657408E12, 1.0], [1.7465739E12, 1.0], [1.7465742E12, 1.0], [1.74657288E12, 1.0], [1.746573E12, 1.0], [1.7465733E12, 1.0], [1.7465736E12, 1.0], [1.74657342E12, 1.0], [1.74657372E12, 1.0], [1.74657402E12, 1.0], [1.74657432E12, 1.0], [1.74657414E12, 1.0], [1.74657312E12, 1.0], [1.74657282E12, 1.0], [1.74657294E12, 1.0], [1.74657324E12, 1.0], [1.74657354E12, 1.0], [1.74657384E12, 1.0], [1.74657366E12, 1.0], [1.74657396E12, 1.0], [1.74657426E12, 1.0], [1.74657276E12, 1.0], [1.74657438E12, 1.0], [1.74657306E12, 1.0], [1.74657336E12, 1.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74657438E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 15.684129999999875, "minX": 1.0, "maxY": 15.684129999999875, "series": [{"data": [[1.0, 15.684129999999875]], "isOverall": false, "label": "HTTP Request - enroll", "isController": false}, {"data": [[1.0, 15.684129999999875]], "isOverall": false, "label": "HTTP Request - enroll-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 1.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 17563.4, "minX": 1.74657276E12, "maxY": 179657.71666666667, "series": [{"data": [[1.74657318E12, 177978.56666666668], [1.74657348E12, 177978.63333333333], [1.74657378E12, 166872.61666666667], [1.74657408E12, 176764.85], [1.7465739E12, 173452.7], [1.7465742E12, 172518.96666666667], [1.74657288E12, 173545.7], [1.746573E12, 177745.08333333334], [1.7465733E12, 174479.3], [1.7465736E12, 163792.9], [1.74657342E12, 174852.7], [1.74657372E12, 173125.5], [1.74657402E12, 173732.55], [1.74657432E12, 174385.73333333334], [1.74657414E12, 175226.2], [1.74657312E12, 175458.41666666666], [1.74657282E12, 172332.63333333333], [1.74657294E12, 175039.11666666667], [1.74657324E12, 179657.71666666667], [1.74657354E12, 177278.68333333332], [1.74657384E12, 173452.3], [1.74657366E12, 171958.88333333333], [1.74657396E12, 176112.06666666668], [1.74657426E12, 174291.68333333332], [1.74657276E12, 75736.56666666667], [1.74657438E12, 59824.066666666666], [1.74657306E12, 174711.83333333334], [1.74657336E12, 174152.18333333332]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.74657318E12, 52251.8], [1.74657348E12, 52251.8], [1.74657378E12, 48991.2], [1.74657408E12, 51895.6], [1.7465739E12, 50922.9], [1.7465742E12, 50648.9], [1.74657288E12, 50950.3], [1.746573E12, 52183.3], [1.7465733E12, 51224.3], [1.7465736E12, 48087.0], [1.74657342E12, 51333.9], [1.74657372E12, 50827.0], [1.74657402E12, 51005.1], [1.74657432E12, 51196.9], [1.74657414E12, 51443.5], [1.74657312E12, 51512.0], [1.74657282E12, 50594.1], [1.74657294E12, 51388.7], [1.74657324E12, 52745.0], [1.74657354E12, 52046.3], [1.74657384E12, 50922.9], [1.74657366E12, 50484.5], [1.74657396E12, 51703.8], [1.74657426E12, 51169.5], [1.74657276E12, 22235.1], [1.74657438E12, 17563.4], [1.74657306E12, 51292.8], [1.74657336E12, 51128.4]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74657438E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 15.199480519480518, "minX": 1.74657276E12, "maxY": 16.706267806267796, "series": [{"data": [[1.74657318E12, 15.365495542737282], [1.74657348E12, 15.364446775039353], [1.74657378E12, 16.406599552572754], [1.74657408E12, 15.45987328405492], [1.7465739E12, 15.7519504977132], [1.7465742E12, 15.850689748444712], [1.74657288E12, 15.642108093573517], [1.746573E12, 15.357311630349185], [1.7465733E12, 15.658732281358686], [1.7465736E12, 16.706267806267796], [1.74657342E12, 15.635174806511866], [1.74657372E12, 15.782749326145556], [1.74657402E12, 15.740263228579114], [1.74657432E12, 15.68878779769865], [1.74657414E12, 15.612516644474027], [1.74657312E12, 15.563563829787226], [1.74657282E12, 15.67018683996753], [1.74657294E12, 15.567048786990156], [1.74657324E12, 15.199480519480518], [1.74657354E12, 15.42537509871017], [1.74657384E12, 15.79445789615282], [1.74657366E12, 15.899321573948466], [1.74657396E12, 15.518282988871242], [1.74657426E12, 15.715662650602408], [1.74657276E12, 16.466420209488618], [1.74657438E12, 15.367394695787837], [1.74657306E12, 15.640491452991467], [1.74657336E12, 15.683815648445847]], "isOverall": false, "label": "HTTP Request - enroll", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74657438E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 15.196103896103857, "minX": 1.74657276E12, "maxY": 16.703133903133914, "series": [{"data": [[1.74657318E12, 15.362611431567903], [1.74657348E12, 15.361300471945452], [1.74657378E12, 16.40240492170024], [1.74657408E12, 15.456705385427668], [1.7465739E12, 15.746838848533738], [1.7465742E12, 15.846361915066256], [1.74657288E12, 15.637536972304362], [1.746573E12, 15.353111052769757], [1.7465733E12, 15.653918159935833], [1.7465736E12, 16.703133903133914], [1.74657342E12, 15.631705364291424], [1.74657372E12, 15.777897574123974], [1.74657402E12, 15.737040021488045], [1.74657432E12, 15.683703505485646], [1.74657414E12, 15.607989347536611], [1.74657312E12, 15.559308510638253], [1.74657282E12, 15.659626320064985], [1.74657294E12, 15.559850706478258], [1.74657324E12, 15.196103896103857], [1.74657354E12, 15.422216372729661], [1.74657384E12, 15.788001076136663], [1.74657366E12, 15.896879240162807], [1.74657396E12, 15.51563328033917], [1.74657426E12, 15.712182061579623], [1.74657276E12, 16.452865064695047], [1.74657438E12, 15.362714508580337], [1.74657306E12, 15.635950854700846], [1.74657336E12, 15.681672025723445]], "isOverall": false, "label": "HTTP Request - enroll", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74657438E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.74657276E12, "maxY": 0.16512630930375824, "series": [{"data": [[1.74657318E12, 7.865757734661778E-4], [1.74657348E12, 7.865757734661777E-4], [1.74657378E12, 8.389261744966447E-4], [1.74657408E12, 7.919746568109824E-4], [1.7465739E12, 8.071025020177568E-4], [1.7465742E12, 8.114687584527999E-4], [1.74657288E12, 0.0010755579456843242], [1.746573E12, 0.0010501443948542925], [1.7465733E12, 8.02353570473389E-4], [1.7465736E12, 8.547008547008552E-4], [1.74657342E12, 8.006405124099284E-4], [1.74657372E12, 8.086253369272241E-4], [1.74657402E12, 8.058017727639007E-4], [1.74657432E12, 8.027829810008034E-4], [1.74657414E12, 7.989347536617848E-4], [1.74657312E12, 0.0010638297872340424], [1.74657282E12, 0.0016246953696181972], [1.74657294E12, 0.0010663822980538523], [1.74657324E12, 7.792207792207793E-4], [1.74657354E12, 7.896814951302981E-4], [1.74657384E12, 8.071025020177568E-4], [1.74657366E12, 8.141112618724565E-4], [1.74657396E12, 7.949125596184425E-4], [1.74657426E12, 8.032128514056227E-4], [1.74657276E12, 0.16512630930375824], [1.74657438E12, 0.0], [1.74657306E12, 0.0010683760683760685], [1.74657336E12, 8.03858520900322E-4]], "isOverall": false, "label": "HTTP Request - enroll", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74657438E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 11.0, "minX": 1.74657276E12, "maxY": 4728.0, "series": [{"data": [[1.74657318E12, 59.0], [1.74657348E12, 49.0], [1.74657378E12, 60.0], [1.74657408E12, 70.0], [1.7465739E12, 50.0], [1.7465742E12, 58.0], [1.74657288E12, 54.0], [1.746573E12, 50.0], [1.7465733E12, 49.0], [1.7465736E12, 4728.0], [1.74657342E12, 46.0], [1.74657372E12, 2026.0], [1.74657402E12, 50.0], [1.74657432E12, 46.0], [1.74657414E12, 52.0], [1.74657312E12, 46.0], [1.74657282E12, 56.0], [1.74657294E12, 57.0], [1.74657324E12, 40.0], [1.74657354E12, 1240.0], [1.74657384E12, 56.0], [1.74657366E12, 1930.0], [1.74657396E12, 65.0], [1.74657426E12, 46.0], [1.74657276E12, 307.0], [1.74657438E12, 42.0], [1.74657306E12, 62.0], [1.74657336E12, 49.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.74657318E12, 16.0], [1.74657348E12, 17.0], [1.74657378E12, 19.0], [1.74657408E12, 16.0], [1.7465739E12, 17.0], [1.7465742E12, 17.0], [1.74657288E12, 17.0], [1.746573E12, 16.0], [1.7465733E12, 16.0], [1.7465736E12, 17.0], [1.74657342E12, 16.200000000000273], [1.74657372E12, 16.0], [1.74657402E12, 17.0], [1.74657432E12, 17.0], [1.74657414E12, 17.0], [1.74657312E12, 17.0], [1.74657282E12, 17.0], [1.74657294E12, 17.0], [1.74657324E12, 16.0], [1.74657354E12, 16.0], [1.74657384E12, 17.0], [1.74657366E12, 17.0], [1.74657396E12, 16.0], [1.74657426E12, 17.0], [1.74657276E12, 18.0], [1.74657438E12, 16.0], [1.74657306E12, 17.0], [1.74657336E12, 17.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.74657318E12, 30.0], [1.74657348E12, 30.0], [1.74657378E12, 40.23000000000002], [1.74657408E12, 30.0], [1.7465739E12, 30.0], [1.7465742E12, 34.01999999999998], [1.74657288E12, 30.0], [1.746573E12, 31.0], [1.7465733E12, 32.59999999999991], [1.7465736E12, 25.889999999999873], [1.74657342E12, 31.519999999999982], [1.74657372E12, 28.0], [1.74657402E12, 31.0], [1.74657432E12, 31.0], [1.74657414E12, 32.0], [1.74657312E12, 30.0], [1.74657282E12, 32.0], [1.74657294E12, 30.0], [1.74657324E12, 25.0], [1.74657354E12, 24.0], [1.74657384E12, 34.0], [1.74657366E12, 34.0], [1.74657396E12, 32.0], [1.74657426E12, 31.0], [1.74657276E12, 22.0], [1.74657438E12, 25.340000000000146], [1.74657306E12, 30.0], [1.74657336E12, 31.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.74657318E12, 19.0], [1.74657348E12, 18.0], [1.74657378E12, 31.0], [1.74657408E12, 18.0], [1.7465739E12, 21.0], [1.7465742E12, 21.0], [1.74657288E12, 19.0], [1.746573E12, 19.0], [1.7465733E12, 20.0], [1.7465736E12, 18.0], [1.74657342E12, 20.0], [1.74657372E12, 18.0], [1.74657402E12, 20.0], [1.74657432E12, 20.0], [1.74657414E12, 19.0], [1.74657312E12, 20.0], [1.74657282E12, 19.0], [1.74657294E12, 20.0], [1.74657324E12, 17.0], [1.74657354E12, 18.0], [1.74657384E12, 20.0], [1.74657366E12, 18.0], [1.74657396E12, 20.0], [1.74657426E12, 21.0], [1.74657276E12, 19.799999999999955], [1.74657438E12, 17.0], [1.74657306E12, 20.0], [1.74657336E12, 20.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.74657318E12, 12.0], [1.74657348E12, 11.0], [1.74657378E12, 11.0], [1.74657408E12, 12.0], [1.7465739E12, 12.0], [1.7465742E12, 12.0], [1.74657288E12, 11.0], [1.746573E12, 11.0], [1.7465733E12, 12.0], [1.7465736E12, 12.0], [1.74657342E12, 12.0], [1.74657372E12, 11.0], [1.74657402E12, 13.0], [1.74657432E12, 13.0], [1.74657414E12, 12.0], [1.74657312E12, 11.0], [1.74657282E12, 11.0], [1.74657294E12, 12.0], [1.74657324E12, 12.0], [1.74657354E12, 11.0], [1.74657384E12, 12.0], [1.74657366E12, 11.0], [1.74657396E12, 12.0], [1.74657426E12, 12.0], [1.74657276E12, 13.0], [1.74657438E12, 12.0], [1.74657306E12, 12.0], [1.74657336E12, 12.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.74657318E12, 15.0], [1.74657348E12, 15.0], [1.74657378E12, 15.0], [1.74657408E12, 15.0], [1.7465739E12, 15.0], [1.7465742E12, 15.0], [1.74657288E12, 15.0], [1.746573E12, 15.0], [1.7465733E12, 15.0], [1.7465736E12, 15.0], [1.74657342E12, 15.0], [1.74657372E12, 15.0], [1.74657402E12, 15.0], [1.74657432E12, 15.0], [1.74657414E12, 15.0], [1.74657312E12, 15.0], [1.74657282E12, 15.0], [1.74657294E12, 15.0], [1.74657324E12, 15.0], [1.74657354E12, 15.0], [1.74657384E12, 15.0], [1.74657366E12, 15.0], [1.74657396E12, 15.0], [1.74657426E12, 15.0], [1.74657276E12, 16.0], [1.74657438E12, 15.0], [1.74657306E12, 15.0], [1.74657336E12, 15.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74657438E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 13.0, "minX": 1.0, "maxY": 307.0, "series": [{"data": [[5.0, 27.0], [7.0, 15.0], [14.0, 30.0], [24.0, 27.0], [28.0, 32.0], [29.0, 33.0], [30.0, 32.0], [31.0, 30.0], [32.0, 30.0], [33.0, 28.0], [34.0, 29.0], [35.0, 28.0], [37.0, 27.0], [36.0, 27.5], [38.0, 27.0], [39.0, 17.0], [40.0, 22.0], [41.0, 24.0], [43.0, 22.0], [42.0, 21.0], [45.0, 18.0], [44.0, 20.0], [46.0, 19.0], [47.0, 16.0], [49.0, 18.0], [48.0, 15.5], [50.0, 16.0], [51.0, 15.0], [53.0, 16.0], [52.0, 15.0], [54.0, 17.0], [55.0, 16.0], [57.0, 16.0], [56.0, 16.0], [58.0, 16.0], [59.0, 16.0], [60.0, 16.0], [61.0, 16.0], [62.0, 15.0], [63.0, 15.0], [66.0, 15.0], [67.0, 14.0], [65.0, 15.0], [64.0, 15.0], [70.0, 14.0], [69.0, 14.0], [68.0, 14.0], [71.0, 14.0], [74.0, 13.0], [75.0, 13.0], [72.0, 13.0], [73.0, 13.0], [1.0, 307.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 75.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 13.0, "minX": 1.0, "maxY": 307.0, "series": [{"data": [[5.0, 27.0], [7.0, 15.0], [14.0, 30.0], [24.0, 26.5], [28.0, 32.0], [29.0, 33.0], [30.0, 32.0], [31.0, 30.0], [32.0, 30.0], [33.0, 28.0], [34.0, 29.0], [35.0, 28.0], [37.0, 27.0], [36.0, 27.5], [38.0, 27.0], [39.0, 17.0], [40.0, 22.0], [41.0, 24.0], [43.0, 22.0], [42.0, 21.0], [45.0, 18.0], [44.0, 20.0], [46.0, 19.0], [47.0, 16.0], [49.0, 18.0], [48.0, 15.5], [50.0, 16.0], [51.0, 15.0], [53.0, 16.0], [52.0, 15.0], [54.0, 17.0], [55.0, 16.0], [57.0, 16.0], [56.0, 16.0], [58.0, 16.0], [59.0, 16.0], [60.0, 16.0], [61.0, 16.0], [62.0, 15.0], [63.0, 15.0], [66.0, 15.0], [67.0, 14.0], [65.0, 15.0], [64.0, 15.0], [70.0, 14.0], [69.0, 14.0], [68.0, 14.0], [71.0, 14.0], [74.0, 13.0], [75.0, 13.0], [72.0, 13.0], [73.0, 13.0], [1.0, 307.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 75.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 21.35, "minX": 1.74657276E12, "maxY": 64.16666666666667, "series": [{"data": [[1.74657318E12, 63.56666666666667], [1.74657348E12, 63.56666666666667], [1.74657378E12, 59.6], [1.74657408E12, 63.13333333333333], [1.7465739E12, 61.95], [1.7465742E12, 61.61666666666667], [1.74657288E12, 61.983333333333334], [1.746573E12, 63.483333333333334], [1.7465733E12, 62.31666666666667], [1.7465736E12, 58.5], [1.74657342E12, 62.45], [1.74657372E12, 61.833333333333336], [1.74657402E12, 62.05], [1.74657432E12, 62.28333333333333], [1.74657414E12, 62.583333333333336], [1.74657312E12, 62.666666666666664], [1.74657282E12, 61.55], [1.74657294E12, 62.516666666666666], [1.74657324E12, 64.16666666666667], [1.74657354E12, 63.31666666666667], [1.74657384E12, 61.95], [1.74657366E12, 61.416666666666664], [1.74657396E12, 62.9], [1.74657426E12, 62.25], [1.74657276E12, 27.066666666666666], [1.74657438E12, 21.35], [1.74657306E12, 62.4], [1.74657336E12, 62.2]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74657438E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 21.366666666666667, "minX": 1.74657276E12, "maxY": 64.16666666666667, "series": [{"data": [[1.74657318E12, 63.56666666666667], [1.74657348E12, 63.56666666666667], [1.74657378E12, 59.6], [1.74657408E12, 63.13333333333333], [1.7465739E12, 61.95], [1.7465742E12, 61.61666666666667], [1.74657288E12, 61.983333333333334], [1.746573E12, 63.483333333333334], [1.7465733E12, 62.31666666666667], [1.7465736E12, 58.5], [1.74657342E12, 62.45], [1.74657372E12, 61.833333333333336], [1.74657402E12, 62.05], [1.74657432E12, 62.28333333333333], [1.74657414E12, 62.583333333333336], [1.74657312E12, 62.666666666666664], [1.74657282E12, 61.55], [1.74657294E12, 62.516666666666666], [1.74657324E12, 64.16666666666667], [1.74657354E12, 63.31666666666667], [1.74657384E12, 61.95], [1.74657366E12, 61.416666666666664], [1.74657396E12, 62.9], [1.74657426E12, 62.25], [1.74657276E12, 27.05], [1.74657438E12, 21.366666666666667], [1.74657306E12, 62.4], [1.74657336E12, 62.2]], "isOverall": false, "label": "201", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74657438E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 21.366666666666667, "minX": 1.74657276E12, "maxY": 64.16666666666667, "series": [{"data": [[1.74657318E12, 63.56666666666667], [1.74657348E12, 63.56666666666667], [1.74657378E12, 59.6], [1.74657408E12, 63.13333333333333], [1.7465739E12, 61.95], [1.7465742E12, 61.61666666666667], [1.74657288E12, 61.983333333333334], [1.746573E12, 63.483333333333334], [1.7465733E12, 62.31666666666667], [1.7465736E12, 58.5], [1.74657342E12, 62.45], [1.74657372E12, 61.833333333333336], [1.74657402E12, 62.05], [1.74657432E12, 62.28333333333333], [1.74657414E12, 62.583333333333336], [1.74657312E12, 62.666666666666664], [1.74657282E12, 61.55], [1.74657294E12, 62.516666666666666], [1.74657324E12, 64.16666666666667], [1.74657354E12, 63.31666666666667], [1.74657384E12, 61.95], [1.74657366E12, 61.416666666666664], [1.74657396E12, 62.9], [1.74657426E12, 62.25], [1.74657276E12, 27.05], [1.74657438E12, 21.366666666666667], [1.74657306E12, 62.4], [1.74657336E12, 62.2]], "isOverall": false, "label": "HTTP Request - enroll-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74657438E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 21.366666666666667, "minX": 1.74657276E12, "maxY": 64.16666666666667, "series": [{"data": [[1.74657318E12, 63.56666666666667], [1.74657348E12, 63.56666666666667], [1.74657378E12, 59.6], [1.74657408E12, 63.13333333333333], [1.7465739E12, 61.95], [1.7465742E12, 61.61666666666667], [1.74657288E12, 61.983333333333334], [1.746573E12, 63.483333333333334], [1.7465733E12, 62.31666666666667], [1.7465736E12, 58.5], [1.74657342E12, 62.45], [1.74657372E12, 61.833333333333336], [1.74657402E12, 62.05], [1.74657432E12, 62.28333333333333], [1.74657414E12, 62.583333333333336], [1.74657312E12, 62.666666666666664], [1.74657282E12, 61.55], [1.74657294E12, 62.516666666666666], [1.74657324E12, 64.16666666666667], [1.74657354E12, 63.31666666666667], [1.74657384E12, 61.95], [1.74657366E12, 61.416666666666664], [1.74657396E12, 62.9], [1.74657426E12, 62.25], [1.74657276E12, 27.05], [1.74657438E12, 21.366666666666667], [1.74657306E12, 62.4], [1.74657336E12, 62.2]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74657438E12, "title": "Total Transactions Per Second"}},
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

