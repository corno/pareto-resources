
import * as _p from "pareto-core/dist/transformer"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/terminal_output/migrate_boilerplate"

import * as t_out from "../../../../../interface/generated/liana/schemas/terminal_output/data"
export const Message: t_signatures.Message = ($) => ({
    'lines': _p.deprecated_cc(
        $['lines'], 
        ($) => $.__l_map(
            ($) => $
        )
    ),
    'raw': _p.deprecated_cc(
        $['raw'], 
        ($) => $
    ),
})
