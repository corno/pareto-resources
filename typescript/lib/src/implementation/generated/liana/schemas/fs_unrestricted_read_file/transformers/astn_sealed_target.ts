
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/implementation/specials/change_context'

import _p_text_from_list from 'pareto-core/dist/implementation/specials/text_from_list'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/fs_unrestricted_read_file/signatures/transformers/astn_sealed_target"

import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as v_primitives_to_text from "liana-core/dist/implementation/manual/transformers/primitives/text"

import * as v_external_path from "../../fs_unrestricted_path/transformers/astn_sealed_target"

import * as v_external_list_of_characters from "../../list_of_characters/transformers/astn_sealed_target"

export const Parameters: t_signatures.Parameters = ($) => v_external_path.Node_Path(
    $,
)

export const Error: t_signatures.Error = ($) => ['group', ['verbose', _p.literal.dictionary(
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
                        case 'file does not exist':
                            return _p.ss(
                                $,
                                ($) => ({
                                    'option': 'file does not exist',
                                    'value': ['nothing', null],
                                }),
                            )
                        case 'node is not a file':
                            return _p.ss(
                                $,
                                ($) => ({
                                    'option': 'node is not a file',
                                    'value': ['nothing', null],
                                }),
                            )
                        case 'permission denied':
                            return _p.ss(
                                $,
                                ($) => ({
                                    'option': 'permission denied',
                                    'value': ['nothing', null],
                                }),
                            )
                        case 'file too large':
                            return _p.ss(
                                $,
                                ($) => ({
                                    'option': 'file too large',
                                    'value': ['nothing', null],
                                }),
                            )
                        case 'device not ready':
                            return _p.ss(
                                $,
                                ($) => ({
                                    'option': 'device not ready',
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

export const Result: t_signatures.Result = ($) => v_external_list_of_characters.List_of_Characters(
    $,
)
