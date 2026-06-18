
import * as p_ from 'pareto-core/dist/implementation/transformer'

const p_decide_state = <State, B>($: State,  assign: ($: State) => B) => assign($)
const p_decide_optional = <State, B>($: State,  assign: ($: State) => B,  otherwise: () => B) => assign($)
import p_change_context from 'pareto-core/dist/implementation/specials/change_context'

import _p_text_from_list from 'pareto-core/dist/implementation/specials/text_from_list'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/fs_unrestricted_make_directory/signatures/transformers/astn_sealed_target"

import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as v_primitives_to_text from "liana-core/dist/implementation/manual/transformers/primitives/text"

import * as v_external_path from "../../fs_unrestricted_path/transformers/astn_sealed_target"

export const Parameters: t_signatures.Parameters = ($) => ['group', ['verbose', p_.literal.dictionary(
    {
        "delete existing": p_change_context(
            $['delete existing'],
            ($) => ['text', {
                'delimiter': ['none', null],
                'value': v_primitives_to_text.true_false(
                    $,
                ),
            }],
        ),
        "path": p_change_context(
            $['path'],
            ($) => v_external_path.Node_Path(
                $,
            ),
        ),
    },
)]]

export const Error: t_signatures.Error = ($) => ['group', ['verbose', p_.literal.dictionary(
    {
        "path": p_change_context(
            $['path'],
            ($) => v_external_path.Node_Path(
                $,
            ),
        ),
        "type": p_change_context(
            $['type'],
            ($) => ['state', p_decide_state(
                $,
                ($): t_out.Value.state => {
                    switch ($[0]) {
                        case 'directory already exists':
                            return p_.ss(
                                $,
                                ($) => ({
                                    'option': 'directory already exists',
                                    'value': ['nothing', null],
                                }),
                            )
                        case 'permission denied':
                            return p_.ss(
                                $,
                                ($) => ({
                                    'option': 'permission denied',
                                    'value': ['nothing', null],
                                }),
                            )
                        default:
                            return p_.au(
                                $[0],
                            )
                    }
                },
            )],
        ),
    },
)]]
