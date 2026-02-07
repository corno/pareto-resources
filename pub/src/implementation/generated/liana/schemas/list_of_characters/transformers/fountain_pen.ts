
import * as _p from 'pareto-core/dist/assign'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/list_of_characters/serialize"

import * as v_serialize from "astn-core/dist/implementation/manual/schemas/sealed_target/transformers/fountain_pen"

import * as v_marshall from "./astn_sealed_target"

export const List_of_Characters: t_signatures.List_of_Characters = ($) => v_serialize.Document(
    v_marshall.List_of_Characters(
        $,
    ),
)
