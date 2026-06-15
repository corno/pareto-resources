import * as p_ from 'pareto-core/dist/implementation/query'

import * as signatures from "../../../interface/signatures/execute_sandboxed"

//dependencies


export const $$: signatures.queries.query_executable = p_.query_function(
    ($d, $s, $q) => $q.unrestricted(
        {
            'program': $s.program,
            'args': $d.args,
            'working directory': $d['working directory']
        },
        ($) => $,
    )
)