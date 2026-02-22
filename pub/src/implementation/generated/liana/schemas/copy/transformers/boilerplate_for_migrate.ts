
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/copy/boilerplate_for_migrate"

import * as t_out from "../../../../../../interface/generated/liana/schemas/copy/data"

import * as v_path from "../../path/transformers/boilerplate_for_migrate"

export const Parameters: t_signatures.Parameters = ($) => ({
    'source': _p_change_context(
        $['source'],
        ($) => v_path.Node_Path(
            $,
        ),
    ),
    'target': _p_change_context(
        $['target'],
        ($) => v_path.Node_Path(
            $,
        ),
    ),
    'options': _p_change_context(
        $['options'],
        ($) => ({
            'recursive': _p_change_context(
                $['recursive'],
                ($) => $,
            ),
            'force': _p_change_context(
                $['force'],
                ($) => $,
            ),
            'errorOnExist': _p_change_context(
                $['errorOnExist'],
                ($) => $,
            ),
        }),
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
                    case 'source does not exist':
                        return _p.ss(
                            $,
                            ($) => ['source does not exist', null],
                        )
                    case 'node is not a file':
                        return _p.ss(
                            $,
                            ($) => ['node is not a file', null],
                        )
                    case 'permission denied':
                        return _p.ss(
                            $,
                            ($) => ['permission denied', null],
                        )
                    case 'file too large':
                        return _p.ss(
                            $,
                            ($) => ['file too large', null],
                        )
                    case 'device not ready':
                        return _p.ss(
                            $,
                            ($) => ['device not ready', null],
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
