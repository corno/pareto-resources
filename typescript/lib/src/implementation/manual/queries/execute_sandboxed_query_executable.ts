import * as p_ from 'pareto-core/implementation/query'

import type * as interface_ from "../../../interface/declarations/queries.js"

//dependencies


export const $$: interface_.query_executable = p_.query(
    ($d, $s, $q) => $q.unrestricted(
        {
            'program': $s.program,
            'args': $d.args,
            'working directory': $d['working directory']
        },
        ($) => $,
    )
)