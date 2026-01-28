
import * as _p from "pareto-core/dist/transformer"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/make_directory/migrate_boilerplate"

import * as t_out from "../../../../../interface/generated/liana/schemas/make_directory/data"

import * as v_path from "../path/migrate_boilerplate"
export const Parameters: t_signatures.Parameters = ($) => v_path.Node_Path(
    $
)
export const Error: t_signatures.Error = ($) => _p.decide.state(
    $, 
    ($): t_out.Error => {
        switch ($[0]) {
            case 'directory already exists':
                return _p.ss(
                    $, 
                    ($) => ['directory already exists', null]
                )
            case 'permission denied':
                return _p.ss(
                    $, 
                    ($) => ['permission denied', null]
                )
            default:
                return _p.au(
                    $[0]
                )
        }
    }
)
