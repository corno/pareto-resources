
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/terminal_output/unmarshall"

import * as t_out from "../../../../../../interface/generated/liana/schemas/terminal_output/data"

import * as v_deserialize_number from "liana-core/dist/implementation/manual/primitives/integer/deserializers/decimal"

import * as v_deserialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/deserializers/true_false"

import * as v_unmarshalled_from_parse_tree from "astn-core/dist/implementation/manual/schemas/unmarshalled/refiners/parse_tree"

import * as v_parse_tree_to_location from "astn-core/dist/implementation/manual/schemas/parse_tree/transformers/location"

import * as v_external_fountain_pen from "../../fountain_pen/refiners/astn_parse_tree"

export const Message: t_signatures.Message = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null],
        ),
    ),
    ($) => ({
        'paragraph': _p_change_context(
            $.__get_entry_deprecated(
                'paragraph',
                ($) => abort(
                    ['no such entry', "paragraph"],
                ),
            ),
            ($) => v_external_fountain_pen.Paragraph(
                $,
                ($) => abort(
                    $,
                ),
            ),
        ),
        'raw': _p_change_context(
            $.__get_entry_deprecated(
                'raw',
                ($) => abort(
                    ['no such entry', "raw"],
                ),
            ),
            ($) => v_unmarshalled_from_parse_tree.Text(
                $,
                ($) => abort(
                    ['expected a text', null],
                ),
            ),
        ),
    }),
)
