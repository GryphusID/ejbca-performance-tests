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
        data: {"result": {"minY": 143.0, "minX": 0.0, "maxY": 13402.0, "series": [{"data": [[0.0, 143.0], [0.1, 143.0], [0.2, 143.0], [0.3, 143.0], [0.4, 143.0], [0.5, 143.0], [0.6, 143.0], [0.7, 143.0], [0.8, 143.0], [0.9, 143.0], [1.0, 153.0], [1.1, 153.0], [1.2, 153.0], [1.3, 153.0], [1.4, 153.0], [1.5, 153.0], [1.6, 153.0], [1.7, 153.0], [1.8, 153.0], [1.9, 153.0], [2.0, 180.0], [2.1, 180.0], [2.2, 180.0], [2.3, 180.0], [2.4, 180.0], [2.5, 180.0], [2.6, 180.0], [2.7, 180.0], [2.8, 180.0], [2.9, 180.0], [3.0, 181.0], [3.1, 181.0], [3.2, 181.0], [3.3, 181.0], [3.4, 181.0], [3.5, 181.0], [3.6, 181.0], [3.7, 181.0], [3.8, 181.0], [3.9, 181.0], [4.0, 185.0], [4.1, 185.0], [4.2, 185.0], [4.3, 185.0], [4.4, 185.0], [4.5, 185.0], [4.6, 185.0], [4.7, 185.0], [4.8, 185.0], [4.9, 185.0], [5.0, 186.0], [5.1, 186.0], [5.2, 186.0], [5.3, 186.0], [5.4, 186.0], [5.5, 186.0], [5.6, 186.0], [5.7, 186.0], [5.8, 186.0], [5.9, 186.0], [6.0, 186.0], [6.1, 186.0], [6.2, 186.0], [6.3, 186.0], [6.4, 186.0], [6.5, 186.0], [6.6, 186.0], [6.7, 186.0], [6.8, 186.0], [6.9, 186.0], [7.0, 187.0], [7.1, 187.0], [7.2, 187.0], [7.3, 187.0], [7.4, 187.0], [7.5, 187.0], [7.6, 187.0], [7.7, 187.0], [7.8, 187.0], [7.9, 187.0], [8.0, 187.0], [8.1, 187.0], [8.2, 187.0], [8.3, 187.0], [8.4, 187.0], [8.5, 187.0], [8.6, 187.0], [8.7, 187.0], [8.8, 187.0], [8.9, 187.0], [9.0, 191.0], [9.1, 191.0], [9.2, 191.0], [9.3, 191.0], [9.4, 191.0], [9.5, 191.0], [9.6, 191.0], [9.7, 191.0], [9.8, 191.0], [9.9, 191.0], [10.0, 193.0], [10.1, 193.0], [10.2, 193.0], [10.3, 193.0], [10.4, 193.0], [10.5, 193.0], [10.6, 193.0], [10.7, 193.0], [10.8, 193.0], [10.9, 193.0], [11.0, 195.0], [11.1, 195.0], [11.2, 195.0], [11.3, 195.0], [11.4, 195.0], [11.5, 195.0], [11.6, 195.0], [11.7, 195.0], [11.8, 195.0], [11.9, 195.0], [12.0, 200.0], [12.1, 200.0], [12.2, 200.0], [12.3, 200.0], [12.4, 200.0], [12.5, 200.0], [12.6, 200.0], [12.7, 200.0], [12.8, 200.0], [12.9, 200.0], [13.0, 217.0], [13.1, 217.0], [13.2, 217.0], [13.3, 217.0], [13.4, 217.0], [13.5, 217.0], [13.6, 217.0], [13.7, 217.0], [13.8, 217.0], [13.9, 217.0], [14.0, 223.0], [14.1, 223.0], [14.2, 223.0], [14.3, 223.0], [14.4, 223.0], [14.5, 223.0], [14.6, 223.0], [14.7, 223.0], [14.8, 223.0], [14.9, 223.0], [15.0, 227.0], [15.1, 227.0], [15.2, 227.0], [15.3, 227.0], [15.4, 227.0], [15.5, 227.0], [15.6, 227.0], [15.7, 227.0], [15.8, 227.0], [15.9, 227.0], [16.0, 228.0], [16.1, 228.0], [16.2, 228.0], [16.3, 228.0], [16.4, 228.0], [16.5, 228.0], [16.6, 228.0], [16.7, 228.0], [16.8, 228.0], [16.9, 228.0], [17.0, 238.0], [17.1, 238.0], [17.2, 238.0], [17.3, 238.0], [17.4, 238.0], [17.5, 238.0], [17.6, 238.0], [17.7, 238.0], [17.8, 238.0], [17.9, 238.0], [18.0, 244.0], [18.1, 244.0], [18.2, 244.0], [18.3, 244.0], [18.4, 244.0], [18.5, 244.0], [18.6, 244.0], [18.7, 244.0], [18.8, 244.0], [18.9, 244.0], [19.0, 245.0], [19.1, 245.0], [19.2, 245.0], [19.3, 245.0], [19.4, 245.0], [19.5, 245.0], [19.6, 245.0], [19.7, 245.0], [19.8, 245.0], [19.9, 245.0], [20.0, 273.0], [20.1, 273.0], [20.2, 273.0], [20.3, 273.0], [20.4, 273.0], [20.5, 273.0], [20.6, 273.0], [20.7, 273.0], [20.8, 273.0], [20.9, 273.0], [21.0, 286.0], [21.1, 286.0], [21.2, 286.0], [21.3, 286.0], [21.4, 286.0], [21.5, 286.0], [21.6, 286.0], [21.7, 286.0], [21.8, 286.0], [21.9, 286.0], [22.0, 324.0], [22.1, 324.0], [22.2, 324.0], [22.3, 324.0], [22.4, 324.0], [22.5, 324.0], [22.6, 324.0], [22.7, 324.0], [22.8, 324.0], [22.9, 324.0], [23.0, 604.0], [23.1, 604.0], [23.2, 604.0], [23.3, 604.0], [23.4, 604.0], [23.5, 604.0], [23.6, 604.0], [23.7, 604.0], [23.8, 604.0], [23.9, 604.0], [24.0, 643.0], [24.1, 643.0], [24.2, 643.0], [24.3, 643.0], [24.4, 643.0], [24.5, 643.0], [24.6, 643.0], [24.7, 643.0], [24.8, 643.0], [24.9, 643.0], [25.0, 697.0], [25.1, 697.0], [25.2, 697.0], [25.3, 697.0], [25.4, 697.0], [25.5, 697.0], [25.6, 697.0], [25.7, 697.0], [25.8, 697.0], [25.9, 697.0], [26.0, 698.0], [26.1, 698.0], [26.2, 698.0], [26.3, 698.0], [26.4, 698.0], [26.5, 698.0], [26.6, 698.0], [26.7, 698.0], [26.8, 698.0], [26.9, 698.0], [27.0, 703.0], [27.1, 703.0], [27.2, 703.0], [27.3, 703.0], [27.4, 703.0], [27.5, 703.0], [27.6, 703.0], [27.7, 703.0], [27.8, 703.0], [27.9, 703.0], [28.0, 753.0], [28.1, 753.0], [28.2, 753.0], [28.3, 753.0], [28.4, 753.0], [28.5, 753.0], [28.6, 753.0], [28.7, 753.0], [28.8, 753.0], [28.9, 753.0], [29.0, 808.0], [29.1, 808.0], [29.2, 808.0], [29.3, 808.0], [29.4, 808.0], [29.5, 808.0], [29.6, 808.0], [29.7, 808.0], [29.8, 808.0], [29.9, 808.0], [30.0, 843.0], [30.1, 843.0], [30.2, 843.0], [30.3, 843.0], [30.4, 843.0], [30.5, 843.0], [30.6, 843.0], [30.7, 843.0], [30.8, 843.0], [30.9, 843.0], [31.0, 938.0], [31.1, 938.0], [31.2, 938.0], [31.3, 938.0], [31.4, 938.0], [31.5, 938.0], [31.6, 938.0], [31.7, 938.0], [31.8, 938.0], [31.9, 938.0], [32.0, 969.0], [32.1, 969.0], [32.2, 969.0], [32.3, 969.0], [32.4, 969.0], [32.5, 969.0], [32.6, 969.0], [32.7, 969.0], [32.8, 969.0], [32.9, 969.0], [33.0, 988.0], [33.1, 988.0], [33.2, 988.0], [33.3, 988.0], [33.4, 988.0], [33.5, 988.0], [33.6, 988.0], [33.7, 988.0], [33.8, 988.0], [33.9, 988.0], [34.0, 1128.0], [34.1, 1128.0], [34.2, 1128.0], [34.3, 1128.0], [34.4, 1128.0], [34.5, 1128.0], [34.6, 1128.0], [34.7, 1128.0], [34.8, 1128.0], [34.9, 1128.0], [35.0, 1142.0], [35.1, 1142.0], [35.2, 1142.0], [35.3, 1142.0], [35.4, 1142.0], [35.5, 1142.0], [35.6, 1142.0], [35.7, 1142.0], [35.8, 1142.0], [35.9, 1142.0], [36.0, 1231.0], [36.1, 1231.0], [36.2, 1231.0], [36.3, 1231.0], [36.4, 1231.0], [36.5, 1231.0], [36.6, 1231.0], [36.7, 1231.0], [36.8, 1231.0], [36.9, 1231.0], [37.0, 1234.0], [37.1, 1234.0], [37.2, 1234.0], [37.3, 1234.0], [37.4, 1234.0], [37.5, 1234.0], [37.6, 1234.0], [37.7, 1234.0], [37.8, 1234.0], [37.9, 1234.0], [38.0, 1259.0], [38.1, 1259.0], [38.2, 1259.0], [38.3, 1259.0], [38.4, 1259.0], [38.5, 1259.0], [38.6, 1259.0], [38.7, 1259.0], [38.8, 1259.0], [38.9, 1259.0], [39.0, 1266.0], [39.1, 1266.0], [39.2, 1266.0], [39.3, 1266.0], [39.4, 1266.0], [39.5, 1266.0], [39.6, 1266.0], [39.7, 1266.0], [39.8, 1266.0], [39.9, 1266.0], [40.0, 1295.0], [40.1, 1295.0], [40.2, 1295.0], [40.3, 1295.0], [40.4, 1295.0], [40.5, 1295.0], [40.6, 1295.0], [40.7, 1295.0], [40.8, 1295.0], [40.9, 1295.0], [41.0, 1300.0], [41.1, 1300.0], [41.2, 1300.0], [41.3, 1300.0], [41.4, 1300.0], [41.5, 1300.0], [41.6, 1300.0], [41.7, 1300.0], [41.8, 1300.0], [41.9, 1300.0], [42.0, 1339.0], [42.1, 1339.0], [42.2, 1339.0], [42.3, 1339.0], [42.4, 1339.0], [42.5, 1339.0], [42.6, 1339.0], [42.7, 1339.0], [42.8, 1339.0], [42.9, 1339.0], [43.0, 1388.0], [43.1, 1388.0], [43.2, 1388.0], [43.3, 1388.0], [43.4, 1388.0], [43.5, 1388.0], [43.6, 1388.0], [43.7, 1388.0], [43.8, 1388.0], [43.9, 1388.0], [44.0, 1405.0], [44.1, 1405.0], [44.2, 1405.0], [44.3, 1405.0], [44.4, 1405.0], [44.5, 1405.0], [44.6, 1405.0], [44.7, 1405.0], [44.8, 1405.0], [44.9, 1405.0], [45.0, 1416.0], [45.1, 1416.0], [45.2, 1416.0], [45.3, 1416.0], [45.4, 1416.0], [45.5, 1416.0], [45.6, 1416.0], [45.7, 1416.0], [45.8, 1416.0], [45.9, 1416.0], [46.0, 1455.0], [46.1, 1455.0], [46.2, 1455.0], [46.3, 1455.0], [46.4, 1455.0], [46.5, 1455.0], [46.6, 1455.0], [46.7, 1455.0], [46.8, 1455.0], [46.9, 1455.0], [47.0, 1485.0], [47.1, 1485.0], [47.2, 1485.0], [47.3, 1485.0], [47.4, 1485.0], [47.5, 1485.0], [47.6, 1485.0], [47.7, 1485.0], [47.8, 1485.0], [47.9, 1485.0], [48.0, 1503.0], [48.1, 1503.0], [48.2, 1503.0], [48.3, 1503.0], [48.4, 1503.0], [48.5, 1503.0], [48.6, 1503.0], [48.7, 1503.0], [48.8, 1503.0], [48.9, 1503.0], [49.0, 1505.0], [49.1, 1505.0], [49.2, 1505.0], [49.3, 1505.0], [49.4, 1505.0], [49.5, 1505.0], [49.6, 1505.0], [49.7, 1505.0], [49.8, 1505.0], [49.9, 1505.0], [50.0, 1510.0], [50.1, 1510.0], [50.2, 1510.0], [50.3, 1510.0], [50.4, 1510.0], [50.5, 1510.0], [50.6, 1510.0], [50.7, 1510.0], [50.8, 1510.0], [50.9, 1510.0], [51.0, 1521.0], [51.1, 1521.0], [51.2, 1521.0], [51.3, 1521.0], [51.4, 1521.0], [51.5, 1521.0], [51.6, 1521.0], [51.7, 1521.0], [51.8, 1521.0], [51.9, 1521.0], [52.0, 1544.0], [52.1, 1544.0], [52.2, 1544.0], [52.3, 1544.0], [52.4, 1544.0], [52.5, 1544.0], [52.6, 1544.0], [52.7, 1544.0], [52.8, 1544.0], [52.9, 1544.0], [53.0, 1588.0], [53.1, 1588.0], [53.2, 1588.0], [53.3, 1588.0], [53.4, 1588.0], [53.5, 1588.0], [53.6, 1588.0], [53.7, 1588.0], [53.8, 1588.0], [53.9, 1588.0], [54.0, 1604.0], [54.1, 1604.0], [54.2, 1604.0], [54.3, 1604.0], [54.4, 1604.0], [54.5, 1604.0], [54.6, 1604.0], [54.7, 1604.0], [54.8, 1604.0], [54.9, 1604.0], [55.0, 1671.0], [55.1, 1671.0], [55.2, 1671.0], [55.3, 1671.0], [55.4, 1671.0], [55.5, 1671.0], [55.6, 1671.0], [55.7, 1671.0], [55.8, 1671.0], [55.9, 1671.0], [56.0, 1673.0], [56.1, 1673.0], [56.2, 1673.0], [56.3, 1673.0], [56.4, 1673.0], [56.5, 1673.0], [56.6, 1673.0], [56.7, 1673.0], [56.8, 1673.0], [56.9, 1673.0], [57.0, 1689.0], [57.1, 1689.0], [57.2, 1689.0], [57.3, 1689.0], [57.4, 1689.0], [57.5, 1689.0], [57.6, 1689.0], [57.7, 1689.0], [57.8, 1689.0], [57.9, 1689.0], [58.0, 1706.0], [58.1, 1706.0], [58.2, 1706.0], [58.3, 1706.0], [58.4, 1706.0], [58.5, 1706.0], [58.6, 1706.0], [58.7, 1706.0], [58.8, 1706.0], [58.9, 1706.0], [59.0, 1716.0], [59.1, 1716.0], [59.2, 1716.0], [59.3, 1716.0], [59.4, 1716.0], [59.5, 1716.0], [59.6, 1716.0], [59.7, 1716.0], [59.8, 1716.0], [59.9, 1716.0], [60.0, 1719.0], [60.1, 1719.0], [60.2, 1719.0], [60.3, 1719.0], [60.4, 1719.0], [60.5, 1719.0], [60.6, 1719.0], [60.7, 1719.0], [60.8, 1719.0], [60.9, 1719.0], [61.0, 1731.0], [61.1, 1731.0], [61.2, 1731.0], [61.3, 1731.0], [61.4, 1731.0], [61.5, 1731.0], [61.6, 1731.0], [61.7, 1731.0], [61.8, 1731.0], [61.9, 1731.0], [62.0, 1748.0], [62.1, 1748.0], [62.2, 1748.0], [62.3, 1748.0], [62.4, 1748.0], [62.5, 1748.0], [62.6, 1748.0], [62.7, 1748.0], [62.8, 1748.0], [62.9, 1748.0], [63.0, 1793.0], [63.1, 1793.0], [63.2, 1793.0], [63.3, 1793.0], [63.4, 1793.0], [63.5, 1793.0], [63.6, 1793.0], [63.7, 1793.0], [63.8, 1793.0], [63.9, 1793.0], [64.0, 1827.0], [64.1, 1827.0], [64.2, 1827.0], [64.3, 1827.0], [64.4, 1827.0], [64.5, 1827.0], [64.6, 1827.0], [64.7, 1827.0], [64.8, 1827.0], [64.9, 1827.0], [65.0, 1856.0], [65.1, 1856.0], [65.2, 1856.0], [65.3, 1856.0], [65.4, 1856.0], [65.5, 1856.0], [65.6, 1856.0], [65.7, 1856.0], [65.8, 1856.0], [65.9, 1856.0], [66.0, 1861.0], [66.1, 1861.0], [66.2, 1861.0], [66.3, 1861.0], [66.4, 1861.0], [66.5, 1861.0], [66.6, 1861.0], [66.7, 1861.0], [66.8, 1861.0], [66.9, 1861.0], [67.0, 1925.0], [67.1, 1925.0], [67.2, 1925.0], [67.3, 1925.0], [67.4, 1925.0], [67.5, 1925.0], [67.6, 1925.0], [67.7, 1925.0], [67.8, 1925.0], [67.9, 1925.0], [68.0, 1985.0], [68.1, 1985.0], [68.2, 1985.0], [68.3, 1985.0], [68.4, 1985.0], [68.5, 1985.0], [68.6, 1985.0], [68.7, 1985.0], [68.8, 1985.0], [68.9, 1985.0], [69.0, 1996.0], [69.1, 1996.0], [69.2, 1996.0], [69.3, 1996.0], [69.4, 1996.0], [69.5, 1996.0], [69.6, 1996.0], [69.7, 1996.0], [69.8, 1996.0], [69.9, 1996.0], [70.0, 1996.0], [70.1, 1996.0], [70.2, 1996.0], [70.3, 1996.0], [70.4, 1996.0], [70.5, 1996.0], [70.6, 1996.0], [70.7, 1996.0], [70.8, 1996.0], [70.9, 1996.0], [71.0, 2089.0], [71.1, 2089.0], [71.2, 2089.0], [71.3, 2089.0], [71.4, 2089.0], [71.5, 2089.0], [71.6, 2089.0], [71.7, 2089.0], [71.8, 2089.0], [71.9, 2089.0], [72.0, 2137.0], [72.1, 2137.0], [72.2, 2137.0], [72.3, 2137.0], [72.4, 2137.0], [72.5, 2137.0], [72.6, 2137.0], [72.7, 2137.0], [72.8, 2137.0], [72.9, 2137.0], [73.0, 2180.0], [73.1, 2180.0], [73.2, 2180.0], [73.3, 2180.0], [73.4, 2180.0], [73.5, 2180.0], [73.6, 2180.0], [73.7, 2180.0], [73.8, 2180.0], [73.9, 2180.0], [74.0, 2219.0], [74.1, 2219.0], [74.2, 2219.0], [74.3, 2219.0], [74.4, 2219.0], [74.5, 2219.0], [74.6, 2219.0], [74.7, 2219.0], [74.8, 2219.0], [74.9, 2219.0], [75.0, 2242.0], [75.1, 2242.0], [75.2, 2242.0], [75.3, 2242.0], [75.4, 2242.0], [75.5, 2242.0], [75.6, 2242.0], [75.7, 2242.0], [75.8, 2242.0], [75.9, 2242.0], [76.0, 2300.0], [76.1, 2300.0], [76.2, 2300.0], [76.3, 2300.0], [76.4, 2300.0], [76.5, 2300.0], [76.6, 2300.0], [76.7, 2300.0], [76.8, 2300.0], [76.9, 2300.0], [77.0, 2371.0], [77.1, 2371.0], [77.2, 2371.0], [77.3, 2371.0], [77.4, 2371.0], [77.5, 2371.0], [77.6, 2371.0], [77.7, 2371.0], [77.8, 2371.0], [77.9, 2371.0], [78.0, 2402.0], [78.1, 2402.0], [78.2, 2402.0], [78.3, 2402.0], [78.4, 2402.0], [78.5, 2402.0], [78.6, 2402.0], [78.7, 2402.0], [78.8, 2402.0], [78.9, 2402.0], [79.0, 2409.0], [79.1, 2409.0], [79.2, 2409.0], [79.3, 2409.0], [79.4, 2409.0], [79.5, 2409.0], [79.6, 2409.0], [79.7, 2409.0], [79.8, 2409.0], [79.9, 2409.0], [80.0, 2540.0], [80.1, 2540.0], [80.2, 2540.0], [80.3, 2540.0], [80.4, 2540.0], [80.5, 2540.0], [80.6, 2540.0], [80.7, 2540.0], [80.8, 2540.0], [80.9, 2540.0], [81.0, 2736.0], [81.1, 2736.0], [81.2, 2736.0], [81.3, 2736.0], [81.4, 2736.0], [81.5, 2736.0], [81.6, 2736.0], [81.7, 2736.0], [81.8, 2736.0], [81.9, 2736.0], [82.0, 2758.0], [82.1, 2758.0], [82.2, 2758.0], [82.3, 2758.0], [82.4, 2758.0], [82.5, 2758.0], [82.6, 2758.0], [82.7, 2758.0], [82.8, 2758.0], [82.9, 2758.0], [83.0, 2765.0], [83.1, 2765.0], [83.2, 2765.0], [83.3, 2765.0], [83.4, 2765.0], [83.5, 2765.0], [83.6, 2765.0], [83.7, 2765.0], [83.8, 2765.0], [83.9, 2765.0], [84.0, 2887.0], [84.1, 2887.0], [84.2, 2887.0], [84.3, 2887.0], [84.4, 2887.0], [84.5, 2887.0], [84.6, 2887.0], [84.7, 2887.0], [84.8, 2887.0], [84.9, 2887.0], [85.0, 2921.0], [85.1, 2921.0], [85.2, 2921.0], [85.3, 2921.0], [85.4, 2921.0], [85.5, 2921.0], [85.6, 2921.0], [85.7, 2921.0], [85.8, 2921.0], [85.9, 2921.0], [86.0, 3153.0], [86.1, 3153.0], [86.2, 3153.0], [86.3, 3153.0], [86.4, 3153.0], [86.5, 3153.0], [86.6, 3153.0], [86.7, 3153.0], [86.8, 3153.0], [86.9, 3153.0], [87.0, 3238.0], [87.1, 3238.0], [87.2, 3238.0], [87.3, 3238.0], [87.4, 3238.0], [87.5, 3238.0], [87.6, 3238.0], [87.7, 3238.0], [87.8, 3238.0], [87.9, 3238.0], [88.0, 3307.0], [88.1, 3307.0], [88.2, 3307.0], [88.3, 3307.0], [88.4, 3307.0], [88.5, 3307.0], [88.6, 3307.0], [88.7, 3307.0], [88.8, 3307.0], [88.9, 3307.0], [89.0, 3324.0], [89.1, 3324.0], [89.2, 3324.0], [89.3, 3324.0], [89.4, 3324.0], [89.5, 3324.0], [89.6, 3324.0], [89.7, 3324.0], [89.8, 3324.0], [89.9, 3324.0], [90.0, 3373.0], [90.1, 3373.0], [90.2, 3373.0], [90.3, 3373.0], [90.4, 3373.0], [90.5, 3373.0], [90.6, 3373.0], [90.7, 3373.0], [90.8, 3373.0], [90.9, 3373.0], [91.0, 3485.0], [91.1, 3485.0], [91.2, 3485.0], [91.3, 3485.0], [91.4, 3485.0], [91.5, 3485.0], [91.6, 3485.0], [91.7, 3485.0], [91.8, 3485.0], [91.9, 3485.0], [92.0, 3788.0], [92.1, 3788.0], [92.2, 3788.0], [92.3, 3788.0], [92.4, 3788.0], [92.5, 3788.0], [92.6, 3788.0], [92.7, 3788.0], [92.8, 3788.0], [92.9, 3788.0], [93.0, 4124.0], [93.1, 4124.0], [93.2, 4124.0], [93.3, 4124.0], [93.4, 4124.0], [93.5, 4124.0], [93.6, 4124.0], [93.7, 4124.0], [93.8, 4124.0], [93.9, 4124.0], [94.0, 4136.0], [94.1, 4136.0], [94.2, 4136.0], [94.3, 4136.0], [94.4, 4136.0], [94.5, 4136.0], [94.6, 4136.0], [94.7, 4136.0], [94.8, 4136.0], [94.9, 4136.0], [95.0, 4201.0], [95.1, 4201.0], [95.2, 4201.0], [95.3, 4201.0], [95.4, 4201.0], [95.5, 4201.0], [95.6, 4201.0], [95.7, 4201.0], [95.8, 4201.0], [95.9, 4201.0], [96.0, 4563.0], [96.1, 4563.0], [96.2, 4563.0], [96.3, 4563.0], [96.4, 4563.0], [96.5, 4563.0], [96.6, 4563.0], [96.7, 4563.0], [96.8, 4563.0], [96.9, 4563.0], [97.0, 5047.0], [97.1, 5047.0], [97.2, 5047.0], [97.3, 5047.0], [97.4, 5047.0], [97.5, 5047.0], [97.6, 5047.0], [97.7, 5047.0], [97.8, 5047.0], [97.9, 5047.0], [98.0, 6244.0], [98.1, 6244.0], [98.2, 6244.0], [98.3, 6244.0], [98.4, 6244.0], [98.5, 6244.0], [98.6, 6244.0], [98.7, 6244.0], [98.8, 6244.0], [98.9, 6244.0], [99.0, 13402.0], [99.1, 13402.0], [99.2, 13402.0], [99.3, 13402.0], [99.4, 13402.0], [99.5, 13402.0], [99.6, 13402.0], [99.7, 13402.0], [99.8, 13402.0], [99.9, 13402.0]], "isOverall": false, "label": "HTTP Request - enroll", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 12.0, "series": [{"data": [[600.0, 4.0], [700.0, 2.0], [800.0, 2.0], [13400.0, 1.0], [900.0, 3.0], [1100.0, 2.0], [1200.0, 5.0], [1300.0, 3.0], [1400.0, 4.0], [1500.0, 6.0], [1600.0, 4.0], [100.0, 12.0], [1700.0, 6.0], [1800.0, 3.0], [1900.0, 4.0], [2000.0, 1.0], [2100.0, 2.0], [2200.0, 2.0], [2300.0, 2.0], [2400.0, 2.0], [2500.0, 1.0], [2700.0, 3.0], [2800.0, 1.0], [2900.0, 1.0], [3100.0, 1.0], [200.0, 10.0], [3200.0, 1.0], [3300.0, 3.0], [3400.0, 1.0], [3700.0, 1.0], [4100.0, 2.0], [4200.0, 1.0], [4500.0, 1.0], [300.0, 1.0], [5000.0, 1.0], [6200.0, 1.0]], "isOverall": false, "label": "HTTP Request - enroll", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 13400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 23.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 52.0, "series": [{"data": [[0.0, 23.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 25.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 52.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.75828038E12, "maxY": 1.0, "series": [{"data": [[1.7582805E12, 1.0], [1.75828038E12, 1.0], [1.75828056E12, 1.0], [1.75828044E12, 1.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75828056E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1738.6699999999998, "minX": 1.0, "maxY": 1738.6699999999998, "series": [{"data": [[1.0, 1738.6699999999998]], "isOverall": false, "label": "HTTP Request - enroll", "isController": false}, {"data": [[1.0, 1738.6699999999998]], "isOverall": false, "label": "HTTP Request - enroll-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 1.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 102.0, "minX": 1.75828038E12, "maxY": 2201.733333333333, "series": [{"data": [[1.7582805E12, 2201.733333333333], [1.75828038E12, 1241.7], [1.75828056E12, 338.51666666666665], [1.75828044E12, 1862.85]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7582805E12, 663.0], [1.75828038E12, 374.0], [1.75828056E12, 102.0], [1.75828044E12, 561.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75828056E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1483.897435897436, "minX": 1.75828038E12, "maxY": 2608.1666666666665, "series": [{"data": [[1.7582805E12, 1483.897435897436], [1.75828038E12, 1975.4090909090905], [1.75828056E12, 2608.1666666666665], [1.75828044E12, 1723.8484848484845]], "isOverall": false, "label": "HTTP Request - enroll", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75828056E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1483.5128205128206, "minX": 1.75828038E12, "maxY": 2604.3333333333335, "series": [{"data": [[1.7582805E12, 1483.5128205128206], [1.75828038E12, 1973.6818181818185], [1.75828056E12, 2604.3333333333335], [1.75828044E12, 1723.5151515151513]], "isOverall": false, "label": "HTTP Request - enroll", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75828056E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.75828038E12, "maxY": 306.18181818181824, "series": [{"data": [[1.7582805E12, 1.1025641025641024], [1.75828038E12, 306.18181818181824], [1.75828056E12, 0.0], [1.75828044E12, 20.545454545454543]], "isOverall": false, "label": "HTTP Request - enroll", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75828056E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 143.0, "minX": 1.75828038E12, "maxY": 13402.0, "series": [{"data": [[1.7582805E12, 6244.0], [1.75828038E12, 13402.0], [1.75828056E12, 4136.0], [1.75828044E12, 4124.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7582805E12, 4201.0], [1.75828038E12, 2194.4], [1.75828056E12, 4136.0], [1.75828044E12, 2605.2000000000003]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7582805E12, 6244.0], [1.75828038E12, 13402.0], [1.75828056E12, 4136.0], [1.75828044E12, 4124.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7582805E12, 5047.0], [1.75828038E12, 11724.549999999976], [1.75828056E12, 4136.0], [1.75828044E12, 3172.699999999996]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.7582805E12, 143.0], [1.75828038E12, 604.0], [1.75828056E12, 753.0], [1.75828044E12, 643.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7582805E12, 245.0], [1.75828038E12, 1507.5], [1.75828056E12, 3122.5], [1.75828044E12, 1673.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75828056E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 187.0, "minX": 1.0, "maxY": 1731.0, "series": [{"data": [[1.0, 1731.0], [2.0, 1128.0], [4.0, 225.5], [5.0, 187.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 187.0, "minX": 1.0, "maxY": 1731.0, "series": [{"data": [[1.0, 1731.0], [2.0, 1128.0], [4.0, 225.0], [5.0, 187.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.08333333333333333, "minX": 1.75828038E12, "maxY": 0.65, "series": [{"data": [[1.7582805E12, 0.65], [1.75828038E12, 0.38333333333333336], [1.75828056E12, 0.08333333333333333], [1.75828044E12, 0.55]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75828056E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.1, "minX": 1.75828038E12, "maxY": 0.65, "series": [{"data": [[1.7582805E12, 0.65], [1.75828038E12, 0.36666666666666664], [1.75828056E12, 0.1], [1.75828044E12, 0.55]], "isOverall": false, "label": "201", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75828056E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.1, "minX": 1.75828038E12, "maxY": 0.65, "series": [{"data": [[1.7582805E12, 0.65], [1.75828038E12, 0.36666666666666664], [1.75828056E12, 0.1], [1.75828044E12, 0.55]], "isOverall": false, "label": "HTTP Request - enroll-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75828056E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.1, "minX": 1.75828038E12, "maxY": 0.65, "series": [{"data": [[1.7582805E12, 0.65], [1.75828038E12, 0.36666666666666664], [1.75828056E12, 0.1], [1.75828044E12, 0.55]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75828056E12, "title": "Total Transactions Per Second"}},
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

