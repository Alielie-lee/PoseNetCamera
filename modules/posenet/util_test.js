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
 * =============================================================================
 */
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("./util");
describe('util', function () {
    describe('toValidInputResolution', function () {
        it('returns an odd value', function () {
            expect(util_1.toValidInputResolution(1920, 8) % 2).toEqual(1);
            expect(util_1.toValidInputResolution(1280, 16) % 2).toEqual(1);
            expect(util_1.toValidInputResolution(719, 16) % 2).toEqual(1);
            expect(util_1.toValidInputResolution(545, 16) % 2).toEqual(1);
            expect(util_1.toValidInputResolution(225, 8) % 2).toEqual(1);
            expect(util_1.toValidInputResolution(240, 8) % 2).toEqual(1);
        });
        it('returns the original value when already a valid resolution', function () {
            var outputStride = 16;
            var validResolution = util_1.toValidInputResolution(1000, outputStride);
            var resolution = util_1.toValidInputResolution(validResolution, outputStride);
            expect(resolution).toEqual(validResolution);
        });
        it('succeeds when 1-resolution is divisible by the output stride', function () {
            var outputStride = 8;
            var inputResolution = 562;
            var resolution = util_1.toValidInputResolution(inputResolution, outputStride);
            expect((resolution - 1) % outputStride).toEqual(0);
        });
    });
    describe('assertValidResolution', function () {
        it('throws when 1 - resolution is not divisible by output stride', function () {
            expect(function () {
                util_1.assertValidResolution([
                    util_1.toValidInputResolution(16 * 5, 16) + 1,
                    util_1.toValidInputResolution(16 * 5, 16)
                ], 16);
            }).toThrow();
        });
        it('doesnt throw when 1-resolution is divisible by output stride', function () {
            expect(function () {
                util_1.assertValidResolution([
                    util_1.toValidInputResolution(16 * 10, 16),
                    util_1.toValidInputResolution(16 * 5 + 20, 16)
                ], 16);
            }).not.toThrow();
            expect(function () {
                util_1.assertValidResolution([
                    util_1.toValidInputResolution(20 * 5, 32),
                    util_1.toValidInputResolution(5 * 30 + 20, 32)
                ], 32);
            }).not.toThrow();
        });
    });
});
//# sourceMappingURL=util_test.js.map