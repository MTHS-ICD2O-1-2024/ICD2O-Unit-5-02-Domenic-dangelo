// Copyright (c) 2020 domeic dangelo All rights reserved
//
// Created by: domenic dangelo
// Created on: feb 2025
// This file contains the JS functions for index.html

'use strict'

const inputOption1 = Math.floor(Math.random() * 6) + 1
const inputOption2 = Math.floor(Math.random() * -6) + 1

/**
 * This function checks if the user has selected the random number from above.
 */
// eslint-disable-next-line no-unused-vars
function calculate() {
  // input
  const userInput = parseInt(document.getElementById("kind-of-number").checked)

  // process
  if(userInput === 1) {
    //output
    document.getElementById('result').innerHTML =
      '<p>The random number is:' + inputOption1 + '</p>'
  }
  else (userInput === 2); {
    //output
    document.getElementById('result').innerHTML =
      '<p>The random number is:' + inputOption2 + '</p>'
  }
}
