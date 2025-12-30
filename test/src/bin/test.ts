#!/usr/bin/env node

import * as _pt from 'pareto-core-transformer'
import * as _pdev from 'pareto-core-dev'
import * as _pinternals from 'pareto-core-internals'

import * as r_non_normalized_path from "pub/dist/implementation/deserializers/schemas/non_normalized_path"

import * as r_node_path from "pub/dist/implementation/refiners/schemas/node_path/non_normalized_path"

_pdev.log_debug_message("BEGIN", () => {})

const x = r_non_normalized_path.Non_Normalized_Path("/a//b/../c/./d")
_pdev.log_debug_message(`leading slash: ${x['leading slash']}`, () => { })
x.segments.__for_each(($) => {
    _pdev.log_debug_message(`segment: ${$[0]}`, () => { })
})
_pdev.log_debug_message(`trailing slash: ${x['trailing slash']}`, () => { })


//

const $ = r_node_path.Node_Path(
    x,
    {
        'pedantic': true,
    },
    ($) => {
        _pinternals.panic(`aborting due to error: ${$[0]}`)
    }
)

_pt.cc($.context.start, ($) => {
    switch ($[0]) {
        case 'absolute': return _pt.ss($, ($) => _pdev.log_debug_message(`abs`, () => {}))
        case 'relative': return _pt.ss($, ($) => _pdev.log_debug_message(`rel up steps: ${$['up steps']}`, () => {}))
        default: return _pt.au($[0])
    }
})


_pdev.log_debug_message("END", () => {})

