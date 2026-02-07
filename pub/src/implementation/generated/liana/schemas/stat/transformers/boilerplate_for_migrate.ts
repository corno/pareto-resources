
import * as _p from 'pareto-core/dist/expression'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/stat/boilerplate_for_migrate"

import * as t_out from "../../../../../../interface/generated/liana/schemas/stat/data"

import * as v_path from "../../path/transformers/boilerplate_for_migrate"

export const Parameters: t_signatures.Parameters = ($) => v_path.Node_Path(
    $,
)

export const Error: t_signatures.Error = ($) => _p.decide.state(
    $,
    ($): t_out.Error => {
        switch ($[0]) {
            case 'node does not exist':
                return _p.ss(
                    $,
                    ($) => ['node does not exist', null],
                )
            default:
                return _p.au(
                    $[0],
                )
        }
    },
)

export const Result: t_signatures.Result = ($) => Node_Type(
    $,
)

export const Node_Type: t_signatures.Node_Type = ($) => _p.decide.state(
    $,
    ($): t_out.Node_Type => {
        switch ($[0]) {
            case 'file':
                return _p.ss(
                    $,
                    ($) => ['file', null],
                )
            case 'directory':
                return _p.ss(
                    $,
                    ($) => ['directory', null],
                )
            default:
                return _p.au(
                    $[0],
                )
        }
    },
)
