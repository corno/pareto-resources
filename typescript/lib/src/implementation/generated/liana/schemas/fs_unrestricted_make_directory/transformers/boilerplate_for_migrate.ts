
import * as p_ from 'pareto-core/dist/implementation/transformer'

import p_change_context from 'pareto-core/dist/implementation/refiner/specials/change_context'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/fs_unrestricted_make_directory/signatures/transformers/boilerplate_for_migrate"

import * as t_out from "../../../../../../interface/generated/liana/schemas/fs_unrestricted_make_directory/data"

import * as v_path from "../../fs_unrestricted_path/transformers/boilerplate_for_migrate"

const p_decide_state = <State, B>($: State,  assign: ($: State) => B) => assign($)

export const Parameters: t_signatures.Parameters = ($) => ({
    'delete existing': p_change_context(
        $['delete existing'],
        ($) => $,
    ),
    'path': p_change_context(
        $['path'],
        ($) => v_path.Node_Path(
            $,
        ),
    ),
})

export const Error: t_signatures.Error = ($) => ({
    'path': p_change_context(
        $['path'],
        ($) => v_path.Node_Path(
            $,
        ),
    ),
    'type': p_change_context(
        $['type'],
        ($) => p_decide_state(
            $,
            ($): t_out.Error.type_ => {
                switch ($[0]) {
                    case 'directory already exists':
                        return p_.option(
                            $,
                            ($) => ['directory already exists', null],
                        )
                    case 'permission denied':
                        return p_.option(
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
