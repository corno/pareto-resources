
import * as _p from 'pareto-core/dist/expression'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/log_error/unmarshall"

import * as t_out from "../../../../../../interface/generated/liana/schemas/log_error/data"

import * as v_deserialize_number from "liana-core/dist/implementation/manual/primitives/integer/deserializers/decimal"

import * as v_deserialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/deserializers/true_false"

import * as v_unmarshalled_from_parse_tree from "astn-core/dist/implementation/manual/schemas/unmarshalled/refiners/parse_tree"

import * as v_parse_tree_to_location from "astn-core/dist/implementation/manual/schemas/parse_tree/transformers/location"

import * as v_external_fountain_pen_multiline from "../../fountain_pen_multiline/refiners/astn_parse_tree"

export const Parameters: t_signatures.Parameters = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null],
        ),
    ),
    ($) => ({
        'message': _p_change_context(
            $.__get_entry_deprecated(
                'message',
                ($) => abort(
                    ['no such entry', "message"],
                ),
            ),
            ($) => v_external_fountain_pen_multiline.Paragraph(
                $,
                ($) => abort(
                    $,
                ),
            ),
        ),
    }),
)

export const Error: t_signatures.Error = ($, abort) => v_unmarshalled_from_parse_tree.Nothing(
    $,
    ($) => abort(
        ['expected a nothing', null],
    ),
)
