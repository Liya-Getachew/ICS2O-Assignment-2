// Copyright (c) 2022 liya getachew All rights reserved
//
// Created by: liya getachew
// Created on: Oct 15 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates the perimeter of a square.
 */
function calculateClicked() {
  // input
  const side = parseInt(document.getElementById('side-length').value)

  // process
  const perimeter = side * 4

  // output
  document.getElementById('perimeter').innerHTML = '<p>Perimeter = ' + perimeter + ' cm.'
}