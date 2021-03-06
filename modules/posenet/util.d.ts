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
import * as tf from '@tensorflow/tfjs-core';
import { InputResolution, Keypoint, Padding, Pose, PosenetInput, PoseNetOutputStride, TensorBuffer3D, Vector2D } from './types';
export declare function getAdjacentKeyPoints(keypoints: Keypoint[], minConfidence: number): Keypoint[][];
export declare function getBoundingBox(keypoints: Keypoint[]): {
    maxX: number;
    maxY: number;
    minX: number;
    minY: number;
};
export declare function getBoundingBoxPoints(keypoints: Keypoint[]): Vector2D[];
export declare function toTensorBuffers3D(tensors: tf.Tensor3D[]): Promise<TensorBuffer3D[]>;
export declare function scalePose(pose: Pose, scaleY: number, scaleX: number, offsetY?: number, offsetX?: number): Pose;
export declare function scalePoses(poses: Pose[], scaleY: number, scaleX: number, offsetY?: number, offsetX?: number): Pose[];
export declare function flipPoseHorizontal(pose: Pose, imageWidth: number): Pose;
export declare function flipPosesHorizontal(poses: Pose[], imageWidth: number): Pose[];
export declare function toValidInputResolution(inputResolution: number, outputStride: PoseNetOutputStride): number;
export declare function validateInputResolution(inputResolution: InputResolution): void;
export declare function getValidInputResolutionDimensions(inputResolution: InputResolution, outputStride: PoseNetOutputStride): [number, number];
export declare function assertValidOutputStride(outputStride: PoseNetOutputStride): void;
export declare function assertValidResolution(resolution: [number, number], outputStride: number): void;
export declare function getInputTensorDimensions(input: PosenetInput): [number, number];
export declare function toInputTensor(input: PosenetInput): tf.Tensor<tf.Rank.R3>;
export declare function toResizedInputTensor(input: PosenetInput, resizeHeight: number, resizeWidth: number, flipHorizontal: boolean): tf.Tensor3D;
export declare function padAndResizeTo(input: PosenetInput, [targetH, targetW]: [number, number]): {
    resized: tf.Tensor3D;
    padding: Padding;
};
export declare function scaleAndFlipPoses(poses: Pose[], [height, width]: [number, number], [inputResolutionHeight, inputResolutionWidth]: [number, number], padding: Padding, flipHorizontal: boolean): Pose[];
