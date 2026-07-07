import * as p_ from 'pareto-core/implementation/query'

import * as interface_ from "../../../interface/queries.js"

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