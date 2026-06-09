import * as _p from 'pareto-core/dist/query'

import * as signatures from "../../../interface/signatures/execute_sandboxed"

//dependencies


export const $$: signatures.queries.query_executable = _p.query_function(
    ($p, $qr, $x) => $qr.unrestricted(
        {
            'program': $x.program,
            'args': $p.args,
            'working directory': $p['working directory']
        },
        ($) => $,
    )
)