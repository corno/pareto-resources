
import * as _p from "pareto-core/dist/serializer"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/execute_query_executable_and_catch/serialize"

import * as v_serialize from "astn-core/dist/implementation/manual/schemas/sealed_target/serializers"

import * as v_marshall from "./marshall"

export const Parameters: t_signatures.Parameters = ($) => v_serialize.Document(
    v_marshall.Parameters(
        $
    )
)

export const Error: t_signatures.Error = ($) => v_serialize.Document(
    v_marshall.Error(
        $
    )
)

export const Result: t_signatures.Result = ($) => v_serialize.Document(
    v_marshall.Result(
        $
    )
)
