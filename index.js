'use strict'

const supportBindOperator = require('sbo')
const values = require('values-array')

module.exports = supportBindOperator(c => values(c).reverse()[0])
