"use strict";
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tf = require("@tensorflow/tfjs-core");
var argmax2d_1 = require("./argmax2d");
describe('argmax2d', function () {
    it('x = [2, 2, 1]', function () {
        var input = tf.tensor3d([1, 2, 0, 3], [2, 2, 1]);
        var result = argmax2d_1.argmax2d(input);
        var expectedResult = tf.tensor2d([1, 1], [1, 2], 'int32');
        tf.test_util.expectArraysClose(result.dataSync(), expectedResult.dataSync());
    });
    it('x = [3, 3, 1]', function () {
        var input1 = tf.tensor3d([1, 2, 0, 3, 4, -1, 2, 9, 6], [3, 3, 1]);
        var input2 = tf.tensor3d([.5, .2, .9, 4.3, .2, .7, .6, -0.11, 1.4], [3, 3, 1]);
        tf.test_util.expectArraysClose(argmax2d_1.argmax2d(input1).dataSync(), tf.tensor2d([2, 1], [1, 2], 'int32').dataSync());
        tf.test_util.expectArraysClose(argmax2d_1.argmax2d(input2).dataSync(), tf.tensor2d([1, 0], [1, 2], 'int32').dataSync());
    });
    it('x = [3, 3, 3]', function () {
        var input1 = tf.tensor3d([1, 2, 0, 3, 4, -1, 2, 9, 6], [3, 3, 1]);
        var input2 = tf.tensor3d([.5, .2, .9, 4.3, .2, .7, .6, -.11, 1.4], [3, 3, 1]);
        var input3 = tf.tensor3d([4, .2, .8, .1, 6, .6, .3, 11, .6], [3, 3, 1]);
        var input = tf.concat([input1, input2, input3], 2);
        var result = argmax2d_1.argmax2d(input);
        var expectedResult = tf.tensor2d([2, 1, 1, 0, 2, 1], [3, 2], 'int32');
        tf.test_util.expectArraysClose(result.dataSync(), expectedResult.dataSync());
    });
});
//# sourceMappingURL=argmax2d_test.js.map