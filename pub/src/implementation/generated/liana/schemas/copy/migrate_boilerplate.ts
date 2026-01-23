
import * as _p from "pareto-core/dist/transformer"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/copy/migrate_boilerplate"

import * as t_out from "../../../../../interface/generated/liana/schemas/copy/data"

import * as v_path from "../path/migrate_boilerplate"
export const Parameters: t_signatures.Parameters = ($) => ({
    'source': _p.deprecated_cc($['source'], ($) => v_path.Node_Path(
        $
    )),
    'target': _p.deprecated_cc($['target'], ($) => v_path.Node_Path(
        $
    )),
    'options': _p.deprecated_cc($['options'], ($) => ({
        'recursive': _p.deprecated_cc($['recursive'], ($) => $.__o_map(($) => $)),
        'force': _p.deprecated_cc($['force'], ($) => $.__o_map(($) => $)),
        'errorOnExist': _p.deprecated_cc($['errorOnExist'], ($) => $.__o_map(($) => $)),
    })),
})
export const Error: t_signatures.Error = ($) => _p.deprecated_cc($, ($): t_out.Error => {
    switch ($[0]) {
        case 'source does not exist': return _p.ss($, ($) => ['source does not exist', null])
        case 'node is not a file': return _p.ss($, ($) => ['node is not a file', null])
        case 'permission denied': return _p.ss($, ($) => ['permission denied', null])
        case 'file too large': return _p.ss($, ($) => ['file too large', null])
        case 'device not ready': return _p.ss($, ($) => ['device not ready', null])
        default: return _p.au($[0])
    }
})
