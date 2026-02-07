
import * as _p from 'pareto-core/dist/expression'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/write_file/boilerplate_for_migrate"

import * as t_out from "../../../../../../interface/generated/liana/schemas/write_file/data"

import * as v_path from "../../path/transformers/boilerplate_for_migrate"

import * as v_list_of_characters from "../../list_of_characters/transformers/boilerplate_for_migrate"

export const Parameters: t_signatures.Parameters = ($) => ({
    'path': _p_change_context(
        $['path'],
        ($) => v_path.Node_Path(
            $,
        ),
    ),
    'data': _p_change_context(
        $['data'],
        ($) => v_list_of_characters.List_of_Characters(
            $,
        ),
    ),
})

export const Error: t_signatures.Error = ($) => _p.decide.state(
    $,
    ($): t_out.Error => {
        switch ($[0]) {
            case 'permission denied':
                return _p.ss(
                    $,
                    ($) => ['permission denied', null],
                )
            default:
                return _p.au(
                    $[0],
                )
        }
    },
)
