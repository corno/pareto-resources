
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/implementation/specials/change_context'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/path_non_normalized/signatures/transformers/boilerplate_for_migrate"

import * as t_out from "../../../../../../interface/generated/liana/schemas/path_non_normalized/data"

export const Non_Normalized_Path: t_signatures.Non_Normalized_Path = ($) => ({
    'leading slash': _p_change_context(
        $['leading slash'],
        ($) => $,
    ),
    'segments': _p_change_context(
        $['segments'],
        ($) => _p.list.from.list(
            $,
        ).map(
            ($) => _p.decide.state(
                $,
                ($): t_out.Non_Normalized_Path.segments.L => {
                    switch ($[0]) {
                        case 'parent':
                            return _p.ss(
                                $,
                                ($) => ['parent', null],
                            )
                        case 'child':
                            return _p.ss(
                                $,
                                ($) => ['child', $],
                            )
                        case 'current':
                            return _p.ss(
                                $,
                                ($) => ['current', null],
                            )
                        case 'nothing':
                            return _p.ss(
                                $,
                                ($) => ['nothing', null],
                            )
                        default:
                            return _p.au(
                                $[0],
                            )
                    }
                },
            ),
        ),
    ),
    'trailing slash': _p_change_context(
        $['trailing slash'],
        ($) => $,
    ),
})
