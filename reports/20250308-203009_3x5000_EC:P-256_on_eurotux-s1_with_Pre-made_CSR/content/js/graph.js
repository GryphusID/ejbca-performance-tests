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
        data: {"result": {"minY": 241.0, "minX": 0.0, "maxY": 2461.0, "series": [{"data": [[0.0, 241.0], [0.1, 255.0], [0.2, 256.0], [0.3, 258.0], [0.4, 259.0], [0.5, 260.0], [0.6, 261.0], [0.7, 262.0], [0.8, 262.0], [0.9, 263.0], [1.0, 264.0], [1.1, 264.0], [1.2, 265.0], [1.3, 266.0], [1.4, 266.0], [1.5, 267.0], [1.6, 268.0], [1.7, 268.0], [1.8, 269.0], [1.9, 269.0], [2.0, 270.0], [2.1, 271.0], [2.2, 272.0], [2.3, 272.0], [2.4, 273.0], [2.5, 273.0], [2.6, 274.0], [2.7, 275.0], [2.8, 277.0], [2.9, 279.0], [3.0, 285.0], [3.1, 291.0], [3.2, 314.0], [3.3, 316.0], [3.4, 319.0], [3.5, 319.0], [3.6, 320.0], [3.7, 321.0], [3.8, 321.0], [3.9, 322.0], [4.0, 322.0], [4.1, 323.0], [4.2, 323.0], [4.3, 323.0], [4.4, 323.0], [4.5, 324.0], [4.6, 324.0], [4.7, 324.0], [4.8, 324.0], [4.9, 324.0], [5.0, 325.0], [5.1, 325.0], [5.2, 325.0], [5.3, 325.0], [5.4, 325.0], [5.5, 325.0], [5.6, 325.0], [5.7, 326.0], [5.8, 326.0], [5.9, 326.0], [6.0, 326.0], [6.1, 326.0], [6.2, 326.0], [6.3, 326.0], [6.4, 326.0], [6.5, 326.0], [6.6, 326.0], [6.7, 327.0], [6.8, 327.0], [6.9, 327.0], [7.0, 327.0], [7.1, 327.0], [7.2, 327.0], [7.3, 327.0], [7.4, 327.0], [7.5, 327.0], [7.6, 327.0], [7.7, 327.0], [7.8, 327.0], [7.9, 327.0], [8.0, 328.0], [8.1, 328.0], [8.2, 328.0], [8.3, 328.0], [8.4, 328.0], [8.5, 328.0], [8.6, 328.0], [8.7, 328.0], [8.8, 328.0], [8.9, 328.0], [9.0, 328.0], [9.1, 328.0], [9.2, 328.0], [9.3, 328.0], [9.4, 328.0], [9.5, 328.0], [9.6, 328.0], [9.7, 328.0], [9.8, 329.0], [9.9, 329.0], [10.0, 329.0], [10.1, 329.0], [10.2, 329.0], [10.3, 329.0], [10.4, 329.0], [10.5, 329.0], [10.6, 329.0], [10.7, 329.0], [10.8, 329.0], [10.9, 329.0], [11.0, 329.0], [11.1, 329.0], [11.2, 329.0], [11.3, 329.0], [11.4, 329.0], [11.5, 330.0], [11.6, 330.0], [11.7, 330.0], [11.8, 330.0], [11.9, 330.0], [12.0, 330.0], [12.1, 330.0], [12.2, 330.0], [12.3, 330.0], [12.4, 330.0], [12.5, 330.0], [12.6, 330.0], [12.7, 330.0], [12.8, 330.0], [12.9, 330.0], [13.0, 330.0], [13.1, 330.0], [13.2, 330.0], [13.3, 331.0], [13.4, 331.0], [13.5, 331.0], [13.6, 331.0], [13.7, 331.0], [13.8, 331.0], [13.9, 331.0], [14.0, 331.0], [14.1, 331.0], [14.2, 331.0], [14.3, 331.0], [14.4, 331.0], [14.5, 331.0], [14.6, 331.0], [14.7, 331.0], [14.8, 331.0], [14.9, 331.0], [15.0, 331.0], [15.1, 331.0], [15.2, 331.0], [15.3, 332.0], [15.4, 332.0], [15.5, 332.0], [15.6, 332.0], [15.7, 332.0], [15.8, 332.0], [15.9, 332.0], [16.0, 332.0], [16.1, 332.0], [16.2, 332.0], [16.3, 332.0], [16.4, 332.0], [16.5, 332.0], [16.6, 332.0], [16.7, 332.0], [16.8, 332.0], [16.9, 332.0], [17.0, 332.0], [17.1, 332.0], [17.2, 332.0], [17.3, 332.0], [17.4, 332.0], [17.5, 332.0], [17.6, 333.0], [17.7, 333.0], [17.8, 333.0], [17.9, 333.0], [18.0, 333.0], [18.1, 333.0], [18.2, 333.0], [18.3, 333.0], [18.4, 333.0], [18.5, 333.0], [18.6, 333.0], [18.7, 333.0], [18.8, 333.0], [18.9, 333.0], [19.0, 333.0], [19.1, 333.0], [19.2, 333.0], [19.3, 333.0], [19.4, 333.0], [19.5, 333.0], [19.6, 333.0], [19.7, 333.0], [19.8, 333.0], [19.9, 334.0], [20.0, 334.0], [20.1, 334.0], [20.2, 334.0], [20.3, 334.0], [20.4, 334.0], [20.5, 334.0], [20.6, 334.0], [20.7, 334.0], [20.8, 334.0], [20.9, 334.0], [21.0, 334.0], [21.1, 334.0], [21.2, 334.0], [21.3, 334.0], [21.4, 334.0], [21.5, 334.0], [21.6, 334.0], [21.7, 334.0], [21.8, 334.0], [21.9, 334.0], [22.0, 334.0], [22.1, 334.0], [22.2, 334.0], [22.3, 334.0], [22.4, 334.0], [22.5, 335.0], [22.6, 335.0], [22.7, 335.0], [22.8, 335.0], [22.9, 335.0], [23.0, 335.0], [23.1, 335.0], [23.2, 335.0], [23.3, 335.0], [23.4, 335.0], [23.5, 335.0], [23.6, 335.0], [23.7, 335.0], [23.8, 335.0], [23.9, 335.0], [24.0, 335.0], [24.1, 335.0], [24.2, 335.0], [24.3, 335.0], [24.4, 335.0], [24.5, 335.0], [24.6, 335.0], [24.7, 335.0], [24.8, 335.0], [24.9, 335.0], [25.0, 335.0], [25.1, 336.0], [25.2, 336.0], [25.3, 336.0], [25.4, 336.0], [25.5, 336.0], [25.6, 336.0], [25.7, 336.0], [25.8, 336.0], [25.9, 336.0], [26.0, 336.0], [26.1, 336.0], [26.2, 336.0], [26.3, 336.0], [26.4, 336.0], [26.5, 336.0], [26.6, 336.0], [26.7, 336.0], [26.8, 336.0], [26.9, 336.0], [27.0, 336.0], [27.1, 336.0], [27.2, 336.0], [27.3, 336.0], [27.4, 336.0], [27.5, 337.0], [27.6, 337.0], [27.7, 337.0], [27.8, 337.0], [27.9, 337.0], [28.0, 337.0], [28.1, 337.0], [28.2, 337.0], [28.3, 337.0], [28.4, 337.0], [28.5, 337.0], [28.6, 337.0], [28.7, 337.0], [28.8, 337.0], [28.9, 337.0], [29.0, 337.0], [29.1, 337.0], [29.2, 337.0], [29.3, 337.0], [29.4, 337.0], [29.5, 337.0], [29.6, 337.0], [29.7, 337.0], [29.8, 337.0], [29.9, 337.0], [30.0, 337.0], [30.1, 337.0], [30.2, 338.0], [30.3, 338.0], [30.4, 338.0], [30.5, 338.0], [30.6, 338.0], [30.7, 338.0], [30.8, 338.0], [30.9, 338.0], [31.0, 338.0], [31.1, 338.0], [31.2, 338.0], [31.3, 338.0], [31.4, 338.0], [31.5, 338.0], [31.6, 338.0], [31.7, 338.0], [31.8, 338.0], [31.9, 338.0], [32.0, 338.0], [32.1, 338.0], [32.2, 338.0], [32.3, 338.0], [32.4, 338.0], [32.5, 338.0], [32.6, 338.0], [32.7, 338.0], [32.8, 339.0], [32.9, 339.0], [33.0, 339.0], [33.1, 339.0], [33.2, 339.0], [33.3, 339.0], [33.4, 339.0], [33.5, 339.0], [33.6, 339.0], [33.7, 339.0], [33.8, 339.0], [33.9, 339.0], [34.0, 339.0], [34.1, 339.0], [34.2, 339.0], [34.3, 339.0], [34.4, 339.0], [34.5, 339.0], [34.6, 339.0], [34.7, 339.0], [34.8, 339.0], [34.9, 339.0], [35.0, 339.0], [35.1, 339.0], [35.2, 339.0], [35.3, 339.0], [35.4, 339.0], [35.5, 339.0], [35.6, 339.0], [35.7, 340.0], [35.8, 340.0], [35.9, 340.0], [36.0, 340.0], [36.1, 340.0], [36.2, 340.0], [36.3, 340.0], [36.4, 340.0], [36.5, 340.0], [36.6, 340.0], [36.7, 340.0], [36.8, 340.0], [36.9, 340.0], [37.0, 340.0], [37.1, 340.0], [37.2, 340.0], [37.3, 340.0], [37.4, 340.0], [37.5, 340.0], [37.6, 340.0], [37.7, 340.0], [37.8, 340.0], [37.9, 340.0], [38.0, 340.0], [38.1, 340.0], [38.2, 340.0], [38.3, 341.0], [38.4, 341.0], [38.5, 341.0], [38.6, 341.0], [38.7, 341.0], [38.8, 341.0], [38.9, 341.0], [39.0, 341.0], [39.1, 341.0], [39.2, 341.0], [39.3, 341.0], [39.4, 341.0], [39.5, 341.0], [39.6, 341.0], [39.7, 341.0], [39.8, 341.0], [39.9, 341.0], [40.0, 341.0], [40.1, 341.0], [40.2, 341.0], [40.3, 341.0], [40.4, 341.0], [40.5, 341.0], [40.6, 341.0], [40.7, 341.0], [40.8, 341.0], [40.9, 341.0], [41.0, 341.0], [41.1, 342.0], [41.2, 342.0], [41.3, 342.0], [41.4, 342.0], [41.5, 342.0], [41.6, 342.0], [41.7, 342.0], [41.8, 342.0], [41.9, 342.0], [42.0, 342.0], [42.1, 342.0], [42.2, 342.0], [42.3, 342.0], [42.4, 342.0], [42.5, 342.0], [42.6, 342.0], [42.7, 342.0], [42.8, 342.0], [42.9, 342.0], [43.0, 342.0], [43.1, 342.0], [43.2, 342.0], [43.3, 342.0], [43.4, 342.0], [43.5, 342.0], [43.6, 342.0], [43.7, 343.0], [43.8, 343.0], [43.9, 343.0], [44.0, 343.0], [44.1, 343.0], [44.2, 343.0], [44.3, 343.0], [44.4, 343.0], [44.5, 343.0], [44.6, 343.0], [44.7, 343.0], [44.8, 343.0], [44.9, 343.0], [45.0, 343.0], [45.1, 343.0], [45.2, 343.0], [45.3, 343.0], [45.4, 343.0], [45.5, 343.0], [45.6, 343.0], [45.7, 343.0], [45.8, 343.0], [45.9, 343.0], [46.0, 343.0], [46.1, 343.0], [46.2, 344.0], [46.3, 344.0], [46.4, 344.0], [46.5, 344.0], [46.6, 344.0], [46.7, 344.0], [46.8, 344.0], [46.9, 344.0], [47.0, 344.0], [47.1, 344.0], [47.2, 344.0], [47.3, 344.0], [47.4, 344.0], [47.5, 344.0], [47.6, 344.0], [47.7, 344.0], [47.8, 344.0], [47.9, 344.0], [48.0, 344.0], [48.1, 344.0], [48.2, 344.0], [48.3, 344.0], [48.4, 344.0], [48.5, 344.0], [48.6, 344.0], [48.7, 344.0], [48.8, 345.0], [48.9, 345.0], [49.0, 345.0], [49.1, 345.0], [49.2, 345.0], [49.3, 345.0], [49.4, 345.0], [49.5, 345.0], [49.6, 345.0], [49.7, 345.0], [49.8, 345.0], [49.9, 345.0], [50.0, 345.0], [50.1, 345.0], [50.2, 345.0], [50.3, 345.0], [50.4, 345.0], [50.5, 345.0], [50.6, 345.0], [50.7, 345.0], [50.8, 345.0], [50.9, 345.0], [51.0, 345.0], [51.1, 345.0], [51.2, 345.0], [51.3, 345.0], [51.4, 345.0], [51.5, 346.0], [51.6, 346.0], [51.7, 346.0], [51.8, 346.0], [51.9, 346.0], [52.0, 346.0], [52.1, 346.0], [52.2, 346.0], [52.3, 346.0], [52.4, 346.0], [52.5, 346.0], [52.6, 346.0], [52.7, 346.0], [52.8, 346.0], [52.9, 346.0], [53.0, 346.0], [53.1, 346.0], [53.2, 346.0], [53.3, 346.0], [53.4, 346.0], [53.5, 346.0], [53.6, 346.0], [53.7, 346.0], [53.8, 346.0], [53.9, 346.0], [54.0, 346.0], [54.1, 346.0], [54.2, 346.0], [54.3, 347.0], [54.4, 347.0], [54.5, 347.0], [54.6, 347.0], [54.7, 347.0], [54.8, 347.0], [54.9, 347.0], [55.0, 347.0], [55.1, 347.0], [55.2, 347.0], [55.3, 347.0], [55.4, 347.0], [55.5, 347.0], [55.6, 347.0], [55.7, 347.0], [55.8, 347.0], [55.9, 347.0], [56.0, 347.0], [56.1, 347.0], [56.2, 347.0], [56.3, 347.0], [56.4, 347.0], [56.5, 347.0], [56.6, 347.0], [56.7, 347.0], [56.8, 347.0], [56.9, 348.0], [57.0, 348.0], [57.1, 348.0], [57.2, 348.0], [57.3, 348.0], [57.4, 348.0], [57.5, 348.0], [57.6, 348.0], [57.7, 348.0], [57.8, 348.0], [57.9, 348.0], [58.0, 348.0], [58.1, 348.0], [58.2, 348.0], [58.3, 348.0], [58.4, 348.0], [58.5, 348.0], [58.6, 348.0], [58.7, 348.0], [58.8, 348.0], [58.9, 348.0], [59.0, 348.0], [59.1, 349.0], [59.2, 349.0], [59.3, 349.0], [59.4, 349.0], [59.5, 349.0], [59.6, 349.0], [59.7, 349.0], [59.8, 349.0], [59.9, 349.0], [60.0, 349.0], [60.1, 349.0], [60.2, 349.0], [60.3, 349.0], [60.4, 349.0], [60.5, 349.0], [60.6, 349.0], [60.7, 349.0], [60.8, 349.0], [60.9, 349.0], [61.0, 349.0], [61.1, 349.0], [61.2, 349.0], [61.3, 349.0], [61.4, 349.0], [61.5, 350.0], [61.6, 350.0], [61.7, 350.0], [61.8, 350.0], [61.9, 350.0], [62.0, 350.0], [62.1, 350.0], [62.2, 350.0], [62.3, 350.0], [62.4, 350.0], [62.5, 350.0], [62.6, 350.0], [62.7, 350.0], [62.8, 350.0], [62.9, 350.0], [63.0, 350.0], [63.1, 350.0], [63.2, 350.0], [63.3, 351.0], [63.4, 351.0], [63.5, 351.0], [63.6, 351.0], [63.7, 351.0], [63.8, 351.0], [63.9, 351.0], [64.0, 351.0], [64.1, 351.0], [64.2, 351.0], [64.3, 351.0], [64.4, 351.0], [64.5, 351.0], [64.6, 351.0], [64.7, 351.0], [64.8, 351.0], [64.9, 351.0], [65.0, 352.0], [65.1, 352.0], [65.2, 352.0], [65.3, 352.0], [65.4, 352.0], [65.5, 352.0], [65.6, 352.0], [65.7, 352.0], [65.8, 352.0], [65.9, 352.0], [66.0, 352.0], [66.1, 353.0], [66.2, 353.0], [66.3, 353.0], [66.4, 353.0], [66.5, 353.0], [66.6, 353.0], [66.7, 353.0], [66.8, 353.0], [66.9, 353.0], [67.0, 353.0], [67.1, 353.0], [67.2, 354.0], [67.3, 354.0], [67.4, 354.0], [67.5, 354.0], [67.6, 354.0], [67.7, 354.0], [67.8, 354.0], [67.9, 354.0], [68.0, 354.0], [68.1, 355.0], [68.2, 355.0], [68.3, 355.0], [68.4, 355.0], [68.5, 355.0], [68.6, 355.0], [68.7, 355.0], [68.8, 355.0], [68.9, 356.0], [69.0, 356.0], [69.1, 356.0], [69.2, 356.0], [69.3, 356.0], [69.4, 356.0], [69.5, 356.0], [69.6, 357.0], [69.7, 357.0], [69.8, 357.0], [69.9, 357.0], [70.0, 357.0], [70.1, 357.0], [70.2, 357.0], [70.3, 358.0], [70.4, 358.0], [70.5, 358.0], [70.6, 358.0], [70.7, 358.0], [70.8, 358.0], [70.9, 358.0], [71.0, 359.0], [71.1, 359.0], [71.2, 359.0], [71.3, 359.0], [71.4, 359.0], [71.5, 359.0], [71.6, 360.0], [71.7, 360.0], [71.8, 360.0], [71.9, 360.0], [72.0, 360.0], [72.1, 361.0], [72.2, 361.0], [72.3, 361.0], [72.4, 361.0], [72.5, 362.0], [72.6, 362.0], [72.7, 362.0], [72.8, 362.0], [72.9, 363.0], [73.0, 363.0], [73.1, 363.0], [73.2, 363.0], [73.3, 363.0], [73.4, 364.0], [73.5, 364.0], [73.6, 364.0], [73.7, 364.0], [73.8, 364.0], [73.9, 364.0], [74.0, 365.0], [74.1, 365.0], [74.2, 365.0], [74.3, 365.0], [74.4, 365.0], [74.5, 365.0], [74.6, 366.0], [74.7, 366.0], [74.8, 366.0], [74.9, 366.0], [75.0, 366.0], [75.1, 366.0], [75.2, 367.0], [75.3, 367.0], [75.4, 367.0], [75.5, 367.0], [75.6, 368.0], [75.7, 368.0], [75.8, 368.0], [75.9, 368.0], [76.0, 368.0], [76.1, 369.0], [76.2, 369.0], [76.3, 369.0], [76.4, 369.0], [76.5, 369.0], [76.6, 369.0], [76.7, 370.0], [76.8, 370.0], [76.9, 370.0], [77.0, 370.0], [77.1, 370.0], [77.2, 370.0], [77.3, 371.0], [77.4, 371.0], [77.5, 371.0], [77.6, 371.0], [77.7, 371.0], [77.8, 371.0], [77.9, 371.0], [78.0, 372.0], [78.1, 372.0], [78.2, 372.0], [78.3, 372.0], [78.4, 372.0], [78.5, 372.0], [78.6, 372.0], [78.7, 372.0], [78.8, 373.0], [78.9, 373.0], [79.0, 373.0], [79.1, 373.0], [79.2, 373.0], [79.3, 373.0], [79.4, 373.0], [79.5, 373.0], [79.6, 373.0], [79.7, 374.0], [79.8, 374.0], [79.9, 374.0], [80.0, 374.0], [80.1, 374.0], [80.2, 374.0], [80.3, 374.0], [80.4, 374.0], [80.5, 374.0], [80.6, 375.0], [80.7, 375.0], [80.8, 375.0], [80.9, 375.0], [81.0, 375.0], [81.1, 375.0], [81.2, 375.0], [81.3, 375.0], [81.4, 375.0], [81.5, 375.0], [81.6, 375.0], [81.7, 376.0], [81.8, 376.0], [81.9, 376.0], [82.0, 376.0], [82.1, 376.0], [82.2, 376.0], [82.3, 376.0], [82.4, 376.0], [82.5, 376.0], [82.6, 376.0], [82.7, 377.0], [82.8, 377.0], [82.9, 377.0], [83.0, 377.0], [83.1, 377.0], [83.2, 377.0], [83.3, 377.0], [83.4, 377.0], [83.5, 377.0], [83.6, 377.0], [83.7, 378.0], [83.8, 378.0], [83.9, 378.0], [84.0, 378.0], [84.1, 378.0], [84.2, 378.0], [84.3, 378.0], [84.4, 378.0], [84.5, 378.0], [84.6, 379.0], [84.7, 379.0], [84.8, 379.0], [84.9, 379.0], [85.0, 379.0], [85.1, 379.0], [85.2, 379.0], [85.3, 379.0], [85.4, 380.0], [85.5, 380.0], [85.6, 380.0], [85.7, 380.0], [85.8, 380.0], [85.9, 380.0], [86.0, 381.0], [86.1, 381.0], [86.2, 381.0], [86.3, 381.0], [86.4, 381.0], [86.5, 381.0], [86.6, 381.0], [86.7, 381.0], [86.8, 382.0], [86.9, 382.0], [87.0, 382.0], [87.1, 382.0], [87.2, 382.0], [87.3, 382.0], [87.4, 382.0], [87.5, 383.0], [87.6, 383.0], [87.7, 383.0], [87.8, 383.0], [87.9, 383.0], [88.0, 383.0], [88.1, 383.0], [88.2, 383.0], [88.3, 384.0], [88.4, 384.0], [88.5, 384.0], [88.6, 384.0], [88.7, 384.0], [88.8, 384.0], [88.9, 384.0], [89.0, 385.0], [89.1, 385.0], [89.2, 385.0], [89.3, 385.0], [89.4, 385.0], [89.5, 385.0], [89.6, 385.0], [89.7, 386.0], [89.8, 386.0], [89.9, 386.0], [90.0, 386.0], [90.1, 386.0], [90.2, 386.0], [90.3, 386.0], [90.4, 386.0], [90.5, 386.0], [90.6, 387.0], [90.7, 387.0], [90.8, 387.0], [90.9, 387.0], [91.0, 387.0], [91.1, 387.0], [91.2, 387.0], [91.3, 387.0], [91.4, 388.0], [91.5, 388.0], [91.6, 388.0], [91.7, 388.0], [91.8, 388.0], [91.9, 388.0], [92.0, 388.0], [92.1, 389.0], [92.2, 389.0], [92.3, 389.0], [92.4, 389.0], [92.5, 389.0], [92.6, 389.0], [92.7, 389.0], [92.8, 389.0], [92.9, 389.0], [93.0, 390.0], [93.1, 390.0], [93.2, 390.0], [93.3, 390.0], [93.4, 390.0], [93.5, 390.0], [93.6, 390.0], [93.7, 390.0], [93.8, 391.0], [93.9, 391.0], [94.0, 391.0], [94.1, 391.0], [94.2, 391.0], [94.3, 391.0], [94.4, 392.0], [94.5, 392.0], [94.6, 392.0], [94.7, 392.0], [94.8, 392.0], [94.9, 392.0], [95.0, 392.0], [95.1, 392.0], [95.2, 393.0], [95.3, 393.0], [95.4, 393.0], [95.5, 393.0], [95.6, 393.0], [95.7, 393.0], [95.8, 393.0], [95.9, 393.0], [96.0, 394.0], [96.1, 394.0], [96.2, 394.0], [96.3, 394.0], [96.4, 394.0], [96.5, 394.0], [96.6, 394.0], [96.7, 394.0], [96.8, 395.0], [96.9, 395.0], [97.0, 395.0], [97.1, 395.0], [97.2, 395.0], [97.3, 395.0], [97.4, 395.0], [97.5, 395.0], [97.6, 396.0], [97.7, 396.0], [97.8, 396.0], [97.9, 396.0], [98.0, 396.0], [98.1, 396.0], [98.2, 397.0], [98.3, 397.0], [98.4, 397.0], [98.5, 397.0], [98.6, 398.0], [98.7, 398.0], [98.8, 398.0], [98.9, 398.0], [99.0, 399.0], [99.1, 399.0], [99.2, 399.0], [99.3, 400.0], [99.4, 401.0], [99.5, 402.0], [99.6, 403.0], [99.7, 404.0], [99.8, 406.0], [99.9, 411.0]], "isOverall": false, "label": "HTTP Request - enroll", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 14413.0, "series": [{"data": [[2200.0, 1.0], [2400.0, 2.0], [300.0, 14413.0], [200.0, 468.0], [400.0, 116.0]], "isOverall": false, "label": "HTTP Request - enroll", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 3.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 14997.0, "series": [{"data": [[0.0, 14997.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 3.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 2.9914712153518126, "minX": 1.7414661E12, "maxY": 3.0, "series": [{"data": [[1.74146688E12, 3.0], [1.7414676E12, 3.0], [1.74146628E12, 3.0], [1.7414673E12, 3.0], [1.74146658E12, 3.0], [1.741467E12, 3.0], [1.7414667E12, 3.0], [1.74146622E12, 3.0], [1.74146652E12, 3.0], [1.74146772E12, 3.0], [1.74146742E12, 3.0], [1.74146712E12, 3.0], [1.74146682E12, 3.0], [1.7414661E12, 3.0], [1.7414664E12, 3.0], [1.74146784E12, 2.9914712153518126], [1.74146754E12, 3.0], [1.74146634E12, 3.0], [1.74146724E12, 3.0], [1.74146694E12, 3.0], [1.74146664E12, 3.0], [1.74146766E12, 3.0], [1.74146736E12, 3.0], [1.74146706E12, 3.0], [1.74146676E12, 3.0], [1.74146616E12, 3.0], [1.74146646E12, 3.0], [1.74146778E12, 3.0], [1.74146748E12, 3.0], [1.74146718E12, 3.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74146784E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 340.0, "minX": 1.0, "maxY": 371.5, "series": [{"data": [[2.0, 371.5], [1.0, 340.0], [3.0, 349.77815563112506]], "isOverall": false, "label": "HTTP Request - enroll", "isController": false}, {"data": [[2.9997333333333334, 349.7803999999988]], "isOverall": false, "label": "HTTP Request - enroll-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 3.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1562.1666666666667, "minX": 1.7414661E12, "maxY": 27970.766666666666, "series": [{"data": [[1.74146688E12, 26727.65], [1.7414676E12, 25950.6], [1.74146628E12, 27659.833333333332], [1.7414673E12, 26106.05], [1.74146658E12, 26572.15], [1.741467E12, 26934.483333333334], [1.7414667E12, 27038.683333333334], [1.74146622E12, 27504.6], [1.74146652E12, 27504.683333333334], [1.74146772E12, 25173.783333333333], [1.74146742E12, 26106.0], [1.74146712E12, 26883.233333333334], [1.74146682E12, 27038.766666666666], [1.7414661E12, 5335.083333333333], [1.7414664E12, 27349.066666666666], [1.74146784E12, 24293.066666666666], [1.74146754E12, 26054.4], [1.74146634E12, 27660.4], [1.74146724E12, 26572.15], [1.74146694E12, 27038.183333333334], [1.74146664E12, 26934.85], [1.74146766E12, 26416.833333333332], [1.74146736E12, 26572.216666666667], [1.74146706E12, 26675.833333333332], [1.74146676E12, 27193.866666666665], [1.74146616E12, 27970.766666666666], [1.74146646E12, 26883.2], [1.74146778E12, 24552.133333333335], [1.74146748E12, 26468.95], [1.74146718E12, 25795.383333333335]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.74146688E12, 7825.733333333334], [1.7414676E12, 7598.433333333333], [1.74146628E12, 8098.866666666667], [1.7414673E12, 7643.866666666667], [1.74146658E12, 7780.366666666667], [1.741467E12, 7886.666666666667], [1.7414667E12, 7916.866666666667], [1.74146622E12, 8053.366666666667], [1.74146652E12, 8053.366666666667], [1.74146772E12, 7370.933333333333], [1.74146742E12, 7643.933333333333], [1.74146712E12, 7871.366666666667], [1.74146682E12, 7917.0], [1.7414661E12, 1562.1666666666667], [1.7414664E12, 8007.866666666667], [1.74146784E12, 7113.1], [1.74146754E12, 7628.833333333333], [1.74146634E12, 8098.933333333333], [1.74146724E12, 7780.5], [1.74146694E12, 7916.933333333333], [1.74146664E12, 7886.666666666667], [1.74146766E12, 7734.933333333333], [1.74146736E12, 7780.433333333333], [1.74146706E12, 7810.833333333333], [1.74146676E12, 7962.5], [1.74146616E12, 8189.933333333333], [1.74146646E12, 7871.433333333333], [1.74146778E12, 7189.0], [1.74146748E12, 7750.033333333334], [1.74146718E12, 7552.933333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74146784E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 332.36851851851856, "minX": 1.7414661E12, "maxY": 391.8932038834953, "series": [{"data": [[1.74146688E12, 347.8546511627907], [1.7414676E12, 358.6007984031933], [1.74146628E12, 336.9719101123595], [1.7414673E12, 355.4107142857145], [1.74146658E12, 349.4522417153996], [1.741467E12, 345.81153846153825], [1.7414667E12, 345.28544061302676], [1.74146622E12, 337.57250470809777], [1.74146652E12, 339.27118644067747], [1.74146772E12, 369.8724279835391], [1.74146742E12, 355.5317460317458], [1.74146712E12, 346.3622350674373], [1.74146682E12, 345.0593869731796], [1.7414661E12, 391.8932038834953], [1.7414664E12, 341.5075757575758], [1.74146784E12, 370.43070362473316], [1.74146754E12, 358.2226640159045], [1.74146634E12, 336.35393258426956], [1.74146724E12, 350.674463937622], [1.74146694E12, 343.68582375478957], [1.74146664E12, 344.9134615384616], [1.74146766E12, 352.6000000000007], [1.74146736E12, 352.39376218323565], [1.74146706E12, 349.5611650485438], [1.74146676E12, 342.1561904761904], [1.74146616E12, 332.36851851851856], [1.74146646E12, 345.22543352601167], [1.74146778E12, 378.8755274261602], [1.74146748E12, 352.046966731898], [1.74146718E12, 360.76305220883546]], "isOverall": false, "label": "HTTP Request - enroll", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74146784E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 332.3388888888893, "minX": 1.7414661E12, "maxY": 391.7961165048544, "series": [{"data": [[1.74146688E12, 347.8488372093027], [1.7414676E12, 358.5928143712577], [1.74146628E12, 336.9588014981271], [1.7414673E12, 355.4047619047615], [1.74146658E12, 349.4463937621832], [1.741467E12, 345.80769230769215], [1.7414667E12, 345.27969348658974], [1.74146622E12, 337.5612052730699], [1.74146652E12, 339.2598870056497], [1.74146772E12, 369.8683127572015], [1.74146742E12, 355.5277777777779], [1.74146712E12, 346.35452793834304], [1.74146682E12, 345.0498084291191], [1.7414661E12, 391.7961165048544], [1.7414664E12, 341.49810606060606], [1.74146784E12, 370.4285714285711], [1.74146754E12, 358.22067594433366], [1.74146634E12, 336.3426966292134], [1.74146724E12, 350.666666666667], [1.74146694E12, 343.6839080459774], [1.74146664E12, 344.9096153846153], [1.74146766E12, 352.58823529411774], [1.74146736E12, 352.3918128654973], [1.74146706E12, 349.5553398058254], [1.74146676E12, 342.15428571428566], [1.74146616E12, 332.3388888888893], [1.74146646E12, 345.22350674373814], [1.74146778E12, 378.8755274261602], [1.74146748E12, 352.04305283757304], [1.74146718E12, 360.75301204819317]], "isOverall": false, "label": "HTTP Request - enroll", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74146784E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.015238095238095247, "minX": 1.7414661E12, "maxY": 5.456310679611652, "series": [{"data": [[1.74146688E12, 0.01937984496124031], [1.7414676E12, 0.01796407185628742], [1.74146628E12, 0.020599250936329565], [1.7414673E12, 0.017857142857142853], [1.74146658E12, 0.017543859649122803], [1.741467E12, 0.017307692307692298], [1.7414667E12, 0.017241379310344817], [1.74146622E12, 0.02259887005649719], [1.74146652E12, 0.016949152542372874], [1.74146772E12, 0.016460905349794247], [1.74146742E12, 0.01785714285714285], [1.74146712E12, 0.015414258188824671], [1.74146682E12, 0.01915708812260537], [1.7414661E12, 5.456310679611652], [1.7414664E12, 0.017045454545454537], [1.74146784E12, 0.01705756929637527], [1.74146754E12, 0.01789264413518886], [1.74146634E12, 0.016853932584269652], [1.74146724E12, 0.015594541910331394], [1.74146694E12, 0.015325670498084299], [1.74146664E12, 0.017307692307692298], [1.74146766E12, 0.01764705882352941], [1.74146736E12, 0.0175438596491228], [1.74146706E12, 0.017475728155339796], [1.74146676E12, 0.015238095238095247], [1.74146616E12, 0.05925925925925931], [1.74146646E12, 0.026974951830443163], [1.74146778E12, 0.016877637130801693], [1.74146748E12, 0.015655577299412925], [1.74146718E12, 0.02008032128514056]], "isOverall": false, "label": "HTTP Request - enroll", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74146784E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 241.0, "minX": 1.7414661E12, "maxY": 2461.0, "series": [{"data": [[1.74146688E12, 419.0], [1.7414676E12, 403.0], [1.74146628E12, 401.0], [1.7414673E12, 409.0], [1.74146658E12, 388.0], [1.741467E12, 407.0], [1.7414667E12, 436.0], [1.74146622E12, 381.0], [1.74146652E12, 401.0], [1.74146772E12, 409.0], [1.74146742E12, 421.0], [1.74146712E12, 404.0], [1.74146682E12, 398.0], [1.7414661E12, 2461.0], [1.7414664E12, 411.0], [1.74146784E12, 407.0], [1.74146754E12, 403.0], [1.74146634E12, 385.0], [1.74146724E12, 399.0], [1.74146694E12, 387.0], [1.74146664E12, 395.0], [1.74146766E12, 397.0], [1.74146736E12, 394.0], [1.74146706E12, 423.0], [1.74146676E12, 389.0], [1.74146616E12, 397.0], [1.74146646E12, 389.0], [1.74146778E12, 406.0], [1.74146748E12, 412.0], [1.74146718E12, 396.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.74146688E12, 382.0], [1.7414676E12, 394.0], [1.74146628E12, 372.0], [1.7414673E12, 389.0], [1.74146658E12, 379.0], [1.741467E12, 381.0], [1.7414667E12, 379.0], [1.74146622E12, 371.8], [1.74146652E12, 375.0], [1.74146772E12, 396.0], [1.74146742E12, 391.5], [1.74146712E12, 383.0], [1.74146682E12, 379.7], [1.7414661E12, 366.0], [1.7414664E12, 375.0], [1.74146784E12, 399.0], [1.74146754E12, 393.0], [1.74146634E12, 372.0], [1.74146724E12, 387.0], [1.74146694E12, 382.0], [1.74146664E12, 379.0], [1.74146766E12, 372.0], [1.74146736E12, 389.0], [1.74146706E12, 384.0], [1.74146676E12, 377.0], [1.74146616E12, 369.0], [1.74146646E12, 376.0], [1.74146778E12, 399.0], [1.74146748E12, 388.8], [1.74146718E12, 389.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.74146688E12, 384.0], [1.7414676E12, 399.0], [1.74146628E12, 380.0], [1.7414673E12, 398.0], [1.74146658E12, 385.86], [1.741467E12, 387.0], [1.7414667E12, 391.30999999999995], [1.74146622E12, 376.0], [1.74146652E12, 388.67999999999995], [1.74146772E12, 405.0], [1.74146742E12, 396.95], [1.74146712E12, 388.79999999999995], [1.74146682E12, 384.0], [1.7414661E12, 2459.16], [1.7414664E12, 378.71000000000004], [1.74146784E12, 406.0], [1.74146754E12, 402.0], [1.74146634E12, 377.65], [1.74146724E12, 392.86], [1.74146694E12, 385.77], [1.74146664E12, 383.0], [1.74146766E12, 396.89], [1.74146736E12, 392.0], [1.74146706E12, 393.0], [1.74146676E12, 384.0], [1.74146616E12, 377.0], [1.74146646E12, 380.0], [1.74146778E12, 405.0], [1.74146748E12, 394.0], [1.74146718E12, 391.01]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.74146688E12, 383.0], [1.7414676E12, 395.0], [1.74146628E12, 375.0], [1.7414673E12, 391.0], [1.74146658E12, 379.0], [1.741467E12, 385.0], [1.7414667E12, 380.84999999999997], [1.74146622E12, 374.0], [1.74146652E12, 377.0], [1.74146772E12, 398.0], [1.74146742E12, 393.0], [1.74146712E12, 386.0], [1.74146682E12, 381.0], [1.7414661E12, 378.4], [1.7414664E12, 376.0], [1.74146784E12, 403.0], [1.74146754E12, 394.0], [1.74146634E12, 374.0], [1.74146724E12, 388.0], [1.74146694E12, 384.0], [1.74146664E12, 381.0], [1.74146766E12, 394.0], [1.74146736E12, 390.29999999999995], [1.74146706E12, 385.0], [1.74146676E12, 382.0], [1.74146616E12, 371.0], [1.74146646E12, 378.0], [1.74146778E12, 400.0], [1.74146748E12, 392.0], [1.74146718E12, 390.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.74146688E12, 259.0], [1.7414676E12, 272.0], [1.74146628E12, 246.0], [1.7414673E12, 266.0], [1.74146658E12, 254.0], [1.741467E12, 263.0], [1.7414667E12, 260.0], [1.74146622E12, 254.0], [1.74146652E12, 253.0], [1.74146772E12, 274.0], [1.74146742E12, 268.0], [1.74146712E12, 263.0], [1.74146682E12, 263.0], [1.7414661E12, 267.0], [1.7414664E12, 244.0], [1.74146784E12, 266.0], [1.74146754E12, 263.0], [1.74146634E12, 256.0], [1.74146724E12, 266.0], [1.74146694E12, 261.0], [1.74146664E12, 251.0], [1.74146766E12, 273.0], [1.74146736E12, 269.0], [1.74146706E12, 261.0], [1.74146676E12, 264.0], [1.74146616E12, 241.0], [1.74146646E12, 256.0], [1.74146778E12, 275.0], [1.74146748E12, 268.0], [1.74146718E12, 264.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.74146688E12, 341.0], [1.7414676E12, 352.0], [1.74146628E12, 331.0], [1.7414673E12, 347.0], [1.74146658E12, 337.0], [1.741467E12, 340.0], [1.7414667E12, 339.0], [1.74146622E12, 330.0], [1.74146652E12, 334.0], [1.74146772E12, 365.5], [1.74146742E12, 348.0], [1.74146712E12, 343.0], [1.74146682E12, 339.0], [1.7414661E12, 330.0], [1.7414664E12, 334.0], [1.74146784E12, 370.0], [1.74146754E12, 350.0], [1.74146634E12, 332.0], [1.74146724E12, 345.0], [1.74146694E12, 340.0], [1.74146664E12, 337.0], [1.74146766E12, 350.0], [1.74146736E12, 347.0], [1.74146706E12, 344.0], [1.74146676E12, 338.0], [1.74146616E12, 329.0], [1.74146646E12, 337.0], [1.74146778E12, 389.0], [1.74146748E12, 348.0], [1.74146718E12, 355.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74146784E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 325.0, "minX": 6.0, "maxY": 380.0, "series": [{"data": [[8.0, 346.0], [9.0, 344.0], [10.0, 330.5], [11.0, 336.0], [6.0, 380.0], [12.0, 325.0], [7.0, 346.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 12.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 325.0, "minX": 6.0, "maxY": 380.0, "series": [{"data": [[8.0, 346.0], [9.0, 344.0], [10.0, 330.5], [11.0, 336.0], [6.0, 380.0], [12.0, 325.0], [7.0, 346.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 12.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.7666666666666666, "minX": 1.7414661E12, "maxY": 9.0, "series": [{"data": [[1.74146688E12, 8.6], [1.7414676E12, 8.35], [1.74146628E12, 8.9], [1.7414673E12, 8.4], [1.74146658E12, 8.55], [1.741467E12, 8.666666666666666], [1.7414667E12, 8.7], [1.74146622E12, 8.85], [1.74146652E12, 8.85], [1.74146772E12, 8.1], [1.74146742E12, 8.4], [1.74146712E12, 8.65], [1.74146682E12, 8.7], [1.7414661E12, 1.7666666666666666], [1.7414664E12, 8.75], [1.74146784E12, 7.766666666666667], [1.74146754E12, 8.383333333333333], [1.74146634E12, 8.9], [1.74146724E12, 8.55], [1.74146694E12, 8.7], [1.74146664E12, 8.666666666666666], [1.74146766E12, 8.5], [1.74146736E12, 8.55], [1.74146706E12, 8.583333333333334], [1.74146676E12, 8.75], [1.74146616E12, 9.0], [1.74146646E12, 8.7], [1.74146778E12, 7.9], [1.74146748E12, 8.516666666666667], [1.74146718E12, 8.3]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74146784E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.7166666666666666, "minX": 1.7414661E12, "maxY": 9.0, "series": [{"data": [[1.74146688E12, 8.6], [1.7414676E12, 8.35], [1.74146628E12, 8.9], [1.7414673E12, 8.4], [1.74146658E12, 8.55], [1.741467E12, 8.666666666666666], [1.7414667E12, 8.7], [1.74146622E12, 8.85], [1.74146652E12, 8.85], [1.74146772E12, 8.1], [1.74146742E12, 8.4], [1.74146712E12, 8.65], [1.74146682E12, 8.7], [1.7414661E12, 1.7166666666666666], [1.7414664E12, 8.8], [1.74146784E12, 7.816666666666666], [1.74146754E12, 8.383333333333333], [1.74146634E12, 8.9], [1.74146724E12, 8.55], [1.74146694E12, 8.7], [1.74146664E12, 8.666666666666666], [1.74146766E12, 8.5], [1.74146736E12, 8.55], [1.74146706E12, 8.583333333333334], [1.74146676E12, 8.75], [1.74146616E12, 9.0], [1.74146646E12, 8.65], [1.74146778E12, 7.9], [1.74146748E12, 8.516666666666667], [1.74146718E12, 8.3]], "isOverall": false, "label": "201", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74146784E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.7166666666666666, "minX": 1.7414661E12, "maxY": 9.0, "series": [{"data": [[1.74146688E12, 8.6], [1.7414676E12, 8.35], [1.74146628E12, 8.9], [1.7414673E12, 8.4], [1.74146658E12, 8.55], [1.741467E12, 8.666666666666666], [1.7414667E12, 8.7], [1.74146622E12, 8.85], [1.74146652E12, 8.85], [1.74146772E12, 8.1], [1.74146742E12, 8.4], [1.74146712E12, 8.65], [1.74146682E12, 8.7], [1.7414661E12, 1.7166666666666666], [1.7414664E12, 8.8], [1.74146784E12, 7.816666666666666], [1.74146754E12, 8.383333333333333], [1.74146634E12, 8.9], [1.74146724E12, 8.55], [1.74146694E12, 8.7], [1.74146664E12, 8.666666666666666], [1.74146766E12, 8.5], [1.74146736E12, 8.55], [1.74146706E12, 8.583333333333334], [1.74146676E12, 8.75], [1.74146616E12, 9.0], [1.74146646E12, 8.65], [1.74146778E12, 7.9], [1.74146748E12, 8.516666666666667], [1.74146718E12, 8.3]], "isOverall": false, "label": "HTTP Request - enroll-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74146784E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.7166666666666666, "minX": 1.7414661E12, "maxY": 9.0, "series": [{"data": [[1.74146688E12, 8.6], [1.7414676E12, 8.35], [1.74146628E12, 8.9], [1.7414673E12, 8.4], [1.74146658E12, 8.55], [1.741467E12, 8.666666666666666], [1.7414667E12, 8.7], [1.74146622E12, 8.85], [1.74146652E12, 8.85], [1.74146772E12, 8.1], [1.74146742E12, 8.4], [1.74146712E12, 8.65], [1.74146682E12, 8.7], [1.7414661E12, 1.7166666666666666], [1.7414664E12, 8.8], [1.74146784E12, 7.816666666666666], [1.74146754E12, 8.383333333333333], [1.74146634E12, 8.9], [1.74146724E12, 8.55], [1.74146694E12, 8.7], [1.74146664E12, 8.666666666666666], [1.74146766E12, 8.5], [1.74146736E12, 8.55], [1.74146706E12, 8.583333333333334], [1.74146676E12, 8.75], [1.74146616E12, 9.0], [1.74146646E12, 8.65], [1.74146778E12, 7.9], [1.74146748E12, 8.516666666666667], [1.74146718E12, 8.3]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74146784E12, "title": "Total Transactions Per Second"}},
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

