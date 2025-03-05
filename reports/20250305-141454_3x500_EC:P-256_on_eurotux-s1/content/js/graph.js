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
        data: {"result": {"minY": 172.0, "minX": 0.0, "maxY": 475.0, "series": [{"data": [[0.0, 172.0], [0.1, 175.0], [0.2, 178.0], [0.3, 178.0], [0.4, 178.0], [0.5, 179.0], [0.6, 179.0], [0.7, 179.0], [0.8, 180.0], [0.9, 180.0], [1.0, 181.0], [1.1, 181.0], [1.2, 181.0], [1.3, 181.0], [1.4, 181.0], [1.5, 182.0], [1.6, 182.0], [1.7, 182.0], [1.8, 182.0], [1.9, 183.0], [2.0, 183.0], [2.1, 183.0], [2.2, 183.0], [2.3, 183.0], [2.4, 183.0], [2.5, 183.0], [2.6, 184.0], [2.7, 184.0], [2.8, 184.0], [2.9, 184.0], [3.0, 184.0], [3.1, 184.0], [3.2, 185.0], [3.3, 185.0], [3.4, 185.0], [3.5, 185.0], [3.6, 186.0], [3.7, 186.0], [3.8, 186.0], [3.9, 186.0], [4.0, 187.0], [4.1, 187.0], [4.2, 188.0], [4.3, 188.0], [4.4, 188.0], [4.5, 188.0], [4.6, 189.0], [4.7, 189.0], [4.8, 189.0], [4.9, 189.0], [5.0, 193.0], [5.1, 193.0], [5.2, 210.0], [5.3, 210.0], [5.4, 221.0], [5.5, 222.0], [5.6, 222.0], [5.7, 223.0], [5.8, 223.0], [5.9, 224.0], [6.0, 224.0], [6.1, 224.0], [6.2, 224.0], [6.3, 224.0], [6.4, 224.0], [6.5, 225.0], [6.6, 225.0], [6.7, 225.0], [6.8, 225.0], [6.9, 225.0], [7.0, 225.0], [7.1, 225.0], [7.2, 225.0], [7.3, 225.0], [7.4, 225.0], [7.5, 226.0], [7.6, 226.0], [7.7, 226.0], [7.8, 226.0], [7.9, 226.0], [8.0, 227.0], [8.1, 227.0], [8.2, 227.0], [8.3, 227.0], [8.4, 227.0], [8.5, 227.0], [8.6, 227.0], [8.7, 227.0], [8.8, 227.0], [8.9, 227.0], [9.0, 227.0], [9.1, 227.0], [9.2, 227.0], [9.3, 227.0], [9.4, 227.0], [9.5, 228.0], [9.6, 228.0], [9.7, 228.0], [9.8, 228.0], [9.9, 228.0], [10.0, 228.0], [10.1, 228.0], [10.2, 228.0], [10.3, 228.0], [10.4, 228.0], [10.5, 228.0], [10.6, 228.0], [10.7, 229.0], [10.8, 229.0], [10.9, 229.0], [11.0, 229.0], [11.1, 229.0], [11.2, 229.0], [11.3, 229.0], [11.4, 229.0], [11.5, 229.0], [11.6, 229.0], [11.7, 229.0], [11.8, 229.0], [11.9, 229.0], [12.0, 229.0], [12.1, 229.0], [12.2, 229.0], [12.3, 229.0], [12.4, 229.0], [12.5, 229.0], [12.6, 229.0], [12.7, 229.0], [12.8, 229.0], [12.9, 229.0], [13.0, 230.0], [13.1, 230.0], [13.2, 230.0], [13.3, 230.0], [13.4, 230.0], [13.5, 230.0], [13.6, 230.0], [13.7, 230.0], [13.8, 230.0], [13.9, 230.0], [14.0, 230.0], [14.1, 230.0], [14.2, 230.0], [14.3, 230.0], [14.4, 230.0], [14.5, 230.0], [14.6, 230.0], [14.7, 230.0], [14.8, 230.0], [14.9, 230.0], [15.0, 230.0], [15.1, 230.0], [15.2, 230.0], [15.3, 230.0], [15.4, 230.0], [15.5, 230.0], [15.6, 230.0], [15.7, 230.0], [15.8, 230.0], [15.9, 230.0], [16.0, 231.0], [16.1, 231.0], [16.2, 231.0], [16.3, 231.0], [16.4, 231.0], [16.5, 231.0], [16.6, 231.0], [16.7, 231.0], [16.8, 231.0], [16.9, 231.0], [17.0, 231.0], [17.1, 231.0], [17.2, 231.0], [17.3, 231.0], [17.4, 231.0], [17.5, 231.0], [17.6, 231.0], [17.7, 231.0], [17.8, 231.0], [17.9, 231.0], [18.0, 231.0], [18.1, 231.0], [18.2, 231.0], [18.3, 231.0], [18.4, 231.0], [18.5, 231.0], [18.6, 231.0], [18.7, 231.0], [18.8, 231.0], [18.9, 231.0], [19.0, 231.0], [19.1, 231.0], [19.2, 231.0], [19.3, 231.0], [19.4, 231.0], [19.5, 231.0], [19.6, 231.0], [19.7, 232.0], [19.8, 232.0], [19.9, 232.0], [20.0, 232.0], [20.1, 232.0], [20.2, 232.0], [20.3, 232.0], [20.4, 232.0], [20.5, 232.0], [20.6, 232.0], [20.7, 232.0], [20.8, 232.0], [20.9, 232.0], [21.0, 232.0], [21.1, 232.0], [21.2, 232.0], [21.3, 232.0], [21.4, 232.0], [21.5, 232.0], [21.6, 232.0], [21.7, 232.0], [21.8, 232.0], [21.9, 232.0], [22.0, 232.0], [22.1, 232.0], [22.2, 232.0], [22.3, 232.0], [22.4, 232.0], [22.5, 232.0], [22.6, 232.0], [22.7, 232.0], [22.8, 232.0], [22.9, 232.0], [23.0, 233.0], [23.1, 233.0], [23.2, 233.0], [23.3, 233.0], [23.4, 233.0], [23.5, 233.0], [23.6, 233.0], [23.7, 233.0], [23.8, 233.0], [23.9, 233.0], [24.0, 233.0], [24.1, 233.0], [24.2, 233.0], [24.3, 233.0], [24.4, 233.0], [24.5, 233.0], [24.6, 233.0], [24.7, 233.0], [24.8, 233.0], [24.9, 233.0], [25.0, 233.0], [25.1, 233.0], [25.2, 233.0], [25.3, 233.0], [25.4, 233.0], [25.5, 233.0], [25.6, 233.0], [25.7, 233.0], [25.8, 233.0], [25.9, 233.0], [26.0, 233.0], [26.1, 233.0], [26.2, 233.0], [26.3, 233.0], [26.4, 233.0], [26.5, 233.0], [26.6, 233.0], [26.7, 233.0], [26.8, 233.0], [26.9, 233.0], [27.0, 233.0], [27.1, 233.0], [27.2, 233.0], [27.3, 233.0], [27.4, 233.0], [27.5, 233.0], [27.6, 233.0], [27.7, 233.0], [27.8, 233.0], [27.9, 234.0], [28.0, 234.0], [28.1, 234.0], [28.2, 234.0], [28.3, 234.0], [28.4, 234.0], [28.5, 234.0], [28.6, 234.0], [28.7, 234.0], [28.8, 234.0], [28.9, 234.0], [29.0, 234.0], [29.1, 234.0], [29.2, 234.0], [29.3, 234.0], [29.4, 234.0], [29.5, 234.0], [29.6, 234.0], [29.7, 234.0], [29.8, 234.0], [29.9, 234.0], [30.0, 234.0], [30.1, 234.0], [30.2, 234.0], [30.3, 234.0], [30.4, 234.0], [30.5, 234.0], [30.6, 234.0], [30.7, 234.0], [30.8, 234.0], [30.9, 234.0], [31.0, 234.0], [31.1, 234.0], [31.2, 234.0], [31.3, 234.0], [31.4, 234.0], [31.5, 234.0], [31.6, 234.0], [31.7, 234.0], [31.8, 234.0], [31.9, 234.0], [32.0, 234.0], [32.1, 234.0], [32.2, 234.0], [32.3, 234.0], [32.4, 234.0], [32.5, 234.0], [32.6, 234.0], [32.7, 234.0], [32.8, 234.0], [32.9, 234.0], [33.0, 234.0], [33.1, 234.0], [33.2, 234.0], [33.3, 234.0], [33.4, 234.0], [33.5, 234.0], [33.6, 234.0], [33.7, 234.0], [33.8, 234.0], [33.9, 234.0], [34.0, 235.0], [34.1, 235.0], [34.2, 235.0], [34.3, 235.0], [34.4, 235.0], [34.5, 235.0], [34.6, 235.0], [34.7, 235.0], [34.8, 235.0], [34.9, 235.0], [35.0, 235.0], [35.1, 235.0], [35.2, 235.0], [35.3, 235.0], [35.4, 235.0], [35.5, 235.0], [35.6, 235.0], [35.7, 235.0], [35.8, 235.0], [35.9, 235.0], [36.0, 235.0], [36.1, 235.0], [36.2, 235.0], [36.3, 235.0], [36.4, 235.0], [36.5, 235.0], [36.6, 235.0], [36.7, 235.0], [36.8, 235.0], [36.9, 235.0], [37.0, 235.0], [37.1, 235.0], [37.2, 235.0], [37.3, 235.0], [37.4, 235.0], [37.5, 235.0], [37.6, 235.0], [37.7, 235.0], [37.8, 235.0], [37.9, 235.0], [38.0, 235.0], [38.1, 235.0], [38.2, 235.0], [38.3, 235.0], [38.4, 235.0], [38.5, 235.0], [38.6, 235.0], [38.7, 235.0], [38.8, 235.0], [38.9, 235.0], [39.0, 235.0], [39.1, 235.0], [39.2, 235.0], [39.3, 235.0], [39.4, 235.0], [39.5, 235.0], [39.6, 235.0], [39.7, 235.0], [39.8, 236.0], [39.9, 236.0], [40.0, 236.0], [40.1, 236.0], [40.2, 236.0], [40.3, 236.0], [40.4, 236.0], [40.5, 236.0], [40.6, 236.0], [40.7, 236.0], [40.8, 236.0], [40.9, 236.0], [41.0, 236.0], [41.1, 236.0], [41.2, 236.0], [41.3, 236.0], [41.4, 236.0], [41.5, 236.0], [41.6, 236.0], [41.7, 236.0], [41.8, 236.0], [41.9, 236.0], [42.0, 236.0], [42.1, 236.0], [42.2, 236.0], [42.3, 236.0], [42.4, 236.0], [42.5, 236.0], [42.6, 236.0], [42.7, 236.0], [42.8, 236.0], [42.9, 236.0], [43.0, 236.0], [43.1, 236.0], [43.2, 236.0], [43.3, 236.0], [43.4, 236.0], [43.5, 236.0], [43.6, 236.0], [43.7, 236.0], [43.8, 236.0], [43.9, 236.0], [44.0, 236.0], [44.1, 236.0], [44.2, 236.0], [44.3, 236.0], [44.4, 236.0], [44.5, 236.0], [44.6, 236.0], [44.7, 236.0], [44.8, 236.0], [44.9, 236.0], [45.0, 236.0], [45.1, 236.0], [45.2, 236.0], [45.3, 236.0], [45.4, 236.0], [45.5, 236.0], [45.6, 236.0], [45.7, 236.0], [45.8, 236.0], [45.9, 236.0], [46.0, 236.0], [46.1, 236.0], [46.2, 236.0], [46.3, 237.0], [46.4, 237.0], [46.5, 237.0], [46.6, 237.0], [46.7, 237.0], [46.8, 237.0], [46.9, 237.0], [47.0, 237.0], [47.1, 237.0], [47.2, 237.0], [47.3, 237.0], [47.4, 237.0], [47.5, 237.0], [47.6, 237.0], [47.7, 237.0], [47.8, 237.0], [47.9, 237.0], [48.0, 237.0], [48.1, 237.0], [48.2, 237.0], [48.3, 237.0], [48.4, 237.0], [48.5, 237.0], [48.6, 237.0], [48.7, 237.0], [48.8, 237.0], [48.9, 237.0], [49.0, 237.0], [49.1, 237.0], [49.2, 237.0], [49.3, 237.0], [49.4, 237.0], [49.5, 237.0], [49.6, 237.0], [49.7, 237.0], [49.8, 237.0], [49.9, 237.0], [50.0, 237.0], [50.1, 237.0], [50.2, 237.0], [50.3, 237.0], [50.4, 237.0], [50.5, 237.0], [50.6, 237.0], [50.7, 237.0], [50.8, 237.0], [50.9, 237.0], [51.0, 237.0], [51.1, 237.0], [51.2, 237.0], [51.3, 237.0], [51.4, 237.0], [51.5, 237.0], [51.6, 237.0], [51.7, 237.0], [51.8, 237.0], [51.9, 237.0], [52.0, 237.0], [52.1, 237.0], [52.2, 237.0], [52.3, 237.0], [52.4, 237.0], [52.5, 237.0], [52.6, 237.0], [52.7, 237.0], [52.8, 237.0], [52.9, 237.0], [53.0, 237.0], [53.1, 237.0], [53.2, 237.0], [53.3, 237.0], [53.4, 237.0], [53.5, 237.0], [53.6, 237.0], [53.7, 237.0], [53.8, 237.0], [53.9, 237.0], [54.0, 238.0], [54.1, 238.0], [54.2, 238.0], [54.3, 238.0], [54.4, 238.0], [54.5, 238.0], [54.6, 238.0], [54.7, 238.0], [54.8, 238.0], [54.9, 238.0], [55.0, 238.0], [55.1, 238.0], [55.2, 238.0], [55.3, 238.0], [55.4, 238.0], [55.5, 238.0], [55.6, 238.0], [55.7, 238.0], [55.8, 238.0], [55.9, 238.0], [56.0, 238.0], [56.1, 238.0], [56.2, 238.0], [56.3, 238.0], [56.4, 238.0], [56.5, 238.0], [56.6, 238.0], [56.7, 238.0], [56.8, 238.0], [56.9, 238.0], [57.0, 238.0], [57.1, 238.0], [57.2, 238.0], [57.3, 238.0], [57.4, 238.0], [57.5, 238.0], [57.6, 238.0], [57.7, 238.0], [57.8, 238.0], [57.9, 238.0], [58.0, 238.0], [58.1, 238.0], [58.2, 238.0], [58.3, 238.0], [58.4, 238.0], [58.5, 238.0], [58.6, 238.0], [58.7, 238.0], [58.8, 238.0], [58.9, 238.0], [59.0, 238.0], [59.1, 238.0], [59.2, 238.0], [59.3, 238.0], [59.4, 238.0], [59.5, 238.0], [59.6, 238.0], [59.7, 238.0], [59.8, 238.0], [59.9, 238.0], [60.0, 238.0], [60.1, 238.0], [60.2, 238.0], [60.3, 238.0], [60.4, 238.0], [60.5, 238.0], [60.6, 238.0], [60.7, 238.0], [60.8, 238.0], [60.9, 238.0], [61.0, 238.0], [61.1, 238.0], [61.2, 238.0], [61.3, 238.0], [61.4, 238.0], [61.5, 238.0], [61.6, 238.0], [61.7, 238.0], [61.8, 238.0], [61.9, 238.0], [62.0, 238.0], [62.1, 238.0], [62.2, 238.0], [62.3, 238.0], [62.4, 238.0], [62.5, 238.0], [62.6, 238.0], [62.7, 238.0], [62.8, 238.0], [62.9, 238.0], [63.0, 238.0], [63.1, 238.0], [63.2, 238.0], [63.3, 238.0], [63.4, 238.0], [63.5, 238.0], [63.6, 238.0], [63.7, 238.0], [63.8, 238.0], [63.9, 238.0], [64.0, 238.0], [64.1, 238.0], [64.2, 239.0], [64.3, 239.0], [64.4, 239.0], [64.5, 239.0], [64.6, 239.0], [64.7, 239.0], [64.8, 239.0], [64.9, 239.0], [65.0, 239.0], [65.1, 239.0], [65.2, 239.0], [65.3, 239.0], [65.4, 239.0], [65.5, 239.0], [65.6, 239.0], [65.7, 239.0], [65.8, 239.0], [65.9, 239.0], [66.0, 239.0], [66.1, 239.0], [66.2, 239.0], [66.3, 239.0], [66.4, 239.0], [66.5, 239.0], [66.6, 239.0], [66.7, 239.0], [66.8, 239.0], [66.9, 239.0], [67.0, 239.0], [67.1, 239.0], [67.2, 239.0], [67.3, 239.0], [67.4, 239.0], [67.5, 239.0], [67.6, 239.0], [67.7, 239.0], [67.8, 239.0], [67.9, 239.0], [68.0, 239.0], [68.1, 239.0], [68.2, 239.0], [68.3, 239.0], [68.4, 239.0], [68.5, 239.0], [68.6, 239.0], [68.7, 239.0], [68.8, 239.0], [68.9, 239.0], [69.0, 239.0], [69.1, 239.0], [69.2, 239.0], [69.3, 239.0], [69.4, 239.0], [69.5, 239.0], [69.6, 239.0], [69.7, 239.0], [69.8, 239.0], [69.9, 239.0], [70.0, 239.0], [70.1, 239.0], [70.2, 239.0], [70.3, 239.0], [70.4, 239.0], [70.5, 239.0], [70.6, 239.0], [70.7, 239.0], [70.8, 239.0], [70.9, 239.0], [71.0, 239.0], [71.1, 239.0], [71.2, 239.0], [71.3, 239.0], [71.4, 239.0], [71.5, 239.0], [71.6, 239.0], [71.7, 239.0], [71.8, 239.0], [71.9, 239.0], [72.0, 239.0], [72.1, 239.0], [72.2, 239.0], [72.3, 239.0], [72.4, 239.0], [72.5, 239.0], [72.6, 239.0], [72.7, 239.0], [72.8, 239.0], [72.9, 239.0], [73.0, 239.0], [73.1, 240.0], [73.2, 240.0], [73.3, 240.0], [73.4, 240.0], [73.5, 240.0], [73.6, 240.0], [73.7, 240.0], [73.8, 240.0], [73.9, 240.0], [74.0, 240.0], [74.1, 240.0], [74.2, 240.0], [74.3, 240.0], [74.4, 240.0], [74.5, 240.0], [74.6, 240.0], [74.7, 240.0], [74.8, 240.0], [74.9, 240.0], [75.0, 240.0], [75.1, 240.0], [75.2, 240.0], [75.3, 240.0], [75.4, 240.0], [75.5, 240.0], [75.6, 240.0], [75.7, 240.0], [75.8, 240.0], [75.9, 240.0], [76.0, 240.0], [76.1, 240.0], [76.2, 240.0], [76.3, 240.0], [76.4, 240.0], [76.5, 240.0], [76.6, 240.0], [76.7, 240.0], [76.8, 240.0], [76.9, 240.0], [77.0, 240.0], [77.1, 240.0], [77.2, 240.0], [77.3, 240.0], [77.4, 240.0], [77.5, 240.0], [77.6, 240.0], [77.7, 240.0], [77.8, 240.0], [77.9, 240.0], [78.0, 240.0], [78.1, 240.0], [78.2, 240.0], [78.3, 240.0], [78.4, 240.0], [78.5, 240.0], [78.6, 240.0], [78.7, 240.0], [78.8, 240.0], [78.9, 240.0], [79.0, 240.0], [79.1, 240.0], [79.2, 240.0], [79.3, 240.0], [79.4, 240.0], [79.5, 240.0], [79.6, 240.0], [79.7, 240.0], [79.8, 240.0], [79.9, 240.0], [80.0, 240.0], [80.1, 240.0], [80.2, 240.0], [80.3, 240.0], [80.4, 240.0], [80.5, 240.0], [80.6, 240.0], [80.7, 240.0], [80.8, 240.0], [80.9, 240.0], [81.0, 240.0], [81.1, 240.0], [81.2, 240.0], [81.3, 240.0], [81.4, 240.0], [81.5, 240.0], [81.6, 240.0], [81.7, 240.0], [81.8, 240.0], [81.9, 240.0], [82.0, 240.0], [82.1, 240.0], [82.2, 241.0], [82.3, 241.0], [82.4, 241.0], [82.5, 241.0], [82.6, 241.0], [82.7, 241.0], [82.8, 241.0], [82.9, 241.0], [83.0, 241.0], [83.1, 241.0], [83.2, 241.0], [83.3, 241.0], [83.4, 241.0], [83.5, 241.0], [83.6, 241.0], [83.7, 241.0], [83.8, 241.0], [83.9, 241.0], [84.0, 241.0], [84.1, 241.0], [84.2, 241.0], [84.3, 241.0], [84.4, 241.0], [84.5, 241.0], [84.6, 241.0], [84.7, 241.0], [84.8, 241.0], [84.9, 241.0], [85.0, 241.0], [85.1, 241.0], [85.2, 241.0], [85.3, 241.0], [85.4, 241.0], [85.5, 241.0], [85.6, 241.0], [85.7, 242.0], [85.8, 242.0], [85.9, 242.0], [86.0, 242.0], [86.1, 242.0], [86.2, 242.0], [86.3, 242.0], [86.4, 242.0], [86.5, 242.0], [86.6, 242.0], [86.7, 242.0], [86.8, 242.0], [86.9, 242.0], [87.0, 242.0], [87.1, 242.0], [87.2, 242.0], [87.3, 242.0], [87.4, 242.0], [87.5, 242.0], [87.6, 242.0], [87.7, 242.0], [87.8, 242.0], [87.9, 242.0], [88.0, 242.0], [88.1, 242.0], [88.2, 242.0], [88.3, 242.0], [88.4, 242.0], [88.5, 243.0], [88.6, 243.0], [88.7, 243.0], [88.8, 243.0], [88.9, 243.0], [89.0, 243.0], [89.1, 243.0], [89.2, 243.0], [89.3, 243.0], [89.4, 243.0], [89.5, 243.0], [89.6, 243.0], [89.7, 243.0], [89.8, 243.0], [89.9, 243.0], [90.0, 243.0], [90.1, 243.0], [90.2, 243.0], [90.3, 243.0], [90.4, 243.0], [90.5, 243.0], [90.6, 244.0], [90.7, 244.0], [90.8, 244.0], [90.9, 244.0], [91.0, 244.0], [91.1, 244.0], [91.2, 244.0], [91.3, 244.0], [91.4, 244.0], [91.5, 244.0], [91.6, 244.0], [91.7, 244.0], [91.8, 244.0], [91.9, 244.0], [92.0, 244.0], [92.1, 244.0], [92.2, 244.0], [92.3, 245.0], [92.4, 245.0], [92.5, 245.0], [92.6, 245.0], [92.7, 245.0], [92.8, 245.0], [92.9, 245.0], [93.0, 245.0], [93.1, 245.0], [93.2, 245.0], [93.3, 245.0], [93.4, 245.0], [93.5, 245.0], [93.6, 245.0], [93.7, 245.0], [93.8, 246.0], [93.9, 246.0], [94.0, 246.0], [94.1, 246.0], [94.2, 247.0], [94.3, 247.0], [94.4, 248.0], [94.5, 248.0], [94.6, 248.0], [94.7, 248.0], [94.8, 248.0], [94.9, 249.0], [95.0, 249.0], [95.1, 249.0], [95.2, 249.0], [95.3, 249.0], [95.4, 249.0], [95.5, 249.0], [95.6, 249.0], [95.7, 250.0], [95.8, 250.0], [95.9, 250.0], [96.0, 250.0], [96.1, 251.0], [96.2, 251.0], [96.3, 251.0], [96.4, 251.0], [96.5, 251.0], [96.6, 251.0], [96.7, 252.0], [96.8, 252.0], [96.9, 253.0], [97.0, 253.0], [97.1, 254.0], [97.2, 255.0], [97.3, 255.0], [97.4, 255.0], [97.5, 256.0], [97.6, 256.0], [97.7, 258.0], [97.8, 258.0], [97.9, 259.0], [98.0, 260.0], [98.1, 260.0], [98.2, 263.0], [98.3, 263.0], [98.4, 264.0], [98.5, 264.0], [98.6, 264.0], [98.7, 265.0], [98.8, 266.0], [98.9, 267.0], [99.0, 268.0], [99.1, 269.0], [99.2, 270.0], [99.3, 271.0], [99.4, 271.0], [99.5, 281.0], [99.6, 284.0], [99.7, 286.0], [99.8, 290.0], [99.9, 475.0]], "isOverall": false, "label": "HTTP Request - enroll", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 2.0, "minX": 100.0, "maxY": 1420.0, "series": [{"data": [[400.0, 2.0], [100.0, 78.0], [200.0, 1420.0]], "isOverall": false, "label": "HTTP Request - enroll", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1500.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1500.0, "series": [{"data": [[0.0, 1500.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 2.9892183288409706, "minX": 1.7411841E12, "maxY": 3.0, "series": [{"data": [[1.74118416E12, 3.0], [1.74118422E12, 2.9892183288409706], [1.7411841E12, 3.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74118422E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 228.0, "minX": 1.0, "maxY": 235.00534402137603, "series": [{"data": [[2.0, 232.0], [1.0, 228.0], [3.0, 235.00534402137603]], "isOverall": false, "label": "HTTP Request - enroll", "isController": false}, {"data": [[2.9973333333333336, 234.9966666666666]], "isOverall": false, "label": "HTTP Request - enroll-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 3.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 5551.0, "minX": 1.7411841E12, "maxY": 39521.48333333333, "series": [{"data": [[1.74118416E12, 39521.48333333333], [1.74118422E12, 19216.766666666666], [1.7411841E12, 18958.15]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.74118416E12, 11572.033333333333], [1.74118422E12, 5626.833333333333], [1.7411841E12, 5551.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74118422E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 233.99460916442052, "minX": 1.7411841E12, "maxY": 236.10655737704914, "series": [{"data": [[1.74118416E12, 234.95150720838788], [1.74118422E12, 233.99460916442052], [1.7411841E12, 236.10655737704914]], "isOverall": false, "label": "HTTP Request - enroll", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74118422E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 233.97304582210245, "minX": 1.7411841E12, "maxY": 236.07377049180326, "series": [{"data": [[1.74118416E12, 234.92922673656625], [1.74118422E12, 233.97304582210245], [1.7411841E12, 236.07377049180326]], "isOverall": false, "label": "HTTP Request - enroll", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74118422E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.7411841E12, "maxY": 1.2540983606557363, "series": [{"data": [[1.74118416E12, 0.019659239842726082], [1.74118422E12, 0.0], [1.7411841E12, 1.2540983606557363]], "isOverall": false, "label": "HTTP Request - enroll", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74118422E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 172.0, "minX": 1.7411841E12, "maxY": 475.0, "series": [{"data": [[1.74118416E12, 290.0], [1.74118422E12, 284.0], [1.7411841E12, 475.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.74118416E12, 244.0], [1.74118422E12, 243.0], [1.7411841E12, 242.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.74118416E12, 270.36], [1.74118422E12, 269.0], [1.7411841E12, 268.6499999999999]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.74118416E12, 249.0], [1.74118422E12, 246.79999999999995], [1.7411841E12, 249.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.74118416E12, 172.0], [1.74118422E12, 178.0], [1.7411841E12, 178.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.74118416E12, 237.0], [1.74118422E12, 237.0], [1.7411841E12, 236.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74118422E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 234.0, "minX": 9.0, "maxY": 240.0, "series": [{"data": [[9.0, 240.0], [11.0, 234.0], [12.0, 237.0], [13.0, 237.0], [14.0, 236.0], [15.0, 237.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 15.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 234.0, "minX": 9.0, "maxY": 240.0, "series": [{"data": [[9.0, 240.0], [11.0, 234.0], [12.0, 237.0], [13.0, 237.0], [14.0, 236.0], [15.0, 237.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 15.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 6.133333333333334, "minX": 1.7411841E12, "maxY": 12.716666666666667, "series": [{"data": [[1.74118416E12, 12.716666666666667], [1.74118422E12, 6.133333333333334], [1.7411841E12, 6.15]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74118422E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 6.1, "minX": 1.7411841E12, "maxY": 12.716666666666667, "series": [{"data": [[1.74118416E12, 12.716666666666667], [1.74118422E12, 6.183333333333334], [1.7411841E12, 6.1]], "isOverall": false, "label": "201", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74118422E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 6.1, "minX": 1.7411841E12, "maxY": 12.716666666666667, "series": [{"data": [[1.74118416E12, 12.716666666666667], [1.74118422E12, 6.183333333333334], [1.7411841E12, 6.1]], "isOverall": false, "label": "HTTP Request - enroll-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74118422E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 6.1, "minX": 1.7411841E12, "maxY": 12.716666666666667, "series": [{"data": [[1.74118416E12, 12.716666666666667], [1.74118422E12, 6.183333333333334], [1.7411841E12, 6.1]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74118422E12, "title": "Total Transactions Per Second"}},
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

