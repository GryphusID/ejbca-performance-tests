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
        data: {"result": {"minY": 449.0, "minX": 0.0, "maxY": 3481.0, "series": [{"data": [[0.0, 449.0], [0.1, 646.0], [0.2, 929.0], [0.3, 1149.0], [0.4, 1222.0], [0.5, 1281.0], [0.6, 1300.0], [0.7, 1328.0], [0.8, 1350.0], [0.9, 1367.0], [1.0, 1382.0], [1.1, 1400.0], [1.2, 1414.0], [1.3, 1424.0], [1.4, 1439.0], [1.5, 1448.0], [1.6, 1456.0], [1.7, 1467.0], [1.8, 1476.0], [1.9, 1485.0], [2.0, 1493.0], [2.1, 1500.0], [2.2, 1507.0], [2.3, 1512.0], [2.4, 1518.0], [2.5, 1525.0], [2.6, 1532.0], [2.7, 1541.0], [2.8, 1548.0], [2.9, 1556.0], [3.0, 1562.0], [3.1, 1567.0], [3.2, 1574.0], [3.3, 1580.0], [3.4, 1586.0], [3.5, 1595.0], [3.6, 1599.0], [3.7, 1605.0], [3.8, 1611.0], [3.9, 1615.0], [4.0, 1619.0], [4.1, 1625.0], [4.2, 1628.0], [4.3, 1631.0], [4.4, 1634.0], [4.5, 1638.0], [4.6, 1642.0], [4.7, 1645.0], [4.8, 1650.0], [4.9, 1655.0], [5.0, 1659.0], [5.1, 1662.0], [5.2, 1666.0], [5.3, 1669.0], [5.4, 1672.0], [5.5, 1675.0], [5.6, 1678.0], [5.7, 1681.0], [5.8, 1684.0], [5.9, 1687.0], [6.0, 1689.0], [6.1, 1692.0], [6.2, 1697.0], [6.3, 1700.0], [6.4, 1704.0], [6.5, 1707.0], [6.6, 1710.0], [6.7, 1712.0], [6.8, 1715.0], [6.9, 1719.0], [7.0, 1721.0], [7.1, 1723.0], [7.2, 1724.0], [7.3, 1727.0], [7.4, 1729.0], [7.5, 1732.0], [7.6, 1734.0], [7.7, 1736.0], [7.8, 1738.0], [7.9, 1740.0], [8.0, 1743.0], [8.1, 1745.0], [8.2, 1748.0], [8.3, 1750.0], [8.4, 1753.0], [8.5, 1755.0], [8.6, 1757.0], [8.7, 1760.0], [8.8, 1761.0], [8.9, 1764.0], [9.0, 1766.0], [9.1, 1767.0], [9.2, 1769.0], [9.3, 1771.0], [9.4, 1774.0], [9.5, 1776.0], [9.6, 1777.0], [9.7, 1779.0], [9.8, 1781.0], [9.9, 1782.0], [10.0, 1785.0], [10.1, 1787.0], [10.2, 1789.0], [10.3, 1791.0], [10.4, 1792.0], [10.5, 1794.0], [10.6, 1796.0], [10.7, 1798.0], [10.8, 1799.0], [10.9, 1801.0], [11.0, 1803.0], [11.1, 1804.0], [11.2, 1806.0], [11.3, 1808.0], [11.4, 1810.0], [11.5, 1812.0], [11.6, 1814.0], [11.7, 1816.0], [11.8, 1818.0], [11.9, 1820.0], [12.0, 1822.0], [12.1, 1823.0], [12.2, 1826.0], [12.3, 1828.0], [12.4, 1829.0], [12.5, 1831.0], [12.6, 1833.0], [12.7, 1834.0], [12.8, 1835.0], [12.9, 1837.0], [13.0, 1839.0], [13.1, 1840.0], [13.2, 1842.0], [13.3, 1843.0], [13.4, 1844.0], [13.5, 1845.0], [13.6, 1846.0], [13.7, 1848.0], [13.8, 1850.0], [13.9, 1852.0], [14.0, 1854.0], [14.1, 1856.0], [14.2, 1857.0], [14.3, 1858.0], [14.4, 1860.0], [14.5, 1861.0], [14.6, 1862.0], [14.7, 1864.0], [14.8, 1865.0], [14.9, 1867.0], [15.0, 1868.0], [15.1, 1869.0], [15.2, 1871.0], [15.3, 1872.0], [15.4, 1873.0], [15.5, 1875.0], [15.6, 1876.0], [15.7, 1877.0], [15.8, 1879.0], [15.9, 1880.0], [16.0, 1882.0], [16.1, 1884.0], [16.2, 1886.0], [16.3, 1887.0], [16.4, 1888.0], [16.5, 1890.0], [16.6, 1891.0], [16.7, 1892.0], [16.8, 1893.0], [16.9, 1895.0], [17.0, 1896.0], [17.1, 1897.0], [17.2, 1898.0], [17.3, 1899.0], [17.4, 1900.0], [17.5, 1901.0], [17.6, 1902.0], [17.7, 1903.0], [17.8, 1905.0], [17.9, 1906.0], [18.0, 1907.0], [18.1, 1908.0], [18.2, 1910.0], [18.3, 1911.0], [18.4, 1912.0], [18.5, 1913.0], [18.6, 1915.0], [18.7, 1916.0], [18.8, 1918.0], [18.9, 1919.0], [19.0, 1920.0], [19.1, 1922.0], [19.2, 1922.0], [19.3, 1924.0], [19.4, 1925.0], [19.5, 1927.0], [19.6, 1927.0], [19.7, 1929.0], [19.8, 1929.0], [19.9, 1930.0], [20.0, 1931.0], [20.1, 1932.0], [20.2, 1933.0], [20.3, 1934.0], [20.4, 1935.0], [20.5, 1935.0], [20.6, 1937.0], [20.7, 1938.0], [20.8, 1939.0], [20.9, 1939.0], [21.0, 1940.0], [21.1, 1941.0], [21.2, 1942.0], [21.3, 1943.0], [21.4, 1944.0], [21.5, 1945.0], [21.6, 1946.0], [21.7, 1947.0], [21.8, 1948.0], [21.9, 1950.0], [22.0, 1951.0], [22.1, 1952.0], [22.2, 1952.0], [22.3, 1954.0], [22.4, 1954.0], [22.5, 1956.0], [22.6, 1957.0], [22.7, 1958.0], [22.8, 1959.0], [22.9, 1960.0], [23.0, 1961.0], [23.1, 1962.0], [23.2, 1963.0], [23.3, 1964.0], [23.4, 1965.0], [23.5, 1966.0], [23.6, 1967.0], [23.7, 1968.0], [23.8, 1969.0], [23.9, 1971.0], [24.0, 1971.0], [24.1, 1972.0], [24.2, 1973.0], [24.3, 1975.0], [24.4, 1975.0], [24.5, 1977.0], [24.6, 1978.0], [24.7, 1979.0], [24.8, 1980.0], [24.9, 1981.0], [25.0, 1982.0], [25.1, 1984.0], [25.2, 1985.0], [25.3, 1986.0], [25.4, 1987.0], [25.5, 1988.0], [25.6, 1989.0], [25.7, 1990.0], [25.8, 1991.0], [25.9, 1992.0], [26.0, 1993.0], [26.1, 1993.0], [26.2, 1994.0], [26.3, 1995.0], [26.4, 1996.0], [26.5, 1997.0], [26.6, 1998.0], [26.7, 1999.0], [26.8, 2000.0], [26.9, 2001.0], [27.0, 2002.0], [27.1, 2003.0], [27.2, 2005.0], [27.3, 2005.0], [27.4, 2006.0], [27.5, 2007.0], [27.6, 2008.0], [27.7, 2010.0], [27.8, 2010.0], [27.9, 2011.0], [28.0, 2012.0], [28.1, 2013.0], [28.2, 2013.0], [28.3, 2015.0], [28.4, 2016.0], [28.5, 2017.0], [28.6, 2018.0], [28.7, 2019.0], [28.8, 2020.0], [28.9, 2021.0], [29.0, 2022.0], [29.1, 2023.0], [29.2, 2024.0], [29.3, 2025.0], [29.4, 2026.0], [29.5, 2027.0], [29.6, 2028.0], [29.7, 2028.0], [29.8, 2029.0], [29.9, 2030.0], [30.0, 2031.0], [30.1, 2032.0], [30.2, 2032.0], [30.3, 2033.0], [30.4, 2034.0], [30.5, 2035.0], [30.6, 2036.0], [30.7, 2037.0], [30.8, 2038.0], [30.9, 2039.0], [31.0, 2041.0], [31.1, 2042.0], [31.2, 2042.0], [31.3, 2043.0], [31.4, 2044.0], [31.5, 2045.0], [31.6, 2046.0], [31.7, 2047.0], [31.8, 2048.0], [31.9, 2049.0], [32.0, 2049.0], [32.1, 2050.0], [32.2, 2051.0], [32.3, 2052.0], [32.4, 2053.0], [32.5, 2054.0], [32.6, 2054.0], [32.7, 2055.0], [32.8, 2056.0], [32.9, 2057.0], [33.0, 2057.0], [33.1, 2059.0], [33.2, 2059.0], [33.3, 2060.0], [33.4, 2061.0], [33.5, 2061.0], [33.6, 2062.0], [33.7, 2063.0], [33.8, 2064.0], [33.9, 2065.0], [34.0, 2066.0], [34.1, 2067.0], [34.2, 2067.0], [34.3, 2068.0], [34.4, 2069.0], [34.5, 2070.0], [34.6, 2071.0], [34.7, 2072.0], [34.8, 2073.0], [34.9, 2074.0], [35.0, 2075.0], [35.1, 2075.0], [35.2, 2077.0], [35.3, 2077.0], [35.4, 2078.0], [35.5, 2079.0], [35.6, 2080.0], [35.7, 2081.0], [35.8, 2082.0], [35.9, 2083.0], [36.0, 2084.0], [36.1, 2085.0], [36.2, 2086.0], [36.3, 2086.0], [36.4, 2087.0], [36.5, 2088.0], [36.6, 2089.0], [36.7, 2089.0], [36.8, 2090.0], [36.9, 2091.0], [37.0, 2092.0], [37.1, 2093.0], [37.2, 2094.0], [37.3, 2094.0], [37.4, 2095.0], [37.5, 2096.0], [37.6, 2097.0], [37.7, 2098.0], [37.8, 2099.0], [37.9, 2099.0], [38.0, 2100.0], [38.1, 2101.0], [38.2, 2102.0], [38.3, 2103.0], [38.4, 2104.0], [38.5, 2104.0], [38.6, 2105.0], [38.7, 2106.0], [38.8, 2106.0], [38.9, 2107.0], [39.0, 2108.0], [39.1, 2109.0], [39.2, 2109.0], [39.3, 2110.0], [39.4, 2111.0], [39.5, 2111.0], [39.6, 2112.0], [39.7, 2112.0], [39.8, 2113.0], [39.9, 2114.0], [40.0, 2115.0], [40.1, 2116.0], [40.2, 2116.0], [40.3, 2117.0], [40.4, 2118.0], [40.5, 2119.0], [40.6, 2119.0], [40.7, 2120.0], [40.8, 2121.0], [40.9, 2122.0], [41.0, 2122.0], [41.1, 2123.0], [41.2, 2124.0], [41.3, 2125.0], [41.4, 2125.0], [41.5, 2126.0], [41.6, 2127.0], [41.7, 2128.0], [41.8, 2129.0], [41.9, 2130.0], [42.0, 2130.0], [42.1, 2131.0], [42.2, 2132.0], [42.3, 2133.0], [42.4, 2134.0], [42.5, 2135.0], [42.6, 2135.0], [42.7, 2136.0], [42.8, 2136.0], [42.9, 2137.0], [43.0, 2138.0], [43.1, 2138.0], [43.2, 2139.0], [43.3, 2139.0], [43.4, 2140.0], [43.5, 2141.0], [43.6, 2141.0], [43.7, 2142.0], [43.8, 2143.0], [43.9, 2144.0], [44.0, 2144.0], [44.1, 2145.0], [44.2, 2146.0], [44.3, 2147.0], [44.4, 2147.0], [44.5, 2148.0], [44.6, 2149.0], [44.7, 2150.0], [44.8, 2150.0], [44.9, 2151.0], [45.0, 2152.0], [45.1, 2153.0], [45.2, 2154.0], [45.3, 2154.0], [45.4, 2155.0], [45.5, 2156.0], [45.6, 2156.0], [45.7, 2157.0], [45.8, 2158.0], [45.9, 2158.0], [46.0, 2159.0], [46.1, 2160.0], [46.2, 2161.0], [46.3, 2161.0], [46.4, 2162.0], [46.5, 2163.0], [46.6, 2164.0], [46.7, 2165.0], [46.8, 2165.0], [46.9, 2166.0], [47.0, 2166.0], [47.1, 2167.0], [47.2, 2168.0], [47.3, 2169.0], [47.4, 2170.0], [47.5, 2170.0], [47.6, 2171.0], [47.7, 2172.0], [47.8, 2173.0], [47.9, 2173.0], [48.0, 2174.0], [48.1, 2174.0], [48.2, 2175.0], [48.3, 2176.0], [48.4, 2177.0], [48.5, 2178.0], [48.6, 2178.0], [48.7, 2179.0], [48.8, 2180.0], [48.9, 2181.0], [49.0, 2181.0], [49.1, 2182.0], [49.2, 2183.0], [49.3, 2184.0], [49.4, 2184.0], [49.5, 2185.0], [49.6, 2186.0], [49.7, 2187.0], [49.8, 2188.0], [49.9, 2188.0], [50.0, 2189.0], [50.1, 2190.0], [50.2, 2190.0], [50.3, 2191.0], [50.4, 2192.0], [50.5, 2192.0], [50.6, 2193.0], [50.7, 2194.0], [50.8, 2194.0], [50.9, 2195.0], [51.0, 2196.0], [51.1, 2197.0], [51.2, 2198.0], [51.3, 2198.0], [51.4, 2199.0], [51.5, 2200.0], [51.6, 2200.0], [51.7, 2201.0], [51.8, 2202.0], [51.9, 2203.0], [52.0, 2204.0], [52.1, 2204.0], [52.2, 2205.0], [52.3, 2206.0], [52.4, 2206.0], [52.5, 2207.0], [52.6, 2208.0], [52.7, 2209.0], [52.8, 2210.0], [52.9, 2210.0], [53.0, 2211.0], [53.1, 2212.0], [53.2, 2212.0], [53.3, 2213.0], [53.4, 2214.0], [53.5, 2215.0], [53.6, 2216.0], [53.7, 2217.0], [53.8, 2217.0], [53.9, 2218.0], [54.0, 2219.0], [54.1, 2220.0], [54.2, 2221.0], [54.3, 2222.0], [54.4, 2223.0], [54.5, 2223.0], [54.6, 2224.0], [54.7, 2225.0], [54.8, 2226.0], [54.9, 2226.0], [55.0, 2227.0], [55.1, 2228.0], [55.2, 2228.0], [55.3, 2229.0], [55.4, 2230.0], [55.5, 2231.0], [55.6, 2231.0], [55.7, 2232.0], [55.8, 2232.0], [55.9, 2233.0], [56.0, 2234.0], [56.1, 2235.0], [56.2, 2236.0], [56.3, 2236.0], [56.4, 2237.0], [56.5, 2238.0], [56.6, 2239.0], [56.7, 2240.0], [56.8, 2241.0], [56.9, 2242.0], [57.0, 2242.0], [57.1, 2243.0], [57.2, 2244.0], [57.3, 2244.0], [57.4, 2245.0], [57.5, 2246.0], [57.6, 2247.0], [57.7, 2247.0], [57.8, 2248.0], [57.9, 2248.0], [58.0, 2249.0], [58.1, 2250.0], [58.2, 2250.0], [58.3, 2251.0], [58.4, 2252.0], [58.5, 2252.0], [58.6, 2253.0], [58.7, 2255.0], [58.8, 2255.0], [58.9, 2256.0], [59.0, 2256.0], [59.1, 2258.0], [59.2, 2258.0], [59.3, 2259.0], [59.4, 2260.0], [59.5, 2260.0], [59.6, 2261.0], [59.7, 2262.0], [59.8, 2263.0], [59.9, 2263.0], [60.0, 2264.0], [60.1, 2265.0], [60.2, 2266.0], [60.3, 2266.0], [60.4, 2267.0], [60.5, 2268.0], [60.6, 2268.0], [60.7, 2269.0], [60.8, 2270.0], [60.9, 2271.0], [61.0, 2272.0], [61.1, 2273.0], [61.2, 2274.0], [61.3, 2274.0], [61.4, 2275.0], [61.5, 2276.0], [61.6, 2277.0], [61.7, 2277.0], [61.8, 2278.0], [61.9, 2279.0], [62.0, 2279.0], [62.1, 2280.0], [62.2, 2281.0], [62.3, 2282.0], [62.4, 2283.0], [62.5, 2284.0], [62.6, 2284.0], [62.7, 2285.0], [62.8, 2286.0], [62.9, 2287.0], [63.0, 2287.0], [63.1, 2288.0], [63.2, 2289.0], [63.3, 2289.0], [63.4, 2290.0], [63.5, 2291.0], [63.6, 2292.0], [63.7, 2293.0], [63.8, 2294.0], [63.9, 2295.0], [64.0, 2295.0], [64.1, 2296.0], [64.2, 2297.0], [64.3, 2298.0], [64.4, 2299.0], [64.5, 2300.0], [64.6, 2301.0], [64.7, 2301.0], [64.8, 2302.0], [64.9, 2303.0], [65.0, 2303.0], [65.1, 2304.0], [65.2, 2305.0], [65.3, 2305.0], [65.4, 2306.0], [65.5, 2308.0], [65.6, 2308.0], [65.7, 2309.0], [65.8, 2310.0], [65.9, 2311.0], [66.0, 2312.0], [66.1, 2314.0], [66.2, 2314.0], [66.3, 2315.0], [66.4, 2316.0], [66.5, 2316.0], [66.6, 2317.0], [66.7, 2318.0], [66.8, 2318.0], [66.9, 2319.0], [67.0, 2320.0], [67.1, 2320.0], [67.2, 2321.0], [67.3, 2322.0], [67.4, 2323.0], [67.5, 2323.0], [67.6, 2324.0], [67.7, 2325.0], [67.8, 2326.0], [67.9, 2327.0], [68.0, 2328.0], [68.1, 2329.0], [68.2, 2330.0], [68.3, 2330.0], [68.4, 2331.0], [68.5, 2332.0], [68.6, 2333.0], [68.7, 2334.0], [68.8, 2335.0], [68.9, 2336.0], [69.0, 2337.0], [69.1, 2338.0], [69.2, 2339.0], [69.3, 2339.0], [69.4, 2340.0], [69.5, 2341.0], [69.6, 2341.0], [69.7, 2342.0], [69.8, 2343.0], [69.9, 2343.0], [70.0, 2344.0], [70.1, 2345.0], [70.2, 2346.0], [70.3, 2347.0], [70.4, 2348.0], [70.5, 2348.0], [70.6, 2349.0], [70.7, 2350.0], [70.8, 2351.0], [70.9, 2351.0], [71.0, 2352.0], [71.1, 2353.0], [71.2, 2354.0], [71.3, 2354.0], [71.4, 2355.0], [71.5, 2356.0], [71.6, 2357.0], [71.7, 2358.0], [71.8, 2359.0], [71.9, 2360.0], [72.0, 2360.0], [72.1, 2361.0], [72.2, 2362.0], [72.3, 2362.0], [72.4, 2363.0], [72.5, 2364.0], [72.6, 2365.0], [72.7, 2366.0], [72.8, 2367.0], [72.9, 2368.0], [73.0, 2369.0], [73.1, 2369.0], [73.2, 2370.0], [73.3, 2371.0], [73.4, 2372.0], [73.5, 2373.0], [73.6, 2373.0], [73.7, 2374.0], [73.8, 2375.0], [73.9, 2376.0], [74.0, 2376.0], [74.1, 2377.0], [74.2, 2378.0], [74.3, 2379.0], [74.4, 2380.0], [74.5, 2382.0], [74.6, 2383.0], [74.7, 2384.0], [74.8, 2385.0], [74.9, 2386.0], [75.0, 2387.0], [75.1, 2388.0], [75.2, 2389.0], [75.3, 2390.0], [75.4, 2390.0], [75.5, 2391.0], [75.6, 2392.0], [75.7, 2393.0], [75.8, 2394.0], [75.9, 2394.0], [76.0, 2395.0], [76.1, 2396.0], [76.2, 2397.0], [76.3, 2398.0], [76.4, 2399.0], [76.5, 2400.0], [76.6, 2400.0], [76.7, 2401.0], [76.8, 2401.0], [76.9, 2402.0], [77.0, 2403.0], [77.1, 2404.0], [77.2, 2405.0], [77.3, 2406.0], [77.4, 2407.0], [77.5, 2408.0], [77.6, 2409.0], [77.7, 2410.0], [77.8, 2411.0], [77.9, 2412.0], [78.0, 2413.0], [78.1, 2414.0], [78.2, 2415.0], [78.3, 2416.0], [78.4, 2417.0], [78.5, 2418.0], [78.6, 2419.0], [78.7, 2420.0], [78.8, 2421.0], [78.9, 2421.0], [79.0, 2423.0], [79.1, 2423.0], [79.2, 2424.0], [79.3, 2425.0], [79.4, 2426.0], [79.5, 2427.0], [79.6, 2428.0], [79.7, 2430.0], [79.8, 2431.0], [79.9, 2432.0], [80.0, 2433.0], [80.1, 2434.0], [80.2, 2435.0], [80.3, 2436.0], [80.4, 2437.0], [80.5, 2438.0], [80.6, 2439.0], [80.7, 2440.0], [80.8, 2441.0], [80.9, 2442.0], [81.0, 2443.0], [81.1, 2445.0], [81.2, 2446.0], [81.3, 2447.0], [81.4, 2448.0], [81.5, 2449.0], [81.6, 2450.0], [81.7, 2451.0], [81.8, 2453.0], [81.9, 2453.0], [82.0, 2455.0], [82.1, 2456.0], [82.2, 2458.0], [82.3, 2459.0], [82.4, 2460.0], [82.5, 2461.0], [82.6, 2463.0], [82.7, 2464.0], [82.8, 2465.0], [82.9, 2466.0], [83.0, 2468.0], [83.1, 2469.0], [83.2, 2470.0], [83.3, 2472.0], [83.4, 2473.0], [83.5, 2474.0], [83.6, 2475.0], [83.7, 2476.0], [83.8, 2477.0], [83.9, 2479.0], [84.0, 2480.0], [84.1, 2481.0], [84.2, 2483.0], [84.3, 2485.0], [84.4, 2486.0], [84.5, 2487.0], [84.6, 2489.0], [84.7, 2491.0], [84.8, 2491.0], [84.9, 2492.0], [85.0, 2494.0], [85.1, 2495.0], [85.2, 2496.0], [85.3, 2497.0], [85.4, 2498.0], [85.5, 2499.0], [85.6, 2501.0], [85.7, 2502.0], [85.8, 2503.0], [85.9, 2504.0], [86.0, 2507.0], [86.1, 2508.0], [86.2, 2510.0], [86.3, 2511.0], [86.4, 2513.0], [86.5, 2514.0], [86.6, 2516.0], [86.7, 2517.0], [86.8, 2518.0], [86.9, 2519.0], [87.0, 2521.0], [87.1, 2522.0], [87.2, 2523.0], [87.3, 2525.0], [87.4, 2527.0], [87.5, 2528.0], [87.6, 2529.0], [87.7, 2531.0], [87.8, 2532.0], [87.9, 2533.0], [88.0, 2534.0], [88.1, 2536.0], [88.2, 2538.0], [88.3, 2539.0], [88.4, 2542.0], [88.5, 2544.0], [88.6, 2546.0], [88.7, 2547.0], [88.8, 2549.0], [88.9, 2550.0], [89.0, 2551.0], [89.1, 2553.0], [89.2, 2555.0], [89.3, 2556.0], [89.4, 2558.0], [89.5, 2559.0], [89.6, 2560.0], [89.7, 2562.0], [89.8, 2564.0], [89.9, 2565.0], [90.0, 2566.0], [90.1, 2568.0], [90.2, 2570.0], [90.3, 2572.0], [90.4, 2573.0], [90.5, 2575.0], [90.6, 2576.0], [90.7, 2578.0], [90.8, 2579.0], [90.9, 2581.0], [91.0, 2583.0], [91.1, 2587.0], [91.2, 2589.0], [91.3, 2592.0], [91.4, 2594.0], [91.5, 2596.0], [91.6, 2598.0], [91.7, 2600.0], [91.8, 2601.0], [91.9, 2603.0], [92.0, 2605.0], [92.1, 2608.0], [92.2, 2611.0], [92.3, 2612.0], [92.4, 2614.0], [92.5, 2616.0], [92.6, 2619.0], [92.7, 2621.0], [92.8, 2624.0], [92.9, 2627.0], [93.0, 2629.0], [93.1, 2632.0], [93.2, 2635.0], [93.3, 2638.0], [93.4, 2641.0], [93.5, 2643.0], [93.6, 2645.0], [93.7, 2648.0], [93.8, 2652.0], [93.9, 2655.0], [94.0, 2656.0], [94.1, 2660.0], [94.2, 2663.0], [94.3, 2667.0], [94.4, 2670.0], [94.5, 2673.0], [94.6, 2676.0], [94.7, 2678.0], [94.8, 2682.0], [94.9, 2685.0], [95.0, 2688.0], [95.1, 2693.0], [95.2, 2696.0], [95.3, 2700.0], [95.4, 2704.0], [95.5, 2709.0], [95.6, 2712.0], [95.7, 2716.0], [95.8, 2719.0], [95.9, 2722.0], [96.0, 2725.0], [96.1, 2728.0], [96.2, 2732.0], [96.3, 2739.0], [96.4, 2742.0], [96.5, 2746.0], [96.6, 2750.0], [96.7, 2754.0], [96.8, 2760.0], [96.9, 2765.0], [97.0, 2770.0], [97.1, 2777.0], [97.2, 2781.0], [97.3, 2786.0], [97.4, 2790.0], [97.5, 2798.0], [97.6, 2803.0], [97.7, 2808.0], [97.8, 2816.0], [97.9, 2824.0], [98.0, 2834.0], [98.1, 2841.0], [98.2, 2848.0], [98.3, 2856.0], [98.4, 2862.0], [98.5, 2873.0], [98.6, 2883.0], [98.7, 2892.0], [98.8, 2898.0], [98.9, 2909.0], [99.0, 2920.0], [99.1, 2929.0], [99.2, 2946.0], [99.3, 2963.0], [99.4, 2983.0], [99.5, 3007.0], [99.6, 3036.0], [99.7, 3064.0], [99.8, 3101.0], [99.9, 3171.0]], "isOverall": false, "label": "HTTP Request - enroll", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 2.0, "minX": 400.0, "maxY": 2162.0, "series": [{"data": [[600.0, 9.0], [700.0, 3.0], [800.0, 4.0], [900.0, 5.0], [1000.0, 9.0], [1100.0, 12.0], [1200.0, 39.0], [1300.0, 81.0], [1400.0, 158.0], [1500.0, 242.0], [1600.0, 429.0], [1700.0, 726.0], [1800.0, 1047.0], [1900.0, 1506.0], [2000.0, 1785.0], [2100.0, 2162.0], [2200.0, 2083.0], [2300.0, 1922.0], [2400.0, 1445.0], [2500.0, 988.0], [2600.0, 574.0], [2700.0, 359.0], [2800.0, 209.0], [2900.0, 105.0], [3000.0, 50.0], [3100.0, 21.0], [3300.0, 5.0], [3200.0, 6.0], [3400.0, 2.0], [400.0, 6.0], [500.0, 8.0]], "isOverall": false, "label": "HTTP Request - enroll", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 6.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 15664.0, "series": [{"data": [[0.0, 6.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 330.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 15664.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 28.92886456908345, "minX": 1.7460132E12, "maxY": 32.0, "series": [{"data": [[1.74601392E12, 32.0], [1.74601362E12, 32.0], [1.74601332E12, 32.0], [1.74601428E12, 28.92886456908345], [1.74601398E12, 32.0], [1.74601368E12, 32.0], [1.74601338E12, 32.0], [1.74601404E12, 32.0], [1.74601374E12, 32.0], [1.74601344E12, 32.0], [1.7460141E12, 32.0], [1.7460138E12, 32.0], [1.7460132E12, 32.0], [1.7460135E12, 32.0], [1.74601416E12, 32.0], [1.74601386E12, 32.0], [1.74601356E12, 32.0], [1.74601326E12, 32.0], [1.74601422E12, 32.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74601428E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 450.0, "minX": 1.0, "maxY": 2706.0, "series": [{"data": [[32.0, 2188.780247229874], [2.0, 473.6666666666667], [3.0, 509.0], [6.0, 537.3333333333334], [7.0, 581.0], [8.0, 666.3333333333334], [9.0, 653.0], [10.0, 798.0], [11.0, 968.2], [12.0, 1256.0], [13.0, 1082.0], [14.0, 1132.5], [15.0, 1076.3333333333333], [16.0, 1244.1428571428573], [1.0, 450.0], [17.0, 1319.6666666666667], [18.0, 1333.3000000000002], [19.0, 1414.0], [20.0, 1534.8333333333335], [21.0, 1643.6999999999998], [22.0, 1739.25], [23.0, 1618.0], [24.0, 2081.5], [25.0, 1816.6], [26.0, 2034.75], [27.0, 1941.6410256410259], [28.0, 2706.0], [29.0, 2192.75], [30.0, 2073.5073529411775], [31.0, 2161.0280373831783]], "isOverall": false, "label": "HTTP Request - enroll", "isController": false}, {"data": [[31.8596875, 2181.0768124999995]], "isOverall": false, "label": "HTTP Request - enroll-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 32.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 5301.466666666666, "minX": 1.7460132E12, "maxY": 46307.15, "series": [{"data": [[1.74601392E12, 45167.86666666667], [1.74601362E12, 45634.066666666666], [1.74601332E12, 45892.916666666664], [1.74601428E12, 37864.1], [1.74601398E12, 45478.45], [1.74601368E12, 46307.15], [1.74601338E12, 45685.26666666667], [1.74601404E12, 44908.933333333334], [1.74601374E12, 46048.01666666667], [1.74601344E12, 45219.25], [1.7460141E12, 44235.36666666667], [1.7460138E12, 45892.583333333336], [1.7460132E12, 18077.383333333335], [1.7460135E12, 45737.51666666667], [1.74601416E12, 44908.61666666667], [1.74601386E12, 45271.0], [1.74601356E12, 45478.45], [1.74601326E12, 45944.65], [1.74601422E12, 45012.38333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.74601392E12, 13246.166666666666], [1.74601362E12, 13382.9], [1.74601332E12, 13458.733333333334], [1.74601428E12, 11104.066666666668], [1.74601398E12, 13337.2], [1.74601368E12, 13580.4], [1.74601338E12, 13398.133333333333], [1.74601404E12, 13170.1], [1.74601374E12, 13504.633333333333], [1.74601344E12, 13261.433333333332], [1.7460141E12, 12972.766666666666], [1.7460138E12, 13458.666666666666], [1.7460132E12, 5301.466666666666], [1.7460135E12, 13413.166666666666], [1.74601416E12, 13170.1], [1.74601386E12, 13276.466666666667], [1.74601356E12, 13337.633333333333], [1.74601326E12, 13473.933333333332], [1.74601422E12, 13200.5]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74601428E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 2037.2407660738672, "minX": 1.7460132E12, "maxY": 2243.468384074945, "series": [{"data": [[1.74601392E12, 2194.6192660550437], [1.74601362E12, 2180.1838819523255], [1.74601332E12, 2162.20428893905], [1.74601428E12, 2037.2407660738672], [1.74601398E12, 2198.088838268794], [1.74601368E12, 2150.506711409397], [1.74601338E12, 2171.015873015876], [1.74601404E12, 2206.927335640138], [1.74601374E12, 2153.3217097862803], [1.74601344E12, 2205.9381443298944], [1.7460141E12, 2243.468384074945], [1.7460138E12, 2174.4119638826164], [1.7460132E12, 2220.5272206303707], [1.7460135E12, 2169.6545866364672], [1.74601416E12, 2216.773933102654], [1.74601386E12, 2192.6945080091496], [1.74601356E12, 2183.4943052391786], [1.74601326E12, 2166.3765501691105], [1.74601422E12, 2217.234752589182]], "isOverall": false, "label": "HTTP Request - enroll", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74601428E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 2037.2325581395337, "minX": 1.7460132E12, "maxY": 2243.461358313815, "series": [{"data": [[1.74601392E12, 2194.6100917431195], [1.74601362E12, 2180.1748013620877], [1.74601332E12, 2162.1704288939054], [1.74601428E12, 2037.2325581395337], [1.74601398E12, 2198.0831435079735], [1.74601368E12, 2150.4865771812074], [1.74601338E12, 2170.982993197282], [1.74601404E12, 2206.922722029991], [1.74601374E12, 2153.317210348706], [1.74601344E12, 2205.9175257731927], [1.7460141E12, 2243.461358313815], [1.7460138E12, 2174.404063205417], [1.7460132E12, 2220.469914040115], [1.7460135E12, 2169.6375990940023], [1.74601416E12, 2216.763552479818], [1.74601386E12, 2192.6887871853573], [1.74601356E12, 2183.479498861048], [1.74601326E12, 2166.3438556933465], [1.74601422E12, 2217.2220943613356]], "isOverall": false, "label": "HTTP Request - enroll", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74601428E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.7460132E12, "maxY": 48.83954154727796, "series": [{"data": [[1.74601392E12, 0.11697247706422016], [1.74601362E12, 0.17253121452894454], [1.74601332E12, 0.7302483069977421], [1.74601428E12, 0.0], [1.74601398E12, 0.11731207289293845], [1.74601368E12, 0.23489932885906037], [1.74601338E12, 0.20521541950113395], [1.74601404E12, 0.12456747404844287], [1.74601374E12, 0.11361079865016857], [1.74601344E12, 0.43298969072164933], [1.7460141E12, 0.1686182669789227], [1.7460138E12, 0.12076749435665914], [1.7460132E12, 48.83954154727796], [1.7460135E12, 0.17440543601359], [1.74601416E12, 0.1199538638985006], [1.74601386E12, 0.12242562929061779], [1.74601356E12, 0.296127562642369], [1.74601326E12, 0.25704622322435156], [1.74601422E12, 0.11967779056386652]], "isOverall": false, "label": "HTTP Request - enroll", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74601428E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 449.0, "minX": 1.7460132E12, "maxY": 3481.0, "series": [{"data": [[1.74601392E12, 3039.0], [1.74601362E12, 3121.0], [1.74601332E12, 2995.0], [1.74601428E12, 3036.0], [1.74601398E12, 3059.0], [1.74601368E12, 3069.0], [1.74601338E12, 3143.0], [1.74601404E12, 3025.0], [1.74601374E12, 3137.0], [1.74601344E12, 3171.0], [1.7460141E12, 3166.0], [1.7460138E12, 3291.0], [1.7460132E12, 3481.0], [1.7460135E12, 3162.0], [1.74601416E12, 3320.0], [1.74601386E12, 3170.0], [1.74601356E12, 3418.0], [1.74601326E12, 3203.0], [1.74601422E12, 3023.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.74601392E12, 2566.5], [1.74601362E12, 2583.2000000000007], [1.74601332E12, 2509.0], [1.74601428E12, 2539.0], [1.74601398E12, 2575.1], [1.74601368E12, 2529.0], [1.74601338E12, 2533.8], [1.74601404E12, 2570.0], [1.74601374E12, 2511.0], [1.74601344E12, 2609.0], [1.7460141E12, 2644.0], [1.7460138E12, 2578.2000000000003], [1.7460132E12, 2654.0], [1.7460135E12, 2527.0], [1.74601416E12, 2660.8], [1.74601386E12, 2578.0], [1.74601356E12, 2567.2], [1.74601326E12, 2566.2], [1.74601422E12, 2554.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.74601392E12, 2848.89], [1.74601362E12, 2979.6199999999994], [1.74601332E12, 2827.69], [1.74601428E12, 2912.879999999998], [1.74601398E12, 2914.84], [1.74601368E12, 2821.3999999999996], [1.74601338E12, 2829.0199999999995], [1.74601404E12, 2900.5199999999995], [1.74601374E12, 2779.7000000000003], [1.74601344E12, 2924.08], [1.7460141E12, 2941.3000000000006], [1.7460138E12, 2944.3], [1.7460132E12, 3328.5], [1.7460135E12, 3028.359999999999], [1.74601416E12, 3077.24], [1.74601386E12, 2869.5], [1.74601356E12, 2944.26], [1.74601326E12, 2968.24], [1.74601422E12, 2873.8999999999987]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.74601392E12, 2683.0499999999997], [1.74601362E12, 2688.0], [1.74601332E12, 2600.95], [1.74601428E12, 2674.0], [1.74601398E12, 2701.1499999999996], [1.74601368E12, 2617.75], [1.74601338E12, 2625.2499999999995], [1.74601404E12, 2647.2], [1.74601374E12, 2610.5], [1.74601344E12, 2714.0], [1.7460141E12, 2781.0], [1.7460138E12, 2711.65], [1.7460132E12, 2855.0], [1.7460135E12, 2719.8], [1.74601416E12, 2798.1999999999985], [1.74601386E12, 2669.5], [1.74601356E12, 2722.1], [1.74601326E12, 2723.2], [1.74601422E12, 2659.5]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.74601392E12, 1222.0], [1.74601362E12, 970.0], [1.74601332E12, 1305.0], [1.74601428E12, 449.0], [1.74601398E12, 1184.0], [1.74601368E12, 1080.0], [1.74601338E12, 1172.0], [1.74601404E12, 1348.0], [1.74601374E12, 1210.0], [1.74601344E12, 1174.0], [1.7460141E12, 1178.0], [1.7460138E12, 1318.0], [1.7460132E12, 1208.0], [1.7460135E12, 1129.0], [1.74601416E12, 1222.0], [1.74601386E12, 1254.0], [1.74601356E12, 1149.0], [1.74601326E12, 1135.0], [1.74601422E12, 1147.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.74601392E12, 2192.0], [1.74601362E12, 2179.0], [1.74601332E12, 2170.5], [1.74601428E12, 2114.0], [1.74601398E12, 2190.0], [1.74601368E12, 2157.5], [1.74601338E12, 2188.5], [1.74601404E12, 2208.0], [1.74601374E12, 2176.0], [1.74601344E12, 2209.0], [1.7460141E12, 2258.5], [1.7460138E12, 2167.0], [1.7460132E12, 2226.0], [1.7460135E12, 2173.0], [1.74601416E12, 2193.0], [1.74601386E12, 2195.0], [1.74601356E12, 2190.0], [1.74601326E12, 2167.0], [1.74601422E12, 2229.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74601428E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 459.0, "minX": 2.0, "maxY": 2864.0, "series": [{"data": [[8.0, 2163.5], [2.0, 1220.5], [9.0, 2169.0], [10.0, 2172.5], [11.0, 2191.0], [12.0, 2172.0], [3.0, 459.0], [13.0, 2185.5], [14.0, 2193.0], [15.0, 2197.5], [4.0, 1856.5], [16.0, 2190.0], [17.0, 2187.0], [18.0, 2187.0], [19.0, 2179.5], [20.0, 2197.0], [21.0, 2216.0], [22.0, 2199.5], [23.0, 2206.0], [6.0, 2119.5], [25.0, 2864.0], [7.0, 2061.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 25.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 459.0, "minX": 2.0, "maxY": 2864.0, "series": [{"data": [[8.0, 2163.5], [2.0, 1220.5], [9.0, 2169.0], [10.0, 2172.5], [11.0, 2191.0], [12.0, 2172.0], [3.0, 459.0], [13.0, 2185.5], [14.0, 2193.0], [15.0, 2197.5], [4.0, 1856.5], [16.0, 2190.0], [17.0, 2187.0], [18.0, 2187.0], [19.0, 2179.5], [20.0, 2197.0], [21.0, 2216.0], [22.0, 2199.5], [23.0, 2206.0], [6.0, 2119.5], [25.0, 2864.0], [7.0, 2061.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 25.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 6.35, "minX": 1.7460132E12, "maxY": 14.9, "series": [{"data": [[1.74601392E12, 14.533333333333333], [1.74601362E12, 14.683333333333334], [1.74601332E12, 14.75], [1.74601428E12, 11.65], [1.74601398E12, 14.633333333333333], [1.74601368E12, 14.9], [1.74601338E12, 14.716666666666667], [1.74601404E12, 14.45], [1.74601374E12, 14.816666666666666], [1.74601344E12, 14.55], [1.7460141E12, 14.233333333333333], [1.7460138E12, 14.766666666666667], [1.7460132E12, 6.35], [1.7460135E12, 14.716666666666667], [1.74601416E12, 14.45], [1.74601386E12, 14.566666666666666], [1.74601356E12, 14.633333333333333], [1.74601326E12, 14.783333333333333], [1.74601422E12, 14.483333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74601428E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 5.816666666666666, "minX": 1.7460132E12, "maxY": 14.9, "series": [{"data": [[1.74601392E12, 14.533333333333333], [1.74601362E12, 14.683333333333334], [1.74601332E12, 14.766666666666667], [1.74601428E12, 12.183333333333334], [1.74601398E12, 14.633333333333333], [1.74601368E12, 14.9], [1.74601338E12, 14.7], [1.74601404E12, 14.45], [1.74601374E12, 14.816666666666666], [1.74601344E12, 14.55], [1.7460141E12, 14.233333333333333], [1.7460138E12, 14.766666666666667], [1.7460132E12, 5.816666666666666], [1.7460135E12, 14.716666666666667], [1.74601416E12, 14.45], [1.74601386E12, 14.566666666666666], [1.74601356E12, 14.633333333333333], [1.74601326E12, 14.783333333333333], [1.74601422E12, 14.483333333333333]], "isOverall": false, "label": "201", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74601428E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 5.816666666666666, "minX": 1.7460132E12, "maxY": 14.9, "series": [{"data": [[1.74601392E12, 14.533333333333333], [1.74601362E12, 14.683333333333334], [1.74601332E12, 14.766666666666667], [1.74601428E12, 12.183333333333334], [1.74601398E12, 14.633333333333333], [1.74601368E12, 14.9], [1.74601338E12, 14.7], [1.74601404E12, 14.45], [1.74601374E12, 14.816666666666666], [1.74601344E12, 14.55], [1.7460141E12, 14.233333333333333], [1.7460138E12, 14.766666666666667], [1.7460132E12, 5.816666666666666], [1.7460135E12, 14.716666666666667], [1.74601416E12, 14.45], [1.74601386E12, 14.566666666666666], [1.74601356E12, 14.633333333333333], [1.74601326E12, 14.783333333333333], [1.74601422E12, 14.483333333333333]], "isOverall": false, "label": "HTTP Request - enroll-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74601428E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 5.816666666666666, "minX": 1.7460132E12, "maxY": 14.9, "series": [{"data": [[1.74601392E12, 14.533333333333333], [1.74601362E12, 14.683333333333334], [1.74601332E12, 14.766666666666667], [1.74601428E12, 12.183333333333334], [1.74601398E12, 14.633333333333333], [1.74601368E12, 14.9], [1.74601338E12, 14.7], [1.74601404E12, 14.45], [1.74601374E12, 14.816666666666666], [1.74601344E12, 14.55], [1.7460141E12, 14.233333333333333], [1.7460138E12, 14.766666666666667], [1.7460132E12, 5.816666666666666], [1.7460135E12, 14.716666666666667], [1.74601416E12, 14.45], [1.74601386E12, 14.566666666666666], [1.74601356E12, 14.633333333333333], [1.74601326E12, 14.783333333333333], [1.74601422E12, 14.483333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74601428E12, "title": "Total Transactions Per Second"}},
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

