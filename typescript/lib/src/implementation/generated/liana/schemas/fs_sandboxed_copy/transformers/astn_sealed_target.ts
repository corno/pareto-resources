
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import _p_text_from_list from 'pareto-core/dist/_p_text_from_list'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/fs_sandboxed_copy/signatures/transformers/astn_sealed_target"

import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as v_primitives_to_text from "liana-core/dist/implementation/manual/transformers/primitives/text"

import * as v_external_path from "../../fs_sandboxed_path/transformers/astn_sealed_target"

import * as v_external_unrestricted from "../../fs_unrestricted_copy/transformers/astn_sealed_target"

export const Parameters: t_signatures.Parameters = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        "source": _p_change_context(
            $['source'],
            ($) => v_external_path.Node_Path(
                $,
            ),
        ),
        "target": _p_change_context(
            $['target'],
            ($) => v_external_path.Node_Path(
                $,
            ),
        ),
        "options": _p_change_context(
            $['options'],
            ($) => ['group', ['verbose', _p.dictionary.literal(
                {
                    "recursive": _p_change_context(
                        $['recursive'],
                        ($) => ['text', {
                            'delimiter': ['none', null],
                            'value': v_primitives_to_text.true_false(
                                $,
                            ),
                        }],
                    ),
                    "force": _p_change_context(
                        $['force'],
                        ($) => ['text', {
                            'delimiter': ['none', null],
                            'value': v_primitives_to_text.true_false(
                                $,
                            ),
                        }],
                    ),
                    "errorOnExist": _p_change_context(
                        $['errorOnExist'],
                        ($) => ['text', {
                            'delimiter': ['none', null],
                            'value': v_primitives_to_text.true_false(
                                $,
                            ),
                        }],
                    ),
                },
            )]],
        ),
    },
)]]

export const Error: t_signatures.Error = ($) => v_external_unrestricted.Error(
    $,
)
