// Copyright (c) 2020 domeic dangelo All rights reserved
//
// Created by: domenic dangelo
// Created on: feb 2025
// This file contains the JS functions for index.html

'use strict'

/**
 * This function checks if the user has selected the random number from above.
 */
// eslint-disable-next-line no-unused-vars
function calculate() {
  // input
  const isPositive = document.getElementById("option-positive").checked
  const inputOption1 = Math.floor(Math.random() * 6) + 1
  const inputOption2 = -1 * (Math.floor(Math.random() * 6) + 1)

  // process
  if (isPositive === true) {
    // output
    document.getElementById("result").innerHTML =
      "<p>The random positive number is: " + inputOption1 + "</p>"
  }
  else {
    document.getElementById("result").innerHTML =
      "<p>The random negative number is: " + inputOption2 + "</p>"
  }
}
