import * as p_ from 'pareto-core/interface/query_implementation'

import * as query_actions from "../interface/queries.js"


export type query_executable = p_.Query_Implementation<
    query_actions.execute_sandboxed.query_executable,
    {
        'program': string,
    },
    {
        'unrestricted': query_actions.execute_unrestricted.query_executable,
    }
>