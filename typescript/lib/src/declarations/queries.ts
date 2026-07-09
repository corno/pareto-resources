import * as p_ from 'pareto-core/interface/query_implementation'

import type * as query_interfaces from "../interface/queries.js"


export type query_executable = p_.Query_Implementation<
    query_interfaces.execute_sandboxed.query_executable,
    {
        'program': string,
    },
    {
        'unrestricted': query_interfaces.execute_unrestricted.query_executable,
    }
>