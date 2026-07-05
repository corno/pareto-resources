import * as p_ from 'pareto-core/implementation/query'

import * as interface_ from "../../../interface/signatures/execute_sandboxed.js"

//dependencies


export const $$: interface_.queries.query_executable = p_.query_function(
    ($d, $s, $q) => $q.unrestricted(
        {
            'program': $s.program,
            'args': $d.args,
            'working directory': $d['working directory']
        },
        ($) => $,
    )
)