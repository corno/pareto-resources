#!/usr/bin/env node

import * as _pt from 'pareto-core/dist/assign'

// import * as r_non_normalized_path from "pub/dist/implementation/manual/schemas/non_normalized_path/deserializers"

// import * as r_node_path from "pub/dist/implementation/manual/schemas/node_path/refiners/non_normalized_path"

// _pdev.log_debug_message("BEGIN", () => {})

// const x = r_non_normalized_path.Non_Normalized_Path("/a//b/../c/./d")
// _pdev.log_debug_message(`leading slash: ${x['leading slash']}`, () => { })
// x.segments.__for_each(($) => {
//     _pdev.log_debug_message(`segment: ${$[0]}`, () => { })
// })
// _pdev.log_debug_message(`trailing slash: ${x['trailing slash']}`, () => { })


// //

// const $ = r_node_path.Node_Path(
//     x,
//     ($) => _pinternals.panic(`aborting due to error: ${$[0]}`),
//     {
//         'pedantic': true,
//     },
// )

// _pt.decide.state($.context.start, ($) => {
//     switch ($[0]) {
//         case 'absolute': return _pt.ss($, ($) => _pdev.log_debug_message("abs", () => {}))
//         case 'relative': return _pt.ss($, ($) => _pdev.log_debug_message(`rel up steps: ${$['up steps']}`, () => {}))
//         default: return _pt.au($[0])
//     }
// })


// _pdev.log_debug_message("END", () => {})

