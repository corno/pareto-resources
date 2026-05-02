
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import _p_text_from_list from 'pareto-core/dist/_p_text_from_list'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/write_file/signatures/transformers/astn_sealed_target"

import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as v_primitives_to_text from "liana-core/dist/implementation/manual/transformers/primitives/text"

import * as v_external_path from "../../path/transformers/astn_sealed_target"

import * as v_external_list_of_characters from "../../list_of_characters/transformers/astn_sealed_target"

export const Parameters: t_signatures.Parameters = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        "path": _p_change_context(
            $['path'],
            ($) => v_external_path.Node_Path(
                $,
            ),
        ),
        "data": _p_change_context(
            $['data'],
            ($) => v_external_list_of_characters.List_of_Characters(
                $,
            ),
        ),
    },
)]]

export const Error: t_signatures.Error = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        "path": _p_change_context(
            $['path'],
            ($) => v_external_path.Node_Path(
                $,
            ),
        ),
        "type": _p_change_context(
            $['type'],
            ($) => ['state', _p.decide.state(
                $,
                ($): t_out.Value.state => {
                    switch ($[0]) {
                        case 'permission denied':
                            return _p.ss(
                                $,
                                ($) => ({
                                    'option': 'permission denied',
                                    'value': ['nothing', null],
                                }),
                            )
                        default:
                            return _p.au(
                                $[0],
                            )
                    }
                },
            )],
        ),
    },
)]]
