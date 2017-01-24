/**
 * Copyright 2017 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {CSS} from '../../../build/amp-star-rating-0.1.css';
import {isExperimentOn} from '../../../src/experiments';
import {user} from '../../../src/log';

/** @const */
const EXPERIMENT = 'amp-star-rating';

/** @const */
const TAG = 'amp-star-rating';

class AmpStarRating extends AMP.BaseElement {

  /** @param {!AmpElement} element */
  constructor(element) {
    super(element);

    // Declare instance variables with type annotations.
  }

  /** @override */
  isLayoutSupported(layout) {
    return true;  // TODO - see https://github.com/ampproject/amphtml/blob/master/spec/amp-html-layout.md
  }

  /** @override */
  buildCallback() {
    // user().assert(isExperimentOn(this.win, EXPERIMENT),
    //     `Experiment ${EXPERIMENT} is disabled.`);
    if (!isExperimentOn(this.getWin(), EXPERIMENT)) {
      user().error(`Experiment ${EXPERIMENT} is not turned on.`
          + `Check https://cdn.ampproject.org/experiments.html or `
          + `run this in the console: AMP.toggleExperiment('${EXPERIMENT}', true)`);
      return;
    }

    // Get attributes with this.element.getAttribute().
    // Assert validity of values.
    // Assign instance variables.
    /** @private @const {number} */
    this.stars_ = parseInt(this.element.getAttribute('count')) || 5;

    // Build lightweight DOM and append to this.element.
    const stars = this.element.ownerDocument.createElement('div');
    stars.setAttribute('class', 'rating');
    for (let i = 0; i < this.stars_; i++) stars.innerHTML += '<span>☆</span>';
    this.element.appendChild(stars);
  }

}

AMP.registerElement('amp-star-rating', AmpStarRating, CSS);
