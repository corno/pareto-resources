
import * as _p from "pareto-core/dist/transformer"

import {
    _p_unreachable_code_path,
} from "pareto-core/dist/unreachable_code_path"

import {
    _p_cc,
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/stat/migrate_boilerplate"

import * as t_out from "../../../../../interface/generated/liana/schemas/stat/data"

import * as v_path from "../path/migrate_boilerplate"

export const Parameters: t_signatures.Parameters = ($) => v_path.Node_Path(
    $
)

export const Error: t_signatures.Error = ($) => _p.decide.state(
    $,
    ($): t_out.Error => {
        switch ($[0]) {
            case 'node does not exist':
                return _p.ss(
                    $,
                    ($) => ['node does not exist', null]
                )
            default:
                return _p.au(
                    $[0]
                )
        }
    }
)

export const Node_Type: t_signatures.Node_Type = ($) => _p.decide.state(
    $,
    ($): t_out.Node_Type => {
        switch ($[0]) {
            case 'file':
                return _p.ss(
                    $,
                    ($) => ['file', null]
                )
            case 'directory':
                return _p.ss(
                    $,
                    ($) => ['directory', null]
                )
            default:
                return _p.au(
                    $[0]
                )
        }
    }
)

export const Result: t_signatures.Result = ($) => Node_Type(
    $
)
