
import * as _p from "pareto-core/dist/serializer"

import {
    _p_unreachable_code_path,
} from "pareto-core/dist/unreachable_code_path"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/log/serialize"

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
