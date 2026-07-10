import * as p_ from 'pareto-core/interface/query_interface'

import type * as d_execute_unrestricted_query_executable from "./data/execute_unrestricted_query_executable.js"
import type * as d_execute_sandboxed_query_executable from "./data/execute_sandboxed_query_executable.js"

export namespace execute_unrestricted {


    export type query_executable = p_.Query_Interface<
        d_execute_unrestricted_query_executable.Result,
        d_execute_unrestricted_query_executable.Error,
        d_execute_unrestricted_query_executable.Parameters
    >

}

export namespace execute_sandboxed {


    export type query_executable = p_.Query_Interface<
        d_execute_sandboxed_query_executable.Result,
        d_execute_sandboxed_query_executable.Error,
        d_execute_sandboxed_query_executable.Parameters
    >

}