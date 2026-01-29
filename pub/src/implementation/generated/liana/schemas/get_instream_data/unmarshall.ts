
import * as _p from "pareto-core/dist/refiner"

import {
    _p_cc,
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/get_instream_data/unmarshall"

import * as t_out from "../../../../../interface/generated/liana/schemas/get_instream_data/data"

import * as v_deserialize_number from "liana-core/dist/implementation/manual/primitives/integer/deserializers/decimal"

import * as v_deserialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/deserializers/true_false"

import * as v_unmarshalled_from_parse_tree from "astn-core/dist/implementation/manual/schemas/unmarshalled/refiners/parse_tree"

import * as v_parse_tree_to_location from "astn-core/dist/implementation/manual/schemas/parse_tree/transformers/location"

export const Parameters: t_signatures.Parameters = ($, abort) => v_unmarshalled_from_parse_tree.Nothing(
    $,
    ($) => abort(
        ['expected a nothing', null]
    )
)

export const Result: t_signatures.Result = ($, abort) => v_unmarshalled_from_parse_tree.Text(
    $,
    ($) => abort(
        ['expected a text', null]
    )
)
