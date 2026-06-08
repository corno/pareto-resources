#!/usr/bin/env node

import * as _p from 'pareto-core/dist/assign'
import _p_log_debug_message from 'pareto-core-dev/dist/log_debug_message'
import _ from 'pareto-core-dev/dist/log_debug_message'
import _p_implement_me from 'pareto-core-dev/dist/implement_me'

import * as r_non_normalized_path from "lib/dist/implementation/manual/refiners/path non_normalized/text"

import * as r_node_path from "lib/dist/implementation/manual/refiners/path_unrestricted/non_normalized_path"

_p_log_debug_message("BEGIN", () => {})

const x = r_non_normalized_path.Non_Normalized_Path("/a//b/../c/./d")

_p_log_debug_message(`leading slash: ${x['leading slash']}`, () => { })
x.segments.__l_map(($) => {
    _p_log_debug_message(`segment: ${$[0]}`, () => { })
})
_p_log_debug_message(`trailing slash: ${x['trailing slash']}`, () => { })


//

const $ = r_node_path.Node_Path(
    x,
    ($) =>{
         _p_log_debug_message(`error: ${$[0]}`, () => { })
         return _p_implement_me("SDFSDF")
    },
    {
        'pedantic': true,
    },
)

_p.decide.state($.context.start, ($) => {
    switch ($[0]) {
        case 'absolute': return _p.ss($, ($) => _p_log_debug_message("abs", () => {}))
        case 'relative': return _p.ss($, ($) => _p_log_debug_message(`rel up steps: ${$['up steps']}`, () => {}))
        default: return _p.au($[0])
    }
})


_p_log_debug_message("END", () => {})

