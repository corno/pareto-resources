
import * as p_ from 'pareto-core/dist/implementation/transformer'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/path_non_normalized/signatures/transformers/fountain_pen"

import * as v_serialize from "astn-core/dist/implementation/manual/transformers/sealed_target/fountain_pen"

import * as v_marshall from "./astn_sealed_target"

export const Non_Normalized_Path: t_signatures.Non_Normalized_Path = ($) => v_serialize.Document(
    v_marshall.Non_Normalized_Path(
        $,
    ),
)
