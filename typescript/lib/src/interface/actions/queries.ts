import * as p_ from 'pareto-core/interface/query_action'

import type * as d_execute_unrestricted_query_executable from "../generated/liana/schemas/execute_unrestricted_query_executable/data.js"
import type * as d_execute_sandboxed_query_executable from "../generated/liana/schemas/execute_sandboxed_query_executable/data.js"

export namespace execute_unrestricted {


    export type query_executable = p_.Query_Action<d_execute_unrestricted_query_executable.Result, d_execute_unrestricted_query_executable.Error, d_execute_unrestricted_query_executable.Parameters>

}

export namespace execute_sandboxed {


    export type query_executable = p_.Query_Action<d_execute_sandboxed_query_executable.Result, d_execute_sandboxed_query_executable.Error, d_execute_sandboxed_query_executable.Parameters>

}