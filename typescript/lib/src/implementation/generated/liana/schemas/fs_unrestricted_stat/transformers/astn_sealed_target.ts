
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/implementation/specials/change_context'

import _p_text_from_list from 'pareto-core/dist/implementation/specials/text_from_list'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/fs_unrestricted_stat/signatures/transformers/astn_sealed_target"

import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as v_primitives_to_text from "liana-core/dist/implementation/manual/transformers/primitives/text"

import * as v_external_path from "../../fs_unrestricted_path/transformers/astn_sealed_target"

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
                        case 'node does not exist':
                            return _p.ss(
                                $,
                                ($) => ({
                                    'option': 'node does not exist',
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

export const Result: t_signatures.Result = ($) => Node_Type(
    $,
)

export const Node_Type: t_signatures.Node_Type = ($) => ['state', _p.decide.state(
    $,
    ($): t_out.Value.state => {
        switch ($[0]) {
            case 'file':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'file',
                        'value': ['nothing', null],
                    }),
                )
            case 'directory':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'directory',
                        'value': ['nothing', null],
                    }),
                )
            default:
                return _p.au(
                    $[0],
                )
        }
    },
)]
