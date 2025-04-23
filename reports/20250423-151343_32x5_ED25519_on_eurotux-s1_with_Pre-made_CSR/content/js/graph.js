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
        data: {"result": {"minY": 420.0, "minX": 0.0, "maxY": 2850.0, "series": [{"data": [[0.0, 420.0], [0.1, 420.0], [0.2, 420.0], [0.3, 420.0], [0.4, 420.0], [0.5, 420.0], [0.6, 420.0], [0.7, 421.0], [0.8, 421.0], [0.9, 421.0], [1.0, 421.0], [1.1, 421.0], [1.2, 421.0], [1.3, 473.0], [1.4, 473.0], [1.5, 473.0], [1.6, 473.0], [1.7, 473.0], [1.8, 473.0], [1.9, 617.0], [2.0, 617.0], [2.1, 617.0], [2.2, 617.0], [2.3, 617.0], [2.4, 617.0], [2.5, 774.0], [2.6, 774.0], [2.7, 774.0], [2.8, 774.0], [2.9, 774.0], [3.0, 774.0], [3.1, 774.0], [3.2, 940.0], [3.3, 940.0], [3.4, 940.0], [3.5, 940.0], [3.6, 940.0], [3.7, 940.0], [3.8, 943.0], [3.9, 943.0], [4.0, 943.0], [4.1, 943.0], [4.2, 943.0], [4.3, 943.0], [4.4, 972.0], [4.5, 972.0], [4.6, 972.0], [4.7, 972.0], [4.8, 972.0], [4.9, 972.0], [5.0, 979.0], [5.1, 979.0], [5.2, 979.0], [5.3, 979.0], [5.4, 979.0], [5.5, 979.0], [5.6, 979.0], [5.7, 1033.0], [5.8, 1033.0], [5.9, 1033.0], [6.0, 1033.0], [6.1, 1033.0], [6.2, 1033.0], [6.3, 1035.0], [6.4, 1035.0], [6.5, 1035.0], [6.6, 1035.0], [6.7, 1035.0], [6.8, 1035.0], [6.9, 1037.0], [7.0, 1037.0], [7.1, 1037.0], [7.2, 1037.0], [7.3, 1037.0], [7.4, 1037.0], [7.5, 1039.0], [7.6, 1039.0], [7.7, 1039.0], [7.8, 1039.0], [7.9, 1039.0], [8.0, 1039.0], [8.1, 1039.0], [8.2, 1046.0], [8.3, 1046.0], [8.4, 1046.0], [8.5, 1046.0], [8.6, 1046.0], [8.7, 1046.0], [8.8, 1052.0], [8.9, 1052.0], [9.0, 1052.0], [9.1, 1052.0], [9.2, 1052.0], [9.3, 1052.0], [9.4, 1053.0], [9.5, 1053.0], [9.6, 1053.0], [9.7, 1053.0], [9.8, 1053.0], [9.9, 1053.0], [10.0, 1060.0], [10.1, 1060.0], [10.2, 1060.0], [10.3, 1060.0], [10.4, 1060.0], [10.5, 1060.0], [10.6, 1060.0], [10.7, 1085.0], [10.8, 1085.0], [10.9, 1085.0], [11.0, 1085.0], [11.1, 1085.0], [11.2, 1085.0], [11.3, 1086.0], [11.4, 1086.0], [11.5, 1086.0], [11.6, 1086.0], [11.7, 1086.0], [11.8, 1086.0], [11.9, 1112.0], [12.0, 1112.0], [12.1, 1112.0], [12.2, 1112.0], [12.3, 1112.0], [12.4, 1112.0], [12.5, 1124.0], [12.6, 1124.0], [12.7, 1124.0], [12.8, 1124.0], [12.9, 1124.0], [13.0, 1124.0], [13.1, 1124.0], [13.2, 1139.0], [13.3, 1139.0], [13.4, 1139.0], [13.5, 1139.0], [13.6, 1139.0], [13.7, 1139.0], [13.8, 1148.0], [13.9, 1148.0], [14.0, 1148.0], [14.1, 1148.0], [14.2, 1148.0], [14.3, 1148.0], [14.4, 1155.0], [14.5, 1155.0], [14.6, 1155.0], [14.7, 1155.0], [14.8, 1155.0], [14.9, 1155.0], [15.0, 1155.0], [15.1, 1155.0], [15.2, 1155.0], [15.3, 1155.0], [15.4, 1155.0], [15.5, 1155.0], [15.6, 1155.0], [15.7, 1163.0], [15.8, 1163.0], [15.9, 1163.0], [16.0, 1163.0], [16.1, 1163.0], [16.2, 1163.0], [16.3, 1176.0], [16.4, 1176.0], [16.5, 1176.0], [16.6, 1176.0], [16.7, 1176.0], [16.8, 1176.0], [16.9, 1176.0], [17.0, 1176.0], [17.1, 1176.0], [17.2, 1176.0], [17.3, 1176.0], [17.4, 1176.0], [17.5, 1189.0], [17.6, 1189.0], [17.7, 1189.0], [17.8, 1189.0], [17.9, 1189.0], [18.0, 1189.0], [18.1, 1189.0], [18.2, 1225.0], [18.3, 1225.0], [18.4, 1225.0], [18.5, 1225.0], [18.6, 1225.0], [18.7, 1225.0], [18.8, 1231.0], [18.9, 1231.0], [19.0, 1231.0], [19.1, 1231.0], [19.2, 1231.0], [19.3, 1231.0], [19.4, 1231.0], [19.5, 1231.0], [19.6, 1231.0], [19.7, 1231.0], [19.8, 1231.0], [19.9, 1231.0], [20.0, 1234.0], [20.1, 1234.0], [20.2, 1234.0], [20.3, 1234.0], [20.4, 1234.0], [20.5, 1234.0], [20.6, 1234.0], [20.7, 1241.0], [20.8, 1241.0], [20.9, 1241.0], [21.0, 1241.0], [21.1, 1241.0], [21.2, 1241.0], [21.3, 1243.0], [21.4, 1243.0], [21.5, 1243.0], [21.6, 1243.0], [21.7, 1243.0], [21.8, 1243.0], [21.9, 1244.0], [22.0, 1244.0], [22.1, 1244.0], [22.2, 1244.0], [22.3, 1244.0], [22.4, 1244.0], [22.5, 1250.0], [22.6, 1250.0], [22.7, 1250.0], [22.8, 1250.0], [22.9, 1250.0], [23.0, 1250.0], [23.1, 1250.0], [23.2, 1278.0], [23.3, 1278.0], [23.4, 1278.0], [23.5, 1278.0], [23.6, 1278.0], [23.7, 1278.0], [23.8, 1285.0], [23.9, 1285.0], [24.0, 1285.0], [24.1, 1285.0], [24.2, 1285.0], [24.3, 1285.0], [24.4, 1287.0], [24.5, 1287.0], [24.6, 1287.0], [24.7, 1287.0], [24.8, 1287.0], [24.9, 1287.0], [25.0, 1303.0], [25.1, 1303.0], [25.2, 1303.0], [25.3, 1303.0], [25.4, 1303.0], [25.5, 1303.0], [25.6, 1303.0], [25.7, 1305.0], [25.8, 1305.0], [25.9, 1305.0], [26.0, 1305.0], [26.1, 1305.0], [26.2, 1305.0], [26.3, 1307.0], [26.4, 1307.0], [26.5, 1307.0], [26.6, 1307.0], [26.7, 1307.0], [26.8, 1307.0], [26.9, 1333.0], [27.0, 1333.0], [27.1, 1333.0], [27.2, 1333.0], [27.3, 1333.0], [27.4, 1333.0], [27.5, 1354.0], [27.6, 1354.0], [27.7, 1354.0], [27.8, 1354.0], [27.9, 1354.0], [28.0, 1354.0], [28.1, 1354.0], [28.2, 1362.0], [28.3, 1362.0], [28.4, 1362.0], [28.5, 1362.0], [28.6, 1362.0], [28.7, 1362.0], [28.8, 1382.0], [28.9, 1382.0], [29.0, 1382.0], [29.1, 1382.0], [29.2, 1382.0], [29.3, 1382.0], [29.4, 1393.0], [29.5, 1393.0], [29.6, 1393.0], [29.7, 1393.0], [29.8, 1393.0], [29.9, 1393.0], [30.0, 1401.0], [30.1, 1401.0], [30.2, 1401.0], [30.3, 1401.0], [30.4, 1401.0], [30.5, 1401.0], [30.6, 1401.0], [30.7, 1405.0], [30.8, 1405.0], [30.9, 1405.0], [31.0, 1405.0], [31.1, 1405.0], [31.2, 1405.0], [31.3, 1407.0], [31.4, 1407.0], [31.5, 1407.0], [31.6, 1407.0], [31.7, 1407.0], [31.8, 1407.0], [31.9, 1409.0], [32.0, 1409.0], [32.1, 1409.0], [32.2, 1409.0], [32.3, 1409.0], [32.4, 1409.0], [32.5, 1415.0], [32.6, 1415.0], [32.7, 1415.0], [32.8, 1415.0], [32.9, 1415.0], [33.0, 1415.0], [33.1, 1415.0], [33.2, 1416.0], [33.3, 1416.0], [33.4, 1416.0], [33.5, 1416.0], [33.6, 1416.0], [33.7, 1416.0], [33.8, 1421.0], [33.9, 1421.0], [34.0, 1421.0], [34.1, 1421.0], [34.2, 1421.0], [34.3, 1421.0], [34.4, 1422.0], [34.5, 1422.0], [34.6, 1422.0], [34.7, 1422.0], [34.8, 1422.0], [34.9, 1422.0], [35.0, 1431.0], [35.1, 1431.0], [35.2, 1431.0], [35.3, 1431.0], [35.4, 1431.0], [35.5, 1431.0], [35.6, 1431.0], [35.7, 1436.0], [35.8, 1436.0], [35.9, 1436.0], [36.0, 1436.0], [36.1, 1436.0], [36.2, 1436.0], [36.3, 1438.0], [36.4, 1438.0], [36.5, 1438.0], [36.6, 1438.0], [36.7, 1438.0], [36.8, 1438.0], [36.9, 1438.0], [37.0, 1438.0], [37.1, 1438.0], [37.2, 1438.0], [37.3, 1438.0], [37.4, 1438.0], [37.5, 1445.0], [37.6, 1445.0], [37.7, 1445.0], [37.8, 1445.0], [37.9, 1445.0], [38.0, 1445.0], [38.1, 1445.0], [38.2, 1449.0], [38.3, 1449.0], [38.4, 1449.0], [38.5, 1449.0], [38.6, 1449.0], [38.7, 1449.0], [38.8, 1450.0], [38.9, 1450.0], [39.0, 1450.0], [39.1, 1450.0], [39.2, 1450.0], [39.3, 1450.0], [39.4, 1478.0], [39.5, 1478.0], [39.6, 1478.0], [39.7, 1478.0], [39.8, 1478.0], [39.9, 1478.0], [40.0, 1479.0], [40.1, 1479.0], [40.2, 1479.0], [40.3, 1479.0], [40.4, 1479.0], [40.5, 1479.0], [40.6, 1479.0], [40.7, 1481.0], [40.8, 1481.0], [40.9, 1481.0], [41.0, 1481.0], [41.1, 1481.0], [41.2, 1481.0], [41.3, 1486.0], [41.4, 1486.0], [41.5, 1486.0], [41.6, 1486.0], [41.7, 1486.0], [41.8, 1486.0], [41.9, 1487.0], [42.0, 1487.0], [42.1, 1487.0], [42.2, 1487.0], [42.3, 1487.0], [42.4, 1487.0], [42.5, 1487.0], [42.6, 1487.0], [42.7, 1487.0], [42.8, 1487.0], [42.9, 1487.0], [43.0, 1487.0], [43.1, 1487.0], [43.2, 1487.0], [43.3, 1487.0], [43.4, 1487.0], [43.5, 1487.0], [43.6, 1487.0], [43.7, 1487.0], [43.8, 1496.0], [43.9, 1496.0], [44.0, 1496.0], [44.1, 1496.0], [44.2, 1496.0], [44.3, 1496.0], [44.4, 1498.0], [44.5, 1498.0], [44.6, 1498.0], [44.7, 1498.0], [44.8, 1498.0], [44.9, 1498.0], [45.0, 1502.0], [45.1, 1502.0], [45.2, 1502.0], [45.3, 1502.0], [45.4, 1502.0], [45.5, 1502.0], [45.6, 1502.0], [45.7, 1514.0], [45.8, 1514.0], [45.9, 1514.0], [46.0, 1514.0], [46.1, 1514.0], [46.2, 1514.0], [46.3, 1516.0], [46.4, 1516.0], [46.5, 1516.0], [46.6, 1516.0], [46.7, 1516.0], [46.8, 1516.0], [46.9, 1525.0], [47.0, 1525.0], [47.1, 1525.0], [47.2, 1525.0], [47.3, 1525.0], [47.4, 1525.0], [47.5, 1534.0], [47.6, 1534.0], [47.7, 1534.0], [47.8, 1534.0], [47.9, 1534.0], [48.0, 1534.0], [48.1, 1534.0], [48.2, 1534.0], [48.3, 1534.0], [48.4, 1534.0], [48.5, 1534.0], [48.6, 1534.0], [48.7, 1534.0], [48.8, 1540.0], [48.9, 1540.0], [49.0, 1540.0], [49.1, 1540.0], [49.2, 1540.0], [49.3, 1540.0], [49.4, 1558.0], [49.5, 1558.0], [49.6, 1558.0], [49.7, 1558.0], [49.8, 1558.0], [49.9, 1558.0], [50.0, 1565.0], [50.1, 1565.0], [50.2, 1565.0], [50.3, 1565.0], [50.4, 1565.0], [50.5, 1565.0], [50.6, 1565.0], [50.7, 1575.0], [50.8, 1575.0], [50.9, 1575.0], [51.0, 1575.0], [51.1, 1575.0], [51.2, 1575.0], [51.3, 1577.0], [51.4, 1577.0], [51.5, 1577.0], [51.6, 1577.0], [51.7, 1577.0], [51.8, 1577.0], [51.9, 1580.0], [52.0, 1580.0], [52.1, 1580.0], [52.2, 1580.0], [52.3, 1580.0], [52.4, 1580.0], [52.5, 1589.0], [52.6, 1589.0], [52.7, 1589.0], [52.8, 1589.0], [52.9, 1589.0], [53.0, 1589.0], [53.1, 1589.0], [53.2, 1591.0], [53.3, 1591.0], [53.4, 1591.0], [53.5, 1591.0], [53.6, 1591.0], [53.7, 1591.0], [53.8, 1591.0], [53.9, 1591.0], [54.0, 1591.0], [54.1, 1591.0], [54.2, 1591.0], [54.3, 1591.0], [54.4, 1600.0], [54.5, 1600.0], [54.6, 1600.0], [54.7, 1600.0], [54.8, 1600.0], [54.9, 1600.0], [55.0, 1624.0], [55.1, 1624.0], [55.2, 1624.0], [55.3, 1624.0], [55.4, 1624.0], [55.5, 1624.0], [55.6, 1624.0], [55.7, 1631.0], [55.8, 1631.0], [55.9, 1631.0], [56.0, 1631.0], [56.1, 1631.0], [56.2, 1631.0], [56.3, 1643.0], [56.4, 1643.0], [56.5, 1643.0], [56.6, 1643.0], [56.7, 1643.0], [56.8, 1643.0], [56.9, 1660.0], [57.0, 1660.0], [57.1, 1660.0], [57.2, 1660.0], [57.3, 1660.0], [57.4, 1660.0], [57.5, 1661.0], [57.6, 1661.0], [57.7, 1661.0], [57.8, 1661.0], [57.9, 1661.0], [58.0, 1661.0], [58.1, 1661.0], [58.2, 1664.0], [58.3, 1664.0], [58.4, 1664.0], [58.5, 1664.0], [58.6, 1664.0], [58.7, 1664.0], [58.8, 1679.0], [58.9, 1679.0], [59.0, 1679.0], [59.1, 1679.0], [59.2, 1679.0], [59.3, 1679.0], [59.4, 1685.0], [59.5, 1685.0], [59.6, 1685.0], [59.7, 1685.0], [59.8, 1685.0], [59.9, 1685.0], [60.0, 1690.0], [60.1, 1690.0], [60.2, 1690.0], [60.3, 1690.0], [60.4, 1690.0], [60.5, 1690.0], [60.6, 1690.0], [60.7, 1697.0], [60.8, 1697.0], [60.9, 1697.0], [61.0, 1697.0], [61.1, 1697.0], [61.2, 1697.0], [61.3, 1702.0], [61.4, 1702.0], [61.5, 1702.0], [61.6, 1702.0], [61.7, 1702.0], [61.8, 1702.0], [61.9, 1710.0], [62.0, 1710.0], [62.1, 1710.0], [62.2, 1710.0], [62.3, 1710.0], [62.4, 1710.0], [62.5, 1713.0], [62.6, 1713.0], [62.7, 1713.0], [62.8, 1713.0], [62.9, 1713.0], [63.0, 1713.0], [63.1, 1713.0], [63.2, 1715.0], [63.3, 1715.0], [63.4, 1715.0], [63.5, 1715.0], [63.6, 1715.0], [63.7, 1715.0], [63.8, 1719.0], [63.9, 1719.0], [64.0, 1719.0], [64.1, 1719.0], [64.2, 1719.0], [64.3, 1719.0], [64.4, 1721.0], [64.5, 1721.0], [64.6, 1721.0], [64.7, 1721.0], [64.8, 1721.0], [64.9, 1721.0], [65.0, 1727.0], [65.1, 1727.0], [65.2, 1727.0], [65.3, 1727.0], [65.4, 1727.0], [65.5, 1727.0], [65.6, 1727.0], [65.7, 1728.0], [65.8, 1728.0], [65.9, 1728.0], [66.0, 1728.0], [66.1, 1728.0], [66.2, 1728.0], [66.3, 1736.0], [66.4, 1736.0], [66.5, 1736.0], [66.6, 1736.0], [66.7, 1736.0], [66.8, 1736.0], [66.9, 1740.0], [67.0, 1740.0], [67.1, 1740.0], [67.2, 1740.0], [67.3, 1740.0], [67.4, 1740.0], [67.5, 1747.0], [67.6, 1747.0], [67.7, 1747.0], [67.8, 1747.0], [67.9, 1747.0], [68.0, 1747.0], [68.1, 1747.0], [68.2, 1760.0], [68.3, 1760.0], [68.4, 1760.0], [68.5, 1760.0], [68.6, 1760.0], [68.7, 1760.0], [68.8, 1761.0], [68.9, 1761.0], [69.0, 1761.0], [69.1, 1761.0], [69.2, 1761.0], [69.3, 1761.0], [69.4, 1785.0], [69.5, 1785.0], [69.6, 1785.0], [69.7, 1785.0], [69.8, 1785.0], [69.9, 1785.0], [70.0, 1785.0], [70.1, 1785.0], [70.2, 1785.0], [70.3, 1785.0], [70.4, 1785.0], [70.5, 1785.0], [70.6, 1785.0], [70.7, 1820.0], [70.8, 1820.0], [70.9, 1820.0], [71.0, 1820.0], [71.1, 1820.0], [71.2, 1820.0], [71.3, 1848.0], [71.4, 1848.0], [71.5, 1848.0], [71.6, 1848.0], [71.7, 1848.0], [71.8, 1848.0], [71.9, 1866.0], [72.0, 1866.0], [72.1, 1866.0], [72.2, 1866.0], [72.3, 1866.0], [72.4, 1866.0], [72.5, 1878.0], [72.6, 1878.0], [72.7, 1878.0], [72.8, 1878.0], [72.9, 1878.0], [73.0, 1878.0], [73.1, 1878.0], [73.2, 1883.0], [73.3, 1883.0], [73.4, 1883.0], [73.5, 1883.0], [73.6, 1883.0], [73.7, 1883.0], [73.8, 1886.0], [73.9, 1886.0], [74.0, 1886.0], [74.1, 1886.0], [74.2, 1886.0], [74.3, 1886.0], [74.4, 1887.0], [74.5, 1887.0], [74.6, 1887.0], [74.7, 1887.0], [74.8, 1887.0], [74.9, 1887.0], [75.0, 1902.0], [75.1, 1902.0], [75.2, 1902.0], [75.3, 1902.0], [75.4, 1902.0], [75.5, 1902.0], [75.6, 1902.0], [75.7, 1909.0], [75.8, 1909.0], [75.9, 1909.0], [76.0, 1909.0], [76.1, 1909.0], [76.2, 1909.0], [76.3, 1911.0], [76.4, 1911.0], [76.5, 1911.0], [76.6, 1911.0], [76.7, 1911.0], [76.8, 1911.0], [76.9, 1922.0], [77.0, 1922.0], [77.1, 1922.0], [77.2, 1922.0], [77.3, 1922.0], [77.4, 1922.0], [77.5, 1941.0], [77.6, 1941.0], [77.7, 1941.0], [77.8, 1941.0], [77.9, 1941.0], [78.0, 1941.0], [78.1, 1941.0], [78.2, 1988.0], [78.3, 1988.0], [78.4, 1988.0], [78.5, 1988.0], [78.6, 1988.0], [78.7, 1988.0], [78.8, 1990.0], [78.9, 1990.0], [79.0, 1990.0], [79.1, 1990.0], [79.2, 1990.0], [79.3, 1990.0], [79.4, 2000.0], [79.5, 2000.0], [79.6, 2000.0], [79.7, 2000.0], [79.8, 2000.0], [79.9, 2000.0], [80.0, 2003.0], [80.1, 2003.0], [80.2, 2003.0], [80.3, 2003.0], [80.4, 2003.0], [80.5, 2003.0], [80.6, 2003.0], [80.7, 2034.0], [80.8, 2034.0], [80.9, 2034.0], [81.0, 2034.0], [81.1, 2034.0], [81.2, 2034.0], [81.3, 2064.0], [81.4, 2064.0], [81.5, 2064.0], [81.6, 2064.0], [81.7, 2064.0], [81.8, 2064.0], [81.9, 2092.0], [82.0, 2092.0], [82.1, 2092.0], [82.2, 2092.0], [82.3, 2092.0], [82.4, 2092.0], [82.5, 2166.0], [82.6, 2166.0], [82.7, 2166.0], [82.8, 2166.0], [82.9, 2166.0], [83.0, 2166.0], [83.1, 2166.0], [83.2, 2207.0], [83.3, 2207.0], [83.4, 2207.0], [83.5, 2207.0], [83.6, 2207.0], [83.7, 2207.0], [83.8, 2218.0], [83.9, 2218.0], [84.0, 2218.0], [84.1, 2218.0], [84.2, 2218.0], [84.3, 2218.0], [84.4, 2231.0], [84.5, 2231.0], [84.6, 2231.0], [84.7, 2231.0], [84.8, 2231.0], [84.9, 2231.0], [85.0, 2308.0], [85.1, 2308.0], [85.2, 2308.0], [85.3, 2308.0], [85.4, 2308.0], [85.5, 2308.0], [85.6, 2308.0], [85.7, 2322.0], [85.8, 2322.0], [85.9, 2322.0], [86.0, 2322.0], [86.1, 2322.0], [86.2, 2322.0], [86.3, 2325.0], [86.4, 2325.0], [86.5, 2325.0], [86.6, 2325.0], [86.7, 2325.0], [86.8, 2325.0], [86.9, 2328.0], [87.0, 2328.0], [87.1, 2328.0], [87.2, 2328.0], [87.3, 2328.0], [87.4, 2328.0], [87.5, 2338.0], [87.6, 2338.0], [87.7, 2338.0], [87.8, 2338.0], [87.9, 2338.0], [88.0, 2338.0], [88.1, 2338.0], [88.2, 2371.0], [88.3, 2371.0], [88.4, 2371.0], [88.5, 2371.0], [88.6, 2371.0], [88.7, 2371.0], [88.8, 2397.0], [88.9, 2397.0], [89.0, 2397.0], [89.1, 2397.0], [89.2, 2397.0], [89.3, 2397.0], [89.4, 2475.0], [89.5, 2475.0], [89.6, 2475.0], [89.7, 2475.0], [89.8, 2475.0], [89.9, 2475.0], [90.0, 2526.0], [90.1, 2526.0], [90.2, 2526.0], [90.3, 2526.0], [90.4, 2526.0], [90.5, 2526.0], [90.6, 2526.0], [90.7, 2531.0], [90.8, 2531.0], [90.9, 2531.0], [91.0, 2531.0], [91.1, 2531.0], [91.2, 2531.0], [91.3, 2534.0], [91.4, 2534.0], [91.5, 2534.0], [91.6, 2534.0], [91.7, 2534.0], [91.8, 2534.0], [91.9, 2557.0], [92.0, 2557.0], [92.1, 2557.0], [92.2, 2557.0], [92.3, 2557.0], [92.4, 2557.0], [92.5, 2592.0], [92.6, 2592.0], [92.7, 2592.0], [92.8, 2592.0], [92.9, 2592.0], [93.0, 2592.0], [93.1, 2592.0], [93.2, 2640.0], [93.3, 2640.0], [93.4, 2640.0], [93.5, 2640.0], [93.6, 2640.0], [93.7, 2640.0], [93.8, 2648.0], [93.9, 2648.0], [94.0, 2648.0], [94.1, 2648.0], [94.2, 2648.0], [94.3, 2648.0], [94.4, 2656.0], [94.5, 2656.0], [94.6, 2656.0], [94.7, 2656.0], [94.8, 2656.0], [94.9, 2656.0], [95.0, 2681.0], [95.1, 2681.0], [95.2, 2681.0], [95.3, 2681.0], [95.4, 2681.0], [95.5, 2681.0], [95.6, 2681.0], [95.7, 2755.0], [95.8, 2755.0], [95.9, 2755.0], [96.0, 2755.0], [96.1, 2755.0], [96.2, 2755.0], [96.3, 2779.0], [96.4, 2779.0], [96.5, 2779.0], [96.6, 2779.0], [96.7, 2779.0], [96.8, 2779.0], [96.9, 2780.0], [97.0, 2780.0], [97.1, 2780.0], [97.2, 2780.0], [97.3, 2780.0], [97.4, 2780.0], [97.5, 2787.0], [97.6, 2787.0], [97.7, 2787.0], [97.8, 2787.0], [97.9, 2787.0], [98.0, 2787.0], [98.1, 2787.0], [98.2, 2796.0], [98.3, 2796.0], [98.4, 2796.0], [98.5, 2796.0], [98.6, 2796.0], [98.7, 2796.0], [98.8, 2833.0], [98.9, 2833.0], [99.0, 2833.0], [99.1, 2833.0], [99.2, 2833.0], [99.3, 2833.0], [99.4, 2850.0], [99.5, 2850.0], [99.6, 2850.0], [99.7, 2850.0], [99.8, 2850.0], [99.9, 2850.0]], "isOverall": false, "label": "HTTP Request - enroll", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 400.0, "maxY": 24.0, "series": [{"data": [[2100.0, 1.0], [2200.0, 3.0], [2300.0, 7.0], [2400.0, 1.0], [600.0, 1.0], [2500.0, 5.0], [2600.0, 4.0], [2700.0, 5.0], [2800.0, 2.0], [700.0, 1.0], [900.0, 4.0], [1000.0, 10.0], [1100.0, 10.0], [1200.0, 11.0], [1300.0, 8.0], [1400.0, 24.0], [1500.0, 15.0], [1600.0, 11.0], [400.0, 3.0], [1700.0, 15.0], [1800.0, 7.0], [1900.0, 7.0], [2000.0, 5.0]], "isOverall": false, "label": "HTTP Request - enroll", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 3.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 88.0, "series": [{"data": [[0.0, 3.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 69.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 88.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 28.60625, "minX": 1.74541758E12, "maxY": 28.60625, "series": [{"data": [[1.74541758E12, 28.60625]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74541758E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 420.5, "minX": 2.0, "maxY": 1781.4180327868844, "series": [{"data": [[32.0, 1781.4180327868844], [2.0, 420.5], [3.0, 473.0], [4.0, 774.0], [5.0, 617.0], [6.0, 1112.0], [7.0, 1035.0], [9.0, 1019.5], [10.0, 940.0], [11.0, 943.0], [12.0, 1053.0], [13.0, 1421.0], [14.0, 1534.0], [15.0, 1405.0], [16.0, 1244.0], [17.0, 1037.0], [18.0, 1139.0], [19.0, 1384.0], [20.0, 1324.5], [21.0, 1445.0], [22.0, 1416.0], [23.0, 1481.0], [24.0, 1575.0], [25.0, 1039.0], [26.0, 1661.0], [27.0, 1658.0], [28.0, 1185.0], [29.0, 1415.0], [30.0, 1052.0], [31.0, 1456.6666666666667]], "isOverall": false, "label": "HTTP Request - enroll", "isController": false}, {"data": [[28.60625, 1643.0062499999995]], "isOverall": false, "label": "HTTP Request - enroll-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 32.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2195.8333333333335, "minX": 1.74541758E12, "maxY": 7466.35, "series": [{"data": [[1.74541758E12, 7466.35]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.74541758E12, 2195.8333333333335]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74541758E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1643.0062499999995, "minX": 1.74541758E12, "maxY": 1643.0062499999995, "series": [{"data": [[1.74541758E12, 1643.0062499999995]], "isOverall": false, "label": "HTTP Request - enroll", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74541758E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1642.9750000000001, "minX": 1.74541758E12, "maxY": 1642.9750000000001, "series": [{"data": [[1.74541758E12, 1642.9750000000001]], "isOverall": false, "label": "HTTP Request - enroll", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74541758E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 156.84375, "minX": 1.74541758E12, "maxY": 156.84375, "series": [{"data": [[1.74541758E12, 156.84375]], "isOverall": false, "label": "HTTP Request - enroll", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74541758E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 420.0, "minX": 1.74541758E12, "maxY": 2850.0, "series": [{"data": [[1.74541758E12, 2850.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.74541758E12, 2520.9]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.74541758E12, 2839.6299999999997]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.74541758E12, 2679.7499999999995]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.74541758E12, 420.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.74541758E12, 1561.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74541758E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 1125.5, "minX": 8.0, "maxY": 2557.0, "series": [{"data": [[8.0, 1898.0], [17.0, 1487.0], [18.0, 1641.0], [20.0, 1486.0], [22.0, 1570.0], [24.0, 1551.5], [25.0, 2557.0], [26.0, 1125.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 26.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 1125.5, "minX": 8.0, "maxY": 2557.0, "series": [{"data": [[8.0, 1898.0], [17.0, 1487.0], [18.0, 1641.0], [20.0, 1486.0], [22.0, 1570.0], [24.0, 1551.5], [25.0, 2557.0], [26.0, 1125.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 26.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.6666666666666665, "minX": 1.74541758E12, "maxY": 2.6666666666666665, "series": [{"data": [[1.74541758E12, 2.6666666666666665]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74541758E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 2.6666666666666665, "minX": 1.74541758E12, "maxY": 2.6666666666666665, "series": [{"data": [[1.74541758E12, 2.6666666666666665]], "isOverall": false, "label": "201", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74541758E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 2.6666666666666665, "minX": 1.74541758E12, "maxY": 2.6666666666666665, "series": [{"data": [[1.74541758E12, 2.6666666666666665]], "isOverall": false, "label": "HTTP Request - enroll-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74541758E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 2.6666666666666665, "minX": 1.74541758E12, "maxY": 2.6666666666666665, "series": [{"data": [[1.74541758E12, 2.6666666666666665]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74541758E12, "title": "Total Transactions Per Second"}},
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

