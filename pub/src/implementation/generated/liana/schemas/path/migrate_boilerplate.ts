
import * as _p from "pareto-core/dist/transformer"

import {
    _p_unreachable_code_path,
} from "pareto-core/dist/unreachable_code_path"

import {
    _p_cc,
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/path/migrate_boilerplate"

import * as t_out from "../../../../../interface/generated/liana/schemas/path/data"

export const Up_Steps: t_signatures.Up_Steps = ($) => $

export const Start: t_signatures.Start = ($) => _p.decide.state(
    $,
    ($): t_out.Start => {
        switch ($[0]) {
            case 'absolute':
                return _p.ss(
                    $,
                    ($) => ['absolute', null]
                )
            case 'relative':
                return _p.ss(
                    $,
                    ($) => ['relative', ({
                        'up steps': _p_cc(
                            $['up steps'],
                            ($) => Up_Steps(
                                $
                            )
                        ),
                    })]
                )
            default:
                return _p.au(
                    $[0]
                )
        }
    }
)

export const Context_Subpath: t_signatures.Context_Subpath = ($) => $.__l_map(
    ($) => $
)

export const Context_Path: t_signatures.Context_Path = ($) => ({
    'start': _p_cc(
        $['start'],
        ($) => Start(
            $
        )
    ),
    'subpath': _p_cc(
        $['subpath'],
        ($) => Context_Subpath(
            $
        )
    ),
})

export const Node_Path: t_signatures.Node_Path = ($) => ({
    'context': _p_cc(
        $['context'],
        ($) => Context_Path(
            $
        )
    ),
    'node': _p_cc(
        $['node'],
        ($) => $
    ),
})

export const Non_Normalized_Path: t_signatures.Non_Normalized_Path = ($) => ({
    'leading slash': _p_cc(
        $['leading slash'],
        ($) => $
    ),
    'segments': _p_cc(
        $['segments'],
        ($) => $.__l_map(
            ($) => _p.decide.state(
                $,
                ($): t_out.Non_Normalized_Path.segments.L => {
                    switch ($[0]) {
                        case 'parent':
                            return _p.ss(
                                $,
                                ($) => ['parent', null]
                            )
                        case 'child':
                            return _p.ss(
                                $,
                                ($) => ['child', $]
                            )
                        case 'current':
                            return _p.ss(
                                $,
                                ($) => ['current', null]
                            )
                        case 'nothing':
                            return _p.ss(
                                $,
                                ($) => ['nothing', null]
                            )
                        default:
                            return _p.au(
                                $[0]
                            )
                    }
                }
            )
        )
    ),
    'trailing slash': _p_cc(
        $['trailing slash'],
        ($) => $
    ),
})
