#!/usr/bin/env node

import * as p_ from 'pareto-core/dist/implementation/transformer'
import p_log_debug_message from 'pareto-core-dev/dist/log_debug_message'
import p_implement_me from 'pareto-core-dev/dist/implement_me'

import * as r_non_normalized_path from "lib/dist/implementation/manual/refiners/path non_normalized/text"

import * as r_node_path from "lib/dist/implementation/manual/refiners/path_unrestricted/non_normalized_path"

p_log_debug_message("BEGIN", () => {})

const x = r_non_normalized_path.Non_Normalized_Path("/a//b/../c/./d")

p_log_debug_message(`leading slash: ${x['leading slash']}`, () => { })
p_.from.list(x.segments).map(($) => {
    p_log_debug_message(`segment: ${$[0]}`, () => { })
    return null
})
p_log_debug_message(`trailing slash: ${x['trailing slash']}`, () => { })


//

const $ = r_node_path.Node_Path(
    x,
    ($) =>{
         p_log_debug_message(`error: ${$[0]}`, () => { })
         return p_implement_me("SDFSDF")
    },
    {
        'pedantic': true,
    },
)

p_.from.state($.context.start).decide(($): null => {
    switch ($[0]) {
        case 'absolute': return p_.ss($, ($) => {
            p_log_debug_message("abs", () => {})
            return null
        })
        case 'relative': return p_.ss($, ($) => {
            p_log_debug_message(`rel up steps: ${$['up steps']}`, () => {})
            return null
        })
        default: return p_.au($[0])
    }
})


p_log_debug_message("END", () => {})

