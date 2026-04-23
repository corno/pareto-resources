
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/make_directory/signatures/transformers/boilerplate_for_migrate"

import * as t_out from "../../../../../../interface/generated/liana/schemas/make_directory/data"

import * as v_path from "../../path/transformers/boilerplate_for_migrate"

export const Parameters: t_signatures.Parameters = ($) => ({
    'delete existing': _p_change_context(
        $['delete existing'],
        ($) => $,
    ),
    'path': _p_change_context(
        $['path'],
        ($) => v_path.Node_Path(
            $,
        ),
    ),
})

export const Error: t_signatures.Error = ($) => ({
    'path': _p_change_context(
        $['path'],
        ($) => v_path.Node_Path(
            $,
        ),
    ),
    'type': _p_change_context(
        $['type'],
        ($) => _p.decide.state(
            $,
            ($): t_out.Error.type_ => {
                switch ($[0]) {
                    case 'directory already exists':
                        return _p.ss(
                            $,
                            ($) => ['directory already exists', null],
                        )
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
        ),
    ),
})
