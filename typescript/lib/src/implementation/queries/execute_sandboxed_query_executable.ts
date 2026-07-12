import * as p_ from 'pareto-core/implementation/query'

import type * as query_interfaces from "../../interface/queries.js"

//dependencies


export const $$: p_.Query_Implementation<
    query_interfaces.execute_sandboxed.query_executable,
    {
        'program': string,
    },
    {
        'unrestricted': query_interfaces.execute_unrestricted.query_executable,
    }
> = p_.query(
    ($d, $s, $q) => $q.unrestricted(
        {
            'program': $s.program,
            'args': $d.args,
            'working directory': $d['working directory']
        },
        ($) => $,
    )
)