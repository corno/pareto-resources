
import type * as p_ from 'pareto-core/interface/transformer'

import type * as d_in from "../../../interface/generated/liana/schemas/execute_sandboxed_query_executable/data.js"
import type * as d_out from "pareto-fountain-pen/interface/generated/liana/schemas/prose/data"



export type Error = p_.Transformer<
    d_in.Error,
    d_out.Phrase
>


