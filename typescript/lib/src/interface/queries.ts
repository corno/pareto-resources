import * as p_ from 'pareto-core/interface/query'

import * as query_actions from "./query_actions.js"


    export type query_executable = p_.Query<
        query_actions.execute_sandboxed.query_executable,
        {
            'program': string,
        },
        {
            'unrestricted': query_actions.execute_unrestricted.query_executable,
        }
    >