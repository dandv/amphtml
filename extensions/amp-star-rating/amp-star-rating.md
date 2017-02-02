<!---
Copyright 2017 The AMP HTML Authors. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS-IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
-->

# <a name="amp-star-rating"></a> `amp-star-rating`

<table>
  <tr>
    <td width="40%"><strong>Description</strong></td>
    <td>Star rating control with configurable number of stars.</td>
  </tr>
  <tr>
    <td width="40%"><strong>Availability</strong></td>
    <td>Experimental</td>
  </tr>
  <tr>
    <td width="40%"><strong>Required Script</strong></td>
    <td><code>&lt;script async custom-element="amp-star-rating" src="https://cdn.ampproject.org/v0/amp-star-rating-0.1.js">&lt;/script></code></td>
  </tr>
  <tr>
    <td class="col-fourty"><strong><a href="https://www.ampproject.org/docs/guides/responsive/control_layout.html">Supported Layouts</a></strong></td>
    <td>TODO</td>
  </tr>
  <tr>
    <td width="40%"><strong>Examples</strong></td>
    <td><a href="../examples/star-rating.js">Basic example</a></td>
  </tr>
</table>

## Behavior

The `amp-star-rating` component ...

## TODO
* disable mouse selection
* set pointer cursor

## Features

* Touch and mouse (pointer) friendly
* Customizable number of stars
* Half-stars
* Configurable tooltips
* Optional animated feedback on selection
* After click and the selection "sticking", mousing over it shows the new potential selection

### Non-goals

* RTL support
* ?? Dragging on mobile, because the finger covers the rating

## Attributes

* worstRating and bestRating, thus named to match the [schema.org Rating type](https://schema.org/Rating). They default to 1, and 5, respectively.
