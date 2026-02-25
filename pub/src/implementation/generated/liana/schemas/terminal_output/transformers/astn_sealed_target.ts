
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import _p_text_from_list from 'pareto-core/dist/_p_text_from_list'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/terminal_output/signatures/transformers/astn_sealed_target"

import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as v_primitives_to_text from "liana-core/dist/implementation/manual/transformers/primitives/text"

export const Message: t_signatures.Message = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        "lines": _p_change_context(
            $['lines'],
            ($) => ['list', _p.list.from.list(
                $,
            ).map(
                ($) => ['text', {
                    'delimiter': ['quote', null],
                    'value': $,
                }],
            )],
        ),
        "raw": _p_change_context(
            $['raw'],
            ($) => ['text', {
                'delimiter': ['quote', null],
                'value': $,
            }],
        ),
    },
)]]
