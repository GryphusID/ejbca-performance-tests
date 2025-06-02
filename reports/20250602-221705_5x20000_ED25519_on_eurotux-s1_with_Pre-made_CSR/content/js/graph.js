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
        data: {"result": {"minY": 9.0, "minX": 0.0, "maxY": 361.0, "series": [{"data": [[0.0, 9.0], [0.1, 13.0], [0.2, 14.0], [0.3, 15.0], [0.4, 15.0], [0.5, 16.0], [0.6, 17.0], [0.7, 18.0], [0.8, 19.0], [0.9, 19.0], [1.0, 20.0], [1.1, 20.0], [1.2, 21.0], [1.3, 21.0], [1.4, 22.0], [1.5, 22.0], [1.6, 23.0], [1.7, 23.0], [1.8, 24.0], [1.9, 24.0], [2.0, 24.0], [2.1, 25.0], [2.2, 25.0], [2.3, 25.0], [2.4, 26.0], [2.5, 26.0], [2.6, 26.0], [2.7, 26.0], [2.8, 27.0], [2.9, 27.0], [3.0, 27.0], [3.1, 28.0], [3.2, 28.0], [3.3, 28.0], [3.4, 28.0], [3.5, 29.0], [3.6, 29.0], [3.7, 29.0], [3.8, 30.0], [3.9, 30.0], [4.0, 30.0], [4.1, 30.0], [4.2, 31.0], [4.3, 31.0], [4.4, 31.0], [4.5, 32.0], [4.6, 32.0], [4.7, 32.0], [4.8, 32.0], [4.9, 33.0], [5.0, 33.0], [5.1, 33.0], [5.2, 34.0], [5.3, 34.0], [5.4, 34.0], [5.5, 34.0], [5.6, 35.0], [5.7, 35.0], [5.8, 35.0], [5.9, 35.0], [6.0, 36.0], [6.1, 36.0], [6.2, 36.0], [6.3, 36.0], [6.4, 37.0], [6.5, 37.0], [6.6, 37.0], [6.7, 37.0], [6.8, 38.0], [6.9, 38.0], [7.0, 38.0], [7.1, 38.0], [7.2, 39.0], [7.3, 39.0], [7.4, 39.0], [7.5, 39.0], [7.6, 40.0], [7.7, 40.0], [7.8, 40.0], [7.9, 41.0], [8.0, 41.0], [8.1, 41.0], [8.2, 41.0], [8.3, 42.0], [8.4, 42.0], [8.5, 42.0], [8.6, 42.0], [8.7, 43.0], [8.8, 43.0], [8.9, 43.0], [9.0, 43.0], [9.1, 44.0], [9.2, 44.0], [9.3, 44.0], [9.4, 44.0], [9.5, 45.0], [9.6, 45.0], [9.7, 45.0], [9.8, 46.0], [9.9, 46.0], [10.0, 46.0], [10.1, 46.0], [10.2, 46.0], [10.3, 47.0], [10.4, 47.0], [10.5, 47.0], [10.6, 48.0], [10.7, 48.0], [10.8, 48.0], [10.9, 48.0], [11.0, 48.0], [11.1, 49.0], [11.2, 49.0], [11.3, 49.0], [11.4, 50.0], [11.5, 50.0], [11.6, 50.0], [11.7, 50.0], [11.8, 51.0], [11.9, 51.0], [12.0, 51.0], [12.1, 51.0], [12.2, 52.0], [12.3, 52.0], [12.4, 52.0], [12.5, 53.0], [12.6, 53.0], [12.7, 53.0], [12.8, 53.0], [12.9, 54.0], [13.0, 54.0], [13.1, 54.0], [13.2, 54.0], [13.3, 55.0], [13.4, 55.0], [13.5, 55.0], [13.6, 55.0], [13.7, 56.0], [13.8, 56.0], [13.9, 56.0], [14.0, 56.0], [14.1, 57.0], [14.2, 57.0], [14.3, 57.0], [14.4, 57.0], [14.5, 58.0], [14.6, 58.0], [14.7, 58.0], [14.8, 58.0], [14.9, 59.0], [15.0, 59.0], [15.1, 59.0], [15.2, 60.0], [15.3, 60.0], [15.4, 60.0], [15.5, 60.0], [15.6, 61.0], [15.7, 61.0], [15.8, 61.0], [15.9, 61.0], [16.0, 62.0], [16.1, 62.0], [16.2, 62.0], [16.3, 62.0], [16.4, 63.0], [16.5, 63.0], [16.6, 63.0], [16.7, 64.0], [16.8, 64.0], [16.9, 64.0], [17.0, 64.0], [17.1, 65.0], [17.2, 65.0], [17.3, 65.0], [17.4, 65.0], [17.5, 66.0], [17.6, 66.0], [17.7, 66.0], [17.8, 66.0], [17.9, 67.0], [18.0, 67.0], [18.1, 67.0], [18.2, 67.0], [18.3, 68.0], [18.4, 68.0], [18.5, 68.0], [18.6, 68.0], [18.7, 69.0], [18.8, 69.0], [18.9, 69.0], [19.0, 70.0], [19.1, 70.0], [19.2, 70.0], [19.3, 70.0], [19.4, 71.0], [19.5, 71.0], [19.6, 71.0], [19.7, 71.0], [19.8, 72.0], [19.9, 72.0], [20.0, 72.0], [20.1, 72.0], [20.2, 72.0], [20.3, 73.0], [20.4, 73.0], [20.5, 73.0], [20.6, 73.0], [20.7, 74.0], [20.8, 74.0], [20.9, 74.0], [21.0, 74.0], [21.1, 75.0], [21.2, 75.0], [21.3, 75.0], [21.4, 75.0], [21.5, 76.0], [21.6, 76.0], [21.7, 76.0], [21.8, 76.0], [21.9, 77.0], [22.0, 77.0], [22.1, 77.0], [22.2, 78.0], [22.3, 78.0], [22.4, 78.0], [22.5, 78.0], [22.6, 79.0], [22.7, 79.0], [22.8, 79.0], [22.9, 79.0], [23.0, 79.0], [23.1, 80.0], [23.2, 80.0], [23.3, 80.0], [23.4, 80.0], [23.5, 81.0], [23.6, 81.0], [23.7, 81.0], [23.8, 81.0], [23.9, 82.0], [24.0, 82.0], [24.1, 82.0], [24.2, 82.0], [24.3, 83.0], [24.4, 83.0], [24.5, 83.0], [24.6, 83.0], [24.7, 84.0], [24.8, 84.0], [24.9, 84.0], [25.0, 84.0], [25.1, 85.0], [25.2, 85.0], [25.3, 85.0], [25.4, 85.0], [25.5, 86.0], [25.6, 86.0], [25.7, 86.0], [25.8, 86.0], [25.9, 87.0], [26.0, 87.0], [26.1, 87.0], [26.2, 87.0], [26.3, 88.0], [26.4, 88.0], [26.5, 88.0], [26.6, 89.0], [26.7, 89.0], [26.8, 89.0], [26.9, 89.0], [27.0, 90.0], [27.1, 90.0], [27.2, 90.0], [27.3, 90.0], [27.4, 91.0], [27.5, 91.0], [27.6, 91.0], [27.7, 91.0], [27.8, 92.0], [27.9, 92.0], [28.0, 92.0], [28.1, 93.0], [28.2, 93.0], [28.3, 93.0], [28.4, 93.0], [28.5, 94.0], [28.6, 94.0], [28.7, 94.0], [28.8, 94.0], [28.9, 95.0], [29.0, 95.0], [29.1, 95.0], [29.2, 95.0], [29.3, 96.0], [29.4, 96.0], [29.5, 96.0], [29.6, 96.0], [29.7, 97.0], [29.8, 97.0], [29.9, 97.0], [30.0, 97.0], [30.1, 98.0], [30.2, 98.0], [30.3, 98.0], [30.4, 98.0], [30.5, 99.0], [30.6, 99.0], [30.7, 99.0], [30.8, 99.0], [30.9, 100.0], [31.0, 100.0], [31.1, 100.0], [31.2, 100.0], [31.3, 101.0], [31.4, 101.0], [31.5, 101.0], [31.6, 101.0], [31.7, 102.0], [31.8, 102.0], [31.9, 102.0], [32.0, 103.0], [32.1, 103.0], [32.2, 103.0], [32.3, 103.0], [32.4, 104.0], [32.5, 104.0], [32.6, 104.0], [32.7, 104.0], [32.8, 105.0], [32.9, 105.0], [33.0, 105.0], [33.1, 105.0], [33.2, 106.0], [33.3, 106.0], [33.4, 106.0], [33.5, 106.0], [33.6, 107.0], [33.7, 107.0], [33.8, 107.0], [33.9, 107.0], [34.0, 107.0], [34.1, 108.0], [34.2, 108.0], [34.3, 108.0], [34.4, 108.0], [34.5, 109.0], [34.6, 109.0], [34.7, 109.0], [34.8, 109.0], [34.9, 110.0], [35.0, 110.0], [35.1, 110.0], [35.2, 110.0], [35.3, 111.0], [35.4, 111.0], [35.5, 111.0], [35.6, 112.0], [35.7, 112.0], [35.8, 112.0], [35.9, 112.0], [36.0, 113.0], [36.1, 113.0], [36.2, 113.0], [36.3, 113.0], [36.4, 114.0], [36.5, 114.0], [36.6, 114.0], [36.7, 114.0], [36.8, 115.0], [36.9, 115.0], [37.0, 115.0], [37.1, 115.0], [37.2, 116.0], [37.3, 116.0], [37.4, 116.0], [37.5, 116.0], [37.6, 117.0], [37.7, 117.0], [37.8, 117.0], [37.9, 117.0], [38.0, 118.0], [38.1, 118.0], [38.2, 118.0], [38.3, 118.0], [38.4, 119.0], [38.5, 119.0], [38.6, 119.0], [38.7, 120.0], [38.8, 120.0], [38.9, 120.0], [39.0, 120.0], [39.1, 121.0], [39.2, 121.0], [39.3, 121.0], [39.4, 122.0], [39.5, 122.0], [39.6, 122.0], [39.7, 122.0], [39.8, 123.0], [39.9, 123.0], [40.0, 123.0], [40.1, 123.0], [40.2, 123.0], [40.3, 124.0], [40.4, 124.0], [40.5, 124.0], [40.6, 124.0], [40.7, 125.0], [40.8, 125.0], [40.9, 125.0], [41.0, 126.0], [41.1, 126.0], [41.2, 126.0], [41.3, 126.0], [41.4, 127.0], [41.5, 127.0], [41.6, 127.0], [41.7, 127.0], [41.8, 128.0], [41.9, 128.0], [42.0, 128.0], [42.1, 128.0], [42.2, 128.0], [42.3, 129.0], [42.4, 129.0], [42.5, 129.0], [42.6, 130.0], [42.7, 130.0], [42.8, 130.0], [42.9, 130.0], [43.0, 130.0], [43.1, 131.0], [43.2, 131.0], [43.3, 131.0], [43.4, 132.0], [43.5, 132.0], [43.6, 132.0], [43.7, 132.0], [43.8, 133.0], [43.9, 133.0], [44.0, 133.0], [44.1, 133.0], [44.2, 134.0], [44.3, 134.0], [44.4, 134.0], [44.5, 134.0], [44.6, 135.0], [44.7, 135.0], [44.8, 135.0], [44.9, 135.0], [45.0, 136.0], [45.1, 136.0], [45.2, 136.0], [45.3, 136.0], [45.4, 137.0], [45.5, 137.0], [45.6, 137.0], [45.7, 137.0], [45.8, 138.0], [45.9, 138.0], [46.0, 138.0], [46.1, 138.0], [46.2, 139.0], [46.3, 139.0], [46.4, 139.0], [46.5, 139.0], [46.6, 140.0], [46.7, 140.0], [46.8, 140.0], [46.9, 140.0], [47.0, 141.0], [47.1, 141.0], [47.2, 141.0], [47.3, 141.0], [47.4, 142.0], [47.5, 142.0], [47.6, 142.0], [47.7, 143.0], [47.8, 143.0], [47.9, 143.0], [48.0, 143.0], [48.1, 143.0], [48.2, 144.0], [48.3, 144.0], [48.4, 144.0], [48.5, 145.0], [48.6, 145.0], [48.7, 145.0], [48.8, 145.0], [48.9, 146.0], [49.0, 146.0], [49.1, 146.0], [49.2, 146.0], [49.3, 146.0], [49.4, 147.0], [49.5, 147.0], [49.6, 147.0], [49.7, 147.0], [49.8, 148.0], [49.9, 148.0], [50.0, 148.0], [50.1, 148.0], [50.2, 149.0], [50.3, 149.0], [50.4, 149.0], [50.5, 149.0], [50.6, 150.0], [50.7, 150.0], [50.8, 150.0], [50.9, 150.0], [51.0, 151.0], [51.1, 151.0], [51.2, 151.0], [51.3, 151.0], [51.4, 152.0], [51.5, 152.0], [51.6, 152.0], [51.7, 152.0], [51.8, 153.0], [51.9, 153.0], [52.0, 153.0], [52.1, 153.0], [52.2, 154.0], [52.3, 154.0], [52.4, 154.0], [52.5, 154.0], [52.6, 155.0], [52.7, 155.0], [52.8, 155.0], [52.9, 155.0], [53.0, 156.0], [53.1, 156.0], [53.2, 156.0], [53.3, 156.0], [53.4, 157.0], [53.5, 157.0], [53.6, 157.0], [53.7, 157.0], [53.8, 158.0], [53.9, 158.0], [54.0, 158.0], [54.1, 158.0], [54.2, 159.0], [54.3, 159.0], [54.4, 159.0], [54.5, 159.0], [54.6, 160.0], [54.7, 160.0], [54.8, 160.0], [54.9, 160.0], [55.0, 161.0], [55.1, 161.0], [55.2, 161.0], [55.3, 161.0], [55.4, 162.0], [55.5, 162.0], [55.6, 162.0], [55.7, 162.0], [55.8, 163.0], [55.9, 163.0], [56.0, 163.0], [56.1, 163.0], [56.2, 164.0], [56.3, 164.0], [56.4, 164.0], [56.5, 164.0], [56.6, 165.0], [56.7, 165.0], [56.8, 165.0], [56.9, 165.0], [57.0, 166.0], [57.1, 166.0], [57.2, 166.0], [57.3, 166.0], [57.4, 167.0], [57.5, 167.0], [57.6, 167.0], [57.7, 167.0], [57.8, 168.0], [57.9, 168.0], [58.0, 168.0], [58.1, 168.0], [58.2, 169.0], [58.3, 169.0], [58.4, 169.0], [58.5, 169.0], [58.6, 170.0], [58.7, 170.0], [58.8, 170.0], [58.9, 170.0], [59.0, 171.0], [59.1, 171.0], [59.2, 171.0], [59.3, 171.0], [59.4, 172.0], [59.5, 172.0], [59.6, 172.0], [59.7, 172.0], [59.8, 173.0], [59.9, 173.0], [60.0, 173.0], [60.1, 173.0], [60.2, 174.0], [60.3, 174.0], [60.4, 174.0], [60.5, 174.0], [60.6, 175.0], [60.7, 175.0], [60.8, 175.0], [60.9, 175.0], [61.0, 176.0], [61.1, 176.0], [61.2, 176.0], [61.3, 176.0], [61.4, 177.0], [61.5, 177.0], [61.6, 177.0], [61.7, 177.0], [61.8, 178.0], [61.9, 178.0], [62.0, 178.0], [62.1, 178.0], [62.2, 179.0], [62.3, 179.0], [62.4, 179.0], [62.5, 179.0], [62.6, 180.0], [62.7, 180.0], [62.8, 180.0], [62.9, 181.0], [63.0, 181.0], [63.1, 181.0], [63.2, 181.0], [63.3, 182.0], [63.4, 182.0], [63.5, 182.0], [63.6, 182.0], [63.7, 183.0], [63.8, 183.0], [63.9, 183.0], [64.0, 183.0], [64.1, 183.0], [64.2, 184.0], [64.3, 184.0], [64.4, 184.0], [64.5, 185.0], [64.6, 185.0], [64.7, 185.0], [64.8, 185.0], [64.9, 186.0], [65.0, 186.0], [65.1, 186.0], [65.2, 186.0], [65.3, 187.0], [65.4, 187.0], [65.5, 187.0], [65.6, 188.0], [65.7, 188.0], [65.8, 188.0], [65.9, 188.0], [66.0, 189.0], [66.1, 189.0], [66.2, 189.0], [66.3, 189.0], [66.4, 190.0], [66.5, 190.0], [66.6, 190.0], [66.7, 190.0], [66.8, 191.0], [66.9, 191.0], [67.0, 191.0], [67.1, 191.0], [67.2, 192.0], [67.3, 192.0], [67.4, 192.0], [67.5, 192.0], [67.6, 193.0], [67.7, 193.0], [67.8, 193.0], [67.9, 193.0], [68.0, 194.0], [68.1, 194.0], [68.2, 194.0], [68.3, 194.0], [68.4, 195.0], [68.5, 195.0], [68.6, 195.0], [68.7, 195.0], [68.8, 196.0], [68.9, 196.0], [69.0, 196.0], [69.1, 196.0], [69.2, 197.0], [69.3, 197.0], [69.4, 197.0], [69.5, 197.0], [69.6, 198.0], [69.7, 198.0], [69.8, 198.0], [69.9, 198.0], [70.0, 199.0], [70.1, 199.0], [70.2, 199.0], [70.3, 199.0], [70.4, 200.0], [70.5, 200.0], [70.6, 200.0], [70.7, 200.0], [70.8, 201.0], [70.9, 201.0], [71.0, 201.0], [71.1, 201.0], [71.2, 202.0], [71.3, 202.0], [71.4, 202.0], [71.5, 202.0], [71.6, 202.0], [71.7, 203.0], [71.8, 203.0], [71.9, 203.0], [72.0, 204.0], [72.1, 204.0], [72.2, 204.0], [72.3, 204.0], [72.4, 205.0], [72.5, 205.0], [72.6, 205.0], [72.7, 205.0], [72.8, 206.0], [72.9, 206.0], [73.0, 206.0], [73.1, 206.0], [73.2, 207.0], [73.3, 207.0], [73.4, 207.0], [73.5, 207.0], [73.6, 208.0], [73.7, 208.0], [73.8, 208.0], [73.9, 208.0], [74.0, 209.0], [74.1, 209.0], [74.2, 209.0], [74.3, 209.0], [74.4, 210.0], [74.5, 210.0], [74.6, 210.0], [74.7, 210.0], [74.8, 211.0], [74.9, 211.0], [75.0, 211.0], [75.1, 211.0], [75.2, 212.0], [75.3, 212.0], [75.4, 212.0], [75.5, 212.0], [75.6, 213.0], [75.7, 213.0], [75.8, 213.0], [75.9, 213.0], [76.0, 214.0], [76.1, 214.0], [76.2, 214.0], [76.3, 214.0], [76.4, 215.0], [76.5, 215.0], [76.6, 215.0], [76.7, 216.0], [76.8, 216.0], [76.9, 216.0], [77.0, 216.0], [77.1, 217.0], [77.2, 217.0], [77.3, 217.0], [77.4, 217.0], [77.5, 218.0], [77.6, 218.0], [77.7, 218.0], [77.8, 219.0], [77.9, 219.0], [78.0, 219.0], [78.1, 219.0], [78.2, 220.0], [78.3, 220.0], [78.4, 220.0], [78.5, 220.0], [78.6, 221.0], [78.7, 221.0], [78.8, 221.0], [78.9, 221.0], [79.0, 222.0], [79.1, 222.0], [79.2, 222.0], [79.3, 222.0], [79.4, 223.0], [79.5, 223.0], [79.6, 223.0], [79.7, 223.0], [79.8, 224.0], [79.9, 224.0], [80.0, 224.0], [80.1, 224.0], [80.2, 225.0], [80.3, 225.0], [80.4, 225.0], [80.5, 226.0], [80.6, 226.0], [80.7, 226.0], [80.8, 226.0], [80.9, 226.0], [81.0, 227.0], [81.1, 227.0], [81.2, 227.0], [81.3, 227.0], [81.4, 228.0], [81.5, 228.0], [81.6, 228.0], [81.7, 228.0], [81.8, 229.0], [81.9, 229.0], [82.0, 229.0], [82.1, 229.0], [82.2, 230.0], [82.3, 230.0], [82.4, 230.0], [82.5, 231.0], [82.6, 231.0], [82.7, 231.0], [82.8, 231.0], [82.9, 232.0], [83.0, 232.0], [83.1, 232.0], [83.2, 232.0], [83.3, 233.0], [83.4, 233.0], [83.5, 233.0], [83.6, 233.0], [83.7, 234.0], [83.8, 234.0], [83.9, 234.0], [84.0, 234.0], [84.1, 235.0], [84.2, 235.0], [84.3, 235.0], [84.4, 235.0], [84.5, 236.0], [84.6, 236.0], [84.7, 236.0], [84.8, 236.0], [84.9, 237.0], [85.0, 237.0], [85.1, 237.0], [85.2, 237.0], [85.3, 238.0], [85.4, 238.0], [85.5, 238.0], [85.6, 238.0], [85.7, 239.0], [85.8, 239.0], [85.9, 239.0], [86.0, 239.0], [86.1, 240.0], [86.2, 240.0], [86.3, 240.0], [86.4, 240.0], [86.5, 241.0], [86.6, 241.0], [86.7, 241.0], [86.8, 241.0], [86.9, 242.0], [87.0, 242.0], [87.1, 242.0], [87.2, 242.0], [87.3, 243.0], [87.4, 243.0], [87.5, 243.0], [87.6, 243.0], [87.7, 244.0], [87.8, 244.0], [87.9, 244.0], [88.0, 244.0], [88.1, 244.0], [88.2, 245.0], [88.3, 245.0], [88.4, 245.0], [88.5, 245.0], [88.6, 246.0], [88.7, 246.0], [88.8, 246.0], [88.9, 246.0], [89.0, 247.0], [89.1, 247.0], [89.2, 247.0], [89.3, 247.0], [89.4, 248.0], [89.5, 248.0], [89.6, 248.0], [89.7, 248.0], [89.8, 248.0], [89.9, 249.0], [90.0, 249.0], [90.1, 249.0], [90.2, 249.0], [90.3, 250.0], [90.4, 250.0], [90.5, 250.0], [90.6, 250.0], [90.7, 251.0], [90.8, 251.0], [90.9, 251.0], [91.0, 251.0], [91.1, 252.0], [91.2, 252.0], [91.3, 252.0], [91.4, 252.0], [91.5, 253.0], [91.6, 253.0], [91.7, 253.0], [91.8, 253.0], [91.9, 253.0], [92.0, 254.0], [92.1, 254.0], [92.2, 254.0], [92.3, 254.0], [92.4, 255.0], [92.5, 255.0], [92.6, 255.0], [92.7, 255.0], [92.8, 256.0], [92.9, 256.0], [93.0, 256.0], [93.1, 256.0], [93.2, 256.0], [93.3, 257.0], [93.4, 257.0], [93.5, 257.0], [93.6, 258.0], [93.7, 258.0], [93.8, 258.0], [93.9, 258.0], [94.0, 259.0], [94.1, 259.0], [94.2, 259.0], [94.3, 259.0], [94.4, 260.0], [94.5, 260.0], [94.6, 260.0], [94.7, 260.0], [94.8, 260.0], [94.9, 261.0], [95.0, 261.0], [95.1, 261.0], [95.2, 262.0], [95.3, 262.0], [95.4, 262.0], [95.5, 262.0], [95.6, 263.0], [95.7, 263.0], [95.8, 263.0], [95.9, 264.0], [96.0, 264.0], [96.1, 264.0], [96.2, 264.0], [96.3, 265.0], [96.4, 265.0], [96.5, 265.0], [96.6, 266.0], [96.7, 266.0], [96.8, 266.0], [96.9, 267.0], [97.0, 267.0], [97.1, 267.0], [97.2, 268.0], [97.3, 268.0], [97.4, 269.0], [97.5, 269.0], [97.6, 269.0], [97.7, 270.0], [97.8, 270.0], [97.9, 270.0], [98.0, 271.0], [98.1, 271.0], [98.2, 272.0], [98.3, 272.0], [98.4, 273.0], [98.5, 273.0], [98.6, 274.0], [98.7, 274.0], [98.8, 275.0], [98.9, 276.0], [99.0, 276.0], [99.1, 277.0], [99.2, 278.0], [99.3, 279.0], [99.4, 280.0], [99.5, 281.0], [99.6, 283.0], [99.7, 285.0], [99.8, 288.0], [99.9, 294.0]], "isOverall": false, "label": "HTTP Request - enroll", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 61.0, "minX": 0.0, "maxY": 39554.0, "series": [{"data": [[0.0, 30838.0], [300.0, 61.0], [200.0, 29547.0], [100.0, 39554.0]], "isOverall": false, "label": "HTTP Request - enroll", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 20000.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 80000.0, "series": [{"data": [[0.0, 80000.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 20000.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 3.8011363636363633, "minX": 1.74890088E12, "maxY": 5.0, "series": [{"data": [[1.74890226E12, 5.0], [1.74890388E12, 4.0], [1.74890166E12, 5.0], [1.74890106E12, 5.0], [1.74890328E12, 5.0], [1.74890268E12, 5.0], [1.74890304E12, 5.0], [1.74890244E12, 5.0], [1.74890184E12, 5.0], [1.74890286E12, 5.0], [1.74890124E12, 5.0], [1.74890346E12, 5.0], [1.7489013E12, 5.0], [1.74890352E12, 4.011518324607329], [1.74890292E12, 5.0], [1.74890232E12, 5.0], [1.74890334E12, 5.0], [1.74890172E12, 5.0], [1.74890394E12, 3.8011363636363633], [1.74890208E12, 5.0], [1.7489031E12, 5.0], [1.74890148E12, 5.0], [1.7489037E12, 4.0], [1.74890088E12, 5.0], [1.7489025E12, 5.0], [1.7489019E12, 5.0], [1.74890256E12, 5.0], [1.74890358E12, 4.0], [1.74890196E12, 5.0], [1.74890298E12, 5.0], [1.74890136E12, 5.0], [1.74890238E12, 5.0], [1.74890274E12, 5.0], [1.74890112E12, 5.0], [1.74890214E12, 5.0], [1.74890154E12, 5.0], [1.74890316E12, 5.0], [1.74890376E12, 4.0], [1.74890094E12, 5.0], [1.7489016E12, 5.0], [1.748901E12, 5.0], [1.74890262E12, 5.0], [1.74890322E12, 5.0], [1.74890202E12, 5.0], [1.74890364E12, 4.0], [1.74890142E12, 5.0], [1.74890178E12, 5.0], [1.7489034E12, 5.0], [1.74890118E12, 5.0], [1.7489028E12, 5.0], [1.74890382E12, 4.0], [1.7489022E12, 5.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74890394E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 139.56880674935388, "minX": 1.0, "maxY": 280.0, "series": [{"data": [[4.0, 263.51443098549373], [2.0, 260.9375], [1.0, 241.58333333333331], [5.0, 139.56880674935388], [3.0, 280.0]], "isOverall": false, "label": "HTTP Request - enroll", "isController": false}, {"data": [[4.9321300000000035, 147.89151999999987]], "isOverall": false, "label": "HTTP Request - enroll-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 5.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 4658.133333333333, "minX": 1.74890088E12, "maxY": 122454.33333333333, "series": [{"data": [[1.74890226E12, 29325.083333333332], [1.74890388E12, 18375.133333333335], [1.74890166E12, 38926.75], [1.74890106E12, 77394.93333333333], [1.74890328E12, 22376.966666666667], [1.74890268E12, 25878.8], [1.74890304E12, 23507.966666666667], [1.74890244E12, 27784.2], [1.74890184E12, 34872.48333333333], [1.74890286E12, 24623.2], [1.74890124E12, 56573.666666666664], [1.74890346E12, 21419.966666666667], [1.7489013E12, 51940.933333333334], [1.74890352E12, 19906.516666666666], [1.74890292E12, 24186.766666666666], [1.74890232E12, 28708.266666666666], [1.74890334E12, 22080.683333333334], [1.74890172E12, 37218.4], [1.74890394E12, 7350.233333333334], [1.74890208E12, 31630.816666666666], [1.7489031E12, 23253.033333333333], [1.74890148E12, 44156.9], [1.7489037E12, 18876.566666666666], [1.74890088E12, 98551.91666666667], [1.7489025E12, 27204.366666666665], [1.7489019E12, 34177.76666666667], [1.74890256E12, 26732.066666666666], [1.74890358E12, 19377.95], [1.74890196E12, 33315.833333333336], [1.74890298E12, 23860.133333333335], [1.74890136E12, 49156.45], [1.74890238E12, 28275.283333333333], [1.74890274E12, 25350.383333333335], [1.74890112E12, 67932.41666666667], [1.74890214E12, 30808.55], [1.74890154E12, 41843.76666666667], [1.74890316E12, 22766.383333333335], [1.74890376E12, 18751.016666666666], [1.74890094E12, 122454.33333333333], [1.7489016E12, 40560.2], [1.748901E12, 92751.86666666667], [1.74890262E12, 26196.516666666666], [1.74890322E12, 22687.616666666665], [1.74890202E12, 32476.233333333334], [1.74890364E12, 19148.25], [1.74890142E12, 46115.23333333333], [1.74890178E12, 36372.683333333334], [1.7489034E12, 21832.65], [1.74890118E12, 61401.7], [1.7489028E12, 24961.033333333333], [1.74890382E12, 18667.583333333332], [1.7489022E12, 30069.166666666668]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.74890226E12, 21001.3], [1.74890388E12, 11645.333333333334], [1.74890166E12, 27909.1], [1.74890106E12, 55950.53333333333], [1.74890328E12, 16012.333333333334], [1.74890268E12, 18513.433333333334], [1.74890304E12, 16832.8], [1.74890244E12, 19876.466666666667], [1.74890184E12, 25050.7], [1.74890286E12, 17613.566666666666], [1.74890124E12, 40679.26666666667], [1.74890346E12, 15324.2], [1.7489013E12, 37357.7], [1.74890352E12, 12637.833333333334], [1.74890292E12, 17322.433333333334], [1.74890232E12, 20551.366666666665], [1.74890334E12, 15787.366666666667], [1.74890172E12, 26678.4], [1.74890394E12, 4658.133333333333], [1.74890208E12, 22655.466666666667], [1.7489031E12, 16634.3], [1.74890148E12, 31720.3], [1.7489037E12, 11962.933333333332], [1.74890088E12, 72902.43333333333], [1.7489025E12, 19479.466666666667], [1.7489019E12, 24521.366666666665], [1.74890256E12, 19135.4], [1.74890358E12, 12280.533333333333], [1.74890196E12, 23886.166666666668], [1.74890298E12, 17071.0], [1.74890136E12, 35385.933333333334], [1.74890238E12, 20247.0], [1.74890274E12, 18156.133333333335], [1.74890112E12, 48989.8], [1.74890214E12, 22059.966666666667], [1.74890154E12, 30039.666666666668], [1.74890316E12, 16303.466666666667], [1.74890376E12, 11883.533333333333], [1.74890094E12, 89510.26666666666], [1.7489016E12, 29100.1], [1.748901E12, 67291.5], [1.74890262E12, 18751.633333333335], [1.74890322E12, 16224.066666666668], [1.74890202E12, 23317.133333333335], [1.74890364E12, 12134.966666666667], [1.74890142E12, 33109.8], [1.74890178E12, 26082.9], [1.7489034E12, 15615.333333333334], [1.74890118E12, 44265.5], [1.7489028E12, 17865.0], [1.74890382E12, 11830.6], [1.7489022E12, 21517.4]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74890394E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 28.833545108005122, "minX": 1.74890088E12, "maxY": 271.5590909090911, "series": [{"data": [[1.74890226E12, 188.5645872715815], [1.74890388E12, 271.5590909090911], [1.74890166E12, 141.7695590327169], [1.74890106E12, 70.47114474929043], [1.74890328E12, 247.47520661157006], [1.74890268E12, 214.21658327376693], [1.74890304E12, 235.19732704402517], [1.74890244E12, 199.16977363515304], [1.74890184E12, 158.0480718436348], [1.74890286E12, 225.09842223891806], [1.74890124E12, 97.11938841899773], [1.74890346E12, 258.40328151986125], [1.7489013E12, 105.80552603613185], [1.74890352E12, 251.50890052356027], [1.74890292E12, 228.61344537815134], [1.74890232E12, 192.61880231809397], [1.74890334E12, 251.06202849958095], [1.74890172E12, 148.28422619047632], [1.74890394E12, 271.01704545454567], [1.74890208E12, 175.03387850467288], [1.7489031E12, 238.17740652346845], [1.74890148E12, 124.73967459324143], [1.7489037E12, 264.8019911504425], [1.74890088E12, 28.833545108005122], [1.7489025E12, 203.30774456521746], [1.7489019E12, 161.46519158121947], [1.74890256E12, 206.81604426002784], [1.74890358E12, 258.1357758620692], [1.74890196E12, 165.78891966759002], [1.74890298E12, 232.18062015503867], [1.74890136E12, 111.717651458489], [1.74890238E12, 195.79803921568632], [1.74890274E12, 218.21793002915447], [1.74890112E12, 80.54186925985952], [1.74890214E12, 179.39472105578872], [1.74890154E12, 131.63171806167412], [1.74890316E12, 242.8741883116882], [1.74890376E12, 266.748329621381], [1.74890094E12, 43.872412773506845], [1.7489016E12, 135.97316962255582], [1.748901E12, 58.524090462143604], [1.74890262E12, 211.20818630910358], [1.74890322E12, 244.29608482871114], [1.74890202E12, 169.63961407491504], [1.74890364E12, 261.31188658669566], [1.74890142E12, 119.37529976019167], [1.74890178E12, 151.60882800608806], [1.7489034E12, 253.89067796610166], [1.74890118E12, 89.22182361733941], [1.7489028E12, 221.41703703703757], [1.74890382E12, 268.40380313199074], [1.7489022E12, 183.99323493234942]], "isOverall": false, "label": "HTTP Request - enroll", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74890394E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 28.819204937375314, "minX": 1.74890088E12, "maxY": 271.55454545454575, "series": [{"data": [[1.74890226E12, 188.55891619407703], [1.74890388E12, 271.55454545454575], [1.74890166E12, 141.76197249881469], [1.74890106E12, 70.4652317880794], [1.74890328E12, 247.4694214876034], [1.74890268E12, 214.2101501072195], [1.74890304E12, 235.190251572327], [1.74890244E12, 199.16378162450076], [1.74890184E12, 158.0433174854724], [1.74890286E12, 225.0931630353118], [1.74890124E12, 97.11288223812625], [1.74890346E12, 258.3946459412782], [1.7489013E12, 105.79808714133893], [1.74890352E12, 251.502617801047], [1.74890292E12, 228.60886172650888], [1.74890232E12, 192.61558274307777], [1.74890334E12, 251.05616093880946], [1.74890172E12, 148.2792658730155], [1.74890394E12, 271.01704545454567], [1.74890208E12, 175.02862149532712], [1.7489031E12, 238.17501988862372], [1.74890148E12, 124.73508552357106], [1.7489037E12, 264.7986725663717], [1.74890088E12, 28.819204937375314], [1.7489025E12, 203.30230978260883], [1.7489019E12, 161.4581759309228], [1.74890256E12, 206.81120331950234], [1.74890358E12, 258.1325431034482], [1.74890196E12, 165.78282548476457], [1.74890298E12, 232.174418604651], [1.74890136E12, 111.71278982797278], [1.74890238E12, 195.79215686274486], [1.74890274E12, 218.20772594752196], [1.74890112E12, 80.53781739600207], [1.74890214E12, 179.3899220155971], [1.74890154E12, 131.6251101321586], [1.74890316E12, 242.86444805194796], [1.74890376E12, 266.74053452115834], [1.74890094E12, 43.868421052631525], [1.7489016E12, 135.96725784447472], [1.748901E12, 58.51956735496561], [1.74890262E12, 211.2018348623854], [1.74890322E12, 244.28711256117484], [1.74890202E12, 169.6328036322358], [1.74890364E12, 261.2998909487453], [1.74890142E12, 119.37010391686647], [1.74890178E12, 151.6032470826992], [1.7489034E12, 253.8822033898308], [1.74890118E12, 89.21644245142002], [1.7489028E12, 221.41185185185185], [1.74890382E12, 268.39932885906086], [1.7489022E12, 183.98769987699873]], "isOverall": false, "label": "HTTP Request - enroll", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74890394E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.74890088E12, "maxY": 0.15538210201488534, "series": [{"data": [[1.74890226E12, 0.010712035286704452], [1.74890388E12, 0.012500000000000016], [1.74890166E12, 0.008060692271218597], [1.74890106E12, 0.004966887417218552], [1.74890328E12, 0.011570247933884309], [1.74890268E12, 0.010007147962830615], [1.74890304E12, 0.012578616352201283], [1.74890244E12, 0.00998668442077232], [1.74890184E12, 0.008980454305335443], [1.74890286E12, 0.010518407212622104], [1.74890124E12, 0.005204944697462605], [1.74890346E12, 0.012953367875647678], [1.7489013E12, 0.006730428622033296], [1.74890352E12, 0.010471204188481673], [1.74890292E12, 0.01145912910618794], [1.74890232E12, 0.010946555054732746], [1.74890334E12, 0.012573344509639584], [1.74890172E12, 0.007440476190476215], [1.74890394E12, 0.0], [1.74890208E12, 0.01109813084112151], [1.7489031E12, 0.011933174224343682], [1.74890148E12, 0.007509386733416775], [1.7489037E12, 0.013274336283185847], [1.74890088E12, 0.15538210201488534], [1.7489025E12, 0.010869565217391335], [1.7489019E12, 0.008634646519158146], [1.74890256E12, 0.010373443983402498], [1.74890358E12, 0.01185344827586208], [1.74890196E12, 0.008864265927977864], [1.74890298E12, 0.01085271317829459], [1.74890136E12, 0.007479431563201193], [1.74890238E12, 0.01045751633986931], [1.74890274E12, 0.01093294460641401], [1.74890112E12, 0.005402485143165856], [1.74890214E12, 0.008398320335932822], [1.74890154E12, 0.009691629955947152], [1.74890316E12, 0.011363636363636378], [1.74890376E12, 0.012249443207126967], [1.74890094E12, 0.003696037847427559], [1.7489016E12, 0.0072760345611641904], [1.748901E12, 0.003933136676499514], [1.74890262E12, 0.009880028228652095], [1.74890322E12, 0.011419249592169672], [1.74890202E12, 0.009648127128263325], [1.74890364E12, 0.011995637949836437], [1.74890142E12, 0.00679456434852119], [1.74890178E12, 0.008117706747843756], [1.7489034E12, 0.01186440677966103], [1.74890118E12, 0.005082212257100159], [1.7489028E12, 0.01111111111111112], [1.74890382E12, 0.010067114093959731], [1.7489022E12, 0.009840098400984041]], "isOverall": false, "label": "HTTP Request - enroll", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74890394E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 17.0, "minX": 1.74890088E12, "maxY": 361.0, "series": [{"data": [[1.74890226E12, 255.0], [1.74890388E12, 321.0], [1.74890166E12, 184.0], [1.74890106E12, 154.0], [1.74890328E12, 292.0], [1.74890268E12, 275.0], [1.74890304E12, 293.0], [1.74890244E12, 259.0], [1.74890184E12, 225.0], [1.74890286E12, 280.0], [1.74890124E12, 142.0], [1.74890346E12, 317.0], [1.7489013E12, 164.0], [1.74890352E12, 300.0], [1.74890292E12, 278.0], [1.74890232E12, 244.0], [1.74890334E12, 297.0], [1.74890172E12, 194.0], [1.74890394E12, 319.0], [1.74890208E12, 219.0], [1.7489031E12, 278.0], [1.74890148E12, 164.0], [1.7489037E12, 312.0], [1.74890088E12, 361.0], [1.7489025E12, 266.0], [1.7489019E12, 197.0], [1.74890256E12, 247.0], [1.74890358E12, 300.0], [1.74890196E12, 204.0], [1.74890298E12, 280.0], [1.74890136E12, 156.0], [1.74890238E12, 246.0], [1.74890274E12, 278.0], [1.74890112E12, 160.0], [1.74890214E12, 222.0], [1.74890154E12, 173.0], [1.74890316E12, 293.0], [1.74890376E12, 320.0], [1.74890094E12, 179.0], [1.7489016E12, 181.0], [1.748901E12, 132.0], [1.74890262E12, 291.0], [1.74890322E12, 288.0], [1.74890202E12, 207.0], [1.74890364E12, 299.0], [1.74890142E12, 167.0], [1.74890178E12, 192.0], [1.7489034E12, 306.0], [1.74890118E12, 143.0], [1.7489028E12, 268.0], [1.74890382E12, 315.0], [1.7489022E12, 232.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.74890226E12, 200.0], [1.74890388E12, 283.0], [1.74890166E12, 153.0], [1.74890106E12, 81.0], [1.74890328E12, 261.0], [1.74890268E12, 226.0], [1.74890304E12, 249.0], [1.74890244E12, 210.0], [1.74890184E12, 174.0], [1.74890286E12, 237.0], [1.74890124E12, 107.0], [1.74890346E12, 272.0], [1.7489013E12, 117.0], [1.74890352E12, 263.0], [1.74890292E12, 241.0], [1.74890232E12, 204.0], [1.74890334E12, 264.0], [1.74890172E12, 159.0], [1.74890394E12, 283.7], [1.74890208E12, 186.0], [1.7489031E12, 251.0], [1.74890148E12, 136.0], [1.7489037E12, 278.0], [1.74890088E12, 38.0], [1.7489025E12, 214.0], [1.7489019E12, 173.0], [1.74890256E12, 218.0], [1.74890358E12, 270.0], [1.74890196E12, 177.0], [1.74890298E12, 245.0], [1.74890136E12, 124.0], [1.74890238E12, 207.0], [1.74890274E12, 231.0], [1.74890112E12, 91.0], [1.74890214E12, 191.0], [1.74890154E12, 145.0], [1.74890316E12, 259.0], [1.74890376E12, 278.0], [1.74890094E12, 55.0], [1.7489016E12, 146.0], [1.748901E12, 69.0], [1.74890262E12, 223.0], [1.74890322E12, 257.0], [1.74890202E12, 182.0], [1.74890364E12, 273.0], [1.74890142E12, 132.0], [1.74890178E12, 163.0], [1.7489034E12, 267.0], [1.74890118E12, 100.0], [1.7489028E12, 233.0], [1.74890382E12, 281.0], [1.7489022E12, 195.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.74890226E12, 221.0], [1.74890388E12, 308.18999999999994], [1.74890166E12, 171.0], [1.74890106E12, 102.01999999999998], [1.74890328E12, 280.36], [1.74890268E12, 246.8499999999999], [1.74890304E12, 269.88], [1.74890244E12, 225.0], [1.74890184E12, 191.03999999999996], [1.74890286E12, 253.3900000000001], [1.74890124E12, 121.0], [1.74890346E12, 293.77], [1.7489013E12, 137.0], [1.74890352E12, 279.47], [1.74890292E12, 258.0], [1.74890232E12, 226.6400000000001], [1.74890334E12, 280.0], [1.74890172E12, 176.0], [1.74890394E12, 308.8799999999999], [1.74890208E12, 205.3900000000001], [1.7489031E12, 266.0], [1.74890148E12, 151.0], [1.7489037E12, 296.9000000000001], [1.74890088E12, 64.0], [1.7489025E12, 230.0], [1.7489019E12, 188.0], [1.74890256E12, 237.47000000000003], [1.74890358E12, 290.0], [1.74890196E12, 194.0], [1.74890298E12, 263.0], [1.74890136E12, 140.0], [1.74890238E12, 224.82999999999993], [1.74890274E12, 252.0], [1.74890112E12, 109.98000000000002], [1.74890214E12, 208.0], [1.74890154E12, 158.03999999999996], [1.74890316E12, 277.20000000000005], [1.74890376E12, 304.01], [1.74890094E12, 81.0], [1.7489016E12, 158.57999999999993], [1.748901E12, 95.0], [1.74890262E12, 246.60000000000014], [1.74890322E12, 276.22], [1.74890202E12, 196.05999999999995], [1.74890364E12, 283.0], [1.74890142E12, 149.0], [1.74890178E12, 178.0], [1.7489034E12, 288.18000000000006], [1.74890118E12, 118.0], [1.7489028E12, 248.25], [1.74890382E12, 297.14999999999986], [1.7489022E12, 209.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.74890226E12, 206.0], [1.74890388E12, 288.0], [1.74890166E12, 157.0], [1.74890106E12, 86.0], [1.74890328E12, 266.0], [1.74890268E12, 231.0], [1.74890304E12, 254.0], [1.74890244E12, 214.14999999999986], [1.74890184E12, 180.0], [1.74890286E12, 242.0], [1.74890124E12, 110.0], [1.74890346E12, 278.0], [1.7489013E12, 122.0], [1.74890352E12, 266.3499999999999], [1.74890292E12, 247.0], [1.74890232E12, 210.0], [1.74890334E12, 269.4], [1.74890172E12, 163.0], [1.74890394E12, 288.34999999999997], [1.74890208E12, 191.0], [1.7489031E12, 255.0], [1.74890148E12, 140.0], [1.7489037E12, 283.0], [1.74890088E12, 46.0], [1.7489025E12, 220.0], [1.7489019E12, 178.0], [1.74890256E12, 223.0], [1.74890358E12, 274.0], [1.74890196E12, 182.0], [1.74890298E12, 250.0], [1.74890136E12, 129.0], [1.74890238E12, 212.14999999999986], [1.74890274E12, 236.0], [1.74890112E12, 97.0], [1.74890214E12, 195.0], [1.74890154E12, 150.0], [1.74890316E12, 265.0], [1.74890376E12, 283.0], [1.74890094E12, 64.0], [1.7489016E12, 150.0], [1.748901E12, 75.0], [1.74890262E12, 230.0], [1.74890322E12, 262.0999999999999], [1.74890202E12, 187.0], [1.74890364E12, 276.0], [1.74890142E12, 138.0], [1.74890178E12, 167.0], [1.7489034E12, 271.94999999999993], [1.74890118E12, 105.0], [1.7489028E12, 238.0], [1.74890382E12, 285.0], [1.7489022E12, 200.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.74890226E12, 169.0], [1.74890388E12, 247.0], [1.74890166E12, 123.0], [1.74890106E12, 55.0], [1.74890328E12, 228.0], [1.74890268E12, 193.0], [1.74890304E12, 215.0], [1.74890244E12, 182.0], [1.74890184E12, 139.0], [1.74890286E12, 206.0], [1.74890124E12, 80.0], [1.74890346E12, 233.0], [1.7489013E12, 87.0], [1.74890352E12, 231.0], [1.74890292E12, 210.0], [1.74890232E12, 172.0], [1.74890334E12, 231.0], [1.74890172E12, 133.0], [1.74890394E12, 233.0], [1.74890208E12, 157.0], [1.7489031E12, 219.0], [1.74890148E12, 107.0], [1.7489037E12, 242.0], [1.74890088E12, 17.0], [1.7489025E12, 181.0], [1.7489019E12, 145.0], [1.74890256E12, 188.0], [1.74890358E12, 233.0], [1.74890196E12, 150.0], [1.74890298E12, 211.0], [1.74890136E12, 96.0], [1.74890238E12, 177.0], [1.74890274E12, 197.0], [1.74890112E12, 65.0], [1.74890214E12, 162.0], [1.74890154E12, 113.0], [1.74890316E12, 219.0], [1.74890376E12, 245.0], [1.74890094E12, 22.0], [1.7489016E12, 118.0], [1.748901E12, 44.0], [1.74890262E12, 192.0], [1.74890322E12, 220.0], [1.74890202E12, 152.0], [1.74890364E12, 237.0], [1.74890142E12, 102.0], [1.74890178E12, 131.0], [1.7489034E12, 231.0], [1.74890118E12, 73.0], [1.7489028E12, 201.0], [1.74890382E12, 251.0], [1.7489022E12, 166.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.74890226E12, 189.0], [1.74890388E12, 270.0], [1.74890166E12, 142.0], [1.74890106E12, 71.0], [1.74890328E12, 247.0], [1.74890268E12, 214.0], [1.74890304E12, 235.0], [1.74890244E12, 199.0], [1.74890184E12, 158.0], [1.74890286E12, 225.0], [1.74890124E12, 98.0], [1.74890346E12, 259.0], [1.7489013E12, 106.0], [1.74890352E12, 250.5], [1.74890292E12, 229.0], [1.74890232E12, 193.0], [1.74890334E12, 251.0], [1.74890172E12, 149.0], [1.74890394E12, 271.5], [1.74890208E12, 175.0], [1.7489031E12, 238.0], [1.74890148E12, 125.0], [1.7489037E12, 264.0], [1.74890088E12, 30.0], [1.7489025E12, 204.0], [1.7489019E12, 162.0], [1.74890256E12, 207.0], [1.74890358E12, 257.0], [1.74890196E12, 166.0], [1.74890298E12, 232.0], [1.74890136E12, 112.0], [1.74890238E12, 196.0], [1.74890274E12, 219.0], [1.74890112E12, 81.0], [1.74890214E12, 179.0], [1.74890154E12, 132.0], [1.74890316E12, 243.0], [1.74890376E12, 266.0], [1.74890094E12, 45.0], [1.7489016E12, 137.0], [1.748901E12, 59.0], [1.74890262E12, 211.0], [1.74890322E12, 245.0], [1.74890202E12, 171.0], [1.74890364E12, 261.0], [1.74890142E12, 119.0], [1.74890178E12, 152.0], [1.7489034E12, 254.0], [1.74890118E12, 90.0], [1.7489028E12, 222.0], [1.74890382E12, 268.0], [1.7489022E12, 184.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74890394E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 17.0, "minX": 3.0, "maxY": 271.0, "series": [{"data": [[3.0, 237.0], [5.0, 238.0], [6.0, 259.0], [8.0, 260.0], [12.0, 271.0], [13.0, 266.0], [14.0, 264.0], [15.0, 264.0], [16.0, 262.0], [17.0, 250.0], [18.0, 258.0], [19.0, 255.0], [20.0, 247.0], [21.0, 234.0], [22.0, 228.0], [23.0, 221.0], [24.0, 214.0], [25.0, 202.0], [26.0, 189.5], [27.0, 186.0], [28.0, 181.0], [29.0, 177.0], [30.0, 168.0], [31.0, 161.0], [32.0, 156.0], [33.0, 153.0], [35.0, 143.0], [34.0, 149.0], [37.0, 137.0], [36.0, 138.0], [38.0, 133.0], [39.0, 130.0], [41.0, 122.0], [40.0, 126.0], [43.0, 117.0], [42.0, 119.0], [45.0, 111.0], [44.0, 114.5], [47.0, 107.0], [46.0, 109.0], [48.0, 104.0], [49.0, 102.0], [50.0, 101.0], [51.0, 97.0], [53.0, 96.0], [52.0, 96.0], [55.0, 92.0], [54.0, 94.0], [57.0, 88.0], [56.0, 91.0], [59.0, 84.0], [58.0, 85.5], [61.0, 83.0], [60.0, 84.0], [62.0, 81.0], [63.0, 80.0], [67.0, 75.0], [65.0, 77.0], [66.0, 75.0], [64.0, 79.0], [71.0, 70.0], [69.0, 72.0], [70.0, 72.0], [68.0, 73.0], [75.0, 66.0], [72.0, 68.0], [74.0, 68.0], [73.0, 70.0], [76.0, 64.0], [79.0, 63.0], [77.0, 65.0], [78.0, 66.5], [83.0, 61.0], [82.0, 59.0], [81.0, 61.0], [80.0, 63.0], [85.0, 58.0], [84.0, 60.0], [86.0, 57.0], [90.0, 55.0], [91.0, 52.0], [88.0, 56.0], [92.0, 55.0], [95.0, 53.0], [93.0, 54.0], [94.0, 53.0], [99.0, 50.0], [98.0, 49.0], [97.0, 52.0], [96.0, 52.0], [102.0, 48.0], [101.0, 49.0], [100.0, 53.0], [106.0, 46.0], [107.0, 47.0], [105.0, 49.0], [111.0, 46.5], [108.0, 47.0], [114.0, 44.0], [115.0, 44.0], [112.0, 43.0], [113.0, 45.0], [116.0, 43.0], [117.0, 39.0], [119.0, 42.0], [118.0, 44.0], [123.0, 40.0], [122.0, 40.5], [120.0, 40.0], [124.0, 36.0], [126.0, 40.0], [135.0, 37.0], [133.0, 38.5], [139.0, 34.5], [143.0, 35.0], [142.0, 37.0], [150.0, 32.0], [145.0, 35.0], [144.0, 35.0], [146.0, 36.0], [147.0, 35.0], [155.0, 31.0], [154.0, 32.0], [152.0, 32.0], [153.0, 33.0], [165.0, 30.0], [167.0, 30.0], [181.0, 26.5], [177.0, 30.0], [180.0, 29.0], [187.0, 28.0], [191.0, 28.0], [184.0, 29.0], [199.0, 26.0], [198.0, 26.0], [205.0, 25.0], [207.0, 25.0], [208.0, 25.0], [212.0, 25.0], [214.0, 24.0], [209.0, 25.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[16.0, 259.0], [17.0, 257.0], [18.0, 250.0], [19.0, 250.0], [20.0, 241.0], [21.0, 228.0], [22.0, 220.0], [23.0, 214.0], [24.0, 210.0], [25.0, 196.0], [26.0, 184.0], [27.0, 178.0], [28.0, 175.0], [29.0, 170.0], [30.0, 163.0], [31.0, 155.0], [32.0, 149.0], [33.0, 148.0], [35.0, 138.0], [34.0, 143.0], [37.0, 129.0], [36.0, 130.0], [38.0, 127.0], [39.0, 123.0], [41.0, 116.0], [40.0, 121.0], [43.0, 111.0], [42.0, 113.0], [45.0, 107.0], [44.0, 110.0], [47.0, 100.0], [46.0, 102.0], [48.0, 98.0], [49.0, 95.0], [50.0, 95.0], [51.0, 92.0], [53.0, 89.0], [52.0, 89.0], [55.0, 85.0], [54.0, 85.0], [57.0, 81.0], [56.0, 84.0], [59.0, 78.0], [58.0, 80.0], [61.0, 76.0], [60.0, 79.0], [62.0, 75.0], [63.0, 73.0], [67.0, 69.0], [65.0, 71.0], [66.0, 71.0], [64.0, 73.0], [71.0, 63.0], [69.0, 66.0], [70.0, 68.0], [68.0, 68.0], [75.0, 60.0], [72.0, 62.0], [74.0, 63.0], [73.0, 64.0], [76.0, 57.0], [79.0, 57.0], [77.0, 59.0], [78.0, 60.5], [83.0, 55.0], [82.0, 54.0], [81.0, 55.0], [80.0, 57.0], [85.0, 51.0], [84.0, 55.0], [86.0, 50.0], [90.0, 48.0], [91.0, 45.0], [88.0, 50.0], [92.0, 47.0], [95.0, 47.0], [93.0, 47.5], [94.0, 47.0], [99.0, 44.0], [98.0, 43.0], [97.0, 44.0], [96.0, 45.0], [102.0, 45.0], [101.0, 42.0], [100.0, 47.0], [106.0, 39.0], [107.0, 41.5], [105.0, 41.0], [111.0, 40.0], [108.0, 41.0], [114.0, 37.5], [115.0, 37.0], [112.0, 36.0], [113.0, 39.0], [116.0, 36.0], [117.0, 32.0], [119.0, 35.0], [118.0, 39.0], [123.0, 33.0], [122.0, 32.5], [120.0, 34.0], [124.0, 29.5], [126.0, 35.0], [135.0, 30.0], [133.0, 31.0], [139.0, 27.0], [143.0, 28.0], [142.0, 31.0], [150.0, 25.0], [145.0, 28.0], [144.0, 27.0], [146.0, 28.0], [147.0, 28.0], [155.0, 24.5], [154.0, 24.0], [152.0, 26.0], [153.0, 26.0], [165.0, 21.0], [167.0, 24.0], [181.0, 20.0], [177.0, 23.0], [180.0, 22.5], [187.0, 20.0], [191.0, 20.0], [184.0, 21.0], [199.0, 19.0], [198.0, 19.0], [205.0, 18.0], [207.0, 18.0], [208.0, 17.0], [212.0, 17.0], [214.0, 18.0], [209.0, 19.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 214.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 17.0, "minX": 3.0, "maxY": 271.0, "series": [{"data": [[3.0, 237.0], [5.0, 238.0], [6.0, 259.0], [8.0, 260.0], [12.0, 271.0], [13.0, 266.0], [14.0, 264.0], [15.0, 264.0], [16.0, 262.0], [17.0, 250.0], [18.0, 258.0], [19.0, 255.0], [20.0, 247.0], [21.0, 234.0], [22.0, 228.0], [23.0, 221.0], [24.0, 214.0], [25.0, 202.0], [26.0, 189.5], [27.0, 185.0], [28.0, 181.0], [29.0, 177.0], [30.0, 168.0], [31.0, 161.0], [32.0, 156.0], [33.0, 153.0], [35.0, 143.0], [34.0, 149.0], [37.0, 137.0], [36.0, 138.0], [38.0, 133.0], [39.0, 130.0], [41.0, 122.0], [40.0, 126.0], [43.0, 117.0], [42.0, 119.0], [45.0, 111.0], [44.0, 114.5], [47.0, 107.0], [46.0, 109.0], [48.0, 104.0], [49.0, 102.0], [50.0, 101.0], [51.0, 97.0], [53.0, 96.0], [52.0, 96.0], [55.0, 92.0], [54.0, 94.0], [57.0, 88.0], [56.0, 91.0], [59.0, 84.0], [58.0, 85.5], [61.0, 83.0], [60.0, 84.0], [62.0, 81.0], [63.0, 80.0], [67.0, 75.0], [65.0, 77.0], [66.0, 75.0], [64.0, 79.0], [71.0, 70.0], [69.0, 72.0], [70.0, 72.0], [68.0, 73.0], [75.0, 66.0], [72.0, 68.0], [74.0, 68.0], [73.0, 70.0], [76.0, 64.0], [79.0, 63.0], [77.0, 65.0], [78.0, 66.5], [83.0, 61.0], [82.0, 59.0], [81.0, 61.0], [80.0, 63.0], [85.0, 58.0], [84.0, 60.0], [86.0, 57.0], [90.0, 55.0], [91.0, 52.0], [88.0, 56.0], [92.0, 55.0], [95.0, 53.0], [93.0, 54.0], [94.0, 53.0], [99.0, 50.0], [98.0, 49.0], [97.0, 52.0], [96.0, 52.0], [102.0, 48.0], [101.0, 49.0], [100.0, 53.0], [106.0, 46.0], [107.0, 47.0], [105.0, 49.0], [111.0, 46.5], [108.0, 47.0], [114.0, 44.0], [115.0, 44.0], [112.0, 43.0], [113.0, 45.0], [116.0, 43.0], [117.0, 39.0], [119.0, 42.0], [118.0, 44.0], [123.0, 40.0], [122.0, 40.5], [120.0, 40.0], [124.0, 36.0], [126.0, 40.0], [135.0, 37.0], [133.0, 38.5], [139.0, 34.5], [143.0, 35.0], [142.0, 37.0], [150.0, 32.0], [145.0, 35.0], [144.0, 35.0], [146.0, 36.0], [147.0, 35.0], [155.0, 31.0], [154.0, 32.0], [152.0, 32.0], [153.0, 33.0], [165.0, 30.0], [167.0, 30.0], [181.0, 26.0], [177.0, 30.0], [180.0, 29.0], [187.0, 28.0], [191.0, 28.0], [184.0, 29.0], [199.0, 26.0], [198.0, 26.0], [205.0, 25.0], [207.0, 25.0], [208.0, 25.0], [212.0, 25.0], [214.0, 24.0], [209.0, 25.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[16.0, 259.0], [17.0, 257.0], [18.0, 250.0], [19.0, 250.0], [20.0, 241.0], [21.0, 228.0], [22.0, 220.0], [23.0, 214.0], [24.0, 209.0], [25.0, 196.0], [26.0, 184.0], [27.0, 178.0], [28.0, 175.0], [29.0, 170.0], [30.0, 163.0], [31.0, 154.5], [32.0, 149.0], [33.0, 148.0], [35.0, 138.0], [34.0, 143.0], [37.0, 129.0], [36.0, 130.0], [38.0, 127.0], [39.0, 123.0], [41.0, 116.0], [40.0, 121.0], [43.0, 111.0], [42.0, 113.0], [45.0, 107.0], [44.0, 110.0], [47.0, 100.0], [46.0, 102.0], [48.0, 98.0], [49.0, 95.0], [50.0, 95.0], [51.0, 92.0], [53.0, 89.0], [52.0, 89.0], [55.0, 85.0], [54.0, 85.0], [57.0, 81.0], [56.0, 84.0], [59.0, 78.0], [58.0, 80.0], [61.0, 76.0], [60.0, 79.0], [62.0, 75.0], [63.0, 73.0], [67.0, 68.5], [65.0, 71.0], [66.0, 71.0], [64.0, 73.0], [71.0, 63.0], [69.0, 66.0], [70.0, 68.0], [68.0, 68.0], [75.0, 60.0], [72.0, 62.0], [74.0, 63.0], [73.0, 64.0], [76.0, 57.0], [79.0, 57.0], [77.0, 59.0], [78.0, 60.5], [83.0, 55.0], [82.0, 54.0], [81.0, 55.0], [80.0, 57.0], [85.0, 51.0], [84.0, 55.0], [86.0, 50.0], [90.0, 48.0], [91.0, 45.0], [88.0, 50.0], [92.0, 47.0], [95.0, 47.0], [93.0, 47.5], [94.0, 47.0], [99.0, 44.0], [98.0, 43.0], [97.0, 44.0], [96.0, 45.0], [102.0, 45.0], [101.0, 42.0], [100.0, 47.0], [106.0, 39.0], [107.0, 41.5], [105.0, 41.0], [111.0, 40.0], [108.0, 41.0], [114.0, 37.5], [115.0, 37.0], [112.0, 36.0], [113.0, 39.0], [116.0, 36.0], [117.0, 32.0], [119.0, 35.0], [118.0, 39.0], [123.0, 33.0], [122.0, 32.5], [120.0, 34.0], [124.0, 29.5], [126.0, 35.0], [135.0, 30.0], [133.0, 31.0], [139.0, 27.0], [143.0, 28.0], [142.0, 31.0], [150.0, 25.0], [145.0, 28.0], [144.0, 27.0], [146.0, 28.0], [147.0, 28.0], [155.0, 24.5], [154.0, 24.0], [152.0, 26.0], [153.0, 26.0], [165.0, 21.0], [167.0, 24.0], [181.0, 20.0], [177.0, 23.0], [180.0, 22.5], [187.0, 20.0], [191.0, 20.0], [184.0, 21.0], [199.0, 19.0], [198.0, 19.0], [205.0, 18.0], [207.0, 18.0], [208.0, 17.0], [212.0, 17.0], [214.0, 18.0], [209.0, 19.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 214.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.8, "minX": 1.74890088E12, "maxY": 112.73333333333333, "series": [{"data": [[1.74890226E12, 26.45], [1.74890388E12, 14.666666666666666], [1.74890166E12, 35.15], [1.74890106E12, 70.46666666666667], [1.74890328E12, 20.166666666666668], [1.74890268E12, 23.316666666666666], [1.74890304E12, 21.2], [1.74890244E12, 25.033333333333335], [1.74890184E12, 31.55], [1.74890286E12, 22.183333333333334], [1.74890124E12, 51.233333333333334], [1.74890346E12, 19.3], [1.7489013E12, 47.05], [1.74890352E12, 15.9], [1.74890292E12, 21.816666666666666], [1.74890232E12, 25.883333333333333], [1.74890334E12, 19.883333333333333], [1.74890172E12, 33.6], [1.74890394E12, 5.8], [1.74890208E12, 28.533333333333335], [1.7489031E12, 20.95], [1.74890148E12, 39.95], [1.7489037E12, 15.066666666666666], [1.74890088E12, 91.9], [1.7489025E12, 24.533333333333335], [1.7489019E12, 30.883333333333333], [1.74890256E12, 24.1], [1.74890358E12, 15.466666666666667], [1.74890196E12, 30.083333333333332], [1.74890298E12, 21.5], [1.74890136E12, 44.56666666666667], [1.74890238E12, 25.5], [1.74890274E12, 22.866666666666667], [1.74890112E12, 61.7], [1.74890214E12, 27.783333333333335], [1.74890154E12, 37.833333333333336], [1.74890316E12, 20.533333333333335], [1.74890376E12, 14.966666666666667], [1.74890094E12, 112.73333333333333], [1.7489016E12, 36.65], [1.748901E12, 84.75], [1.74890262E12, 23.616666666666667], [1.74890322E12, 20.433333333333334], [1.74890202E12, 29.366666666666667], [1.74890364E12, 15.283333333333333], [1.74890142E12, 41.7], [1.74890178E12, 32.85], [1.7489034E12, 19.666666666666668], [1.74890118E12, 55.75], [1.7489028E12, 22.5], [1.74890382E12, 14.9], [1.7489022E12, 27.1]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74890394E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.74890088E12, "maxY": 85.96666666666667, "series": [{"data": [[1.74890226E12, 21.016666666666666], [1.74890388E12, 14.666666666666666], [1.74890166E12, 27.866666666666667], [1.74890106E12, 54.95], [1.74890328E12, 16.05], [1.74890268E12, 18.566666666666666], [1.74890304E12, 16.85], [1.74890244E12, 19.933333333333334], [1.74890184E12, 24.916666666666668], [1.74890286E12, 17.666666666666668], [1.74890124E12, 40.38333333333333], [1.74890346E12, 15.366666666666667], [1.7489013E12, 37.06666666666667], [1.74890352E12, 15.866666666666667], [1.74890292E12, 17.333333333333332], [1.74890232E12, 20.583333333333332], [1.74890334E12, 15.85], [1.74890172E12, 26.65], [1.74890394E12, 5.866666666666666], [1.74890208E12, 22.666666666666668], [1.7489031E12, 16.683333333333334], [1.74890148E12, 31.55], [1.7489037E12, 15.066666666666666], [1.74890088E12, 68.33333333333333], [1.7489025E12, 19.5], [1.7489019E12, 24.45], [1.74890256E12, 19.166666666666668], [1.74890358E12, 15.466666666666667], [1.74890196E12, 23.85], [1.74890298E12, 17.116666666666667], [1.74890136E12, 35.05], [1.74890238E12, 20.266666666666666], [1.74890274E12, 18.166666666666668], [1.74890112E12, 48.35], [1.74890214E12, 22.083333333333332], [1.74890154E12, 29.916666666666668], [1.74890316E12, 16.316666666666666], [1.74890376E12, 14.966666666666667], [1.74890094E12, 85.96666666666667], [1.7489016E12, 29.016666666666666], [1.748901E12, 65.61666666666666], [1.74890262E12, 18.783333333333335], [1.74890322E12, 16.283333333333335], [1.74890202E12, 23.216666666666665], [1.74890364E12, 15.283333333333333], [1.74890142E12, 32.96666666666667], [1.74890178E12, 26.033333333333335], [1.7489034E12, 15.666666666666666], [1.74890118E12, 43.71666666666667], [1.7489028E12, 17.9], [1.74890382E12, 14.9], [1.7489022E12, 21.566666666666666]], "isOverall": false, "label": "201", "isController": false}, {"data": [[1.74890226E12, 5.433333333333334], [1.74890256E12, 4.933333333333334], [1.74890166E12, 7.283333333333333], [1.74890196E12, 6.233333333333333], [1.74890298E12, 4.383333333333334], [1.74890106E12, 15.516666666666667], [1.74890136E12, 9.516666666666667], [1.74890238E12, 5.233333333333333], [1.74890328E12, 4.116666666666666], [1.74890268E12, 4.75], [1.74890274E12, 4.7], [1.74890304E12, 4.35], [1.74890112E12, 13.35], [1.74890214E12, 5.7], [1.74890244E12, 5.1], [1.74890154E12, 7.916666666666667], [1.74890316E12, 4.216666666666667], [1.74890184E12, 6.633333333333334], [1.74890286E12, 4.516666666666667], [1.74890094E12, 26.766666666666666], [1.74890124E12, 10.85], [1.74890346E12, 3.933333333333333], [1.7489013E12, 9.983333333333333], [1.7489016E12, 7.633333333333334], [1.748901E12, 19.133333333333333], [1.74890262E12, 4.833333333333333], [1.74890352E12, 0.05], [1.74890292E12, 4.483333333333333], [1.74890322E12, 4.15], [1.74890202E12, 6.15], [1.74890232E12, 5.3], [1.74890334E12, 4.033333333333333], [1.74890142E12, 8.733333333333333], [1.74890172E12, 6.95], [1.74890178E12, 6.816666666666666], [1.7489034E12, 4.0], [1.74890208E12, 5.866666666666666], [1.7489031E12, 4.266666666666667], [1.74890118E12, 12.033333333333333], [1.74890148E12, 8.4], [1.74890088E12, 23.483333333333334], [1.7489025E12, 5.033333333333333], [1.7489028E12, 4.6], [1.7489019E12, 6.433333333333334], [1.7489022E12, 5.533333333333333]], "isOverall": false, "label": "400", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74890394E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.74890088E12, "maxY": 85.96666666666667, "series": [{"data": [[1.74890226E12, 21.016666666666666], [1.74890388E12, 14.666666666666666], [1.74890166E12, 27.866666666666667], [1.74890106E12, 54.95], [1.74890328E12, 16.05], [1.74890268E12, 18.566666666666666], [1.74890304E12, 16.85], [1.74890244E12, 19.933333333333334], [1.74890184E12, 24.916666666666668], [1.74890286E12, 17.666666666666668], [1.74890124E12, 40.38333333333333], [1.74890346E12, 15.366666666666667], [1.7489013E12, 37.06666666666667], [1.74890352E12, 15.866666666666667], [1.74890292E12, 17.333333333333332], [1.74890232E12, 20.583333333333332], [1.74890334E12, 15.85], [1.74890172E12, 26.65], [1.74890394E12, 5.866666666666666], [1.74890208E12, 22.666666666666668], [1.7489031E12, 16.683333333333334], [1.74890148E12, 31.55], [1.7489037E12, 15.066666666666666], [1.74890088E12, 68.33333333333333], [1.7489025E12, 19.5], [1.7489019E12, 24.45], [1.74890256E12, 19.166666666666668], [1.74890358E12, 15.466666666666667], [1.74890196E12, 23.85], [1.74890298E12, 17.116666666666667], [1.74890136E12, 35.05], [1.74890238E12, 20.266666666666666], [1.74890274E12, 18.166666666666668], [1.74890112E12, 48.35], [1.74890214E12, 22.083333333333332], [1.74890154E12, 29.916666666666668], [1.74890316E12, 16.316666666666666], [1.74890376E12, 14.966666666666667], [1.74890094E12, 85.96666666666667], [1.7489016E12, 29.016666666666666], [1.748901E12, 65.61666666666666], [1.74890262E12, 18.783333333333335], [1.74890322E12, 16.283333333333335], [1.74890202E12, 23.216666666666665], [1.74890364E12, 15.283333333333333], [1.74890142E12, 32.96666666666667], [1.74890178E12, 26.033333333333335], [1.7489034E12, 15.666666666666666], [1.74890118E12, 43.71666666666667], [1.7489028E12, 17.9], [1.74890382E12, 14.9], [1.7489022E12, 21.566666666666666]], "isOverall": false, "label": "HTTP Request - enroll-success", "isController": false}, {"data": [[1.74890226E12, 5.433333333333334], [1.74890256E12, 4.933333333333334], [1.74890166E12, 7.283333333333333], [1.74890196E12, 6.233333333333333], [1.74890298E12, 4.383333333333334], [1.74890106E12, 15.516666666666667], [1.74890136E12, 9.516666666666667], [1.74890238E12, 5.233333333333333], [1.74890328E12, 4.116666666666666], [1.74890268E12, 4.75], [1.74890274E12, 4.7], [1.74890304E12, 4.35], [1.74890112E12, 13.35], [1.74890214E12, 5.7], [1.74890244E12, 5.1], [1.74890154E12, 7.916666666666667], [1.74890316E12, 4.216666666666667], [1.74890184E12, 6.633333333333334], [1.74890286E12, 4.516666666666667], [1.74890094E12, 26.766666666666666], [1.74890124E12, 10.85], [1.74890346E12, 3.933333333333333], [1.7489013E12, 9.983333333333333], [1.7489016E12, 7.633333333333334], [1.748901E12, 19.133333333333333], [1.74890262E12, 4.833333333333333], [1.74890352E12, 0.05], [1.74890292E12, 4.483333333333333], [1.74890322E12, 4.15], [1.74890202E12, 6.15], [1.74890232E12, 5.3], [1.74890334E12, 4.033333333333333], [1.74890142E12, 8.733333333333333], [1.74890172E12, 6.95], [1.74890178E12, 6.816666666666666], [1.7489034E12, 4.0], [1.74890208E12, 5.866666666666666], [1.7489031E12, 4.266666666666667], [1.74890118E12, 12.033333333333333], [1.74890148E12, 8.4], [1.74890088E12, 23.483333333333334], [1.7489025E12, 5.033333333333333], [1.7489028E12, 4.6], [1.7489019E12, 6.433333333333334], [1.7489022E12, 5.533333333333333]], "isOverall": false, "label": "HTTP Request - enroll-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74890394E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.74890088E12, "maxY": 85.96666666666667, "series": [{"data": [[1.74890226E12, 21.016666666666666], [1.74890388E12, 14.666666666666666], [1.74890166E12, 27.866666666666667], [1.74890106E12, 54.95], [1.74890328E12, 16.05], [1.74890268E12, 18.566666666666666], [1.74890304E12, 16.85], [1.74890244E12, 19.933333333333334], [1.74890184E12, 24.916666666666668], [1.74890286E12, 17.666666666666668], [1.74890124E12, 40.38333333333333], [1.74890346E12, 15.366666666666667], [1.7489013E12, 37.06666666666667], [1.74890352E12, 15.866666666666667], [1.74890292E12, 17.333333333333332], [1.74890232E12, 20.583333333333332], [1.74890334E12, 15.85], [1.74890172E12, 26.65], [1.74890394E12, 5.866666666666666], [1.74890208E12, 22.666666666666668], [1.7489031E12, 16.683333333333334], [1.74890148E12, 31.55], [1.7489037E12, 15.066666666666666], [1.74890088E12, 68.33333333333333], [1.7489025E12, 19.5], [1.7489019E12, 24.45], [1.74890256E12, 19.166666666666668], [1.74890358E12, 15.466666666666667], [1.74890196E12, 23.85], [1.74890298E12, 17.116666666666667], [1.74890136E12, 35.05], [1.74890238E12, 20.266666666666666], [1.74890274E12, 18.166666666666668], [1.74890112E12, 48.35], [1.74890214E12, 22.083333333333332], [1.74890154E12, 29.916666666666668], [1.74890316E12, 16.316666666666666], [1.74890376E12, 14.966666666666667], [1.74890094E12, 85.96666666666667], [1.7489016E12, 29.016666666666666], [1.748901E12, 65.61666666666666], [1.74890262E12, 18.783333333333335], [1.74890322E12, 16.283333333333335], [1.74890202E12, 23.216666666666665], [1.74890364E12, 15.283333333333333], [1.74890142E12, 32.96666666666667], [1.74890178E12, 26.033333333333335], [1.7489034E12, 15.666666666666666], [1.74890118E12, 43.71666666666667], [1.7489028E12, 17.9], [1.74890382E12, 14.9], [1.7489022E12, 21.566666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.74890226E12, 5.433333333333334], [1.74890256E12, 4.933333333333334], [1.74890166E12, 7.283333333333333], [1.74890196E12, 6.233333333333333], [1.74890298E12, 4.383333333333334], [1.74890106E12, 15.516666666666667], [1.74890136E12, 9.516666666666667], [1.74890238E12, 5.233333333333333], [1.74890328E12, 4.116666666666666], [1.74890268E12, 4.75], [1.74890274E12, 4.7], [1.74890304E12, 4.35], [1.74890112E12, 13.35], [1.74890214E12, 5.7], [1.74890244E12, 5.1], [1.74890154E12, 7.916666666666667], [1.74890316E12, 4.216666666666667], [1.74890184E12, 6.633333333333334], [1.74890286E12, 4.516666666666667], [1.74890094E12, 26.766666666666666], [1.74890124E12, 10.85], [1.74890346E12, 3.933333333333333], [1.7489013E12, 9.983333333333333], [1.7489016E12, 7.633333333333334], [1.748901E12, 19.133333333333333], [1.74890262E12, 4.833333333333333], [1.74890352E12, 0.05], [1.74890292E12, 4.483333333333333], [1.74890322E12, 4.15], [1.74890202E12, 6.15], [1.74890232E12, 5.3], [1.74890334E12, 4.033333333333333], [1.74890142E12, 8.733333333333333], [1.74890172E12, 6.95], [1.74890178E12, 6.816666666666666], [1.7489034E12, 4.0], [1.74890208E12, 5.866666666666666], [1.7489031E12, 4.266666666666667], [1.74890118E12, 12.033333333333333], [1.74890148E12, 8.4], [1.74890088E12, 23.483333333333334], [1.7489025E12, 5.033333333333333], [1.7489028E12, 4.6], [1.7489019E12, 6.433333333333334], [1.7489022E12, 5.533333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74890394E12, "title": "Total Transactions Per Second"}},
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

