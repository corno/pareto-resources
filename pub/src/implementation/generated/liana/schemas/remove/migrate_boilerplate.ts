
import * as _p from "pareto-core/dist/transformer"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/remove/migrate_boilerplate"

import * as t_out from "../../../../../interface/generated/liana/schemas/remove/data"

import * as v_path from "../path/migrate_boilerplate"
export const Parameters: t_signatures.Parameters = ($) => ({
    'path': _p.deprecated_cc(
        $['path'], 
        ($) => v_path.Node_Path(
            $
        )
    ),
    'error if not exists': _p.deprecated_cc(
        $['error if not exists'], 
        ($) => $
    ),
})
export const Error: t_signatures.Error = ($) => _p.decide.state(
    $, 
    ($): t_out.Error => {
        switch ($[0]) {
            case 'node does not exist':
                return _p.ss(
                    $, 
                    ($) => ['node does not exist', null]
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
