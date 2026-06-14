import * as pt from 'pareto-core/dist/query'

import * as signatures from "../../../interface/signatures/execute_sandboxed"

//dependencies


export const $$: signatures.queries.query_executable = pt.query_function(
    ($d, $s, $q) => $q.unrestricted(
        {
            'program': $s.program,
            'args': $d.args,
            'working directory': $d['working directory']
        },
        ($) => $,
    )
)