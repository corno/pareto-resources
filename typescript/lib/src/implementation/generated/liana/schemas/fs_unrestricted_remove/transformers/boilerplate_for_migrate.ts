
import * as p_ from 'pareto-core/dist/implementation/transformer'

const p_decide_state = <State, B>($: State,  assign: ($: State) => B) => assign($)
const p_decide_optional = <State, B>($: State,  assign: ($: State) => B,  otherwise: () => B) => assign($)
import p_change_context from 'pareto-core/dist/implementation/refiner/specials/change_context'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/fs_unrestricted_remove/signatures/transformers/boilerplate_for_migrate"

import * as t_out from "../../../../../../interface/generated/liana/schemas/fs_unrestricted_remove/data"

import * as v_path from "../../fs_unrestricted_path/transformers/boilerplate_for_migrate"

export const Parameters: t_signatures.Parameters = ($) => ({
    'path': p_change_context(
        $['path'],
        ($) => v_path.Context_Path(
            $,
        ),
    ),
    'error if not exists': p_change_context(
        $['error if not exists'],
        ($) => $,
    ),
})

export const Error: t_signatures.Error = ($) => ({
    'path': p_change_context(
        $['path'],
        ($) => v_path.Context_Path(
            $,
        ),
    ),
    'type': p_change_context(
        $['type'],
        ($) => p_decide_state(
            $,
            ($): t_out.Error.type_ => {
                switch ($[0]) {
                    case 'node does not exist':
                        return p_.ss(
                            $,
                            ($) => ['node does not exist', null],
                        )
                    case 'permission denied':
                        return p_.ss(
                            $,
                            ($) => ['permission denied', null],
                        )
                    default:
                        return p_.au(
                            $[0],
                        )
                }
            },
        ),
    ),
})
