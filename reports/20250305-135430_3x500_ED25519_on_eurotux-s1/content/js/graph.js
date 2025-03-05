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
        data: {"result": {"minY": 175.0, "minX": 0.0, "maxY": 484.0, "series": [{"data": [[0.0, 175.0], [0.1, 177.0], [0.2, 181.0], [0.3, 181.0], [0.4, 182.0], [0.5, 182.0], [0.6, 182.0], [0.7, 183.0], [0.8, 183.0], [0.9, 183.0], [1.0, 184.0], [1.1, 184.0], [1.2, 184.0], [1.3, 184.0], [1.4, 184.0], [1.5, 184.0], [1.6, 185.0], [1.7, 185.0], [1.8, 185.0], [1.9, 185.0], [2.0, 185.0], [2.1, 185.0], [2.2, 186.0], [2.3, 186.0], [2.4, 186.0], [2.5, 186.0], [2.6, 186.0], [2.7, 187.0], [2.8, 187.0], [2.9, 187.0], [3.0, 187.0], [3.1, 187.0], [3.2, 188.0], [3.3, 189.0], [3.4, 190.0], [3.5, 190.0], [3.6, 191.0], [3.7, 193.0], [3.8, 193.0], [3.9, 196.0], [4.0, 197.0], [4.1, 197.0], [4.2, 199.0], [4.3, 202.0], [4.4, 220.0], [4.5, 222.0], [4.6, 225.0], [4.7, 225.0], [4.8, 225.0], [4.9, 225.0], [5.0, 225.0], [5.1, 225.0], [5.2, 226.0], [5.3, 226.0], [5.4, 226.0], [5.5, 226.0], [5.6, 227.0], [5.7, 227.0], [5.8, 227.0], [5.9, 227.0], [6.0, 227.0], [6.1, 227.0], [6.2, 228.0], [6.3, 228.0], [6.4, 229.0], [6.5, 229.0], [6.6, 229.0], [6.7, 229.0], [6.8, 229.0], [6.9, 229.0], [7.0, 229.0], [7.1, 229.0], [7.2, 229.0], [7.3, 230.0], [7.4, 230.0], [7.5, 230.0], [7.6, 230.0], [7.7, 230.0], [7.8, 230.0], [7.9, 230.0], [8.0, 230.0], [8.1, 230.0], [8.2, 230.0], [8.3, 230.0], [8.4, 230.0], [8.5, 230.0], [8.6, 231.0], [8.7, 231.0], [8.8, 231.0], [8.9, 231.0], [9.0, 231.0], [9.1, 231.0], [9.2, 231.0], [9.3, 231.0], [9.4, 231.0], [9.5, 231.0], [9.6, 231.0], [9.7, 231.0], [9.8, 232.0], [9.9, 232.0], [10.0, 232.0], [10.1, 232.0], [10.2, 232.0], [10.3, 232.0], [10.4, 232.0], [10.5, 232.0], [10.6, 232.0], [10.7, 232.0], [10.8, 232.0], [10.9, 232.0], [11.0, 232.0], [11.1, 232.0], [11.2, 232.0], [11.3, 232.0], [11.4, 232.0], [11.5, 232.0], [11.6, 232.0], [11.7, 232.0], [11.8, 232.0], [11.9, 232.0], [12.0, 232.0], [12.1, 232.0], [12.2, 232.0], [12.3, 232.0], [12.4, 233.0], [12.5, 233.0], [12.6, 233.0], [12.7, 233.0], [12.8, 233.0], [12.9, 233.0], [13.0, 233.0], [13.1, 233.0], [13.2, 233.0], [13.3, 233.0], [13.4, 233.0], [13.5, 233.0], [13.6, 233.0], [13.7, 233.0], [13.8, 233.0], [13.9, 233.0], [14.0, 233.0], [14.1, 233.0], [14.2, 233.0], [14.3, 233.0], [14.4, 233.0], [14.5, 233.0], [14.6, 233.0], [14.7, 233.0], [14.8, 233.0], [14.9, 233.0], [15.0, 233.0], [15.1, 233.0], [15.2, 233.0], [15.3, 234.0], [15.4, 234.0], [15.5, 234.0], [15.6, 234.0], [15.7, 234.0], [15.8, 234.0], [15.9, 234.0], [16.0, 234.0], [16.1, 234.0], [16.2, 234.0], [16.3, 234.0], [16.4, 234.0], [16.5, 234.0], [16.6, 234.0], [16.7, 234.0], [16.8, 234.0], [16.9, 234.0], [17.0, 234.0], [17.1, 234.0], [17.2, 234.0], [17.3, 234.0], [17.4, 234.0], [17.5, 234.0], [17.6, 234.0], [17.7, 234.0], [17.8, 234.0], [17.9, 234.0], [18.0, 234.0], [18.1, 234.0], [18.2, 235.0], [18.3, 235.0], [18.4, 235.0], [18.5, 235.0], [18.6, 235.0], [18.7, 235.0], [18.8, 235.0], [18.9, 235.0], [19.0, 235.0], [19.1, 235.0], [19.2, 235.0], [19.3, 235.0], [19.4, 235.0], [19.5, 235.0], [19.6, 235.0], [19.7, 235.0], [19.8, 235.0], [19.9, 235.0], [20.0, 235.0], [20.1, 235.0], [20.2, 235.0], [20.3, 235.0], [20.4, 235.0], [20.5, 235.0], [20.6, 235.0], [20.7, 235.0], [20.8, 235.0], [20.9, 235.0], [21.0, 235.0], [21.1, 235.0], [21.2, 235.0], [21.3, 235.0], [21.4, 235.0], [21.5, 235.0], [21.6, 235.0], [21.7, 235.0], [21.8, 236.0], [21.9, 236.0], [22.0, 236.0], [22.1, 236.0], [22.2, 236.0], [22.3, 236.0], [22.4, 236.0], [22.5, 236.0], [22.6, 236.0], [22.7, 236.0], [22.8, 236.0], [22.9, 236.0], [23.0, 236.0], [23.1, 236.0], [23.2, 236.0], [23.3, 236.0], [23.4, 236.0], [23.5, 236.0], [23.6, 236.0], [23.7, 236.0], [23.8, 236.0], [23.9, 236.0], [24.0, 236.0], [24.1, 236.0], [24.2, 236.0], [24.3, 236.0], [24.4, 236.0], [24.5, 236.0], [24.6, 236.0], [24.7, 236.0], [24.8, 236.0], [24.9, 236.0], [25.0, 236.0], [25.1, 236.0], [25.2, 236.0], [25.3, 236.0], [25.4, 236.0], [25.5, 236.0], [25.6, 236.0], [25.7, 237.0], [25.8, 237.0], [25.9, 237.0], [26.0, 237.0], [26.1, 237.0], [26.2, 237.0], [26.3, 237.0], [26.4, 237.0], [26.5, 237.0], [26.6, 237.0], [26.7, 237.0], [26.8, 237.0], [26.9, 237.0], [27.0, 237.0], [27.1, 237.0], [27.2, 237.0], [27.3, 237.0], [27.4, 237.0], [27.5, 237.0], [27.6, 237.0], [27.7, 237.0], [27.8, 237.0], [27.9, 237.0], [28.0, 237.0], [28.1, 237.0], [28.2, 237.0], [28.3, 237.0], [28.4, 237.0], [28.5, 237.0], [28.6, 237.0], [28.7, 237.0], [28.8, 237.0], [28.9, 237.0], [29.0, 237.0], [29.1, 237.0], [29.2, 237.0], [29.3, 237.0], [29.4, 237.0], [29.5, 237.0], [29.6, 237.0], [29.7, 237.0], [29.8, 237.0], [29.9, 237.0], [30.0, 237.0], [30.1, 237.0], [30.2, 238.0], [30.3, 238.0], [30.4, 238.0], [30.5, 238.0], [30.6, 238.0], [30.7, 238.0], [30.8, 238.0], [30.9, 238.0], [31.0, 238.0], [31.1, 238.0], [31.2, 238.0], [31.3, 238.0], [31.4, 238.0], [31.5, 238.0], [31.6, 238.0], [31.7, 238.0], [31.8, 238.0], [31.9, 238.0], [32.0, 238.0], [32.1, 238.0], [32.2, 238.0], [32.3, 238.0], [32.4, 238.0], [32.5, 238.0], [32.6, 238.0], [32.7, 238.0], [32.8, 238.0], [32.9, 238.0], [33.0, 238.0], [33.1, 238.0], [33.2, 238.0], [33.3, 238.0], [33.4, 238.0], [33.5, 238.0], [33.6, 238.0], [33.7, 238.0], [33.8, 238.0], [33.9, 238.0], [34.0, 238.0], [34.1, 238.0], [34.2, 238.0], [34.3, 238.0], [34.4, 238.0], [34.5, 238.0], [34.6, 238.0], [34.7, 238.0], [34.8, 238.0], [34.9, 238.0], [35.0, 238.0], [35.1, 238.0], [35.2, 238.0], [35.3, 238.0], [35.4, 238.0], [35.5, 238.0], [35.6, 238.0], [35.7, 238.0], [35.8, 238.0], [35.9, 238.0], [36.0, 238.0], [36.1, 238.0], [36.2, 238.0], [36.3, 238.0], [36.4, 239.0], [36.5, 239.0], [36.6, 239.0], [36.7, 239.0], [36.8, 239.0], [36.9, 239.0], [37.0, 239.0], [37.1, 239.0], [37.2, 239.0], [37.3, 239.0], [37.4, 239.0], [37.5, 239.0], [37.6, 239.0], [37.7, 239.0], [37.8, 239.0], [37.9, 239.0], [38.0, 239.0], [38.1, 239.0], [38.2, 239.0], [38.3, 239.0], [38.4, 239.0], [38.5, 239.0], [38.6, 239.0], [38.7, 239.0], [38.8, 239.0], [38.9, 239.0], [39.0, 239.0], [39.1, 239.0], [39.2, 239.0], [39.3, 239.0], [39.4, 239.0], [39.5, 239.0], [39.6, 239.0], [39.7, 239.0], [39.8, 239.0], [39.9, 239.0], [40.0, 239.0], [40.1, 239.0], [40.2, 239.0], [40.3, 239.0], [40.4, 239.0], [40.5, 239.0], [40.6, 239.0], [40.7, 239.0], [40.8, 239.0], [40.9, 239.0], [41.0, 239.0], [41.1, 239.0], [41.2, 239.0], [41.3, 239.0], [41.4, 239.0], [41.5, 239.0], [41.6, 239.0], [41.7, 239.0], [41.8, 239.0], [41.9, 239.0], [42.0, 239.0], [42.1, 239.0], [42.2, 239.0], [42.3, 239.0], [42.4, 239.0], [42.5, 239.0], [42.6, 239.0], [42.7, 239.0], [42.8, 239.0], [42.9, 239.0], [43.0, 239.0], [43.1, 240.0], [43.2, 240.0], [43.3, 240.0], [43.4, 240.0], [43.5, 240.0], [43.6, 240.0], [43.7, 240.0], [43.8, 240.0], [43.9, 240.0], [44.0, 240.0], [44.1, 240.0], [44.2, 240.0], [44.3, 240.0], [44.4, 240.0], [44.5, 240.0], [44.6, 240.0], [44.7, 240.0], [44.8, 240.0], [44.9, 240.0], [45.0, 240.0], [45.1, 240.0], [45.2, 240.0], [45.3, 240.0], [45.4, 240.0], [45.5, 240.0], [45.6, 240.0], [45.7, 240.0], [45.8, 240.0], [45.9, 240.0], [46.0, 240.0], [46.1, 240.0], [46.2, 240.0], [46.3, 240.0], [46.4, 240.0], [46.5, 240.0], [46.6, 240.0], [46.7, 240.0], [46.8, 240.0], [46.9, 240.0], [47.0, 240.0], [47.1, 240.0], [47.2, 240.0], [47.3, 240.0], [47.4, 240.0], [47.5, 240.0], [47.6, 240.0], [47.7, 240.0], [47.8, 240.0], [47.9, 240.0], [48.0, 240.0], [48.1, 240.0], [48.2, 240.0], [48.3, 240.0], [48.4, 240.0], [48.5, 240.0], [48.6, 240.0], [48.7, 240.0], [48.8, 240.0], [48.9, 240.0], [49.0, 240.0], [49.1, 240.0], [49.2, 240.0], [49.3, 240.0], [49.4, 240.0], [49.5, 240.0], [49.6, 240.0], [49.7, 240.0], [49.8, 240.0], [49.9, 240.0], [50.0, 240.0], [50.1, 240.0], [50.2, 240.0], [50.3, 240.0], [50.4, 240.0], [50.5, 240.0], [50.6, 240.0], [50.7, 240.0], [50.8, 240.0], [50.9, 240.0], [51.0, 240.0], [51.1, 240.0], [51.2, 240.0], [51.3, 240.0], [51.4, 240.0], [51.5, 240.0], [51.6, 240.0], [51.7, 240.0], [51.8, 240.0], [51.9, 240.0], [52.0, 241.0], [52.1, 241.0], [52.2, 241.0], [52.3, 241.0], [52.4, 241.0], [52.5, 241.0], [52.6, 241.0], [52.7, 241.0], [52.8, 241.0], [52.9, 241.0], [53.0, 241.0], [53.1, 241.0], [53.2, 241.0], [53.3, 241.0], [53.4, 241.0], [53.5, 241.0], [53.6, 241.0], [53.7, 241.0], [53.8, 241.0], [53.9, 241.0], [54.0, 241.0], [54.1, 241.0], [54.2, 241.0], [54.3, 241.0], [54.4, 241.0], [54.5, 241.0], [54.6, 241.0], [54.7, 241.0], [54.8, 241.0], [54.9, 241.0], [55.0, 241.0], [55.1, 241.0], [55.2, 241.0], [55.3, 241.0], [55.4, 241.0], [55.5, 241.0], [55.6, 241.0], [55.7, 241.0], [55.8, 241.0], [55.9, 241.0], [56.0, 241.0], [56.1, 241.0], [56.2, 241.0], [56.3, 241.0], [56.4, 241.0], [56.5, 241.0], [56.6, 241.0], [56.7, 241.0], [56.8, 241.0], [56.9, 241.0], [57.0, 241.0], [57.1, 241.0], [57.2, 241.0], [57.3, 241.0], [57.4, 241.0], [57.5, 241.0], [57.6, 241.0], [57.7, 241.0], [57.8, 241.0], [57.9, 241.0], [58.0, 241.0], [58.1, 241.0], [58.2, 241.0], [58.3, 241.0], [58.4, 241.0], [58.5, 241.0], [58.6, 241.0], [58.7, 241.0], [58.8, 241.0], [58.9, 241.0], [59.0, 241.0], [59.1, 241.0], [59.2, 241.0], [59.3, 241.0], [59.4, 241.0], [59.5, 241.0], [59.6, 241.0], [59.7, 241.0], [59.8, 241.0], [59.9, 241.0], [60.0, 241.0], [60.1, 241.0], [60.2, 241.0], [60.3, 241.0], [60.4, 241.0], [60.5, 241.0], [60.6, 241.0], [60.7, 241.0], [60.8, 241.0], [60.9, 241.0], [61.0, 241.0], [61.1, 241.0], [61.2, 241.0], [61.3, 241.0], [61.4, 241.0], [61.5, 241.0], [61.6, 241.0], [61.7, 241.0], [61.8, 241.0], [61.9, 241.0], [62.0, 241.0], [62.1, 241.0], [62.2, 241.0], [62.3, 241.0], [62.4, 241.0], [62.5, 241.0], [62.6, 241.0], [62.7, 241.0], [62.8, 242.0], [62.9, 242.0], [63.0, 242.0], [63.1, 242.0], [63.2, 242.0], [63.3, 242.0], [63.4, 242.0], [63.5, 242.0], [63.6, 242.0], [63.7, 242.0], [63.8, 242.0], [63.9, 242.0], [64.0, 242.0], [64.1, 242.0], [64.2, 242.0], [64.3, 242.0], [64.4, 242.0], [64.5, 242.0], [64.6, 242.0], [64.7, 242.0], [64.8, 242.0], [64.9, 242.0], [65.0, 242.0], [65.1, 242.0], [65.2, 242.0], [65.3, 242.0], [65.4, 242.0], [65.5, 242.0], [65.6, 242.0], [65.7, 242.0], [65.8, 242.0], [65.9, 242.0], [66.0, 242.0], [66.1, 242.0], [66.2, 242.0], [66.3, 242.0], [66.4, 242.0], [66.5, 242.0], [66.6, 242.0], [66.7, 242.0], [66.8, 242.0], [66.9, 242.0], [67.0, 242.0], [67.1, 242.0], [67.2, 242.0], [67.3, 242.0], [67.4, 242.0], [67.5, 242.0], [67.6, 242.0], [67.7, 242.0], [67.8, 242.0], [67.9, 242.0], [68.0, 242.0], [68.1, 242.0], [68.2, 242.0], [68.3, 242.0], [68.4, 242.0], [68.5, 242.0], [68.6, 242.0], [68.7, 242.0], [68.8, 242.0], [68.9, 242.0], [69.0, 242.0], [69.1, 242.0], [69.2, 242.0], [69.3, 242.0], [69.4, 242.0], [69.5, 242.0], [69.6, 242.0], [69.7, 242.0], [69.8, 242.0], [69.9, 242.0], [70.0, 242.0], [70.1, 242.0], [70.2, 242.0], [70.3, 242.0], [70.4, 242.0], [70.5, 242.0], [70.6, 242.0], [70.7, 242.0], [70.8, 242.0], [70.9, 242.0], [71.0, 242.0], [71.1, 242.0], [71.2, 242.0], [71.3, 242.0], [71.4, 242.0], [71.5, 242.0], [71.6, 242.0], [71.7, 242.0], [71.8, 242.0], [71.9, 242.0], [72.0, 242.0], [72.1, 242.0], [72.2, 243.0], [72.3, 243.0], [72.4, 243.0], [72.5, 243.0], [72.6, 243.0], [72.7, 243.0], [72.8, 243.0], [72.9, 243.0], [73.0, 243.0], [73.1, 243.0], [73.2, 243.0], [73.3, 243.0], [73.4, 243.0], [73.5, 243.0], [73.6, 243.0], [73.7, 243.0], [73.8, 243.0], [73.9, 243.0], [74.0, 243.0], [74.1, 243.0], [74.2, 243.0], [74.3, 243.0], [74.4, 243.0], [74.5, 243.0], [74.6, 243.0], [74.7, 243.0], [74.8, 243.0], [74.9, 243.0], [75.0, 243.0], [75.1, 243.0], [75.2, 243.0], [75.3, 243.0], [75.4, 243.0], [75.5, 243.0], [75.6, 243.0], [75.7, 243.0], [75.8, 243.0], [75.9, 243.0], [76.0, 243.0], [76.1, 243.0], [76.2, 243.0], [76.3, 243.0], [76.4, 243.0], [76.5, 243.0], [76.6, 243.0], [76.7, 243.0], [76.8, 243.0], [76.9, 243.0], [77.0, 243.0], [77.1, 243.0], [77.2, 243.0], [77.3, 243.0], [77.4, 243.0], [77.5, 243.0], [77.6, 243.0], [77.7, 243.0], [77.8, 243.0], [77.9, 243.0], [78.0, 243.0], [78.1, 243.0], [78.2, 243.0], [78.3, 243.0], [78.4, 243.0], [78.5, 243.0], [78.6, 243.0], [78.7, 243.0], [78.8, 243.0], [78.9, 243.0], [79.0, 243.0], [79.1, 244.0], [79.2, 244.0], [79.3, 244.0], [79.4, 244.0], [79.5, 244.0], [79.6, 244.0], [79.7, 244.0], [79.8, 244.0], [79.9, 244.0], [80.0, 244.0], [80.1, 244.0], [80.2, 244.0], [80.3, 244.0], [80.4, 244.0], [80.5, 244.0], [80.6, 244.0], [80.7, 244.0], [80.8, 244.0], [80.9, 244.0], [81.0, 244.0], [81.1, 244.0], [81.2, 244.0], [81.3, 244.0], [81.4, 244.0], [81.5, 244.0], [81.6, 244.0], [81.7, 244.0], [81.8, 244.0], [81.9, 244.0], [82.0, 244.0], [82.1, 244.0], [82.2, 244.0], [82.3, 244.0], [82.4, 244.0], [82.5, 244.0], [82.6, 244.0], [82.7, 244.0], [82.8, 244.0], [82.9, 244.0], [83.0, 244.0], [83.1, 244.0], [83.2, 244.0], [83.3, 244.0], [83.4, 244.0], [83.5, 244.0], [83.6, 244.0], [83.7, 244.0], [83.8, 244.0], [83.9, 244.0], [84.0, 244.0], [84.1, 244.0], [84.2, 244.0], [84.3, 244.0], [84.4, 244.0], [84.5, 244.0], [84.6, 244.0], [84.7, 244.0], [84.8, 244.0], [84.9, 244.0], [85.0, 245.0], [85.1, 245.0], [85.2, 245.0], [85.3, 245.0], [85.4, 245.0], [85.5, 245.0], [85.6, 245.0], [85.7, 245.0], [85.8, 245.0], [85.9, 245.0], [86.0, 245.0], [86.1, 245.0], [86.2, 245.0], [86.3, 245.0], [86.4, 245.0], [86.5, 245.0], [86.6, 245.0], [86.7, 245.0], [86.8, 245.0], [86.9, 245.0], [87.0, 245.0], [87.1, 245.0], [87.2, 245.0], [87.3, 245.0], [87.4, 245.0], [87.5, 245.0], [87.6, 245.0], [87.7, 245.0], [87.8, 245.0], [87.9, 245.0], [88.0, 245.0], [88.1, 245.0], [88.2, 245.0], [88.3, 245.0], [88.4, 245.0], [88.5, 245.0], [88.6, 245.0], [88.7, 245.0], [88.8, 245.0], [88.9, 245.0], [89.0, 245.0], [89.1, 245.0], [89.2, 245.0], [89.3, 245.0], [89.4, 245.0], [89.5, 245.0], [89.6, 245.0], [89.7, 245.0], [89.8, 245.0], [89.9, 245.0], [90.0, 246.0], [90.1, 246.0], [90.2, 246.0], [90.3, 246.0], [90.4, 246.0], [90.5, 246.0], [90.6, 246.0], [90.7, 246.0], [90.8, 246.0], [90.9, 246.0], [91.0, 246.0], [91.1, 246.0], [91.2, 246.0], [91.3, 246.0], [91.4, 246.0], [91.5, 246.0], [91.6, 246.0], [91.7, 246.0], [91.8, 246.0], [91.9, 246.0], [92.0, 246.0], [92.1, 246.0], [92.2, 246.0], [92.3, 247.0], [92.4, 247.0], [92.5, 247.0], [92.6, 247.0], [92.7, 247.0], [92.8, 247.0], [92.9, 247.0], [93.0, 247.0], [93.1, 247.0], [93.2, 247.0], [93.3, 248.0], [93.4, 248.0], [93.5, 248.0], [93.6, 248.0], [93.7, 248.0], [93.8, 248.0], [93.9, 249.0], [94.0, 249.0], [94.1, 249.0], [94.2, 249.0], [94.3, 249.0], [94.4, 249.0], [94.5, 249.0], [94.6, 250.0], [94.7, 250.0], [94.8, 251.0], [94.9, 251.0], [95.0, 252.0], [95.1, 252.0], [95.2, 252.0], [95.3, 252.0], [95.4, 252.0], [95.5, 253.0], [95.6, 253.0], [95.7, 253.0], [95.8, 253.0], [95.9, 254.0], [96.0, 254.0], [96.1, 254.0], [96.2, 254.0], [96.3, 254.0], [96.4, 255.0], [96.5, 255.0], [96.6, 255.0], [96.7, 255.0], [96.8, 255.0], [96.9, 256.0], [97.0, 256.0], [97.1, 257.0], [97.2, 257.0], [97.3, 257.0], [97.4, 257.0], [97.5, 259.0], [97.6, 261.0], [97.7, 262.0], [97.8, 262.0], [97.9, 263.0], [98.0, 264.0], [98.1, 265.0], [98.2, 265.0], [98.3, 265.0], [98.4, 266.0], [98.5, 267.0], [98.6, 268.0], [98.7, 268.0], [98.8, 271.0], [98.9, 272.0], [99.0, 272.0], [99.1, 273.0], [99.2, 279.0], [99.3, 280.0], [99.4, 281.0], [99.5, 285.0], [99.6, 285.0], [99.7, 289.0], [99.8, 302.0], [99.9, 471.0], [100.0, 484.0]], "isOverall": false, "label": "HTTP Request - enroll", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 2.0, "minX": 100.0, "maxY": 1432.0, "series": [{"data": [[300.0, 2.0], [400.0, 2.0], [200.0, 1432.0], [100.0, 64.0]], "isOverall": false, "label": "HTTP Request - enroll", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 2.727272727272727, "minX": 1.7411829E12, "maxY": 3.0, "series": [{"data": [[1.7411829E12, 3.0], [1.74118296E12, 3.0], [1.74118302E12, 2.727272727272727]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74118302E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 231.0, "minX": 1.0, "maxY": 238.6094793057412, "series": [{"data": [[2.0, 233.0], [1.0, 231.0], [3.0, 238.6094793057412]], "isOverall": false, "label": "HTTP Request - enroll", "isController": false}, {"data": [[2.998, 238.60066666666685]], "isOverall": false, "label": "HTTP Request - enroll-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 3.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 150.7, "minX": 1.7411829E12, "maxY": 35184.666666666664, "series": [{"data": [[1.7411829E12, 34298.38333333333], [1.74118296E12, 35184.666666666664], [1.74118302E12, 513.3333333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7411829E12, 10069.5], [1.74118296E12, 10329.8], [1.74118302E12, 150.7]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74118302E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 235.1818181818182, "minX": 1.7411829E12, "maxY": 238.87798408488067, "series": [{"data": [[1.7411829E12, 238.36734693877546], [1.74118296E12, 238.87798408488067], [1.74118302E12, 235.1818181818182]], "isOverall": false, "label": "HTTP Request - enroll", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74118302E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 235.1818181818182, "minX": 1.7411829E12, "maxY": 238.87135278514606, "series": [{"data": [[1.7411829E12, 238.33061224489796], [1.74118296E12, 238.87135278514606], [1.74118302E12, 235.1818181818182]], "isOverall": false, "label": "HTTP Request - enroll", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74118302E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.7411829E12, "maxY": 0.6353741496598647, "series": [{"data": [[1.7411829E12, 0.6353741496598647], [1.74118296E12, 0.02122015915119364], [1.74118302E12, 0.0]], "isOverall": false, "label": "HTTP Request - enroll", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74118302E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 175.0, "minX": 1.7411829E12, "maxY": 484.0, "series": [{"data": [[1.7411829E12, 484.0], [1.74118296E12, 302.0], [1.74118302E12, 243.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7411829E12, 245.39999999999998], [1.74118296E12, 246.0], [1.74118302E12, 242.8]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7411829E12, 281.0], [1.74118296E12, 266.35000000000014], [1.74118302E12, 243.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7411829E12, 252.19999999999993], [1.74118296E12, 251.0], [1.74118302E12, 243.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.7411829E12, 177.0], [1.74118296E12, 175.0], [1.74118302E12, 225.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7411829E12, 240.0], [1.74118296E12, 241.0], [1.74118302E12, 235.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74118302E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 235.0, "minX": 6.0, "maxY": 241.0, "series": [{"data": [[11.0, 235.0], [6.0, 237.0], [12.0, 240.0], [13.0, 241.0], [14.0, 241.0], [15.0, 240.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 15.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 235.0, "minX": 6.0, "maxY": 241.0, "series": [{"data": [[11.0, 235.0], [6.0, 237.0], [12.0, 240.0], [13.0, 241.0], [14.0, 241.0], [15.0, 240.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 15.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.13333333333333333, "minX": 1.7411829E12, "maxY": 12.566666666666666, "series": [{"data": [[1.7411829E12, 12.3], [1.74118296E12, 12.566666666666666], [1.74118302E12, 0.13333333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74118302E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.18333333333333332, "minX": 1.7411829E12, "maxY": 12.566666666666666, "series": [{"data": [[1.7411829E12, 12.25], [1.74118296E12, 12.566666666666666], [1.74118302E12, 0.18333333333333332]], "isOverall": false, "label": "201", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74118302E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.18333333333333332, "minX": 1.7411829E12, "maxY": 12.566666666666666, "series": [{"data": [[1.7411829E12, 12.25], [1.74118296E12, 12.566666666666666], [1.74118302E12, 0.18333333333333332]], "isOverall": false, "label": "HTTP Request - enroll-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74118302E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.18333333333333332, "minX": 1.7411829E12, "maxY": 12.566666666666666, "series": [{"data": [[1.7411829E12, 12.25], [1.74118296E12, 12.566666666666666], [1.74118302E12, 0.18333333333333332]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74118302E12, "title": "Total Transactions Per Second"}},
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

